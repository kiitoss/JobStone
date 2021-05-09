// const RM = new RequestManagerLocal();
const service_modal = document.getElementById("service-modal");
const close_service_btn = document.getElementById("close-service-btn");

function generate_li_detail_html(icon, text) {
  const path = window.location.href.split("jobstone")[0]+"/jobstone/";
  const li_detail = document.createElement("li");
  li_detail.setAttribute("class", "service-detail");
  
  const img_detail = document.createElement("img");
  img_detail.setAttribute("src", path+"res/icons/"+icon+".svg");
  img_detail.setAttribute("alt", "icone de "+icon);

  const p_detail = document.createElement("p");
  p_detail.innerHTML = text;

  li_detail.appendChild(img_detail);
  li_detail.appendChild(p_detail);

  return li_detail;
}

function update_modal(post, owner, category) {
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

function open_service_modal(idPost) {
  RM.getPostById(idPost, post => {
    RM.getUserById(post.idOwner, owner => {
      RM.getCategoryById(post.idCategory, category => {
        update_modal(post, owner, category);
      })
    })
  })
  service_modal.style.display = "block";
}

function close_service_modal() {
  service_modal.style.display = "none";
}

close_service_btn.onclick = () => close_service_modal();