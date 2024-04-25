var isThreeDots = false;

    function toggleDropdownButton() {
        var dropdownButton = document.getElementById('navbarDropdown');
        if (isThreeDots) {
            dropdownButton.innerHTML = '⋮';
        } else {
            dropdownButton.innerHTML = '▼';
        }
        isThreeDots = !isThreeDots;
    }