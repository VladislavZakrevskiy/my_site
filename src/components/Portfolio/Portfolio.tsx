import classes from '../styles/sections.module.scss'
import { PortfolioItem } from './PortfolioItem'

const items: {
    imgSrc: string
    GHLink: string
    title: string
}[] = [
    {
        GHLink: 'https://github.com/VladislavZakrevskiy/business-paint',
        imgSrc: '/assets/ProjectScreens/PaintOnline.png',
        title: 'Math Paint-Online',
    },
    {
        GHLink: 'https://github.com/VladislavZakrevskiy/windows-xp-LessonNumbers',
        imgSrc: '/assets/ProjectScreens/WinXP.png',
        title: 'Windows XP test',
    },
    {
        GHLink: 'https://github.com/VladislavZakrevskiy/gartic-phone',
        imgSrc: '/assets/ProjectScreens/GarticPhone.png',
        title: 'Clone Gartic Phone',
    },
    {
        GHLink: 'https://github.com/VladislavZakrevskiy/next_dnd_master',
        imgSrc: '/assets/ProjectScreens/VK.png',
        title: 'Service for making DnD charachter by ChatGPT on NextJS',
    },
]

const Portfolio = () => {
    return (
        <div className={classes.items}>
            {items.map((item) => (
                <PortfolioItem item={item} />
            ))}
        </div>
    )
}

export default Portfolio
