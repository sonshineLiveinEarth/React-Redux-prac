import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadMemoFB, updateMemoFB } from "./redux/modules/memo";

const Modifi = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const words = useParams();
  const my_lists = useSelector((state) => state.memo.list);

  const word = React.useRef(null);
  const pinyin = React.useRef(null);
  const def = React.useRef(null);
  const ExEn = React.useRef(null);
  const ExKo = React.useRef(null);

  // const addMemoList = () => {
  //   dispatch(
  //     createMemo({
  //       word: word.current.value,
  //       pinyin: pinyin.current.value,
  //       def: def.current.value,
  //       ExEn: ExEn.current.value,
  //       ExKo: ExKo.current.value,
  //       completed: false,
  //     })
  //   );
  // };

  return (
    <>
      <Wrap>
        <Title>단어 수정하기</Title>
        <Form>
          <P>단어</P>
          <Input
            type="text"
            ref={word}
            title="단어"
            value={my_lists.word}
            idText="input-word"
            required
          ></Input>
          <P>병음</P>
          <Input
            type="text"
            ref={pinyin}
            title="병음"
            idText="input-pinyin"
            required
          />
          <P>의미</P>
          <Input
            type="text"
            ref={def}
            title="의미"
            idText="input-def"
            required
          />
          <P>예문</P>
          <Input
            type="text"
            ref={ExEn}
            title="예문"
            idText="input-ex-en"
            required
          />
          <P>해석</P>
          <Input
            type="text"
            ref={ExKo}
            title="해석"
            idText="input-ex-ko"
            required
          />
          <br />

          <Btn
            type="submit"
            onClick={() => {
              if (
                word.current.value ||
                pinyin.current.value ||
                def.current.value ||
                ExEn.current.value ||
                ExKo.current.value === ""
              ) {
                alert("항목을 전부 채워주세요!");
                return;
              }
              history.push("/");
              // addMemoList();
            }}
          >
            수정하기
          </Btn>
        </Form>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 110px 0px 20px 0px;
  color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const P = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  width: 400px;
  font-size: 18px;
  transition: transform 1s ease-in-out;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
    transform: opacity 1s 1;
  }
`;

const Btn = styled.button`
  width: 300px;
  height: 50px;
  background: black;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 25px;
  margin: 40px auto;
  &:hover {
    background: #4a4a4a;
  }
`;

export default Modifi;
