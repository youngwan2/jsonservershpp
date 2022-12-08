import React, { useState } from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Navbar from './components/Navbar';



// 1. 전체상품페이지, 로그인 ,상품상세페이지
// 2. 전체 상품페이지에서는 전체 상품 보기 가능
// 3. 로그인 버튼을 누르면 로그인 페이지가 나옴
// 4. 상품 디테일 눌렀으나, 로그인 안 되어 있으면 로그인 페이지 나옴
// 5. 로그인 되면 상품 디테일 페이지 보기 가능
// 6. 로그아웃 되면 디테일 못보고, 다시 로그인 페이지 보임
// 7. 로그인 하면 로그아웃 문구가 보이고, 로그아웃하면 메인에 로그인 보임
// 8. 상품 검색해서 가져올 수 있음.


function App() {

  const [authentication,setAuthentication] =useState(false)
  console.log(authentication)
  return (
    <div className="App">
      <Navbar authentication={authentication} setAuthentication={setAuthentication}/>
    
      <Routes>
        <Route path='' element={<h2 style={{textAlign:'center'}}>로고 이미지 클릭 시 상품 정렬<br/><br/>--기존 메인 배경 넣는 곳--</h2>}></Route>
        <Route path='/products/' element={<Products authentication={authentication}/>}></Route>
        <Route path='/login' element={<Login setAuthentication ={setAuthentication}/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
