        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

/*         autenticacion*/

        import { getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"


        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyCJqJkK-VFzYvWn93grYQbnFtG9GFJ1Lxw",
          authDomain: "autenticacion-a64e1.firebaseapp.com",
          projectId: "autenticacion-a64e1",
          storageBucket: "autenticacion-a64e1.appspot.com",
          messagingSenderId: "586630076014",
          appId: "1:586630076014:web:ed5ad2a5e825e2767cf87f"
/*           apiKey: "AIzaSyAg_w8jnvyYLsqoBukBZ5iJECOYuoal7ik",
          authDomain: "autenticacion-fb-45a09.firebaseapp.com",
          projectId: "autenticacion-fb-45a09",
          storageBucket: "autenticacion-fb-45a09.appspot.com",
          messagingSenderId: "1021470919349",
          appId: "1:1021470919349:web:a7a5d70a5556f409864cfc" */
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        export const auth = getAuth(app)