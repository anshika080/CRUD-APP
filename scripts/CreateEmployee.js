const employeeFormEle = document.getElementById("registration-form");
const firstNameEle = document.getElementById("first-name");
const middleNameEle = document.getElementById("middle-name");
const lastNameEle = document.getElementById("last-name");
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalStatusEle = document.getElementById("marital-status");
const phoneNoEle = document.getElementById("mobile");
const streetEle = document.getElementById("street-address");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipCodeEle = document.getElementById("zipcode");

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  let employeeData = {
    firstname: firstNameEle.value.trim(),
    middlename: middleNameEle.value.trim(),
    lastname: lastNameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalstatus: maritalStatusEle.value.trim(),
    phoneno: phoneNoEle.value.trim(),
    address: {
      street: streetEle.value.trim(),
      city: cityEle.value.trim(),
      country: countryEle.value.trim(),
      state: stateEle.value.trim(),
      zipcode: zipCodeEle.value.trim(),
    },
  };

  try {
    let resp = await fetch("http://localhost:5000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });
    console.log(resp);

    //NAVIGATION
    window.location.href = "./Allemployees.html";
  } 
  
  catch (err) {
    console.log(err); 
    alert("Something went wrong!");
  }
});
