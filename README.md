# Tracker CRM

The Tracker CRM app will focus on lead management with defined steps for each lead's lifecycle. We can assign sales agents to leads and allow users to add comments or updates to each lead.

## Technology Stack

* Styling using Bootstrap
* React Router for routes
* React with useContext
* React with chart.js
* Axios: For making API requests.
* Express & Node for API Repo Link
* MongoDB using mongoose for data storage


## Functionalities

### 1. Lead Management
* List of leads - fetched via ExpressAPI
* Lead detail page
* Search for leads
* Assign or reassign a sales agent
* Add a new comment
* Delete a lead


#### Filters as follows:
- _Status_
- _Search Option across all pages_
- _Sort by Priority, Time to close_


### 2. Agent Management
* List of Agents - fetched via ExpressAPI
* Agent detail page
* Search for agents


### 3. Dashboard
* Combines all of the data to get meaningful insights
* Quick filters based on priority
* Qucik actions like Add a lead or view reports


### 4. Reports

* Used chart.js for creating plots
* Data used to create Pie chart, Bar chart



## Deployed Link

https://tracker-crm.vercel.app/




## Tracker CRM

This project was bootstrapped with Vite.


### Installation Options

You can set up and run this project as below:

#### Clone the Repository

1) Clone this repository to your local machine:

- use git clone 

2) Navigate into the project directory:

- cd [folder]


3) Install dependencies:

- npm install


### Available Scripts

#### npm run dev

- Starts the development server.
- Open http://localhost:5173 to view the app in your browser.
- The page will reload automatically whenever you make edits.

#### npm run build
- Builds the app for production.
- Bundles and optimizes your React app for the best performance.
- Output is placed in the dist folder, ready for deployment.

#### npm run preview
- Serves the production build locally for testing.
- Useful for ensuring the build works as expected.

#### npm run lint
- Runs ESLint to check for code quality and fixable issues.
- Helps maintain clean and consistent code.



##### This README provides clear instructions for users on how to install, run, and understand the project. Let me know if you’d like further customization or additional details!