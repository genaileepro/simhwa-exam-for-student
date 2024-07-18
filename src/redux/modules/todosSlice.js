import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { waitTwoSeconds } from '../../utils';
/*2초 지연을 시키는 함수입니다 (비동기 작업). */

export const __addToDo = createAsyncThunk(
    '__addToDo',
    async (payload, thunkAPI) => {
        await waitTwoSeconds();
        return payload;
    }
);

export const __deleteTodo = createAsyncThunk(
    '__deleteToDo',
    async (payload, thunkAPI) => {
        await waitTwoSeconds();
        return payload;
    }
);

const initialState = {
    list: [
        {
            id: 1,
            title: '리액트 공부하기',
            body: '주특기 어렵다.',
        },
        {
            id: 2,
            title: `자바스크립트 공부하기`,
            body: `자바스크립트는 어려워~`,
        },
        {
            id: 3,
            title: `리액트 공부하기3333`,
            body: `리액트는 어려워~3333`,
        },
    ],
    todo: {
        id: 0,
        title: '',
        body: '',
    },
};
console.log(initialState);

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(__addToDo.fulfilled, (state, action) => {
                const { payload } = action;
                state.list.push(payload);
            })
            .addCase(__deleteTodo.fulfilled, (state, action) => {
                const { payload } = action;
                state.list = state.list.filter(
                    (todo) => todo.id !== payload.id
                );
            });
    },
});

export default todosSlice.reducer;
