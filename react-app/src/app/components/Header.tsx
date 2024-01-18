import { Dispatch, SetStateAction, useState } from "react";
import "./Header.css";

interface HeaderProps {
    setShowAddModal: Dispatch<SetStateAction<boolean>>;
    setShowEditModal: Dispatch<SetStateAction<boolean>>;
}

const Header = (headerProps: HeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const addButtonClick = () => {
        headerProps.setShowAddModal(true);
        setMenuOpen(false);
    };

    return (
    <div className="header">
        <div className='header-button-wrapper'>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" 
                    checked={menuOpen} onChange={(event: any): void => {
                        if (menuOpen === true) {
                            setMenuOpen(event.target = false);
                        } else {
                            setMenuOpen(event.target = true);
                        }
                }   } />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li><div className="menu-button" onClick={ addButtonClick } ><span className="buttonText">Add new food</span></div></li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Header;