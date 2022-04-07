import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export default function Blogpost2() {
    return (
        <div className="container flex flex-col justify-center max-w-2xl m-auto bg-neutral-50 text-stone-600 p-10">
            <div className="flex mb-4">
                <div className="flex flex-col w-1/2 justify-center">
                <div className='font-bold text-sky-900 mb-10 pr-2 text-2xl'>A Beginner&apos;s Learning Path to Becoming a Web Developer</div>
                    <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                    <div className='text-sm text-sky-700'>April 6, 2022</div>
                    <div className='text-sm text-gray-500 mb-4'>8 min read</div>
                </div>
                <img src="../images/blogpost1-computer.jpg" alt='A person typing at a computer' className="w-1/2 h-48 rounded"></img>
            </div>

            <p className="mb-5 leading-7">
            Becoming a web developer can seem like an incredibly daunting task, especially if you are a beginner with little experience under your belt and not much in your coding toolbox other than a lot of ambition.  When I set out on this new career 
            path about a year and a half ago, I had never written a single line of code.  But I had a lot of determination and a strong desire to succeed at something new, so I dug my heels in and decided I had to just jump in and go for it, even facing 
            the steepest of possible learning curves.
            </p>

            <p className="mb-5 leading-7">
            Because I began by enrolling in an online Computer Science degree program, I was being exposed to a lot of different languages in a controlled environment.  I was basically learning a little bit about everything but not a whole lot about anything.  
            As my courses progressed, I started to realize that I was going to have to go above and beyond the basic curriculum and specialize in something on my own if I really wanted to be competitive in the tech job market.  After a lot of trial and error, 
            I stumbled on web development as the career path I wanted to focus on.  I chose this for two reasons.  One, it seemed to be broad enough that it would teach me a lot of useful and in-demand skills.  And two, after dabbling in it quite a bit, 
            I discovered that I really enjoyed it.  With that decision made, it was time to focus on the specific skills I would need to succeed as a web developer.
            </p>

            <p className="mb-5 leading-7">
            The learning path I will be discussing here isn&apos;t all-encompassing by any means.  In fact, I may come back and revise this list as I learn more myself.  But this is how I started, and I feel like I&apos;m well on my way right now to becoming a 
            full-fledged web developer.  Hopefully, this will be a good starting point for you as well.
            </p>

            <p className="mb-5 leading-7">
            I will begin by making the distinction between <span className='text-violet-700 font-bold'>front-end</span>, <span className='text-violet-700 font-bold'>back-end</span>, and <span className='text-violet-700 font-bold'>full-stack</span> developers.
            </p>
        </div>
    )
}
