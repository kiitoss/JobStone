const sign_in_modal = document.getElementById("sign-in-modal");
const close_modal = document.getElementById("sign-in-modal-close");
const sign_in_modal_validation = document.getElementById("sign-in-modal-validation");

function open_sign_in_modal() {
  sign_in_modal.style.display = "block";
}

function close_sign_in_modal() {
  sign_in_modal.style.display = "none";
}

function sign_in_validation(e) {
  const mail = document.getElementById("input-mail").value;
  const password = document.getElementById("input-password").value;

  
  if (!mail || !password) { return; }

  e.preventDefault();

  RM.connect(mail, password, user => {
    if (!user) {
      const incorrect_log_in = document.getElementById("incorrect-log-in");
      incorrect_log_in.style.display = "block";
      setTimeout(() => { incorrect_log_in.style.display = "none"; }, 1000);
      return;
    }

    close_sign_in_modal();

    sessionStorage.setItem("jobstone-user", JSON.stringify(user));
    sessionStorage.setItem("jobstone-connected", true);

    const index = session_infos.default_path + "index.html";
    location.href = index;
  })
}

close_modal.onclick = () => close_sign_in_modal();

sign_in_modal_validation.onclick = (e) => sign_in_validation(e);