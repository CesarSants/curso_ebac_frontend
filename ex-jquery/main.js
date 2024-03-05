const tarefas = [];

$(document).ready(function() {
    $("#botao-adicionar").click(function(e) {
        e.preventDefault();
        const newTask = $("#tarefa-nova").val();

        if(tarefas.includes(newTask.value)) {
            alert(`A tarefa: ${newTask.value} ja foi inserida.`);
        }

        else if (newTask == ""){
            alert('adicione uma tarefa');
        }

        else{
            $("#taskList").append("<li>" + newTask + " <button class='delete-task'>Deletar</button></li>");
            $("#tarefa-nova").val("");
        }
    });

    $(document).on("click", ".delete-task", function() {
        $(this).parent().remove();

    });

    $(document).on("click", "li", function() {
        $(this).toggleClass("linhaNoMeio");
    });
});

/*const campo1 = document.getElementById('tarefa-nova');
    campo1.setCustomValidity('Adicione uma tarefa nova');*/