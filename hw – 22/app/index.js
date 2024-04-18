const user = {
    name: "Nataliia",
    age: 24,
    location: "Kyiv",

    showUserInfo: function () {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
        console.log("Location: ", this.location);
    }
};

user.showUserInfo();