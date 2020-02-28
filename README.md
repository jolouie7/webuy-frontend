## This is the Frontend of Webuy
You will need the Frontend and the Backend in order to make the web app work
[Webuy Backend](https://github.com/jolouie7/webuy-backend)

# Webuy

Webuy is a E-commerce site where you can sell your products to many users.

## Technologies used
Ruby on Rails, PostgreSQL, React, Redux, Stripe API

# Replace with Visuals

## Installation
> Installation assumes that you are using OS X or Linux
> We will also be using homebrew. Recommend to install [Homebrew](https://brew.sh/)
> Installations will be for both frontend and backend

### Backend Installation
Make a new directory, then change into that directory. Within that directory:

Clone the project on your local machine
```bash
git clone git@github.com:jolouie7/webuy-backend.git
```
Change into the webuy-backend directory
```bash
cd webuy-backend
```
Install dependencies by using [bundler](https://bundler.io/guides/rails.html)
```bash
bundle install
```
We will be using postgres as our database for this project. If you haven't please install it, [postgres](https://postgresapp.com/)
- After you finish installing postgres make sure you have it running before proceeding

Create your database, migrate, and seed the data for the database
```bash
rails db:create
rails db:migrate
rails db:seed
```
Start your rails server
```bash
rails s
```

### FrontEnd Installation
Within the direcrory that holds your webuy-backend but not in webuy-backend:

Clone the project on your local machine
```bash
git clone git@github.com:jolouie7/webuy-frontend.git
```
Change into the webuy-frontend directory
```bash
cd webuy-frontend
```
Use the package manager [npm](https://www.npmjs.com/) to install webuy.
```bash
npm install
```
# Make sure the your postgres database is running

Start up a development server
```bash
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Roadmap / Features to add in the future

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
