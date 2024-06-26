import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const navItems = [
  {
    text: 'Home',
    icon: 'HomeIcon',
  },
  {
    text: 'Dashboard',
    icon: 'DashboardIcon',
  },
  {
    text: 'Profile',
    icon: 'AccountCircleIcon',
  },
  // Add more navigation items as needed
];

function NavBar() {
  return (
    <List>
      {navItems.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
}

export default NavBar;
