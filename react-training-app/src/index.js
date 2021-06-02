import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Hello(props) {
//   return <p>Hello, {props.name}!</p>;
// }
// function Message() {
//   return <Hello name='Vlad' />;
// }
// function App() {
//   return <div>
//     <Hello name="David" />
//     <Hello name="James" />
//     <Hello name="Amy" />
//   </div>;
// }
// const el = <App />

function Item(props) {
  return <div className='item'>
     <b>Name:</b> {props.name} <br />
    <b>Price:</b> {props.price}
  </div >;
}

function App() {
  return <div>
    <Item name="Bread" price="2.99" />
    <Item name="Strawberry" price="4.99" />
    <Item name="Water" price="1.25" />
  </div>
}
const items = <App />
// const message = <Message />
ReactDOM.render(
  items,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

