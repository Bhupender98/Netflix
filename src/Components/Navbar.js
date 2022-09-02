import React from 'react';

const Navbar = () => {
    return(
        <div className="nav">
            <div className="logo">
                <h1>NETFLIX</h1>
            </div>
            <div className="btns">
                <button type="submit" id='language'>Language</button>
                <button type='submit' id='signIn'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar;