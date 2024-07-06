import { todoType } from "../App";
import styled from "styled-components";

const SDiv = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  width: 300px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 20px;
`
const SP = styled.p`
    text-align: center;
`
const SUl = styled.ul`
     list-style: none;
     display: flex;
     flex-wrap: wrap;
`
const SButton = styled.button`
 background-color: red;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 margin-left: 5px;
`
type TodoProps = {
    todos: todoType[];
    onClickDelete:(idx: number) => void;
}

export const Todo = (props: TodoProps) => {
    const {todos,onClickDelete} = props;
    return (
        <div>
        {/* Todoを1つも追加していない場合は指定の文言を表示させる */}
        {todos.length === 0 ? (
          <SP>勉強記録をつけよう！</SP>
        ) : (
          <SUl>
            {todos.map((todo, idx) => (
              <li>
                <SDiv>
                  <p>タイトル: {todo.title}</p>
                  <p>詳細: {todo.syousai}</p>
                  <p>日付: {todo.deadline}</p>
                  <SButton onClick={() => onClickDelete(idx)}>削除</SButton>
                </SDiv>
              </li>
            ))}
          </SUl>
        )}
      </div>
    )
}