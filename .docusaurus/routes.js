import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '76f'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '46a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'd68'),
            routes: [
              {
                path: '/tuto-perso/my-new-doc',
                component: ComponentCreator('/tuto-perso/my-new-doc', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-basics/congratulations',
                component: ComponentCreator('/tutorial-basics/congratulations', '855'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/tutorial-basics/create-a-blog-post', 'af7'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-document',
                component: ComponentCreator('/tutorial-basics/create-a-document', 'bd4'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-page',
                component: ComponentCreator('/tutorial-basics/create-a-page', 'aed'),
                exact: true
              },
              {
                path: '/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/tutorial-basics/deploy-your-site', 'f5a'),
                exact: true
              },
              {
                path: '/tutorial-basics/markdown-features',
                component: ComponentCreator('/tutorial-basics/markdown-features', '89e'),
                exact: true
              },
              {
                path: '/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/tutorial-extras/manage-docs-versions', 'e1f'),
                exact: true
              },
              {
                path: '/tutorial-extras/translate-your-site',
                component: ComponentCreator('/tutorial-extras/translate-your-site', 'dea'),
                exact: true
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
