const introduceTarea=document.getElementById("introduceTarea");
const enviar=document.getElementById("enviar");
const limpiar=document.getElementById("limpiar");
const listadoTareas=document.getElementById("tareasARealizar");

//envento del boton enviar
enviar.addEventListener("click", function(event) {
    if (introduceTarea.value === "") {
        alert("Debe introducir alguna tarea");
    }else{
        const tareaARealizar = document.createElement("div");
        tareaARealizar.style.width = "40%";
        tareaARealizar.style.margin = "0 auto";
        tareaARealizar.style.backgroundColor = "rgb(29, 29, 29)";
        tareaARealizar.style.textAlign = "center";
        tareaARealizar.style.color = "white";
        tareaARealizar.style.borderRadius = "13px";
        tareaARealizar.style.border = "1px solid black";
        tareaARealizar.style.marginTop = "13px";
        listadoTareas.appendChild(tareaARealizar);

        const tarea = document.createElement("p");
        tarea.style.display = "inline-block";
        
        const eliminar = document.createElement("button");
        eliminar.textContent="Eliminar tarea";
        eliminar.style.borderRadius = "5px"
        eliminar.style.border = "1px solid black"
        eliminar.style.float = "right";
        eliminar.style.marginTop = "16px";
        eliminar.style.marginRight = "10px";

        const check = document.createElement("input");
        check.type = "checkbox";
        check.style.position = "relative";
        check.style.top = "2px"
        check.style.right = "4px"

        tarea.textContent = introduceTarea.value;
        tareaARealizar.appendChild(check);
        tareaARealizar.appendChild(tarea);
        tareaARealizar.appendChild(eliminar);

        introduceTarea.value="";

        eliminar.addEventListener("click", function(event) {
            tareaARealizar.innerHTML="";
            tareaARealizar.style.border="none";
        }); 

        check.addEventListener("change", function(event) {
            if(check.checked){
                tarea.style.textDecoration = "line-through";
                tarea.style.color = "grey";
            }else{
                tarea.style.textDecoration = "none";
                tarea.style.color = "white";
            }
        }); 
    }
});

//evento del boton limpiar
limpiar.addEventListener("click", function(event) {
    listadoTareas.innerHTML="";
});

//funcion para ocultar el div listadoTareas cuando no hay ninguna tarea
/*function ocultar(){
    if(listadoTareas.children.length === 0){
        listadoTareas.style.display = "none";
    }else{
        listadoTareas.style.display = "block";
    }
}*/