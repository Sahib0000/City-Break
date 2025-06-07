# CityBreak Client

A React-based web application for exploring city break activities, pub crawls, and hotels.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or later recommended)
- npm (comes with Node.js)

## Getting Started

Follow these steps to get the website running on your local machine:

### 1. Clone the repository

```bash
git clone <repository-url>
cd school-project
```

### 2. Install dependencies

```bash
npm install
```

This will install all the required dependencies listed in the package.json file, including:
- React
- React DOM
- React Router DOM
- React Scripts

### 3. Start the development server

```bash
npm start
```

This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload if you make changes to the code. You will also see any lint errors in the console.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Features

The website includes the following pages:
- **Home**: Main landing page
- **Login/Register**: User authentication
- **PubCrawl**: Information about pub crawls
- **Activity**: Various activities available in the city
- **Hotel**: Hotel listings and information

## Project Structure

- `src/components`: Reusable UI components
- `src/pages`: Individual page components
- `src/images`: Image assets
- `src/styles`: CSS stylesheets
