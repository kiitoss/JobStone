function account_btn_clicked() {
  const connected = localStorage.getItem("jobstone-connected");

  if (!connected) { return; }

  const index = window.location.href.split("/").slice(0, 3).join("/") + "/pages/account-home.html";
  location.href = index;
}

function logout() {
  localStorage.removeItem("jobstone-connected");
  const index = window.location.href.split("/").slice(0, 3).join("/") + "/index.html";
  location.href = index;
}