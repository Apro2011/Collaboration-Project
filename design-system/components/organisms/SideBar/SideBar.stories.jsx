import React from 'react';
import SideBar from './SideBar';
import { icons } from '../../assets';

const mainMenu = [
  { title: 'Home', iconPath: icons.home },
  { title: 'Library', iconPath: icons.library },
  { title: 'Album', iconPath: icons.album },
  { title: 'Favorites', iconPath: icons.favorites },
];
const footerMenu = [
  { title: 'Settings', iconPath: icons.settings },
  { title: 'Login', iconPath: icons.login },
];

export default {
  title: 'Organism/SideBar',
  component: SideBar,
};

const Template = (args) => <SideBar {...args} />;

export const Home = Template.bind({});
Home.args = {
  mainMenu: mainMenu,
  footerMenu: footerMenu,
};
