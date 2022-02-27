import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickInComplete } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, i) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickInComplete(i)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
