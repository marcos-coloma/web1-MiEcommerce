const authController = {

    login: (req, res) => {
        res.render("pages/login",
            { title: "Login" });
    },

    register: (req, res) => {
        res.render("pages/register",
            { title: "Register" });
    }
};

module.exports = authController;