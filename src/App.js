import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";
import "./index.css";




function App(){
    return(
        <>
        <h1 className="heading_style"> List of top Netflix series </h1>
        {Sdata.map((val)=>{//--->Fat Arrow function used
           return ( 
           <Card
           key={val.id}
            imgsrc={val.img}
            hname={val.title}
            sname={val.Sname}
            slink={val.links}/>);
        })}
        </>
/*<>
<h1 className="heading_style"> List of top Netflix series </h1>

 <Card imgsrc='https://wallpapercave.com/wp/wp5770334.jpg'
 sname='A Netflix Original Series'
 hname='DARK'
 slink='https://www.netflix.com/in/title/80100172'
 />

 <Card imgsrc='https://wallpapercave.com/dwp2x/wp5180052.jpg'
 sname='A Netflix Original Series'
 hname='YOU'
 slink='https://www.netflix.com/in/title/80211991'/>

 <Card imgsrc='https://wallpapercave.com/wp/wp9882016.jpg'
 sname='A Netflix Original Series'
 hname='Extracurricular'
 slink='https://www.netflix.com/in/title/80990668'/>
 </>*/
    );
}


export default App;