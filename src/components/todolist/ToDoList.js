import "./ToDoList.css"
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';

const ToDoList = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {

        const newTodo = {
            id: Math.random(),
            todo: todo
        }
        setList([...list, newTodo]);
        setInput("")

    }

    const DeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    }

    return(
        <div className="ToDoList">
            <h1>Todo List</h1>
            <div className="ToDo">
                <input
                    className="Input"
                    type="text"
                    value={input}
                    placeholder="Write Todo"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="BtnAdd" onClick={() => addTodo(input)}>Add</button>
            </div>
            <ul className="ItemsTodo">
                {
                    list.map((item, index) => (
                        <li className="ItemTodo" key={index}>
                            {item.todo}
                             <button className="BtnDelete"  onClick={() => DeleteTodo(item.id)}>
                                 <CloseIcon style={{fontSize: "15px"}}/>
                             </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default ToDoList;