import React from 'react';
import homeIcon from '../../assets/HomeIcon.svg';
import MenuItem from './MenuItem';

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
};

const Template = (args) => <MenuItem {...args} />;

export const Home = Template.bind({});
Home.args = {
  title: 'Home',
  iconPath: homeIcon,
  pathName: '',
  active: true,
};
