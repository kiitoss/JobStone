const appliers_modal = document.getElementById("appliers-modal");
const appliers_container = document.getElementById("appliers-list");

function validate_applier(applier, post) {
  if (session.user.money < parseInt(post.price)) {
    document.getElementById("alert-msg").innerHTML = "Vous n'avez que " + session.user.money + " étoile. Il vous en faut plus pour valider le service.";
    document.getElementById("alert-modal").style.display = "block";
    close_appliers_modal();
    return;
  }

  if (applier.id == session.user.id) {
    console.log("Vous venez de vous rendre un service à vous même ! Bien joué ;)");
    RM.removePostById(post.id, () => {
      close_appliers_modal();
      window.location.reload();
    })
    return;
  }

  const price = parseInt(post.price);
  applier.money = parseInt(applier.money) + price;
  RM.patchUser(applier, () => {
    session.user.money = parseInt(session.user.money) - price;
    
    RM.patchUser(session.user, new_user => {
      session.updateUser(new_user);
      RM.removePostById(post.id, () => {
        close_appliers_modal();
        window.location.reload();
      })
    })
  });
}

function append_applier_to_html(applier, post) {
  const htmlObject = document.createElement("div");
  htmlObject.setAttribute("class", "applier");

  const btn_icon = document.createElement("a");
  btn_icon.setAttribute("class", "icon");
  btn_icon.innerHTML = applier.pseudo[0];
  btn_icon.style.backgroundColor = applier.color;

  const div_infos = document.createElement("div");
  div_infos.setAttribute("class", "div_infos");

  const p_name = document.createElement("p");
  p_name.setAttribute("class", "name");
  p_name.innerHTML = applier.pseudo;

  const p_mail = document.createElement("p");
  p_mail.setAttribute("class", "mail");
  p_mail.innerHTML = applier.mail;

  const btn_validate = document.createElement("button");
  btn_validate.setAttribute("class", "validate-applier");
  btn_validate.innerHTML = "Payer";
  btn_validate.onclick = () => validate_applier(applier, post);

  htmlObject.appendChild(btn_icon);
  div_infos.appendChild(p_name);
  div_infos.appendChild(p_mail);
  htmlObject.appendChild(div_infos);
  htmlObject.appendChild(btn_validate);

  appliers_container.appendChild(htmlObject);
}

function append_all_appliers_to_html(idPost) {
  appliers_container.innerHTML = "";
  RM.getPostById(idPost, post => {
    RM.getAllAppliersByPost(post.id, appliers => {
      appliers.forEach(applier => {
        append_applier_to_html(applier, post);
      })
    })
  })
}