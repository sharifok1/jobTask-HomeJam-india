import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import soppingIco from '../../Asset/Vector (Stroke).png';
import logo from '../../Asset/logo.png'
import SearchIcon from '@mui/icons-material/Search';

import { makeStyles } from '@mui/styles';
import { Divider, Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';



const NavBar = () => {
    // -------------------------------breakpoint style 
    // --------------------------------------------------------------
    const theme =  useTheme()
    const useStyle = makeStyles({
        navIcon:{
            [theme.breakpoints.up('md')]: {
                position:'absolute',
                right:'10%'
              },
            [theme.breakpoints.down('md')]: {
                position:'absolute',
                left:'95%'
              },
        },
        navItems:{
            [theme.breakpoints.down('md')]: {
               display:"none"
              },
        },
        shoppingLogo:{
            [theme.breakpoints.up('md')]: {
               position:'relative',
               right:'12%',
               top:'3px'

              },
            [theme.breakpoints.down('md')]: {
               position:'relative',
               right:'10%',
               top:'3px'
              },
        },
        searchIco:{
            [theme.breakpoints.up('md')]: {
               position:'relative',
               left:'12%',
              },
            [theme.breakpoints.down('md')]: {
               position:'relative',
               left:'22%',
              },
            [theme.breakpoints.down('sm')]: {
               position:'relative',
               left:'15%',
              },
        },
        
    })
    // -------------------------------distructure useStyle property
    const {navIcon, navItems, shoppingLogo, searchIco}=useStyle()

    //---------------------------------Appbar state on/off
    const [state, setState] = React.useState(false);
    const list = (
        <Box
          sx={{ width: 200,}}
          role="presentation"
        >
          <List>
              <ListItem button>
                <ListItemText>Help</ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText>Account</ListItemText>
              </ListItem>
              <Divider />
          </List>
        </Box>
      );

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{backgroundColor:"rgba(0,0,0,0)", boxShadow:0}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setState(true)}
            className={navIcon}
          >
            <MenuIcon />
          </IconButton>

          {/* ----------------------------Logo
          ------------------------------------------- */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img 
            style={{width:'86px'}}
            src={logo} alt="" />
          </Typography>

          <Box sx={{ flexGrow:2}}>
          </Box>
          <SearchIcon sx={{mb:-1}} className={searchIco}></SearchIcon>
           <Box sx={{ flexGrow:3}}>
           <Box>
           
               <Box className={navItems}>
                <small>Search</small>
                {/* ---------------------navigation button 
                -------------------------------------------*/}
                <button 
                style={{backgroundColor:'rgba(0,0,0,0)',
                        border:'none', 
                        color:'#fff',
                        margin:'0 5%'}}>Help
                </button>
                <button style={{backgroundColor:'rgba(0,0,0,0)', 
                                border:'none', 
                                color:'#fff'}}>Account
                </button>
               </Box>
           </Box>
           
         </Box>
         <Typography className={shoppingLogo}>
                <img src={soppingIco} alt="" />
        </Typography>
         </Toolbar>
      </AppBar>
    </Box>
    {/* -------------------------Navigation drawer 
    -------------------------------------------------*/}
    <div > 
      <React.Fragment>
        <Drawer
          open={state}
          onClose={()=>setState(false)}
          style={{height:'300px'}}
        >
          {list}
        </Drawer>
      </React.Fragment>
  </div>
        </>
    );
};

export default NavBar;