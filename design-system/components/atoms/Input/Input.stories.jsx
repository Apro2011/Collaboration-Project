import React from 'react';
import Input from './Input';
import withFormik from '@bbbtech/storybook-formik';

export const Primary = ({placeholder,name,type}) => (
  <Input
    name={name}
    type={type}
    placeholder={placeholder}
  />
);

const Meta = {
  decorators: [withFormik],
  title: 'Atoms/Input',
};
export default Meta;

Primary.args = {
  name: 'username',
  type: "text",
  placeholder: "Username",
};