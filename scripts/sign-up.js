const sign_up_validation = document.getElementById("sign-up-validation");
const incorrect_sign_up = document.getElementById("incorrect-profile-form");

function sign_up(e) {
  const pseudo = document.getElementById("pseudo").value;
  const mail = document.getElementById("mail").value;
  const PC = document.getElementById("postal-code").value
  const city = document.getElementById("city").value;
  const password1 = document.getElementById("password-1").value;
  const password2 = document.getElementById("password-2").value;

  if (!pseudo || !mail || !PC || !city || !password1 || !password2) {
    return;
  }

  e.preventDefault();

  if (password1 != password2) {
    incorrect_sign_up.innerHTML = "les mots de passes doivent être identiques !";
    incorrect_sign_up.style.display = "block";
    setTimeout(() => { incorrect_sign_up.style.display = "none"; }, 1000);
    return;
  }

  RM.getUserByPseudo(pseudo, user => {
    if (user) {
      incorrect_sign_up.innerHTML = "le pseudo " + pseudo + " est déjà pris !";
      incorrect_sign_up.style.display = "block";
      setTimeout(() => { incorrect_sign_up.style.display = "none"; }, 1000);
      return;
    }
    RM.createNewUser(new User(null, pseudo, mail, "#" + Math.floor(Math.random()*16777215).toString(16), 1000, 69, PC, city, password1), new_user => {
      sessionStorage.setItem("jobstone-user", JSON.stringify(new_user));
      sessionStorage.setItem("jobstone-connected", true);
      location.href = session_infos.default_path + "index.html";
    });
  })
}

sign_up_validation.onclick = (e) => sign_up(e);