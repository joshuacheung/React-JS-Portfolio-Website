import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { motion } from "framer-motion";

class ProjectsPrev extends Component {
    render() {
        return(
            <div className="header-color">
            <Grid>
                <motion.h1 
                    initial={{
                        x:-100
                    }}
                    animate={{
                        x:0
                    }}f
                    transition={{
                        duration:2
                    }}
                    
                    style={{color: 'white', fontFamily:'Roboto Mono', paddingLeft: '5%', fontSize: '80px'}}>
                            Projects
                </motion.h1>
                    <motion.div 
                    initial={{
                        y:-100
                    }}
                    animate={{
                        y:0
                    }}f
                    transition={{
                        duration:2
                    }}
                    className="projects-banner">
                        
                        <h2>Multi-threaded Server with Load Balancer (C)</h2>
                        
                        <p>Developed a Multi-threaded server that is able to create a user desired amount of threads,
                            perform basic REST api calls, and distrubute requests equally for optimal processing time
                            </p>                        
                           
                           <Grid>
                               <Cell col={7}>
                                   <motion.img whileTap={{ scale: 1.2 }} style={{width:"100%"}} src="images/socket_setup.png" alt=""></motion.img>
                               </Cell>
                               <Cell col={3}><p style={{}}>Setting up a connection between client(s) and server(s)</p></Cell>
                           </Grid>

                           <Grid>
                               <Cell col={7}>
                                   <motion.img whileTap={{ scale: 1.2 }} style={{width:"100%"}} src="images/get_request.png" alt=""></motion.img>
                               </Cell>
                               <Cell col={3}><p style={{}}>Code for processing a get request from client</p></Cell>
                           </Grid>

                           <Grid>
                               <Cell col={7}>
                                   <motion.img whileTap={{ scale: 1.2 }} style={{width:"100%"}} src="images/load_balancer.png" alt=""></motion.img>
                               </Cell>
                               <Cell col={3}><p style={{}}>Distributing requests equally among servers</p></Cell>
                           </Grid>
                            <br></br>
                           <p style={{fontSize:"20px"}}>Links to more in depth design of project: <a style={{textDecoration:"bold", color:"white", fontWeight:"bold"}} href="images/serverDesign.pdf" target="_blank">Server Design Document</a> 
                           , <a style={{textDecoration:"bold", color:"white", fontWeight:"bold"}} href="images/loadbalancerDesign.pdf" target="_blank">Load Balancer Design Document</a>
                           </p>

                    </motion.div>

                    <div className="projects-banner">

                    <h2>Portfolio Website with React</h2>

                        <p>Developed a Multi-threaded server that is able to create a user desired amount of threads,
                            perform basic REST api calls, and distrubute requests equally for optimal processing time
                        </p>  

                    </div>



                    
                    
                
                
                
                
            </Grid>
            </div>
        );
    }
}

export default ProjectsPrev;
