const sign_in_modal = document.getElementById("sign-in-modal");
const close_modal = document.getElementById("sign-in-modal-close");

function open_sign_in_modal() {
  sign_in_modal.style.display = "block";
}

function close_sign_in_modal() {
  sign_in_modal.style.display = "none";
}

function sign_in_validation(path) {
  close_sign_in_modal();
  localStorage.setItem("jobstone-connected", true);
  location.href = path+"index.html";
}

close_modal.onclick = () => close_sign_in_modal();