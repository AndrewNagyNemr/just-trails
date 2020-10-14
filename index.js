const form = document.querySelector(".form");
const btn = document.querySelector("#btn");

let name, email, address, phone;

function submitForm(api_token) {
  name = form.name.value;
  email = form.email.value;
  address = form.address.value;
  phone = form.phone.value;

  sendRequest({ name, email, address, phone }, api_token);
}

function sendRequest(args, api_token) {
  fetch("http://localhost:4200/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    //provide the credentials to get the token
    body: JSON.stringify(),
  }).then((response) => {
    fetch("http://localhost:4200/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { ...args },
        api_token: response.api_token,
      }),
    }).then((response) => {
      // return response.json();
    });
  });
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

btn.addEventListener("click", (e) => {
  submitForm();
});
