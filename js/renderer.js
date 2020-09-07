var renderer;
var atomic_renderer;
var atomic_renderer2;

function initRenderers(){
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
    //document.body.appendChild( renderer.domElement );

    atomic_renderer = new THREE.WebGLRenderer({antialias:true});
    atomic_renderer.setClearColor("#000000");
    atomic_renderer.setSize(window.innerWidth, window.innerHeight);
    //document.getElementById('container_atomic_detail').appendChild(atomic_renderer.domElement);

    atomic_renderer2 = new THREE.WebGLRenderer({
        antialias: true
    });
    atomic_renderer2.setClearColor("#8bcdc0");
    atomic_renderer2.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container_atomic_detail').appendChild(atomic_renderer2.domElement);

}