import { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    return (
        <div className='container flex flex-col mx-auto max-w-screen-2xl items-center min-h-screen justify-center bg-rose-800'>
            <div className='border rounded border-green-700 border-8 p-8 bg-green-50'>
                <p className='text-rose-700 font-bold text-3xl mb-4 flex justify-center'>Kari's Awesome Blog</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="text-green-700 font-bold mb-4 text-2xl">
                    {status === "success" 
                        ? "Success!" 
                        : "Join my email list for future updates!"
                    }
                    </div>

                    {status === "sending" && (
                    <div className=''>
                        sending...
                    </div>
                    )}
                    {status === "error" && (
                    <div 
                        className=""
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                    )}
                    {status === "success" && (
                    <div
                        className=""
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                    )}

                    {(status !== "success") && <div className='flex flex-col'>
                        <input
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            name='firstName'
                            id='firstName'
                            value={firstName}
                            placeholder="First Name"
                            required
                            className='mb-2 py-2 border-green-300 border-2 px-1'
                        />

                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            required
                            className='mb-2 py-2 border-green-300 border-2 px-1'
                        />

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            value={email}
                            placeholder="Email address"
                            required
                            className='mb-2 py-2 border-green-300 border-2 px-1'
                        />

                    </div>}

                    {(status !== "success") && <button onClick={handleSubmit} className="flex mx-auto text-white bg-rose-700 px-4 py-2 rounded font-bold tracking-wider mt-4">Subscribe</button>}
                </form>
            </div>
        </div>
    );
};



function MailchimpFormContainer() {
    const postUrl = `https://gmail.us12.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div>
            <MailchimpSubscribe 
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

export default MailchimpFormContainer;