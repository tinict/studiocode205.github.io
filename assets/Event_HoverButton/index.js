const el = document.getElementById('fade-sub');

const hiddensubmenu = document.getElementById('hidden-submenu');

el.addEventListener('mouseover', function handleMouseOver() {
    hiddensubmenu.style.display = 'block';
});

el.addEventListener('mouseout', function handleMouseOut() {
    hiddensubmenu.style.display = 'none';
});
