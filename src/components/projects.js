import React from 'react';
import sqrap from "../img/sqrap.png"
import kiosk1 from "../img/kiosk1.png"
import kiosk2 from "../img/kiosk2.png"
import kiosk3 from "../img/kiosk3.png"
import kiosk4 from "../img/kiosk4.jpeg"
import adfi1 from "../img/adfi.png"
import order from "../img/order.jpeg"
import order2 from "../img/order2.png"
import candyone from "../img/candyone.png"
import wait from "../img/wait.jpeg"
import wait2 from "../img/wait2.jpeg"
import ad15 from "../img/adfi15.png"
import ad10 from "../img/ad10.jpeg"

const Projects = ({ data }) => (
  <section>
    <h1 className="section-header">Projects</h1>
    {data.map(item => (
      <article className="my-5" key={item.name}>
        <h2 className="item-header">{item.name}</h2>
        <h3 className="item-sub">{item.company}</h3>
        <p className="py-4">{item.description}</p>
          {item.imgIndex===9?<img style={{display:"inline"}} width="400" height="600" src={ad15}/>:null}
          {item.imgIndex===8?<img style={{display:"inline"}} width="200" height="250" src={wait}/>:null}
          {item.imgIndex===8?<img style={{display:"inline"}} width="200" height="250" src={wait2}/>:null}
          {item.imgIndex===7?<img style={{display:"inline"}} width="200" height="250" src={order}/>:null}
          {item.imgIndex===7?<img style={{display:"inline"}} width="400" height="600" src={order2}/>:null}
          {item.imgIndex===4?<img style={{display:"inline"}} width="200" height="250" src={kiosk2}/>:null}
          {item.imgIndex===4?<img style={{display:"inline"}} width="200" height="250" src={kiosk3}/>:null}
          {item.imgIndex===4?<img style={{display:"inline"}} width="200" height="250" src={kiosk4}/>:null}
          {item.imgIndex===3?<img style={{display:"inline"}} width="200" height="250" src={sqrap}/>:null}
          {item.imgIndex===2?<img style={{display:"inline"}} width="200" height="250" src={ad10}/>:null}
          {item.imgIndex===2?<img style={{display:"inline"}} width="400" height="600" src={adfi1}/>:null}
          {item.imgIndex===1?<img style={{display:"inline"}} width="200" height="250" src={candyone}/>:null}
      </article>
    ))}
  </section>
);

export default Projects;
