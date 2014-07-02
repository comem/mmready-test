<?php
    // constantes
    define('WS_HORAIRE', 'http://pingouin.heig-vd.ch/rockit/v1%s');
    // param�tres
    $param = isset($_REQUEST['param']) ? $_REQUEST['param'] : '/';
    
    // génération de la bonne url
    $url = sprintf(WS_HORAIRE, $param);
    // requête au Web Service et affichage
    header('content-type: text/xml');
    echo file_get_contents($url);