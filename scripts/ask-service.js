function ask_service() {
  // const connected = sessionStorage.getItem("jobstone-connected");
  
  if (!session_infos.connected) {
    alert("Vous devez être connecté pour accéder à ce service.");
    return;
  }

  location.href = "pages/ask-service.html";
}