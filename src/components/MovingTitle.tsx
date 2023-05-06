import classes from '../styles/partsSections.module.scss'
import { useState } from 'react';

interface IMovingTitleProps {
    children: string
}

const MovingTitle = ({children}: IMovingTitleProps) => {
    const [left, setLeft] = useState<number>()

    var windowHeight = window.innerHeight;
    var scrollArea = 1000 -  windowHeight;

    window.addEventListener('scroll', () => {
    var scrollTop = window.pageYOffset || window.scrollY;
    var scrollPercent = scrollTop/scrollArea || 0;
    
    setLeft(scrollPercent*window.innerWidth / 40)
    });

    return (
        <p className={classes.title} style={{left: left}}>
            {children}
        </p>
  )
}

export default MovingTitle