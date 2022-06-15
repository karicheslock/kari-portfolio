import {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import Comments from '../comment-section/comments/Comments';
import {auth, provider} from '../../firebase-config';
import {signInWithPopup, signOut} from 'firebase/auth';
import {Adsense} from '@ctrl/react-adsense';

export default function Blogpost3() {

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
        <div className="container flex flex-col justify-center max-w-2xl m-auto bg-neutral-50 text-stone-600 p-10">
            
            <div className="flex mb-4">
                <div className="flex flex-col w-1/2 justify-center">
                <div className='font-bold text-sky-900 mb-10 pr-2 text-2xl'><span className="text-rose-800">Coding Games</span> - A Way to Make Learning Fun</div>
                    <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                    <div className='text-sm text-sky-700'>April 21, 2022</div>
                    <div className='text-sm text-gray-500 mb-4'>3 min read</div>
        
                    <TwitterShareButton
                        title={"Coding Games - A Way to Make Learning Fun"}
                        url={'https://www.karicheslock.com/blogpost3'}
                        className='flex'
                    >
                        <TwitterIcon size={20} borderRadius={10} className='mb-4 mr-2' />
                        <p className="text-sm">Tweet this article</p>
                    </TwitterShareButton>

                    <div className="flex">
                        <Link to='/subscribe' className="text-white bg-blue-500 rounded px-2 hover:text-lg" target='_blank'>Subscribe</Link> <p className="pl-1 whitespace-nowrap">to this blog to receive future updates!</p>
                    </div>

                </div>
                <img src="../images/blogpost3-code.jpg" alt='A person typing at a computer' className="w-1/2 h-48 rounded"></img>
            </div>
            
            <p className="mb-5 leading-7">
                I will admit over the past year and a half as I&apos;ve been learning to code that there were many times when it got tedious and boring.  After one particularly grueling day of endless tutorials, I decided to take a break and dive into an MMO for a 
                little escape (I believe at the time it was Final Fantasy XIV).  And that&apos;s when it occurred to me - I should look into some games that teach coding.  Maybe that will help me break up the monotony and make learning a little more enjoyable.  
                I have since tried out several and here are some that I can recommend.  After all, learning is always going to be better if you can gamify it.  And these games are all free.
            </p>
            
            <a href='https://freecodecamp.itch.io/learn-to-code-rpg' target='_blank' rel="noreferrer" className="font-bold text-sky-700 mb-2">Learn to Code RPG from freeCodeCamp</a>
            
            <p className="mb-5 leading-7">
                This game is in beta as of this writing, but I would recommend this game as a great place to start for beginners who want to learn computer science, coding, and software development.  The folks at freeCodeCamp have a lot of great learning tools and 
                this is an excellent addition.  The game is in the form of a visual novel and is easy to follow along with.  I learned a lot from it even after having taken several courses with my degree program.  It&apos;s also easy to jump in a play a little bit 
                when you want to take a break.
            </p>
            
            <a href='https://www.codingame.com/start' target='_blank' rel="noreferrer" className="font-bold text-sky-700 mb-2">Codingame</a>
            
            <p className="mb-5 leading-7">
                This site lets you practice in many different languages and has challenges from beginner to advanced.  The challenges that you complete are used to make a game work so you can see the results of your coding skills right away in a highly visual 
                manner.  You can play with friends or compete in their international community to try to make it onto a leaderboard.  This is a great place to learn for people who need a break from the everyday tutorials. 
            </p>

            <a href='https://alexnisnevich.github.io/untrusted/' target='_blank' rel="noreferrer" className="font-bold text-sky-700 mb-2">Untrusted</a>
            
            <p className="mb-5 leading-7">
                This is a great game to really get you thinking on your feet and use your JavaScript coding skills with immediate results.  Your job is to guide Dr. Eval through different levels of a machine continuum by writing JavaScript code to help him along 
                the way.  You are given starter code and you must alter it to advance the game.  You must use problem-solving skills first and then try to apply code to execute your solution. 
            </p>

            <a href='http://play.elevatorsaga.com/' target='_blank' rel="noreferrer" className="font-bold text-sky-700 mb-2">Elevator Saga</a>
            
            <p className="mb-5 leading-7">
                This is another great little game that helps you learn JavaScript by solving mini challenges.  The goal is to figure out a way to transport people in an elevator in a certain amount of time.  You are given starter code to be modified and tested to 
                see if you can pass the challenge.  The challenges get more difficult as you go and will greatly improve your skills if you can complete them all. 
            </p>

            <a href='https://flukeout.github.io/' target='_blank' rel="noreferrer" className="font-bold text-sky-700 mb-2">CSS Diner</a>
            
            <p className="mb-8 leading-7">
                This site teaches you CSS in a very visual way, and since CSS is all about styling this is a great way to learn it.  The game starts with the basics of learning about CSS selectors and works up to more complex types of selectors.  If you work 
                through all of the challenges, you will have a much better understanding of CSS than when you started.
            </p>

            <p className="mb-5 leading-7">
                So that's it!  I hope you have fun playing some of these games, and maybe learn a little something too.  Please comment below 👇 or send me a <Link to="/#contact" alt='Send me a message' target='_blank' className="text-blue-500 hover:text-blue-800">message 📨</Link> if you liked what I had to say.  You can also connect with me on
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