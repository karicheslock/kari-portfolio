import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { TwitterIcon, TwitterShareButton } from 'react-share';

export default function Blogpost1() {
    return (
        <div className="container flex flex-col justify-center max-w-2xl m-auto bg-neutral-50 text-stone-600 p-10">
            
            <div className="flex mb-4">
                <div className="flex flex-col w-1/2 justify-center">
                <div className='font-bold text-sky-900 mb-10 pr-2 text-2xl'>5 Things I Wish I Knew Before Quitting My Job to Get a CS Degree</div>
                    <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                    <div className='text-sm text-sky-700'>March 28, 2022</div>
                    <div className='text-sm text-gray-500 mb-4'>10 min read</div>
        
                    <TwitterShareButton
                        title={"5 Things I Wish I Knew Before Quitting My Job to Get a CS Degree"}
                        url={'https://www.karicheslock.com/blogpost1'}
                        className='flex'
                    >
                        <TwitterIcon size={20} borderRadius={10} className='mb-4 mr-2' />
                        <p className="text-sm">Tweet this article</p>
                    </TwitterShareButton>

                </div>
                <img src="../images/blogpost1-computer.jpg" alt='A person typing at a computer' className="w-1/2 h-48 rounded"></img>
            </div>
            
            <div className="font-bold text-sky-800 text-lg mb-2">Background</div>
            <p className="mb-5 leading-7">
                As I'm writing this post, it&apos;s been just over a year since I quit my job to go back to school full time.  When the pandemic was in full force back in 2020 and we were all stuck at home, I took the time to re-evaluate my life.  
                I hated my job.  I was stuck there, burned out and at the cliched dead end.  And thanks to the pandemic I was also stuck at home with not much to do other than dread going back to work the next day.
            </p>
            <div className="flex">
                <img src='../images/blogpost1-chemistry.jpg' alt='Colored liquids in glass flasks' className="w-1/3 h-40 pr-4 rounded"></img>
                <p className="mb-5 leading-7 w-2/3">
                    I was working as a chemist at a federal government lab, which may sound glamorous at first, but I&apos;m here to tell you - government work is pretty much the same across the board.  
                    The pay is decent and the benefits are good, but there is little room for advancement and a lot of room for burnout.
                </p>
            </div>
            
            
            <p className="mb-5 leading-7">
                The rumors are also true - it is impossible to get fired from government work.  While this may seem like it could work in your favor, what it actually leads to is getting stuck working with the proverbial &apos;bad eggs&apos;.  A lot of them.  
                And they are impossible to fire.  I don&apos;t think I really need to describe to you the type of toxic work environment that this leads to.  In fact, my job was toxic in more ways than one.  I was handling toxic chemicals in the literal sense 
                and dealing with toxic people in the figurative sense.  Needless to say, I had many reasons to want to move on to something new.  I didn&apos;t want a career that caused me to feel so much negativity and cynicism.  I wanted a career that brought a 
                sense of pride and accomplishment.
            </p>
            
            <p className="mb-5 leading-7">
                My point of all of this is that I took this opportunity, this re-evaluation of my career, to decide that I could make a change.  The Great Resignation was really only a rumor at this point in time, but reading about that notion planted 
                a little seed of thought.  Maybe I could pursue a new career?  It would be tough but worth it to regain a sense of having value in my career.  
            </p>
            <div className="flex items-center">
                
                <p className="mb-5 leading-7 w-2/3">
                    And so, after a lot of online research, I landed on computer science as a new career path and began looking around 
                    for a degree program.  I chose an accelerated online program on an asynchronous platform that charged a reasonably affordable tuition.  The courses were 8 weeks long, they took a generous number of transfer credits, and I had enough cash in 
                    savings to pay for the entire degree program without having to go into debt.  Perfect.
                </p>
                <img src='../images/blogpost1-pc-books.jpg' alt="A computer on a desk with a stack of books" className="w-1/3 h-36 pr-4 rounded mb-4" />
            </div>
            
            <div className="font-bold text-sky-800 text-lg mb-2 mt-4">Thought Process 🤔</div>
            <p className="mb-3">I had a lot of reasons for choosing computer science.</p>
            <ol className="list-decimal list-outside mb-5 px-6">
                <li className="mb-2 leading-5"><span className="text-sky-600 font-bold">I had a math minor from my first go-round as an undergrad</span>, so I figured that would help out in terms of transfer credits, etc., and give me a head start on finishing another degree quickly (it did).</li>
                <li className="mb-2 leading-5"><span className="text-sky-600 font-bold">I had always wanted to learn to code</span> even though I had never written a single line of code in my life (more on that later).</li>
                <li className="mb-2 leading-5"><span className="text-sky-600 font-bold">I have been a massive consumer of tech products my entire life</span>, so I thought it would be nice to know how they all work under the hood.</li>
                <li className="mb-2 leading-5">I thought at the time that <span className="text-sky-600 font-bold">the industry best capable of surviving the pandemic was going to be the tech industry</span>.  This may sound a little paranoid now in 2022, but in 2020, before the vaccine was available and with large swaths of the 
                    population refusing to comply with mandates, it was impossible to know how the pandemic was going to play out.  It seemed that the tech industry was more capable of keeping its employees safely working at home for an indefinite amount of 
                    time, and so that made a computer science degree seem a practical choice.</li>
                <li className="mb-2 leading-5">And last, but not least, <span className="text-sky-600 font-bold">I tried some coding tutorials online and I thought it was fun</span>.  A simple reason but probably the best one.  It seemed like I was going to enjoy doing it.</li>
            </ol>
            <p className="mb-5 leading-7">But this isn&apos;t a post about my reasons for choosing computer science.  This is a post about things I wish I had known back when I was considering quitting my career of around 17 years and swan-diving (or maybe belly-flopping?) into a completely 
                new career.  Starting from scratch.  Going back to the old drawing board.
            </p>
            
            <div className="font-bold text-sky-800 text-lg mb-2">Reflection</div>
            <p className="mb-5 leading-7">
                I can honestly say at this point that I have absolutely zero regrets.  And that is a great feeling.  But there are some things I wish I had known so that I could have done things a little better.  And by that I mean, there are some things I wish 
                I had known and wish I had done to put myself in a little better position to apply for jobs.  Since I&apos;m in the phase now of finishing up my last course (yay!) and starting to look for jobs, I&apos;m realizing now that I&apos;m a little behind the 8-ball as 
                far as having a strong enough resume to be competitive for jobs.  I&apos;m in the process of making up for it, but I could have saved myself a little time if I had known these things.
            </p>
            <div className="font-bold text-sky-800 text-lg mb-2">Advice</div>
            <ol className="list-decimal list-outside mb-5 px-6">
                <li className="text-sky-600 font-bold mb-4">You really need to go above and beyond a basic computer science curriculum to have the skills needed for a job.</li>
                <p className="mb-5 leading-7">You cannot and should not assume that the degree program you choose will provide you with all of the skills you need to be competitive in the job market.  As someone who had never written any code before, I should have started out stronger, 
                    trying to learn as much as I could as quickly as I could instead of relying on the degree program to teach me everything I needed to know.  Here are some things you should do right out of the gate when you start a computer science degree program.</p>
                    <ul className="list-disc list-outside mb-5 px-6">
                        <li className="mb-5"><span className='text-sky-600'>Start teaching yourself as many coding languages as possible using as many online tutorials as you can get your hands on.</span>  There are a ton of resources out there to learn coding so try not to get overwhelmed.  Just settle on one that offers
                             a good variety of languages and start coding away.  You will likely start to gravitate toward a certain language or languages over time and this will help you start to figure out what you like.  If you really want a recommendation for a starting point, 
                             go with <a className="text-green-500 hover:text-green-900" href='https://www.w3schools.com/' target='_blank' rel='noreferrer'>W3 schools</a>.</li>
                        <li><span className='text-sky-600'>Read through some “Getting Started” articles and blog posts.</span>  Again, there will be a ton of information out there, but look for some good advice that speaks to you and follow it.  Also look for YouTube videos that are titled something 
                            like “XXX Language for Absolute Beginners” and watch someone coding live.  This is a great replacement for live classroom instruction.  Another recommendation here - the <a href='https://www.youtube.com/c/Freecodecamp' target='_blank' rel='noreferrer' className="text-blue-600 hover:text-blue-900">freeCodeCamp</a> YouTube channel.  They have a little of everything.</li>
                    </ul>
                <li className="text-sky-600 font-bold mb-4">Learn Git and GitHub as soon as possible and start posting projects to GitHub.</li>
                <p className="mb-5 leading-7">This may seem completely overwhelming at first, but even the least little coding project that you can post to GitHub will be worthwhile.  The reason for this is that a GitHub portfolio will be extremely valuable for your resume.  Also, your GitHub profile will 
                    have a stat that looks like this:</p>
                <img className="mb-5" src='./images/github-stat.png' alt='GitHub contributions grid' />
                <p className="mb-5 leading-7">This graphic shows how much you post to GitHub.  As you can see from mine, I really only started seriously posting to GitHub in the past couple of months.  The other posts over the previous year represent school assignments with a requirement to 
                    post to GitHub.  I should have been doing much more than that.  The idea here is that the more you post to GitHub, the more coding you&apos;re doing, which looks good to potential employers.</p>
                <li className="text-sky-600 font-bold mb-4">Have a good social media presence, but in a professional and productive way that looks good on a resume.</li>
                <p className="mb-5 leading-7">This may not be a difficult thing for many of you, but for me this is a huge undertaking.  In fact, this blog post is my first real foray into improving my social media presence.  You see, my former job required me to hold a security clearance 
                    with the government, and my husband currently holds a really high level security clearance with the government.  While this might sound like a strange excuse, it is a little difficult to be involved with social media and hold a security 
                    clearance.  Let&apos;s just say, it causes complications.  But now, I&apos;m realizing that I&apos;m once again behind the 8-ball and need to improve things.
                </p>
                <p className="mb-2 leading-7">
                    Here are some things I&apos;m going to be working on, and some things I can recommend based on my own 
                    research in order to improve social media presence.
                </p>
                <ul className="list-disc list-outside mb-5 px-6">
                    <li><span className="text-purple-800 font-bold">Blog posts</span> of a technical nature, or a listing of “Tips and Tricks”.</li>
                    <li><span className="text-purple-800 font-bold">Tutorials</span> explaining something technical and showing the code that goes along with it.</li>
                    <li><span className="text-purple-800 font-bold">Dedicated profiles</span> on the various social media outlets that only contain posts, connections, etc. that are relevant to your career.</li>
                </ul>
                <li className="text-sky-600 font-bold mb-4">You&apos;re going to need a portfolio of completed projects in order to apply for a job.</li>
                <p className="mb-5 leading-7">While building your own portfolio may seem like an unreachable goal when you&apos;re a beginner, you need to think about your education as the means to achieve a portfolio in the end.  In other words, keep that in mind as your end goal and start 
                    working towards it from the very beginning.  Look for tutorials that offer completed projects at the end.  These are all things you can push to GitHub to show that you&apos;re coding regularly.
                </p>
                <p className="mb-5 leading-7">
                    And your portfolio should be something you coded from 
                    scratch and not something built with Wix or Wordpress or any of the other pre-canned website builders.  You need to learn HTML, CSS, and JavaScript along with frameworks such as React or Angular or whatever one you find you like to actually 
                    code your own website and showcase your work.  It&apos;s a big project but start coding early and often and you will get there.
                </p>
                <li className="text-sky-600 font-bold mb-4">Practice, practice, practice!</li>
                <p className="mb-5 leading-7">Ok, this is a little cliched, but I can tell you from a great deal of personal experience at this point that coding is very difficult to learn and it only gets easier if you do it.  One of my best recommendations for learning is to follow along with 
                    a tutorial, make sure the code works at the end, and then delete it and try to recreate it on your own without the tutorial.  This process will also give you debugging experience since your code probably won&apos;t work when you recreate it.  And if you&apos;ll 
                    forgive another cliche - learning from your mistakes is the best way to learn.</p>
            </ol>
            
            <p className="mb-5 leading-7">So that&apos;s it.  These are the things I wish I knew about a year and a half ago when I first started pursuing my new career.  And while I mentioned several times that I feel behind right now and have a good bit of catching up to do, I&apos;m not going to 
                give up.  This post will be the first of several discussing my goals and my journey towards a new career.  I plan on having some posts discussing personal tips and tricks, like this one, and some more technical posts where I will showcase some 
                things that I have learned and try to convey them as a series of tutorials.  
            </p>
            <p className="mb-5 leading-7">
                Please send me a <Link to="/#contact" alt='Send me a message' target='_blank' className="text-blue-500 hover:text-blue-800">message 📨</Link> if you liked what I had to say or connect with me on
                <a href='https://www.linkedin.com/in/karicheslock/' alt='Kari LinkedIn Profile' className="text-blue-500 hover:text-blue-700"> LinkedIn <LinkedInIcon /></a>.
            </p>
           
            <p className="mb-5 font-bold text-rose-700">Happy Coding!</p>
            
            <p className="mb-5">Kari</p>
            <hr className="mb-5 border-2 border-gray-400" />

        </div>
    )
}