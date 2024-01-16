import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const whCsDruvaPlugin = createPlugin({
  id: 'wh-cs-druva',
  routes: {
    root: rootRouteRef,
  },
});

export const WhCsDruvaPage = whCsDruvaPlugin.provide(
  createRoutableExtension({
    name: 'WhCsDruvaPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
