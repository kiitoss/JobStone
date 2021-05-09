const RM = new RequestManagerLocal();
const list_posts = document.getElementById("list-posts");
const input_city = document.getElementById("search-bar-city");
const search_bar_extension_city = document.getElementById("search-bar-extension-city");
const input_category = document.getElementById("search-bar-category");
const search_bar_extension_category = document.getElementById("search-bar-extension-category");
const ask_service_modal = document.getElementById("ask-service-modal");
// function show_all_users() {
//   RM.getAllUsers(users => {
//     users.forEach(user => {
//       console.log(user);
//     })
//   })
// }

// function show_all_categories() {
//   RM.getAllCategories(categories => {
//     categories.forEach(category => {
//       console.log(category);
//     })
//   })
// }

// function show_all_posts() {
//   RM.getAllPosts(posts => {
//     posts.forEach(post => {
//       console.log(post);
//     })
//   })
// }

// show_all_users();
// show_all_categories();
// show_all_posts();

function ask_service() {
  if (!session_infos.connected) {
    ask_service_modal.style.display = "block";
    return;
  }

  location.href = "pages/ask-service.html";
}

function close_ask_service_modal() {
  ask_service_modal.style.display = "none";
}

function update_all_posts() {
  list_posts.innerHTML = "";
  RM.getAllPosts(posts => {
    posts.forEach(post => {
      RM.getUserById(post.idOwner, owner => {
        RM.getCategoryById(post.idCategory, category => {
          list_posts.appendChild(new PostHtml(post, owner, category, 0).htmlObject);
        })
      })
    })
  })
}

function update_all_posts_with_category(idCategory) {
  list_posts.innerHTML = "";
  RM.getCategoryById(idCategory, category => {
    RM.getAllPostsByCategory(idCategory, posts => {
      posts.forEach(post => {
        RM.getUserById(post.idOwner, owner => {
          list_posts.appendChild(new PostHtml(post, owner, category, 0).htmlObject);
        })
      })
    })
  })
}

function update_all_posts_with_city(value_and_city) {
  list_posts.innerHTML = "";
  console.log(value_and_city);
  RM.getAllPostsByCity(value_and_city, posts => {
    posts.forEach(post => {
      console.log(post);
      RM.getUserById(post.idOwner, owner => {
        RM.getCategoryById(post.idCategory, category => {
          list_posts.appendChild(new PostHtml(post, owner, category, 0).htmlObject);
        })
      })
    })
  })
}

function generate_new_category_html(category) {
  const new_category = document.createElement("li");
  new_category.setAttribute("class", "category-item");
  new_category.innerHTML = category.name;
  return new_category;
}

function update_all_categories(categories) {
  const list_categories = document.getElementById("list-categories");
  list_categories.innerHTML = "";
  const all_categories = generate_new_category_html({name: "Toutes les catégories"});
  all_categories.onclick = () => update_chosen_category(null);
  list_categories.appendChild(all_categories);

  categories.forEach(category => {
    const new_category = generate_new_category_html(category);
    new_category.onclick = () => update_chosen_category(category);
    list_categories.appendChild(new_category);
  })
}

function update_chosen_category(category) {
  const list_categories = Array.from(document.getElementsByClassName("category-item"));
  const list_active_categories = Array.from(document.getElementsByClassName("category-active"));
  list_active_categories.forEach(cat => console.log(cat.innerHTML));
  list_active_categories.forEach(active_category => {
    active_category.classList.remove("category-active");
  });

  if (category == null) {
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

function search_posts() {
  const idCategory = input_category.subvalue;
  const city = input_city.value.split(" ")[0].toLowerCase();
  const pc = input_city.value.split(" ")[1]?.slice(1, -1);

  if (!idCategory && !city) {
    update_all_posts();
    return;
  }

  if (!idCategory) {
    console.log("HERE" + city)
    update_all_posts_with_city({city: city, PC: pc});
    return;
  }

  if (!city) {
    update_all_posts_with_category(idCategory);
    return;
  }

  list_posts.innerHTML = "";
  RM.getCategoryById(idCategory, category => {
    RM.getAllPostsByCategoryAndCity({idCategory: idCategory, city: city, PC: pc}, posts => {
      posts.forEach(post => {
        RM.getUserById(post.idOwner, owner => {
          list_posts.appendChild(new PostHtml(post, owner, category, 0).htmlObject);
        })
      })
    })
  })
}

const update_input_city = () => {
  search_bar_extension_city.innerHTML = "";
  const val = input_city.value;
  const all_cities = document.createElement("li");
  all_cities.innerHTML = "Toutes les villes";
  all_cities.onmousedown = () => {
    input_city.value = "";
    search_posts();
  }
  search_bar_extension_city.appendChild(all_cities);
  RM.getAllCitiesAndPCWithValue(val.toString().toLowerCase(), values_and_city => {
    values_and_city.sort((a, b) => {return a.city > b.city ? 1 : a.city < b.city ? -1 : 0}).forEach(value_and_city => {
      const new_li = document.createElement("li");
      new_li.innerHTML = value_and_city.city + " (" + value_and_city.PC + ")";
      new_li.onmousedown = () => {
        input_city.value = value_and_city.city + " (" + value_and_city.PC + ")";
        search_posts();
      }
      search_bar_extension_city.appendChild(new_li);
    })
  });
}

const update_input_category = () => {
  search_bar_extension_category.innerHTML = "";
  const val = input_category.value;
  const all_category = document.createElement("li");
  all_category.innerHTML = "Toutes les catégories";
  all_category.onmousedown = () => update_chosen_category(null);
  search_bar_extension_category.appendChild(all_category);
  
  RM.getAllCategoriesWithValue(val.toLowerCase(), categories => {
    categories.sort((a, b) => {return a.name > b.name ? 1 : a.name < b.name ? -1 : 0}).forEach(category => {
      const new_li = document.createElement("li");
      new_li.innerHTML = category.name;
      new_li.onmousedown = () => update_chosen_category(category);
      search_bar_extension_category.appendChild(new_li);
    })
  });
}


function main() {
  if (sessionStorage.user) {
    const icon_account = document.getElementById("profile-icon");
    icon_account.innerHTML = sessionStorage.user.pseudo[0];
    icon_account.style.backgroundColor = user.color;
    icon_account.style.backgroundImage = "none";
  }
  
  if (!sessionStorage.initialized) {
    RM.getAllCategories(categories => {
      sessionStorage.setItem("jobstone-categories", categories);
      update_all_categories(categories);
      sessionStorage.setItem("jobstone-initialized", true);
    })
  }

  update_all_posts();

  document.getElementById("search-bar-city").oninput = update_input_city;
  document.getElementById("search-bar-city").onfocus = update_input_city;

  document.getElementById("search-bar-category").oninput = update_input_category;
  document.getElementById("search-bar-category").onfocus = update_input_category;
}

main();