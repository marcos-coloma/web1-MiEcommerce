const authController = {

    login: (req, res) => {
        res.render("pages/login", {
            title: "Login"
        });
    },

    register: (req, res) => {
        res.render("pages/register", {
            title: "Register"
        });
    },

    processLogin: (req, res) => {
        const { username, password } = req.body;


        if (!username || !password) {
            return res.status(400).send("Faltan datos");
        }

        console.log("Login:", req.body);

        req.session.user = { username };

        res.redirect("/");
    },

    processRegister: (req, res) => {
        const { email, password, repeatPassword } = req.body;

        if (!email || !password || !repeatPassword) {
            return res.status(400).send("Faltan datos");
        }

        if (password !== repeatPassword) {
            return res.status(400).send("Las contraseñas no coinciden");
        }


        res.redirect("/login");
    }
};

module.exports = authController;