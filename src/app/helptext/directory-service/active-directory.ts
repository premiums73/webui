import { Validators } from '@angular/forms';
import { marker as T } from '@biesbjerg/ngx-translate-extract-marker';

export default {
  title: T('Active Directory'),
  activedirectory_custactions_basic_id: 'basic_mode',
  activedirectory_custactions_advanced_id: 'advanced_mode',
  activedirectory_custactions_clearcache_id: 'ds_clearcache',
  activedirectory_custactions_clearcache_name: T('Rebuild Directory Service Cache'),
  activedirectory_custactions_clearcache_dialog_title: T('Active Directory'),
  activedirectory_custactions_clearcache_dialog_message: T('The cache is being rebuilt.'),
  activedirectory_custactions_leave_domain: T('Leave Domain'),

  ad_leave_domain_dialog: {
    message: T('Leaving the domain requires sufficient privileges. Enter your credentials below.'),
    username: T('Username'),
    pw: T('Password'),
    error: T('Error'),
    success: T('Success'),
    success_msg: T('You have left the domain.'),
  },

  ad_section_headers: {
    dc: T('Domain Credentials'),
    advanced_row: T('Advanced Settings'),
    advanced_col1: T(''),
    advanced_col2: T(''),
  },

  activedirectory_domainname_name: 'domainname',
  activedirectory_domainname_placeholder: T('Domain Name'),
  activedirectory_domainname_tooltip: T('Enter the Active Directory domain (<i>example.com</i>)\
 or child domain (<i>sales.example.com</i>).'),
  activedirectory_domainname_validation: [Validators.required],

  activedirectory_bindname_name: 'bindname',
  activedirectory_bindname_placeholder: T('Domain Account Name'),
  activedirectory_bindname_tooltip: T('Enter the Active Directory administrator account name.'),
  activedirectory_bindname_validation: [Validators.required],

  activedirectory_bindpw_name: 'bindpw',
  activedirectory_bindpw_placeholder: T('Domain Account Password'),
  activedirectory_bindpw_tooltip: T('Password for the Active Directory administrator account. \
 Required the first time a domain is configured. After initial configuration, the password \
 is not needed to edit, start, or stop the service.'),

  activedirectory_verbose_logging_name: 'verbose_logging',
  activedirectory_verbose_logging_placeholder: T('Verbose logging'),
  activedirectory_verbose_logging_tooltip: T('Set to log attempts to join the domain to\
 /var/log/messages.'),

  activedirectory_trusted_doms_name: 'allow_trusted_doms',
  activedirectory_trusted_doms_placeholder: T('Allow Trusted Domains'),
  activedirectory_trusted_doms_tooltip: T('When set, usernames do not include a domain name.\
 Unset to force domain names to be prepended to user names. One possible reason for unsetting this value\
 is to prevent username collisions when Allow Trusted Domains is set and there are identical usernames in\
 more than one domain.'),

  activedirectory_default_dom_name: 'use_default_domain',
  activedirectory_default_dom_placeholder: T('Use Default Domain'),
  activedirectory_default_dom_tooltip: T('Unset to prepend the domain name to the username.\
 Unset to prevent name collisions when Allow Trusted Domains is set and multiple domains use the same\
 username.'),

  activedirectory_dns_updates_name: 'allow_dns_updates',
  activedirectory_dns_updates_placeholder: T('Allow DNS updates'),
  activedirectory_dns_updates_tooltip: T('Set to enable Samba to do DNS updates when joining a domain.'),

  activedirectory_disable_fn_cache_name: 'disable_freenas_cache',
  activedirectory_disable_fn_cache_placeholder: T('Disable FreeNAS Cache'),
  activedirectory_disable_fn_cache_tooltip: T('Set to disable caching AD users and groups. This can\
 help when unable to bind to a domain with a large number of users or groups.'),

  restrict_pam: {
    name: 'restrict_pam',
    placeholder: T('Restrict PAM'),
    tooltip: T('Set to restrict SSH access in certain circumstances to only members of \
 BUILTIN\\Administrators'),
  },

  activedirectory_site_name: 'site',
  activedirectory_site_placeholder: T('Site Name'),
  activedirectory_site_tooltip: T('Enter the relative distinguished name of the\
 site object in the Active Directory.'),

  activedirectory_kerberos_realm_name: 'kerberos_realm',
  activedirectory_kerberos_realm_placeholder: T('Kerberos Realm'),
  activedirectory_kerberos_realm_tooltip: T('Select an existing realm that was added \
 in <b>Directory Services > Kerberos Realms</b>.'),

  activedirectory_kerberos_principal_name: 'kerberos_principal',
  activedirectory_kerberos_principal_placeholder: T('Kerberos Principal'),
  activedirectory_kerberos_principal_tooltip: T('Select the location of the principal in the \
 keytab created in <b>Directory Services > Kerberos Keytabs</b>.'),

  computer_account_OU_name: T('createcomputer'),
  computer_account_OU_placeholder: T('Computer Account OU'),
  computer_account_OU_tooltip: T('The OU in which new computer accounts are created. \
 The OU string is read from top to bottom without RDNs. Slashes ("/") are used as \
 delimiters, like <samp>Computers/Servers/NAS</samp>. The backslash ("\\") is \
 used to escape characters but not as a separator. Backslashes are interpreted at \
 multiple levels and might require doubling or even quadrupling to take effect. \
 When this field is blank, new computer accounts are created in the Active Directory \
 default OU.'),

  activedirectory_timeout_name: 'timeout',
  activedirectory_timeout_placeholder: T('AD Timeout'),
  activedirectory_timeout_tooltip: T('Number of seconds before timeout. To view the AD \
 connection status, open the interface <i>Task Manager</i>.'),

  activedirectory_dns_timeout_name: 'dns_timeout',
  activedirectory_dns_timeout_placeholder: T('DNS Timeout'),
  activedirectory_dns_timeout_tooltip: T('Number of seconds before a timeout. Increase this\
 value if AD DNS queries time out.'),

  activedirectory_idmap_backend_name: 'idmap_backend',
  activedirectory_idmap_backend_placeholder: T('Idmap backend'),
  activedirectory_idmap_backend_tooltip: T('Choose the backend to map Windows security\
 identifiers (SIDs) to UNIX UIDs and GIDs. Click Edit to configure that backend.'),

  activedirectory_nss_info_name: 'nss_info',
  activedirectory_nss_info_placeholder: T('Winbind NSS Info'),
  activedirectory_nss_info_tooltip: T('Choose the schema to use when querying AD for\
 user/group info. <i>rfc2307</i> uses the schema support included in Windows 2003 R2, <i>sfu</i> is for\
 Service For Unix 3.0 or 3.5, and <i>sfu20</i> is for Service For Unix 2.0.'),

  activedirectory_enable_name: 'enable',
  activedirectory_enable_placeholder: T('Enable (requires password or Kerberos principal)'),
  activedirectory_enable_tooltip: T('Enable the Active Directory service.\
 The first time this option is set, the Domain Account Password must be entered.'),

  activedirectory_netbiosname_a_name: 'netbiosname',
  activedirectory_netbiosname_a_placeholder: T('Netbios Name'),
  activedirectory_netbiosname_a_tooltip: T('Netbios Name of this NAS. This name must differ from\
 the <i>Workgroup</i> name and be no greater than 15 characters.'),
  activedirectory_netbiosname_a_validation: [Validators.required, Validators.maxLength(15)],

  activedirectory_netbiosname_b_name: 'netbiosname_b',
  activedirectory_netbiosname_b_placeholder: T('Netbios Name (TrueNAS Controller 2)'),
  activedirectory_netbiosname_b_tooltip: T('Netbios Name of this NAS. This name must differ from\
 the <i>Workgroup</i> name and be no greater than 15 characters.'),
  activedirectory_netbiosname_b_validation: [Validators.required, Validators.maxLength(15)],

  activedirectory_netbiosalias_name: 'netbiosalias',
  activedirectory_netbiosalias_placeholder: T('NetBIOS alias'),
  activedirectory_netbiosalias_tooltip: T('Alternative names that SMB clients can use when\
 connecting to this NAS. Can be no greater than 15 characters.'),

  activedirectory_advanced_fields: [
    'verbose_logging',
    'unix_extensions',
    'allow_trusted_doms',
    'use_default_domain',
    'allow_dns_updates',
    'disable_freenas_cache',
    'restrict_pam',
    'site',
    'dcname',
    'gcname',
    'kerberos_realm',
    'kerberos_principal',
    'createcomputer',
    'timeout',
    'dns_timeout',
    'idmap_backend',
    'nss_info',
    'netbiosname',
    'netbiosname_b',
    'netbiosalias',
  ],
};
