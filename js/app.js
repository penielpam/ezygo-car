// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
// import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAuth, createUserwithEmail } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBn6a64KmUBaw56f6GRPAine-nmLAYv-wc",
//   authDomain: "ezygo-74d8d.firebaseapp.com",
//   projectId: "ezygo-74d8d",
//   storageBucket: "ezygo-74d8d.appspot.com",
//   messagingSenderId: "135955037263",
//   appId: "1:135955037263:web:88fb74ad32c2a935c43e3a",
//   measurementId: "G-DGM21XS0QX",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


//CoverDetails
// JavaScript to handle form submission and display entered details
document
  .querySelector("#carDetailsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve entered values
    const carName = document.querySelector("#carNameInput").value;
    const carType = document.querySelector("#carTypeSelect").value;
    const carRegNumber = document.querySelector("#carRegNumberInput").value;

    // Store values in local storage
    localStorage.setItem("carName", carName);
    localStorage.setItem("carType", carType);
    localStorage.setItem("carRegNumber", carRegNumber);

    // Redirect to coverdetails.html
    window.location.href = "login.html";
  });

document
    .querySelector(("#registration-form"))
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Redirect to coverdetails.html
      window.location.href = "coverdetails.html";
    });