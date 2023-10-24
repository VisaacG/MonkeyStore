        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

/*         autenticacion*/

        import { getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"


        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyAIUf2VynH1oMOI5A67lW6ubeJQBWI5Ml8",
          authDomain: "monkeystore3-d1dea.firebaseapp.com",
          projectId: "monkeystore3-d1dea",
          storageBucket: "monkeystore3-d1dea.appspot.com",
          messagingSenderId: "764872434066",
          appId: "1:764872434066:web:a5c4d2ee6a09c5be26214b",
          measurementId: "G-1K9DDNF327"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        export const auth = getAuth(app)