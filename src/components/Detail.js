// 리액트 패키지를 불러옵니다.
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/modules/todo";


const Detail = (props) => {
  //params로 디테일 페이지의 id값? 을 받아온다.
  const params = useParams();
  const dispatch = useDispatch();

  //list의 진짜 인덱스번호를 가져온다
  const todo_index = params.index
  //이제 상세페이지에서 각 인덱스와 동일한 데이터를 보여줘야 한다.
  //데이터는 리덕스 스토어에 있고 그 스토어를 우선 불러와야 하는데
  //useSelector가 그 역할을 한다.
  //useSelector에서 전체 State중 우리가 원하는 list에 대한 값을 받아온다
  const todo_list = useSelector((state)=>state.todo.list);

  console.log(todo_index);
  console.log(todo_list[todo_index]);
  
  const history = useHistory();

  const deleteList = () => {
    console.log('삭제하기 누름')
    
    //액션을 가져오는거니까 당연히 디스패치쓰고
    //디스패치 인자는 액션 객체 즉 액션 생성 함수를 임포트해서 가져오고
    //액션 생성 함수의 값으로 데이터 필요한데 삭제는 id값 받아왔잖아?
    //위에서 작업했던 list의 인덱스 번호 가져오면 됨
    dispatch(deleteTodo(todo_index));
    history.push("/");
  }

  //콘솔로그로 확인했을 때 들어가야하는 값인 todo_list[todo_index]를 확인했으니
  //그대로 넣어주면 끝
  return(
    <>
      <h1>{todo_list[todo_index]}</h1>
      <button onClick={deleteList}>삭제하기</button>
    </>
  )
  
};

export default Detail;