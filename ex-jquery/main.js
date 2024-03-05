const tarefas = [];

$(document).ready(function() {
    $("#botao-adicionar").click(function(e) {
        e.preventDefault();
        let taskInput = $("#tarefa-nova")[0];
        const newTask = $("#tarefa-nova").val();

        if(tarefas.includes(newTask)) {
            taskInput.setCustomValidity('Esta tarefa já existe!');
            taskInput.reportValidity();
        }

        else if (newTask == ""){
            taskInput.setCustomValidity('Adicione uma tarefa!');
            taskInput.reportValidity();
        }

        else{
            $("#taskList").append("<li>" + newTask + " <button class='delete-task'>Deletar</button></li>");
            tarefas.push(newTask)
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