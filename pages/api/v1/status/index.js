 function status (request, response) {
  response.status(200).json({ chave: "aplicação funcionando"});
 }

 export default status;