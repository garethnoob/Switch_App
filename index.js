const hideBulb = () => {
    el = document.getElementById('img');
    if (el.style.display === 'none') {
        el.style.display = 'block';
        document.getElementById('btn').innerHTML = 'Hide Me!!';
    } else {
        el.style.display = 'none';
        document.getElementById('btn').innerHTML = 'Show Me!!';
    }
}