// Google Analytics
// Home, Index, Glossary pages
// UI-Materials components
// Versions for JOD Dists
// Versions for JOD Utils&Apps
// Versions for John Services
// Versions for Tools
// Versions Dropdown



const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

function configDocPlugin_JODDists(distCode, distUrl) {
  return [
    '@docusaurus/plugin-content-docs',
    {
      id: 'references_jod_dist_' + distCode,
      path: '3_references/2_jod_dists/' + distCode,
      routeBasePath: 'references/jod_dists/' + distUrl,
      sidebarPath: require.resolve('./sidebars/jod_dists_sidebars.js'),
    },
  ];
}
function configDocPlugin_JohnService(srvCode, srvUrl) {
  return [
    '@docusaurus/plugin-content-docs',
    {
      id: 'references_john_srv_' + srvCode.substr(srvCode.indexOf('_')),
      path: '3_references/4_jsl_services/' + srvCode,
      routeBasePath: 'references/jsl_services/' + srvUrl,
      sidebarPath: require.resolve('./sidebars/jsl_services_sidebars.js'),
    },
  ];
}
function configDocPlugin_Tools(toolCode, toolUrl) {
  return [
    '@docusaurus/plugin-content-docs',
    {
      id: 'references_john_srv_' + toolCode.substr(toolCode.indexOf('_')),
      path: '3_references/5_tools/' + toolCode,
      routeBasePath: 'references/tools/' + toolUrl,
      sidebarPath: require.resolve('./sidebars/tools_sidebars.js'),
    },
  ];
}
var docs_plugins = [
];


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'JOSP Documentation',
  tagline: 'John O.S. Project documentation web site',
  url: 'https://www.johnosproject.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo/logo_100.ico',
  organizationName: 'John O.S. Project', // Usually your GitHub org/user name.
  projectName: 'com.robypomper.josp.docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'JOSP Docs',
      logo: {
        alt: 'Logo',
        src: '/img/logo/logo_250.png',
      },
      items: [
        {
          to: '/what/',
          label: 'What is?',
          position: 'left',
        },
        {
          to: '/guides/',
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/references/',
          label: 'References',
          position: 'left',
        },
         {
           to: '/blog',
           label: 'Blog',
           position: 'right'
         },
        {
          to: 'https://www.johnosproject.org/frontend/index.html',
          label: 'Public JCP',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'John O.S. Project',
              href: 'https://www.johnosproject.org',
            },
            {
              label: 'JOSP Docs',
              href: 'https://www.johnosproject.org/docs/index.html',
            },
            {
              label: 'Public JCP',
              href: 'https://www.johnosproject.org/frontend/index.html',
            },
            {
              label: 'JOSP Source Code',
              href: 'https://bitbucket.org/johnosproject_shared/com.robypomper.josp',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Report issue',
              href: 'https://bitbucket.org/johnosproject_shared/com.robypomper.josp/issues/new',
            },
            {
              label: 'Contact',
              href: 'https://www.johnosproject.org/frontend/index.html#contacts-and-support',
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/johnosproject',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCb4HveVMSmCaSaluou6D3xQ',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} John O.S. Project<br/><a href="https://www.johnosproject.org/privacy.html">Privacy Policy</a> | <a href="https://www.johnosproject.org/terms.html">Terms and Conditions</a> | <a href="https://www.johnosproject.org/licence.html">Licences</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //id: 'what', // omitted => default instance
          path: '1_what',
          routeBasePath: 'what',
          sidebarPath: require.resolve('./sidebars/docs_sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Keep IT Simple',
          blogDescription: 'JOSP project official blog!'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-M87963X1RP',
          anonymizeIP: false,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: '2_guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars/guides_sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'references_josp_components',
        path: '3_references/1_josp',
        routeBasePath: 'references/josp',
        sidebarPath: require.resolve('./sidebars/references_sidebars.js'),
      
      }
    ],
    configDocPlugin_JODDists('jod_mbus','JOD_MBus'),
    configDocPlugin_JODDists('jod_meteo_web','JOD_Meteo_Web'),
    configDocPlugin_JODDists('jod_pc_linux','JOD_PC_Linux'),
    configDocPlugin_JODDists('jod_pc_mac','JOD_PC_Mac'),
    configDocPlugin_JODDists('jod_pc_win','JOD_PC_Win'),
    configDocPlugin_JODDists('jod_philips_hue','JOD_Philips_Hue'),
    configDocPlugin_JODDists('jod_aa_odh','JOD_AA_ODH'),
    configDocPlugin_JODDists('jod_web_object','JOD_Web_Object'),
  
    configDocPlugin_JohnService('jsl_shell','jsl_shell'),
    configDocPlugin_JohnService('jcp_front_end','jcp_front_end'),
    configDocPlugin_JohnService('johnny_android','johnny_android'),
    configDocPlugin_JohnService('johnny_ios','johnny_ios'),
    configDocPlugin_JohnService('johnny_desktop','johnny_desktop'),
    configDocPlugin_JohnService('johnny_gassistant','johnny_gassistant'),
    configDocPlugin_JohnService('josp_for_google_workspace','josp_for_google_workspace'),

    configDocPlugin_Tools('2_john_object_remote','john_object_remote'),
    configDocPlugin_Tools('1_jod_dist_template','jod_dist_template'),
  ]
};
