import React from 'react';
import Menu from './Menu';
import homeIcon from '../../assets/HomeIcon.svg';

export default {
  title: 'Molecules/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Home = Template.bind({});
Home.args = {
  data: [
    { title: 'Home', iconPath: homeIcon },
    { title: 'Home', iconPath: homeIcon },
    { title: 'Home', iconPath: homeIcon },
    { title: 'Home', iconPath: homeIcon },
  ],
};
