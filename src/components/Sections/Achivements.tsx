import classes from '../styles/sections.module.scss'

const Achivements = () => {
    return (
        <div className={classes.achivements}>
            <div className={classes.achivement}>
                <span>1.5+</span>
                <p>years in web-dev</p>
            </div>
            <div className={classes.achivement}>
                <span>50+</span>
                <p>pet-projects done</p>
            </div>
            <div className={classes.achivement}>
                <span>100</span>
                <p>❤ for frontend</p>
            </div>
        </div>
    )
}

export default Achivements
