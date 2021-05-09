const dropdown_category = document.getElementById("dropdown-category");

function switch_format_date(date_str) {
  const date_str_split = date_str.split("-");
  return [date_str_split[2], date_str_split[1], date_str_split[0]].join("/");
}

function format_date(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join('/');
}

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

  const post = new Post(null, session_infos.user.id, publication_date, title, category_id, start_date, end_date, postal_code, city, description, price);

  RM.postPost(post, () => {
    location.href = session_infos.default_path + "index.html";
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
document.getElementById("ask-service-validation").onclick = (e) => post_service(e);