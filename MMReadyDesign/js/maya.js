$(document).ready(function() {
    $('#addTicketCategory').on('click', addTicket);
    $('#addMusician').click(addMusician);
    $('#addInstrument').click(addInstrument);

});

////***********************************************************************************
////*************************************TICKETS***************************************
////***********************************************************************************
function addTicket() {
    //récupérer le nombre de ticket actuellement visibles
    var nbTickets = $(".ticket").length;
    //incrémenter l'id du prochain ticket
    var nextId = nbTickets + 1;
    //cloner et rajouter au dom
    $(".ticket").first().clone().appendTo("#selectTicket");
    //modifier l'id du dernier élément ajouté
    $(".ticket").last().attr('id', 'ticket_' + nextId);
    //faire apparaître
    $(".ticket").last().removeClass('hide');
    //ajouter le bouton supprimer
    $('<button class="deleteTicket"><i class="ico-delete "></i>Supprimer</button> ').appendTo($(".ticket").last());
    //supprimer un ticket
    $('.deleteTicket').on('click', deleteTicket);
}

function deleteTicket() {
    $(this).parent().remove();
}

//***********************************************************************************
//*************************************MUSICIEN**************************************
//***********************************************************************************
function addMusician() {
    //récupérer le nombre de ticket actuellement visibles
    var nbMusicians = $(".musician").length;
    //incrémenter l'id du prochain ticket
    var nextId = nbMusicians + 1;
    //cloner et rajouter au dom
    $(".musician").first().clone().appendTo("#musicians");
    //modifier l'id du dernier élément ajouté
    $(".musician").last().attr('id', 'musician_' + nextId);
    //faire apparaître
    $(".musician").last().removeClass('hide');
    //supprimer un musicien
    $('.deleteMusician').click(deleteMusician);

}

function deleteMusician() {
    $(this).parent().remove();
}

//***********************************************************************************
//*************************************INSTRUMENt************************************
//***********************************************************************************
function addInstrument() {
    //récupérer le nombre de ticket actuellement visibles
    var nbInstruments = $(".instrument").length;
    //incrémenter l'id du prochain ticket
    var nextId = nbInstruments + 1;
    //cloner et rajouter au dom
    $(".instrument").first().clone().appendTo("#instruments");
    //modifier l'id du dernier élément ajouté
    $(".instrument").last().attr('id', 'instrument_' + nextId);
    //faire apparaître
    $(".instrument").last().removeClass('hide');
    //supprimer un musicien
    $('.deleteInstrument').click(deleteInstrument);

}

function deleteInstrument() {
    $(this).parent().remove();
}
