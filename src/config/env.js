require('dotenv').config();
const {get} = require('env-var');

const envs ={ //configuracion de la variables de entorno
    PORT: get('PORT').required().asPortNumber(), //pide el puerto almacenado en las variables de entorno e identifica que sea un numero
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString() //el difult se lo coloca por si en la variable de entorno correspondiente no se colocara nada por defecto iria a la carpeta "public"
}

module.exports={
    envs
}