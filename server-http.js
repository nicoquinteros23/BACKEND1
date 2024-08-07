const http = require('http')
const url = require('url')
let productos = {}
const router = {
    GET: {},
    POST: {},
}

const handlerRoute = (metodo, ruta, funcion)=> {
    router[metodo][ruta] = funcion

}

handlerRoute('GET', '/productos', ()=> {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(JSON.stringify(productos))
})


const server = http.createServer(
    (req, res)=> {
        const urlPostMan = url.parse(req.url, true)
        const metodo = req.method
        const ruta = urlPostMan.pathname
        const funcion = router[metodo][ruta]
        if(funcion){
            funcion(req, res) }
        else {
            res.end('ruta no encontrada')}
        /* req - request - el front nos envia la peticion */
        /* res - response - la respuesta del back que mandamos al front */
        /* req.end('server ok') */
    }
)


server.listen(3001, ()=> {
    console.log('Server on port 3001')  
})