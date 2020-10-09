import { ScullyConfig } from '@scullyio/scully';
import './plugins/keys';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "making-civic-smart-city",
  outDir: './dist/static',
  routes: {
      '/agenda/:step': {
          type: 'agenda',
      },
      '/playbook/:key': {
          type: 'plays',
      },
  },
};