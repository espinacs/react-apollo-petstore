import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import Input from './Input';

import jestTestResults from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export const wTests = withTests({
  results: jestTestResults,
  filesExt: ""
});

storiesOf('Components|Input', module)
  .addDecorator(wTests('Input'))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Simple', () => <Input />)
  .add('Labelled', () => <Input label={"Name"} />)
  .add('Labelled required', () => <Input label={"Name"} required />)
