

import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './contact.scss'


const Contact = () => {
    const form= useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v8dnbf6', 'template_t0e4j9i', form.current, '4TO4Q-MEzMZkQd2lp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
    <div className="container-con">
        <h2 className='--text-center'>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}
        className='--form-control--card'>
            <h4>Your Name</h4>
            <input type='text' 
            placeholder='fullname' 
            className='cont-ip'
            name='user_name' required/>
            <h4>Your Email</h4>
            <input type='eamail' 
            placeholder='email' 
            className='cont-ip'
            name='user_email' required/>
            <h4>Enter your Message</h4>
            <textarea name='message'
            className='cont-ip' 
            cols='30' row='10'></textarea> 
            <button className='btn'>Send message</button>
        </form>
    </div>
  )
}

export default Contact