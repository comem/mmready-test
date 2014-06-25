<?php
    // constantes
    define('WS_HORAIRE', 'http://services.heig-vd.ch/ComemSchedule/ScheduleService.ashx/GetSchedule?CourseId=%s&ClassId=%s');
    // paramètres
    $classe = isset($_REQUEST['classe']) ? $_REQUEST['classe'] : 'MIT39';
    $cours  = isset($_REQUEST['cours']) ? $_REQUEST['cours'] : 'TechWeb';
    // génération de la bonne url
    $url = sprintf(WS_HORAIRE, $cours, $classe);
    // requête au Web Service et affichage
    header('content-type: text/xml');
    echo file_get_contents($url);