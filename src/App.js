/*eslint-disable*/

import React, {useState} from 'react';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);
  let [번호, 번호변경] =useState(0);
  let [입력값, 입력값변경] =useState('');
  
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
  };
  function 정렬하기(){
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );
  };
  function 모달스위치(){
    modal변경(!modal);
  }
  function 글저장함수(e){
    let 새번호=3;
    var newArray = [...글제목];
    newArray[num] = e.target.value;
    글제목변경( newArray );
    번호변경(새번호++);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={제목바꾸기} >수정버튼</button>
      <button onClick={정렬하기} >정렬</button>
      
      
      { 글제목.map(function(a,i){
        return (
          <div className="list" key={i}>
          <h3 onClick={()=>{번호변경(i)}}>{ a } 
          <span onClick={()=>{따봉변경(따봉+1)}}> 👍</span> {따봉} </h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
        )
        }) 
      }
      <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}}/>
        <button onClick={글저장함수}>저장</button>
      </div>
      <button onClick={모달스위치}>모달스위치</button>
      { 
         modal === true
         ? <Modal 글제목={글제목} 번호={번호}/>
         : null
      }     
    </div>
  )
}

function Modal(props){
  return (
      <div className="modal">
        <h2>제목 : {props.글제목[props.번호]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;
