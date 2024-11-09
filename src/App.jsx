import './assets/ease.svg'
import './App.css'
import MaskGroupp from './assets/MaskGroup.png'; 
import MaskGroup2 from './assets/MaskGroup2.png'; 
import Header from './compenets/Header'
import Meta from './compenets/Meta'
import { useState } from 'react';
import Control from './compenets/Control';
import Lamp1 from './assets/Lamp1.png';
import Lamp2 from './assets/Lamp2.png';
import Lamp3 from './assets/Lamp3.png';
import LampMini1 from './assets/LampMini1.png'
import LampMini2 from './assets/LampMini2.png'
import LampMini3 from './assets/LampMini3.png'

const Images = {
  1: Lamp1, 
  2: Lamp2,
  3: Lamp3,
};

function App() {
  const [step,setStep]=useState('1')
  const [darkmod,setDarkmod]=useState(false)
  console.log('render')
  return (
    <div className='MyApp'>
      <Header/>
      <div className="container">
        <div className="left">
          <p className="description">
          Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich. <br></br>

          Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.
         
          </p>
          <div className="controls">
            <div className="meta">
              <Meta step={step}  />
            </div>
           
            <div className="control">
            <img src={Images[step]} alt={`Lamp ${step}`} style={{height:'300px',width:'100px'}} />
             <Control step={step} setStep={setStep} setDarkmod={setDarkmod}/>
            </div>
            
          </div>
        </div>
        <div className="right"style={{  backgroundImage: `url(${MaskGroupp})`}} >
        <div  className={`darkImage  ${darkmod && 'active'}`} style={{  backgroundImage: `url(${MaskGroup2})`}}></div>
          <img src={LampMini1} alt={`Lamp ${1}`} className={step==1 ? "active": ''} />
          <img src={LampMini3} alt={`Lamp ${2}`} className={step==2 ? 'active': ''}/>
          <img src={LampMini2} alt={`Lamp ${3}`} className={step==3 ? 'active': ''} />
        </div>
      </div>
    </div>
  )
}

export default App
