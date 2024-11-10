import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import "./Burger.css"
import burgerLinks from"./datas"

interface burgerLinksProps {
    text: string;
    icon: string;
    href: string;
}


function Burger() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box id="drawer" sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {burgerLinks.map((burgerLink: burgerLinksProps, index) => (
          <ListItem key={burgerLink.text} disablePadding disableGutters>
            <ListItemButton component="a" href={burgerLink.href} sx={{ paddingRight: 0 }}>
              <ListItemText 
              primaryTypographyProps={{ fontSize: '2rem' }}
              id='textDrawer' 
              primary={burgerLink.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button id='burgerButton' onClick={toggleDrawer(true)}> ☰</Button>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Burger;