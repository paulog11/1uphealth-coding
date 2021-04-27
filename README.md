# 1uphealth-coding
### Welcome to Paulo's solution for the 1Up Health coding challenge.
### To begin, clone this repository and then go to your node package manager app (for mac open terminal and navigate to the cloned repo)
### And run `npm install`. After it completes, navigate to the client/ directory and run `npm install` again. 
### Then, run `npm start` on the root directory, and similarly in the client/ directory. 
### Then open your browser to `localhost:3000` to start the application

## Here is what the page should look like
![alt text] (https://raw.githubusercontent.com/paulog11/1uphealth-coding/develop/Screen%20Shot%202021-04-26%20at%205.01.55%20PM.png)
## And here is what should happen when you click "Get Patients"
![alt text] (https://raw.githubusercontent.com/paulog11/1uphealth-coding/develop/Screen%20Shot%202021-04-26%20at%205.06.56%20PM.png)

### "Get Patients" calls the nodejs backend's endpoint '/api/getAllPatients'
### In the backend server, it runs a query to get patient records from the provided sqlite3 database. Then it returns the data to the client side.
### The database only has 1 entry, for "wilmasmart". The code should be extensible to query any new patients added in. 

#### I initially started this project trying to programatically send requests to fetch data straight from 1Up. I tried using Node's HTTP library to make requests using POST and JSON payload. The documentation I found only seemed to work with curl though, and wouldn't accept JSON, and I tried to then make curl requests through Node. Eventually decided to just store the data that I got to fetch through curl in my mac terminal into a sqlite3 database. 
