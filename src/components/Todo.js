import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todolist, updatetodo, deletetodo, completedtodo } from '../redux/action/index'

export default function Todo() {
  
  const dispatch = useDispatch();
  const newlist = useSelector((state) => state.todoReducer.list);
  //Call API for todolist
  const fetchdata = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let json = await response.json();
    dispatch(todolist(json));   
  };

  //Update Title for Todo
  function update(title, id)
  {
    let person = prompt("Please Update Your Todo:", title);
    let updateTitle = person ? person : title;
    dispatch(updatetodo(id, updateTitle));
  }
  
  useEffect(() => {
    fetchdata();    // eslint-disable-next-line
  },[]);

  return (
    <div>
      <ul className="added_tasks">
        {Array.from(newlist).map((item) => (
          <li key={item.id}>
            <div className="content">
              <span className="tick" onClick={()=>dispatch(completedtodo(item.id))}><i className={"fa fa-check" + (item.completed ? "" : "d-none")}></i></span>
              <p><strike className={(item.completed ? "" : "strike-none")}>{item.title}</strike></p>
            </div>
            <span onClick={()=> update(item.title, item.id)}><i className="fa fa-pencil"></i></span>
            <span onClick={()=>dispatch(deletetodo(item.id))}><i className="fa fa-trash"></i></span>
          </li>
        ))}        
      </ul>
    </div>
  );
}
