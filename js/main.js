/**
 * El tema de los colores por rfgupo
 *
 * carga de menos tiempo
 *
 *  elemento mas rapido
 * */

/**
 *
 *
 * -colores segun tipo de elemento
 -tamaño de los electrones
 -arreglo asociativo por simbolo de elemento
 -velocidad de abrir elemento
 -posicion de los electrones
 */

let targets = {simple: [], table: []};
var planet;
var atom = {};
var atoms = [];
var selectedActual;
var selectedAnterior;
var openedElement = false;

var clock = new THREE.Clock();

init();
animate();

function init() {

    initHtml();
    initCamera();
    initScenes();
    initObjects();
    initRenderers();
    initTrackbarControls();

    //addClickListeners();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    //addClickListener(targets.sphere, 'sphere');
    //addClickListener(targets.helix, 'helix');
    //addClickListener(targets.grid, 'grid');

}




function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
    renderAtomStructure();
    renderAtomStructure2();

}

function render() {

    renderer.render(scene_table, camera);

}

function renderAtomStructure() {

    atomic_renderer.render(scene_atom_details, camera_atom);

}


function renderAtomStructure2() {

    atomic_renderer2.render(scene_atom_details2, camera_atom_2);

}

// Render Loop
var renderAtomStructure = function () {
    requestAnimationFrame( renderAtomStructure );

    //nucleus.rotation.x += 0.01;
    //nucleus.rotation.y += 0.01;
    /*var electron1 = scene_atom_details.getObjectByName('ele1');
    var electron2 = scene_atom_details.getObjectByName('ele2');
    var electron3 = scene_atom_details.getObjectByName('ele3');
    var electron4 = scene_atom_details.getObjectByName('ele4');

    var t_s = clock.getElapsedTime();
    var speed_s = 2;
    var offset_s = 1.5 + clock.getElapsedTime();

    var t_p = clock.getElapsedTime();
    var speed_p = 1;
    var offset_p = 0.75 + clock.getElapsedTime();

    var t_d = clock.getElapsedTime();
    var speed_d = 2;

    var t_f = clock.getElapsedTime();
    var speed_f = 2;

    electron1.position.x = Math.sin(speed_s*t_s) * 75;
    electron1.position.y = Math.sin(speed_s*t_s) * 0;
    electron1.position.z = Math.cos(speed_s*t_s) * 75;


    electron2.position.x = Math.sin(speed_s*offset_s) * 75;
    electron2.position.y = Math.sin(speed_s*offset_s) * 0;
    electron2.position.z = Math.cos(speed_s*offset_s) * 75;

    electron3.position.x = Math.sin(speed_p*t_p) * 150;
    electron3.position.y = Math.sin(speed_p*t_p) * 0;
    electron3.position.z = Math.cos(speed_p*t_p) * 150;

    electron4.position.x = Math.sin(speed_p*offset_p) * 150;
    electron4.position.y = Math.sin(speed_p*offset_p) * 0;
    electron4.position.z = Math.cos(speed_p*offset_p) * 150;*/

    //var tOffset = 1.5 + clock.getElapsedTime();

    // orbit from the bottom to the top
    //electron3.position.x = Math.sin(1*tOffset) * 150;
    //electron3.position.y = Math.sin(1*tOffset) * 0;
    //electron3.position.z = Math.cos(1*tOffset) * 150;


    // Render the scene
    //atomic_renderer.render(scene_atom_details, camera_atom);
};

renderAtomStructure();

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    controls_atom.update();
    controls_atom2.update();
    //composer.render();
}

function empty(elem) {
    while (elem.lastChild) elem.removeChild(elem.lastChild);
}

function initHtml(){
    //$('#loading-screen').hide();
    load(5000);
}

function load(ms){
    $('#loading-screen').fadeIn(ms/2);
    $('#loading-screen').fadeOut(ms/2);
}

var renderAtomStructure2 = function () {
    var timestamp = Date.now() * 0.0001;
    var clock = new THREE.Clock();
    requestAnimationFrame( renderAtomStructure2 );

    /*a cada electron de cada orbita lo animo de esta manera**/
    var scaleVector = new THREE.Vector3();
    var scaleFactor = 8;

    atom.orbitals.forEach(function (orbital) {
        var t = clock.getElapsedTime();

        orbital.electrons.forEach(function (electron) {

            if(orbital.orbital_type==="P"){
                var tOffset = t + orbital.delay + clock.getElapsedTime();
                t = t + orbital.delay;
                var sprite = electron.children[0];
                var scale = scaleVector.subVectors(electron.position, camera.position).length() / scaleFactor;
                sprite.scale.set(scale, scale, 1);
                var orbit = orbital.radius;
                var speed = orbital.speed;
                electron.position.x = Math.cos(t+timestamp * speed) * orbit;
                electron.position.z = Math.sin(t+timestamp * speed) * orbit;
            }else{
                var tOffset = t + orbital.delay + clock.getElapsedTime();
                t = t + orbital.delay;
                var sprite = electron.children[0];
                var scale = scaleVector.subVectors(electron.position, camera.position).length() / scaleFactor;
                sprite.scale.set(scale, scale, 1);
                var orbit = orbital.radius;
                var speed = orbital.speed;
                electron.position.x = Math.cos(t+timestamp * speed) * orbit;
                electron.position.z = Math.sin(t+timestamp * speed) * orbit;
            }


        })
    });

    //var sprite = atom.orbit.electrons[0].children[0];
    //var scale = scaleVector.subVectors(atom.orbit.electrons[0].position, camera.position).length() / scaleFactor;
    //sprite.scale.set(scale, scale, 1);
    //var orbit = atom.orbit.radius;
    //var speed = 10;
    //atom.orbit.electrons[0].position.x = Math.cos(timestamp * speed) * orbit;
    //atom.orbit.electrons[0].position.z = Math.sin(timestamp * speed) * orbit;


    atomic_renderer2.render(scene_atom_details2, camera_atom_2);
};

renderAtomStructure2();