import classes from '../styles/partsSections.module.scss'
import MovingTitle from '../common/MovingTitle'

interface ISectionProps {
    text: string
    children: any
}

const Section = ({ text, children }: ISectionProps) => {
    return (
        <section className={classes.section}>
            <MovingTitle>{text}</MovingTitle>
            {children}
        </section>
    )
}

export default Section
