import React, { useEffect, useState, useRef } from "react"
import './Countdown.scss'

const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('May 30, 2022 00:00:00').getTime()

        interval = setInterval(() => { 
            const now = new Date().getTime()
            const distance = countdownDate-now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24) )
            const hours = Math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60) )
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)) 
            const seconds = Math.floor(distance % (1000 * 60) / 1000 )
            if (distance < 0) {
                clearInterval(interval.current)
            } 
            else {
                setTimerDays(days)
                setTimerHours( hours)
                setTimerMinutes(minutes)
                setTimerSeconds (seconds)
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className="timer-contains">
            <div className="timer-item">
                <div className="timer-number">
                    {timerDays}
                </div>

                <div className="timer-text">
                    Days
                </div>
            </div>
            
            <div className="timer-item">
                <div className="timer-number">
                    {timerHours}
                </div>

                <div className="timer-text">
                    Hours
                </div>
            </div>
            
            <div className="timer-item">
                <div className="timer-number">
                    {timerMinutes}
                </div>

                <div className="timer-text">
                    Minutes
                </div>
            </div>

            <div className="timer-item">
                <div className="timer-number">
                    {timerSeconds}
                </div>

                <div className="timer-text">
                    Second
                </div>
            </div>
        </div>
    );
}

export default Countdown