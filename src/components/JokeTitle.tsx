import classes from '../styles/partsSections.module.scss'
import { useMemo } from 'react';

interface IJokeTitleProps {
    jokeURL: string
    joke: string
}

const JokeTitle = ({jokeURL, joke}:IJokeTitleProps) => {
    const jokeParts: string[] = useMemo(() => joke.split(' '), [])

    return (
        <div className={classes.joke_container}>
            <p>{jokeParts[0]}</p>
            <img src={jokeURL}/>
            <p>{jokeParts[1]}</p>
        </div>
    )
}

export default JokeTitle