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
    //affecter cet id à l'élément à créer
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
    //incrémenter le nombre de musiciens
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