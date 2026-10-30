import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const dir = path.dirname(fileURLToPath(import.meta.url));

export default {
  id: 'theme-pack',
  label: 'Theme Pack',
  description: 'Adds seven themes to Settings › Appearance.',
  author: 'grace-webb',
  dir,
  requires: [],
  engines: { wranglerApi: '^1.43.0' },
  defaultEnabled: true,
  themes: 'styles',
};
