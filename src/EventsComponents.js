import React from 'react'

export const EventsComponents = () => {

    const applyClick= (e) => {
        alert('Ko stava gotin?');
    }

    const dobleClick= (e) => {
        alert('Ko stava gotin?');
    }

    const enteredIntheBox = (e) =>{
        alert('Pich vutre si!')
    }

  return (
    <div>
        <h1>Events in React</h1>
        {/*  One click */}
        <button id='clickMe-btn' onClick={applyClick}>Click Me!</button>

       

        {/* Double click */}

        <button onDoubleClick={dobleClick}>Click Me double!</button>

        {/* On mouseEntere */}
        <div id='box' onMouseEnter={enteredIntheBox}>My div!</div>
      
    </div>
  )
}
