import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import NavBar from '../Navbar/NavBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import calStar from '../../Asset/CalStar.png'
import './Header.css'
const Header = () => {
    const theme =  useTheme()

    // ----------------------------header break-point style(responsive)
    const useStyle = makeStyles({
        heading:{
            [theme.breakpoints.down('md')]: {
              position:'relative',
               textAlign:'start',
               paddingTop:'150px',
               paddingLeft:'10%',
               top:'10px',
              },
            [theme.breakpoints.up('md')]: {
               textAlign:'start',
               paddingTop:'200px',
               paddingLeft:'10%'
              },
        },
        headerTxt:{
            [theme.breakpoints.down('md')]: {
                textAlign:'start',
                paddingLeft:'10%',
                fontSize:'16px'
              },
            [theme.breakpoints.up('md')]: {
                textAlign:'start',
                paddingLeft:'10%',
                fontSize:'24px'
              },
        },
    })
    const {heading,headerTxt}=useStyle()
    return (
        // ----------------background banar
        <div className='header'> 
            <div className='background-layer'>
                <div>
                    {/* --------------navigation component */}
                   <NavBar></NavBar>
                   {/* ---------------banar text and circle */}
                   <div>
                       <Box>
                           <Typography variant="h1" component="div" gutterBottom
                           className={heading}
                           sx={{color:'#fff',
                                fontSize:'7vmax',
                                }}>
                            Cari Cari
                           </Typography>
                           <p
                           className={headerTxt}
                           style={{color:'rgba(200, 200, 200, 5)'}}>
                            Live from their sofa to yours. Get closer to your favorite <br /> artists, and never miss out.
                           </p>
                       </Box>

                       {/* -------------------------------banar circle 
                       ---------------------------------------------------*/}
                       <div className='circleContainer'>
                           <div className='circle'>
                                <FavoriteBorderIcon sx={{color:'#16f',fontSize:'20px',mb:1}}></FavoriteBorderIcon>
                                <span style={{fontSize:'24px',color:'#fff'}}>0</span>
                                <span style={{fontSize:'16px',color:'#ddd',lineHeight:3}}>Lavel</span>
                           </div>

                           <div className='circle'>
                                <img style={{width:'50px'}} src={calStar} alt="" />
                                <span style={{fontSize:'24px',color:'#fff'}}>0</span>
                                <span style={{fontSize:'16px',color:'#ddd', 
                                lineHeight:3 }}>Lavel</span>
                           </div>

                           <div className='circle'>
                                <img style={{width:'50px'}} src={calStar} alt="" />
                                <span style={{fontSize:'24px',color:'#fff'}}>0</span>
                                <span style={{fontSize:'16px',color:'#ddd',
                                 lineHeight:3}}>Lavel</span>
                           </div>

                           <div className='circle'>
                                <img style={{width:'50px'}} src={calStar} alt="" />
                                <span style={{fontSize:'24px',color:'#fff'}}>0</span>
                                <span style={{fontSize:'16px',color:'#ddd',
                                lineHeight:3}}>Lavel</span>
                           </div>
                       </div>
                   </div>
                  
                </div>
            </div>
            
        </div>
    );
};

export default Header;