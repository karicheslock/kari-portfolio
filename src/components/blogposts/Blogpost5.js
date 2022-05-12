import {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import Comments from '../comment-section/comments/Comments';
import {auth, provider} from '../../firebase-config';
import {signInWithPopup, signOut} from 'firebase/auth';
import Gist from 'react-gist';

export default function Blogpost5() {

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
                <div className='font-bold text-sky-900 mb-10 pr-2 text-2xl'>How to Build a Custom Comment Section for a Blog or Website using React, TailwindCSS, and Firebase</div>
                <div>
                    <img src="../images/comment-section.png" alt='A comment section application' className="w-3/5 h-72 mx-auto mb-4 rounded"></img>
                </div>
                    <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                    <div className='text-sm text-sky-700'>May 11, 2022</div>
                    <div className='text-sm text-gray-500 mb-4'>15 min read</div>
        
                    <TwitterShareButton
                        title={"How to Build a Custom Comment Section for a Blog or Website using React, TailwindCSS, and Firebase"}
                        url={'https://www.karicheslock.com/blogpost5'}
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
            <p className="mb-4">In this post, I'm going to be showing you how to create a custom comment section that you can use in any application or blog.  This will be a full stack application that uses <a href="https://create-react-app.dev/" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>Create React App</a> and <a href="https://tailwindcss.com/" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>TailwindCSS</a> on 
                the frontend and <a href="https://firebase.google.com/" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>Firebase</a> on the backend.</p>
            <p className="mb-4">We will also use the Google Auth Provider from Firebase to set up authentication.</p>
            <p className="mb-4">The source code for this project can be found <a href="https://github.com/karicheslock/comment-section" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>here</a>.</p>
            <p className="mb-4">Let's get started.</p>
            <p className="mb-4">Open PowerShell or the Command Prompt and navigate to the location where you would like to store your project.  Run the following code.</p>
            <div className="mb-4"><code className="bg-gray-200">npx create-react-app comment-section</code></div>
            <p className="mb-4">Now type <code className="bg-gray-200">cd comment-section</code> and then <code className="bg-gray-200">code .</code> making sure to include the dot at the end.</p>
            <p className="mb-4">This will load VSCode with a React framework pre-installed.</p>
            <p className="mb-4">Open a new terminal inside VSCode and install TailwindCSS by typing <code className="bg-gray-200">npm install tailwindcss postcss autoprefixer</code> and then press enter.</p>
            <p className="mb-4">Then type <code className="bg-gray-200">npx tailwindcss init</code> and press enter.</p>
            <p className="mb-4">Open the <span className="bg-gray-200 italic">tailwind.config.js</span> file and add the following code to the file.</p>
            <img src="../images/blogpost4images/tailwind-config.png" alt="Tailwind config file" className="mb-4" />
            <p className="mb-4">Now go to your <span className="bg-gray-200 italic">index.css</span> file and add the following code.</p>
            <img src="../images/blogpost4images/tailwind-css.png" alt="Tailwind css file" className="mb-4" />
            <p className="mb-4">We are now set up to use TailwindCSS classes for our styling in the app.</p>
            <p className="mb-4">Now we can do some file cleanup, deleting the files we don&apos;t need and adding the ones we do.  The following screenshot shows what you&apos;re filetree should look like.  Don&apos;t worry about the contents of each file for now.  We 
            will go through them one by one.</p>
            <img src="../images/blogpost5images/comment-section-filetree.png" alt="Application filetree" className="mb-4" />
            <p className="mb-4">Now that we have the basic file structure of our application in place, we will start by configuring Firebase to run on the backend.  Let's go to the Firebase <a href="https://console.firebase.google.com/" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>console</a> and create a new project.</p>
            <p className="mb-4">Click Add project.</p>
            <img src="../images/blogpost5images/firebase-add-new-project.png" alt="Firebase add project screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-4">Enter a name for your project and click Continue.</p>
            <img src="../images/blogpost5images/firebase-project-name.png" alt="Firebase add project name screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-4">On the next screen you can decide whether or not you want to enable Google Analytics.  I&apos;m choosing to disable it.  Then click Create Project.</p>
            <img src="../images/blogpost5images/firebase-create-project.png" alt="Firebase create project screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-4">This will take a few moments.  In the meantime, go back to your terminal in VSCode and run <code className="bg-gray-200">npm install firebase</code> to install the dependency.</p>
            <p className="mb-4">Once your project is ready, click Continue.</p>
            <img src="../images/blogpost5images/firebase-project-continue.png" alt="Firebase continue screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-4">On the next screen select Authentication under the Build menu.  It should be the top option.</p>
            <img src="../images/blogpost5images/firebase-build-menu.png" alt="Firebase Build menu" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-4">And then click Get Started.</p>
            <img src="../images/blogpost5images/firebase-authentication-get-started.png" alt="Firebase Authentication Get Started screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-4">On the next screen, select Google under Other Providers.</p>
            <img src="../images/blogpost5images/firebase-select-provider.png" alt="Firebase Select Provider screen" className="mb-4 w-1/2 h-1/2 rounded mx-auto" />
            <p className="mb-4">Then you will need to click the slidebar at the top to enable Google as an authentication provider.  Enter a service email address and then click Save.</p>
            <img src="../images/blogpost5images/firebase-enable-google-provider.png" alt="Firebase Enable Google Provider screen" className="mb-4 rounded mx-auto" />
            <p className="mb-4">Now you will need to click Project Overview on the sidebar above the Build menu.  This will take you back to the main page for your project.  From here you will need to click the icon for adding a web app to your project.</p>
            <img src="../images/blogpost5images/firebase-add-web-app.png" alt="Firebase Add Web App icon" className="mb-4 rounded mx-auto w-1/2 h-1/2" />
            <p className="mb-4">On the next screen, you will enter a name of your choice for your app and then click Register App.</p>
            <img src="../images/blogpost5images/firebase-register-app.png" alt="Firebase Register App page" className="mb-4 rounded mx-auto w-1/2 h-1/2" />
            <p className="mb-4">Then you will a screen that looks like this.</p>
            <img src="../images/blogpost5images/firebase-config-variables.png" alt="Firebase configuration variables" className="mb-4 rounded mx-auto" />
            <p className="mb-4">We don&apos;t need to install firebase since we already did that.  All we need to do right now is copy the code in the next box and paste it into our <span className="bg-gray-200 italic">firebase-config.js</span> file.</p>
            <p className="mb-4">Just copy it as is for now.  We will make some changes to it later.  After you have pasted it into the <span className="bg-gray-200 italic">firebase-config.js</span> file, go back to Firebase and click Continue to Console.</p>
            <p className="mb-4">Now go back to the Build menu in the sidebar and click Firestore Database.  Then click Create Database.</p>
            <img src="../images/blogpost5images/firebase-create-firestore-database.png" alt="Firebase Create Firestore page" className="mb-4 rounded mx-auto w-1/2 h-1/2" />
            <p className="mb-4">From here, we will want to start in Production Mode so just click Next.</p>
            <img src="../images/blogpost5images/firestore-production-mode.png" alt="Firestore production mode page" className="mb-4 rounded mx-auto w-1/2 h-1/2" />
            <p className="mb-4">On the next screen, select the location closest to you and click Enable.</p>
            <img src="../images/blogpost5images/firestore-select-location.png" alt="Firestore select location page" className="mb-4 rounded mx-auto w-1/2 h-1/2" />
            <p className="mb-4">Provisioning the database will take a few moments.  On the next screen, click Start Collection.</p>
            <img src="../images/blogpost5images/firestore-start-collection.png" alt="Firestore Start Collection page" className="mb-4 rounded mx-auto w-1/2 h-1/2" />
            <p className="mb-4">Enter the name &apos;comments&apos; for your collection and click Next.</p>
            <img src="../images/blogpost5images/firestore-collection-name.png" alt="Firestore Collection Name page" className="mb-4 rounded mx-auto" />
            <p className="mb-4">On the next screen, click the button for Auto Id to give your first document a unique identifier.</p>
            <img src="../images/blogpost5images/firestore-auto-id.png" alt="Firestore Auto Id new document page" className="mb-4 rounded mx-auto" />
            <p className="mb-4">Then click Save.  This will add a blank document to our collection so that our queries against this database will work.  We will delete this blank document later after we add some data.</p>
            <img src="../images/blogpost5images/firestore-blank-document.png" alt="Firestore save new blank document page" className="mb-4 rounded mx-auto" />
            <p className="mb-4">There is just one last thing to do and we will have our database configured.  Click on the Rule tab at the top left of the screen.</p>
            <img src="../images/blogpost5images/firestore-menu-tabs.png" alt="Firestore menu tabs" className="mb-4 rounded mx-auto" />
            <p className="mb-4">Then alter the rules as follows.  When you have made the modifications click Publish.</p>
            <img src="../images/blogpost5images/firestore-rules.png" alt="Firestore rules" className="mb-4 rounded mx-auto" />
            <p className="mb-4">These rules will allow any user to see the records in the database but they will require a user to be logged in to write to the database.</p>
            <p className="mb-4">Now we&apos;re ready to go back to VSCode and build our app.</p>
            <p className="mb-4">Let's start by setting up our environment variables in our <span className="bg-gray-200 italic">.env</span> file.</p>
            <img src="../images/blogpost5images/env-file.png" alt="Environment variables" className="mb-4 rounded mx-auto" />
            <p className="mb-4">You will copy and paste the values from the <span className="bg-gray-200 italic">firebase.config.js</span> file into the corresponding variable name.  Note that you must have &apos;REACT_APP_&apos; to start each variable or your app will not work.</p>
            <p className="mb-4">Now you can set up your <span className="bg-gray-200 italic">firebase.config.js</span> file as follows.  Note that we are initializing our app, our Firestore database, and our Google Auth Provider in this file.</p>
            <Gist id="92ab3a5294991246906ac5a83cec0c42" />
            <p className="mb-4">One last housekeeping thing we should do is clean up our <span className="bg-gray-200 italic">index.html</span> and our <span className="bg-gray-200 italic">index.js</span> files as follows.</p>
            <Gist id="5fdb1dd50621020567d4a186807591eb" />
            <Gist id="f034001fd95f49ab1492b94603c078cc" />
            <p className="mb-4">Next we should add the styling to the <span className="bg-gray-200 italic">index.css</span> file to style our Sign in with Google button.  This will be the only styling we will add to the <span className="bg-gray-200 italic">index.css</span> file. 
            All other styling will be done using TailwindCSS classes.</p>
            <Gist id="d75c564b4ca110a0487ca3c48712d548" />
            <p className="mb-4">Now we can fill in the <span className="bg-gray-200 italic">api.js</span> file with our Create, Update, and Delete queries that will run against the Firestore database.  Note that we will be importing the <span className="italic">addDoc</span>, 
                <span className="italic">collection</span>, <span className="italic">deleteDoc</span>, <span className="italic">doc</span>, and <span className="italic">updateDoc</span> functions from Firestore as well as <span className="italic">db</span> and 
                <span className="italic">auth</span> from our <span className="bg-gray-200 italic">firebase.config.js</span> file.</p>
            <p className="mb-4">Our <span className="italic">createComment</span> function will add the fields we need to create a comment document.  The <span className="italic">updateComment</span> function will take the updated text and an id as parameters, and the 
            <span className="italic">deleteComment</span> function will take an id as a parameter. Please refer to the <a href="https://firebase.google.com/docs" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>Firebase Docs</a> for specific information about how to construct these types of queries.</p>
            <Gist id="9965ca3502e14d3351df16908a2e3744" />
            <p className="mb-4">Now we are ready to build our comments components.  Let&apos;s start with the <span className="bg-gray-200 italic">Comments.js</span> file.  This form is fairly simple.  We will just need one textarea and two buttons.</p>
            <p className="mb-4">We will create some state variables for the text that will be entered as well as a variable that toggles the form on and off.  We will also set some conditional rendering that determines if the Submit button is enabled and if the Cancel button is showing.</p>
            <Gist id="d6ab276f63d4030367e39f8bf249653d" />
            <p className="mb-4">Next we will add the code for the <span className="bg-gray-200 italic">Comment.js</span> file.  Note that we will be using the Comment Form that we created to edit or reply to a comment.  We will also be calling the Comment component recursively in order to display all replies.</p>
            <p className="mb-4">Finally conditional rendering will be used to determine who can reply to a comment, edit a comment, or delete a comment.  Any user will be allowed to reply to a comment, but only the user who created a comment will be able to edit or delete it.</p>
            <Gist id="6874c1709f9e4fd1effdf04193bd88c8" />
            <p className="mb-4">Finally, we will create the <span className="bg-gray-200 italic">Comments.js</span> file using our api functions as well as the <span className="italic">getDocs</span> function from Firestore.  We will use the useEffect hook to retrieve all comments from Firebase.</p>
            <p className="mb-4">Then we will render the Comment Form for authorized users with the retrieved comments below it.</p>
            <Gist id="e1bfa097542ca31f1ea19f141693da96" />
            <p className="mb-4">Now all we need to do is add the code to our <span className="bg-gray-200 italic">App.js</span> file and we will be done!  This is where we need to create our Sign in and Sign out functions.  Note that these functions 
            will be used to set a variable in localStorage called isAuth.  This variable will determine what is visible to the user.</p>
            <Gist id="69ba6856216912b42d68d929617354c4" />
            <p className="mb-4">And that&apos;s it!  You should now be able to run <code className="bg-gray-200">npm start</code> to see your completed project.  Time to celebrate! 🎉🎉</p>
            <img src="../images/comment-section.png" alt="Comment section completed app" className="mb-4" />

            <p className="mb-5 leading-7">
                Please comment below 👇 or send me a <Link to="/#contact" alt='Send me a message' target='_blank' className="text-blue-500 hover:text-blue-800">message 📨</Link> if you liked what I had to say.  You can also connect with me on
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