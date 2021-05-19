function account_btn_clicked() {
  if (!session.user) {
    open_sign_in_modal();
    return;
  }

  const index = session.default_path + "pages/account-home.html";
  location.href = index;
}

function logout() {
  sessionStorage.removeItem("jobstone-user");
  const index = session.default_path + "index.html";
  location.href = index;
}


if (session.user) {
  const icon_account = document.getElementById("profile-icon");
  icon_account.innerHTML = session.user.pseudo[0];
  icon_account.style.backgroundColor = session.user.color;
  icon_account.style.backgroundImage = "none";
  document.getElementById("amount-stars").innerHTML = session.user.money;
}


const admin_page_link = document.getElementById("admin-page");
if (admin_page_link && parseInt(session.user.isAdmin) == 1) {
  admin_page_link.style.display = "flex";
}
