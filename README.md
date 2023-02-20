# Technical task 
This technical task is to make hands dirty with google-maps api for react

## Building Application

The Prerequisite for building and running the App in a Machine are
- Docker (In your local machine)
- .env.local file

### Step-1

Clone the project using following command

```
git clone https://github.com/playhard21/dedrone-task.git
```

### Step-2

Add the .env.local file to the project, This file contains global variables to run the Application. <br>
These global variables are 
- GOOGLE_MAPS_API_KEY
- POSITIONS_API_URL

You can get google-maps api key or create new one by following the [link](https://developers.google.com/maps/documentation/javascript/get-api-key)

Example of the .env.local file

```dotenv
REACT_APP_GOOGLE_MAPS_API_KEY="YOUR-API-KEY"
REACT_APP_POSITIONS_API_URL="https://d407n4zji1.execute-api.eu-central-1.amazonaws.com/api/positions"
```

after creating .env.local file correctly , next step is to build docker image

### Step-3

Build the docker image by running the following command. It builds the docker image with the tag (technical-task)

```docker
docker build . -t technical-task
```

### Step-4

This is the last step run the image, you can run the image by following command.

```docker
docker run -p 4050:3000 -d technical-task
```

Then Click the [URL](http://localhost:4050/), The app should be up and running.