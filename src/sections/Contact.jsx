import { useState } from 'react';
import '../sections/Contact.css'

const Contact = () => {
    
    
    const initialError={
        name: null,
        email: null,
        message: null
    }

    const initialValue={
        name: '',
        email: '',
        message: ''
    }

    const [formData, setFormData] = useState(initialValue);
    const [error, setError] = useState(initialError);

    function validation(){
        const newError={};
        if(formData.name.trim() === ''){
            newError.name = 'name required';
        }else if(formData.name.trim().length<4){
            newError.name = 'name should be more than 3 char';
        }

         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(formData.email.trim() ===''){
            newError.email = 'email required';
        }else if(!emailRegex.test(formData.email)){
             newError.email = 'Enter a valid email (e.g., name@example.com)';
        }
        if(formData.message.trim() === ''){
            newError.message = 'message required';
        }
        setError(newError);
        return newError;
    }

    function formHandle(event){
        event.preventDefault();
        const validationErrors = validation();

        if(Object.keys(validationErrors).length===0){
            alert('Form submitted successfully');
            setFormData(initialValue);
            setError(initialError);
        }
    }

    function handleChange (event){
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if(error[name]){
            setError({
                ...error,
                [name]: null
            });
        }
    }


    return (
        <section id='contact' className='contact-component'>
            <h1>Get in Touch</h1>

            <form action="" onSubmit={formHandle}>
                <div className='form-field'>
                <input type="text" name="name" placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {error.name && (
                        <p className='error-style'>{error.name}</p>
                    )}
                </div>

                <div className='form-field'>
                <input type="email" name="email" placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                     />
                    
                     {error.email && (
                        <p className='error-style'>{error.email}</p>
                    )}
                </div>

                <div className='form-field'>
                <textarea name="message" placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                    ></textarea>
                      {error.message && (
                        <p className='error-style'>{error.message}</p>
                    )}
                </div>
                <button type='submit'>Send Message</button>
            </form>

        </section>
    );
};

export default Contact;