const server = require("./src/server");

const { conn } = require("./src/DB");


const PORT = 3001;
<<<<<<< HEAD
 
  conn.sync({ force: true }).then(() => { 
}).catch(error => console.error(error))
    
    server.listen(PORT, () => {
      
      console.log(`Server listening on port ${PORT}`);
})
=======

conn
  .sync({ alter: true })
  .then(() => {})
  .catch((error) => console.error(error));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
>>>>>>> develop
