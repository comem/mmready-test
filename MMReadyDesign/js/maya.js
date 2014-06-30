var templateTicket;
var templateInstrument;
var templateMusician;
var templateLink;

$(document).ready(function() {
    templateMusician = $('.musician').clone();
    $('#musicians').empty();
    templateTicket = $(".ticket").clone();
    templateInstrument = $(".instrument").clone();
    templateImage = $('.image').clone();
    $('#images').empty();
    templateLink = $('.link').clone();
    $('#links').empty();
    $('#addTicketCategory').on('click', addTicket);
    $('#addMusician').click(addMusician);
    //$('#addInstrument').click(addInstrument);
    $('#addImage').click(addImage);
    $('#addLink').click(addLink);
});

////***********************************************************************************
////*************************************TICKETS***************************************
////***********************************************************************************
function addTicket() {
    var ticket = templateTicket;
    //récupérer le nombre de ticket actuellement visibles
    var nbTickets = $(".ticket").length;
    //incrémenter l'id du prochain ticket
    var nextId = nbTickets + 1;
    //cloner et rajouter au dom
    $(ticket).clone().appendTo("#selectTicket");
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
    var musician = templateMusician.clone();
    $(musician).appendTo("#musicians");
    //modifier l'id du dernier élément ajouté
    $(".musician").last().attr('id', 'musician_' + nextId);
    //faire apparaître
    $(".musician").last().removeClass('hide');
    //supprimer un musicien
    $('.deleteMusician').click(deleteMusician);
    //ajout d'instruments
    $('.addInstrument').click(addInstrument);
}

function deleteMusician() {
    $(this).parent().remove();
}

//***********************************************************************************
//*************************************INSTRUMENt************************************
//***********************************************************************************
//function addInstrument() {
//    var instrument = templateInstrument.clone();
//    //récupérer le nombre de ticket actuellement visibles
//    var nbInstruments = $(".instrument").length;
//    //incrémenter l'id du prochain ticket
//    var nextId = nbInstruments + 1;
//
//    //cloner et rajouter au dom
//    $(instrument).clone().appendTo(".instruments");
//    //modifier l'id du dernier élément ajouté
//    $(".instrument").last().attr('id', 'instrument_' + nextId);
//    //faire apparaître
//    $(".instrument").last().removeClass('hide');
//
//    //ajouter le bouton supprimer
//    $('<button class="pull-right deleteInstrument"><i class="ico-delete"></i>Delete</button>').appendTo($(".instrument").last());
//    //supprimer un instrument
//    $('.deleteInstrument').on('click', deleteInstrument);
//}
//
//function deleteInstrument() {
//    $(this).parent().remove();
//}

//***********************************************************************************
//*************************************IMAGES**************************************
//***********************************************************************************
function addImage() {
    //récupérer le nombre de ticket actuellement visibles
    var nbImage = $(".image").length;
    //incrémenter l'id du prochain ticket
    var nextId = nbImage + 1;
    //cloner et rajouter au dom
    var image = templateImage.clone();
    $(image).appendTo("#images");
    //modifier l'id du dernier élément ajouté
    $(".image").last().attr('id', 'image_' + nextId);
    //faire apparaître
    $(".image").last().removeClass('hide');
    //supprimer un musicien
    $('.deleteImage').click(deleteMusician);
}

function deleteMusician() {
    $(this).parent().remove();
}
//***********************************************************************************
//*************************************LINKS*****************************************
//***********************************************************************************
function addLink() {
    //récupérer le nombre de ticket actuellement visibles
    var nbLink = $(".link").length;
    //incrémenter l'id du prochain lien
    var nextId = nbLink + 1;
    //cloner et rajouter au dom
    var image = templateLink.clone();
    $(image).appendTo("#links");
    //modifier l'id du dernier élément ajouté
    $(".link").last().attr('id', 'link_' + nextId);
    //faire apparaître
    $(".link").last().removeClass('hide');
    //supprimer un lien
    $('.deleteLink').click(deleteMusician);
}

function deleteMusician() {
    $(this).parent().remove();
}