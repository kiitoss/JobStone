const RM = new RequestManagerLocal();

function show_all_users() {
  RM.getAllUsers(users => {
    users.forEach(user => {
      console.log(user);
    })
  })
}

function show_all_categories() {
  RM.getAllCategories(categories => {
    categories.forEach(category => {
      console.log(category);
    })
  })
}

function show_all_posts() {
  RM.getAllPosts(posts => {
    posts.forEach(post => {
      console.log(post);
    })
  })
}

show_all_users();
show_all_categories();
show_all_posts();



function update_all_posts() {
  RM.getAllPosts(posts => {
    posts.forEach(post => {
      RM.getUserById(post.idOwner, owner => {
        if (!owner) {
          console.log("Erreur - post "+post.id+" avec idOwner non existant");
          return;
        }
        RM.getCategoryById(post.idCategory, category => {
          if (!category) {
            console.log("Erreur - post "+post.id+" avec idCategory non existant");
            return;
          }
          document.getElementById("list-posts").appendChild(new PostHtml(post, owner, category, 0).htmlObject);
        })
      })
    })
  })
}

update_all_posts();