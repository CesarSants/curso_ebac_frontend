$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000',{
        placeholder: '+ DDD'
    })
    $('#cep').mask('00.000.000')
    $('#cpf').mask('000.000.000-00')

    $('form').submit(function(e){
        e.preventDefault();
        $('#nome').val('');
        $('#telefone').val('');
        $('#cep').val('');
        $('#cpf').val('');
        $('#endereco').val('');
        $('#email').val('');
    })
})

