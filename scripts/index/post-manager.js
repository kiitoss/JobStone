
const list_posts = document.getElementById("list-posts");


function update_all_posts() {
  list_posts.innerHTML = "";
  RM.getAllPosts(posts => {
    posts.forEach(post => {
      RM.getUserById(post.idOwner, owner => {
        RM.getCategoryById(post.idCategory, category => {
          list_posts.appendChild(new PostHtml(post, owner, category, onclick_delete).htmlObject);
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
          list_posts.appendChild(new PostHtml(post, owner, category, onclick_delete).htmlObject);
        })
      })
    })
  })
}

function update_all_posts_with_city(value_and_city) {
  list_posts.innerHTML = "";
  RM.getAllPostsByCity(value_and_city, posts => {
    posts.forEach(post => {
      RM.getUserById(post.idOwner, owner => {
        RM.getCategoryById(post.idCategory, category => {
          list_posts.appendChild(new PostHtml(post, owner, category, onclick_delete).htmlObject);
        })
      })
    })
  })
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
    update_all_posts_with_city({city: city, postalCode: pc});
    return;
  }

  if (!city) {
    update_all_posts_with_category(idCategory);
    return;
  }

  list_posts.innerHTML = "";
  RM.getCategoryById(idCategory, category => {
    RM.getAllPostsByCategoryAndCity({idCategory: idCategory, city: city, postalCode: pc}, posts => {
      posts.forEach(post => {
        RM.getUserById(post.idOwner, owner => {
          list_posts.appendChild(new PostHtml(post, owner, category, onclick_delete, 0).htmlObject);
        })
      })
    })
  })
}

function remove_post(event, idPost) {
  RM.removePostById(idPost, () => window.location.reload());
  event.stopPropagation();
}

const onclick_delete = (e, idPost) => remove_post(e, idPost);