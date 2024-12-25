function changeHref(artistName) {
    const links = document.querySelectorAll('.artist-link');
    links.forEach(link => {
        if (link.innerText.trim() === artistName) {
            link.href = `/Artist_Details/${artistName}`;
        }
    });
}