# smart-bat-api

Simple note to initialize:

```
npm init -y
npm install express --save
npm install nodemon --save
npm install body-parser
npm install knex
npm install pg
```

Note:

- `knex.js`: connect database to server


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
