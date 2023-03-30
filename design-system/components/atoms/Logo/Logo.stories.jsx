import React from 'react';
import Logo from './Logo';
import LogoImg from '../../assets/Logo.png';

export default {
  title: 'Atoms/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Music Blog',
  iconPath: LogoImg,
};
