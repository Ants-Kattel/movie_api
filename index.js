const app = require('express')()
const port = 8080
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json')

app.get('/movies', (req, res) => {
    res.send(["Shawshank redemtion", "The Batman"])
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) 

app.listen(port, () =>{
    console.log(`API up at: http://localhost:${port}`)
})