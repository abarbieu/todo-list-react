# Portfolio Website Front End Interface

The front end of a fully fledged portfolio website built with ReactJS (NodeJS) in Typescript. Includes scripts and components that automatically generate content from photo folders, JSON files, and a back end interface.

### `Websites:`

[abarbieux.com](https://www.abarbieux.com) || [barbieux.dev](https://barbieux.dev) Both currently point to the same source

---
## Contents:

  1. [Related Repos](#Related-Repos)
  2. [Features and Components](#Features-and-Components)
     1. [Tree Menu](#Tree-Menu)
     2. [Photo Gallery](#Photo-Gallery)
     3. [Contact Form](#Contact-Form)
  3. [Additional Info](#additional-info)
     1. [Reference Guides](#Reference-Guides)
     2. [ReactJS](#React-JS)

---

## Related Repos

* #### `Back End:`

  * [portfolio-backend](https://github.com/abarbieu/portfolio-backend) ~ A backend interface hosting RESTful APIs and logging middleware, built with NodeJS, Express, and 

* #### `Production:`

  * [portfolio-production](https://github.com/abarbieu/portfolio-production) ~ Where optimized frontend and backend projects are combined and served with different routes and middleware.

## Features and Components:

* #### [`Dynamically Animated 'Tree Menu':`](#Tree-Menu) 

  * Automatically generates an animated menu system of links, routes, and children based on a provided JSON file
  
* #### [`Full Photo Gallery:`](#Photo-Gallery)

  * Creates a stylized photogallery with dynamically sized layouts, full modal carousel viewer with fullscreen capability. Includes a script to generate a catalog JSON file with automatically shrinked thumbnails and src sets 

---

## Tree Menu
---
#### `Features:`

Generated from a JSON file provided in `project-dir/src/resources/` in the form:

```JSON
[
  {
    "root": {
      "title": "Enter",
      "children": [ "childa", "childb" ]
    }
  },
  {
    "childa": {
      "title": "Child A",
      "background": "https://imgur.com/c1.png",
      "children": [ "childa1" ]
    },
    "childa": {
      "title": "Child B",
      "background": "icons/pic.png",
      "placeholder": "icons/thumbnail.png",
      "children": [ "childb1" ]
    },
  },
  {
    "childa1": {
      "title": "Child A One",
      "background": "pic.png",
      "placeholder": "thumb.png",
      "link": "https://github.com/abarbieu/portfolio-frontend"
    },
    "childb1": {
      "title": "Child B One",
      "background": "icons/postgres.png",
      "placeholder": "icons/postgres_thumb_.png",
      "route": "/childb1-page/
    },
  },
]

```

### `Purpose:`
---
## Photo Gallery
---
### `Features:`

### `Purpose:`
---
---

# Additional info

## Reference Guides

[React Bootstrap docs](https://react-bootstrap.netlify.app/getting-started/introduction/)

[Styled Components](https://styled-components.com/docs)

[Gallery Grid](https://www.npmjs.com/package/react-photo-gallery)

[Image Gallery (Carousel)](https://www.npmjs.com/package/react-image-gallery) 

[Graphics Magick](https://aheckmann.github.io/gm/docs.html)

## React JS

<details>
 <summary>Reactjs details</summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
</details>