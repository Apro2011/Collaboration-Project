import React from 'react';
import FormField from './FormField';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Error from '../../atoms/Error/Error';

import withFormik from '@bbbtech/storybook-formik';

export const Primary = ({placeholder,name,label,type}) => (
  <FormField>
    <Label label={label}/>
    <Input placeholder={placeholder} name={name} type={type}/>
    <Error name={name}/>
  </FormField>
);

Primary.args = {
  name: 'username',
  type: "text",
  placeholder: "Username",
  label: "Username",
};

const Meta = {
  decorators: [withFormik],
  title: 'Organism/FormField',
};
export default Meta;