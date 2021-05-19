const service_modal = document.getElementById("service-modal");

function update_apply(applied, post) {
  if (applied) {
    RM.removeApply(post.id, session.user.id, () => {
      location.reload();
    })
    return;
  }

  if (session.user) {
    RM.postApply({idPost: post.id, idApplier: session.user.id}, () => {
      location.reload();
    })
    return;
  }
  
  close_service_modal();
  document.getElementById("error-modal").style.display = "block";
}

function generate_li_detail_html(icon, text) {
  let path = session.default_path;

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

function update_modal(post, owner, category, appliers) {
  document.getElementById("service-date").innerHTML = post.datePublication;
  document.getElementById("title-service").innerHTML = post.title;
  
  document.getElementById("service-description").innerHTML = post.description;



  let applied = false;
  appliers.forEach(applier => {
    if (session.user?.id == applier.id) {
      applied = true;
      return;
    }
  })

  const candidate_btn = document.getElementById("candidate-btn");
  candidate_btn.innerHTML = applied ? "Suppr Candiature" : "Candidater !";
  candidate_btn.onclick = () => update_apply(applied, post);

  const service_details = document.getElementById("service-details");
  service_details.innerHTML = "";

  const h2_detail = document.createElement("h2");
  h2_detail.innerHTML = "Détails";

  const ul_details = document.createElement("ul");
  
  ul_details.appendChild(generate_li_detail_html("location", post.city + "(" + post.postalCode + ")"));
  ul_details.appendChild(generate_li_detail_html("profile", owner.pseudo));
  ul_details.appendChild(generate_li_detail_html("mail", owner.mail));

  const icon_name = category.name.split(" ").join("").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  ul_details.appendChild(generate_li_detail_html(icon_name, category.name));
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
        RM.getAllAppliersByPost(idPost, appliers => {
          
          update_modal(post, owner, category, appliers);
        })
      })
    })
  })
  service_modal.style.display = "block";
}

function close_service_modal() {
  service_modal.style.display = "none";
}