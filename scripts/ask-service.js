const ask_service_modal = document.getElementById("ask-service-modal");

function ask_service() {
  if (!session_infos.connected) {
    ask_service_modal.style.display = "block";
    return;
  }

  location.href = "pages/ask-service.html";
}

function close_ask_service_modal() {
  ask_service_modal.style.display = "none";
}