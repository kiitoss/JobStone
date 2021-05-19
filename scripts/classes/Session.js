class Session {
  constructor() {
    this.update();
  }

  update() {
    this.default_path = sessionStorage.getItem("jobstone-default-path");
    if (!this.default_path) {
      this.default_path = window.location.href.split("index.html")[0];
      sessionStorage.setItem("jobstone-default-path", this.default_path);
    }
    this.user = JSON.parse(sessionStorage.getItem("jobstone-user"));
  }

  updateUser(user) {
    sessionStorage.setItem("jobstone-user", JSON.stringify(user));
    this.update();
  }
}

const session = new Session();