const form = document.querySelector(".form");

let name, email, address, phone;

function submitForm() {
  name = form.name.value;
  email = form.email.value;
  address = form.address.value;
  phone = form.phone.value;

  sendRequest({ name, email, address, phone }, 123);
}

function sendRequest(args, api_token) {
  fetch("http://localhost:4200/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: { ...args }, api_token: api_token }),
  }).then(function (response) {
    // return response.json();
  });
}

form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  submitForm();
});
