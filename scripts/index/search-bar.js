const input_city = document.getElementById("search-bar-city");
const search_bar_extension_city = document.getElementById("search-bar-extension-city");
const input_category = document.getElementById("search-bar-category");
const search_bar_extension_category = document.getElementById("search-bar-extension-category");

function update_chosen_category(category) {
  const list_categories = Array.from(document.getElementsByClassName("category-item"));
  const list_active_categories = Array.from(document.getElementsByClassName("category-active"));
  list_active_categories.forEach(active_category => active_category.classList.remove("category-active"));

  if (!category) {
    input_category.value = "";
    input_category.subvalue = null;
    search_posts();
    return;
  }

  list_categories.forEach(category_tested => {
    if (category_tested.innerHTML == category.name) {
      category_tested.classList.add("category-active");
    }
  })

  input_category.value = category.name;
  input_category.subvalue = category.id;
  search_posts();
}

function generate_search_bar_extension_city(pc_and_city) {
  const new_li = document.createElement("li");
  new_li.innerHTML = pc_and_city.city + " (" + pc_and_city.postalCode + ")";
  new_li.onmousedown = () => {
    input_city.value = new_li.innerHTML;
    search_posts();
  }
  return new_li;
}

const update_input_city = () => {
  search_bar_extension_city.innerHTML = "";
  const val = input_city.value;
  const all_cities_label = document.createElement("li");
  all_cities_label.innerHTML = "Toutes les villes";
  all_cities_label.onmousedown = () => {
    input_city.value = "";
    search_posts();
  }
  search_bar_extension_city.appendChild(all_cities_label);

  if (!val) {
    RM.getAllCitiesAndPC(pcs_and_city => {
      pcs_and_city.sort((a, b) => {return a.city > b.city ? 1 : a.city < b.city ? -1 : 0}).forEach(pc_and_city => {
        const new_li = generate_search_bar_extension_city(pc_and_city);
        search_bar_extension_city.appendChild(new_li);
      })
    });
    return;
  }

  RM.getAllCitiesAndPCWithValue(val.toString().toLowerCase(), pcs_and_city => {
    pcs_and_city.sort((a, b) => {return a.city > b.city ? 1 : a.city < b.city ? -1 : 0}).forEach(pc_and_city => {
      const new_li = generate_search_bar_extension_city(pc_and_city);
      search_bar_extension_city.appendChild(new_li);
    })
  });
}


function generate_search_bar_extension_category(category) {
  const new_li = document.createElement("li");
  new_li.innerHTML = category.name;
  new_li.onmousedown = () => update_chosen_category(category);
  return new_li;
}

const update_input_category = () => {
  search_bar_extension_category.innerHTML = "";
  const val = input_category.value;
  const all_category = document.createElement("li");
  all_category.innerHTML = "Toutes les catégories";
  all_category.onmousedown = () => update_chosen_category(null);
  search_bar_extension_category.appendChild(all_category);
  
  if (!val) {
    RM.getAllCategories(categories => {
      categories.sort((a, b) => {return a.name > b.name ? 1 : a.name < b.name ? -1 : 0}).forEach(category => {
        const new_li = generate_search_bar_extension_category(category);
        search_bar_extension_category.appendChild(new_li);
      })
    });
    return;
  }

  RM.getAllCategoriesWithValue(val.toLowerCase(), categories => {
    categories.sort((a, b) => {return a.name > b.name ? 1 : a.name < b.name ? -1 : 0}).forEach(category => {
      const new_li = generate_search_bar_extension_category(category);
      search_bar_extension_category.appendChild(new_li);
    })
  });
}