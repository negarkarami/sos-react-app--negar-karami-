import "./NavBar.css";
import {Constant} from "../../Constant";
import Logo from "../../static/img/Vector.png"
import LogoMob from "../../static/img/logo-mob.png"
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import MenuMobile from "../menu-mobile/MenuMobile";
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';


const NavBar = () => {

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <nav className=" NavDesktop box-mode">
                <ul className="Items">
                    <li className="Item RightLogo">
                        <a href={"/"} className="Link LinkLogo">
                            <img className="ImgLogo" src={Logo}/>
                        </a>
                        <div className="TitleLogo">
                            <h3 className="HelpIran">{Constant.HelpIran}</h3>
                            <p className="Assistance">{Constant.IranAssistance}</p>
                        </div>
                    </li>
                    <li className="Item">
                        <a href={"/"} className="Link">{Constant.Home}</a>
                    </li>
                    <li className="Item">
                        <a href={"/todo-list"} className="Link">{Constant.ToDoList}</a>
                    </li>
                    <li className="Item">
                        <a href={"/"} className="Link">{Constant.HealthCenter}</a>
                    </li>
                    <li className="Item">
                        <a href={"/"} className="Link">{Constant.BranchOur}</a>
                    </li>
                    <li className="Item">
                        <a href={"/"} className="Link">{Constant.QuestionRepeat}</a>
                    </li>
                    <li className="Item">
                        <a href={"/"} className="Link">
                            <button className="Btn-LA">
                                {Constant.LoginActive}
                            </button>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="NavMobile">
                <div onClick={setModalIsOpenToTrue}>
                    <MenuIcon/>
                </div>
                <Modal isOpen={modalIsOpen}>
                    <button className="BtnClose" onClick={setModalIsOpenToFalse}><CloseIcon/></button>
                    <MenuMobile/>
                </Modal>
                <div className="WrapperLogoMob">
                    <span className="BoxImg">
                        <img src={LogoMob}/>
                    </span>
                    <span className="detailMob">
                        <p className="HelpIran">{Constant.HelpIran}</p>
                        <p className="IranAssistance">{Constant.IranAssistance}</p>
                    </span>
                </div>
                <div className="Item">
                    <a href={"/"} className="Link">
                        <button className="Btn-LA">
                            {Constant.LoginActive}
                        </button>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;