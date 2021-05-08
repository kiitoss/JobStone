class RequestManager {
  getAllUsers(callback) {
    callback();
  }
}




class Applier {
  constructor(idPost, idUser) {
    this.idPost = idPost;
    this.idUser = idUser;
  }
}





const PSE = ["abraham", "idriss", "antoine", "clement", "pierre", "jack", "ulysse", "bapt", "hervé", "tutur"];
const CAT = ["Pèche", "Manuel", "Aide", "Informatique", "Drogue", "Post", "escalade", "acrobranche", "piscine", "tennis"];
const TI = ["Help", "bonjour", "aide info", "dev web", "prog", "html", "css et js", "php = null", "arbre", "everyone"];
const CI = ["Paris", "Genève", "Lyon", "L'Arbresle", "Saint-Etienne", "Amsterdam", "Bruxelles", "New-York", "Moscou", "Pékin"];
let id_user = 1;
let id_cat = 1;
let id_post = 1;

function generate_random_user() {
  const random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
  return new User(id_user++, PSE[Math.floor(Math.random() * 10)], "ericansak.doires@gmaailll.com", random_color);
}

function generate_random_category() {
  return new Category(id_cat++, CAT[id_cat])
}

function generate_random_post() {
  return new Post(id_post++, (id_post == 1) ? 1 : id_post-1, new Date(), TI[Math.floor(Math.random() * 10)], Math.floor(Math.random() * 5), new Date(), new Date(), Math.floor(Math.random() * 90)+10, CI[Math.floor(Math.random() * 10)], "HELLO LES BOYS, ceci est ma description", Math.floor(Math.random() * 100));
}

function generate_random_appliers() {
  return new Applier(Math.floor(Math.random() * 5), Math.floor(Math.random() * 5));
}

const USERS = [generate_random_user(), generate_random_user(), generate_random_user(), generate_random_user(), generate_random_user(), generate_random_user(), generate_random_user()];
const CATEGORIES = [generate_random_category(), generate_random_category(), generate_random_category(), generate_random_category(), generate_random_category(), generate_random_category()];
const POSTS = [generate_random_post(), generate_random_post(), generate_random_post(), generate_random_post(), generate_random_post(), generate_random_post(), generate_random_post()];
const APPLIERS = [generate_random_appliers(), generate_random_appliers(), generate_random_appliers(), generate_random_appliers(), generate_random_appliers()];

for (let i=1; i<10; i++) {
  for (let j=1; j<10; j++) {
    APPLIERS.push(new Applier(i, j));
  }
}

class RequestManagerLocal {
  getAllUsers(callback) {
    callback(USERS);
  }

  getAllCategories(callback) {
    callback(CATEGORIES);
  }

  getAllPosts(callback) {
    callback(POSTS);
  }

  getUserById(idUser, callback) {
    for (let i=0; i<USERS.length; i++) {
      if (USERS[i].id == idUser) {
        callback(USERS[i]);
      }
    }
  }

  getCategoryById(idCategory, callback) {
    for (let i=0; i<CATEGORIES.length; i++) {
      if (CATEGORIES[i].id == idCategory) {
        callback(CATEGORIES[i]);
      }
    }
  }

  getPostById(idPost, callback) {
    for (let i=0; i<POSTS.length; i++) {
      if (POSTS[i].id == idPost) {
        callback(POSTS[i]);
      }
    }
  }

  getAllPostsByUser(idUser, callback) {
    let posts = [];
    for (let i=0; i<POSTS.length; i++) {
      if (POSTS[i].idOwner == idUser) {
        posts.push(POSTS[i]);
      }
    }
    callback(posts);
  }

  getAllAppliersByPost(idPost, callback) {
    let appliers = [];
    for (let i=0; i<APPLIERS.length; i++) {
      if (APPLIERS[i].idPost == idPost) {
        appliers.push(APPLIERS[i]);
      }
    }
    callback(appliers);
  }
}