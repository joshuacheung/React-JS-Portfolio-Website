import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import lightbulb from "./components/images/ODkb-unscreen.gif"

function App() {
  return (
    <div>
        <AnimatePresence>
            <motion.div 
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{duration: 2.5}}
            >
           <img  class="center-image" src={lightbulb} frameBorder="0"></img>
           <p class="center-image">Lighting up portfolio...</p>
           {/* <img src="/images/beach.jpg" alt=""></img> */}

            </motion.div>
        
        </AnimatePresence>

        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 2.5, duration: 2.5}}
        
        className="demo-big-content">
            <Layout fixedHeader>
                <Header className="header-color" title="" scroll>
                    <Navigation>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                        <Link className="header-text" to="/React-JS-Portfolio-Website">Home</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                        <Link to="/employment" className="header-text">Employment</Link>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <Link to="/projects" className="header-text">Projects</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <Link to="/aboutme" className="header-text">About Me</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <Link to="/resume" className="header-text">Resume</Link>
                        </motion.div>
                        
                    
                    </Navigation>
                </Header>

            
                <Drawer title="" >
                    <div style={{height:'100%', backgroundColor: '#B4CDCD'}}>

                    
                    <Navigation>

                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                        <Link className="side-bar-text" to="/React-JS-Portfolio-Website">Home</Link>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                        <Link to="/employment" className="side-bar-text">Employment</Link>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <Link to="/projects" className="side-bar-text">Projects</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <Link to="/aboutme" className="side-bar-text">About Me</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <Link to="/resume" className="side-bar-text">Resume</Link>
                        </motion.div>
                        

                    </Navigation>

                    </div>
                </Drawer>    
                
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </motion.div>
    </div>
  );
}

export default App;
