
import React, { createRef, useRef, useState } from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import ToDoList from "./components/ToDoList";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import { useDispatch } from "react-redux";
import { createTodo } from "./redux/modules/todo";



const App = (props) => {
  
  const [list, setList] = useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
  const title = useRef(null);

  //useDispatch로 리턴된 무언가를 dispatch에 넣어서 사용하겠다
  const dispatch = useDispatch();

  //console.log(title.current.value)
  //console.log(title.current)
  

  const addList = () =>{

      //액션을 일으켜보자 액션을 일으키려면 dispatch를 쓴다
      //디스패치는 액션 객체를 넣어줘야 한다 딕셔너리 형태
      //그런데 우리는 모듈안에 액션 생성 함수를 만들어서 액션 객체를 넣어줬다
      //액션 생성 함수에서 데이터 넣어줬죠? 여기서도 넣어줘야합니다.
      //Create의 데이터가 뭘까요? 당연히 input한 값이겠죠???
      dispatch(createTodo(title.current.value));




    // //실제로는 여기에 Ajax등을 써서 서버로 이 내용을 보내는 것도 한다

    // console.log(title.current.value)
    // // State의 사본을 만든다
    // var newList = [...list]
    // //입력값을 사본에 추가해준다
    // newList.unshift(title.current.value)
    // //사본을 setState에 파라미터로 적용한다
    // setList(newList)
  }

    
  return (


    <div className="App">
      <Container>
        <Title >To Do List</Title>
        <Line/>
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Switch>
          <Route path="/" exact render={(props) => (<ToDoList list={list}/>)}/>
          <Route path="/detail/:index" exact component={Detail} />
          <Route> <NotFound/> </Route> 
        </Switch>
      </Container>
            {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <InputText>
        <input 
        type="text" 
        ref={title}
        // onChange={()=>{
        //   console.log(title.current.value)
        // }}
        />
        <button onClick={addList}>추가</button>
      </InputText>

    </div>
  );
};


const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const InputText = styled.div`
max-width: 350px;
background-color: #fff;
margin: 20px auto;
display : flex;
align-items: center;
justify-content: space-between;

input{
  font-size: 20px; 
  border: 1px solid #ddd;
};

button{
  font-size: 18px;
  background-color: aliceblue;
  border-color: #fff;
};

button:hover{
  font-weight: bold;
  color : white;
  background-color: slateblue;
}

`;

export default App;