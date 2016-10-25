MSTP
====


MEAN Stack Test Project put's together full stack SPA application.


Setup and running
-----------------

     $ git clone git@github.com:stereoit/motius-interview.git
     $ cd motius-interview
     $ docker-compose up # in another window run seed the initial data (see bellow)
     $ curl localhost:8080/api/usecases


Architecture
------------

 Docker runs the full stack, namely mongodb and later our app as well.
 Server part do two things, serves the /api endpoint and serves the /index.html with static files.
 Frontend is Webpack compiled React (I do not know Angular now) + React routing for other urls.
 Stylesheets are SASS compiled with Gulp.


How I think I will do it
------------------------

  - setup mongdb and import data
  - create server.js using expressjs and serve the /api endpoints
  - add very simple index.html and serve that with express including style Stylesheets
  - create frontend application with React, compile it with webpack/rollup
  - run :)


Seeding initial data
--------------------

In order to populate the MongoDB instance, run those two commands

    $ docker cp Specification/Usecasedata.json mot-db:/
    $ docker exec mot-db mongoimport  --db test --collection usecases  --type json  --file /Usecasedata.json --jsonArray
