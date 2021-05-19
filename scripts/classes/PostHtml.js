class PostHtml {
  constructor(post, owner, category, onclick_delete, editable=false, onclick_edit) {
    let path = session.default_path;

    this.htmlObject = document.createElement("div");
    this.htmlObject.setAttribute("class", "post");

    if (editable) {
      this.htmlObject.setAttribute("class", "post editable-post");
    }

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
    img_star_dark.setAttribute("src", path + "/res/icons/star_dark.svg");
    img_star_dark.setAttribute("alt", "icone d'étoile");

    let img_star = document.createElement("img");
    img_star.setAttribute("src", path + "/res/icons/star.svg");
    img_star.setAttribute("alt", "iconde d'étoile");

    
    let div_edit;
    if (editable || session?.user?.isAdmin == 1) {
      div_edit = document.createElement("div");
      div_edit.setAttribute("class", "edit-annonce");
      if (editable) {
        let btn_modify = document.createElement("button");
        btn_modify.setAttribute("class", "edit_btn");
        btn_modify.onclick = (e) => onclick_edit(e, post);
        btn_modify.innerHTML = "Modifier";
        div_edit.appendChild(btn_modify);
       }
      let btn_remove = document.createElement("button");
      btn_remove.setAttribute("class", "remove_btn");
      btn_remove.onclick = (e) => onclick_delete(e, post.id);
      btn_remove.innerHTML = "Supprimer";  
      div_edit.appendChild(btn_remove);
    }

    div_txt.appendChild(p_name);
    div_txt.appendChild(h3_title);
    div_txt.appendChild(p_description);

    div_main.appendChild(btn_icon);
    div_main.appendChild(div_txt);

    div_footer.appendChild(p_location);
    if (editable || session?.user?.isAdmin == 1) {
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