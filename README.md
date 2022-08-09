# Rick and Morty Wiki 👽🧪

This project is a Rick and Morty character WiKi.\
The application consists of a listing of all the characters, episodes and locations from the series, as well as a details page for each character, including information about the character, and a list of the episodes it has appeared in.\
The app consumes the [Rick and Morty REST API](https://rickandmortyapi.com/).

The app was created with the use of:

- [React](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org/)
- [React-Router](https://reactrouter.com/)
- [React-Paginate](https://www.npmjs.com/package/react-paginate)
- [Bootstrap](https://getbootstrap.com/)
- [FontAwsome](https://fontawesome.com/)
- [Lottie Files](https://lottiefiles.com/)


The App has [`built in funcionallity`](src/hooks/useDarkModePrefrences.js) to decide based on the machine prefrences if to display dark mode or light mode, and to preserve it.
If changed manually, it will ignore the machine prefrences.

The App has the [`funcionallity`](src/hooks/useScrollCache.js) to cache scrolling location per page, and scroll back to the last location when when returning to it.
* clicking on the navigation`s links will reset all cache. 

## Screen Shots 💻

Here are a few screen shots and videos from the app:

[App Preview.webm](https://user-images.githubusercontent.com/97041347/183472003-97ced014-8111-452e-94ae-b85d22ebe7da.webm)

![rick-and-morty-wikipedia netlify app_ (2)](https://user-images.githubusercontent.com/97041347/183468690-9306ca65-5c66-48a4-ba07-1ade509167c1.png)
![rick-and-morty-wikipedia netlify app_ (3)](https://user-images.githubusercontent.com/97041347/183468694-959535b0-12a4-45ad-abdc-7b6e51c27958.png)
![rick-and-morty-wikipedia netlify app_ (4)](https://user-images.githubusercontent.com/97041347/183468697-83b2157e-6b08-40ce-836c-accfea3b65bd.png)
![rick-and-morty-wikipedia netlify app_location_77_d](https://user-images.githubusercontent.com/97041347/183468670-82cc6dbe-5d2e-4edc-b47c-f9da3ecf3635.png)

## Light Mode & Dark Mode 🌗

[Light-Dark Mode.webm](https://user-images.githubusercontent.com/97041347/183472454-1f14de10-3412-45ad-b9b7-561c4efd8591.webm)

## How to run ▶️

The app is live on: [Rick and Morty Wiki](https://rick-and-morty-wikipedia.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.


