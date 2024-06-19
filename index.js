document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('container');
    let rows = 16;
    let columns = 16;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            let item = document.createElement('div');
            item.classList.add('item');
            container.appendChild(item);
        }
    }
});
