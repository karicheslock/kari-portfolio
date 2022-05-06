import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { CodeIcon } from '@heroicons/react/solid';
import { TwitterIcon, TwitterShareButton } from 'react-share';

export default function Blogpost2() {
    return (
        <div className="container flex flex-col justify-center max-w-2xl m-auto bg-neutral-50 text-stone-600 p-10">
            <div className="flex mb-4">
                <div className="flex flex-col w-1/2 justify-center">
                <div className='font-bold text-blue-600 mb-10 pr-2 text-2xl'>A Beginner&apos;s Learning Path to Becoming a Web Developer</div>
                    <div className='text-sm text-blue-500 font-bold mb-2'>By Kari Cheslock</div>
                    <div className='text-sm text-blue-500'>April 6, 2022</div>
                    <div className='text-sm text-gray-500 mb-4'>8 min read</div>
                </div>
                <img src="../images/blogpost2-pc.jpg" alt='A laptop showing code' className="w-1/2 h-48 rounded"></img>
            </div>

            <TwitterShareButton
                title={"A Beginner's Learning Path to Becoming a Web Developer"}
                url={'https://www.karicheslock.com/blogpost2'}
                className='flex'
            >
                <TwitterIcon size={20} borderRadius={10} className='mb-6 mr-2' />
                <p className="text-sm">Tweet this article</p>
            </TwitterShareButton>

            <div className="flex mb-4">
                <Link to='/subscribe' className="text-white bg-blue-500 rounded px-2 hover:text-lg" target='_blank'>Subscribe</Link> <p className="pl-1 whitespace-nowrap">to this blog to receive future updates!</p>
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

            <p className="mb-8 leading-7">
            I will begin by making the distinction between <span className='text-blue-700 font-bold'>front-end</span>, <span className='text-blue-700 font-bold'>back-end</span>, and <span className='text-blue-700 font-bold'>full-stack</span> developers.
            </p>

            <p className='text-blue-700 font-bold text-lg mb-3'>Front-End Developer</p>
               
            <p className='mb-5 leading-7'>
                Front-end developers are focused on what is known as the “client-side” of a web application, which means designing a site&apos;s layout and deciding how a user will interact with the site.  This is also known as the UI/UX design, or 
                User Interface/User Experience.  The UI/UX design is extremely important because this is what the client sees when they go to your application.  If your app is designed poorly on the front end, your users will not want to use it.  
                So if you enjoy design and making applications that are highly functional for users, this may be the perfect career path for you.
            </p>

            <p className='text-blue-700 font-bold text-lg mb-3'>Back-End Developer</p>
               
            <p className='mb-5 leading-7'>
                Back-end developers work on the “server-side” of the application and are focused mainly on the functionality of the website.  A lot of backend development includes setting up servers and databases and making sure that the application&apos;s 
                functions work.  For example, when the user submits a form or executes a transaction on a website, the backend of the application would handle making changes to a database or running a credit card purchase securely.
            </p>

            <p className='text-blue-700 font-bold text-lg mb-3'>Full-Stack Developer</p>
               
            <p className='mb-8 leading-7'>
                Full-stack developers are responsible for the entire application from the front-end to the back-end, also known as the full stack.  They design the client-side user interface and connect it to the backend servers and databases in order to produce 
                a complete application.
            </p>

            <p className='mb-8 leading-7'>
                Although full-stack development may seem like the hardest of the three options to choose, all of this functionality can really be broken down into a few simple languages.  There are, of course, many, many languages you can choose to learn to become 
                a web developer and you are free to choose any that work for you, but I will start with the easiest and most common languages that are really all you need to know to get started in this field.
            </p>

            <div className='flex items-center'>
                <CodeIcon className='w-6 mb-3 mr-2' />
                <p className='text-blue-700 font-bold text-lg mb-3'>HTML</p>
            </div>
               
            <p className='mb-8 leading-7'>
                Hypertext Markup Language, or HTML, is the basic language of any website.  For those of you who remember the early days of the internet (myself included), you will recall that websites used to consist of a lot of plain text, boxy images, and gray 
                buttons.  That was HTML in its simplest form and it is still used to create the basic structure of a website today.  Learning HTML should be the first step in any path to becoming a web developer and there are any number of resources out there to 
                do so.  Pick one of the free ones.  You&apos;ll be able to pick up on this language pretty easily and any of the free tutorials out there should do the trick.
            </p>

            <div className='flex items-center'>
                <CodeIcon className='w-6 mb-3 mr-2' />
                <p className='text-blue-700 font-bold text-lg mb-3'>CSS</p>
            </div>
               
            <p className='mb-8 leading-7'>
                Cascading Stylesheets, or CSS, is the language that adds style to your website and lays it out in an eye-pleasing and logical manner.  This is the language that lets you set everything from your font styling and background colors to animations and 
                decorative features.  CSS is used to make your website appealing to the user and it&apos;s the next most important language to learn after HTML.  Learning the basics of CSS is also foundational to learning various CSS frameworks, such as Bootstrap, 
                TailwindCSS and Chakra UI (among others) that are available to make creating your CSS easier.  These frameworks provide shortcuts to adding CSS to your website quickly and easily with minimal code, but it is important to understand the basics before 
                you can understand the shortcuts so make sure you start with a beginner&apos;s tutorial.  Again, pick a free one.
            </p>

            <div className='flex items-center'>
                <CodeIcon className='w-6 mb-3 mr-2' />
                <p className='text-blue-700 font-bold text-lg mb-3'>JavaScript</p>
            </div>
               
            <p className='mb-8 leading-7'>
                Once you have learned HTML and CSS, you will be able to make what are known as “static” websites, meaning websites that are mostly just for viewing and not much else.  While there are some basic functions you can add to your website with HTML and 
                CSS, such as adding links to internal and external websites, you will find that you need to learn another language if you really want to create a highly functional website.  Enter JavaScript.  This is the scripting language of the web and it&apos;s 
                the language used to make the features of your website work.  JavaScript is also just a basic coding language with the same logic as any other coding language such as Python, C++, or Java.  So when you&apos;re learning JavaScript, you will be 
                learning fundamental coding logic that is foundational to any coding language.  There are, once again, many free resources for learning JavaScript.  I would recommend going through a diverse selection of these.  I would also recommend practicing as 
                much as possible.  Look for websites containing “coding challenges” that help you understand and practice the logic of coding.  This will be just as important as learning the syntax.  Of the three languages listed so far, this is the one where you 
                should spend the lion&apos;s share of your time.  Once you really understand how to write code using JavaScript, you will be able to add a wide variety of features and functionalities to your web application.  Truly, the sky is the limit here and the 
                better you are at JavaScript, the better your web applications will be.
            </p>

            <p className='text-blue-700 font-bold text-lg mb-3'>Frameworks</p>
               
            <p className='mb-4 leading-7'>
                I have already mentioned CSS frameworks such as Bootstrap and TailwindCSS that are available to make writing CSS easier.  But there are a variety of frameworks available to help you with web development.  You will definitely want to learn a JavaScript 
                framework, such as React, Vue or Svelte (and again, there are others).  I have personally sunk all of my time into learning React but you can pick and choose what you like, or learn several of them.  The point is that you will want to use a 
                framework to simplify your code and cut down on the time it takes to get from design to deployment.  Without frameworks, you will simply be reinventing the wheel every time you want to build an app, and that is just a colossal waste of time.
            </p>

            <p className='mb-8 leading-7'>
                I should also make the distinction here between front-end and back-end frameworks.  React, Vue, and Svelte are front-end frameworks designed to help you create your UI/UX design easily.  There are also backend frameworks for setting up the server 
                side of your application such as Express (used within Node.js and written in JavaScript) and Django (written in Python).  These frameworks will be helpful if you choose the back-end or full-stack developer career paths.  Again, these are used to 
                make web development easier and more efficient.  I have spent my time learning Express since I chose to focus most of my time on learning JavaScript, but again this is a matter of preference.
            </p>

            <p className='text-blue-700 font-bold text-lg mb-3'>Databases</p>
               
            <p className='mb-8 leading-7'>
                If you want to be a back-end or full-stack developer, you will also need to learn how to work with databases.  Most databases are generally categorized as SQL or NoSQL databases, depending on whether or not they use the SQL language for structuring 
                and querying.  For beginners, I would recommend learning NoSQL databases since these are loosely structured and much more forgiving in terms of setup, generating queries, and interacting with data.  Records in a NoSQL database are referred to as 
                JSON objects which stands for JavaScript Object Notation, meaning that, once again, JavaScript is the language of choice when working with these databases.
            </p>

            <p className='text-blue-700 font-bold text-lg mb-3'>Conclusion</p>
               
            <p className='mb-8 leading-7'>
                After all of that long-winded explanation, I hope it has become clear to you that learning HTML, CSS, and JavaScript is fundamental to any web development path.  After learning these languages, you can branch off in multiple directions and even use 
                your understanding of coding basics to learn other languages and diversify your coding knowledge.  Whatever path you choose, I wish you the best of luck and hope this information has helped you in some small way.
            </p>

            <p className="mb-5 leading-7">
                Please send me a <Link to="/#contact" alt='Send me a message' target='_blank' className="text-blue-500 hover:text-blue-800">message 📨</Link> if you liked what I had to say or connect with me on
                <a href='https://www.linkedin.com/in/karicheslock/' alt='Kari LinkedIn Profile' className="text-blue-500 hover:text-blue-700"> LinkedIn <LinkedInIcon /></a>.
            </p>

            <p className="mb-5 leading-7">Also, don&apos;t forget to <Link to='/subscribe' className="text-white bg-blue-500 rounded px-2 hover:text-lg" target='_blank'>Subscribe</Link> to this blog to receive future updates!</p>
           
            <p className="mb-5 font-bold text-rose-700">Happy Coding!</p>
            
            <p className="mb-5">Kari</p>
            <hr className="mb-5 border-2 border-gray-400" />

        </div>
    )
}
