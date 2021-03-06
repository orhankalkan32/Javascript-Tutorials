class Storage {

    static getSearchedUsersFromStorage() {
        // Tüm Kullanıcıları Al

        let users;
        if (localStorage.getItem("searched") === null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static addSearchedUserToStorage(username) {
        // Kullanıcı Ekle

        let users = this.getSearchedUsersFromStorage();

        // IndexOf

        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));
    }

    static clearAllSearchedUserFromStorage() {
        localStorage.removeItem("searched");
    }
}