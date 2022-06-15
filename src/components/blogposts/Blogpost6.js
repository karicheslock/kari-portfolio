import {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import Comments from '../comment-section/comments/Comments';
import {auth, provider} from '../../firebase-config';
import {signInWithPopup, signOut} from 'firebase/auth';
import Gist from 'react-gist';
import Blogpost6PrintableComponent from "./Blogpost6PrintableComponent";
import {Adsense} from '@ctrl/react-adsense';

function Blogpost6() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [userId, setUserId] = useState('');

    const signInWithGoogle = () => {
            signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
        });
    };
    
    const signUserOut = () => {
        signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        });
    };

    useEffect(() => {
        if (isAuth) {
            setUserId(auth.currentUser.uid)
        }   
    }, [isAuth]);


    return (
        <div className="container flex flex-col justify-center max-w-4xl m-auto bg-neutral-50 text-stone-600 p-10">
            <div>
            <div className="flex mb-4">
                <div className="flex flex-col justify-center">
                
                <div className="flex justify-between">
                    <div>
                    <div className='font-bold text-sky-900 mb-10 pr-2 text-2xl'>How to Create a Printable Component in React using react-to-print</div>
                        <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                        <div className='text-sm text-sky-700'>May 30, 2022</div>
                        <div className='text-sm text-gray-500 mb-4'>1 min read</div>
                    </div>
                    <img src="../images/blogpost6images/printer.jpg" alt='A printer' className="w-1/3 h-48 rounded"></img>
                </div>
                    
        
                    <TwitterShareButton
                        title={"How to Create a Printable Component in React using react-to-print"}
                        url={'https://www.karicheslock.com/blogpost6'}
                        className='flex'
                    >
                        <TwitterIcon size={20} borderRadius={10} className='mb-4 mr-2' />
                        <p className="text-sm">Tweet this article</p>
                    </TwitterShareButton>

                    <div className="flex">
                        <Link to='/subscribe' className="text-white bg-blue-500 rounded px-2 hover:text-lg" target='_blank'>Subscribe</Link> <p className="pl-1 whitespace-nowrap">to this blog to receive future updates!</p>
                    </div>

                </div>
                
            </div>
            
            <p className="mb-4 font-bold text-rose-700">Hello, Happy Coders!</p>
            <p className="mb-5 leading-7">In this post I'm going to show you how to create a simple printable component that can be added to any website.  The react-to-print package will create a pdf of any component.  There are just a few tricks and tips for using it  
            that I will show you here.</p>
            <p className="mb-5 leading-7">The first step is to install the react-to-print package using <code className="bg-gray-200">npm install react-to-print</code> or <code className="bg-gray-200">yarn install react-to-print</code>.</p>
            <p className="mb-5 leading-7">Next you will need to create a new component for your printable element.  I have created an example printable component below that will print an image.</p>
            <Gist id="3c0e884cc575a7affb795f87ef70baa3" />
            <p className="mt-5 mb-5 leading-7">There are a couple of things to note here.</p>
            <p className="mb-5 leading-7">First of all, we are using the React hook useRef to reference our component.  This reference is used in the ReactToPrint component that we are importing from the react-to-print package.</p>
            <p className="mb-5 leading-7">You will also see that I have created a button with some styling inside the ReactToPrint component.  I styled this button using TailwindCSS classes, but you can use whatever you want.</p>
            <p className="mb-5 leading-7">Finally, I added the component I want print in a <span className="italic">div</span> element below the ReactToPrint element.  I would recommend keeping the <span className="italic">style</span> tag when you are creating 
            your own elements.  This will allow you to switch between portrait and landscape for your print page orientation.  Again, I styled the <span className="italic">div</span> containing the image with TailwindCSS classes.</p>
            <p className="mb-5 leading-7">Note the componentRef that is used throughout to create the component.  Using this ref is how I have been able to get the react-to-print package to work effectively.</p>
            <p className="mb-5 leading-7">And that's all there is to it!  Now, all you need to do is import the component you created, and it will be ready to go.  I have imported the component I just created below.  &#40;Yes, that is a picture of my two 
            adorable rescue dogs 😀.&#41;</p>
            <p className="mb-5 leading-7">You will see if you click the button that you can now print this image to pdf.</p>
            <Blogpost6PrintableComponent />
            <p className="mb-5 mt-5 leading-7">
                Please comment below 👇 or send me a <Link to="/#contact" alt='Send me a message' target='_blank' className="text-blue-500 hover:text-blue-800">message 📨</Link> if you liked this post.  You can also connect with me on
                <a href='https://www.linkedin.com/in/karicheslock/' alt='Kari LinkedIn Profile' className="text-blue-500 hover:text-blue-700"> LinkedIn <LinkedInIcon /></a>.
            </p>
            <p className="mb-5 leading-7">Also, don&apos;t forget to <Link to='/subscribe' className="text-white bg-blue-500 rounded px-2 hover:text-lg" target='_blank'>Subscribe</Link> to this blog to receive future updates!</p>
           
            <p className="mb-5 font-bold text-rose-700">Happy Coding!</p>
            
            <p className="mb-5">Kari</p>
            <hr className="mb-5 border-2 border-gray-400" />
            <Adsense
                client='ca-pub-7831705014229923'
                slot='2895656225'
            />

            </div>
            <div className='container flex flex-col ml-2 mt-2 max-w-7xl justify-center'>
                <p className='mb-2'>Sign in with Google to add a comment</p>
                <div className='flex flex-col w-1/3'>
                    <button className="login-with-google-btn" onClick={ signInWithGoogle }>Sign in with Google</button>
                    {isAuth && <button className='bg-red-400 text-white mt-2 rounded w-1/3 text-xs' onClick={signUserOut}>Sign Out</button>}
                </div>
                <Comments currentUserId={userId} />
            </div>
            
          
            

        </div>
    )
}

export default Blogpost6;