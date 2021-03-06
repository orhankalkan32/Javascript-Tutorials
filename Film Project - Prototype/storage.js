function Storage() {

}

Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmsStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.getFilmsStorage = function () {
    let films;
    if (localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

Storage.prototype.deleteFilmToStorage = function (filmTitle) {
    let films = this.getFilmsStorage();
    films.forEach(function (film, index) {
        if (film.title === filmTitle) {
            films.splice(index, 1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function () {
    localStorage.removeItem("films");
}