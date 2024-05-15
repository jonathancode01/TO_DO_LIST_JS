class Todo{
    constructor(){ // aqui a gente começa iniciando as propriedades da classe
        this.totaldeTasks = document.querySelectorAll('.task').length; // atraves do queryselector a gente selciona todas as tarrefas (all) e quantos itens em cada tarefas(length)
    }
    addTask(taskText){ // aqui a gente já cria um metodo para adicionar tarefas
       // clonar template 
       let template = document.querySelector('.task').cloneNode(true);

       template.classList.remove('hide');
        // maniupular o texto 
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        let list = document.querySelector('#tasks-container');

        // inserir a lista 
        list.appendChild(template);

        // adiciona eventos as tasks
        this.AddEvents();

        this.checkTasks('add');
    }

    removeTask(task){ // aqui a gente cria um metodo de remover uma tarefa
        // JS puro
        // achar o elemento 
        let parentEl = task.parentElement;
 
        // remove da lista 
        parentEl.remove();

        this.checkTasks('remove');
    }

    completeTask(task){
        // adiciona a classe done para pode verificar se a tarefa foi concluída com a cor verde
        task.classList.add('done');
    }

    AddEvents(){
        let removeBtns = document.querySelectorAll('.fa-trash'); // selecionando todos os botoes com id ".fa-trash"
        let removeBtn = removeBtns[removeBtns.length - 1]; // pegando o ultimo botão

        let doneBtns = document.querySelectorAll('.fa-check'); // selecionando todos os botoes com id ".fa-trash"
        let doneBtn = doneBtns[doneBtns.length - 1]; // pegando o ultimo botão

        // adicionar evento de remover
        removeBtn.addEventListener('click', function(){
            todo.removeTask(this); // this = botão
        });

        // adicionar evento de completar tarefa
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this); // this = botão
        });
    }
    checkTasks(command){ // aumentando ou diminuindo as task conforme eu adiciono e removo elas, referenciando o totaldeTasks
    // não esquecer de referenciar o metodo "checkTasks" nos eventos de adicionar e remover tarefas 
        let msg = document.querySelector('#empty-task');

        // logia de adicioonar ou remover task
        if(command === 'add'){
            this.totaldeTasks += 1;
        }else if(command === 'remove'){
            this.totaldeTasks -= 1;
        }
        // checka se tem mais uma task e adiciona ou remove a classe
        if (this.totaldeTasks == 1){
            msg.classList.remove('hide');
        }else{
            msg.classList.add('hide');
        
        }
    }
}

let todo = new Todo();

// eventos

let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e){
    e.preventDefault(); // para o evento de submit do formulário

    let taskText = document.querySelector('#task');

    if(taskText.value != ''){ // se o campo de texto estiver vazio, não submete nada ('')
        todo.addTask(taskText.value);
    }

    //limpa campo de texto

    taskText.value = '';
})