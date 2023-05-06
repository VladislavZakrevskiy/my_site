import classes from '../styles/icons.module.scss'

export const icons = ['telegram', 'vk', 'hhru', 'linkedin'] as const
export type iconType = typeof icons[number]

interface IICon {
    iconType: iconType
    url: string
}

const Icon = ({iconType, url}: IICon) => {
  return (
    <a href={url} target='_blank'>
      <div className={classes.icon}>
        <img className={classes[iconType]}/>
      </div>
    </a>
  )
}

export default Icon