const RM = new RequestManager();

function mail_is_valid(mail) {
  if (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(mail)) {
    return true;
  }
  return false;
}

const pseudo = document.getElementById("pseudo");
const mail = document.getElementById("mail");
const PC = document.getElementById("postal-code")
const city = document.getElementById("city");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const incorrect_profile_form = document.getElementById("incorrect-profile-form");


function update_profile_form() {
  const user = session.user;
  pseudo.value = user.pseudo;
  mail.value = user.mail;
  PC.value = user.postalCode;
  city.value = user.city;
}

function update_user(e) {
  if (!pseudo.value || !mail.value || !PC.value || !city.value || !password1.value || !password2.value) {
    return;
  }

  e.preventDefault();

  
  if(!mail_is_valid(mail.value)) {
    incorrect_profile_form.innerHTML = "email invalide !";
    incorrect_profile_form.style.display = "block";
    setTimeout(() => { incorrect_profile_form.style.display = "none"; }, 1000);
    return;
  }

  if (password1.value != password2.value) {
    incorrect_profile_form.innerHTML = "les mots de passes doivent être identiques !";
    incorrect_profile_form.style.display = "block";
    setTimeout(() => { incorrect_profile_form.style.display = "none"; }, 1000);
    return;
  }

  
  const user = new User(session.user.id, pseudo.value, mail.value, session.user.color, session.user.money, PC.value, city.value, password1.value, session.user.isAdmin);
  
  RM.patchUser(user, new_user => {
    
    session.updateUser(new_user);
    location.href = session.default_path + "index.html";
  })
}

update_profile_form();