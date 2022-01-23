import { Container, Grid } from '@mui/material';
import React from 'react';
import './Body.css'
import image1 from '../../Asset/card1.png'
import image2 from '../../Asset/card2.png'
import image3 from '../../Asset/card3.png'
import image4 from '../../Asset/card4.png'



const Body = () => {
    return (
        <div className='CardContainer'
        styles={{backgroundColor:'#0A0B1A'}}
        >
           <Container>
            <div className='cardHeading'>
                <span style={{color:'#fff',fontSize:'32px'}}>UpComming</span>
                <span style={{color:'#E5C558'}}>view All</span>
            </div>
            <div>
             <Grid container spacing={2} className='gridContainer'>
                <Grid item xs={12} md={4} lg={3}>

                    {/* -------------------------card1
                    ---------------------------------------------- */}
                   <div className='backCard'>
                   <div className='fontCard'>
                       <div>
                       <img src={image1} alt="" />
                        <div className='fontCardAsset'>
                        <button 
                            style={{backgroundColor:'rgba(229, 197, 88, 1)' ,border:'none',padding:'3px'}}>Folk
                        </button>
                        <h2>Benny Dayal</h2>
                        <span style={{color:'#05f'}}>More Info <i class="fas fa-arrow-right"></i> </span>
                        </div>
                       </div>
                   </div>
                   </div>
                </Grid>
                 {/* ------------------------------card2
                    ---------------------------------------------- */}
                <Grid item xs={12} md={4} lg={3}>
                   <div className='backCard'>
                   <div className='fontCard'>
                   <div>
                       <img src={image2} alt="" />
                       <div className='fontCardAsset'> 
                       <button 
                            style={{backgroundColor:'rgba(229, 197, 88, 1)' ,border:'none',padding:'3px'}}>Folk
                        </button>
                        <h2>Vijay Yesudas</h2>
                        <span style={{color:'#05f'}}>More Info <i class="fas fa-arrow-right"></i> </span>
                       </div>
                    </div>
                   </div>
                </div>
                </Grid>
                 {/* --------------------------------card3
                    ---------------------------------------------- */}
                <Grid item xs={12} md={4} lg={3}>
                  <div className='backCard'>
                   <div className='fontCard'>
                   <div>
                       <img src={image3} alt="" />
                        <div className='fontCardAsset'>
                            <button 
                                style={{backgroundColor:'rgba(229, 197, 88, 1)' ,border:'none',padding:'3px'}}>Folk
                            </button>
                                <h2>Andrea jeremiah</h2>
                                <span style={{color:'#05f'}}>More Info <i class="fas fa-arrow-right"></i> </span>
                            </div>
                       </div>
                   </div>
                   </div>
                </Grid>
                 {/* ----------------------------------card4
                    ---------------------------------------------- */}
                <Grid item xs={12} md={4} lg={3}>
                    <div className='backCard'>
                    <div className='fontCard'>
                    <div>
                       <img src={image4} alt="" />
                        <div  className='fontCardAsset'>
                        <button 
                            style={{backgroundColor:'rgba(229, 197, 88, 1)' ,border:'none',padding:'3px'}}>Folk
                        </button>
                        <h2>Shilpa Rao</h2>
                        <span style={{color:'#05f'}}>More Info <i class="fas fa-arrow-right"></i> </span>
                        </div>
                       </div>
                    </div>
                    </div>
                </Grid>
            </Grid>
            </div>
           </Container>
        </div>
    );
};

export default Body;