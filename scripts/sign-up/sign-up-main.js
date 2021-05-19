const RM = new RequestManager();

const incorrect_sign_up = document.getElementById("incorrect-profile-form");

function mail_is_valid(mail) {
  if (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(mail)) {
    return true;
  }
  return false;
}

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

  if (!mail_is_valid(mail)) {
    incorrect_sign_up.innerHTML = "email invalide !";
    incorrect_sign_up.style.display = "block";
    setTimeout(() => { incorrect_sign_up.style.display = "none"; }, 1000);
    return;
  }

  

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
    RM.createNewUser(new User(null, pseudo, mail, "#" + Math.floor(Math.random()*16777215).toString(16), 1000, PC, city, password1), new_user => {
      sessionStorage.setItem("jobstone-user", JSON.stringify(new_user));
      sessionStorage.setItem("jobstone-connected", true);
      location.href = session.default_path + "index.html";
    });
  })
}