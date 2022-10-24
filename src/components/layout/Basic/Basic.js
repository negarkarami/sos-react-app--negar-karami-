import "./Basic.css"
import NavBar from "../../navbar/NavBar";

export default function Basic(props) {

    return(
        <div className= "Basic ">
            <header className="Header ">
                <NavBar >
                    {props.title}
                </NavBar>
            </header>
            <main className="Main">
                {props.children}
            </main>
        </div>
    )
}
