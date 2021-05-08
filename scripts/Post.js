class Post {
  constructor(date, hour, owner, title, description, location, cp, subject, stars, editable=false, onclick_edit, onclick_delete) {
    this.htmlObject = document.createElement("div");
    this.htmlObject.setAttribute("class", "post");

    let p_date = document.createElement("p");
    p_date.innerHTML = date + " " + hour;
    p_date.setAttribute("class", "date");

    let div_main = document.createElement("div");
    div_main.setAttribute("class", "main");

    let btn_icon = document.createElement("button");
    btn_icon.setAttribute("class", "icon");

    let div_txt = document.createElement("div");
    div_txt.setAttribute("class", "text");
    let p_name = document.createElement("p");
    p_name.innerHTML = owner;
    let h3_title = document.createElement("h3");
    h3_title.innerHTML = title;
    let p_description = document.createElement("p");
    p_description.innerHTML = description;

    let line = document.createElement("hr");

    let div_footer = document.createElement("div");
    div_footer.setAttribute("class", "post-footer");

    let p_location = document.createElement("p");
    p_location.setAttribute("class", "location");
    p_location.innerHTML = location + " (" + cp + ") - " + subject;

    let div_stars = document.createElement("div");
    div_stars.setAttribute("class", "number-stars");
    let p_nb_stars = document.createElement("p");
    p_nb_stars.innerHTML = stars;

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

    this.htmlObject.setAttribute("onclick", "open_service_modal()");
  }
}