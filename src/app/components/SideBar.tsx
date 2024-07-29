"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { HEADERS } from '../constants';
import Link from 'next/link';

type SideBarProps = {
  open: boolean,
  toggleDrawer: () => void,
  pathname:string
}

export default function SideBar({ open, toggleDrawer,pathname }: SideBarProps) {


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <List>
        {HEADERS.map(({ header, id, path}) => (
          <ListItem key={header} disablePadding>
            <ListItemButton>
              <Link href={path} style={{textDecoration:'none'}}>
              <ListItemText primary={header}  style={ pathname===path?{color:"goldenrod",}:{color:'black'}}/>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer} anchor='right'>
        {DrawerList}
      </Drawer>
    </div>
  );
}