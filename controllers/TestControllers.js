module.exports = {
    list(req, res){
        return res.json({
            nome: req.query.nome,
            email: req.query.email
        });
    },
    create(req, res){
        console.log(req.body);
        return res.json({});
    },
    login(req, res){
        return res.send("Bem-vindo ao Login!")
    }
};