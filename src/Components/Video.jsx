import React from "react";
import styles from "./styles.module.css";
import Data from "./Data.json"
import ReactPlayer from 'react-player';
import Draggable from "react-draggable";

function Video(){
      
    return(
        <>
          <h1>Yoga-Videos</h1>
          {Data && Data.map((video)=>{
               
             
              return(
                  <Draggable>
              <div className={styles.videobox} key={video.id} >
                  <ReactPlayer url={video.url} width='100%'
    height='90%'/>
            <p>{video.title}</p>
              </div>
              </Draggable>
              )
          })}
        </>
      
    )
}
export default Video;