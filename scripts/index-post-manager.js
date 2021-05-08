const service_modal = document.getElementById("service-modal");
const close_service_btn = document.getElementById("close-service-btn");

class Service {
  constructor(pseudo, mail, title, nameCategory, startDate, endDate, postalCode, city, description, price) {
    this.pseudo = pseudo;
    this.mail = mail;
    this.title = title;
    this.nameCategory = nameCategory;
    this.startDate = startDate.toLocaleDateString();
    this.endDate = endDate.toLocaleDateString();
    this.postalCode = postalCode;
    this.city = city;
    this.description = description;
    this.price = price;
  }
}


function generate_li_detail_html(icon, text) {
  const li_detail = document.createElement("li");
  li_detail.setAttribute("class", "service-detail");
  
  const img_detail = document.createElement("img");
  img_detail.setAttribute("src", "../res/icons/"+icon+".svg");
  img_detail.setAttribute("alt", "icone de "+icon);

  const p_detail = document.createElement("p");
  p_detail.innerHTML = text;

  li_detail.appendChild(img_detail);
  li_detail.appendChild(p_detail);

  return li_detail;
}

function append_service_to_modal(service) {
  document.getElementById("service-date").innerHTML = service.date;
  document.getElementById("title-service").innerHTML = service.title;
  document.getElementById("service-description").innerHTML = service.description;

  const service_details = document.getElementById("service-details");
  service_details.innerHTML = "";

  const ul_details = document.createElement("ul");
  
  ul_details.appendChild(generate_li_detail_html("location", service.city + "(" + service.postalCode + ")"));
  ul_details.appendChild(generate_li_detail_html("profile", service.pseudo));
  ul_details.appendChild(generate_li_detail_html("mail", service.mail));
  ul_details.appendChild(generate_li_detail_html(service.nameCategory, service.nameCategory));
  ul_details.appendChild(generate_li_detail_html("calendar", service.startDate));
  ul_details.appendChild(generate_li_detail_html("calendar", service.endDate));

  service_details.appendChild(ul_details);

  document.getElementById("nb_etoiles").innerHTML = service.price;
}


function open_service_modal() {
  append_service_to_modal(new Service(1, "@", "aa", "profile", new Date(), new Date(), 69, "Lyon", "Hello", 50));
  service_modal.style.display = "block";
}

function close_service_modal() {
  service_modal.style.display = "none";
}

close_service_btn.onclick = () => close_service_modal();


let nP = new Post("05/06", "12h13", "Jean", "Aide svp", "besoin d'aide", "Toulon", 32, "Animaux", 5, 0);

document.getElementById("list-posts").appendChild(nP.htmlObject);
