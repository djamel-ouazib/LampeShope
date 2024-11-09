import Lamp1 from '../assets/Lamp1.png';
import Lamp2 from '../assets/Lamp2.png';
import Lamp3 from '../assets/Lamp3.png';
import light from '../assets/light.svg'
import night from '../assets/night.svg'
import'../styles/Control.css'
const Images = {
  1: Lamp1, 
  2: Lamp2,
  3: Lamp3,
};

function Control({ step, setStep ,setDarkmod}) {
  return (
   <div className='containerUl'>
      <ul className='ulContol'>
        <li onClick={() => setStep('1')}>
          <img src={Lamp1} alt="lamp1" />
        </li>
        <li onClick={() => setStep('3')}>
        <img src={Lamp3} alt="lamp2" />
        </li>
        <li onClick={() => setStep('2')}>
        <img src={Lamp2} alt="lamp2" />
        </li>
      </ul>
      <div className='light-night'>
        <span onClick={()=>{setDarkmod(false)}}>
        <img src={light} alt="light"  />
        </span>
        <span onClick={()=>{setDarkmod(true)}}>
        <img src={night} alt="night"  />
        </span>  
      </div>
      </div>
   
  );
}

export default Control;
