const service_modal = document.getElementById("service-modal");
const close_service_btn = document.getElementById("close-service-btn");

function open_service_modal() {
  service_modal.style.display = "block";
}

function close_service_modal() {
  service_modal.style.display = "none";
}

close_service_btn.onclick = () => close_service_modal();