const RM = new RequestManagerLocal();
const user = JSON.parse(localStorage.getItem("jobstone-user"));
const icon_account = document.getElementById("profile-icon");
const appliers_modal = document.getElementById("appliers-modal");
const appliers_close_modal = document.getElementById("appliers-modal-close");
const appliers_container = document.getElementById("appliers-list");
const list_posts = document.getElementById("list-posts");



function append_applier_to_html(applier) {
  const htmlObject = document.createElement("div");
  htmlObject.setAttribute("class", "applier");

  const btn_icon = document.createElement("a");
  btn_icon.setAttribute("class", "icon");
  btn_icon.innerHTML = applier.pseudo[0];
  btn_icon.style.backgroundColor = applier.color;

  const p_name = document.createElement("p");
  p_name.setAttribute("class", "name");
  p_name.innerHTML = applier.pseudo;

  const btn_validate = document.createElement("button");
  btn_validate.setAttribute("class", "validate-applier");
  btn_validate.innerHTML = "Valider";

  htmlObject.appendChild(btn_icon);
  htmlObject.appendChild(p_name);
  htmlObject.appendChild(btn_validate);

  appliers_container.appendChild(htmlObject);
}

function append_all_appliers_to_html() {
  appliers_container.innerHTML = "";
  const user = JSON.parse(localStorage.getItem("jobstone-user"));
  if (!user) { return;}
  RM.getAllPostsByUser(user.id, posts => {
    posts.forEach(post => {
      RM.getAllAppliersByPost(post.id, applies => {
        applies.forEach(apply => {
          RM.getUserById(apply.idUser, applier => {
            append_applier_to_html(applier);
          })
        })
      })
    })
  })
}





function open_appliers_modal() {
  append_all_appliers_to_html();
  appliers_modal.style.display = "block";
}

function close_appliers_modal() {
  appliers_modal.style.display = "none";
}

appliers_close_modal.onclick = () => close_appliers_modal();





const edit_post_modal = document.getElementById("edit-post-modal");
const edit_post_close_modal = document.getElementById("edit-modal-close");

function open_edit_post_modal(event) {
  edit_post_modal.style.display = "block";
  event.stopPropagation();
}

function close_edit_post_modal() {
  edit_post_modal.style.display = "none";
}

edit_post_close_modal.onclick = () => close_edit_post_modal();








function update_all_account_posts() {
  const onclick_edit = (e) => open_edit_post_modal(e);
  const onclick_delete = (e) => console.log(e);

  if (!user) { return;}

  RM.getAllPostsByUser(user.id, posts => {
    posts.forEach(post => {
      RM.getCategoryById(post.idCategory, category => {
        let new_post = new PostHtml(post, user, category, 1, onclick_edit, onclick_delete);
        new_post.htmlObject.onclick = () => open_appliers_modal();
        list_posts.appendChild(new_post.htmlObject);
      })
    })
  })
}

icon_account.innerHTML = user.pseudo[0];
icon_account.style.backgroundColor = user.color;
icon_account.style.backgroundImage = "none";


update_all_account_posts();
