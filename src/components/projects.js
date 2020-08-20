import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';
import {motion} from 'framer-motion'


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }

  render(){
    return(
      <div className="header-color" style={{paddingBottom: '15%'}}>

        <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
        <Tab style={{color:"white"}}>WebDev</Tab>
          <Tab style={{color:"white"}}>C</Tab>
          <Tab style={{color:"white"}}>C++</Tab>
          <Tab style={{color:"white"}}>Java</Tab>
         
        </Tabs>



          <Grid>
            <Cell col = {12}>
              <div className = "content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }

  toggleCategories(){ {/*determining which tab is pressed*/}

    {/*C/C++ TAB*/}
    if(this.state.activeTab === 1){
      return(
         <div>

           {/*MultiThreaded Server C*/}
           <motion.div 
            initial={{y:200}}
            animate={{y:0}}
            transition={{duration:2}}
           >
                <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://s3.envato.com/files/a4c2e1aa-9c57-4516-8d8b-9ae80aae23a5/inline_image_preview.jpg) center / cover'}}>Multi-threaded Server (C)</CardTitle>
                <CardText>
                Produced a multithreaded server that is able to create a user desired amount of threads and process GET
      or PUT requests on text files and binary files          </CardText>
                  <div className = "social-linkers">
                <CardActions border> 
                  <motion.div 
                  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                  className = "projects-banner">
                      <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/ServerProjectC" rel = "noopener noreferrer" target = "_blank">
                      Github

                      </a>
                  </motion.div>
                

                </CardActions>
                </div>
                <CardMenu style = {{color: '#fff'}}>
                  <IconButton name = "share"/>
                </CardMenu>
              </Card>
           </motion.div>
          
        <br></br><br></br>


        {/*Server Request Load Balancer*/}
        <motion.div 
            initial={{x:200}}
            animate={{x:0}}
            transition={{duration:2}}
           >
            <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
              <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://www.creativefabrica.com/wp-content/uploads/2018/11/Digital-code-Background-by-ojosujono96-580x387.jpg) center / cover'}}>Server Request Load Balancer (C)</CardTitle>
              <CardText>
              Works in conjunction with the multi threaded server in distributing requests from client equally among servers         </CardText>
                <div className = "social-linkers">
              <CardActions border> 
                <motion.div 
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                className = "projects-banner">
                    <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/load-balancer" rel = "noopener noreferrer" target = "_blank">
                    Github

                    </a>
                </motion.div>
              

              </CardActions>
              </div>
              <CardMenu style = {{color: '#fff'}}>
                <IconButton name = "share"/>
              </CardMenu>
            </Card>


        </motion.div>
      
        
         </div>
        

        
      )


    {/*WEBDEV TAB*/}
    }else if(this.state.activeTab === 0){
      return(
        <div>

          {/*Portfolio Website*/}

          <motion.div 
            initial={{y:-200}}
            animate={{y:0}}
            transition={{duration:2}}
           >
            <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
              <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Portfolio Website</CardTitle>
              <CardText>
              Initialized and deployed portfolio website with React JS with usage of react mdl, react router, and framer motion for page animations.          </CardText>
                <div className = "social-linkers">
              <CardActions border> 
                <motion.div 
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                className = "projects-banner">
                    <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/React-JS-Portfolio-Website" rel = "noopener noreferrer" target = "_blank">
                    Github

                    </a>
                </motion.div>
              

              </CardActions>
              </div>
              <CardMenu style = {{color: '#fff'}}>
                <IconButton name = "share"/>
              </CardMenu>
            </Card>
          </motion.div>
          
        <br></br><br></br>

        {/*Forum Webpage*/}

        <motion.div 
            initial={{x:-200}}
            animate={{x:0}}
            transition={{duration:2}}
           >
          <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
            <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://www.log2e.com/wp-content/uploads/2019/01/vuejs_tutorial.png) center / cover'}}>Forum Webpage</CardTitle>
            <CardText>
            Created a forum website where users can make posts and respond to other user's posts. Developed with vue.js, python, javascript, html, and CSS.         </CardText>
              <div className = "social-linkers">
            <CardActions border> 
              <motion.div 
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
              className = "projects-banner">
                  <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/Forum-Webpage-" rel = "noopener noreferrer" target = "_blank">
                  Github

                  </a>
              </motion.div>
            

            </CardActions>
            </div>
            <CardMenu style = {{color: '#fff'}}>
              <IconButton name = "share"/>
            </CardMenu>
          </Card>    
        </motion.div>
        

        <br></br><br></br>

        <motion.div 
            initial={{x:200}}
            animate={{x:0}}
            transition={{duration:2}}
           >
             {/*Phone Book Webpage*/}
        <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://cloudblogs.microsoft.com/industry-blog/uploads/industry/sites/22/2020/03/VisualStudioHeader.jpg) center / cover'}}>Phone Book Webpage</CardTitle>
          <CardText>
          Produced a phone book webpage where users can create, edit, and delete phone numbers while specifying the type of number. Developed with
          python, vue.js, HTML, Javascript, CSS.        </CardText>
            <div className = "social-linkers">
          <CardActions border> 
            <motion.div 
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            className = "projects-banner">
                <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/Phone-Book-Webpage-with-Login-" rel = "noopener noreferrer" target = "_blank">
                Github

                </a>
            </motion.div>
          

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>
        </motion.div>
       
         </div>





      )
    
    {/*JAVA TAB*/}
    }else if(this.state.activeTab === 3){
      return(
        <div>


          <motion.div 
            initial={{y:200}}
            animate={{y:0}}
            transition={{duration:2}}
           >
              <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
              <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://external-preview.redd.it/qvo2fREXk1MdgMH15xW-gPyKLpWz4aCnK3oOKgsYKWY.jpg?auto=webp&s=96af6795218efd3e1198c934a13666bee3a3a436) center / cover'}}>Chess-Board Simulator</CardTitle>
              <CardText>
              Created a chessboard simulation with multiple chess piece subclasses to determine if certain moves were possible. Used multiple data structures to conserve data storage and memory          </CardText>
                <div className = "social-linkers">
              <CardActions border> 
                <motion.div 
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                className = "projects-banner">
                    <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/Chess-Simulator" rel = "noopener noreferrer" target = "_blank">
                    Github

                    </a>
                </motion.div>
              

              </CardActions>
              </div>
              <CardMenu style = {{color: '#fff'}}>
                <IconButton name = "share"/>
              </CardMenu>
            </Card>
           </motion.div>
          
        <br></br><br></br>


        <motion.div 
            initial={{x:200}}
            animate={{x:0}}
            transition={{duration:2}}
           >
             <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/80/18/cb/8018cb671e28e3254703ef31cef5878c.png) center / cover'}}>Othello Game</CardTitle>
          <CardText>
          Initialized Othello game with GUI and AI computer         </CardText>
            <div className = "social-linkers">
          <CardActions border> 
            <motion.div 
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            className = "projects-banner">
                <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/Othello-" rel = "noopener noreferrer" target = "_blank">
                Github

                </a>
            </motion.div>
          

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>
           </motion.div>
        

        <br></br><br></br>

        <motion.div 
            initial={{x:-200}}
            animate={{x:0}}
            transition={{duration:2}}
           >
          <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://www.desktopbackground.org/p/2014/07/29/800876_other-wallpaper-chess-queen-wallpapers-hd-hd-quality-resolution_1920x1080_h.jpg) center / cover'}}>N Queens</CardTitle>
          <CardText>
          Solved an N Queens problem that read in a file and checked if you could place n queens on an n x n chessboard without attacking one another with a queen already placed in a column     </CardText>
            <div className = "social-linkers">
          <CardActions border> 
            <motion.div 
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            className = "projects-banner">
                <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/NQueens" rel = "noopener noreferrer" target = "_blank">
                Github

                </a>
            </motion.div>
          

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>

           </motion.div>
        
         </div>
      )


    {/*C++ TAB*/}
    }else if(this.state.activeTab === 2){
      return(
        <div>
          <motion.div 
            initial={{y:200}}
            animate={{y:0}}
            transition={{duration:2}}
           >
                <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
                <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://c4.wallpaperflare.com/wallpaper/779/742/522/unix-minimalism-typography-wallpaper-preview.jpg) center / cover'}}>Shell Unix System</CardTitle>
                <CardText>
                Created a basic shell system with commands such as list, find, remove, ect with the use of inodes, maps, and structs.      </CardText>
                  <div className = "social-linkers">
                <CardActions border> 
                  <motion.div 
                  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                  className = "projects-banner">
                      <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/rjzhao1/Adv-Programming/tree/master/asg2" rel = "noopener noreferrer" target = "_blank">
                      Github

                      </a>
                  </motion.div>
                

                </CardActions>
                </div>
                <CardMenu style = {{color: '#fff'}}>
                  <IconButton name = "share"/>
                </CardMenu>
              </Card>
           </motion.div>
          
      
        <br></br><br></br>

        {/*Multi threaded Server C++*/}
        <motion.div 
            initial={{x:-200}}
            animate={{x:0}}
            transition={{duration:2}}
           >
            <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
              <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://motionarray-portfolio.imgix.net/preview-135435-qhnROEC1qS-high_0017.jpg) center / cover'}}>Multi-threaded Server (C++)</CardTitle>
              <CardText>
              Produced a multithreaded server that is able to create a user desired amount of threads and process GET
    or PUT requests on text files and binary files         </CardText>
                <div className = "social-linkers">
              <CardActions border> 
                <motion.div 
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                className = "projects-banner">
                    <a style={{textDecoration:"none", color:"black"}} href = "https://github.com/joshuacheung/ServerProject" rel = "noopener noreferrer" target = "_blank">
                    Github

                    </a>
                </motion.div>
              

              </CardActions>
              </div>
              <CardMenu style = {{color: '#fff'}}>
                <IconButton name = "share"/>
              </CardMenu>
          </Card>
        </motion.div>

        <br></br><br></br>



        
         </div>
      )
    }
  }

  
}

export default Projects;
