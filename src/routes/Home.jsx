import React from 'react'
import classes from './Home.module.css'
import Hero from '../assets/hero.jpg'

const Home = () => {
  return (
    <div className={classes.home}>
        <div className={classes.hero}>
            <div className={classes.intro}>
                <p className={classes.title}>Football Fans Jharkhand</p>
                <p className={classes.desc}>Welcome to Football Fans Jharkhand, a community for football lovers
                     across the state! Whether you're a die-hard supporter of Real Madrid, Barcelona, Manchester United,
                     or any club, this is the place to connect and celebrate the game together.
                    We organize live match screenings, tournaments, and football events to bring fans together and grow
                     Jharkhand’s football culture. Stay updated with match discussions, team news, fan polls, and more!
                  <br /> <br />  📢 Join us and be part of Jharkhand’s biggest football community! 💪🔥⚽</p>
                  <div className={classes.joinButton}>Join Whatsapp Group</div>
            </div>
            <img className={classes.banner} src={Hero} alt="" />
        </div>
    </div>
  )
}

export default Home
