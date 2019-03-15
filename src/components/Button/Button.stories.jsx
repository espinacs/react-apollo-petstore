import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import Button from './Button';

import jestTestResults from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export const wTests = withTests({
  results: jestTestResults,
  filesExt: ""
});

storiesOf('Components|Button', module)
  .addDecorator(wTests('Button'))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Simple', () => <Button >Click Me</Button>)
  .add('Primary', () => <Button primary>Click Me</Button>)
