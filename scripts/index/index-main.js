const RM = new RequestManager();

const error_modal = document.getElementById("error-modal");
const list_categories = document.getElementById("list-categories");


function ask_service() {
  if (!session.user) {
    error_modal.style.display = "block";
    return;
  }
  location.href = session.default_path + "pages/ask-service.html";
}

function close_error_modal() {
  error_modal.style.display = "none";
}

function generate_new_category_html(category) {
  const new_category = document.createElement("li");
  new_category.setAttribute("class", "category-item");
  new_category.innerHTML = category.name;
  return new_category;
}

function update_all_categories(categories) {
  list_categories.innerHTML = "";
  const all_categories_label = generate_new_category_html({name: "Toutes les catégories"});
  all_categories_label.onclick = () => update_chosen_category(null);
  list_categories.appendChild(all_categories_label);

  categories.forEach(category => {
    const new_category = generate_new_category_html(category);
    new_category.onclick = () => update_chosen_category(category);
    list_categories.appendChild(new_category);
  })
}

function main() {
  RM.getAllCategories(categories => update_all_categories(categories));

  update_all_posts();
}

main();