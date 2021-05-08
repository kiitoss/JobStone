const appliers_modal = document.getElementById("appliers-modal");
const appliers_close_modal = document.getElementById("appliers-modal-close");
const appliers_container = document.getElementById("appliers-list");

class Applier {
  constructor(pseudo, color) {
    this.pseudo = pseudo;
    this.color = color;
  }
}

function generate_random_appliers() {
  const pseudos = ["Idriss", "Antoine", "Léo", "Bodyboy", "Heiko", "Clément", "Pierre", "Anais", "Mathilde", "Hervé"];
  let appliers_list = [];
  const nb = Math.random() * 10 + 5;
  for (let i=0; i<nb; i++) {
    const random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
    const index = Math.floor(Math.random() * 10);
    const random_pseudo = pseudos[index];
    const appl = new Applier(random_pseudo, random_color);
    appliers_list.push(appl);
  }
  return appliers_list;
}




function append_applier_to_html(applier) {
  const htmlObject = document.createElement("div");
  htmlObject.setAttribute("class", "applier");

  const btn_icon = document.createElement("a");
  btn_icon.setAttribute("class", "icon");
  btn_icon.innerHTML = applier.pseudo[0];
  btn_icon.style.backgroundColor = applier.color;

  const p_name = document.createElement("p");
  p_name.setAttribute("class", "name");
  p_name.innerHTML = applier.pseudo;

  const btn_validate = document.createElement("button");
  btn_validate.setAttribute("class", "validate-applier");
  btn_validate.innerHTML = "Valider";

  htmlObject.appendChild(btn_icon);
  htmlObject.appendChild(p_name);
  htmlObject.appendChild(btn_validate);

  appliers_container.appendChild(htmlObject);
}

function append_all_appliers_to_html() {
  const appliers = generate_random_appliers();
  appliers_container.innerHTML = "";
  appliers.forEach((applier) => {
    append_applier_to_html(applier);
  });
}

function open_appliers_modal() {
  append_all_appliers_to_html();
  appliers_modal.style.display = "block";
}

function close_appliers_modal() {
  appliers_modal.style.display = "none";
}

appliers_close_modal.onclick = () => close_appliers_modal();






const edit_post_modal = document.getElementById("edit-post-modal");
var edit_post_close_modal = document.getElementById("edit-modal-close");

function open_edit_post_modal(event) {
  edit_post_modal.style.display = "block";
  event.stopPropagation();
}

function close_edit_post_modal() {
  edit_post_modal.style.display = "none";
}

edit_post_close_modal.onclick = () => close_edit_post_modal();





const onclick_edit = (e) => open_edit_post_modal(e);
const onclick_delete = (e) => console.log(e);

let nP = new Post("05/06", "12h13", "Jean", "Aide svp", "besoin d'aide", "Toulon", 32, "Animaux", 5, 1, onclick_edit, onclick_delete);
nP.htmlObject.onclick = () => open_appliers_modal();

document.getElementById("list-posts").appendChild(nP.htmlObject);
