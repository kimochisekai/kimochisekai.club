# WELCOME TO THE KIMOCHI WORLD

> KIMOCHI LIFE

## Build Setup

``` bash
STARTING UP
# clone the repo first
git clone https://github.com/kimochisekai/kimochisekai.club

# CD into the project
cd kimochisekai.club

# install dependencies
npm i

# run dev server
npm run dev

# navigate to the dev build
localhost:8080 in chrome

```

## WHEN YOUR DEPENDENCIES ARE FUCKED
```
# reinstall node modules
rm -rf node_modules && npm i

```

```

EXTRA STUFF
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## DEPLOYMENT
When you're ready to deploy, please follow these steps
```
# Run the deploy command in root of folder
npm run deploy
This creates a new build ready for deployment

FROM THIS STEP ON, YOU CAN USE A GIT CLIENT SUCH AS GITKRAKEN OR SOURCETREE (RECOMMENDED)
# Stage your changes
git add

# Write descriptive commit message
git commit -m "message goes here"

# push
git push

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
