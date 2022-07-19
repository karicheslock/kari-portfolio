import {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import Comments from '../comment-section/comments/Comments';
import {auth, provider} from '../../firebase-config';
import {signInWithPopup, signOut} from 'firebase/auth';
import Gist from 'react-gist';

function Blogpost9() {
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
                        <div className='font-bold text-sky-900 mb-10 pr-2 text-2xl'>Upvoting and Downvoting Posts Using React and Firebase</div>
                        <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                        <div className='text-sm text-sky-700'>July 15, 2022</div>
                        <div className='text-sm text-gray-500 mb-4'>5 min read</div>
                    </div>
                    <img src="../images/blogpost9images/upvote-downvote.png" alt='Thumbs up and thumbs down emojis' className="w-1/4 h-48 rounded pl-20"></img>
                </div>
                    
        
                    <TwitterShareButton
                        title={"Upvoting and Downvoting Posts Using React and Firebase"}
                        url={'https://www.karicheslock.com/blogpost9'}
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
            <p className="mb-5 leading-7">A popular feature of many social media apps such as Reddit and others is the ability for the user to upvote or downvote a post based on whether or not they like it.  This can be a tricky feature to add in your own project, so today 
            I&apos;m going to show you a simple and efficient way to add this feature to a web application using React on the frontend and Firebase on the backend.  We will also be using TailwindCSS for styling, so I will walk through that as well.  If you have been reading 
            my other blogposts, you should be quite familiar with this process by now.</p>
            <p className="mb-5 leading-7">Without further ado, let&apos;s get started.</p>
            <p className="mb-5 leading-7">The first step is to create a new project in <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:text-yellow-400">Firebase</a>.</p>
            <p className="mb-5 leading-7">Go to the Firebase Console and click Add Project.</p>
            <img src="../images/blogpost5images/firebase-add-new-project.png" alt="Firebase add project screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            
            <p className="text-5xl">The rest of this post is coming soon!!</p>
            
            <p className="mb-5 mt-5 leading-7">
                Please comment below 👇 or send me a <Link to="/#contact" alt='Send me a message' target='_blank' className="text-blue-500 hover:text-blue-800">message 📨</Link> if you liked this post.  You can also connect with me on
                <a href='https://www.linkedin.com/in/karicheslock/' alt='Kari LinkedIn Profile' className="text-blue-500 hover:text-blue-700"> LinkedIn <LinkedInIcon /></a>.
            </p>
            <p className="mb-5 leading-7">Also, don&apos;t forget to <Link to='/subscribe' className="text-white bg-blue-500 rounded px-2 hover:text-lg" target='_blank'>Subscribe</Link> to this blog to receive future updates!</p>
           
            <p className="mb-5 font-bold text-rose-700">Happy Coding!</p>
            
            <p className="mb-5">Kari</p>
            <hr className="mb-5 border-2 border-gray-400" />

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

export default Blogpost9;