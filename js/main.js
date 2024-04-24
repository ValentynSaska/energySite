document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".menu_item");

    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var submenu = this.querySelector(".sequel-dropdown");
            if (submenu) {
                submenu.classList.toggle("show");
            }
        });
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches(".menu_item")) {
            var dropdowns = document.querySelectorAll(".sequel-dropdown");
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains("show")) {
                    dropdown.classList.remove("show");
                }
            });
        }
    });
});
