import { useState } from "react";
import { Input } from "./components/Input";
import { Todo } from "./components/Todo";
import { AiFillEdit } from "react-icons/ai";

// 各要素をホバーすると型が確認できるぽい。違うファイルでも使うのでexport
export type todoType = {
  title: string;
  syousai: string;
  deadline: string;
};
export default function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoSyousai, setTodoSyousai] = useState("");
  const [todoDeadLine, setTodoDeadLine] = useState("");
  const [todos, setTodos] = useState<todoType[]>([]);
  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoTitle(e.target.value);
  const syousaiChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoSyousai(e.target.value);
  const deadLineChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoDeadLine(e.target.value);

  // Todoを追加する処理
  const onClickAdd = () => {
    if (todoTitle === "" || todoSyousai === "" || todoDeadLine === "") return;
    const newTodos = [
      ...todos,
      { title: todoTitle, syousai: todoSyousai, deadline: todoDeadLine },
    ];
    setTodos(newTodos);
    setTodoTitle("");
    setTodoSyousai("");
    setTodoDeadLine("");
  };
  // Todoを削除する処理
  const onClickDelete = (idx: number) => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
       
        <h1> <AiFillEdit />勉強記録アプリ</h1>
        <h2>勉強したこと/ものを追加</h2>
      </div>
      {/* Todoを入力するコンポーネント */}
      <Input
        todoTitle={todoTitle}
        titleChange={titleChange}
        todoSyousai={todoSyousai}
        syousaiChange={syousaiChange}
        todoDeadLine={todoDeadLine}
        deadLineChange={deadLineChange}
        onClickAdd={onClickAdd}
      />
      <div style={{ textAlign: "center" }}>
        <h2>勉強した内容一覧</h2>
      </div>
      {/* Todoを表示するコンポーネント */}
      <Todo todos={todos} onClickDelete={onClickDelete} />
    </>
  );
}
