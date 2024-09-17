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
  
- AIPathBright/
│
├── server/                # FastAPI Backend
│   ├── main.py            # Entry point for FastAPI
│   ├── requirements.txt   # Python dependencies
│   ├── ...                # Other FastAPI related files
│
├── client/                # React Vite Frontend
│   ├── src/               # React source files
│   ├── public/            # Public assets
│   ├── index.html         # Main HTML file
│   ├── package.json       # JavaScript dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── ...                # Other frontend related files
│
└── README.md              # Project documentation


## Project Overview

AIPathBright is designed to [briefly describe the purpose of the project]. The backend is built using FastAPI and the frontend is developed with React Vite.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.7 or higher
- Node.js and npm (or yarn) installed
- Git for version control

## Backend Setup

1. **Navigate to the `server` directory:**

   ```bash
   cd server
   Create and activate a virtual environment (if not already done):
2. Create virtual env
(bash)

python -m venv careerenv
On Windows: careerenv\Scripts\activate

3. Install the Python dependencies:

  (bash)
  pip install -r requirements.txt (to install all dependency with in the activated virtaul env careerenv)
  Run the FastAPI server:
  uvicorn main:app --reload

## FRONT END Setup

