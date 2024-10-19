const {envs} = require('./config/env');
const { startServer } = require('./server/server');



const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


//funcion agnóstica autoconvocada
//agnostica porque no tiene nombre
//autoconvocada porque la llamamos con los parentesis
(async () => {
    main();
})()