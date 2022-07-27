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
                        <div className='text-sm text-sky-700'>July 27, 2022</div>
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
            <p className="mb-5 leading-7">On the next screen, give your project a name.  It can be anything you want.</p>
            <img src="../images/blogpost9images/firebase-project-name.png" alt="Firebase project name screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, you can choose whether or not to enable Google Analytics and then click Create Project.</p>
            <img src="../images/blogpost7images/firebase-create-project.png" alt="Firebase create project screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">It will take a few moments to create the project.  Once it&apos;s created, click Continue.</p>
            <p className="mb-5 leading-7">From the dashboard, we need to add a web application by clicking on the web icon.</p>
            <img src="../images/blogpost5images/firebase-add-web-app.png" alt="Firebase add web app icon" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, give your app a name of your choice and then click Register app.</p>
            <img src="../images/blogpost9images/firebase-app-name.png" alt="Firebase app name screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">You will then see a screen that looks similar to the screen below.</p>
            <img src="../images/blogpost5images/firebase-config-variables.png" alt="Firebase config variables screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Leave the screen as is for now.  We will come back to it shortly.  Time to create a react app.</p>
            <p className="mb-5 leading-7">Open a command prompt or PowerShell and navigate to the folder where you want to create your project.  Then type <code className="bg-gray-200 px-2">npx create-react-app upvote-downvote-tutorial</code> at the prompt.</p>
            <p className="mb-5 leading-7">After the project is finished initializing, cd into the newly created folder and launch VSCode by typing <code className="bg-gray-200 px-2">code .</code> including the '.' at the end.</p>
            <p className="mb-5 leading-7">If you need to install VSCode, go <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:text-yellow-400">here</a>.</p>
            <p className="mb-5 leading-7">First things first, we need to install some dependencies.  Open a new terminal and type the following, pressing enter after each command.</p>
            <code className="bg-gray-200 px-2">npm install react-router-dom</code>
            <br />
            <code className="bg-gray-200 px-2">npm install tailwindcss</code>
            <br />
            <code className="bg-gray-200 px-2">npm install firebase</code>
            <p className="mb-5 mt-5 leading-7">The react-router-dom package will be used to create our routes, the tailwindcss package will be used for styling, and the firebase package will be used to connect to our backend.</p>
            <p className="mb-5 leading-7">Configuring TailwindCSS takes a couple more steps.  Refer to this <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:text-yellow-400">page</a> for further information.</p>
            <p className="mb-5 leading-7">In the terminal, enter the command <code className="bg-gray-200 px-2">npx tailwindcss init</code></p>
            <p className="mb-5 leading-7">This will create a <span className="bg-gray-200 italic">tailwind.config.js</span> file.  Open this file and add the following code.</p>
            <img src="../images/blogpost4images/tailwind-config.png" alt="Tailwind config file code" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading7">You will also need to go into the <span className="bg-gray-200 italic">index.css</span> file and add the following code.</p>
            <img src="../images/blogpost4images/tailwind-css.png" alt="Tailwind index.css file code" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Of course, if you do not wish to use TailwindCSS for styling, you can skip those steps and style your components however you would like.</p>
            <p className="mb-5 leading-7">Ok, it&apos;s finally time to start writing some code.  The first step is to create a new file in the <span className="bg-gray-200 italic px-2">src</span> folder in your app.  Call the file <span className="bg-gray-200 italic px-2">firebase-config.js</span> and 
            add the following code to it.  Note that we are pulling functions from &apos;firebase/auth&apos; and &apos;firebase/storage&apos;.  These will be for user authentication and accessing cloud storage, respectively.</p>
            <Gist id="c39c61c53c89ce7b06c6bb8588ba4cfb" />
            <p className="mb-5 leading-7">This file is doing a couple of things as far as connecting to Firebase.  First, it&apos;s establishing the connection to our Firestore database.  And second, it&apos;s accessing the necessary functions from the Firebase authentication 
            functions to allow us to create a user authentication with the Google provider.</p>
            <p className="mb-5 leading-7">You will get the values for the firebaseConfig object from the Firebase SDK screen on the firebase console - the screen we paused on above.  After you copy and paste these values you can click Continue to console.</p>
            <p className="mb-5 leading-7">If you ever need to access these variables again, you can find them in the project settings.</p>
            <p className="mb-5 leading-7">Next, in the <span className="bg-gray-200 italic px-2">src</span> folder, add a new folder called <span className="bg-gray-200 italic px-2">pages</span> and create the following files.</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">Dashboard.js</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">Signin.js</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">CreatePost.js</p>
            <p className="mb-5 leading-7">Also in the <span className="bg-gray-200 italic px-2">src</span> folder, add a new folder called <span className="bg-gray-200 italic px-2">components</span> and create the following files.</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">VoteButtons.js</p>
            <p className="mb-5 leading-7">You&apos;re completed filetree for your <span className="bg-gray-200 italic px-2">src</span> folder should look something like this.</p>
            <img src="../images/blogpost9images/src-filetree.png" alt="Filetree for the src folder" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Ok, before we get any further ahead of ourselves, let&apos;s go back to the firebase console and set up our database and our authentication.</p>
            <p className="mb-5 leading-7">Start by clicking on Authentication from the dashboard of your project.</p>
            <img src="../images/blogpost7images/firebase-auth-dashboard.png" alt="Firebase authentication icon on the project dashboard" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">From the next screen, click on Get Started.</p>
            <img src="../images/blogpost7images/firebase-auth-get-started.png" alt="Firebase authentication get started screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, you will see the various options for creating user authentication.</p>
            <img src="../images/blogpost7images/firebase-select-provider.png" alt="Firebase authentication select provider screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">We will be using the Google provider for our authentication in this app.</p>
            <p className="mb-5 leading-7">Start by selecting the Google Provider option.</p>
            <p className="mb-5 leading-7">On the next screen, click the slidebar to enable Google authentication.  You will need to provide a support email address and then you can click Save.</p>
            <img src="../images/blogpost7images/firebase-google-provider.png" alt="Firebase authentication google provider screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Ok, now we're ready to create a database to hold all of our image collections.  Click on Firestore Database from the menu tree on the left, under the Build menu, and then click Create Database.</p>
            <img src="../images/blogpost7images/firebase-create-database.png" alt="Firebase create database screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Choose Start in Production Mode and click Next.</p>
            <img src="../images/blogpost7images/firebase-production-mode.png" alt="Firebase production mode screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Then select your location and click Enable.</p>
            <img src="../images/blogpost7images/firebase-select-location.png" alt="Firebase selection location screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Once your database has been provisioned, select Start Collection from the main database screen.</p>
            <img src="../images/blogpost8images/firebase-start-collection.png" alt="Firebase start collection screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Add the name of the collection which will be &apos;posts&apos; and click Next.</p>
            <img src="../images/blogpost9images/firebase-posts-collection-name.png" alt="Firebase name collection screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, click the button for Auto Id to enable the Save button and then click Save.  You should now have a &apos;posts&apos; collection with an empty document in it.</p>
            <img src="../images/blogpost8images/firebase-collections-auto-id.png" alt="Firebase selection location screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Next we need to edit the rules for our database and for our cloud storage.  For the database, click on the Rules tab in the upper left of the screen and then change the read,write rule from false to what is shown below.  Be sure to click Publish when you are done.</p>
            <img src="../images/blogpost9images/firebase-database-rules.png" alt="Firebase database rules screen" className="mb-4 w-full rounded mx-auto" />
            <p className="mb-5 mt-5 leading-7">Ok, we are finally ready to add the code to our app.</p>
            <p className="mb-5 leading-7">To begin, we will set up our routes in the <span className="bg-gray-200 italic px-2">App.js</span> file to establish the routes for all of our internal web pages.  Here is the code for that.</p>
            <Gist id="f6b3e9ab46326ecae17cf2f68cb0f7ba" />
            <p className="mb-5 leading-7">The next thing we will do is build the Sign In page.  The first step for that is to add the styling for our Sign In with Google button to the <span className="bg-gray-200 italic px-2">index.css</span> file.  Copy and paste the following code.</p>
            <Gist id="bfc7bc9283e4e632a8aadae06cb9ae2f" />
            <p className="mb-5 leading-7">Next, we can create our <span className="bg-gray-200 italic px-2">Signin.js</span>page.  The code for that is below.  Note that it will be a simple line of text and a button that will show a pop up to sign in with Google.  
            The functionality for the button comes from Firebase functions.  Also, note that we will be setting a variable called &apos;isAuth&apos; in localStorage.  We will use that to determine if the user has already logged in previously.</p>
            <Gist id="47d29b344545f1870ed36a3749e58755" />
            <p className="mb-5 leading-7">Next we will create the <span className="bg-gray-200 italic px-2">CreatePost.js</span> page.  Let&apos;s discuss what&apos;s going on in this file. </p>
            <p className="mb-5 leading-7">First of all, if the user tries to go to this page without the &apos;isAuth&apos; variable set to true in localStorage, they will be navigated to the Sign In page.</p>
            <p className="mb-5 leading-7">Also, the user must enter a title and a post, which are stored in state, in order to be able to submit their post.</p>
            <p className="mb-5 leading-7">Finally, when the user clicks Create Post, the Title and Post are sent to our Firebase Database as a single document.  Note that we are adding emtpy arrays for users that have either upvoted or downvoted the posts.  We will use these arrays 
            in our <span className="bg-gray-200 italic px-2">VoteButtons.js</span> file.</p>
            <Gist id="2e160594c7de5bfd3e3e2f2f9e88bc5d" />
            <p className="mb-5 leading-7">Ok, now that we have the <span className="bg-gray-200 italic px-2">CreatePost.js</span> file set, we can focus on the <span className="bg-gray-200 italic px-2">VoteButtons.js</span> file.  The code for that is below.</p>
            <Gist id="3ee83c1900ccd3c1211bc2f13164ce7a" />
            <p className="mb-5 leading-7">There is a lot going on in this file.  First of all, we want to be able to toggle an upvote or downvote for each user and set the fill color of our upvote and downvote buttons based on the user&apos;s click.  This requires three 
            pieces of state for each upvote and downvote.  The first piece of state toggles the vote, the second sets the fill color, and the third sets whether or not the user has already voted and prevents them from voting again.  If the user has upvoted, they will not 
            be able to downvote the same post or upvote the post a second time.  The same is true if the user downvotes a post.  They will then not be allowed to upvote the same post or downvote again.</p>
            <p className="mb-5 leading-7">Once the user votes, the corresponding array for upvotes or downvotes for the post is updated in the database.  This allows for tracking the number of upvotes and downvotes for each post.</p>
            <p className="mb-5 leading-7">Conditional rendering is used to show the fill colors for the upvote and downvote icons.</p>
            <p className="mb-5 leading-7">Last but not least, we can create our dashboard to display our posts.  The dashboard will initially show a very simple sign in screen, followed by a screen showing posts in the database and a button to add more posts.  There will also be a logout button.</p>
            <p className="mb-5 leading-7">The code for the dashboard is shown below.  Note that we have imported our VoteButtons component which will display our voting buttons and tallies to the right of the post.</p>
            <Gist id="b110464c2a992cfffdab2370dc616471" />
            <p className="mb-5 leading-7">And that&apos;s it!  Our project is complete and now we have code we can use in other projects any time we want to add voting to a post.  Time to give this project a big thumb&apos;s up!  👍</p>
            <img src="../images/blogpost9images/Dashboard-signin.png" alt="Completed project" className="mb-4 w-full border-4 rounded mx-auto" />
            <img src="../images/blogpost9images/Signin.png" alt="Completed project" className="mb-4 w-full border-4 rounded mx-auto" />
            <img src="../images/blogpost9images/Dashboard.png" alt="Completed project" className="mb-4 w-full border-4 rounded mx-auto" />
            
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