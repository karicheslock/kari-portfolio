import {useState, useEffect} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import Comments from '../comment-section/comments/Comments';
import {auth, provider} from '../../firebase-config';
import {signInWithPopup, signOut} from 'firebase/auth';
import Gist from 'react-gist';

function Blogpost4() {

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
        <div className="flex mb-4">
                <div className="flex flex-col justify-center">
                <div className=" font-bold text-green-500 mb-4 text-2xl">MERN Stack CRUD Tutorial</div>
                <div className='font-bold text-blue-700 mb-10 pr-2 text-2xl'>Build a personal task manager app using the MERN Stack with Redux Toolkit and TailwindCSS</div>
                <div>
                    <img src="../images/taskmanager.png" alt='The home screen of a task manager app' className="h-48 rounded mb-4 mx-auto"></img>
                </div>
                    
                    <div className='text-sm text-sky-700 font-bold mb-2'>By Kari Cheslock</div>
                    <div className='text-sm text-sky-700'>April 28, 2022</div>
                    <div className='text-sm text-gray-500 mb-4'>20 min read</div>
                
                    
        
                    <TwitterShareButton
                        title={"MERN Stack CRUD Tutorial - Build a personal task manager app using the MERN Stack with Redux Toolkit and TailwindCSS"}
                        url={'https://www.karicheslock.com/blogpost4'}
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

        <p className="mb-5 leading-7">In this article I will be laying out a step-by-step tutorial for building a task manager app using the MERN Stack.  I will also be implementing global state using the Redux toolkit, creating HTTP requests using Axios,
         and styling the site using TailwindCSS.  As a finishing touch, I will implement conditional rendering that changes the color scheme of the task based on the progress towards completion.  And, finally, I will show you how to deploy the app to Heroku.</p>

        <p className="mb-4">The source code for this project can be found <a href="https://github.com/karicheslock/task-manager-mern-stack" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>here</a>.</p>

        <p className="font-bold text-blue-500 text-xl mb-4">What is the <span className="text-green-500">MERN Stack </span>?</p>

        <p className="mb-4"><span className="font-bold">M</span> - MongoDB, a NoSQL database that is available open source.  It is highly scalable and flexible and allows for easy query implementation.</p>
        <p className="mb-4"><span className="font-bold">E</span> - Express, a Node.js framework used to write server-side logic for web and mobile applications.</p>
        <p className="mb-4"><span className="font-bold">R</span> - React, a front-end JavaScript library for building the UI for a web application</p>
        <p className="mb-4"><span className="font-bold">N</span> - Node.js, an open source server environment for executing JavaScript code server-side.</p>

        <p className="mb-4">In terms of full-stack development, MongoDB serves as the backend of the application, React is used to build out the frontend of the application, and Express and Node.js build out the server in between.</p>

        <p className="font-bold text-blue-500 text-xl mb-4">To Begin</p>
        <p className="mb-4">This tutorial will be using VS Code which can be installed <a href="https://code.visualstudio.com/download" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>here</a>.</p>
        <p className="mb-4">You will also need to install nodemon as a global package by typing <code className="bg-gray-200">npm install -g nodemon</code> in the command line.</p>
        <p className="mb-4">After doing these installations, the first step will be to create a folder for your application.</p>
        <p className="mb-4">Navigate to the location where you would like to store your application and create a folder called <span className="bg-gray-200 italic font-mono">"my-task-manager"</span> or any name of your choice.</p>
        <p className="mb-4">Open a command line or Windows PowerShell, navigate to this new folder and type <code className="bg-gray-200">code .</code></p>
        <p className="mb-4">Note the space and the &apos;.&apos; after the word &apos;code&apos;.  You need to type those also.</p>
        <p className="mb-4">From VSCode, open a new terminal and type <code className="bg-gray-200">npm init</code>.  This will create new package.json and package-lock.json files.</p>
        <p className="mb-4">You can also type <code className="bg-gray-200">git init</code> to initialize an empty git repository and create a <span className="italic font-mono bg-gray-200">".gitignore"</span> file.</p>
        <p className="mb-4">In the <span className="italic font-mono bg-gray-200">".gitignore"</span> file add <span className="bg-gray-200">node modules</span> and <span className="bg-gray-200">.env</span> on separate lines.</p>
        <p className="mb-4">It should look like this: </p>
        <img src="../images/blogpost4images/gitignore.png" alt="A gitignore file" className="w-1/2 h-42 mb-4" />
        <p className="mb-4">The next step is to install the backend dependencies.</p>
        <p className="mb-4">In the terminal type</p>
        <code className="bg-gray-200 mb-4">npm install axios bcryptjs dotenv express express-async-handler http-proxy-middleware jsonwebtoken mongoose</code>
        <p className="mb-4">or</p>
        <code className="bg-gray-200 mb-4">yarn install axios bcryptjs dotenv express express-async-handler http-proxy-middleware jsonwebtoken mongoose</code>
        <p className="mb-4">You will also need to install two devDependencies, which are dependencies that will only be used during development.</p>
        <p className="mb-4">Type the following into the terminal (note the -D in the command):</p>
        <code className="bg-gray-200 mb-4">npm install -D concurrently nodemon</code>
        <p className="mb-4">or</p>
        <code className="bg-gray-200 mb-4">yarn install -D concurrently nodemon</code>
        <p className="mb-4">The next step is to create our environment variables in the <span className="bg-gray-200">.env</span> file but first we will create our MongoDB Database using MongoDB Atlas.</p>

        <p className="font-bold text-blue-500 text-xl mb-4">MongoDB Atlas</p>
        <p className="mb-4">If you don&apos;t already have an account with MongoDB Atlas, you can sign up for one <a href="https://www.mongodb.com/" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>here</a>.</p>
        <p className="mb-4">After signing in, click the button for <span className="bg-green-800 text-white p-1 border rounded">New Project</span>.</p>
        <p className="mb-4">Give the project a name and click Next.</p>
        <img src="../images/blogpost4images/create-project-name.png" alt="MongoDB Create Project screen for naming a project" className="mb-4" />
        <p className="mb-4">Click <span className="bg-green-800 text-white p-1 border rounded">Create Project</span> on the next screen.</p>
        <p className="mb-4">The next screen will be the Database Deployment screen.  Click <span className="bg-green-800 text-white p-1 border rounded">Build a Database</span>.</p>
        <p className="mb-4">Select the free tier and then choose a provider and region.  You&apos;re selections here don&apos;t matter that much but you will want to select the closest region to you.</p>
        <p className="mb-4">Scroll to the bottom of the screen and enter a cluster name.  Then click <span className="bg-green-800 text-white p-1 border rounded">Create Cluster</span>.</p>
        <img src="../images/blogpost4images/cluster-name.png" alt="MongoDB Create Cluster screen" className="mb-4" />
        <p className="mb-4">It will take 3 to 5 minutes to provision the resources for your cluster.  In the meantime, you can create a username and password one the Security Quickstart page.  Be sure to make a note of your password.  You will need it later when
        we set up the database connection in the app.  Click <span className="bg-green-800 text-white p-1 border rounded">Create User</span> when you are done.</p>
        <img src="../images/blogpost4images/create-user.png" alt="MongoDB Create User screen" className="mb-4" />
        <p className="mb-4">Scroll to the bottom of the screen and click Add My Current IP Address followed by <span className="bg-green-800 text-white p-1 border rounded">Finish and Close</span>.</p>
        <img src="../images/blogpost4images/add-ip-address.png" alt="MongoDB Add Current IP Address screen" className="mb-4" />
        <p className="mb-4">Ok, that&apos;s it for now in MongoDB.  Leave the window open - we&apos;ll come back to it in just a minute - and head back to VSCode.</p>
        <p className="mb-4">Create a new file in your folder and call it <span className="bg-gray-200 italic">.env</span>.</p>
        <p className="mb-4">This file will need 4 variables:</p>
        <code className="bg-gray-200">NODE_ENV = development</code>
        <code className="bg-gray-200">PORT = 5000</code>
        <div className="flex"><code className="bg-gray-200 pr-1">MONGO_URI = </code><p className="italic px-1">**This will come from your MongoDB database.  See instructions below**</p></div>
        <code className="bg-gray-200 mb-4">JWT_SECRET = mysecretcode123</code>
        <p className="mb-4">The NODE_ENV variable will be changed to production later when we are ready to deploy but for now we will leave it as development.  Also, you can use a different port besides 5000, but this port number will work for demonstration 
        purposes.  You can also set the JWT_SECRET to a value of your choice or you can use the one above.</p>
        <p className="mb-4">For the MONGO_URI, head back over to your MongoDB database dashboard and click on Connect.</p>
        <img src="../images/blogpost4images/database-dashboard.png" alt="MongoDB database dashboard screen" className="mb-4" />
        <p className="mb-4">Click on the middle option - Connect My Application.  From there, you should see a screen that looks like this.</p>
        <img src="../images/blogpost4images/mongo-uri-screen.png" alt="MongoDB database connection string screen" className="mb-4" />
        <p className="mb-4">Copy the connection string from step 2 and paste it into your MONGO_URI variable in your .env file.  You will need to replace &#60;password&#62;, including the angle brackets, with your password that you created previously.  
        You will also need to replace myFirstDatabase with your database name.</p>
        <p className="mb-4">Ok!  With all of that done, we are finally ready to start writing some code.  Let&apos;s start building the backend of our app.</p>

        <p className="font-bold text-blue-500 text-xl mb-4">Building the Backend</p>
        <p className="mb-4">The following screenshot shows the folders and files that will be needed to create this app.  Begin by creating a folder called <span className="italic bg-gray-200">backend</span>.  From there, you can create the folders and files as shown.  Note 
        that the <span className="italic bg-gray-200">server.js</span> is in the root backend folder.  You will see the Add New Folder and Add New File buttons when you hover over the project folder.  Make sure you type the <span className="bg-gray-200 italic">.js </span>
        extensions on your files.</p>
        <img src="../images/blogpost4images/backend-file-tree.png" alt="Backend file tree for the application" className="mb-6 w-1/2 h-42" />
        <p className="mb-4">Let&apos;s start in the <span className="bg-gray-200 italic">db.js </span>file.  The following code should go in this file.  Please note that although you can copy and paste this code, you will learn a lot more if you type it out 
        yourself and start gaining &apos;muscle memory&apos; of the boiler plate code that you can reuse in other applications.</p>
        <Gist id='b3b00824b6332ccacaa0df96a3f02d81' />
        <p className="mb-4">This code establishes the connection to your MongoDB database by accessing the MONGO_URI variable that you stored in your <span className="bg-gray-200 italic">.env</span> file.</p>
        <p className="mb-4">Next we will add the code for the <span className="bg-gray-200 italic">userModel.js </span> and <span className="bg-gray-200 italic">taskModel.js </span> files, respectively.  These files will establish the schema for the user and task collections 
        in your MongoDB database.  Note that we will be including timestamps for each schema.  This will add fields for <span className="italic">createdAt</span> and <span className="italic">updatedAt</span> with each document.</p>
        <Gist id='c17a57c4f0407883283577e2d8bff052' />
        <Gist id='c29dfed47308e4b0443564ae9ddcd998' />
        <p className="mb-4">Now we need the code for the <span className="bg-gray-200 italic">userController.js </span> and <span className="bg-gray-200 italic">taskController.js </span> files.  These files will contain the functions for interacting with your  
        MongoDB database.  The <span className="bg-gray-200 italic">userController.js </span> file also contains code to generate a hashed password using the <span className="bg-gray-200 italic">bcryptjs </span> library as well as code to generate a json webtoken 
        using the <span className="bg-gray-200 italic">jsonwebtoken </span> library.  Note that the functions in the <span className="bg-gray-200 italic">taskController.js </span> file require a valid user.</p>
        <Gist id='8fa0817bd9148d18238dd4401fb78a3f' />
        <Gist id='53bdfbbdef869503327b0b3040b154b4' />
        <p className="mb-4">The next step is to create the middleware files.  The <span className="bg-gray-200 italic">authMiddleware.js </span> file will allow us to establish protected routes for our API endpoints.  This will ensure that a single user can only 
        access and edit their own tasks.  The <span className="bg-gray-200 italic">errorMiddleware.js </span> file will allow us to see the error stack while we are in development.</p>
        <Gist id='18cb35d9f6dda49495cdd76dae6e3207' />
        <Gist id='0678d00319782a24ea2b453b7c6459c0' />
        <p className="mb-4">Now that the models, controllers, and middleware are established, we can create the routes for users and tasks.  The following code will go in the <span className="bg-gray-200 italic">userRoutes.js </span> and 
        <span className="bg-gray-200 italic">taskRoutes.js </span> files, respectively.</p>
        <Gist id='8c8f2bdedd1809fb31f32fd210b3d1cf' />
        <Gist id='296057cd7849af876c47a15509c6a4b9' />
        <p className="mb-4">The last step to building out the backend is to add the code for the <span className="bg-gray-200 italic">server.js </span> file.  This file will use the routes we created to connect to the database.</p>
        <Gist id='ca81b2b8317a09c3f99aaac604fc5e49' />
        <p className="mb-4">Note that you can comment out the code black labelled &apos;Serve frontend for production&apos; if it causes you any problems while you are still in development.  Just remeber to uncomment it when you are preparing for deployment.</p>
        <p className="mb-4">Now we need to add a couple of scripts to our package.json file to run our server.</p>
        <img src="../images/blogpost4images/server-scripts.png" alt="Server scripts for the application" className="mb-6 w-1/2 h-42" />
        <p className="mb-4">The &apos;start&apos; script will start the server using node.  The &apos;server&apos; script will start the server using nodemon.  Nodemon is useful during development because it will detect any file changes and automatically 
        restart the server.  Running either script should show something similar to this in the terminal.</p>
        <img src="../images/blogpost4images/server-running.png" alt="Server running in the terminal" className="mb-6 w-1/2 h-42" />
        <p className="mb-4">At this point, it is advisable to test your API endpoints using a program like <a href='https://www.postman.com/' className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>Postman</a> or 
        <a href='https://insomnia.rest/' className="text-blue-600 font-bold" target='_blank' rel='noreferrer'> Insomnia</a>.  Postman has a nice <a href='https://learning.postman.com/docs/getting-started/introduction/' className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>tutorial</a> on their website.
          Note that you will need to include the json webtoken in the authorization when you are testing your endpoints since we set up the routes to be protected.</p>
        <p className="mb-8">And that's it for the backend!  Time to build out the UI.</p>

        <p className="font-bold text-blue-500 text-xl mb-4">Building the Frontend</p>
        <p className="mb-4">For this app, we will be using <a href="https://create-react-app.dev/"className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>Create React App</a>, 
        the <a href="https://redux-toolkit.js.org/"className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>Redux Toolkit</a> and <a href="https://tailwindcss.com/"className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>TailwindCSS</a>.</p>
        <p className="mb-4">To start, head back to the terminal in VSCode and type <code className="bg-gray-200">npx create-react-app frontend --template redux</code>.  This will generate several template files for the app, some of which we will use and 
        some we will delete.  But first things first, we need to install some dependencies.</p>
        <p className="mb-4">Begin by changing into the frontend folder by typing in <code className="bg-gray-200">cd frontend</code>.</p>
        <p className="mb-4">From here you can install the needed dependencies by typing the following:</p>
        <code className="bg-gray-200">npm install axios date-fns react-icons react-router-dom react-toastify tailwindcss</code>
        <p className="mb-4">Next, there are a couple more housekeeping things to do for TailwindCSS.</p>
        <p className="mb-4">In the terminal type <code className="bg-gray-200">npx tailwindcss init</code>.</p>
        <p className="mb-4">This will generate a file called <span className="bg-gray-200 italic">tailwind.config.js</span> that needs to be modified as shown below.</p>
        <img src="../images/blogpost4images/tailwind-config.png" alt="Tailwind configuration file" className="mb-6 w-1/2 h-42" />
        <p className="mb-4">You can also copy and paste this from the TailwindCSS installation page.</p>
        <p className="mb-4">Finally, you need to go in the <span className="bg-gray-200 italic">index.css</span> file that was autogenerated and add the code shown below.  This can also be copied and pasted from the TailwindCSS installation page.</p>
        <img src="../images/blogpost4images/tailwind-css.png" alt="Tailwind index.css file" className="mb-6 w-1/2 h-42" />
        <p className="mb-4">The following screenshot shows the file tree and cleaned up <span className="bg-gray-200 italic">index.html</span> file for the frontend of this project.  Any files not shown can be deleted.  You can ignore the build folder 
        for now.  That will be generated when we are ready to go to production.</p>
        <img src="../images/blogpost4images/frontend-filetree-indexhtml.png" alt="Frontend file tree structure and index.html file" className="mb-6 w-7/8 h-108" />
        <p className="mb-4">Please view the <a href='https://github.com/karicheslock/task-manager-mern-stack' className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>source code</a> if you need to verify any file names.</p>
        <p className="mb-4">The first file we will code will be the <span className="bg-gray-200 italic">setupProxy.js</span> file.  This file will create a proxy for the frontend to communicate with the backend.</p>
        <Gist id='8d58929d7cac92db76d7ec1d53035c33' />
        <p className="mb-4">Next, we need to go back to the <span className="bg-gray-200 italic">package.json</span> file in the root folder of the project and add two more scripts.  Make sure you are adding the scripts to the same <span className="bg-gray-200 italic">package.json</span> file that you modified earlier and not the new one generated by create-react-app.</p>
        <img src="../images/blogpost4images/frontend-scripts.png" alt="Frontend scripts in package.json file" className="mb-6 w-7/8 h-108" />
        <p className="mb-4">Now when we are testing our app in development we can run <code className="bg-gray-200">npm run dev</code> to launch the application.  This will load the frontend while also running the backend using nodemon.</p>
        
        <p className="font-bold text-blue-500 mb-4">The Redux Store</p>
        <p className="mb-4">Our next step is to build the redux store using the redux toolkit.  For those of you who are not familiar with redux, it is a library that allows you to maintain your state globally.  This gives you access to your state across multiple 
        components without having to recreate your state each time.  While it seems like more code at first, it&apos;s actually a way to make your code more portable and reusable.</p>
        <p className="mb-4">For this part of the application, we will focus on the files in the <span className="bg-gray-200 italic">features</span> folder and then we will use those files to build the redux store.</p>
        <p className="mb-4">Note that in the <span className="bg-gray-200 italic">authService.js</span> and <span className="bg-gray-200 italic">taskService.js</span> files, we will be using axios to set up our APIs to communicate with the backend.</p>
        <p className="mb-4">Also note that in the <span className="bg-gray-200 italic">authSlice.js</span> and <span className="bg-gray-200 italic">taskSlice.js</span> files, we will be using the <code className="bg-gray-200">createSlice</code> and <code className="bg-gray-200">createAsyncThunk</code> functions
         to set up our reducers and our asynchronous functions.  These functions are really the heart of the redux tookit because they let you manage and monitor how your state is changing.  The code for these files is shown below.</p>
        <Gist id='b47f3c6219304a21db514add6df122c9' />
        <Gist id='0b16e25591e8f4f03cd20aafb1617fff' />
        <Gist id='4011167a96fb1531d861dea4d153e76d' />
        <Gist id='41f07c7739d8721f612f728cc20c784c' />
        <p className="mb-4">Now we just need to add our reducers to the <span className="bg-gray-200 italic">store.js</span> file in the <span className="bg-gray-200 italic">app</span> folder and our global state will be complete.</p>
        <Gist id='f44799b6a05e289b16840288cbbf223f' />

        <p className="font-bold text-blue-500 mb-4 mt-4">Building the Pages and Components</p>
        <p className="mb-4">We are finally ready to build the pages for our application.  But first, we will set up the routes we will need in the <span className="bg-gray-200">App.js</span> file as shown below.  Note that we will need the task id from the database for the 
        <span className="bg-gray-200 italic">edit-task</span> route.</p>
        <Gist id='1d10495d18c339dcb6a1b2e9baef0c2a' />
        <p className="mb-4">Now we will move on to the <span className="bg-gray-200 italic">components</span> folder, starting with the <span className="bg-gray-200 italic">Spinner.js</span> component.  This is a simple spinner that the user will see any time a page is loading.</p>
        <p className="mb-4">The styling for this component will go in the <span className="bg-gray-200 italic">index.css</span> file.  This will be the only component that will be styled in the <span className="bg-gray-200 italic">index.css</span> file.  The 
        remaining components will be styled using TailwindCSS classes.</p>
        <Gist id='a0818cbcdc4a06105ba346d9f93806a7' />
        <p className="mb-4">And now we just need to import this styling into our spinner component.</p>
        <Gist id='482b0fd32c1cb30ab993f42205631bab' />
        <p className="mb-4">Now we will build the navbar component that will be at the top of each page.  Note that we will be using some React icons to add style to the page.  We will also be using the <code className="bg-gray-200">useSelector</code> and 
        <code className="bg-gray-200">useDispatch</code> functions from the redux toolkit to access our global state and global functions we created.  We will also be using the <code className="bg-gray-200">logout</code> and 
        <code className="bg-gray-200">reset</code> functions from our <span className="bg-gray-200 italic">authSlice.js</span> file.</p>
        <Gist id='fd7241e1d8e14d60e199bb0e9178f1d5' />
        <p className="mb-4">Next we need our three components to create, edit, and display our task items on the dashboard.  The code below will be for the <span className="bg-gray-200 italic">TaskForm.js</span>, <span className="bg-gray-200 italic">EditTaskForm.js</span> and 
        <span className="bg-gray-200 italic">TaskItem.js</span> components.</p>
        <Gist id='4cccc84ad9cc8cacd841dc2deac81ef0' />
        <Gist id='afa80984ae00caf979eb0b86861e381d' />
        <Gist id='5952bef11a29bd18baee07abc8d2be07' />
        <p className="mb-4 mt-4">Finally, we just need our three main pages and we&apos;re done!  The following code is for the <span className="bg-gray-200 italic">Dashboard.js</span>, <span className="bg-gray-200 italic">Register.js</span> and <span className="bg-gray-200 italic">Login.js</span> files.</p>
        <Gist id='35ac4ef7b17801d9e8cdbb4432e019f9' />
        <Gist id='07a268800fc1ec3581a3f0279d2cdfbe' />
        <Gist id='a66a82acbff160900149c86413fc81df' />

        <p className="font-bold text-blue-500 text-xl mb-4">🎉 All Done! 🎉</p>
        <p className="mb-4">And that's it!  You should now be able to run the command <code className="bg-gray-200">npm run dev</code> and see the completed application.  Take a few minutes to celebrate a finished project and then we will deploy to Heroku.</p>
        <p className="font-bold text-blue-500 mb-4">Register Page</p>
        <img src="../images/blogpost4images/register-page.png" alt="App register page" className="mb-4" />
        <p className="font-bold text-blue-500 mb-4">Login Page</p>
        <img src="../images/blogpost4images/login-page.png" alt="App login page" className="mb-4" />
        <p className="font-bold text-blue-500 mb-4">Dashboard</p>
        <img src="../images/taskmanager.png" alt="App dashboard" className="mb-4" />
        <p className="mb-4">Note that the tasks are conditionally rendered based on which checkbox is checked for To Do, Doing, or Done.  However, this is only happening in the frontend and won&apos;t save when the user refreshes the screen.</p>
        <p className="mb-4">A challenge for you will be to add these conditions to the database so that they will save for the user.  Of course, I will be adding this functionality in a future post, but for now, you can try it for yourself.</p>
        <p className="mb-4">Hint:  These will have to be Boolean values.</p>

        <p className="font-bold text-blue-500 text-xl mb-4">Deployment</p>
        <p className="mb-4">There are a few housekeeping things we need to do before we can deploy.</p>
        <p className="mb-4">The first thing we need to do is go to our MongoDB database and change the access to it.</p>
        <p className="mb-4">From your database dashboard page, click on Network Access on the left.  This should take you to a screen that shows your IP address.  Click Edit and then you should see a screen that looks like this.</p>
        <img src="../images/blogpost4images/allow-access.png" alt="MongoDB edit network access popup" className="mb-4" />
        <p className="mb-4">Click <code className="bg-gray-200">ALLOW ACCESS FROM ANYWHERE</code> and confirm the change.</p>
        <p className="mb-4">Next, we need to go back to our <span className="bg-gray-200 italic">.env</span> file and change our <code className="bg-gray-200">NODE_ENV</code> variable to <code className="bg-gray-200">production</code>.</p>
        <p className="mb-4">You also need to uncomment the code to serve the frontend in the <span className="bg-gray-200 italic">server.js</span> file if you commented it out previously.</p>
        <p className="mb-4">Now you need to go to the <a href="https://www.heroku.com/" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>Heroku</a> website and sign up for an account.  It&apos;s free.</p>
        <p className="mb-4">You will also need to download the <a href="https://devcenter.heroku.com/articles/heroku-cli" className="text-blue-600 font-bold" target='_blank' rel='noreferrer'>Heroku CLI</a>.  Note that if you have been using 
        Windows PowerShell, you will need to run Heroku from the command line instead.</p>
        <p className="mb-4">Launch the command line and change into your project&apos;s directory.</p>
        <p className="mb-4">Type <code className="bg-gray-200">heroku login</code>.  This will launch a browser window where you can login to your Heroku account.  After logging in, you can close the browser window and return to the command prompt.  You 
        should see a message that you are logged in.</p>
        <p className="mb-4">Now type <code className="bg-gray-200">heroku create &#60;my-unique-app-name&#62;</code> at the command prompt, replacing the text in angle brackets with your app name.  Do not type the angle brackets.  Note that this name 
        will need to be entirely unique across all website names so you should do something like add your name or a number string to it to ensure uniqueness.</p>
        <p className="mb-4">After the app has been created, go back to your Heroku dashboard, click on your new app name and click on the Settings tab.  From here, you will click on Reveal Config Vars.  This is where we will load our environment variables.</p>
        <p className="mb-4">You only need to add <code className="bg-gray-200">JWT_SECRET</code>, <code className="bg-gray-200">MONGO_URI</code> and <code className="bg-gray-200">NODE_ENV</code> variables.  You do not need to add <code className="bg-gray-200">PORT</code>.</p>
        <img src="../images/blogpost4images/config-vars.png" alt="MongoDB edit network access popup" className="mb-4" />
        <p className="mb-4">Now go to the deploy tab.  Look under the section labelled Deploy Your Changes and look for the line of code that begins <code className="bg-gray-200">$git remote ...</code></p>
        <p className="mb-4">Copy this line of code and go back to your command line, but don&apos;t paste it yet.</p>
        <p className="mb-4">Type <code className="bg-gray-200">git add .</code> including the dot at the end and hit enter.</p>
        <p className="mb-4">Type <code className="bg-gray-200">git commit -m "Production build"</code> or whatever commit message you want and hit enter.</p>
        <p className="mb-4">Now paste the <code className="bg-gray-200">$git remote ...</code> command you got from Heroku and hit enter.</p>
        <p className="mb-4">Now type <code className="bg-gray-200">git push heroku main</code> and hit enter.  If you deployed to master instead of main, type <code className="bg-gray-200">git push heroku master</code> and hit enter.</p>
        <p className="mb-4">Finally, you can type type <code className="bg-gray-200">heroku open</code> to launch your app.</p>

        <p className="font-bold text-blue-500 text-xl mb-4">🎉 Time for Another Celebration! 🎉</p>
        <p className="mb-4">Having a fully deployed application is a huge achievement, and you should be very proud of yourself if you made it this far.  This was a big project with a lot of steps, so if you got it working you should give yourself 
        a huge self high-five ✋👏.</p>

        <p className="mb-5 leading-7">
            So that's it!  I hope you had fun learning the MERN Stack.  Please comment below 👇 or send me a <Link to="/#contact" alt='Send me a message' target='_blank' className="text-blue-500 hover:text-blue-800">message 📨</Link> if you liked what I had to say.  You can also connect with me on
            <a href='https://www.linkedin.com/in/karicheslock/' alt='Kari LinkedIn Profile' className="text-blue-500 hover:text-blue-700"> LinkedIn <LinkedInIcon /></a>.
        </p>

        <p className="mb-5 leading-7">Also, don&apos;t forget to <Link to='/subscribe' className="text-white bg-blue-500 rounded px-2 hover:text-lg" target='_blank'>Subscribe</Link> to this blog to receive future updates!</p>
        
        <p className="mb-5 font-bold text-rose-700">Happy Coding!</p>
        
        <p className="mb-5">Kari</p>
        <hr className="mb-5 border-2 border-gray-400" />

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

export default Blogpost4