import { Dispatch, SetStateAction } from "react";
import "./Header.css";

interface HeaderProps {
    setShowAddModal: Dispatch<SetStateAction<boolean>>;
    setShowEditModal: Dispatch<SetStateAction<boolean>>;
}

const Content = (headerProps: HeaderProps) => {

    const buttonClick = () => {

    };

    return (
    <div className="header">
        <div className='header-button-wrapper'>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li><div className="menu-button"><span className="buttonText">Add new food</span></div></li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Content;