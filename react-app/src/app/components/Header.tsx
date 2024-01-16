import "./Header.css";

const Content = () => {
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
                    <li><span className='add-food-button'>Add new food</span></li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Content;