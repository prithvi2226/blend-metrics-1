import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputField, { InputFieldProps } from '../components/pri-ui/inputField';

export default {
  title: 'InputField',
  component: InputField,
  args: {
    label: 'API URL',
    description: 'This name will appear in our marketplace.',
    placeholder: 'e.g. https://example.com'
  },
} as Meta;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
export const Filled = Template.bind({});
export const Placeholder = Template.bind({});


Filled.args = {
  description: '',
  value: 'https//MyWebsite.com',
};

Placeholder.args = {
  placeholder: 'e.g. https://example.com', // Adding a placeholder for the Placeholder story
};
