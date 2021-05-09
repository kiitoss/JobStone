// const connected = sessionStorage.getItem("jobstone-connected");
// const user = JSON.parse(sessionStorage.getItem("jobstone-user"));
const RM = new RequestManagerLocal();

const session_infos = {
  initialized: sessionStorage.getItem("jobstone-initialized"),
  categories: JSON.parse(sessionStorage.getItem("jobstone-categories")),
  connected: sessionStorage.getItem("jobstone-connected"),
  user: JSON.parse(sessionStorage.getItem("jobstone-user")),
  default_path: sessionStorage.getItem("jobstone-default-path")
}