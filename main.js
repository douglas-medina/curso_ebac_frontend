$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()

        const adicionarTarefa = $('#nova-tarefa').val()
        const novaTarefa = $('<li></li>')

        $(`<a>${adicionarTarefa}</a>`).appendTo(novaTarefa);
        novaTarefa.appendTo('ul')
        $('#nova-tarefa').val('')
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('feito')
    })
})