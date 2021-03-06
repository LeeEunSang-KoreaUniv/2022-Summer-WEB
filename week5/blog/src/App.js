import React, { useState } from 'react';
import logo from './logo.svg';
import { GoGrabber } from "react-icons/go";
import './App.css';

function List(props) {
  return <div className='list'>
    <h3> { props.title } <span className='icon' onClick={()=>{props.action[1](props.action[0]+1)}}>  ๐</span>{props.action[0]}</h3>
    <p> { props.body } </p>
    <hr/>
  </div>
}

function App() {

  const [title, titlechange] = useState('React')
  const [p1, p1change] = useState(['1. JSX', 'react์์๋ html๊ณผ ์กฐ๊ธ ๋ค๋ฅธ jsx๋ผ๋ ์ธ์ด๋ฅผ ์ฌ์ฉํ๋ค. \n\n jsx์ html์ด ๋ค๋ฅธ ๋ฌธ๋ฒ๋ค์ ๋ํด์ ์์๋ณด๊ณ  ์ดํดํ  ํ์๊ฐ ์๋ค.'])
  const [p2, p2change] = useState(['2. Data Binding', 'react์์๋ ๊ธฐ์กด js๋ณด๋ค ํจ์ฌ ์ฝ๊ณ  ๋น ๋ฅด๊ฒ ๋ฐ์ดํฐ ๋ฐ์ธ๋ฉ์ ํ  ์ ์๋ค. \n\n ๊ทธ๋ฅ ๋ณ์์ ๋ฐ์ดํฐ๋ฅผ ๋ฃ๊ณ  html์ {}๋ก ๊ทธ๋๋ก ์ ๋ฌํ๋ฉด ๋๋ค.'])
  const [p3, p3change] = useState(['3. State', 'useState ํจ์๋ฅผ ํ์ฉํ์ฌ ์ฌ์ฉํ๋ค. \n\n useState() ์ฌ์ฉ๋ฒ์ ์ตํ์.\n\n useState()์ ์ฅ์  \n - ๋ฐ์ดํฐ๊ฐ ๋ฐ๋ ๋๋ง๋ค ์๋์ผ๋ก ์๋ก๊ณ ์นจ ์์ด ์ฌ๋๋๋ง์ ํด์ค๋ค. \n - state๋ฅผ deep copyํ์ฌ ์ฌ์ฉํ  ์ ์๋ค.'])
  const [p4, p4change] = useState(['4. Component', 'react์์๋ html ํ๊ทธ๋ฅผ ์ฌ์ฉ์ ์ ์๋ก ๋ง๋ค์ด์ ํ์ฉํ  ์ ์๋ค. \n\n ํจ์ํ์์ผ๋ก ์ ์ํ์ฌ ํ๋กํผํฐ๋ก ์ ๋ฌํด์ค ๋ด์ฉ์ ํด๋น ํ๊ทธ์์ ํํํ  ์ ์๋ค.'])

  const [๋ฐ๋ด1, ๋ฐ๋ด๋ณ๊ฒฝ1] = useState(0)
  const [๋ฐ๋ด2, ๋ฐ๋ด๋ณ๊ฒฝ2] = useState(0)
  const [๋ฐ๋ด3, ๋ฐ๋ด๋ณ๊ฒฝ3] = useState(0)
  const [๋ฐ๋ด4, ๋ฐ๋ด๋ณ๊ฒฝ4] = useState(0)

  return (
    <div className='App'>
      <nav className='black-nav'>
        <div className='nav-title'><span onClick={() => {window.location.href = '/';}} style={{cursor: 'pointer'}}>๊ฐ๋ฐ Blog</span></div>
        <div className='nav-icon'>
          <GoGrabber style={{width: '100%', height: '100%', cursor: 'pointer'}}/>
        </div>
      </nav>

      <div className='list'>
        <h1> { title } </h1>
      </div>
      <List title = {p1[0]} body = {p1[1]} action = {[๋ฐ๋ด1, ๋ฐ๋ด๋ณ๊ฒฝ1]}></List>
      <List title = {p2[0]} body = {p2[1]} action = {[๋ฐ๋ด2, ๋ฐ๋ด๋ณ๊ฒฝ2]}></List>
      <List title = {p3[0]} body = {p3[1]} action = {[๋ฐ๋ด3, ๋ฐ๋ด๋ณ๊ฒฝ3]}></List>
      <List title = {p4[0]} body = {p4[1]} action = {[๋ฐ๋ด4, ๋ฐ๋ด๋ณ๊ฒฝ4]}></List>
    </div>
  );
}

export default App;