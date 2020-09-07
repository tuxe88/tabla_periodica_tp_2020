// Create an empty scene
var scene_table;
var scene_atom_details;
var scene_atom_details2;

var actual_scene;

//inicializo la app en la tabla
function initScenes() {
    scene_table = new THREE.Scene();
    scene_atom_details = new THREE.Scene();

    scene_atom_details2 = new THREE.Scene();

    actual_scene = scene_table;
}

function changeScene(scene){

    $('#container').fadeOut(500);
    $('#loading-screen').fadeIn(2500);
    $('#loading-screen').fadeOut(2500);
    $('#container_atomic_detail').fadeIn(500);
    actual_scene = scene;
}

function loadDetailScene(numeroElementoDetalle){
    let numeroElemento = numeroElementoDetalle/5+1;
    console.log("Mostrando informacion del atomo de "+table[numeroElementoDetalle + 0]);
    console.log("Selected: "+numeroElementoDetalle/5);
    updateAtom(numeroElemento);
    $('#container').fadeOut(1000);
    $('#container_atomic_detail').fadeIn(1000);
    $('#bbb').fadeIn(2000);
    $('#leyenda').fadeIn(2000);
    actual_scene = scene_atom_details2;
}

function loadTableScene(){
    $('#container_atomic_detail').fadeOut(1000);
    $('#bbb').fadeOut(1000);
    $('#container').fadeIn(1000);
    actual_scene = scene_table;
}


