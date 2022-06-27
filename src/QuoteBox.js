import React from "react";
import {useState} from 'react';
import quotes from './quotes.json';
import color from './backgrounds.json';
import './App.css';

const Message=()=>{
    const ini =Math.floor(Math.random()*quotes.length);
    const [num, setNum] = useState(ini);
    const changeNumber=()=>{
    const nuevoValor = Math.floor(Math.random()*quotes.length);
    setNum(nuevoValor);
  }
  return (

            <div id='cardContent' Style={color[num].config}>
              <div id='Card' >
                <h4 id='quote'><i class="fa-solid fa-quote-left"></i>{quotes[num].quote}</h4>
                <h5 id='author'>{quotes[num].author}</h5>
                <button Style={color[num].config}  id='button' onClick={changeNumber} > <i class="fa-solid fa-angle-right" Style={color[num].config}></i>
                </button>
              </div>
            </div>
    )
} 
export default Message;
  

    
