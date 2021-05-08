const service_modal = document.getElementById("service-modal");
const close_service_btn = document.getElementById("close-service-btn");

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

function append_service_to_modal(post, owner, category) {
  document.getElementById("service-date").innerHTML = post.datePublication;
  document.getElementById("title-service").innerHTML = post.title;
  document.getElementById("service-description").innerHTML = post.description;

  const service_details = document.getElementById("service-details");
  service_details.innerHTML = "";

  const h2_detail = document.createElement("h2");
  h2_detail.innerHTML = "Détails";

  const ul_details = document.createElement("ul");
  
  ul_details.appendChild(generate_li_detail_html("location", post.city + "(" + post.postalCode + ")"));
  ul_details.appendChild(generate_li_detail_html("profile", owner.pseudo));
  ul_details.appendChild(generate_li_detail_html("mail", owner.mail));
  ul_details.appendChild(generate_li_detail_html(category.name, category.name));
  ul_details.appendChild(generate_li_detail_html("calendar", post.startDate));
  ul_details.appendChild(generate_li_detail_html("calendar", post.endDate));

  service_details.appendChild(h2_detail);
  service_details.appendChild(ul_details);

  document.getElementById("nb_etoiles").innerHTML = post.price;
}

function open_service_modal() {
  append_service_to_modal(genere_random_post(), genere_random_user(), genere_random_category());
  service_modal.style.display = "block";
}

function close_service_modal() {
  service_modal.style.display = "none";
}

close_service_btn.onclick = () => close_service_modal();







function generate_fake_post() {
  for (let i=0; i<10; i++) {
    let nP = new PostHtml(genere_random_post(), genere_random_user(), genere_random_category(), 0);

    document.getElementById("list-posts").appendChild(nP.htmlObject);
  }
}


generate_fake_post();