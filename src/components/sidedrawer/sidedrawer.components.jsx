import React from 'react';
import './sidedrawer.styles.css';
import {bubble as Menu} from 'react-burger-menu';

const SideDrawer = () => {
    return (
        <div>
            <Menu>
                
                <a className="menu-item" href="/">
                    Profile
                </a>

                <a className="menu-item" href="/education">
                    Education
                </a>

                <a className="menu-item" href="/skills">
                    Skills
                </a>

                <a className="menu-item" href="/prev_projects">
                    Previous Experiences
                </a>
            </Menu>
        </div>
    )
}

export default SideDrawer;