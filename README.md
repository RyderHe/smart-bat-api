# smart-bat-api

Simple note to initialize:

```
npm init -y
npm install express --save
npm install nodemon --save
npm install body-parser
npm install bcrypt-nodejs           // for hashing the password
npm install cors
npm install knex                    // connect database with server
npm install pg                      // postgres
npm install clarifai                // move clarifai api key from front end to back end
```

Create `server.js`:

```
touch server.js
```

Then edit `package.json`:

```json
"scripts": {
    "start": "nodemon server.js"
  },
```

<mark> To compile:</mark>

```
npm install
npm start
```