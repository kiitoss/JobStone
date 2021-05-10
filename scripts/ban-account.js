const list_users = document.getElementById("list-users");
const search_bar = document.getElementById("search-bar-input");
const search_bar_extension = document.getElementById("search-bar-extension-user");

function append_user_to_html(user) {
  const user_div = document.createElement("div");
  user_div.setAttribute("class", "user-div");

  const remove_btn = document.createElement("button");
  remove_btn.setAttribute("class", "remove-btn");
  remove_btn.innerHTML = "Supprimer";
  remove_btn.onclick = () => {
    RM.removeUserById(user.id, () => location.reload());
  }

  const user_pseudo = document.createElement("p");
  user_pseudo.setAttribute("class", "user-pseudo");
  user_pseudo.innerHTML = user.pseudo;

  const admin_btn = document.createElement("button");
  admin_btn.setAttribute("class", "admin-btn");
  admin_btn.innerHTML = user.isAdmin ? "Suppr admin" : "Passer admin";
  admin_btn.onclick = () => {
    user.isAdmin = !user.isAdmin;
    RM.patchUser(user, () => location.reload());
  }

  user_div.appendChild(remove_btn);
  user_div.appendChild(user_pseudo);
  user_div.appendChild(admin_btn);
  list_users.appendChild(user_div);
}

function update_list_users() {
  list_users.innerHTML = "";
  const value = search_bar.value;
  if (!value) {
    RM.getAllUsers(users => {
      users.forEach(user => {
        if (user.id == session_infos.user.id) {return;}
        append_user_to_html(user);
      })
    })
    return;
  }

  RM.getAllUsersWithValue(value.toString(), users => {
    users.forEach(user => {
      if (user.id == session_infos.user.id) {return;}
      append_user_to_html(user);
    })
  })
}


function generate_new_user_extension(user) {
  const new_user = document.createElement("li");
  new_user.innerHTML = user.pseudo;
  new_user.onmousedown = () => {
    search_bar.value = user.pseudo;
    update_list_users();
  }
  search_bar_extension.appendChild(new_user);
}



function update_sarch_bar_extension() {
  search_bar_extension.innerHTML = "";
  const value = search_bar.value;

  const all_users = document.createElement("li");
  all_users.innerHTML = "Tous les utilisateurs";
  all_users.onmousedown = () => {
    search_bar.value = "";
    update_list_users();
  }
  search_bar_extension.appendChild(all_users);

  if (!value) {
    RM.getAllUsers(users => {
      users.forEach(user => {
        if (user.id == session_infos.user.id) {return;}
        generate_new_user_extension(user);
      })
    })
    return;
  }

  RM.getAllUsersWithValue(value.toString(), users => {
    users.forEach(user => {
      if (user.id == session_infos.user.id) {return;}
      generate_new_user_extension(user);
    })
  })
}


update_sarch_bar_extension();
update_list_users();