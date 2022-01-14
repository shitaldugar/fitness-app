import React from "react";
import mypic from "./../images/mypic.jpeg";
import styles from "./styles.module.css";
import Video from "./Video";


function Home(){
     
    return(
        <>
        <div>
            <div className={styles.leftBox}>
            <div className={styles.photoBox}>
                <img className={styles.photo}src={mypic}alt="profilePic"/>
            </div>
            <div>
                <h1>Shital Dugar</h1>
                <p>I am fitness trainer.My mission is to cut through the noise in the health and fitness industry .</p>
            </div>
            <div className={styles.logo}>

                <img width="50px"src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"alt="insta" />
                
            </div>

            <div className={styles.logo}>
          
                <img width="50px"src="https://as1.ftcdn.net/v2/jpg/03/00/02/06/1000_F_300020628_2nRuwvJ2FwzfQpQ3XRVpW90hvZSjaXFT.jpg"alt="facebook" />
                
            </div>

            <div className={styles.logo}>
               
                <img width="50px"src="https://cdn-icons.flaticon.com/png/512/3938/premium/3938026.png?token=exp=1642149428~hmac=75f81f4c0e190f0ad9bb90bb09fb587e"alt="youtube" />
                
            </div>

            <div className={styles.logo}>
                
                <img width="50px"src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1642161609~hmac=c635c499d0633bf5f3f6e31667732304"alt="linkedin" />
                
            </div>
            </div>
            <div className={styles.rightbox}>
        <Video/>
            </div>
        </div>
    
        </>
    )
}
export default Home;