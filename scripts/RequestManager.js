class RequestManager {
  getAllUsers(callback) {
    callback();
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
  return new Post(id_post++, Math.floor(Math.random() * 5), new Date(), TI[Math.floor(Math.random() * 10)], Math.floor(Math.random() * 5), new Date(), new Date(), Math.floor(Math.random() * 90)+10, CI[Math.floor(Math.random() * 10)], "HELLO LES BOYS, ceci est ma description", Math.floor(Math.random() * 100));
}

const USERS = [generate_random_user(), generate_random_user(), generate_random_user(), generate_random_user(), generate_random_user(), generate_random_user(), generate_random_user()];
const CATEGORIES = [generate_random_category(), generate_random_category(), generate_random_category(), generate_random_category(), generate_random_category(), generate_random_category()];
const POSTS = [generate_random_post(), generate_random_post(), generate_random_post(), generate_random_post(), generate_random_post(), generate_random_post(), generate_random_post()];


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
}