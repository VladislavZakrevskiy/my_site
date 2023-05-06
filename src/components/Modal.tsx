import Form from './Form'
import classes from '../styles/modal.module.scss'

interface IModal {
    hide: boolean
}

const Modal = ({hide}: IModal) => {
  return (
    <div className={classes.modal} style={{display: hide ? 'flex' : 'none'}}>
        <Form padding={10}/>
    </div>
  )
}

export default Modal