import classes from '../styles/sections.module.scss'
import { FC } from 'react'

interface PortfolioItemProps {
    item: {
        imgSrc: string
        GHLink: string
        title: string
    }
}

export const PortfolioItem: FC<PortfolioItemProps> = ({ item }) => {
    const { GHLink, imgSrc, title } = item
    return (
        <div className={classes.item}>
            <img src={imgSrc} alt={`${title} picture`} />
            <div className={classes.text_section}>
                <h3>{title}</h3>
                <a href={GHLink}>To Github!</a>
            </div>
        </div>
    )
}
