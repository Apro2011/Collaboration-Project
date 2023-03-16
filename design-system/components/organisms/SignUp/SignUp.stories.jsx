import React from 'react';
// import FormField from '../FormField';


import withFormik from '@bbbtech/storybook-formik';

export const Primary = ({placeholder,name,label,type}) => (
  <>
   {/* <SignUp/> */}
  </>
);

Primary.args = {
  name: 'username',
  type: "text",
  placeholder: "Username",
  label: "Username",
};

const Meta = {
  decorators: [withFormik],
  title: 'Organism/SignUp',
};
export default Meta;