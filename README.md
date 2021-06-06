# About this App

This app allows a user to search for a movie title, click on that movie title for more information, and give that movie a thumbs up or thumbs down.

Movie Database API: https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/details

## How to setup and run this App

To run this app, download the project on your local computer and run the following script.

```
$ cd project_name
$ npm install
```

Create a new file named '.env' under the root directory.

```
$ touch .env
```

Add API Key to .env file. \*You can get the API key by registering with the RapidAPI(link is in About this App section)

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

- User can search movie title and see the list of the titles that includes the user input

  ![search](https://github.com/satomiichii/yearone_takehome/blob/main/gifs/search.gif)

- User can switch pages

  ![switch-page](https://github.com/satomiichii/yearone_takehome/blob/main/gifs/switch-page.gif)

- User can see the detail information about a movie by clicking the list title on the list page

  ![singleView](https://github.com/satomiichii/yearone_takehome/blob/main/gifs/singleView.gif)

- In detail page, user can give thums up or thums down and the number of vote are stored in the database

  ![vote](https://github.com/satomiichii/yearone_takehome/blob/main/gifs/vote.gif)
