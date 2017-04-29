# About

This is a very basic example project of how to use the 
[Spotify Api](https://developer.spotify.com/web-api/) to search
for information about music and show the results on a 
simple angularjs application.

This web application is hosted on GitHub pages in the 
URL [http://hsebasa.github.io/](http://hsebasa.github.io).
 

## Installing dependences and starting server
 
To __start__ a server and install dependences, you must have a recent
version of [nodejs](https://nodejs.org/es/), go to the project folder and type this:
 
```
npm start
```

 
# General structure of the project

This is the project tree:

```
Project
 |
 +-- app
 |    +-- build
 |    +-- source
 |    |     +-- directives
 |    |     +-- filters
 |    |     +-- scss
 |    |     +-- startPage
 |    |     +-- static
 |    |     +-- templates
 |    |     +-- utils
 |    |     +-- app.js
 |    |     +-- index.html
 |    |
 |    +-- tests
 |
 +-- e2e-tests
 +-- .bowerrc
 +-- bower.json
 +-- gulpfile.js
 +-- index.html
 +-- LICENSE
 +-- package.json
 +-- README.md
 
```

The application is developed in the folder __app/source/__, while
__app/build/__ contains a 'compiled' version of the
source. The _build_ folder is not ignored (it is commited) because
it contains the version deployed to GitHub pages. The __index.html__
contains a simple _Jekyll_ code that redirects to __app/build/__, so 
__app/build/index.html__ can be accessed just typing 
[http://hsebasa.github.io/](http://hsebasa.github.io).

Angular directives and filters are all placed in the folder 
__app/source/directives__ and __app/source/filters__ respectively.
CSS styles are written in [http://sass-lang.com/](http://sass-lang.com/) and
can be found in __app/source/scss__


# Running the tests

Some unitary tests written in [Jasmine](https://jasmine.github.io/)
can be found in __app/tests__. To run them, just type on the prompt:

```
npm test
```
