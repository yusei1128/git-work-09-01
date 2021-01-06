
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const button = document.querySelector('.list');


 addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
 const items = document.querySelectorAll('#list li')
 const newItem = document.createElement('li');
 newItem.textContent= 'アイテム' + (list.children.length + 1);
                                  //　↑　↑　lこの３単語だけでループはできる（＋１を加えると完成）
　 list.appendChild(newItem)



})

 removeButton.addEventListener('click',(event) => {
    list.removeChild(list.lastElementChild) // リストの最初の「アイテム1」が消える
    
})

