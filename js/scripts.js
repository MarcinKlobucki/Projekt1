var list = document.getElementById('list'),
      add = document.getElementById('addElem');
        itemsByTagName = document.getElementsByTagName('li');

add.addEventListener('click', function(e) {

  list.innerHTML += '<li>item  + itemsByTagName.lenght</li>';

  console.log(itemsByTagName);

});
