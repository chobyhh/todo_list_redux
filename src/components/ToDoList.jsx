// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


//my_lists라는 변수를 선언해서 부모 컴포넌트의 list라는 것을 가져와서 map을 돌렸으나
//리덕스는 다르다

const ToDoList = (props) => {
  // const my_lists = props.list;
  let history = useHistory();
  // 상수에 useSelector로 어떤 데이터를 가지고 오고싶은지에 대한 화살표 함수를 넣는다.
  // state=>state는 스토어가 가지고 있는 모든 데이터를 보려고 하는것
  const my_lists = useSelector((state)=>state.todo.list);
  console.log(my_lists);

  return (
    <ListStyle>
    {my_lists.map((list, index) => {
        return (
        <ItemStyle key={index} onClick={()=>{
          //index를 붙여줘서 상세페이지를 나눠줌
          history.push("/detail/"+index)
        }}>
            {list}
        </ItemStyle>
        );
    })}
    </ListStyle>
  );
};




const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
  
  
  &:hover{
      background-color: slateblue;
      color : white;
      font-weight: bold;
  }
  
`;

export default ToDoList;