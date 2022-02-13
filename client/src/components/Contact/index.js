import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../../utils/mutations';

function ContactForm() {
    const [formState, setFormState] = useState({ contactName: '', email: '', message: ''});
    const { contactName, email, message } = formState;
    const submitMessage = 'Your message has been submitted, Thanks!';
    const [submitDisplay, setSubmitDisplay ]= useState('none');
    const [addContact, { error }] = useMutation(ADD_CONTACT);
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);
        try {
            // execute addContact mutation and pass in variable data from form
            const { data } = await addContact({
              variables: { ...formState }
            });
            console.log(data)
            setSubmitDisplay('block');
            setTimeout(() => setSubmitDisplay('none'), 3000);
            
          } catch (e) {
            console.error(e);
            
          }
            
        

    }
      
    return (
      <section className='container'>
        <h1>Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" >Name:</label>
            <input
              type="text"
              value={contactName}
              onChange={handleChange}
              name="contactName"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="email" >Email address:</label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="message" >Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              rows="5"
              id="message"
            />
          </div>
         
          <button data-testid="button" type="submit">Submit</button>
        </form>
        {error && <div className="error">Message failed to send!  All fields required!</div>}
        <h5 className={submitDisplay}>{submitMessage}</h5>
      </section>
    );

}

export default ContactForm;