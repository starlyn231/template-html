const cargarPost =document.getElementById('cargar').addEventListener('click', cargarAPI);

function cargarAPI(){

    //crear el objeto
    const xhr = new XMLHttpRequest();
 //Abril conexion
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
//cargar y leer Datos
    xhr.onload = function(){

        if(this.status === 200 ){
            const respuesta= JSON.parse(this.responseText);
   let contenido;
   respuesta.forEach(function(post) {
            console.log(post);
       contenido += `
       <h3> ${post.title} </h3>
       <p>${post.body} </p>
        <p>${post.id} </p>
       `;

   });

   document.getElementById('listado').innerHTML=contenido;

        }

}

        //enviar conexion
        xhr.send();

}