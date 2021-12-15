# ToDo Application
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/baristure/mern-todo/ToDo%20App%20CI)  [![Production: Active](https://img.shields.io/badge/deployment-here-brightgreen)](http://46.101.110.125)   [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
 
ToDo Application written in MERN stack. A user may add a new todo to the todo list, and also user can view all the tasks in the todo list.


## Technologies
###  Development
-- **Backend**
- **Node.js**
-  **Express.js**
- **MongoDB**
- **Jest & Supertest**

-- **Frontend**
-  **React**
- **TailwindCSS**
- **Docker**
 - **React Testing Library & Cypress**
 
-- **Deployment**
-  **Github Actions**
-  **Docker**
- **Nginx**
- **Digital Ocean**

## Quick Start
Clone the project from github
```
$ git clone https://github.com/baristure/mern-todo.git
$ cd mern-todo
```
Server Side
```
$ cd backend/
$ npm install && npm start
```
Client Side
```
$ cd frontend/
$ npm install && npm start
```
## Testing & Tools
-   **Backend**
    
    -   **Mongo-Memory-Server**: Used for mocking database while test process.
    -   **Jest & Supertest**: Used for testing API endpoints
    
    Usage:
    ```
    cd backend/  
    npm run test
    ```
      **Frontend**
    
    -   **Cypress**: Used for  E2E Testing
    -   **React Testing Library(Jest)**: Used for unit testing
    
    Usage:
    ```
    cd frontend/
    npm run test
    npm run cy-run
    ```
-   **CI/CD**
    -   Used  **Github Actions**   to automate test and deployment processes for both sides of application. 
## Deployment 

-   Deployed to a  **DigitalOcean**  cluster.
    
-   Used  **Nginx**,  **Ubuntu**  and  **Docker**
    
-   Implemented  **SSH**  security credentials for cloning of the `docker-compose.yml` to the server.
    
-   Starting application by using  `docker-compose up`  within the server. `containrrr/watchtower` is watching Docker repositories all the time for update.

- Updating Docker repositories with **Github Actions** when tests are passed.
    
-    You can visit the application from  [here](http://46.101.110.125) 🚀🚀🚀