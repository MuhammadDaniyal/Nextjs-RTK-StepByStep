const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

// current() -> for handling promise of state variable

// hm jb bh api call krta hen to promise return hota hy usko handle krna kalya redux createAsyncThunk provide krta he

// ACTION
export const fetchApiData = createAsyncThunk("fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

const initialState = {
  usersApiData: [],
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // declare actions in this
    addUser: (state, action) => {
      const data = {
        // data jo push krna ho store ma state ka zrya
        id: nanoid(),
        name: action.payload.name,
      };
      state.users.push(data);
      localStorage.setItem("users", JSON.stringify(state.users));
      // current() -> for handling promise of state variable
      console.log(current(state.users));
    },
    removeUser: (state, action) => {
      const filterUsers = state.users.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.users = filterUsers;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
  // reducer function for save data in reduxStore jo data fetch krka arha api sy
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.usersApiData = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;

/**
 * extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
 */
