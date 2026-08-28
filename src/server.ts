import express from "express"

const port = 3000
const app = express()

// get, post, put, patch, delete

app.get("/movies", (req, res) => {
  res.send("listagem de filmes")
})

app.listen(port, () => {
  console.log(`servidor em execucao na ${port}`);
  
})