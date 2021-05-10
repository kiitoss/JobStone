
function account_btn_clicked() {
  if (!session_infos.connected) { return; }

  const index = session_infos.default_path + "pages/account-home.html";
  location.href = index;
}

function logout() {
  sessionStorage.removeItem("jobstone-connected");
  sessionStorage.removeItem("jobstone-user");
  const index = session_infos.default_path + "index.html";
  location.href = index;
}


if (session_infos.user) {
  const icon_account = document.getElementById("profile-icon");
  icon_account.innerHTML = session_infos.user.pseudo[0];
  icon_account.style.backgroundColor = session_infos.user.color;
  icon_account.style.backgroundImage = "none";
  document.getElementById("amount-stars").innerHTML = session_infos.user.money;
}

const ban_user = document.getElementById("ban-user");
if (ban_user && session_infos.user.isAdmin) {
  ban_user.style.display = "flex";
}
