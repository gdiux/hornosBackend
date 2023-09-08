require('dotenv').config();
const net = require('net');

const fetch = (...args) =>
    import ('node-fetch').then(({ default: fetch }) => fetch(...args));

const server = net.createServer();

server.on('connection', (socket) => {
    socket.on('data',async (data) => {

        //console.log('Data: '+ data);

        let datos= data.toString().split('_');

        if (datos[1]) {

            let body = {
                "code": datos[0],
                "temperatura": datos[1]
            }

            console.log(body);

            const response = await fetch(process.env.URL, {
                method: 'post',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            
            let resp = await response.json();

            if (!resp.ok) {
                console.log(`${resp.msg} codigo: ${body.code} temperatura: ${body.temperatura}`);
            }else{
                console.log(resp.msg);
            }

        }       

    });

    socket.on('error', (err) =>{
        console.log(err);
    })
})

server.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ', process.env.PORT);
})
