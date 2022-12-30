export const todolist = (list) => {
  return {
    type: "TODOLIST",
    payload: {
        list : list
    }
  };
};

export const addtodo = (title) => {
  return {
    type: "ADD_TODO",
    payload: {
      userId: 1,
      title: title,
      completed: false,
    },
  };
};

export const updatetodo = (id, title) => {
  return {
    type: "UPDATE_TODO",
    payload: {
      id: id,
      title: title
    },
  };
};

export const deletetodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id: id,
    },
  };
};

export const completedtodo = (id) => {
    return {
      type: "COMPLETED_TODO",
      payload: {
        id: id,
        completed : true
      },
    };
  };
