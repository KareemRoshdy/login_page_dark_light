let sw = document.querySelector('.sw');
let bol = document.querySelector('.bol');

sw.onclick= () =>{
    bol.classList.toggle('active');
    document.body.classList.toggle('active');
}