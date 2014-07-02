var templateMusician;
var templateTicket;
var templateImage;
var templateLink;
var templateArtist;
var nbMusicianstoCompare;
var templateMusicianApercu;
var templateGenre;

var nbGenres = 1;
var nbMucicians = 1;
var idForMusicians;
var nbTickets = 2;
var nbArtist = 1;
var nbLinks = 1;
var nbImages = 1;

$(document).ready(function() {
//masque les messages d'erreur
    $('#alertArtist').hide();
    //$('#alertMusician').hide();
    //cloner les templates
    templateTicket = $('.ticket').clone();
    templateMusician = $('.musician').clone();
    templateMusicianApercu = $('.musicianApercu').clone();
    templateImage = $('.image').clone();
    templateLink = $('.link').clone();
    templateGenre = $('.genre').clone();
    $('#links').hide();
    $('#images').hide();
    $('#musicians').hide();

    //vider les champs
    $('.musicians').empty();
    //$('#listMusicians').empty();
    $('#listMusicians').remove();
    $('.images').empty();
    $('.links').empty();
    //cloner le template d'artiste
    templateArtist = $('.artist').clone();
    //vider les artistes
    $('#artists').empty();

    //éVéNEMENTS
    $('#addTicketCategory').on('click', addTicket);
    $('#addArtist').on('click', addArtist);

    //$('#addInstrument').click(addInstrument);
});

////*********************************************************************************************************************
////*************************************GENRES*************************************************************************
////*********************************************************************************************************************
function addGenre() {
    var genre = templateGenre.clone();
    //cloner et rajouter au dom
    $(genre).clone().appendTo("#genre");
    //modifier l'id du dernier élément ajouté
    $(".genre").last().attr('data-key', nbGenres);
    //ajouter le bouton supprimer
    var btn = $('<button class="deleteGenre"><i class="ico-delete "></i>Delete</button><br/> ').appendTo($(".genre").last());
    //supprimer un ticket
    btn.on('click', deleteGenre);
    nbGenres++;
}

function deleteGenre() {
    $(this).parent().remove();
}

////*********************************************************************************************************************
////*************************************TICKETS *************************************************************************
////*********************************************************************************************************************
function addTicket() {
    var ticket = templateTicket.clone();
    //cloner et rajouter au dom
    $(ticket).clone().appendTo("#selectTicket");
    //modifier l'id du dernier élément ajouté
    $(".ticket").last().attr('id', 'ticket_' + nbTickets);
    //faire apparaître
    $(".ticket").last().removeClass('hide');
    //ajouter le bouton supprimer
    var btn = $('<button class="deleteTicket"><i class="ico-delete "></i>Supprimer</button> ').appendTo($(".ticket").last());
    //supprimer un ticket
    btn.on('click', deleteTicket);
    nbTickets++;
}

function deleteTicket() {
    $(this).parent().remove();
}

//*********************************************************************************************************************
//*************************************MUSICIEN************************************************************************
//*********************************************************************************************************************

/************************************************FONCTION****************************************************
 * Nom: addMusician
 * Description: ajouter un formulaire permettant de créer un musicien
 * **********************************************************************************************************/
function addMusician() {
    //cloner le template de musicien
    var musician = templateMusician.clone();
    //cloner et rajouter le musicien au DOM
    $(musician).clone().appendTo(".musicians");
    //modifier l'id du dernier élément ajouté
    var nextID = nbMucicians;
    $(".musician").last().attr('data-key', nextID);
    //ajouter le bouton sauver
    var btnSave = $('<button class="pull-right saveMusician"><i class="ico-save"></i>Save</button>').appendTo($(".musician").last());
    //ajouter le bouton supprimer
    var btn = $('<button class="deleteMusician pull-right"><i class="ico-delete"></i>Delete</button><div class="clearfix"></div>').appendTo($(".musician").last());
    //supprimer un musicien
    btn.on('click', deleteMusician);
    //sauvegarder un musicien
    btnSave.on('click', function() {
        saveMusician(nextID, $(this));
    });
    //incrémenter le nombre de musiciens et les id
    nbMucicians++;
}

/************************************************FONCTION****************************************************
 * Nom: deleteMusician
 * Description: supprimer le musicien en cours de création
 * **********************************************************************************************************/
function deleteMusician() {
    $(this).parent().remove();
}

/************************************************FONCTION****************************************************
 * Nom: saveMusician
 * Description: sauvegarder le musicien créé et l'afficher dans un cadre de résumé
 * @param id
 * @param bouton
 * **********************************************************************************************************/
function saveMusician(id, bouton) {
    var musicianApercu = templateMusicianApercu.clone();
    //récupérer les données du musicien
    var firstName = bouton.parent().find('input[data-key=musicianFirstName]').val();
    var lastName = bouton.parent().find('input[data-key=musicianLastName]').val();
    var sceneName = bouton.parent().find('input[data-key=musicianScenetName]').val();
    var instrument = bouton.parent().find('select[data-key=instrument]').val();
    //injecter le nom du musicien dans la ligne de résumé
    $(musicianApercu).find('span[data-key=firstName]').text(firstName + ' ');
    $(musicianApercu).find('span[data-key=lastName]').text(lastName);
    $(musicianApercu).find('span[data-key=sceneName]').text(sceneName);
    $(musicianApercu).find('span[data-key=instrument]').text(instrument);
    $(musicianApercu).attr('data-key', id);
    //$(musicianApercu).appendTo('#listMusicians');
    $(musicianApercu).insertBefore('.musicians');
    //cacher le formulaire du musicien
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'musicianApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.musicianApercu').last());
    btnEditApercu.on('click', musicianApercuEdit);
    var btnDeleteApercu = $('<button class=\'musicianApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.musicianApercu').last());
    btnDeleteApercu.on('click', musicianApercuDelete);
    $('<div class="clearfix"></div>').appendTo($('.musicianApercu').last());
}

/************************************************FONCTION****************************************************
 * Nom: editMusician
 * Description: sauvegarder le musicien édité
 * @param id 
 * @param  bouton 
 * **********************************************************************************************************/
function editMusician(id, bouton) {
    var musicianApercu = templateMusicianApercu.clone();
    //récupérer les données du musicien
    var firstName = bouton.parent().find('input[data-key=musicianFirstName]').val();
    var lastName = bouton.parent().find('input[data-key=musicianLastName]').val();
    var sceneName = bouton.parent().find('input[data-key=musicianScenetName]').val();
    var instrument = bouton.parent().find('select[data-key=instrument]').val();

    //injecter le nom du musicien dans la ligne de résumé
    $(musicianApercu).find('span[data-key=firstName]').text(firstName + ' ');
    $(musicianApercu).find('span[data-key=lastName]').text(lastName);
    $(musicianApercu).find('span[data-key=sceneName]').text(sceneName);
    $(musicianApercu).find('span[data-key=instrument]').text(instrument);
    $(musicianApercu).attr('data-key', id);
    //$(musicianApercu).appendTo('#listMusicians');
    $(musicianApercu).insertBefore('.musicians');
    //cacher le formulaire du musicien
    bouton.parent().remove();
    //ajouter les boutons supprimer et editer à la ligne de résumé ainsi que les événements liés
    var btnEditApercu = $('<button class=\'musicianApercuEdit pull-right\'><i class="ico-edit"></i></button>').appendTo($('.musicianApercu').last());
    btnEditApercu.on('click', musicianApercuEdit);
    var btnDeleteApercu = $('<button class=\'musicianApercuDelete pull-right\'><i class="ico-delete"></i></button>').appendTo($('.musicianApercu').last());
    btnDeleteApercu.on('click', musicianApercuDelete);
    $('<div class="clearfix"></div>').appendTo($('.musicianApercu').last());
}

/************************************************FONCTION****************************************************
 * Nom: musicianApercuDelete
 * Description: supprime un musicien
 * **********************************************************************************************************/
function musicianApercuDelete() {
    //récupéré l'id du musicien (résumé)
    var idMusicianEnCours = $(this).parent().attr('data-key');
    //supprimer le formulaire du musicien désiré
    $(this).parent().parent().next().find('div[data-key=' + idMusicianEnCours + ']').remove();
    //supprimer le résumé du musicien désiré
    $(this).parent().remove();
    //décrémenter le nombre de musiciens
}

/************************************************FONCTION****************************************************
 * Nom: musicianApercuEdit
 * Description: affiche le formulaire permettant d'éditer un musicien existant
 * **********************************************************************************************************/
function musicianApercuEdit() {
    //récupérer les valeurs
    var sceneName = $(this).prev().find('span[data-key=sceneName]').text();
    var lastName = $(this).prev().find('span[data-key=lastName]').text();
    var firstName = $(this).prev().find('span[data-key=firstName]').text();
    var instrument = $(this).prev().find('span[data-key=instrument]').text();

    //récupéré l'id du musicien (résumé)
    var idMusicianEnCours = $(this).parent().attr('data-key');
    //afficher le formulaire du musicien désiré
    var aEditer = templateMusician.clone();
    aEditer.find('h3').text('Edit musician');
    aEditer.find('input[data-key=musicianFirstName]').val(firstName);
    aEditer.find('input[data-key=musicianLastName]').val(lastName);
    aEditer.find('input[data-key=musicianScenetName]').val(sceneName);
    aEditer.find('select[data-key=instrument]').val(instrument);

    var btnSave = $('<button class="pull-right saveMusician"><i class="ico-save"></i>Save</button>').appendTo(aEditer);
    btnSave.on('click', function() {
        editMusician(idMusicianEnCours, $(this));
    });
    var btnCancel = $('<button class="pull-right cancelMusician"><i class="ico-cancel"></i>Cancel</button><br/>').appendTo(aEditer);
    btnCancel.on('click', function() {
        cancelEditMusician(idMusicianEnCours, $(this), sceneName, lastName, firstName, instrument);
    });
    //$(this).parent().parent().next().find('div[data-key=' + idMusicianAAfficher + ']');
    aEditer.insertAfter('div[data-key=' + idMusicianEnCours + ']');
    //supprimer
    $(this).parent().remove();

}

/************************************************FONCTION****************************************************
 * Nom: cancelEditMusician
 * Description: annuler l'édition en cours et rafficher l'anciene version
 * @param idMusicianEnCours
 * @param bouton
 * @param lastName
 * @param firstName
 * @param instrument
 * @param sceneName
 * **********************************************************************************************************/
function cancelEditMusician(idMusicianEnCours, bouton, sceneName, lastName, firstName, instrument) {
    var musicianApercu = templateMusicianApercu.clone();
    //injecter le nom du musicien dans la ligne de résumé
    $(musicianApercu).find('span[data-key=firstName]').text(firstName + ' ');
    $(musicianApercu).find('span[data-key=lastName]').text(lastName);
    $(musicianApercu).find('span[data-key=sceneName]').text(sceneName);
    $(musicianApercu).find('span[data-key=instrument]').text(instrument);
    $(musicianApercu).attr('data-key', idMusicianEnCours);
    //$(musicianApercu).appendTo('#listMusicians');
    $(musicianApercu).insertBefore('.musicians');
    bouton.parent().remove();
}

//*********************************************************************************************************************
//*************************************IMAGE************************************************************************
//*********************************************************************************************************************
function addImage() {
    //cloner le template
    var image = templateImage.clone();
    //cloner et rajouter au dom
    $(image).clone().appendTo(".images");
    //incrémenter l'id du prochain élément
    var nextId = nbImages;
    //modifier l'id du dernier élément ajouté
    $(".image").last().attr('id', 'image_' + nextId);
    //ajouter le bouton sauver
    var btnSave = $('<button class="pull-right saveMusician"><i class="ico-save"></i>Save</button>').appendTo($(".image").last());
    //ajouter le bouton supprimer
    var btn = $('<button class="deleteMusician pull-right"><i class="ico-delete"></i>Delete</button><div class="clearfix"></div>').appendTo($(".image").last());
    //supprimer une image
    $('.deleteImage').click(deleteImage);
    ////sauvegarder une image
    btnSave.on('click', function() {
        saveImage(nextID, $(this));
    });
     //incrémenter le nombre d'éléments
    nbImages++;
}

function deleteImage() {
    $(this).parent().remove();
}

function saveImage(id, bouton){
    
}

//*********************************************************************************************************************
//*************************************LINKS************************************************************************
//*********************************************************************************************************************
function addLink() {
    var image = templateLink.clone();
    //récupérer le nombre de ticket actuellement visibles
    var nb = $(".link").length;
    //incrémenter l'id du prochain musicien
    var nextId = nb + 1;
    //cloner et rajouter au dom
    $(image).clone().appendTo(".links");
    //modifier l'id du dernier élément ajouté
    $(".link").last().attr('id', 'link_' + nextId);
    //supprimer un lien
    $('.deleteLink').click(deleteLink);
}

function deleteLink() {
    $(this).parent().remove();
}

//*********************************************************************************************************************
//*************************************ARTIST************************************************************************
//*********************************************************************************************************************
function addArtist() {
    if ($('#artists').is(':empty')) {
        var artist = templateArtist.clone();
        //récupérer le nombre de ticket actuellement visibles
        var nbArtists = $(".artist").length;
        //incrémenter l'id du prochain musicien
        var nextId = nbArtists + 1;
        //cloner et rajouter au dom
        $(artist).clone().appendTo("#artists");
        //modifier l'id du dernier élément ajouté
        $(".artist").last().attr('id', 'artist_' + nextId);
        //ajouter le bouton de sauvegarde intermédiaire
        var btnSave = $('<button class="pull-right saveArtist"><i class="ico-save"></i>Save Artist</button>').appendTo('fieldset[id=infosArtist]');
        btnSave.on('click', saveArtist);
        //supprimer un musicien
        $('.deleteArtist').click(deleteArtist);
        //ajouter une image
        $('#addImage').on('click', addImage);
        //ajouter un musicien
        $('#addMusician').click(addMusician);
        //ajouter un lien
        $('#addLink').on('click', addLink);
        //ajouter un genre
        $('#addGenre').on('click', addGenre);
    } else {
        $('#alertArtist').toggle(1000).delay(2000).toggle(1000);
    }
}

function saveArtist() {
    //ajouter les champs facultatifs
    $('#links').show();
    $('#images').show();
    $('#musicians').show();
    $('.saveArtist').remove();
    $('<div class="input-group"><p class="pull-left">Short description:</p><textarea name="shortDescription" cols="40" rows="3" id="shortDescription"></textarea></div>').appendTo('fieldset[id=infosArtist]');
    $('<div class="input-group"><p class="pull-left">Complete description:</p><textarea name="completeDescription" cols="40" rows="4" id="completeDescription"></textarea></div>').appendTo('fieldset[id=infosArtist]');
    //ajouter le bouton de sauvegarde
    var btnSavecomplete = $('<button class="pull-right saveArtistComplete"><i class="ico-save"></i>Save Artist</button>').appendTo('.artist');
    btnSavecomplete.on('click', saveArtistComplete);
    var btnDeleteArtist = $('<button class="pull-right deleteArtist"><i class="ico-delete"></i>Delete Artist</button><br/>').appendTo('.artist');
    btnDeleteArtist.on('click', deleteArtist);
}
function saveArtistComplete() {

}

function deleteArtist() {
    $(this).parent().remove();
}

//*********************************************************************************************************************
//*************************************INSTRUMENt**********************************************************************
//*********************************************************************************************************************
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
//}
//
//function deleteInstrument() {
//    $(this).parent().remove();
//}