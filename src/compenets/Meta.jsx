import '../styles/Meta.css'
const Materials={
  1 : {
    material:'Copper',
    dimension: 'H 33 x W 15 x D 15',
    netWeight:'2,5 kg',
    electrification:'LED 10W |G9 | 220-240V | 50 HZ'
  },
  2 : {
    material:'Metal',
    dimension: 'H 45 x W 12 x D 12',
    netWeight:'2,4 kg',
    electrification:'LED 10W |G9 | 220-240V | 50 HZ'
  },
  3 : {
    material:'Iron',
    dimension: 'H 104 x W 132 x D 125',
    netWeight:'12,5 kg',
    electrification:'LED 12W |G9 | 220-240V | 50 HZ'
  }
}

function Meta({step}) {


    return (
      
      <div className='MetaInformation'>
        
        <ul>
          <li><strong style={{color:'black'}}>Material:</strong> {Materials[step].material}</li>
          <li><strong style={{color:'black'}}>Dimension:</strong>{Materials[step].dimension}</li>
          <li><strong style={{color:'black'}}>Net Weight:</strong>{Materials[step].netWeight}</li>
          <li><strong style={{color:'black'}}>Electrification:</strong> <br /> {Materials[step].electrification}</li>
        </ul>
      </div>
    )
  }
  
  export default Meta