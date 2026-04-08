import React from 'react';
import './Hero.css'

const Hero = () => {

     function buttonHandle(text){
            alert(`You click the ${text} button`)
        }

    return (
        <section id='home' className='hero-component'>
            
            <h1>Innovative </h1>
            <h1 id='color-grad'>Tech Solutions</h1>
            <p>Empowering Your Digital Futures</p>

            <div className='button-container'>
                <button
                    onClick={()=>buttonHandle('Get Started')}
                >Get Started</button>
                <button
                    onClick={()=>buttonHandle('Learn More')}
                >Learn More</button>
            </div>
            
        </section>
    );
};

export default Hero;