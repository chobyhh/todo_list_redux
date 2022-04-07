// ToDoList.js

// Actions
//서버에서 읽어오는게 아니기 때문에 LOAD는 생략

const LOAD = "bucket/LOAD";
const CREATE = 'todo/CREATE';
const DELETE = 'todo/DELETE';


//초기값 설정
//초기값은 딕셔너리 형태로
const initialState = {
    list:["영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"],
}

// Action Creators
//액션 생성함수는 액션 객체를 만든다 당연히 객체{}를 return한다
// 어떤 타입의 액션인지, 무슨 액션을 해야할지(어떤걸 생성하는지?)
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export function createTodo(todo){
    return {type: CREATE, todo:todo};
}

//뭔가를 지울라면?? 뭘 지워야하는지 알아야겠죠???
//어떻게 알 수 있죠?? 고유의 뭔가가 필요해요 id 같은 id라고 해봅시다
export function deleteTodo(todo_id){
    console.log("지울 버킷 인덱스", todo_id)
    return {type: DELETE, todo_id : todo_id};
}


// 액션 생성 함수 예시
// export function loadWidgets() {
//   return { type: LOAD };
// }

// //키와 벨류가 같으면 하나만 써도 괜찮다. widget이 그 예시
// export function createWidget(widget) {
//   return { type: CREATE, widget: widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      
      case "bucket/LOAD":
      return state;
        // switch 다음 액션 타입이 파라미터로 들어왔다
        //당연히 캐이스에는 어떤 액션 타입인지 적어줘야 한다
        //그 액션 타입에 맞는 수정이 리듀서에서 이루어지고 그 return값이 새로운
        //상태 값이 된다

        //이를 위해서는 우리가 초기에 설정해준 값과 동일한 형태로 리턴을 해줘야한다.
        //위에서 list를 배열로 만들어 줬으니까 list라는 키값에 []를 밸류로준다

      case "todo/CREATE" : {
          // 새롭게 추가된 배열에 들어갈 변수를 먼저 만들어준다
          // 새로 추가된 배열에는 초기 리스트를 스프래드로 가져오고
          //뒤에 새롭게 추가된 데이터를 넣어주면 된다.
          // 새롭게 추가된 데이터는 액션 객체 안에 있다.
          //위에서 Action Creators에서 키값 밸류값 줬죠? 그거 그대로 가져오세요
          // 액션안에 있는 데이터 가져오기
          const new_list = [...state.list, action.todo];
          return {list : new_list};
      }
      // 항상 중괄호 열어서 블록범위 지정해줘야함
      //캐이스 / 액션 / 블록범위 {}
      case "todo/DELETE" : {
        console.log(state, action)
        //삭제는 하나를 빼기 어려우니 하나를 골라서 그거 빼고 다른것들을 포함한
        //새로운 리스트를 만들어 주는 방식으로 진행함
        const new_list = state.list.filter((list, idx) => {
          
          // 아래 콘솔을 찍어보면 모두가 true가 나온다. 왜????
          // "1"와 1은 그 자료형 형태가 다르기 때문이다 그래서 그 자료형을 맞춰준다
          //console.log(parseInt(action.todo_id) !== idx, parseInt(action.todo_id), idx);
          return parseInt(action.todo_id) !== idx
        });

        //console.log(new_list)
        return {list:new_list};
      }
      default: return state;
    }
  }




// side effects, only as applicable
// e.g. thunks, epics, etc
// 미들웨어
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }