import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
// import './index.css'
import App from './App.jsx'
import Ayush from './components/Ayush.jsx'
import Board from './components/TicTak.jsx'
import Practice from './components/Practice.jsx'



class Demo extends React.Component {
  render() {
    const ap = 5 * 2;
    const css = {
      color: this.props.color,
      backgroundColor: this.props.bg
    }
    const hello = `Hello ${ap} kem ${this.props.color} chho`
    return (
      <>
        <h1 style={css}>
          welcome.... &nbsp;&nbsp; !! <br/> {hello} !! &nbsp;&nbsp; <br/> Ayush Parmar 
        </h1>
      </>
    );
  }
}

function Test() {
  return (
    <>
      <h1>heloovfbdsf</h1>

      <Demo color="#e6f10aff" bg="#f6940bff" />  
      <Demo color="#2917edff" bg="#fff" />  
      <Demo color="#286a0eff" bg="#53f408ff" />  
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* < Board /> */}
    {/* <App /> */}
    {/* <Ayush /> */}
    {/* <Test />  */}
  </StrictMode>
)

// const Ayush1 = React.createElement('h1',{},'I love Coding');
const a2 = <h1>Total {50 + 100}</h1>

createRoot(document.getElementById('sandy')).render(
  // Ayush1,
  // a2
)

createRoot(document.getElementById('test')).render(
  <StrictMode >
    < Practice />

  </StrictMode>
)