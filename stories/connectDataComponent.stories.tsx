// connectDataComponent.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ConnectDataComponent, { ConnectDataComponentProps } from '../components/pri-ui/connectDataComponent';
import { RadioGroup } from "../components/ui/radio-group";

export default {
  title: 'ConnectDataComponent',
  component: ConnectDataComponent,
  argTypes: {
    importOptions: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

const Template: StoryFn<ConnectDataComponentProps> = (args) => (
  <RadioGroup> {/* Wrap with RadioGroup */}
    <ConnectDataComponent {...args} />
  </RadioGroup>
);

// Define the default arguments for the story
export const Default = Template.bind({});
Default.args = {
  title: 'Connect Data',
  description: 'In this section, you can connect the API endpoints that your integration will use, configure their authentications, and test them.',
  importOptions: [
    {
      label: 'API URL',
      description: 'Import data from an API URL.',
      checked: false,
    },
    {
      label: 'My Datasets',
      description: 'Import data from your datasets.',
      checked: false,
    },
    {
      label: 'API File',
      description: 'Import data from an API file.',
      checked: false,
    },
  ],
  saveButtonText: 'Save & Continue',
};

// Define another story with custom arguments
export const CustomOptions = Template.bind({});
CustomOptions.args = {
  title: 'Custom Data Import',
  description: 'Select the data import options that suit your needs.',
  importOptions: [
    {
      label: 'CSV File',
      description: 'Import data from a CSV file.',
      checked: false,
    },
    {
      label: 'Database',
      description: 'Import data from your database.',
      checked: false,
    },
    {
      label: 'External Service',
      description: 'Import data from an external service.',
      checked: false,
    },
  ],
  saveButtonText: 'Import Data',
};
