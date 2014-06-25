<?php
    /*
    |--------------------------------------------------------------------------
    | Regroupe tout les vues en un seul fichier JavaScript
    |--------------------------------------------------------------------------
    |
    */
    $templates = array();
    foreach (glob("*.html") as $filename) {
        $viewName = str_ireplace('.html', '', $filename);
        $content = file_get_contents($filename);
        $templates[$viewName] = preg_replace('/\s\s+/', ' ', $content);
    }
    $json = json_encode($templates);

    header("Content-type: application/javascript");
?>
var templates = <?php echo $json;?>;