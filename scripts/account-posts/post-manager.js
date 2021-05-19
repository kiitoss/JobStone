function validate_edit_post(e) {
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

  const new_post = new Post(post_id, session.user.id, category_id, date_publication, title, start_date, end_date, postal_code, city, description, price);
  RM.patchPost(new_post, () => {
    close_edit_post_modal();
    location.href = session.default_path + "pages/account-posts.html";
  })
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

function remove_post(event, idPost) {
  RM.removePostById(idPost, () => window.location.reload());
  event.stopPropagation();
}