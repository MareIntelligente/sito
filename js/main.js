document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");

    if (!sidebar || !menuBtn || !closeBtn) {
        console.error("Sidebar o bottoni non trovati");
        return;
    }

    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });

});
