import React from 'react';
import Menu from './Menu';
// import styles from './Menu.module.css';
import homeIcon from '../../assets/HomeIcon.svg';
import LibraryIcon from '../../assets/LibraryIcon.svg';
import AlbumIcon from '../../assets/AlbumIcon.svg';
import FavIcon from '../../assets/FavIcon.svg';

const icons = [
  { title: 'Home', iconPath: homeIcon },
  { title: 'Library', iconPath: LibraryIcon },
  { title: 'Album', iconPath: AlbumIcon },
  { title: 'Favorites', iconPath: FavIcon },
];

export default {
  title: 'Organism/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Home = Template.bind({});
Home.args = {
  data: icons,
};
