import classes from '../styles/sections.module.scss'



const Achivements = () => {
  return (
    <div className={classes.achivements}>
        <div className={classes.achivement}>
            <span>14</span>
            <p>months of learning</p>
        </div>
        <div className={classes.achivement}>
            <span>20+</span>
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
