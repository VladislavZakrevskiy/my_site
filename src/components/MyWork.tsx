import classes from '../styles/partsSections.module.scss'

const MyWork = () => {
  return (
    <div className={classes.works}>
        <div className={classes.work}>
            <p>
                React skills
            </p>
            <span>
                To create beautiful and functional interfaces, I use the React framework. I believe that I do an excellent job with the tasks that a business may have for promotion, service or other website
            </span>
        </div>
        <div className={classes.work}>
            <p>
                Website layout
            </p>
            <span>
                Few people have the taste and talent of a designer among frontend developers, but I can both create and repeat a figma, photoshop or adobe illustrator design with the so-called pixel perfect. It's a lot of work
            </span>
        </div>
        <div className={classes.work}>
            <p>
                Clean Code
            </p>
            <span>
                I try to follow Uncle Bob's advice, so my code can be called clean, readable, and, most importantly, scalable, which is rarely found among developers, in particular frontenders
            </span>
        </div>
        <div className={classes.work}>
            <p>
                Good Job
            </p>
            <span>
                I really like to do work efficiently and accurately, and trying to deliver it on time. This distinguishes a good developer from a bad one, in my opinion. I think this is one of the main qualities of any software engineer in the modern world, where the goal is to complete business tasks
            </span>
        </div>
    </div>
  )
}

export default MyWork