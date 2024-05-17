OpenAI Streaming Data Frontend Example

Overview
This example application demonstrates handling a continuous stream of data from OpenAI on the frontend. It showcases how streamed data can dynamically populate multiple fields within a React component. Users can enter a destination in a text box, hit the "Retrieve Neighborhood Suggestions" button, and observe neighborhood recommendations dynamically populating the component.

Features
Continuous Data Streaming: Utilizes OpenAI's API to continuously stream data.
Dynamic UI Updates: Updates the UI dynamically as data streams in from the backend.
User Interaction: Allows users to interact with the data by hovering over items, enhancing user engagement.

Prerequisites
Before you start, make sure you have:
A Vercel account
An OpenAI API Key

Deploying to Vercel
Step 1: Clone the Repository
Before importing your project into Vercel, you need to clone the repository to your local machine. This will allow you to make any necessary changes or to simply proceed with deployment directly through Vercel.

git clone https://github.com/gvfullstack/open-ai-multi-field-component-stream.git
cd open-ai-multi-field-component-stream

Step 2: Import Your Project to Vercel
After cloning the repository, you can import it to Vercel for deployment:

Log in to your Vercel Dashboard.
Click on "New Project".
Click on "Import Project".
Choose to import the project from GitHub by selecting your repository from the provided list. If you haven't connected your GitHub account yet, you will be prompted to do so.
Step 3: Configure Environment Variables
Set up the required environment variables in your Vercel project settings:

Navigate to your project on the Vercel dashboard.
Go to the "Settings" tab.
Scroll down to the "Environment Variables" section.
Add the following environment variables as needed:
OPENAI_API_KEY: Your OpenAI API key.
NEXT_PUBLIC_BASE_URL: The base URL of your deployment (this will be provided by Vercel after your project is deployed).  For the development environment this should be set to http://localhost:3000/. Ensure to prefix with NEXT_PUBLIC_ to ensure next.js is able to expose this environment variable to the front end. 
Step 4: Deploy Your Project
Vercel automatically deploys your project when you push changes to the linked repository. For the initial deployment, Vercel will start the process immediately after you import your project.

You can check the status of your deployment and access the deployment URL directly from your Vercel dashboard.

Running the Application
After deployment, Vercel provides a URL to access your live application. Navigate to this URL in a web browser to interact with the application.

Local Development
For local development, you'll need to use the Vercel CLI to emulate the Vercel environment on your local machine. This setup allows you to develop and test features that rely on Vercel's cloud capabilities, such as Edge Functions, directly on your computer.

Setting Up
Install the Vercel CLI:
Install the Vercel CLI globally using npm. This tool is necessary to create a local development environment that closely resembles the Vercel deployment environment.

npm install -g vercel
Start the Development Server:
Navigate to your project directory in the terminal, and run the following command:

vercel dev
This command runs your application locally by starting a development server that emulates the Vercel environment.

Accessing Your Application
After running vercel dev, your application will be accessible through a web browser at a URL, typically http://localhost:3000. You can interact with your application as if it were deployed on Vercel, but any changes and testing are confined to your local machine.

Using the Application
Enter a Destination: Type a destination into the input box.
Retrieve Suggestions: Click the "generate neighborhood suggestions" button.
Result
Behavior: The data stream returned from the server will populate one field at a time on the user interface. This method enhances responsiveness by displaying the component initially with no data, then gradually filling in each field as the data becomes available.
User Experience: This approach provides a more fluid user experience compared to waiting for an entire JSON file to be processed and displayed all at once. By populating fields incrementally, the application minimizes user wait times and avoids the latency often associated with loading complete datasets simultaneously. Each field is updated independently as soon as its respective data is ready, ensuring that the interface remains dynamic and responsive.

Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests or suggest enhancements through issues.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Additional Notes:
Vercel CLI: This README assumes the use of the Vercel CLI for local development. Make sure to install it globally as part of the development prerequisites.
Security: Ensure your OPENAI_API_KEY is never hard-coded or checked into version control. Always use environment variables to manage sensitive information securely.