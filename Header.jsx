import React from 'react'
import classes from './Header.module.css'
import HeaderMyPage from './HeaderMyPage'


const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <img className={classes.header_movieIcon} src="https://cdn-icons-png.flaticon.com/512/807/807734.png" alt="" />
        <h1>영화 예매</h1>
        <input className={classes.header_input} type="text" />
        <HeaderMyPage onOpen={props.onOpen}/>
    </header>

</>
  )}
export default Header