import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {

    return (
        <div id="MenuContainer">
            <p id="guest">こんにちは、{props.guest}様</p>{/*アラートでゲスト名を入れて表示させるためのprops */}
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <Link to='/' id="menu">home</Link>
                    </div>
                    <div className="col-md-2">
                        <Link to='/about' id="menu">about</Link>
                    </div>
                    <div className="col-md-2">
                        <Link to='/skill' id="menu">skill</Link>
                    </div>
                    <div className="col-md-2">
                        <Link to='/work' id="menu">work</Link>
                    </div>
                    <div className="col-md-2">
                        <Link to='/contact' id="menu">contact</Link>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Menu;