const default_failure = (res) => {
  console.log(res);
}
class RequestManager {
  XMLRequestPost(data, url, success, failure=default_failure) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        try {
          const res = JSON.parse(this.response);
          success(res.data);
        } catch {
          console.log("Error parse:");
          console.log(this.response);
        }
      } else if (this.readyState == 4) {
        console.log("Error " + this.status + " - " + this.statusText);
        failure(this.response);
      }
    };
    
    xmlhttp.open("POST", session.default_path + "php/" + url, true);
    xmlhttp.send(JSON.stringify(data)); 
  }

  
  XMLRequestGet(data, url, success, failure=default_failure) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        try {
          const res = JSON.parse(this.response);
          success(res.data);
        } catch {
          console.log("Error parse:");
          console.log(this.response);
        }
      } else if (this.readyState == 4) {
        console.log("Error " + this.status + " - " + this.statusText);
        failure(this.response);
      }
    };
    
    xmlhttp.open("GET", session.default_path + "php/" + url + "?x=" + JSON.stringify(data), true);
    xmlhttp.send(); 
  }

  getAllUsers(success, failure) {
    this.XMLRequestGet(null, "read-all-users.php", success, failure);
  }

  getAllCategories(success, failure) {
    this.XMLRequestGet(null, "read-all-categories.php", success, failure);
  }

  getAllPosts(success, failure) {
    this.XMLRequestGet(null, "read-all-posts.php", success, failure);
  }

  connect(identifier, password, success, failure) {
    const data = {
      identifier: identifier,
      password: password
    }
    this.XMLRequestPost(data, "sign-in.php", success, failure);
  }

  postPost(post, success, failure) {
    this.XMLRequestPost(post, "create-post.php", success, failure);
  }

  createNewUser(user, success, failure) {
    this.XMLRequestPost(user, "sign-up.php", success, failure);
  }

  getUserById(idUser, success, failure) {
    this.XMLRequestGet({idUser: idUser}, "read-user-by-id.php", success, failure);
  }

  getCategoryById(idCategory, success, failure) {
    this.XMLRequestGet({idCategory: idCategory}, "read-category-by-id.php", success, failure);
  }

  getPostById(idPost, success, failure) {
    this.XMLRequestGet({idPost: idPost}, "read-post-by-id.php", success, failure);
  }

  getAllPostsByUser(idUser, success, failure) {
    this.XMLRequestGet({idUser: idUser}, "read-all-posts-by-user.php", success, failure);
  }

  getAllAppliersByPost(idPost, success, failure) {
    this.XMLRequestGet({idPost: idPost}, "read-all-appliers-by-post.php", success, failure);
  }

  getAllCitiesAndPC(success, failure) {
    this.XMLRequestGet(null, "read-all-cities-and-pc.php", success, failure);
  }

  getAllCitiesAndPCWithValue(value, success, failure) {
    this.XMLRequestGet({value: value}, "read-all-cities-and-pc-with-value.php", success, failure);
  }

  getAllCategoriesWithValue(value, success, failure) {
    this.XMLRequestGet({value: value}, "read-all-categories-with-value.php", success, failure);
  }

  getAllPostsByCategory(idCategory, success, failure) {
    this.XMLRequestGet({idCategory: idCategory}, "read-all-posts-by-category.php", success, failure);
  }

  getAllPostsByCity(value_and_city, success, failure) {
    this.XMLRequestGet(value_and_city, "read-all-posts-by-city.php", success, failure);
  }

  getAllPostsByCategoryAndCity(category_and_city, success, failure) {
    this.XMLRequestGet(category_and_city, "read-all-posts-by-category-and-city.php", success, failure);
  }

  getUserByPseudo(pseudo, success, failure) {
    this.XMLRequestGet({pseudo: pseudo}, "read-user-by-pseudo.php", success, failure);
  }

  getAllUsersWithValue(value, success, failure) {
    this.XMLRequestGet({value: value}, "read-all-users-with-value.php", success, failure);
  }

  postApply(apply, success, failure) {
    this.XMLRequestPost(apply, "create-apply.php", success, failure);
  }

  patchUser(user, success, failure) {
    this.XMLRequestPost(user, "update-user.php", success, failure);
  }

  patchPost(post, success, failure) {
    this.XMLRequestPost(post, "update-post.php", success, failure);
  }

  removeUserById(idUser, success, failure) {
    this.XMLRequestPost({idUser: parseInt(idUser)}, "delete-user.php", success, failure);
  }

  removePostById(idPost, success, failure) {
    this.XMLRequestPost({idPost: idPost}, "delete-post.php", success, failure);
  }

  removeApply(idPost, idApplier, success, failure) {
    this.XMLRequestPost({idPost: idPost, idApplier: idApplier}, "delete-apply.php", success, failure);
  }
  
}