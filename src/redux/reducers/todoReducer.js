const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODOLIST":
      return {
        ...state,
        list: action.payload.list,
      };

    case "ADD_TODO":
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          title: action.payload.title,
          completed: false,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            title: action.payload.title,
            completed: false,
            userId: 1,
          },
        ],
      };

    case "UPDATE_TODO":
      fetch(`https://jsonplaceholder.typicode.com/todos/${action.payload.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: action.payload.title,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      const updateIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list[updateIndex].title = action.payload.title;
      return {
        ...state,
        list: [...state.list],
      };

    case "DELETE_TODO":
      fetch(`https://jsonplaceholder.typicode.com/todos/${action.payload.id}`, {
        method: "DELETE",
      });
      const newlist = state.list.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        list: newlist,
      };

    case "COMPLETED_TODO":
      const objIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list[objIndex].completed
        ? (state.list[objIndex].completed = false)
        : (state.list[objIndex].completed = true);
      return {
        ...state,
        list: [...state.list],
      };

    default:
      return state;
  }
};
export default todoReducer;
