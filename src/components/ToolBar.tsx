import classes from '../styles/sections.module.scss'
import iconClasses from '../styles/icons.module.scss'
import Icon, { icons } from './Icon'
import { useState, useMemo } from 'react';
import Modal from './Modal'

const ToolBar = () => {
    const [hide, setHide] = useState<boolean>(false)
    const urls = useMemo(() => ['https://t.me/hihihahihihi', 'https://vk.com/usikiprohodyatvtrusiki', 'https://astrakhan.hh.ru/applicant/resumes/view?resume=e5076ca6ff0bf3e3230039ed1f72775a384873', 'https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%B7%D0%B0%D0%BA%D1%80%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-3047b8275/'],[])

    return (
        <div className={classes.toolbar}>
            <img className={iconClasses.burger} onClick={() => setHide(prev => !prev)}/>
            <Modal hide={hide}/> 
            <div className={classes.icon_group}>
            {
                icons.map((iconClass, i ) => <Icon url={urls[i]} iconType={iconClass}/>)
            }
            </div>
        </div>
    )
}

export default ToolBar











