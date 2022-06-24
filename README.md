# NewImpersonator
Frontend challange

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`
### `npm run dev`

### `docker run -p 3000:3000 newimpersonator_react-node-image`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### build the DDocker image
docker build -t react-node-image .

### check the images
docker images

### run the image
docker run -d -p  3080:3080 --name react-node-ui react-node-image

### check the container
docker ps