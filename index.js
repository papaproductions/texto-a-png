const express = require("express");
const app = express();
const { createCanvas } = require("canvas");
let limite = 2000;

app.get("/Random/texto-a.png", (req, res) => {
    let canvas = createCanvas(800, 600);
    let ctx = canvas.getContext("2d");
    let texto = req.query.text;
    let margen = parseInt(req.query.padding || 10);
    let fondo = req.query.background || "rgba(0, 0, 0, 0)";
    let color = req.query.foreground || "#000000";
    let sFuente = parseInt(req.query.size || 30);

    ctx.font = `${sFuente}px sans-serif`;
    let sTexto = ctx.measureText(texto);
    canvas.width = sTexto.width + margen * 2;
    if(canvas.width > limite) {
        res.writeHead(400);
        sFuente = 30;
        ctx.font = `${sFuente}px sans-serif`;
        margen = 10;
        texto = `El ancho de la imagen no puede exceder ${limite}`;
        sTexto = ctx.measureText(texto);
        canvas.width = sTexto.width + margen * 2;
    }
    else if(sFuente > limite) {
        res.writeHead(400);
        sFuente = 30;
        ctx.font = `${sFuente}px sans-serif`;
        texto = `"size" no puede exceder ${limite}`;
        sTexto = ctx.measureText(texto);
        canvas.width = sTexto.width + margen * 2;
    }
    else if(!texto) {
        res.writeHead(400);
        texto = "Especifica el parametro GET \"text\" para poner texto.";
        ctx.font = `${sFuente}px sans-serif`;
        sTexto = ctx.measureText(texto);
        canvas.width = sTexto.width + margen * 2;
    }
    canvas.height = sFuente + margen * 2;
    ctx.font = `${sFuente}px sans-serif`;
    ctx.fillStyle = fondo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillText(texto, margen, margen + sFuente);
    res.write(canvas.toBuffer());
    res.end();
});

app.listen(parseInt(process.argv[2] || 5000), () => console.log("Servidor iniciado!"));