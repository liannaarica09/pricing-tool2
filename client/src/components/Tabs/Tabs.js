import React from 'react';
import './Tabs.css';

const Tabs = props => {

    return (
        <div className="tabs">
            <ul className="row cntr tabs group">
                <li id="clothingTab" className="themed-button tabs" onClick={props.setClothing}><a href="#one">Clothing</a></li>
                <li id="nonClothingTab" className="themed-button tabs" onClick={props.setNonClothing}><a href="#two">Non-Clothing</a></li>
            </ul>
        </div>
    )
}

export default Tabs; 