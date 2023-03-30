import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Button Yo',
  type: 'button',
  isLoading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Secondary Button',
  type: 'button',
  isLoading: false,
};
