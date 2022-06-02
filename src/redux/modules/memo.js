import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "memo/LOAD";
const CREATE = "memo/CREATE";
const UPDATE = "memo/UPDATE";
const DELETE = "memo/DELETE";
const MODIFI = "memo/MODIFI";

// Reducer
export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
    case "memo/LOAD": {
      console.log("이제 값을 불러올거야");
      console.log(action.memo.sort());

      return { list: action.memo, is_loaded: true };
    }

    case "memo/CREATE": {
      console.log("이제 값을 만들거야");
      const new_memo_list = [...state.list];
      return { ...state, list: new_memo_list };
    }

    case "memo/UPDATE": {
      console.log("완료!");

      const new_memo_list = state.list.map((l, idx) => {
        if (parseInt(action.memo_index) === idx) {
          return { ...l, completed: l.completed + 1 };
        } else {
          return l;
        }
      });
      console.log({ list: new_memo_list });
      return { ...state, list: new_memo_list };
    }

    case "memo/MODIFI": {
      console.log("값을 수정할거야!");

      const new_memo_list = state.list.map((l, idx) => {
        if (parseInt(action.memo_index) === idx) {
          return { ...l };
        } else {
          return l;
        }
      });
      return { ...state, list: new_memo_list };
    }

    case "memo/DELETE": {
      const new_memo_list = state.list.filter((l, idx) => {
        return parseInt(action.memo_index) !== idx;
      });
      return { ...state, list: new_memo_list };
    }
    default:
      return state;
  }
}

const initalState = {
  is_loaded: false,
  list: [
    // {
    //   word: "Hello",
    //   pinyin: "həˈloʊ",
    //   def: "안녕",
    //   ExEn: "Hello John, how are you? ",
    //   ExKo: "안녕하세요, 존. 어떻게 지내세요?",
    //   completed: 0,
    // },
    // {
    //   word: "snack",
    //   pinyin: "snæk",
    //   def: "간단한 식사",
    //   ExEn: "a mid-morning snack",
    //   ExKo: "오전 중간의 간식",
    //   completed: 0,
    // },
    // {
    //   word: "software developer",
    //   pinyin: "ˈsɔːftwer dɪˈveləpə(r)",
    //   def: "소프트웨어 개발자",
    //   ExEn: "I'will powerful developer",
    //   ExKo: "나는 임팩트있는 개발자가 될거야.",
    //   completed: 0,
    // },
    // {
    //   word: "foolishly",
    //   pinyin: "ˈfuːlɪʃli",
    //   def: "바보",
    //   ExEn: "Are you a fool?",
    //   ExKo: "당신 바보야?",
    //   completed: 0,
    // },
  ],
};

// // Action Creators
export function loadMemo(memo) {
  return { type: LOAD, memo };
}

export function createMemo(memo) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, memo };
}

export function updateMemo(memo_index) {
  console.log("액션을 완료할거야!");
  return { type: UPDATE, memo_index };
}

export function modifiMemo(memo_index) {
  console.log("수정할 인덱스", memo_index);
  return { type: MODIFI, memo_index };
}

export function deleteMemo(memo_index) {
  console.log("지울 인덱스", memo_index);
  return { type: DELETE, memo_index };
}

/// middlewares(파이어베이스랑 통신하는 부분)
export const loadMemoFB = () => {
  return async function (dispatch) {
    const memo_data = await getDocs(collection(db, "memo"));

    let memo_list = [];

    memo_data.forEach((memo) => {
      memo_list.push({ id: memo.id, ...memo.data() });
    });
    dispatch(loadMemo(memo_list));
  };
};

export const createMemoFB = (memo) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "memo"), memo);
    const memo_data = { id: docRef.id, ...memo };
    dispatch(createMemo(memo_data));
  };
};

export const updateMemoFB = (memo_id, memo_completed) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "memo", memo_id);
    await updateDoc(docRef, { completed: memo_completed + 1 });

    console.log(getState().memo);
    const _memo_list = getState().memo.list;
    const memo_index = _memo_list.findIndex((m) => {
      return m.id === memo_id;
    });

    dispatch(updateMemo(memo_index));
  };
};

export const modifiMemoFB = (modifi, memo_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "memo", memo_id);
    await updateDoc(docRef, {
      word: modifi.word,
      pinyin: modifi.pinyin,
      def: modifi.def,
      ExEn: modifi.ExEn,
      ExKo: modifi.ExKo,
      completed: modifi.completed,
    });

    console.log(getState().memo);
    const _memo_list = getState().memo.list;
    _memo_list.findIndex((m) => {
      return m.id === memo_id;
    });

    dispatch(updateMemo(memo_id));
  };
};

export const deleteMemoFB = (memo_id) => {
  return async function (dispatch, getState) {
    if (!memo_id) {
      window.alert("아이디가 없네요!");
      return;
    }
    const docRef = doc(db, "memo", memo_id);
    await deleteDoc(docRef);

    const _memo_list = getState().memo.list;
    const memo_index = _memo_list.findIndex((m) => {
      return m.id === memo_id;
    });

    dispatch(deleteMemo(memo_index));
  };
};
