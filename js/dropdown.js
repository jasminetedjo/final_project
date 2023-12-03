document.getElementById('academicDropdownContent').addEventListener('click', function() {
    var dropdownContent = document.getElementById('academicDropdownContent');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});