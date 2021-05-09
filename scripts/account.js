
// const user = JSON.parse(sessionStorage.getItem("jobstone-user"));
function account_btn_clicked() {
  // const connected = sessionStorage.getItem("jobstone-connected");

  if (!session_infos.connected) { return; }

  const index = window.location.href.split("/").slice(0, 3).join("/") + "/pages/account-home.html";
  location.href = index;
}

function logout() {
  sessionStorage.removeItem("jobstone-connected");
  sessionStorage.removeItem("jobstone-user");
  const index = window.location.href.split("/").slice(0, 3).join("/") + "/index.html";
  location.href = index;
}


if (session_infos.user) {
  const icon_account = document.getElementById("profile-icon");
  icon_account.innerHTML = session_infos.user.pseudo[0];
  icon_account.style.backgroundColor = session_infos.user.color;
  icon_account.style.backgroundImage = "none";
}
