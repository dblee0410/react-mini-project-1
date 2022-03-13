import React from 'react'
import classes from './Movie.module.css'

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <div className={classes.movie__info}>
        <button className={classes.button} onClick={props.onOpen}>
          <div className={classes.img}>{props.img}</div>
        </button>
        <h3>{props.name}</h3>
        <div className={classes.director}>감독 : {props.director}</div>
        <div className={classes.actor}>출연배우 : {props.actor}</div>
        <div className={classes.age}>등급 : {props.age}</div>
        <div className={classes.date}>개봉일 : {props.date}</div>
        <div className={classes.runningtime}>상영시간 : {props.runningtime}</div>
        <div className={classes.price}>가격 : {props.price}</div>
      </div>  
    </li>
  )
}

export default Movie