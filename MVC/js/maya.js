var templateMusician;
var templateTicket;
var templateImage;
var templateLink;

$(document).ready(function() {
    
    //musiciens
    templateMusician = $('.musician').clone();
    $('#addMusician').click(addMusician);
    $('.musicians').empty();
    //ticket
    templateTicket = $('.ticket').clone();
    $('#addTicketCategory').on('click', addTicket);
    //image
    templateImage = $('.image').clone();
    $('#addImage').on('click', addImage);
    $('.images').empty();
    //link
    templateLink = $('.link').clone();
    $('#addLink').on('click', addLink);
    $('.links').empty();
    //$('#addInstrument').click(addInstrument);

});

////***********************************************************************************
////*************************************TICKETS***************************************
////***********************************************************************************
function addTicket() {
    var ticket = templateTicket.clone();
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
    var musician=templateMusician.clone();
    //récupérer le nombre de ticket actuellement visibles
    var nbMusicians = $(".musician").length;
    //incrémenter l'id du prochain musicien
    var nextId = nbMusicians + 1;
    //cloner et rajouter au dom
    $(musician).clone().appendTo(".musicians");
    //modifier l'id du dernier élément ajouté
    $(".musician").last().attr('id', 'musician_' + nextId);
    //supprimer un musicien
    $('.deleteMusician').click(deleteMusician);
    //sauvegarder un musicien
    $('.saveMusician').click(saveMusician);

}

function deleteMusician() {
    $(this).parent().remove();
}
function saveMusician() {
    var firstName = $(this).parent().find('input[data-key=musicianFirstName]').val();
    var lastName = $(this).parent().find('input[data-key=musicianLastName]').val();
    var sceneName = $(this).parent().find('input[data-key=musicianScenetName]').val();
    alert(firstName);
    alert(lastName);
}
//***********************************************************************************
//*************************************IMAGE**************************************
//***********************************************************************************
function addImage() {
    var image=templateImage.clone();
    //récupérer le nombre de ticket actuellement visibles
    var nb = $(".image").length;
    //incrémenter l'id du prochain musicien
    var nextId = nb + 1;
    //cloner et rajouter au dom
    $(image).clone().appendTo(".images");
    //modifier l'id du dernier élément ajouté
    $(".image").last().attr('id', 'image_' + nextId);
    
    //supprimer un musicien
    $('.deleteImage').click(deleteImage);
}

function deleteImage() {
    $(this).parent().remove();
}

//***********************************************************************************
//*************************************LINKS**************************************
//***********************************************************************************
function addLink() {
    var image=templateLink.clone();
    //récupérer le nombre de ticket actuellement visibles
    var nb = $(".link").length;
    //incrémenter l'id du prochain musicien
    var nextId = nb + 1;
    //cloner et rajouter au dom
    $(image).clone().appendTo(".links");
    //modifier l'id du dernier élément ajouté
    $(".link").last().attr('id', 'link_' + nextId);
    
    //supprimer un musicien
    $('.deleteLink').click(deleteLink);

}

function deleteLink() {
    $(this).parent().remove();
}


//***********************************************************************************
//*************************************INSTRUMENt************************************
//***********************************************************************************
//function addInstrument() {
//    //récupérer le nombre de ticket actuellement visibles
//    var nbInstruments = $(".instrument").length;
//    //incrémenter l'id du prochain ticket
//    var nextId = nbInstruments + 1;
//    //cloner et rajouter au dom
//    $(".instrument").first().clone().appendTo("#instruments");
//    //modifier l'id du dernier élément ajouté
//    $(".instrument").last().attr('id', 'instrument_' + nextId);
//    //faire apparaître
//    $(".instrument").last().removeClass('hide');
//    //supprimer un musicien
//    $('.deleteInstrument').click(deleteInstrument);
//
//}
//
//function deleteInstrument() {
//    $(this).parent().remove();
//}
