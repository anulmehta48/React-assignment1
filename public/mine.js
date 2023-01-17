import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const HeadingComponent = (props) =>{
  return <h1>{props.title}</h1>;
}

class HeadingComponentwithClass extends React.Component {
  render(){
    return <h1> this is class Component -- {this.props.title}</h1>
  }
}

const CurrentTime = ()=>{
  return (
    <p>{" "} {+new Date()} <HeadingComponentwithClass title="pass from current time"/> </p>
  )
}

setInterval(()=>{
  root.render(
    <React.StrictMode>
      <HeadingComponent title="hello from function component" />
      <CurrentTime/>
    </React.StrictMode>
  );
},1000);

