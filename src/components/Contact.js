import React from 'react';

export default function Contact() {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(details),
        })
        let result = await response.json()
        alert(result.status)
    }


    return (
        <section id='contact' className='relative'>
            <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
                <div className='lg:w-1/2 md:2-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative'>
                    <iframe 
                        width="100%" 
                        height="100%"
                        title='map'
                        className='absolute inset-0'
                        style={{ filter: 'opacity(0.7)' }} 
                        loading="lazy" 
                        frameBorder={0} 
                        marginHeight={0}
                        marginWidth={0}
                        src="https://www.google.com/maps/embed/v1/place?q=9960+el+granito+ave,+la+mesa,+ca+91941&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    >
                    </iframe>
                    <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
                        <div className='lg:w-1/2 px-6'>
                            <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                                ADDRESS
                            </h2>
                            <p className='mt-1'>
                                9960 El Granito Ave.
                                La Mesa, CA 91941
                            </p>
                        </div>
                        <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                            <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                                EMAIL
                            </h2>
                            <a className='text-green-400 leading-relaxed' href='mailto:karicheslock1@gmail.com'>
                                karicheslock1@gmail.com
                            </a>
                            <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                                PHONE
                            </h2>
                            <p className='leading-relaxed'>205-616-1421</p>
                        </div>
                    </div>
                </div>
                <form
                    netlify='true'
                    name='contact'
                    onSubmit={handleSubmit}
                    className='lg:w-2/5 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
                >
                    <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
                        <span className='text-green-400'>Contact</span> Me
                    </h2>
                    <p className='leading-relaxed mb-5'>
                        If you hire me, you'll be getting a passionate application developer with an eye for design and the technical skills to make things work.
                    </p>
                    <div className='relative mb-4'>
                        <label htmlFor='name' className='leading-7 text-sm text-gray-400'>
                            Name
                        </label>
                        <input 
                            type='text'
                            id='name'
                            name='name'
                            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'                         
                        />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor='email' className='leading-7 text-sm text-gray-400'>
                            Email    
                        </label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        /> 
                    </div>
                    <div className='relative mb=4'>
                        <label htmlFor='message' className='leading-7 text-sm text-gray-400'>
                            Message
                        </label>
                        <textarea 
                            id='message'
                            name='message'
                            className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                        />
                    </div>
                    <button
                        type='submit'
                        className='text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

