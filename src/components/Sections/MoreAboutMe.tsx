import classes from '../styles/sections.module.scss'

const MoreAboutMe = () => {
    return (
        <div className={classes.more_about_me}>
            <p className={classes.main}>{'More \n About Me ...'}</p>
            <p className={classes.about}>
                Let me give you a short intro about myself. I’m a frontend developer from Russia. I learned programming
                self and attended events to gain knowledge In my marketing journey, I have worked with many useful
                projects, that there are in my
                <a href="https://github.com/VladislavZakrevskiy" target="_blank">
                    Github
                </a>
                and I'm finding a project to work. My whole work journey revolves around three words which you will
                learn below. My main focus is to bring profit to both the business owner and customer.
            </p>
        </div>
    )
}

export default MoreAboutMe
