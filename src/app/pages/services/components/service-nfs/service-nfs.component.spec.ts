import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonHarness } from '@angular/material/button/testing';
import { Router } from '@angular/router';
import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator/jest';
import { mockCall, mockWebsocket } from 'app/core/testing/utils/mock-websocket.utils';
import { NfsConfig } from 'app/interfaces/nfs-config.interface';
import { IxCheckboxHarness } from 'app/pages/common/ix-forms/components/ix-checkbox/ix-checkbox.harness';
import { IxFormsModule } from 'app/pages/common/ix-forms/ix-forms.module';
import { FormErrorHandlerService } from 'app/pages/common/ix-forms/services/form-error-handler.service';
import { IxFormHarness } from 'app/pages/common/ix-forms/testing/ix-form.harness';
import { ServiceNfsComponent } from 'app/pages/services/components/service-nfs/service-nfs.component';
import { DialogService, WebSocketService } from 'app/services';
import { IxSlideInService } from 'app/services/ix-slide-in.service';

describe('ServiceNfsComponent', () => {
  let spectator: Spectator<ServiceNfsComponent>;
  let loader: HarnessLoader;
  let ws: WebSocketService;
  const createComponent = createComponentFactory({
    component: ServiceNfsComponent,
    imports: [
      IxFormsModule,
      ReactiveFormsModule,
    ],
    providers: [
      mockWebsocket([
        mockCall('nfs.config', {
          bindip: ['192.168.1.117', '192.168.1.118'],
          v4: true,
          v4_v3owner: false,
          v4_krb: true,
          mountd_port: 123,
          rpcstatd_port: 124,
          rpclockd_port: 124,
          udp: true,
          userd_manage_gids: false,
        } as NfsConfig),
        mockCall('nfs.bindip_choices', {
          '192.168.1.117': '192.168.1.117',
          '192.168.1.118': '192.168.1.118',
          '192.168.1.119': '192.168.1.119',
        }),
        mockCall('nfs.update'),
      ]),
      mockProvider(IxSlideInService),
      mockProvider(FormErrorHandlerService),
      mockProvider(DialogService),
      mockProvider(Router),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    loader = TestbedHarnessEnvironment.loader(spectator.fixture);
    ws = spectator.inject(WebSocketService);
  });

  it('shows current settings for NFS service when form is opened', async () => {
    const form = await loader.getHarness(IxFormHarness);
    const values = await form.getValues();

    expect(ws.call).toHaveBeenCalledWith('nfs.config');
    expect(values).toEqual({
      'Bind IP Addresses': ['192.168.1.117', '192.168.1.118'],
      'Enable NFSv4': true,
      'NFSv3 ownership model for NFSv4': false,
      'Require Kerberos for NFSv4': true,
      'mountd(8) bind port': '123',
      'rpc.lockd(8) bind port': '124',
      'rpc.statd(8) bind port': '124',
      'Serve UDP NFS clients': true,
      'Support >16 groups': false,
    });
  });

  it('sends an update payload to websocket when form is saved', async () => {
    const form = await loader.getHarness(IxFormHarness);
    await form.fillForm({
      'Bind IP Addresses': ['192.168.1.119'],
      'NFSv3 ownership model for NFSv4': false,
      'Serve UDP NFS clients': false,
      'Support >16 groups': true,
      'mountd(8) bind port': 554,
      'rpc.statd(8) bind port': 562,
      'rpc.lockd(8) bind port': 510,
    });

    const saveButton = await loader.getHarness(MatButtonHarness.with({ text: 'Save' }));
    await saveButton.click();

    expect(ws.call).toHaveBeenCalledWith('nfs.update', [{
      bindip: ['192.168.1.119'],
      v4: true,
      v4_v3owner: false,
      v4_krb: true,
      mountd_port: 554,
      rpclockd_port: 510,
      rpcstatd_port: 562,
      udp: false,
      userd_manage_gids: true,
    }]);
  });

  it('disables NFSv3 ownership model when NFSv4 is off', async () => {
    const form = await loader.getHarness(IxFormHarness);
    await form.fillForm({
      'Enable NFSv4': false,
    });

    const controls = await form.getControlHarnessesDict();
    const nfsV3OwnershipControl = controls['NFSv3 ownership model for NFSv4'] as IxCheckboxHarness;
    expect(await nfsV3OwnershipControl.isDisabled()).toBe(true);
  });

  it('disables Support >16 groups when NFSv3 ownership model is on', async () => {
    const form = await loader.getHarness(IxFormHarness);
    await form.fillForm({
      'Enable NFSv4': true,
      'NFSv3 ownership model for NFSv4': true,
    });

    const controls = await form.getControlHarnessesDict();
    const supportMoreThan16GroupsControl = controls['Support >16 groups'] as IxCheckboxHarness;
    expect(await supportMoreThan16GroupsControl.isDisabled()).toBe(true);
  });
});
