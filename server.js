const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public")) // .todos mis elementos estaticos estan en public
// un middleware

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/home", (req, res) => {
  res.status(500).send("Esta es tu pagina de home")
})

// function myFunc(amigoParam) {
// }

// app.get("/amigos", (req, res) => {
//   res.send("Estos son mis amigos... Carolina y Aaron")
// })

app.get("/amigos/:amigoParam", (req, res) => {
  // let req.params.amigoParam = "carolina"
  console.log(req.params)
  // res.send("Estos son mis amigos... Carolina y Aaron")
  if (req.params.amigoParam === "carolina") {
    res.send("Informacion sobre Carolina")
  } else if (req.params.amigoParam === "aaron") {
    res.send("Informacion sobre Aaron")
  } else {
    res.send("No tengo más amigos")
  }
})

app.get("/greet/:mensaje/:numero", (req, res) => {

  const { mensaje, numero } = req.params

  let fullMessage = mensaje.repeat(numero)
  res.send(fullMessage)

})


app.get("/mi-pagina", (req, res) => {
  // res.send("<h1>Hola</h1>")
  res.sendFile(__dirname + "/views/mi-pagina.html")
})

app.get("/sobre-mi", (req, res) => {

  res.sendFile(__dirname + "/views/sobre-mi.html")

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})