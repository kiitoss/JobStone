const categories = ["Pèche", "Manuel", "Aide", "Informatique", "Drogue", "Post", "escalade", "acrobranche", "piscine", "tennis"];
const titles = ["Help", "bonjour", "aide info", "dev web", "prog", "html", "css et js", "php = null", "arbre", "everyone"];
const city = ["Paris", "Genève", "Lyon", "L'Arbresle", "Saint-Etienne", "Amsterdam", "Bruxelles", "New-York", "Moscou", "Pékin"];
const pseudos = ["abraham", "idriss", "antoine", "clement", "pierre", "jack", "ulysse", "bapt", "hervé", "tutur"];

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

class Post {
  constructor(id, idOwner, datePublication, title, idCategory, startDate, endDate, postalCode, city, description, price) {
    this.id = id;
    this.idOwner = idOwner;
    this.datePublication = datePublication;
    this.title = title;
    this.idCategory = idCategory;
    this.startDate = startDate;
    this.endDate = endDate;
    this.postalCode = postalCode;
    this.city = city;
    this.description = description;
    this.price = price;
  }
}

class User {
  constructor(id, pseudo, mail, color) {
    this.id = id;
    this.pseudo = pseudo;;
    this.mail = mail;;
    this.color = color;
  }
}

class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

function genere_random_user() {
  const random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
  return new User(Math.floor(Math.random() * 10), pseudos[Math.floor(Math.random() * 10)], "ericansak.doires@gmaailll.com", random_color);
}

function genere_random_category() {
  return new Category(Math.floor(Math.random() * 10), categories[Math.floor(Math.random() * 10)])
}

function genere_random_post() {
  return new Post(Math.floor(Math.random() * 10), 1, format_date(new Date()), titles[Math.floor(Math.random() * 10)], Math.floor(Math.random() * 10), format_date(new Date()), format_date(new Date()), Math.floor(Math.random() * 90)+10, city[Math.floor(Math.random() * 10)], "HELLO LES BOYS, ceci est ma description", Math.floor(Math.random() * 100));
}


class PostHtml {
  constructor(post, owner, category, editable=false, onclick_edit, onclick_delete) {
    this.htmlObject = document.createElement("div");
    this.htmlObject.setAttribute("class", "post");

    let p_date = document.createElement("p");
    p_date.innerHTML = post.datePublication;
    p_date.setAttribute("class", "date");

    let div_main = document.createElement("div");
    div_main.setAttribute("class", "main");

    let btn_icon = document.createElement("button");
    btn_icon.setAttribute("class", "icon");
    btn_icon.innerHTML = owner.pseudo[0];
    btn_icon.style.backgroundColor = owner.color;

    let div_txt = document.createElement("div");
    div_txt.setAttribute("class", "text");
    let p_name = document.createElement("p");
    p_name.innerHTML = owner.pseudo;
    let h3_title = document.createElement("h3");
    h3_title.innerHTML = post.title;
    let p_description = document.createElement("p");
    p_description.innerHTML = post.description;

    let line = document.createElement("hr");

    let div_footer = document.createElement("div");
    div_footer.setAttribute("class", "post-footer");

    let p_location = document.createElement("p");
    p_location.setAttribute("class", "location");
    p_location.innerHTML = post.city + " (" + post.postalCode + ") - " + category.name;

    let div_stars = document.createElement("div");
    div_stars.setAttribute("class", "number-stars");
    let p_nb_stars = document.createElement("p");
    p_nb_stars.innerHTML = post.price;

    let img_star_dark = document.createElement("img");
    img_star_dark.setAttribute("src", "../res/icons/star_dark.svg");
    img_star_dark.setAttribute("alt", "icone d'étoile");

    let img_star = document.createElement("img");
    img_star.setAttribute("src", "../res/icons/star.svg");
    img_star.setAttribute("alt", "iconde d'étoile");

    
    let div_edit;
    if (editable) {
      div_edit = document.createElement("div");
      div_edit.setAttribute("class", "edit-annonce");

      let btn_modify = document.createElement("button");
      btn_modify.setAttribute("class", "edit_btn");
      btn_modify.addEventListener('click', function(e){
        onclick_edit(e);
      });
      btn_modify.setAttribute("onclick", onclick_edit);
      btn_modify.innerHTML = "Modifier";

      let btn_remove = document.createElement("button");
      btn_remove.setAttribute("class", "remove_btn");
      btn_modify.addEventListener('click', function(e){
        onclick_delete(e);
      });
      btn_remove.innerHTML = "Supprimer";

      div_edit.appendChild(btn_modify);
      div_edit.appendChild(btn_remove);
    }

    div_txt.appendChild(p_name);
    div_txt.appendChild(h3_title);
    div_txt.appendChild(p_description);

    div_main.appendChild(btn_icon);
    div_main.appendChild(div_txt);

    div_footer.appendChild(p_location);
    if (editable) {
      div_footer.appendChild(div_edit);
    }

    div_stars.appendChild(p_nb_stars);
    div_stars.appendChild(img_star_dark);
    div_stars.appendChild(img_star);

    this.htmlObject.appendChild(p_date);
    this.htmlObject.appendChild(div_main);
    this.htmlObject.appendChild(line);
    this.htmlObject.appendChild(div_footer);
    this.htmlObject.appendChild(div_stars);

    this.htmlObject.setAttribute("onclick", "open_service_modal("+post.id+")");
  }
}