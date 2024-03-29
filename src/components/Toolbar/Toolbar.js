import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">انشاء حساب جديد</a></li>
                    <li><a href="/">تسجيل الدخول</a></li>
                </ul>
            </div>
            <div className="spacer" />
            <div className="toolbar__logo"><a href="/">امتحانات اونلاين</a></div>
        </nav>
    </header>
)
export default toolbar