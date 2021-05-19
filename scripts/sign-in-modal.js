const sign_in_modal = document.getElementById("sign-in-modal");

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
  RM.connect(mail, password,
    (user) => {
      close_sign_in_modal();

      session.updateUser(user);

      const index = session.default_path + "index.html";
      location.href = index;
  }, () => {
    const incorrect_log_in = document.getElementById("incorrect-log-in");
    incorrect_log_in.style.display = "block";
    setTimeout(() => { incorrect_log_in.style.display = "none"; }, 1000);
  })
}