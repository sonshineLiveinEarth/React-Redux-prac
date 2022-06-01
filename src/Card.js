import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { loadMemoFB, updateMemoFB, deleteMemoFB } from "./redux/modules/memo";

const Card = (props) => {
  const my_lists = useSelector((state) => state.memo.list);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(loadMemoFB());
  }, []);

  return (
    <>
      {my_lists.map((list, index) => {
        console.log(list.id);
        return (
          <CardBox
            key={index}
            completed={list.completed % 2 === 0}
            // style={{
            //   backgroundColor: list.completed % 2 == 0 ? "transition" : "#ddd",
            // }}
          >
            <Ul>
              <Li1>{list.word}</Li1>
              <Li>[{list.pinyin}]</Li>
              <Li3>{list.def}</Li3>
              <Li style={{ color: "#1554FF" }}>{list.ExEn}</Li>
              <Li style={{ color: "#1554FF" }}>{list.ExKo}</Li>
            </Ul>
            <Btns>
              <Btn
                style={{
                  width: list.completed === 1 ? "36px" : "36px",
                }}
                onClick={() => {
                  dispatch(updateMemoFB(list.id, list.completed));
                }}
              >
                {list.completed % 2 === 0 ? "완료" : "✔️"}
              </Btn>
              <Btn
                onClick={() => {
                  history.push(`/write/modifi/${list.word}`);
                }}
              >
                수정
              </Btn>
              <Btn
                onClick={() => {
                  history.push("/");
                  dispatch(deleteMemoFB(list.id));
                }}
              >
                삭제
              </Btn>
            </Btns>
          </CardBox>
        );
      })}
    </>
  );
};

const CardBox = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  min-width: 300px;
  max-width: 400px;
  width: 90%;
  height: 140px;
  margin: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: ${(props) => (props.completed ? "transparent" : "#ddd")};
  }};

  &:hover {
    box-shadow: 5px 5px 20px #e6e6e6;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0px;
`;

const Li1 = styled.li`
  display: flex;
  font-size: 30px;
  margin: 2px;
  font-weight: bold;
`;

const Li3 = styled.li`
  display: flex;
  font-size: 16px;
  margin: 2px;
  font-weight: bold;
`;

const Li = styled.li`
  display: flex;
  font-size: 16px;
  margin: 2px;
`;

const Btns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: right;
`;

const Btn = styled.button`
  width: 36px;
  height: 20px;
  background: transparent;
  border: none;
  text-decoration: underline;
  font-weight: bold;
  // font-size:
  color: #bbb;
  &:hover {
    color: black;
  }
`;

export default Card;
