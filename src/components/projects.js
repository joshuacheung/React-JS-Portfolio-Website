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
          <Tab style={{color:"white"}}>C/C++</Tab>
          <Tab style={{color:"white"}}>WebDev</Tab>
          <Tab style={{color:"white"}}>Java</Tab>
          <Tab style={{color:"white"}}>Python</Tab>
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
    if(this.state.activeTab === 0){
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
      
        <br></br><br></br>

        {/*Multi threaded Server C++*/}
        <motion.div 
            initial={{x:-200}}
            animate={{x:0}}
            transition={{duration:2}}
           >
            <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
              <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://wallpaperaccess.com/full/1363028.jpg) center / cover'}}>Multi-threaded Server (C++)</CardTitle>
              <CardText>
              Produced a multithreaded server that is able to create a user desired amount of threads and process GET
    or PUT requests on text files and binary files         </CardText>
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
    }else if(this.state.activeTab === 1){
      return(
        <div>
          <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://i0.wp.com/www.titanui.com/wp-content/uploads/2018/07/01/Valley-Sunset-Scenery-Vector-Illustration-min.jpg?ssl=1) center / cover'}}>Multi-threaded Server (C)</CardTitle>
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
        <br></br><br></br>

        <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://www.creativefabrica.com/wp-content/uploads/2020/03/14/City-vector-background-Graphics-3646051-1-1-580x348.jpg) center / cover'}}>Server Request Load Balancer (C)</CardTitle>
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

        <br></br><br></br>
        <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://wallpaperaccess.com/full/1363028.jpg) center / cover'}}>Multi-threaded Server (C++)</CardTitle>
          <CardText>
          Produced a multithreaded server that is able to create a user desired amount of threads and process GET
or PUT requests on text files and binary files         </CardText>
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
         </div>





      )
    
    {/*JAVA TAB*/}
    }else if(this.state.activeTab === 2){
      return(
        <div>
          <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://i0.wp.com/www.titanui.com/wp-content/uploads/2018/07/01/Valley-Sunset-Scenery-Vector-Illustration-min.jpg?ssl=1) center / cover'}}>Chess-Board Simulator</CardTitle>
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
        <br></br><br></br>

        <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://www.creativefabrica.com/wp-content/uploads/2020/03/14/City-vector-background-Graphics-3646051-1-1-580x348.jpg) center / cover'}}>Othello Game</CardTitle>
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

        <br></br><br></br>
        <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://wallpaperaccess.com/full/1363028.jpg) center / cover'}}>N Queens</CardTitle>
          <CardText>
          Solved an N Queens problem that read in a file and checked if you could place n queens on an n x n chessboard without attacking one another with a queen already placed in a column     </CardText>
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
         </div>
      )


    {/*PYTHON TAB*/}
    }else if(this.state.activeTab === 3){
      return(
        <div>
          <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://i0.wp.com/www.titanui.com/wp-content/uploads/2018/07/01/Valley-Sunset-Scenery-Vector-Illustration-min.jpg?ssl=1) center / cover'}}>Multi-threaded Server (C)</CardTitle>
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
        <br></br><br></br>

        <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://www.creativefabrica.com/wp-content/uploads/2020/03/14/City-vector-background-Graphics-3646051-1-1-580x348.jpg) center / cover'}}>Server Request Load Balancer (C)</CardTitle>
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

        <br></br><br></br>
        <Card shadow={0} style={{width: '75vw', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://wallpaperaccess.com/full/1363028.jpg) center / cover'}}>Multi-threaded Server (C++)</CardTitle>
          <CardText>
          Produced a multithreaded server that is able to create a user desired amount of threads and process GET
or PUT requests on text files and binary files         </CardText>
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
         </div>
      )
    }
  }

  
}

export default Projects;
