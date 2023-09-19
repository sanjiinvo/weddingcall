import React, { useEffect, useRef, useState } from 'react';
import './app.scss';
import {  } from "react-bootstrap";
import heartgull from './img/fullheart.png'
import { CaretUpFill } from "react-bootstrap-icons";
import toporn from './img/toporn.jpg'
import tgis from './img/2gisl.png'
import mus from './audio/mus.mp3'
import menstyle from './img/menstyle.png'
import womenstyle from './img/womenstyle.png'

function App() {
  const [convOpen, setconvOpen] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const deadline = new Date('2023-10-22');
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const openWings = () =>{
    setconvOpen(!convOpen)
    const audio = new Audio(mus)
    // audio.play()
  }

 useEffect(()=>{
  console.log(window.innerHeight);

 },[])

  return (
    <div className="App">
      <audio className='' autoPlay loop>
      <source src='./audio/mus.mp3'/>
      </audio>
      <div className= {`left-wing wings ${convOpen? 'left-wing-open': ''}`} >
        <div  className='heart-left' onClick={openWings}>
          <p className='heart-title'>click me</p>
        </div>
      </div>
      <div className={`right-wing wings ${convOpen? 'right-wing-open': ''}`}>

      </div>

      <div className='conv-shape'>
      <div className={`${convOpen? 'first-block':'hidden'}`}>
          <div className='first-titles'>
            <p className='first-block-title'>
            Камила
            </p>
            <p className='first-block-title-2'>
            Қыз Ұзату
            </p>
          </div>
      </div>
      <div className={`${convOpen? 'second-block' : 'hidden'}`}>
      <div className='sexond-block-text-block'>
        <p className='second-block-first-title'>
          Құрметті ағайын-туыс, буырлар, құда-жекжат, нағашылар, дос-жарандар, көршілер және әріптестер!
        </p>
        <p className='second-block-second-title'>
          СІЗДЕРДІ АЯУЛЫ ҚЫЗЫМЫЗ
        </p>
        <p className='second-block-third-title'>
          Камиланың
        </p>
        <p className='second-block-fourth-title'>
          ҰЗАТУ ТОЙЫНА АРНАЛҒАН САЛТАНАТТЫ АҚ ДАСТАРХАНЫМЫЗДЫҢ
          ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА ШАҚЫРАМЫЗ!
        </p>
      </div>
      </div>
      <div className={`${convOpen? 'third-block' : 'hidden'}`}> 
      <div className='third-block-title'>
        <p className='third-block-date'>
          Той салтанаты: <br/>
          2023 жылдың 22 қазан күні сағат 14:00-де басталады.
        </p>
      </div>
      <div className='calendar'>
      <p className='calendar-title'>
        Қазан
      </p>
      <div className='dates'>
      <ul className='weekdays'> 
        <li>ДС</li>
        <li>СС</li>
        <li>СР</li>
        <li>БС</li>
        <li>ЖМ</li>
        <li>СБ</li>
        <li>ЖБ</li>
      </ul>
      <ul class="days">  
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li className='dayactive'>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
    </ul>
      </div>
      
      </div>
            <div class="timer">
              <div class="timer__items">
                <div class="timer__item timer__days">{timeRemaining.days}<br/> дней</div>
                <div class="timer__item timer__hours">{timeRemaining.hours}<br/>  часов</div>
                <div class="timer__item timer__minutes">{timeRemaining.minutes}<br/>  минут</div>
                <div class="timer__item timer__seconds">{timeRemaining.seconds}<br/>  секунд</div>
              </div>
      </div>

      </div>
      <div className='fourth-block'>
        <div>
        <p className='fourth-block-title'>
          Мекен-Жайымыз
        </p>
        <p className='addresofwed'>
          Астана қаласы, <br/>
          Мағжан Жұмабаев даңғылы, 26 <br/>
          "Ғажайып" мейрамханасы
        </p>
        </div>
        <a href='https://2gis.kz/astana/geo/70000001032132659'>
          <img className='gis-icon' alt='2gis' src={tgis} />
          </a>

          <div className='toy-ueleri'>
            <p className='ueleri-title'>
              ТОЙ ИЕЛЕРІ:
            </p>
            <p className='ueleri-name'>
            Саулегуль
            </p>
          </div>
      </div>
      <div className='fives-block'>
        <div className='drees-code'>
          <p className='dress-code-title'>ДРЕСС КОД:</p>
          <div className='dress-code-styles'>
            <div className='style-descr'>
            <img src={menstyle} alt='men' className='men-style dress-style'/>
            <p>Ерлер қауымы:<br/>Классикалық <br/>костюм</p>
            </div>
            <div className='style-descr'>
            <img src={womenstyle} alt='women' className='women-style dress-style'/>
            <p>Әйелдер қауымы:<br/>Кешкі койлек</p>

            </div>


          </div>

        </div>

      </div>


      </div>
    </div>
  );
}

export default App;
