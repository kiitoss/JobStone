
const user = JSON.parse(localStorage.getItem("jobstone-user"));

function account_btn_clicked() {
  const connected = localStorage.getItem("jobstone-connected");

  if (!connected) { return; }

  const index = window.location.href.split("/").slice(0, 3).join("/") + "/pages/account-home.html";
  location.href = index;
}

function logout() {
  localStorage.removeItem("jobstone-connected");
  localStorage.removeItem("jobstone-user");
  const index = window.location.href.split("/").slice(0, 3).join("/") + "/index.html";
  location.href = index;
}


if (user) {
  const icon_account = document.getElementById("profile-icon");
  icon_account.innerHTML = user.pseudo[0];
  icon_account.style.backgroundColor = user.color;
  icon_account.style.backgroundImage = "none";
}
