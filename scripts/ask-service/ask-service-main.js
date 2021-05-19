const RM = new RequestManager();

const dropdown_category = document.getElementById("dropdown-category");

function post_service(e) {
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
  const publication_date = format_date(new Date());

  const post = {
    idOwner: session.user.id,
    datePublication: publication_date,
    title: title,
    idCategory: category_id,
    startDate: start_date,
    endDate: end_date,
    postalCode: postal_code,
    city: city,
    description: description,
    price: price
  }

  RM.postPost(post, () => {
    location.href = session.default_path + "index.html";
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