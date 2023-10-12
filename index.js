const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = 5000;

app.engine("handlebars", exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static("public"));

app.use(
    express.urlencoded({
        extended: true ,
    }),
);

app.post("/certificado", (req, res)=>{
    const now = new Date;
    const certificado = {
        "nome": req.body.nome,
        "curso": req.body.curso,
        "horas": req.body.horas,
        "date": now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear()
    };

    res.render("certificado", {certificado});
});

app.get("/formulario", (req, res)=>{
    res.render("formulario");
});

app.get("/", (req, res)=>{
    res.render("home");
});

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});