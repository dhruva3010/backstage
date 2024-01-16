import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { whCsDruvaPlugin, WhCsDruvaPage } from '../src/plugin';

createDevApp()
  .registerPlugin(whCsDruvaPlugin)
  .addPage({
    element: <WhCsDruvaPage />,
    title: 'Root Page',
    path: '/wh-cs-druva'
  })
  .render();
