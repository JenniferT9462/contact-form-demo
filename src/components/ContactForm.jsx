import React from 'react'
import { useState } from 'react'

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onMessageChange(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Thank You ${name}! Your message: ${message} has been sent! `);
        setName('');
        setMessage('');
    }

  return (
    <div className='w-50 border border-3 p-4 rounded'>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label' htmlFor="name">Name</label>
                <input className='form-control' type="text" value={name} onChange={onNameChange}/>
            </div>

            <div className='mb-3'>
                <label className='form-label' htmlFor="message">Message</label>
                <textarea className='form-control' name="message" id="message" value={message} onChange={onMessageChange}></textarea>
            </div>

            <button type='submit' className='btn btn-success'>Send</button>
        </form>
    </div>
  )
}
