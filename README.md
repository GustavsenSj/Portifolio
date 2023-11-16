# My portfolio site

This is my portfolio site. It's a hobby project to learn more about css animations and other stuff i might find interesting.

## Credits where credits are due

- The animated "blobs" in the background is from @LA_water link to [codepen](https://codepen.io/LA_water/pen/rNaYZBb)
- The pages uses ScollTimline and as most browser does not support this (as of 09/11/23). To display the site correctly use a browser build on chrome 115 or newer.

## How to setup the project on your local machine

The project uses [Firestore](https://console.firebase.google.com/) for storage. To setup the project on your local machine you need to create a file called `firebase.js` in the `src` folder. The file should look like this:

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

You also need to create a `.env` file in the root folder.
All the values you will find in your firebase console project settings.
The file should look like this:

```
VITE_REACT_APP_API_KEY= your api key
VITE_REACT_APP_AUTH_DOMAIN= your auth domain
VITE_REACT_APP_PROJECT_ID= your project id
VITE_REACT_APP_STORAGE_BUCKET= your storage bucket
VITE_REACT_APP_MESSAGING_SENDER_ID= your messaging sender id
VITE_REACT_APP_APP_ID= your app id
VITE_REACT_APP_MEASUREMENT_ID= your measurement id
```
