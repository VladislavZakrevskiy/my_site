import React, { useState, useRef } from 'react'
import classes from '../styles/UI.module.scss'
import formsClasses from '../styles/sections.module.scss'
import emailjs, { init } from '@emailjs/browser'

interface IFormProps {
    padding: number
}

const Form = ({ padding }: IFormProps) => {
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [phone, setPhone] = useState<number>()
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const formRef = useRef<HTMLFormElement>(null)
    init('TUz5-O93Tw_ceY3JW')

    const send = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        emailjs
            .sendForm('service_gonx67b', 'template_g8xvuup', formRef.current!, 'TUz5-O93Tw_ceY3JW')
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <form className={formsClasses.form} ref={formRef} style={{ padding }}>
            <p>Send to me info about you!</p>

            <div className={formsClasses.inputGroup}>
                <textarea
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={classes.input}
                    placeholder="Name or company"
                    rows={2}
                    name="name"
                />

                <textarea
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={classes.input}
                    placeholder="Last Name"
                    rows={2}
                    name="lastName"
                />

                <textarea
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.input}
                    placeholder="Email"
                    rows={2}
                    name="email"
                />

                <textarea
                    value={phone}
                    onChange={(e) => setPhone(+e.target.value)}
                    className={classes.input}
                    placeholder="Phone"
                    rows={2}
                    name="phone"
                />
            </div>

            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={classes.input}
                placeholder="Maybe Message?"
                rows={4}
                name="message"
            />

            <button onClick={send}>Send</button>
        </form>
    )
}

export default Form
