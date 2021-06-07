# About this App

This app allows a user to search for a movie title, click on that movie title for more information, and give that movie a thumbs up or thumbs down.

Movie Database API: https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/details

## How to setup and run this App

To run this app, download the project on your local computer and run the following script.

```
$ cd yearone_takehome
$ npm install
```

Create a new file named '.env' under the root directory.

```
$ touch .env
```

Add API Key to .env file. \*You can get the API key by registering with the RapidAPI(link is in About this App section).

```
REACT_APP_API_KEY=YOUR_API_KEY_HERE
```

Create a database named 'yearone' and seed the database.

```
$ createdb yearone
$ npm run seed
```

Start server and access http://localhost:8000/

```
$ npm run start
```

## Features

- User can search movie title and see the result as a list.

  ![search](https://github.com/satomiichii/yearone_takehome/blob/main/public/gifs/search.gif)

- User can switch pages.

  ![switch-page](https://github.com/satomiichii/yearone_takehome/blob/main/public/gifs/switch-page.gif)

- User can see the detail information by clicking the movie title.

  ![singleView](https://github.com/satomiichii/yearone_takehome/blob/main/public/gifs/singleView.gif)

- In the detail page, user can give the movie thums up or thums down and the number of vote are stored in the database.

  ![vote](https://github.com/satomiichii/yearone_takehome/blob/main/public/gifs/vote.gif)

## Technologies

- Javascript
- React
- Redux
- Node.js
- Express.js
- Sequelize
- PostgreSQL
- Material-UI
