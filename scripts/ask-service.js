function ask_service() {
  const connected = localStorage.getItem("jobstone-connected");
  
  if (!connected) {
    alert("Vous devez être connecté pour accéder à ce service.");
    return;
  }

  location.href = "pages/ask-service.html";
}