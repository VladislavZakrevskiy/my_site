import classes from '../styles/UI.module.scss'

type ITitleProps = {
    text: string
    fontSize: number
}

const Title = ({text, fontSize}: ITitleProps) => {
  return (
    <p style={{fontSize}} className={classes.title}>
        {text}
    </p>
  )
}

export default Title