import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
        <div>
            <div class="dropdown">
                <span class="dashboard">
                    Dashboard
                    <i class="fa fa-angle-down"></i>
                </span>
                <div class="dropdown-content" >
                    <span class="subscription">
                        Subscription
                        <i class="fa fa-angle-down"></i>
                    </span>
                    <div class="dropdown-item" >
                        <span class="items">
                            Plans
                        </span>
                        <span class="items">
                           My Plans
                        </span>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Menu;
