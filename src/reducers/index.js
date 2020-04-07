import * as types from '../actions/ActionTypes';
import axios from 'axios';

//api key
const HOST = "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com";
const API_KEY = "d4969b2db7msh8754205a3a7af00p160846jsnb32415996917";

const URL = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list";

// 초기 상태를 정의합니다
const initialState = {
    items: [],
};

const getItems = () => {
    console.log("getItems() called");
    axios.get(URL, {
        params: {
            'country': 'us',
            'lang': 'en',
            'currentpage': 0,
            'pagesize': 30
        },
        headers: {
            // 'Content-Type': 'application/json',
            'X-Api-Host': HOST,
            'X-RapidAPI-Key': API_KEY
        },
    }
    ).then((res =>{
        return res.data.results;
    }));
}

/* 
    리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
    state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
    action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
    이 때 주의 할 점은 state 를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
*/

function counter(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_DATA: 
            const arr = this.getItems();
            return {
                state: arr,
//                number: state.number + 1
            };
        default:
            return state;
    }
};

export default counter;
