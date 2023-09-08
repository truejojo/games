<script>
// Innerhalb deiner Login-Komponente
// methods: {
//   async loginUser() {
//     try {
//       // Hier authentifizierst du den Benutzer mit Firebase
//       await firebase.auth().signInWithEmailAndPassword(this.email, this.password);

//       // Erfolgreiche Anmeldung, weiterleiten oder andere Aktionen ausführen
//       this.$router.push('/dashboard'); // Beispiel: Weiterleitung zum Dashboard

//     } catch (error) {
//       let errorMessage;

//       switch (error.code) {
//         case 'auth/user-not-found':
//           errorMessage = 'Benutzer nicht gefunden';
//           break;
//         case 'auth/invalid-email':
//           errorMessage = 'Ungültige E-Mail-Adresse';
//           break;
//         // Füge weitere Fehlerfälle hinzu, falls erforderlich
//         default:
//           errorMessage = 'Unbekannter Fehler';
//       }

//       // Hier kannst du die Fehlermeldung anzeigen oder auf andere Weise darauf reagieren
//       this.showError(errorMessage);
//     }
//   },

//   showError(message) {
//     // Zeige die Fehlermeldung auf der Login-Seite an, z.B. mit einer Toast-Nachricht oder einer Fehlermeldung im Formular
//     this.errorMessage = message;
//   }
// }


// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   setPersistence,
//   browserLocalPersistence,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "@/config";

// export default {
//   name: "InfoPage",
//   data() {
//     return {
//       user: "",
//       email: "",
//       password: "",
//     };
//   },
//   methods: {
//     register() {
//       createUserWithEmailAndPassword(auth, this.email, this.password)
//         .then((userCredential) => {
//           // const user = userCredential.user;
//           console.log(user);
//         })
//         .catch((error) => {});
//     },
//     login() {
//       const ref = this;
//       setPersistence(auth, browserLocalPersistence)
//         .then(() => {
//           signInWithEmailAndPassword(auth, ref.email, ref.password);
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//         });
//     },
//     logout() {
//       const ref = this;
//       signOut(auth)
//         .then(() => {
//           ref.user = "";
//         })
//         .catch(error => {

//         })
//     },
//   },
//   mounted() {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log(`user: ${user}`);
//         this.user = user.email;
//         const uid = user.uid;
//         // ...
//       } else {
//         // User is signed out
//         // ...
//       }
//     });
//   },
// };
</script>

<template>
<h2>Info</h2>
  <!-- <div class="row">
    <div class="col-8 offset-2">
      <h1 class="display-1 py-3">Firebase Auth</h1>
      <h2>User: {{ user }}</h2>
      <form class="form-group">
        <label class="fs-2" for="email">Email:</label>
        <input
          class="form-control"
          type="email"
          id="email"
          v-model="email"
        /><br />
        <label class="fs-2" for="password">Password:</label>
        <input
          class="form-control"
          type="password"
          id="password"
          v-model="password"
        /><br />
        <div class="mt-4">
          <button type="submit" class="btn btn-success me-2">login</button>
          <button type="submit" class="btn btn-info" @click.prevent="register">
            register
          </button>
        </div>
      </form>
      <button class="btn btn-danger mt-3" @click.prevent="logout">
        logout
      </button>
    </div>
  </div> -->
</template>
