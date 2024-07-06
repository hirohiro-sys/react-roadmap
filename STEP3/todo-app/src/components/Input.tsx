import styled from "styled-components";

const SDiv = styled.div`
text-align: center;
`
const SButton = styled.button`
 background-color: green;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 margin-left: 5px;
`

type InputProps = {
    todoTitle: string;
    titleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    todoSyousai:string;
    syousaiChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    todoDeadLine: string;
    deadLineChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    onClickAdd: ()=>void;
}

export const Input = (props:InputProps) => {
    const {todoTitle,titleChange,todoSyousai,syousaiChange,todoDeadLine,deadLineChange,onClickAdd} = props;
    return (
        <SDiv>
        <input
          placeholder="タイトル"
          value={todoTitle}
          onChange={titleChange}
        />
        <input
          placeholder="詳細"
          value={todoSyousai}
          onChange={syousaiChange}
        />
        <input type="date" value={todoDeadLine} onChange={deadLineChange} />
        <SButton onClick={onClickAdd}>追加</SButton>
      </SDiv>
    )
}