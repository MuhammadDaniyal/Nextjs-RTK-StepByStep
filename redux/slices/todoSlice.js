const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

// current() -> for handling promise of state variable

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // declare actions in this
    addTodos: (state, action) => {
      const data = {
        // data jo push krna ho store ma state ka zrya
        id: nanoid(),
        name: action.payload.name,
      };
      state.todoList.push(data);
      localStorage.setItem("users", JSON.stringify(state.todoList));
      // current() -> for handling promise of state variable
      console.log(current(state.todoList));
    },
    removeTodo: (state, action) => {
      const filtertodoList = state.todoList.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.todoList = filtertodoList;
      localStorage.setItem("users", JSON.stringify(state.todoList));
    },
  },
});
export default todoSlice.reducer;
export const { addTodos, removeTodo } = todoSlice.actions;
