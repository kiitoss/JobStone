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


if (user) {
  const icon_account = document.getElementById("profile-icon");
  icon_account.innerHTML = user.pseudo[0];
  icon_account.style.backgroundColor = user.color;
  icon_account.style.backgroundImage = "none";
}


update_all_posts();