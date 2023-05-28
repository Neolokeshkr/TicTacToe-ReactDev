import React, { Component } from 'react';

function Square(){
  return <button className="square">{value}</button>;

  function handleClick(){

  }
}


export default function Board() {
  return (
    <React.Fragment>
      <div className='board-row'>
        <Square value='X'/>
        <Square value='X'/>
        <Square value='X'/>
      </div>
      <div className='board-row'>
        <Square value='X'/>
        <Square value='X'/>
        <Square value='X'/>
      </div>
      <div className='board-row'>
        <Square value='X'/>
        <Square value='X'/>
        <Square value='X'/>
      </div>
    </React.Fragment>
  );
}
