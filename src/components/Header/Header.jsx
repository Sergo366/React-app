import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.container}>
            <div className={s.image}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiTw2MT6LqX52c7quNm2lfZCwYQkRBMyrxQ&usqp=CAU' />
            </div>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div> {props.login} <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
        </div>
    </header>
}

export default Header;