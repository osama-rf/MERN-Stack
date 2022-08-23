import React, {useContext} from 'react';
import UserContext from '../contexts/UserContext';

const Navbar = () => {

    const { name } = useContext(UserContext);

    return (
        <nav className="navbar navbar-dark bg-primary text-light align-items-center">Hi {name}!</nav>
    );
}

export default Navbar;