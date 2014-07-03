//***************************************************************************//
//*******************          global variables       ***********************//
//***************************************************************************//
var ONLINE;
//***************************************************************************//
//*******************          API RockIT             ***********************//
//***************************************************************************//

var ROOTIT            = "http://pingouin.heig-vd.ch/rockit/v1/";

var CHECKOUT          = "http://pingouin.heig-vd.ch/rockit/v1/auth-check";
var LOGIN             = "http://pingouin.heig-vd.ch/rockit/v1/login";
var LOGOUT            = "http://pingouin.heig-vd.ch/rockit/v1/logout";

var AUTH_MANAGER_DE   = {"email":"chris@chris.ch","password":"chris"};
var AUTH_MANAGER_FR   = {"email":"matou@matou.ch","password":"matou"};
var AUTH_STAFF_DE     = {"email":"de@staff.ch","password":"staff"};
var AUTH_STAFF_FR     = {"email":"fr@staff.ch","password":"staff"};
   
var SEARCH            = "http://pingouin.heig-vd.ch/rockit/v1/search";
var ARTISTS           = "http://pingouin.heig-vd.ch/rockit/v1/artists";
var EVENTS            = "http://pingouin.heig-vd.ch/rockit/v1/events";

var EVENT_TYPES       = "http://pingouin.heig-vd.ch/rockit/v1/event-types";
var GENRES            = "http://pingouin.heig-vd.ch/rockit/v1/genres";
var GIFTS             = "http://pingouin.heig-vd.ch/rockit/v1/gifts";
var ILLUS             = "http://pingouin.heig-vd.ch/rockit/v1/illustrations";
var IMAGES            = "http://pingouin.heig-vd.ch/rockit/v1/images";

var INSTRUS           = "http://pingouin.heig-vd.ch/rockit/v1/instruments";
var LINKS             = "http://pingouin.heig-vd.ch/rockit/v1/links";

var MUSICIANS         = "http://pingouin.heig-vd.ch/rockit/v1/musicians";

var PERFORMERS        = "http://pingouin.heig-vd.ch/rockit/v1/performers";
var REPRESENTERS        = "http://pingouin.heig-vd.ch/rockit/v1/representers";

var TICKETS           = "http://pingouin.heig-vd.ch/rockit/v1/tickets";
var TICKET_CATS       = "http://pingouin.heig-vd.ch/rockit/v1/ticket-categories";


var LANGSDISPO        = "http://pingouin.heig-vd.ch/rockit/v1/langs";
var LANGS             = "http://pingouin.heig-vd.ch/rockit/v1/trads";


//     /!\ local links
var ONEARTIST                =   "../php/services/oneArtist.json";
var GENRESLOCAL                =   "../php/services/genres.json";
var URLSERVEUR_EVENTsuccess =   "../php/services/EventCollectionSUCCESS.php";
var URLSERVEURfail =            "../php/services/EventCollectionFAIL.php";
var URLSERVEURerror =           "../php/services/EventCollectionERROR.php";

var URLSERVEURinstruSuccess =   "../php/services/InstruSuccess.php";
var URLSERVEURinstruError =     "../php/services/InstruError.php";


var URLSERVEURMusicianSuccess = "../php/services/MusiciansSuccess.php";
var URLSERVEURMusicianError =   "../php/services/MusicianError.php";



/***************************** 
 ******variables globales create event****
 *****************************/
//templates
var templateMusician;
var templateTicket;
var templateImage;
var templateImageApercu;
var templateLink;
var templateLinkApercu;
var templateArtist;
var templateArtistApercu;
var templateMusicianApercu;
var templateGenre;
//comptage d'éléments
var nbGenres = 1;
var nbMucicians = 1;
var idForMusicians;
var nbTickets = 2;
var nbArtist = 1;
var nbLinks = 1;
var nbImages = 1;
var nbArtists = 1;









    