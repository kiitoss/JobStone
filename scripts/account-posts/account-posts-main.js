const RM = new RequestManager();
const dropdown_category = document.getElementById("dropdown-category");
const icon_account = document.getElementById("profile-icon");
const list_posts = document.getElementById("list-posts");
const edit_post_modal = document.getElementById("edit-post-modal");

function open_appliers_modal(idPost) {
  append_all_appliers_to_html(idPost);
  appliers_modal.style.display = "block";
}

function close_appliers_modal() {
  appliers_modal.style.display = "none";
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

function close_alert_modal() {
  document.getElementById("alert-modal").style.display = "none";
}


function update_all_account_posts() {
  const onclick_edit = (e, post) => open_edit_post_modal(e, post);
  const onclick_delete = (e, idPost) => remove_post(e, idPost);

  RM.getAllPostsByUser(session.user.id, posts => {
    posts.forEach(post => {
      RM.getCategoryById(post.idCategory, category => {
        let new_post = new PostHtml(post, session.user, category, onclick_delete, 1, onclick_edit);
        new_post.htmlObject.onclick = () => open_appliers_modal(post.id);
        list_posts.appendChild(new_post.htmlObject);
      })
    })
  })
}

function update_dropdown_category() {
  RM.getAllCategories(categories => {
    categories.forEach(category => {
      const new_option = document.createElement("option");
      new_option.setAttribute("id", "dropdown-category-"+category.id);
      new_option.innerHTML = category.name;
      dropdown_category.appendChild(new_option);
    })
  }) 
}

update_dropdown_category();
update_all_account_posts();
