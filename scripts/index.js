const RM = new RequestManagerLocal();

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



function update_all_posts() {
  RM.getAllPosts(posts => {
    posts.forEach(post => {
      RM.getUserById(post.idOwner, owner => {
        RM.getCategoryById(post.idCategory, category => {
          document.getElementById("list-posts").appendChild(new PostHtml(post, owner, category, 0).htmlObject);
        })
      })
    })
  })
}

function generate_new_category_html(category) {
  const new_category = document.createElement("li");
  new_category.innerHTML = category.name;
  return new_category;
}

function update_all_categories(categories) {
  const list_categories = document.getElementById("list-categories");
  list_categories.innerHTML = "";
  categories.forEach(category => {
    const new_category = generate_new_category_html(category);
    list_categories.appendChild(new_category);
  })
}


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