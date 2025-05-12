// Abrir e fechar o menu lateral
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});

// Esconder o splash screen depois de alguns segundos
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
  }, 5000);
});
<script>
  function abrirMenu() {
    const menu = document.getElementById("menuLateral");
    if (menu.style.left === "0px") {
      menu.style.left = "-250px";
    } else {
      menu.style.left = "0px";
    }
  }
</script>
