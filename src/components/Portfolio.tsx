import classes from '../styles/sections.module.scss'



const Portfolio = () => {
  return (
    <div className={classes.portfolio}> 
        <div className={classes.items}>
            <a href='https://github.com/VladislavZakrevskiy/gartic-phone' target='_blank'>Clone Gartic Phone</a>
            <a href="https://github.com/VladislavZakrevskiy/business-paint" target='_blank'>Math Paint-Online</a>
            <a href='https://github.com/VladislavZakrevskiy/mediaSocial_front' target='_blank'>Media Social</a>
            <a href='https://github.com/VladislavZakrevskiy/windows-xp-LessonNumbers' target='_blank'>Windows XP test</a>
            <a href='https://github.com/VladislavZakrevskiy/3d_in_console' target='_blank'>3D in console of win</a>
        </div>
        <div className={classes.text}>
            <p>
                Work That Speaks Itself
            </p>
            <span>
            I love creating things that drive people crazy.
            </span>
        </div>
    </div>
  )
}

export default Portfolio