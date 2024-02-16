const form = document.getElementById('myForm');
const fieldA = document.getElementById('fieldA');
const fieldB = document.getElementById('fieldB');
const message = document.querySelector('.message');

form.addEventListener('submit',function (e){
    e.preventDefault();
    const messageSucess = `é valido,<br/> o primeiro campo com valor: <b>${fieldA.value}</b> é menor do que o segundo campo com o valor: <b>${fieldB.value}</b>.`
    const messageError = `nao é valido,<br/> o primeiro campo com valor: <b>${fieldA.value}</b> nao é menor do que o segundo campo com o valor: <b>${fieldB.value}</b>.`
    if (fieldB.value < fieldA.value) {
        const conteinerMensagemSucesso = document.querySelector('.message'); 
        conteinerMensagemSucesso.innerHTML = messageSucess;
        conteinerMensagemSucesso.style.color = 'green';
        conteinerMensagemSucesso.style.display = 'block'
        fieldA.value= '';
        fieldB.value= '';
    } else {
        const conteinerMensagemSucesso = document.querySelector('.message'); 
        conteinerMensagemSucesso.innerHTML = messageError;
        conteinerMensagemSucesso.style.color = 'red';
        conteinerMensagemSucesso.style.display = 'block'
        fieldA.value = '';
        fieldB.value = '';
    }
});