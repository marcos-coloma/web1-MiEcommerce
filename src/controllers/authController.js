const authController = {

    login: (req, res) => {
        res.render("pages/login", {
            layout: false,
            title: "Login" 
            });
    },

    register: (req, res) => {
        res.render("pages/register", {
            layout: false,
            title: "Register" 
        });
    }
};

module.exports = authController;