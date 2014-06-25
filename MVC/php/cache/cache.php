<?php
    /* CACHE CONFIG */
    $cacheVersion = '1.0';
    // Les chemins sont "relatifs" au cache manifest
    $dirToCache = array('../css/', '../js/app/');

    /**
     * Retourne, sous la forme d'un tableau, le chemin relatif de tous les
     * fichiers d'un rÃ©pertoire (rÃ©cursivement)
     *
     * @param string $dir
     * @return array
     */
    function getAllRelUrl($dir) {
        $dirIterator = new RecursiveDirectoryIterator($dir);
        $fileIterator = new RecursiveIteratorIterator($dirIterator);
        $files = array();
        foreach ($fileIterator as $file) {
            if ($file->isFile()) {
                $files[] = str_replace('\\', '/', $file->getPathname());
            }
        }
        return $files;
    }

    // rÃ©cupÃ¨re le listing des fichiers des rÃ©pertoires Ã  mettre en cache
    $files = array();
    foreach ($dirToCache as $path) {
        $files = array_merge($files, getAllRelUrl($path));
    }
    // content-type header pour les cache manifest
    // Peut aussi se configurer via APACHe (cf. fichier .htaccess)
    header('Content-type: text/cache-manifest');
?>
CACHE MANIFEST
# cache version <?php echo $cacheVersion; ?>

CACHE:
<?php
    foreach ($files as $file) {
        echo $file . "\n";
    }
?>

NETWORK:
*
    
    
    
   