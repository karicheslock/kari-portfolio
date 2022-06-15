import {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import Comments from '../comment-section/comments/Comments';
import {auth, provider} from '../../firebase-config';
import {signInWithPopup, signOut} from 'firebase/auth';
import Gist from 'react-gist';
import {Adsense} from '@ctrl/react-adsense';

function Blogpost7() {
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
                        <div className='font-bold text-sky-900 mb-10 pr-2 text-2xl'>User Authentication in Firebase with React</div>
                        <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                        <div className='text-sm text-sky-700'>June 13, 2022</div>
                        <div className='text-sm text-gray-500 mb-4'>5 min read</div>
                    </div>
                    <img src="../images/blogpost7-code.jpg" alt='A printer' className="w-2/3 h-48 rounded pl-20"></img>
                </div>
                    
        
                    <TwitterShareButton
                        title={"User Authentication in Firebase with React"}
                        url={'https://www.karicheslock.com/blogpost7'}
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
            <p className="mb-5 leading-7">It&apos;s time to explore user authentication - arguably one of the most important parts of any application.  Firebase offers a straight-forward way to handle user access to your application, and I&apos;m going to show you how to set that up here.</p>
            <p className="mb-5 leading-7">Let&apos;s get started.</p>
            <p className="mb-5 leading-7">The first step is to create a new project in <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:text-yellow-400">Firebase</a>.</p>
            <p className="mb-5 leading-7">Go to the Firebase Console and click Add Project.</p>
            <img src="../images/blogpost5images/firebase-add-new-project.png" alt="Firebase add project screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, give your project a name.  It can be anything you want.</p>
            <img src="../images/blogpost7images/firebase-project-name.png" alt="Firebase project name screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, you can choose whether or not to enable Google Analytics and then click Create Project.</p>
            <img src="../images/blogpost7images/firebase-create-project.png" alt="Firebase create project screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">It will take a few moments to create the project.  Once it&apos;s created, click Continue.</p>
            <p className="mb-5 leading-7">From the dashboard, we need to add a web application by clicking on the web icon.</p>
            <img src="../images/blogpost5images/firebase-add-web-app.png" alt="Firebase add web app icon" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, give your app a name of your choice and then click Register app.</p>
            <img src="../images/blogpost7images/firebase-app-name.png" alt="Firebase app name screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">You will then see a screen that looks similar to the screen below.</p>
            <img src="../images/blogpost5images/firebase-config-variables.png" alt="Firebase config variables screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Leave the screen as is for now.  We will come back to it shortly.  Time to create a react app.</p>
            <p className="mb-5 leading-7">Open a command prompt or PowerShell and navigate to the folder where you want to create your project.  Then type <code className="bg-gray-200 px-2">npx create-react-app user-auth-tutorial</code> at the prompt.</p>
            <p className="mb-5 leading-7">After the project is finished initializing, cd into the newly created folder and launch VSCode by typing <code className="bg-gray-200 px-2">code .</code> including the '.' at the end.</p>
            <p className="mb-5 leading-7">If you need to install VSCode, go <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:text-yellow-400">here</a>.</p>
            <p className="mb-5 leading-7">First things first, we need to install some dependencies.  Type the following into the terminal, pressing enter after each command.</p>
            <code className="bg-gray-200 px-2">npm install react-router-dom</code>
            <br />
            <code className="bg-gray-200 px-2">npm install tailwindcss</code>
            <br />
            <code className="bg-gray-200 px-2 mb-5">npm install firebase</code>
            <br />
            <code className="bg-gray-200 px-2 mb-5">npm install check-password-strength</code>
            <br />
            <p className="mb-5 leading-7">The react-router-dom package will be used to create our routes, the tailwindcss package will be used for styling, the firebase package will be used to connect to our backend, and the check-password-strength package will be used to have the user sign up with strong password.</p>
            <p className="mb-5 leading-7">Configuring TailwindCSS takes a couple more steps.  Refer to this <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:text-yellow-400">page</a> for further information.</p>
            <p className="mb-5 leading-7">In the terminal, enter the command <code className="bg-gray-200 px-2">npx tailwindcss init</code></p>
            <p className="mb-5 leading-7">This will create a <span className="bg-gray-200 italic">tailwind.config.js</span> file.  Open this file and add the following code.</p>
            <img src="../images/blogpost4images/tailwind-config.png" alt="Tailwind config file code" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading7">You will also need to go into the <span className="bg-gray-200 italic">index.css</span> file and add the following code.</p>
            <img src="../images/blogpost4images/tailwind-css.png" alt="Tailwind index.css file code" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Of course, if you do not wish to use TailwindCSS for styling, you can skip those steps and style your components however you would like.</p>
            <p className="mb-5 leading-7">Ok, it&apos;s finally time to start writing some code.  The first step is to create a new file in the <span className="bg-gray-200 italic px-2">src</span> folder in your app.  Call the file <span className="bg-gray-200 italic px-2">firebase-config.js</span> and 
            add the following code to it.</p>
            <Gist id="e2d8c563acd4bd685d6a135b236c8ac2" />
            <p className="mb-5 leading-7">You will get the values for the firebaseConfig object from the Firebase SDK screen on the firebase console - the screen we paused on above.  After you copy and paste these values you can click Continue to console.</p>
            <p className="mb-5 leading-7">If you ever need to access these variables again, you can find them in the project settings.</p>
            <p className="mb-5 leading-7">Next, in the <span className="bg-gray-200 italic px-2">src</span> folder, add a new folder called <span className="bg-gray-200 italic px-2">pages</span> and create the following files.</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">Dashboard.js</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">Signup.js</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">Login.js</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">ResetPassword.js</p>
            <p className="mb-5">Also in the <span className="bg-gray-200 italic px-2">src</span> folder, add a new folder called <span className="bg-gray-200 italic px-2">services</span> and in this folder create the following file.</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">firebase-services.js</p>
            <p className="mb-5 leading-7">This file will be used to hold a couple of queries that we will use to access our firebase database.</p>
            <p className="mb-5 leading-7">You&apos;re completed filetree for your <span className="bg-gray-200 italic px-2">src</span> folder should look something like this.</p>
            <img src="../images/blogpost7images/src-filetree.png" alt="Filetree for the src folder" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Ok, before we get any further ahead of ourselves, let&apos;s go back to the firebase console and set up our database and our authentication.</p>
            <p className="mb-5 leading-7">Start by clicking on Authentication from the dashboard of your project.</p>
            <img src="../images/blogpost7images/firebase-auth-dashboard.png" alt="Firebase authentication icon on the project dashboard" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">From the next screen, click on Get Started.</p>
            <img src="../images/blogpost7images/firebase-auth-get-started.png" alt="Firebase authentication get started screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, you will see the various options for creating user authentication.</p>
            <img src="../images/blogpost7images/firebase-select-provider.png" alt="Firebase authentication select provider screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">We will be using the Email/Password and the Google provider for our authentication in this app.</p>
            <p className="mb-5 leading-7">Start by selecting the Email/Password option.</p>
            <p className="mb-5 leading-7">On the next screen, click the slidebar to enable email/password authentication and click save.</p>
            <img src="../images/blogpost7images/firebase-email-provider.png" alt="Firebase authentication email/password provider screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, click Add New Provider.</p>
            <img src="../images/blogpost7images/firebase-add-new-provider.png" alt="Firebase authentication add new provider screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">This time, select Google and then select the slidebar for Enable on the next screen.  You will need to provide a support email address before you can click Save.</p>
            <img src="../images/blogpost7images/firebase-google-provider.png" alt="Firebase authentication google provider screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Ok, now we're ready to create a database to hold all of our users.  Click on Firestore Database from the menu tree on the left and then click Create Database.</p>
            <img src="../images/blogpost7images/firebase-create-database.png" alt="Firebase create database screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Choose Start in Production Mode and click Next.</p>
            <img src="../images/blogpost7images/firebase-production-mode.png" alt="Firebase production mode screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Then select your location and click Enable.</p>
            <img src="../images/blogpost7images/firebase-select-location.png" alt="Firebase selection location screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Once your database has been provisioned, select Start Collection from the main database screen.</p>
            <img src="../images/blogpost7images/firebase-start-collection.png" alt="Firebase start collection screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Add the name of the collection which will be &apos;users&apos; and click Next.</p>
            <img src="../images/blogpost7images/firebase-users-collection.png" alt="Firebase name collection screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, click the button for Auto Id to enable the Save button and then click Save.  You should now have a &apos;users&apos; collection with an empty document in it.</p>
            <img src="../images/blogpost7images/firebase-collections-auto-id.png" alt="Firebase selection location screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">The last thing we need to do is edit the rules for our database.  Click on the Rules tab in the upper left of the screen and then change the read,write rule from false to show as shown below.  Be sure to click Publish when you are done.</p>
            <img src="../images/blogpost7images/firebase-database-rules.png" alt="Firebase database rules screen" className="mb-4 w-full rounded mx-auto" />
            <p className="mb-5 leading-7">Ok, we are finally ready to add the code to our app.</p>
            <p className="mb-5 leading-7">Let&apos;s start with the <span className="bg-gray-200 italic px-2">firebase-services.js</span> file.  This fill will contain two queries that we will use to determine if any user that is attempting to sign up already exists in our database.</p>
            <p className="mb-5 leading-7">Copy and paste the following code into your <span className="bg-gray-200 italic px-2">firebase-services.js</span> file.</p>
            <Gist id="64e1c424a8bd7748356499bcfb139aec" />
            <p className="mb-5 leading-7">Next we will set up our routes in the <span className="bg-gray-200 italic px-2">App.js</span> file.  Here is the code for that.</p>
            <Gist id="cac49335516baaf75e9050ac66666285" />
            <p className="mb-5 leading-7">And one last housekeeping thing is to add the styling for our Sign In with Google button to the <span className="bg-gray-200 italic px-2">index.css</span> file.  Copy and paste the following code.</p>
            <Gist id="bfc7bc9283e4e632a8aadae06cb9ae2f" />
            <p className="mb-5 leading-7">Finally, we can create our <span className="bg-gray-200 italic px-2">Signup.js</span>, <span className="bg-gray-200 italic px-2">Login.js</span> and <span className="bg-gray-200 italic px-2">ResetPassword.js</span> files.  The code for each of these files is below.</p>
            <Gist id="a0b26dd49361c37e6f0a2fa36205e2d6" />
            <Gist id="f41a482e06a59de7a4802696e0229e67" />
            <Gist id="d49a2ec26771348dc902d6a8be1bfb2a" />
            <p className="mb-5 leading-7">Last but not least, we will create the simplest of Dashboards to route the user to when they have completed the sign up or login process.</p>
            <Gist id="f5b321e9de33eaaa21d8bfbd547cd598" />
            <p className="mb-5 mt-5 leading-7 text-blue-500 font-bold">Comments</p>
            <p className="mb-5 leading-7">Each of the files for <span className="bg-gray-200 italic px-2">Signup.js</span>, <span className="bg-gray-200 italic px-2">Login.js</span> and <span className="bg-gray-200 italic px-2">ResetPassword.js</span> contains a styled 
            form with a corresponding piece of state for each input.  The function for submitting the Signup form will check to see if the username or email address that the user is inputting already exists in the database and will throw an error if it does.  The login 
            form is very similar to the signup form, just with fewer input fields.  The login form also has a link to send an email to reset the user&apos;s password if they click it.  The user must enter an email address and then the reset email will be sent.  Finally, 
            there is a lot of conditional rendering here to display various messages such as error messages or email sent messages.</p>
            <p className="mb-5 leading-7">And that&apos;s it!  You should now be able to create a user database and authenticate users in Firebase.  This code should be adaptable to any app you are trying to build.  Be sure to check your endpoints when you are testing this app.  
            A next step would be to create your routes such that the user is directed to the signup, dashboard or login pages based on whether they are already authenticated.</p>
            <img src="../images/blogpost7images/signup.png" alt="Signup screen" className="mb-4 w-full border-4 rounded mx-auto" />
            <img src="../images/blogpost7images/login.png" alt="Login screen" className="mb-4 w-full border-4 rounded mx-auto" />
            <img src="../images/blogpost7images/reset-password.png" alt="Reset Password screen" className="mb-4 w-full border-4 rounded mx-auto" />
            <p className="mb-4 leading-7">Time to celebrate another completed project! 🎉🎉🎉</p>
            
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

export default Blogpost7;