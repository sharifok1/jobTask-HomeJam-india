import { Container, Grid, Typography } from '@mui/material';
import user1 from "../../Asset/user1.png"
import user2 from "../../Asset/user2.png"
import user3 from "../../Asset/user3.png"
import React from 'react';
import flagUs from '../../Asset/🇺🇸.png'
import flagIt from '../../Asset/🇮🇹.png'
import './Review.css'

const Review = () => {
    return (
        // --------------------------review section/
        <div style={{backgroundColor:'rgba(10, 11, 26, 1)',paddingBottom:'153px'}}>
            <Container>
                <Typography 
                sx={{color:'#ccc', textAlign:'start', fontSize:'32px'}}
                >
                   <div className='cardHeading'>
                   <span className='under-line' style={{color:'#fff',fontSize:'32px'}}>Reviews</span>
                <span style={{color:'#bbb',
                fontSize:'16px',
                }}
                >
                    1/12  &nbsp;&nbsp;<i class="fas fa-arrow-left"> </i> &nbsp;&nbsp; <i class="fas fa-arrow-right"></i>
                </span>
                   </div>
                    
                </Typography>
                <Grid container spacing={2} className='gridContainer'>
                {/* ---------------------------//review card styled by body cards styles(reused previous code) 
                ----------------------------------------------------------------------------------------------*/}
                {/*---------------------- review-1// */}
                <Grid item xs={12} md={4}>
                   <div className='backCard'>
                   <div className='fontCard' style={{border:'1px solid goldenrod'}}>
                       <div className='userPart'>
                       <img style={{width:'48px',height:'48px',
                       borderRadius:'50%'
                        
                        }} src={user1} alt="" />
                        <div className='userLoca'>
                            <span style={{color:'#fff',marginLeft:'20px'}}>Hellenn Jummy</span>
                            <div style={{marginLeft:'20px'}}>
                            <img style={{width:'24px',height:'24px',
                            position:'relative',
                            marginBottom:'-7px',
                            left:'-5px'

                            }} src={flagUs} alt="" /> 
                            <small style={{color:'rgba(229, 197, 88, 1)',
                             }}
                            >Palo Alto, CA</small>
                            </div>
                        </div>
                       </div>
                       <p style={{color:'#fff',
                            textAlign:'start',
                            margin:'20px',
                            paddingBottom:'20px'
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.</p>
                   </div>
                   </div>
                </Grid>
                 {/*---------------------- review-2// */}
                <Grid item xs={12} md={4}>
                <div className='backCard'>
                   <div className='fontCard' style={{border:'1px solid goldenrod'}}>
                       <div className='userPart'>
                       <img style={{width:'48px',height:'48px',
                       borderRadius:'50%'
                        
                        }} src={user2} alt="" />
                        <div className='userLoca'>
                            <span style={{color:'#fff',marginLeft:'20px'}}>Hellenn Jummy</span>
                            <div style={{marginLeft:'20px'}}>
                            <img style={{width:'24px',height:'24px',
                            position:'relative',
                            marginBottom:'-7px',
                            left:'-5px'

                            }} src={flagIt} alt="" /> 
                            <small style={{color:'rgba(229, 197, 88, 1)',
                             }}
                            >Palo Alto, CA</small>
                            </div>
                        </div>
                       </div>
                       <p style={{color:'#fff',
                            textAlign:'start',
                            margin:'20px',
                            paddingBottom:'20px'
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.</p>
                   </div>
                   </div>
                </Grid>
                {/*---------------------- review-3// */}
                <Grid item xs={12} md={4}>
                <div className='backCard'>
                   <div className='fontCard' style={{border:'1px solid goldenrod'}}>
                       <div className='userPart'>
                       <img style={{width:'48px',height:'48px',
                       borderRadius:'50%'
                        
                        }} src={user3} alt="" />
                        <div className='userLoca'>
                            <span style={{color:'#fff',marginLeft:'20px'}}>Hellenn Jummy</span>
                            <div style={{marginLeft:'20px'}}>
                            <img style={{width:'24px',height:'24px',
                            position:'relative',
                            marginBottom:'-7px',
                            left:'-5px'

                            }} src={flagUs} alt="" /> 
                            <small style={{color:'rgba(229, 197, 88, 1)',
                             }}
                            >Palo Alto, CA</small>
                            </div>
                        </div>
                       </div>
                       <p style={{color:'#fff',
                            textAlign:'start',
                            margin:'20px',
                            paddingBottom:'20px'
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.</p>
                   </div>
                   </div>
                </Grid>
               
            </Grid>
            </Container>
        </div>
    );
};

export default Review;