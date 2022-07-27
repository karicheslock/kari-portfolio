import {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import Comments from '../comment-section/comments/Comments';
import {auth, provider} from '../../firebase-config';
import {signInWithPopup, signOut} from 'firebase/auth';
import Gist from 'react-gist';

function Blogpost8() {
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
                        <div className='font-bold text-sky-900 mb-10 pr-2 text-2xl'>Storing and Retrieving Images Using Firebase Cloud Storage</div>
                        <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                        <div className='text-sm text-sky-700'>July 5, 2022</div>
                        <div className='text-sm text-gray-500 mb-4'>5 min read</div>
                    </div>
                    <img src="../images/blogpost8-firebaselogo.png" alt='Firebase logo' className="w-2/3 h-48 rounded pl-20"></img>
                </div>
                    
        
                    <TwitterShareButton
                        title={"Storing and Retrieving Images Using Firebase Cloud Storage"}
                        url={'https://www.karicheslock.com/blogpost8'}
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
            <p className="mb-5 leading-7">Handling images in a web application can be tricky, particularly if you have a lot of them and need them to load quickly.  Firebase Cloud Storage can be a solution to this problem by storing as many images as you want and providing a URL to access them easily.  
            Today I'm going to show you a simple and straight-forward way to set this up.</p>
            <p className="mb-5 leading-7">Let&apos;s get started.</p>
            <p className="mb-5 leading-7">The first step is to create a new project in <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:text-yellow-400">Firebase</a>.</p>
            <p className="mb-5 leading-7">Go to the Firebase Console and click Add Project.</p>
            <img src="../images/blogpost5images/firebase-add-new-project.png" alt="Firebase add project screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, give your project a name.  It can be anything you want.</p>
            <img src="../images/blogpost8images/firebase-project-name.png" alt="Firebase project name screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, you can choose whether or not to enable Google Analytics and then click Create Project.</p>
            <img src="../images/blogpost7images/firebase-create-project.png" alt="Firebase create project screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">It will take a few moments to create the project.  Once it&apos;s created, click Continue.</p>
            <p className="mb-5 leading-7">From the dashboard, we need to add a web application by clicking on the web icon.</p>
            <img src="../images/blogpost5images/firebase-add-web-app.png" alt="Firebase add web app icon" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, give your app a name of your choice and then click Register app.</p>
            <img src="../images/blogpost8images/firebase-app-name.png" alt="Firebase app name screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">You will then see a screen that looks similar to the screen below.</p>
            <img src="../images/blogpost5images/firebase-config-variables.png" alt="Firebase config variables screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Leave the screen as is for now.  We will come back to it shortly.  Time to create a react app.</p>
            <p className="mb-5 leading-7">Open a command prompt or PowerShell and navigate to the folder where you want to create your project.  Then type <code className="bg-gray-200 px-2">npx create-react-app image-handler-tutorial</code> at the prompt.</p>
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
            <Gist id="54e2a45a3193baa73aa61c4d4160fcb3" />
            <p className="mb-5 leading-7">You will get the values for the firebaseConfig object from the Firebase SDK screen on the firebase console - the screen we paused on above.  After you copy and paste these values you can click Continue to console.</p>
            <p className="mb-5 leading-7">If you ever need to access these variables again, you can find them in the project settings.</p>
            <p className="mb-5 leading-7">Next, in the <span className="bg-gray-200 italic px-2">src</span> folder, add a new folder called <span className="bg-gray-200 italic px-2">pages</span> and create the following files.</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">Dashboard.js</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">Signin.js</p>
            <p className="mb-5 bg-gray-200 italic px-2 w-fit">CreateCollection.js</p>
            <p className="mb-5 leading-7">You&apos;re completed filetree for your <span className="bg-gray-200 italic px-2">src</span> folder should look something like this.</p>
            <img src="../images/blogpost8images/src-filetree.png" alt="Filetree for the src folder" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
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
            <p className="mb-5 leading-7">Add the name of the collection which will be &apos;userCollections&apos; and click Next.</p>
            <img src="../images/blogpost8images/firebase-userscollections.png" alt="Firebase name collection screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">On the next screen, click the button for Auto Id to enable the Save button and then click Save.  You should now have a &apos;userCollections&apos; collection with an empty document in it.</p>
            <img src="../images/blogpost8images/firebase-collections-auto-id.png" alt="Firebase selection location screen" className="mb-4 w-2/3 h-1/2 rounded mx-auto" />
            <p className="mb-5 leading-7">Next we need to edit the rules for our database and for our cloud storage.  For the database, click on the Rules tab in the upper left of the screen and then change the read,write rule from false to what is shown below.  Be sure to click Publish when you are done.</p>
            <img src="../images/blogpost8images/firebase-database-rules.png" alt="Firebase database rules screen" className="mb-4 w-full rounded mx-auto" />
            <p className="mb-5 mt-5 leading-7">Now go to the cloud storage by clicking on Storage under the Build menu on the left.  You will find a Rules tab here also in the upper left.  This time you will just change the read,write rules from false to true as shown below.  Don&apos;t forget to Publish the rules when you are done.</p>
            <img src="../images/blogpost8images/firebase-storage-rules.png" alt="Firebase storage rules screen" className="mb-4 w-full rounded mx-auto" />
            <p className="mb-5 mt-5 leading-7">Ok, we are finally ready to add the code to our app.</p>
            <p className="mb-5 leading-7">To begin, we will set up our routes in the <span className="bg-gray-200 italic px-2">App.js</span> file to establish the routes for all of our internal web pages.  Here is the code for that.</p>
            <Gist id="b8144012dfa068a208e142efa86b88ec" />
            <p className="mb-5 leading-7">The next thing we will do is build the Sign In page.  The first step for that is to add the styling for our Sign In with Google button to the <span className="bg-gray-200 italic px-2">index.css</span> file.  Copy and paste the following code.</p>
            <Gist id="bfc7bc9283e4e632a8aadae06cb9ae2f" />
            <p className="mb-5 leading-7">Next, we can create our <span className="bg-gray-200 italic px-2">Signin.js</span>page.  The code for that is below.  Note that it will be a simple line of text and a button that will show a pop up to sign in with Google.  
            The functionality for the button comes from Firebase functions.  Also, note that we will be setting a variable called &apos;isAuth&apos; in localStorage.  We will use that to determine if the user has already logged in previously.</p>
            <Gist id="47d29b344545f1870ed36a3749e58755" />
            <p className="mb-5 leading-7">Next we will create the <span className="bg-gray-200 italic px-2">CreateCollection.js</span>page.  You will see that there is quite a bit going on in this file. </p>
            <p className="mb-5 leading-7">First of all, if the user tries to go to this page without the &apos;isAuth&apos; variable set to true in localStorage, they will be navigated to the Sign In page.</p>
            <p className="mb-5 leading-7">Also, the user must enter a title, a description, and at least one image - all of which are stored in state - in order to be able to submit their collection.  The steps to create a collection are listed, and there is some conditional formatting to add additional instructions once the user starts adding images.</p>
            <p className="mb-5 leading-7">When the user clicks the button to Upload an image, the image goes into Cloud Storage and the URL associated with it is pushed to the imageArray.  The image also displays on the screen.</p>
            <p className="mb-5 leading-7">Finally, when the user clicks Create Collection, the entire collection including the Title, Description, and Image Array are sent to our Firebase Database.  The advantage of doing it this way as opposed to storing the images 
            directly in our Firebase Database is that our Firebase Database doesn&apos;t get bogged down with a bunch of memory-hogging images.  All that goes into the database is a URL that references the image which leads to more efficient storage and retrieval.</p>
            <Gist id="28f09816bbdb01193233aa0d27e5f7e9" />
            <p className="mb-5 leading-7">Last but not least, we will create the Dashboard with a button to add an image collection if the user is authorized as well as buttons to go to the Signin page or logout if the user is already signed in.  The Dashboard will also display any existing collections once the user has logged in.</p>
            <Gist id="0a0bbda048f0f9b2d2a13987dfacbed5" />
            <p className="mb-5 mt-5 leading-7 text-blue-500 font-bold">Comments</p>
            <p className="mb-5 leading-7">This project is now complete but is obviously oversimplified.  For example, if a user adds a lot of images to a collection, say more than about ten or so, some additional styling will be needed to ensure the screen doesn&apos;t look 
            overly cluttered.  A next step for this project could be to limit the number of images that are displayed on the main screen and add a link to view all remaining images.  There are also other pieces of information that could be displayed such as the username of the 
            person who posted the collection or maybe even the ability to add comments to a collection.  There are a lot of different directions you could go using this code as a starting point.  The possibiliities are endless!</p>
            <img src="../images/blogpost8images/completed-project.png" alt="Completed project" className="mb-4 w-full border-4 rounded mx-auto" />
            <p className="mb-4 leading-7">Time to celebrate another completed project! 🎉🎉🎉</p>
            
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

export default Blogpost8;