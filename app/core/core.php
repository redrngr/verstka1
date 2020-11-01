<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':
        init();
        break;
    case 'selectItem':
        selectItem();
        break;
    case 'updateItems':
        updateItems();
        break;
    case 'newItems':
        newItems();
        break;
}
?>