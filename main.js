// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/
let list = $('.list')
function render () {
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
    data.results.forEach(item => {
        list.append(`
        <li>${item.name}</li>
        <div class="img" style ="background: url(${item.image}) no-repeat"></div>
        `)
    });
})
}
render()




/* Задание №1.2.
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3.
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните
в локальном сервере db.json, в массиве под
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/
// let API = 'http://localhost:3000/characters'
    let appCharacters = () => { 
    fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(data => {
            let result = data.results
            fetch('http://localhost:3000/characters', {
            method: "POST",
            headers: {
            "Content-Type" : "application/json",
            },
            body : JSON.stringify(data)
        });
    // console.log(characters);
})
};
appCharacters()



/* Задание №1.4.
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые
вы получили (стянули) с db.json.
let block2 = $('.block2');
let list2 = $('.list2');
*/

let list2 = $('.list2');
// let block2 = $(".block-2 ")

let addBlock = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach(item => {
                list2.append(`
        <li>${item.name}</li> <img src = "${item.image}"">
        `)
          });
        })
}
addBlock()


//  Задание №1.5.
// К именам добавьте картинки персонажей.
// В итоге у вас должна получиться точная копия первых двух тасков.
// Отличие которых лишь в базе данных.
