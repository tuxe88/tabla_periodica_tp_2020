var camera;
var camera_atom;
var camera_atom_2;

function initCamera(){
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    var angle = -180;
    var radius = 250;

    camera_atom = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
    camera_atom.position.y = radius * Math.sin( angle );
    //camera_atom.position.z = 300;

    camera_atom_2 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera_atom_2.position.z = 450;
    camera_atom_2.position.y = radius * Math.sin( angle );


}