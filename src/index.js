import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LogoComponent=(props)=>{
  return <img alt='' className='image' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'></img>
}

const WordBoxComponent=(props)=>{
  return <input className='input' placeholder='Search Google or Type a URL'></input>
  
}

const SearchButton=()=>{
  return <div className='button'>
    <Button1/><Button2/>
    </div>
}
const Button1 =()=>{
  return <button className='btn1' type='button'>Google Search</button>
}
const Button2=()=>{
  return <button className='btn2' type="button">I'am Feeling Lucky</button>
}


const LanguageComponent=()=>{
  return <p className='lang'>Google offered in:English</p>
}


setInterval(()=>{
  root.render(
    <React.StrictMode>
      <LogoComponent/>
      <WordBoxComponent />
      <SearchButton/>
      <LanguageComponent/>
    </React.StrictMode>
  );
},1000);

