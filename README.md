# AIPathBright

AIPathBright is a project that includes a FastAPI backend and a React Vite frontend. This README provides instructions for setting up and running both parts of the application.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)
  

## Project Overview

AIPathBright is designed to [briefly describe the purpose of the project]. The backend is built using FastAPI and the frontend is developed with React Vite.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.7 or higher
- Node.js and npm (or yarn) installed
- Git for version control

## Backend Setup

1. **Navigate to the `server` directory:**

   (bash-commands)
   cd server
   Create and activate a virtual environment (if not already done):
2. Create virtual env
    (bash-commands)
    
    python -m venv careerenv
    On Windows: careerenv\Scripts\activate

3. Install the Python dependencies:

  (bash-commands)
  pip install -r requirements.txt (to install all dependency with in the activated virtaul env careerenv)
  Run the FastAPI server:
  uvicorn main:app --reload

## FRONT END Setup
1. Navigate to the client directory:
  cd client
2. Install dependency for React-vite
  npm install
3. Run code
  npm run dev

# Contributing
Steps to contribute:

1. Fork the repository.
2. Create a feature branch (git checkout -b feature-branch).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a pull request.
