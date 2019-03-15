import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  name: 'Components catalogue',
  enableShortcuts: false,
});

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  const req = require.context('../src/', true, /\.stories\.jsx$/);
  importAll(req);
}


configure(loadStories, module);
