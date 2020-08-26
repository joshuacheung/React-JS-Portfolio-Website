import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Grid, Cell } from 'react-mdl';
import { motion } from "framer-motion";
import beach from "./images/beach.JPG";
import boardwalk from "./images/boardwalk.JPG";
import city from "./images/city.JPG";
import woods from "./images/woods.JPG";
import cityFriends from "./images/cityFriends.JPG";
import instagramWorship from "./images/instagramWorship.PNG";
import coffee from "./images/coffee.JPG";
import coyoteHills from "./images/coyoteHills.JPG";
import weddingSpeech from "./images/weddingSpeech.jpg";
import instagramCore from "./images/instagramCore.PNG";
import recordShop from "./images/recordShop.JPG";
import schoolNight from "./images/schoolNight.JPG";
import meProfile from "./images/meprofile.JPG";




const photos = [
    {
        name:'Beach',
        url: beach
    },
    {
        name:'Boardwalk',
        url: boardwalk
    },
    {
        name:'city',
        url: city
    },
    {
        name:'woods',
        url: woods
    },
    {
        name:'cityFriends',
        url: cityFriends
    },
    {
        name:'instagramWorship',
        url: instagramWorship
    },
    {
        name:'coffee',
        url: coffee
    },
    {
        name:'Coyote Hills',
        url: coyoteHills
    },
    {
        name:'Wedding Speech',
        url: weddingSpeech
    },
    {
        name:'instagram core',
        url: instagramCore
    },
    {
        name:'record shop',
        url: recordShop
    },
    {
        name:'school',
        url: schoolNight
    },

]

class About extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: true,
            fade:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            slidesToScroll:1,
            className: "slides"
        }

        const loadingContainerVariants = {
            start: {
              transition: {
                staggerChildren: 0.7
              }
            },
            end: {
              transition: {
                staggerChildren: 0.7
              }
            }
          };
          
          const loadingCircleVariants = {
            start: {
              opacity: 0,
              y: "200%"
            },
            end: {
                opacity: 1,
              y: "0%"
            }
          };

          const loadingParagraphVariants = {
            start: {
              opacity: 0,
            },
            end: {
                opacity: 1
            }
          };

          const loadingPersonalInfoTitleVariants = {
            start: {
                opacity: 0,
              x: -100
            },
            end: {
                opacity: 1,
                x:0
            }
          };

          const loadingCircleTransition = {
            duration: 1.5,
            ease: "easeIn"
          };
        return(

            <div className="header-color">
                    
                    
                    <br></br><br></br><br></br>

                    <h1 style={{textAlign:'center', lineHeight:'0.5em', fontFamily:'Roboto', fontSize:'7.5vw', color:'white', paddingBottom:'5%'}}>About Me</h1>
                    
                    <motion.div 
                    className="characteristics" 
                    variants={loadingContainerVariants} 
                    initial="start" 
                    animate="end">
                        <Grid>
                            <Cell col={3}>
                                <motion.div 
                                variants={loadingCircleVariants}
                                transition={loadingCircleTransition}
                                className="characteristics-banner">
                                    <h1>
                                    Teachable
                                    </h1>
                                </motion.div>
                                
                            </Cell>
                            <Cell col={3}>
                                <motion.div 
                                variants={loadingCircleVariants}
                                transition={loadingCircleTransition}
                                className="characteristics-banner">
                                    <h1>
                                        Relational
                                    </h1>
                                </motion.div>
                                
                            </Cell>
                            <Cell col={3}>
                                <motion.div 
                                variants={loadingCircleVariants}
                                transition={loadingCircleTransition}
                                className="characteristics-banner">
                                    <h1>
                                    Hardworking
                                    </h1>
                                </motion.div>
                                
                            </Cell>
                            <Cell col={3}>
                                <motion.div 
                                variants={loadingCircleVariants}
                                transition={loadingCircleTransition}
                                className="characteristics-banner">
                                    <h1>
                                        Passionate
                                    </h1>
                                </motion.div>
                                
                            </Cell>
                        </Grid>


                        <Grid>
                            <Cell col={6}>
                                <motion.p 
                                variants={loadingParagraphVariants}
                                transition={{duration:4}}
                                style={{marginLeft:'5%'}}
                                >I believe that the four traits above are the characterisitcs I try to uphold in every environment that I am in. I understand that as a new grad, I have much to learn and much to adapt to. This mentality 
                                    allows me to keep a humble yet ambitious mindset in being determined to grasp new skills and information. I am also a firm believer in being someone who is relational; to make friends which enables healthier and happier environments.
                                </motion.p>
                            </Cell>
                            <Cell col={6}>
                                <motion.img variants={loadingParagraphVariants}
                                transition={{duration:4}} style={{width:'60%', display:'block', marginLeft: 'auto', marginRight:'auto'}} src={meProfile} alt=""></motion.img>
                            </Cell>
                        </Grid>
                        
                        <br></br><br></br><br></br>

                        
                        <motion.div variants={loadingPersonalInfoTitleVariants}
                            transition={{duration:4}}>
                            <h1>Personal Information</h1>
                            <p style={{paddingTop:'1%'}}>My personal hobbies include, building computers, hiking, finding unique spots in the city, 
                                playing videogames (league of legends and breath of the wild are my two favorite games!), and 
                                in general just spending time with friends and family, regardless of the activity.
                            </p>


                            <Slider {...settings} style={{width:'100%'}}>
                            {photos.map((photo) => {
                                return(
                                    <div style={{alignItems: 'center'}}>
                                        <img class="slideshow-images" alt ="" src={photo.url} ></img>
                                    </div>
                                )
                            })}
                            </Slider>
                        </motion.div>
                        

                    </motion.div>

                    
                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br>
                    
            </div>

        );
    }
}

export default About;