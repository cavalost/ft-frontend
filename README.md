# ft-frontend

## Factsheet

| **Category**              | **Value**                                 |
| ------------------------- | ---------------------------------------- |
| **Contact**               | claudina.avalos@opendeusto.es
| **Language / Framework**  | Vue v2
| **Deployment type**       | Github Pages
| **Production URL**     | [https://cavalost.github.io/ft-frontend](https://cavalost.github.io/ft-frontend)|

## Configuration

Configuration is via the following environment variables:

| Env var      | Example      | Purpose                   |
| ------------ | ------------ | ------------------------- |
| `VUE_APP_NAME` | `$npm_package_name` | Public path in Github Pages |
| `VUE_APP_API_SERVER` | `http://localhost:3000`, `https://appclau.herokuapp.com` | URL of the backend |

## Requirements
Node >= 8
```
npm install -g @vue/cli
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run unit tests
```
npm run test:unit
```

### Deploy to Github Pages
Requires access to the repository
```
npm run gh-pages
```

### Project description

The purpose of this project is to search news using the FT API.  

This project is split up in the frontend part built with VueJS and the backend part with a node/express server.  

The main reason to use a backend as the middleman is because the FT API is rejecting any requests from the browser due to the CORS policy.

This project is deployed on Github Pages using the module gh-pages. I tried to to use Github Actions with it for the CI/CD but I leave that option open for the future.  

Furthermore, this project has the following features:
 * Be responsive: Thanks of using Origami Components
 * Be accessible: Users can navigate thought the search panel, news and pages using the tab key.
 * Have pagination: calculates the total number of pages and the current page based on the API response, and its possible to navigate to any page
 * Built using Javascript and node.js: project built with Node/Express and Vue
 * Uses Origami Components: added the script on the index.html and the styles on App
 * Progressively enhanced: using Git and creating a new branch for each feature
 * Deployed on Heroku: see the ft-backend repository
 * Have a similar look and feel as ft.com: thanks once again to the Origami Components
 * Performs well over 3G networks: thanks of using vue cli 3 and the specific components, the bundle has a light weight and loads fast simulating slow 3G networks on the Chrome Dev Tools 

