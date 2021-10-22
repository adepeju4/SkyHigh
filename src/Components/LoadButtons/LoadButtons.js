import React from 'react';
import {load__buttons, prev, next, stop, counter} from './loadButtons.module.css'

function LoadButtons({handleNext, handlePrev, count}) {
    return (
        <div className={load__buttons} >
            <button className={count < 2 ? stop : prev} type="submit" onClick={handlePrev}>
                Prev
            </button>
            <div className={counter} style={{display: count > 0 ? 'inline' : 'none'}}>
            {count}
            </div>
            <button className={next} type="submit" onClick={handleNext}>
                Next
            </button>
        </div>
    )
}

export default LoadButtons
