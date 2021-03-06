import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {Override, useTransform, motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "./images/joshuacheungresume_fs.pdf";
import resumeScreenshot from "./images/joshua_fs_resume_screenshot.png";


class Resume extends Component {
    render() {
        return (
            <motion.div 
            style={{ height: '110%'}}
            className="header-color">
                <div>
                <img src={resumeScreenshot} alt="" style={{display: 'block', marginLeft:'auto', marginRight:'auto'}}></img>
                </div>
                
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{textAlign:'center', fontFamily:'Roboto', fontSize:'2vw', marginTop:'2%'}}>
                    <a style={{textDecoration:'none', color:'#add8e6'}} href={resume} target="_blank">Download Resume</a>       

                </motion.div>
                <div>
                    
                </div>
                
            </motion.div>
        );
    }
}

export default Resume;