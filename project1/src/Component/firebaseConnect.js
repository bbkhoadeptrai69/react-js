import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYnQib8iXsZGk-Zqa3_KJ-4dW_GhVFjTQ",
    authDomain: "project1-kdt.firebaseapp.com",
    databaseURL: "https://project1-kdt.firebaseio.com",
    projectId: "project1-kdt",
    storageBucket: "project1-kdt.appspot.com",
    messagingSenderId: "611651910402",
    appId: "1:611651910402:web:cfeb2ef465a9d27f"
  };
  // Initialize Firebase
  export const firebaseConnect = firebase.initializeApp(firebaseConfig);

  var data = firebase.database().ref("productData");
   
/**
 * GET DATA
 */
// data.once('value').then(function(snapshot) {
//     console.log(snapshot.val());
//   })


/**
* SET DATA
*/

// data.set({
//   id: 1,
//   name: "Oppo F11",
//   price: 7000000,
//   img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-21-200x200.jpg"
// })






