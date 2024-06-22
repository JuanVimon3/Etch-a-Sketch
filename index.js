let fillGrid = (size) => {
    let container = document.getElementById('container');
    let itemSize = Math.floor(100/size)
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let item = document.createElement('div');
            item.classList.add('item');

            item.style.width = `${itemSize}%`
            item.style.height = `${itemSize}%`

            item.addEventListener('mouseover', function() {
                item.classList.add('hovered')
            })

            container.appendChild(item);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fillGrid(16)
});

function restart () {
    const newSize = window.prompt("Please input a new size between 1 and 100:")
    const newSizeInt = parseInt(newSize);
    if(newSizeInt > 0 &&  newSizeInt <= 100){
        const container = document.getElementById("container");
        container.innerHTML = '';
        fillGrid(newSizeInt)
    }else{
        alert("Please enter a valid size between 0 and 100")
    }
    
}

