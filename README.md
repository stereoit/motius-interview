Overview
========

MEAN Stack Test Project put's together full stack SPA application.

What is included
----------------

 - almost full MEAN stack (I do not know Angular yet, so I did the frontend in React)
 - /api endpoints with full CRUD (`/api/usecases` and `/api/usecase/:usecase_id`)
 - single page application build using React+Webpack
 - dynamic url routing
 - very simple styling using sass
 - some Material design UI elements (first try for me)


 What is not
 -----------

  - handling of Milestones, I would need more time
  - no tests :( I would love to talk about it, use some Mocha+Chai or nightmarejs
  - some code is really awful, I would love to discuss possible improvements
  - no deployment support


Setup and running
-----------------

    $ git clone git@github.com:stereoit/motius-interview.git
    $ cd motius-interview
    $ yarn install # or npm i
    $ bower i
    $ npm run build
    $ docker-compose up
    # in another window run seed the initial data (see bellow)
    $ env PORT=8080 node server.js
    $ google-chrome localhost:8080


Architecture
------------

 Docker runs the full stack, namely mongodb and later our app as well.
 Server part do two things, serves the /api endpoint and serves the /index.html with static files.
 Frontend is Webpack compiled React (I do not know Angular now) + React routing for other urls.
 Stylesheets are SASS compiled with Gulp.


Seeding initial data
--------------------

In order to populate the MongoDB instance, run those two commands once the `docker-compose` is up

    $ docker cp Specification/Usecasedata.json mot-db:/
    $ docker exec mot-db mongoimport  --db test --collection usecases  --type json  --file /Usecasedata.json --jsonArray
