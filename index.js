document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('container');
    let rows = 16;
    let columns = 16;
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            let item = document.createElement('div');
            item.classList.add('item');

            item.addEventListener('mouseover', function() {
                item.classList.add('hovered')
            })

            container.appendChild(item);
        }
    }
});

function restart () {
    const newSize = window.prompt("Please input a new size between 1 and 100:")
    const newSizeInt = parseInt(newSize);
    console.log(newSizeInt);
    const container = document.getElementById("container");
    container.innerHTML = '';
    const newRows = newSize;
    const newColumns = newSize;

    if (newSize <= 100){
        for(let i = 0; i < newRows; i++){
            for(let j = 0; j < newColumns; j++){
                let newItem = document.createElement('div');
                newItem.classList.add('newItem')
    
                newItem.addEventListener('mouseover', function(){
                    newItem.classList.add('hovered')
                })
    
                container.appendChild(newItem)
            }
        } 
    }else{
        restart()
    }
}

// borrar el contenido de los hijos de container 
//crear nueva funciòn con la lògica del nuevo grid redimensionado