# WorkoutMERN
Now you can track your exercises and maintain your workout routine with WorkoutMERN.
This is a full stack website built using MERN stack.

## Tech used
- React
- NodeJs and ExpressJs
- Mongodb and Mongoose
- Jwt
- Bcrypt and Validator

## Instructions to use
```
git clone https://github.com/agap-0251/WorkoutMERN.git
cd frontend 
npm i
cd ..\backend
npm i
```
The above commands will install all dependencies. Now, before running the application
create a .env file in backend folder and add the following code to it.

```
PORT = <your port number or just use 3000>
MONGO_URI = mongodb+srv://<user_name>:<password>@<cluster-name>.iwpphli.mongodb.net/?retryWrites=true&w=majority
SECRET = <Your secret code>
```
```
cd backend
npm run dev
cd ..\frontend
npm run dev
```

I'm using Mongodb Atlas to store data , so just add your own connection string.
Also add your own SECRET key which will be used while hashing the password.This website also has user authentication and authorization
using Bcrypt, Jwt, validator.So, have fun...

