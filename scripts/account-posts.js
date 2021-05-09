// const RM = new RequestManagerLocal();
const dropdown_category = document.getElementById("dropdown-category");
const icon_account = document.getElementById("profile-icon");
const appliers_modal = document.getElementById("appliers-modal");
const appliers_close_modal = document.getElementById("appliers-modal-close");
const appliers_container = document.getElementById("appliers-list");
const list_posts = document.getElementById("list-posts");



function append_applier_to_html(applier, price) {
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
  btn_validate.onclick = () => {
    if (session_infos.user.money < price) {
      document.getElementById("alert-msg").innerHTML = "Vous n'avez que " + session_infos.user.money + " étoile. Il vous en faut plus pour valider le service.";
      document.getElementById("alert-modal").style.display = "block";
      close_appliers_modal();
      return;
    }
    
    RM.getUserById(applier.id, user_accepted => {
      user_accepted.money += price;
      RM.patchUser(user_accepted, () => {
        session_infos.user.money -= price;
        RM.patchUser(session_infos.user, () => {
          sessionStorage.setItem("jobstone-user", JSON.stringify(session_infos.user));
          close_appliers_modal();
          window.location.reload();
        })
      });
    })
  }

  htmlObject.appendChild(btn_icon);
  htmlObject.appendChild(p_name);
  htmlObject.appendChild(btn_validate);

  appliers_container.appendChild(htmlObject);
}

function append_all_appliers_to_html() {
  appliers_container.innerHTML = "";
  if (!session_infos.user) { return;}
  RM.getAllPostsByUser(session_infos.user.id, posts => {
    posts.forEach(post => {
      RM.getAllAppliersByPost(post.id, applies => {
        applies.forEach(apply => {
          RM.getUserById(apply.idUser, applier => {
            append_applier_to_html(applier, post.price);
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

function switch_format_date(date_str, splitter, joiner) {
  const date_str_split = date_str.split(splitter);
  return [date_str_split[2], date_str_split[1], date_str_split[0]].join(joiner);
}

function update_edit_modal(post) {
  const dropdown = document.getElementById("dropdown-category");
  
  document.getElementById("title-service").value = post.title;

  Array.from(dropdown.options).forEach(option => {
    if (option.id.split("-")[2] == post.idCategory.toString()) {
      dropdown.selectedIndex = parseInt(option.id.split("-")[2])-1;
      return;
    }
  })

  document.getElementById("start-date").value = switch_format_date(post.startDate, "/", "-");
  document.getElementById("end-date").value = switch_format_date(post.endDate, "/", "-");
  document.getElementById("postal-code").value = post.postalCode;
  document.getElementById("city").value = post.city;
  document.getElementById("price").value = post.price;
  document.getElementById("description").value = post.description;
}


function open_edit_post_modal(event, post) {
  edit_post_modal.postId = post.id;
  edit_post_modal.postDatePublication = post.datePublication;
  update_edit_modal(post);
  edit_post_modal.style.display = "block";
  event.stopPropagation();
}

function close_edit_post_modal() {
  edit_post_modal.style.display = "none";
}

edit_post_close_modal.onclick = () => close_edit_post_modal();


function remove_post(event, idPost) {
  RM.removePostById(idPost, () => window.location.reload());
  event.stopPropagation();
}






function update_all_account_posts() {
  const onclick_edit = (e, post) => open_edit_post_modal(e, post);
  const onclick_delete = (e, idPost) => remove_post(e, idPost);

  if (!session_infos.user) { return;}

  RM.getAllPostsByUser(session_infos.user.id, posts => {
    posts.forEach(post => {
      RM.getCategoryById(post.idCategory, category => {
        let new_post = new PostHtml(post, session_infos.user, category, 1, onclick_edit, onclick_delete);
        new_post.htmlObject.onclick = () => open_appliers_modal();
        list_posts.appendChild(new_post.htmlObject);
      })
    })
  })
}


const validate_edit_post = (e) => {
  const post_id = edit_post_modal.postId;
  const date_publication = edit_post_modal.postDatePublication;
  
  const title = document.getElementById("title-service").value;

  const dropdown = document.getElementById("dropdown-category");
  const dropdown_select_id = dropdown.options[dropdown.selectedIndex].id.split("-");
  const category_id = dropdown_select_id[dropdown_select_id.length - 1];

  const start_date_english = document.getElementById("start-date").value;
  const end_date_english = document.getElementById("end-date").value;

  const postal_code = document.getElementById("postal-code").value;
  const city = document.getElementById("city").value;

  const description = document.getElementById("description").value;

  const price = document.getElementById("price").value;

  if (!title || !category_id || !start_date_english || !end_date_english || !postal_code || !city || !description || !price) {
    return;
  }

  e.preventDefault();

  const start_date = switch_format_date(start_date_english);
  const end_date = switch_format_date(end_date_english);

  const new_post = new Post(post_id, session_infos.user.id, date_publication, title, category_id, start_date, end_date, postal_code, city, description, price);

  RM.patchPost(new_post, () => {
    close_edit_post_modal();
    location.href = session_infos.default_path + "pages/account-posts.html";
  })
}

function update_dropdown_category() {
  session_infos.categories.forEach(category => {
    const new_option = document.createElement("option");
    new_option.setAttribute("id", "dropdown-category-"+category.id);
    new_option.innerHTML = category.name;
    dropdown_category.appendChild(new_option);
  })
}





update_dropdown_category();


icon_account.innerHTML = session_infos.user.pseudo[0];
icon_account.style.backgroundColor = session_infos.user.color;
icon_account.style.backgroundImage = "none";

document.getElementById("edit-post-validation").onclick = validate_edit_post;

update_all_account_posts();


function close_alert_modal() {
  document.getElementById("alert-modal").style.display = "none";
}