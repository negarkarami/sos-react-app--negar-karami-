import "./MenuMobile.css";
import {Constant} from "../../Constant";

const MenuMobile = () => {
  return(
      <ul className="ItemsNavMob">
          <li className="ItemNavMob">
              <a href="/" className="LinkNavMob">{Constant.Home}</a>
          </li>
          <li className="ItemNavMob">
              <a href="/todo-list" className="LinkNavMob">{Constant.ToDoList}</a>
          </li>
          <li className="ItemNavMob">
              <a href="/" className="LinkNavMob">{Constant.HealthCenter}</a>
          </li>
          <li className="ItemNavMob">
              <a href="/" className="LinkNavMob">{Constant.BranchOur}</a>
          </li>
          <li className="ItemNavMob">
              <a href="/" className="LinkNavMob">{Constant.QuestionRepeat}</a>
          </li>
      </ul>
  )
}

export default MenuMobile