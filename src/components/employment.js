import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {Override, useTransform, motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import cisco from "./images/cisco2.jpg"
import idtech from "./images/idtech1.JPG"
import stanford from "./images/stanfordReal.jpg"
import parisbaguette from "./images/parisBaguette2.jpg"


class Employment extends Component {

    

    render() {

        return(
            <div className="header-color">
                    
                    
                    <br></br><br></br><br></br>
                    <motion.div
                        initial= {{
                            y:-100
                        }}
                        animate= {{
                            y:0
                        }}
                        transition= {{
                            duration:3
                        }}
                    >
                        <h1 style={{color: 'white', fontFamily: 'Roboto', textAlign:'center', lineHeight:'0.5em', marginBottom:"4%"}}>Employment</h1>
                        <motion.nav 
                        initial={{x: -300}}
                        animate={{x:0}}
                        transition={{duration:3}}
                        className="employment-nav">
                            <motion.a 
                            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} 
                            href="#1">1</motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#2">2</motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#3">3</motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="#4">4</motion.a>
                        </motion.nav>

                        
                    
                    
                    </motion.div>
                    
                    

                    <motion.div
                        initial= {{
                            y:200
                        }}
                        animate= {{
                            y:0
                        }}
                        transition= {{
                            duration:3
                        }}
                    
                    >
                    
                        {/*Cisco*/}
                        {/* <Section></Section> */}
                        <motion.div className="employment">
                            <section id="1">
                                <Grid>
                                    <Cell col={12}>
                                        <h2>
                                            Software Engineer Intern at Cisco
                                        </h2>
                                        <h4>
                                            June - September 2019
                                        </h4>
                                        

                                    </Cell>
                                    
                                </Grid>

                                <Grid>
                                    <Cell col={6}>
                                    <motion.img whileTap={{ scale: 1.2 }} alt ="" src={cisco} ></motion.img>
                                    </Cell>

                                    <Cell col={6}>
                                    <ul className="a">
                                    <li>
                                    Developed and deployed an automation system that periodically detects inefficient virtual machines
        (VMs) and endpoints using REST API calls, and then fixes them. This system increased company
        testing procedure efficiency and is still being used today with Jenkins (Java)
                                    </li>
                                    <li>
                                    Created a dashboard that enables further optimization of VMs. The work involved understanding various
        statistics of VMs on Amazon Web Services, detecting anomalies, then parsing this info and displaying
        them in a user-friendly manner
                                    </li>
                                    <li>
                                    Engaged in daily scrum meetings to communicate goals and how to most effectively achieve them, and
        collaborated in Agile development
                                    </li>
                                </ul>
                                    </Cell>
                                </Grid>

                                {/* <Grid>
                                    <Cell col={6}>
                                        <h3>Flexibility</h3>
                                    </Cell>
                                    <Cell col={6}>
                                        <h3>Integrity</h3>
                                    </Cell>
                                </Grid> */}

                            </section>
                           

                            </motion.div>
                            

                            {/*IDTech*/}
                            <motion.div 
                            className="employment2" >
                                <section id="2">
                                    <Grid>
                                        <Cell col={12}>
                                            <h2>
                                                Programming Instructor at IDTech
                                            </h2>
                                            <h4>
                                                June - August 2018
                                            </h4>
                                            

                                        </Cell>
                                        
                                    </Grid>

                                    <Grid>
                                        <Cell col={6}>
                                            <motion.img whileTap={{ scale: 1.2 }} alt ="" src={idtech} ></motion.img>
                                        </Cell>

                                        <Cell col={6}>
                                            <ul className="b">
                                            <li>
                                            Implemented new teaching curriculum with example projects for students
                                            </li>
                                            <li>
                                            Taught intermediate to advanced levels of Java, C++ and C to aspiring CS students using informative
            and efficient teaching techniques
                                            </li>
                
                                            </ul>
                                        </Cell>
                                    </Grid>

                            
                                </section>
                                


                            </motion.div>
                        
                            {/*Stanford*/}
                            <motion.div
                            // style={{paddingTop: '10%', paddingBottom: '15%'}}
                            className="employment">
                            <section id="3">
                                <Grid>
                                        <Cell col={12}>
                                            <h2>
                                                Customer Service Relations at Stanford
                                            </h2>
                                            <h4>
                                                June - September 2017
                                            </h4>

                                        </Cell>
                                        
                                    </Grid>

                                    <Grid>
                                        <Cell col={6}>
                                        <motion.img whileTap={{ scale: 1.2 }} style={{width: '100%'}} alt ="" src={stanford}></motion.img>

                                        </Cell>

                                        <Cell col={6}>
                                            <ul className="a">
                                                <li>
                                                Communicated effectively with students and prospects from different cultural backgrounds
                                                </li>
                                                <li>
                                                Evangelized various benefits of the GSB and achieved a zero rate of complaints throughout the
                internship
                                                </li>
                                            </ul>

                                        </Cell>
                                    </Grid>

                            </section>
                                

                            

                            </motion.div>



                            {/*Paris Baguette*/}
                            <motion.div 
                            className="employment2">
                                <section id="4">
                                    <Grid>
                                        <Cell col={12}>
                                            <h2>
                                                Advertising Representative at Paris Baguette
                                            </h2>
                                            <h4>
                                                June - September 2016
                                            </h4>

                                        </Cell>
                                        
                                    </Grid>

                                    <Grid>
                                        <Cell col={6}>
                                        <motion.img whileTap={{ scale: 1.2 }} style={{width:'100%'}} alt ="" src={parisbaguette} ></motion.img>
                                        </Cell>
                                        <Cell col={6}>
                                        <ul className="b">
                                        <li>
                                        Increased sales of confectionary products by building an in-store campaign around store products
                                        </li>
                                        <li>
                                        Optimally served multiple customers during daily peak hours by switching between barista, cashier, and serving options
                                        </li>
                                    </ul>                                    </Cell>
                                    </Grid>
                                </section>
                        

                                
                            </motion.div>
                    </motion.div>
                    
   
            </div>
        );
    }
}

export default Employment;