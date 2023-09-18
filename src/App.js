import React, { useEffect, useRef, useState } from 'react';
import './app.scss';
import heartgull from './img/fullheart.png'
import { CaretUpFill } from "react-bootstrap-icons";
import toporn from './img/toporn.jpg'
function App() {
  const [convOpen, setconvOpen] = useState(false)

  const openWings = () =>{
    setconvOpen(!convOpen)

  }



  return (
    <div className="App">
      <div className= {`left-wing wings ${convOpen? 'left-wing-open': ''}`} >
        <div  className='heart-left' onClick={openWings}>
          <p className='heart-title'>click me</p>
        </div>
      </div>
      <div className={`right-wing wings ${convOpen? 'right-wing-open': ''}`}>

      </div>

      <div className='conv-shape'>
      <div className='first-block'>
          <div className='first-titles'>
            <p className='first-block-title'>
            Құралай
            </p>
            <p className='first-block-title-2'>
            Қыз Ұзату
            </p>
          </div>
      </div>
      <div className='second-block'>

      </div>



      </div>
    </div>
  );
}

export default App;
