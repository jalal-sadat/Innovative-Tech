import React from 'react';
import '../sections/Service.css'
import { servicesData } from './ServiceData';
const Service = () => {

    function handleButton(){
        alert('you clicked  Get Started button');
    }

    return (
        <section  id='service' className='service-component'>
            <h1>Our Services</h1>
            <p className='service-intro'>
                We provide cutting-edge technology solutions to help your business grow and succeed in the digital world. Our  expert team delivers high-quality services tailored to your specific needs.
            </p>
            <div className='card-container'>
                    {servicesData.map(service=>{
                        return(
                        <div 
                           key={service.id}
                           className='cards'
                        >
                            <img src={service.image} alt= {service.title} />
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <button
                            onClick={handleButton}
                            >Get Started</button>

                        </div>)
                    })}
            </div>


            
        </section>
    );
};

export default Service;