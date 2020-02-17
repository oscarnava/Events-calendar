# 📅 Events calendar :: Frontend

Before following the next instructions, ensure that the API services point to the correct server. You can do that by editing the file ``src/containers/Api.js`` and modify the first line that reads:

````javascript
const SERVER = 'https://events-calendar-morelia.herokuapp.com';
````
and replace it with your API server settings.

You can also customize most of the colors by modifying the file ``src/globals/colors.sass`` before building.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 👩‍🏫 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### 🏁 Deployment

You can just publish the contents of the ``build`` folder after building the app, or you can just use GitHub Pages using this command on the repository root:

````
git subtree push --prefix=frontend/build origin gh-pages
````

For more check: https://facebook.github.io/create-react-app/docs/deployment

## 👤 Author
  ### *Oscar Nava Trujillo*
  - email: [contact@oscarnava.me](mailto:contact@oscarnava.me)
  - Github: [@oscarnava]( https://github.com/oscarnava )
  - Linkedin: [Oscar Nava Trujillo](https://www.linkedin.com/in/oscar-nava-trujillo-15847a14a/)

## ⌛ To-do's
- Possibility to filter the events list to show only the logged user scheduled events.
- Prevent rating the event before it takes place.
- Display a divider between events for different days, to aid the user on locating the day's event.

## 📦 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/oscarnava/Events-calendar/issues).

## 💬 Credits
Design idea by [Ibrahim Shaqura on Behance](https://www.behance.net/ibshaqura)

## 🗝 License
Creative Commons [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
