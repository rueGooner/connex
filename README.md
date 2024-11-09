# Connex - Technical Test

A React and Express-based project to display server time, metrics, and time difference in real-time.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
4. [Technologies Used](#technologies-used)
5. [Learning Points](#learning-points)
6. [Challenges and Notes](#challenges-and-notes)

## Overview

This project is a single-page application built with React and Express that displays:
- The current server time in epoch seconds
- The difference between the server time and client time, updating every second
- Metrics fetched from a server endpoint, displayed in a scrollable area

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rueGooner/connex <insert project name or it will default to connex>
   cd <project name>
   ```

2. **Install dependencies:**
    - Install server and client dependencies by running:
      ```bash
      npm install && cd ui && npm install

## Running the Project

1. **Start the server:**
   ```bash
   npm run dev:api
   ```
   This starts the Express server on port 5000 (or a different port if configured).

2. **Start the frontend:**
   ```bash
   npm run dev:ui
   ```
   This starts the React application on port 3000.

You can run the full stack by running:
    ```bash
    npm run dev:all
    ```

The application should now be accessible at `http://localhost:3000`.

## Technologies Used

- **Frontend:** React (with hooks for data fetching and interval management)
- **Backend:** Express (for handling `/time` and `/metrics` endpoints)
- **Testing:** Jest, React Testing Library (pre-installed for the UI)
- **Additional Libraries:** Tailwind CSS (for brevity in styling)

## Learning Points

In working on this project, I had the opportunity to deepen my understanding of:

- **Mocking and Testing**: Used Jest and React Testing Library to mock data fetching and test component behavior. This included dealing with asynchronous updates and timer-based testing.

## Challenges and Notes

- **Development Time**: Completing the project took longer than the 4-hour estimate. Time was spent troubleshooting 
  timer-based tests and ensuring the correct use of `act()` in React Testing Library, which helped make the tests 
  more robust but extended the development process. (I would go as far as to say 4 hours was a low allocation and 
  should be reconsidered. I put it to my juniors the rule of thumb that testing should account for a minimum of 40% 
  of any estimate outside of things they are VERY familiar with.)

- **Choice of Create React App**: While `create-react-app` offers a fast setup for React projects, a minimal setup would have allowed for a more customized configuration and potentially shorter build times. Given more time, I would prefer a tailored React/Webpack setup.

## Future Improvements

- **Optimizations**: Additional error handling and optimization around time synchronization, particularly if working with larger or more complex data sets.
- **Testing Enhancements**: Although tests are in place for the key components, some integration tests could further improve reliability.

## Running Tests

To run the test suite:

```bash
npm test
```

This will run all tests and display results in the terminal. The test suite includes tests for:
- Component rendering and prop handling
- Real-time updates to the time difference
- Cleanup of intervals on component unmounting
