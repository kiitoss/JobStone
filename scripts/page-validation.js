try {
  if (!session.user) {
    window.location.href = "../index.html";
  }
} catch (e) {
  if (e instanceof ReferenceError) {
    window.location.href = "../index.html";
  }
}