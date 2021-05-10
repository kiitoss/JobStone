const pseudo = document.getElementById("pseudo");
const mail = document.getElementById("mail");
const PC = document.getElementById("postal-code")
const city = document.getElementById("city");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const profile_form_validation = document.getElementById("account-setting-validation");
const incorrect_profile_form = document.getElementById("incorrect-profile-form");


function update_profile_form() {
  const user = session_infos.user;
  pseudo.value = user.pseudo;
  mail.value = user.mail;
  PC.value = user.postal_code;
  city.value = user.city;
}

function update_user(e) {
  if (!pseudo.value || !mail.value || !PC.value || !city.value || !password1.value || !password2.value) {
    return;
  }

  e.preventDefault();

  if (password1.value != password2.value) {
    incorrect_profile_form.innerHTML = "les mots de passes doivent être identiques !";
    incorrect_profile_form.style.display = "block";
    setTimeout(() => { incorrect_profile_form.style.display = "none"; }, 1000);
    return;
  }

  
  

  const user = new User(session_infos.user.id, pseudo.value, mail.value, session_infos.user.color, session_infos.user.money, PC.value, city.value);
  RM.patchUser(user, new_user => {
    sessionStorage.setItem("jobstone-user", JSON.stringify(new_user));
    sessionStorage.setItem("jobstone-connected", true);
    location.href = session_infos.default_path + "index.html";
  })
}

update_profile_form();

profile_form_validation.onclick = (e) => update_user(e);