let controls;
let controls_atom;
let controls_atom2;

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.0;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.noZoom = true;
    controls.noPan = true;

    controls.addEventListener('change', render);

    controls_atom = new THREE.TrackballControls(camera_atom, atomic_renderer.domElement);
    controls_atom.rotateSpeed = 0.5;
    controls_atom.minDistance = 100;
    controls_atom.maxDistance = 1500;

    controls_atom.addEventListener('change', renderAtomStructure);

    controls_atom2 = new THREE.OrbitControls(camera_atom_2, atomic_renderer2.domElement);
    controls_atom2.addEventListener('change', renderAtomStructure2);

}