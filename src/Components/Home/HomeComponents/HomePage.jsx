import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {
    Drawer,
    AppBar,
    Toolbar, 
    List,
    CssBaseline,
    Typography ,
    Divider,
    IconButton

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { HomePageStyles } from './HomePageStyles';
import Search from './Search';
import UserInfo from './UserInfo';

export default function MiniDrawer() {
  const classes =  HomePageStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Git Tool
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button className={classes.active}> 
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary='Search User' />
          </ListItem>
          <ListItem button> 
            <ListItemIcon> <FileCopyIcon /></ListItemIcon>
            <ListItemText primary='Search Repository' />
          </ListItem>
          <ListItem button > 
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText primary='Saved User' />
          </ListItem>
          <ListItem button> 
            <ListItemIcon><BookmarkIcon /></ListItemIcon>
            <ListItemText primary='Saved Repository' />
          </ListItem>
        </List>
        {/* <List>
          {['Search User', 'Search Repository','Saved User','Saved Repository'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.ListItemIcon}>{index % 2 === 0 ? <AccountCircleIcon /> : }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph>
         
        </Typography>
        <Typography paragraph>
        
        </Typography> */}
        <Search />
        <UserInfo />
        
      </main>
    </div>
  );
}
