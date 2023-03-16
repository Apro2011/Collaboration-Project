import React from 'react';
import Error from './Error';
import withFormik from '@bbbtech/storybook-formik';

export const Primary = ({name}) => (
  <Error
    name={name}
  />
);

const Meta = {
  decorators: [withFormik],
  title: 'Atoms/Error',
};
export default Meta;

Primary.args = {
  name: 'User name cant not be empty.',
};