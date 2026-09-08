import React, { useState } from 'react'
import cat from '../images/cat.png';

function Imagemanipulation() {

    const[height,setHeight]=useState(200);
    const[width,setWidth]=useState(200);
    const[red,setRed]=useState(20);
    const[green,setGreen]=useState(10);
    const[blue,setBlue]=useState(140);
    const[angle,setAng]=useState(0);



const [miTop, setMiTop] = useState(0);
const [miLeft, setMiLeft] = useState(0);
const [miRight, setMiRight] = useState(0);


function enhanceHeight(){
setHeight(height+10);
}


function enhanceWidth(){
setWidth(width+10);
}

function changeBGColor(){
      setRed(Math.floor(Math.random()*256));
      setGreen(Math.floor(Math.random()*256));
      setBlue(Math.floor(Math.random()*256));
}
function rotateImage(){
  setAng(angle+30);
  
}
function handleTop() {
    setMiTop(miTop + 10);
}

function handleLeft() {
    setMiLeft(miLeft + 10);
}

function handleRight() {
    setMiRight(miRight + 10);
}

  return (
    <div>
<h2 style={{color:'white',backgroundColor:'brown'}}> Image Manipulation using React</h2>
<div style={{border:'2px solid red',height:'300px', width:'400px',marginLeft:'300px'}}>
<img src={cat} height={height} width={width} style={{backgroundColor:`rgb(${red},${green},${blue})`, transform: `rotate(${angle}deg)`, marginTop: `${miTop}px`, marginLeft: `${miLeft}px`, marginRight: `${miRight}px`}}></img>
<div>
    <h2>Cat height:{height}</h2>
    <h2>Cat width:{width}</h2>
</div>
</div>
<div>
    <h2>Background Color: rgb({red}, {green}, {blue})</h2>
</div>
<button onClick={enhanceHeight}>EnhanceHeight</button>
<button onClick={enhanceWidth}>EnhanceWidth</button>
<button onClick={changeBGColor}>ChangeBGColor</button>
<button onClick={rotateImage}>RotateImage</button>




<button onClick={handleTop}>Top</button>
<button onClick={handleLeft}>Left</button>
<button onClick={handleRight}>Right</button>

    </div>
  )
}

export default Imagemanipulation