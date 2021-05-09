// const connected = sessionStorage.getItem("jobstone-connected");
// const user = JSON.parse(sessionStorage.getItem("jobstone-user"));

const session_infos = {
  initialized: sessionStorage.getItem("jobstone-initialized"),
  categories: sessionStorage.getItem("jobstone-categories"),
  connected: sessionStorage.getItem("jobstone-connected"),
  user: JSON.parse(sessionStorage.getItem("jobstone-user"))
}