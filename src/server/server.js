import express from 'express';
import path from 'path';

export const startServer = (options) => {  //esta funcion va a tener ciertas caracteristicas que se llamaran desde app.js
    const { port, public_path = 'public'} = options
    
    const app = express();


    //para usar middlewares se usa la palabra use (en express)
    app.use(express.static(public_path)); //contenido estatico que ponemos disponible

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath)
    });


    //para que el servidor escuche el llamado del naveador y el servidor pueda devolver atravez de la escucha la pagina
    app.listen(port, () =>{
        console.log(`Escuchando en el puerto ${port}`);
    });

}

