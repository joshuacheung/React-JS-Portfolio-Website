import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { motion } from "framer-motion";


class Landing extends Component {
    render() {
        return(
            <motion.div 
            style={{ height: '100%'}}
            className="header-color">
            <Grid style={{paddingTop: '10%'}}>

                {/* <div style={{paddingTop: '5%'}}> */}
                <Cell col = {8}>
                    <motion.h1 
                    initial={{
                        x:400
                    }}
                    animate={{
                        x:30
                    }}f
                    transition={{
                        // delay:1.5,
                        duration:2
                    }}
                    className="welcome-text"> This is
                    </motion.h1>

                    
                    <motion.h1 
                    initial={{
                        x:600
                    }}
                    animate={{
                        x:30
                    }}
                    transition={{
                        // delay:1.5,
                        duration:2
                    }}
                    className="welcome-text-name">Joshua Cheung 
                    </motion.h1>

                    {/* <motion.h1 
                    initial={{
                        x:800
                    }}
                    animate={{
                        x:50
                    }}
                    transition={{
                        duration:2
                    }}
                    className="welcome-text"> Portfolio 
                    </motion.h1> */}
                    <motion.p 
                    initial={{
                        y:-100
                    }}
                    animate={{
                        y:0
                    }}
                    transition={{
                        // delay:1.5,
                        duration:3
                    }}
                    className="paragraph-text">
                        Coding to make an <span style={{color:'yellow'}}>illuminating</span> difference.
                    </motion.p>
                
                

        

                </Cell>
                {/* </div> */}
                <Cell col = {3}>
                {/* <div style={{paddingTop: '100%', position: 'relative'}}>   <img src="/images/ODkb-unscreen.gif" width="150%" height="150%" style={{position: 'absolute', top:'0', left:'0'}} frameBorder="0" allowFullScreen></img></div> */}

                    <motion.img src="/images/pngwave-removebg-preview.png" style={{width:'140%', borderRadius: '10px', position: 'relative', right:'30px', bottom: '20px'}} alt=""
                    
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity:1
                    }}
                    transition={{
                        duration:3
                    }}/>
                </Cell>
            
            </Grid>
                <Grid>
                <motion.div 
                    
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity:1
                    }}
                    transition={{
                        duration:3
                    }}

                    
                    className="social-links">
                        
                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="https://github.com/joshuacheung"  rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="https://www.linkedin.com/in/joshua-h-cheung-05351415a/"  rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="https://www.facebook.com/joshua.cheung.737"  rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="mailto:joshuacheung1598@gmail.com"  rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-envelope-square" aria-hidden="true"></i>
                        </motion.a>


                        {/* <p style={{color:"pink", fontSize:"1.5em", paddingTop:"5%", textDecoration:"underline"}}>Resume</p> */}

                    </motion.div>
                </Grid>
        
            
            
            

            

           {/* <Grid>
            <Cell col={6}>
                <p className="paragraph-text">
                    Hello, I am a Computer Science B.S new grad from the University of California,
                    Santa Cruz. I am a full stack software engineer looking for full-time opportunities!
                </p>
            </Cell>

           </Grid> */}
            

            </motion.div>
        );
    }
}

export default Landing;