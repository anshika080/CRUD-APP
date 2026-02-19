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

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

/* 🔹 GET EMPLOYEE DATA (PREFILL) */
async function getEditEmployee() {
  try {
    const resp = await fetch(`https://crud-app-grwe.onrender.com/employees/${id}`);
    const data = await resp.json();

    firstNameEle.value = data.firstname;
    middleNameEle.value = data.middlename;
    lastNameEle.value = data.lastname;
    dobEle.value = data.dob;
    emailEle.value = data.email;
    maritalStatusEle.value = data.maritalstatus;
    phoneNoEle.value = data.phoneno;

    streetEle.value = data.address.street;
    cityEle.value = data.address.city;
    stateEle.value = data.address.state;
    countryEle.value = data.address.country;
    zipCodeEle.value = data.address.zipcode;
  } catch (err) {
    console.log(err);
    alert("Unable to load employee ❌");
  }
}

window.addEventListener("DOMContentLoaded", getEditEmployee);

/* 🔹 UPDATE EMPLOYEE */
employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();

  const updatedEmployeeData = {
    firstname: firstNameEle.value.trim(),
    middlename: middleNameEle.value.trim(),
    lastname: lastNameEle.value.trim(),
    dob: dobEle.value,
    email: emailEle.value.trim(),
    maritalstatus: maritalStatusEle.value,
    phoneno: phoneNoEle.value.trim(),
    address: {
      street: streetEle.value.trim(),
      city: cityEle.value.trim(),
      state: stateEle.value.trim(),
      country: countryEle.value.trim(),
      zipcode: zipCodeEle.value.trim(),
    },
  };

  try {
    const resp = await fetch(`https://crud-app-grwe.onrender.com/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployeeData),
    });

    if (!resp.ok) {
      throw new Error("Update failed");
    }

    alert("Employee updated successfully ✅");
    window.location.href = "./AllEmployees.html";
  } catch (err) {
    console.log(err);
    alert("Unable to update ❌");
  }
});
