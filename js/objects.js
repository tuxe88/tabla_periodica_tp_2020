let nucleus;

function initObjects() {
    simpleObjectsLayout();
    initSceneDetail();
    initSceneDetail2();

}

function get_element_color(num){
    //no metales
    if(num==1 ||
        num==6 ||
        num==7 ||
        num==8 ||
        num==15 ||
        num==16 ||
        num==34
    ){
        return 'rgba(60,227,161,' + 1 + ')';
    }
    //gases nobles y transactnidos
    if(num==2 ||
        num==10 ||
        num==18 ||
        num==36||
        num==54 ||
        num==86 ||
        num==118
    ){
        return 'rgba(119,233,247,' + 1 + ')';
    }

    //halogenos
    if(num==9 ||
        num==17 ||
        num==35 ||
        num==53||
        num==85 ||
        num==117
    ){
        return 'rgba(234,230,130,' + 1 + ')';
    }

    //alcalinos
    if(num==3 ||
        num==11 ||
        num==19 ||
        num==37||
        num==55 ||
        num==87
    ){
        return 'rgba(234,130,130,' + 1 + ')';
    }

    //metaloides
    if(num==5 ||
        num==14 ||
        num==32 ||
        num==33||
        num==51 ||
        num==84 ||
        num==52
    ){
        return 'rgba(157,130,234,' + 1 + ')';
    }
    //Elementos del bloque p
    if(num==13 ||
        num==31 ||
        num==49 ||
        num==50||
        num==81 ||
        num==82 ||
        num==83
    ){
        return 'rgba(204,189,139,' + 1 + ')';
    }
    //m,etales alcalinoterroes
    if(num==4 ||
        num==12 ||
        num==20 ||
        num==38||
        num==56 ||
        num==82 ||
        num==88
    ){
        return 'rgba(238,236,88,' + 1 + ')';
    }

    //lantanidos
    if(num>=57 &&
        num<=71
    ){
        return 'rgba(201,176,236,' + 1 + ')';
    }

    //actinidos
    if(num>=89 &&
        num<=103
    ){
        return 'rgba(208,148,213,' + 1 + ')';
    }

    return 'rgba(13,235,47,' + 1 + ')';
}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene_table.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let color_elem = get_element_color(i/5+1)
    //let color_elem = 'rgba(240,128,128,' + (Math.random() * 0.6 + 0.4) + ')'
    let element = document.createElement('div');
    element.id = "elemento"+i;
    element.className = 'element';
    element.style.backgroundColor = color_elem;

    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
        details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    let estructura = document.createElement('div');
    estructura.className = 'estructura tooltip';
    estructura.style.display = "none";
    estructura.innerHTML = '<span class="material-icons" style="text-align: center; position:relative; top:9%;">visibility</span> <span class="tooltiptext">Ver estructura at&oacute;mica</span>';
    estructura.style.backgroundColor = color_elem;
    element.appendChild(estructura);

    let cerrar = document.createElement('div');
    cerrar.className = 'cerrar tooltip';
    cerrar.style.display = "none";
    cerrar.innerHTML = '<span class="material-icons" style="text-align: center; position:relative; top:9%;">cancel</span> <span class="tooltiptext">Cerrar elemento</span>';
    cerrar.style.backgroundColor = color_elem;
    element.appendChild(cerrar);

    element.addEventListener('click', ()=>elementClickHandler(i), false);
    cerrar.addEventListener('click', ()=>elementCerrarClickHandler(i), false);
    estructura.addEventListener('click', ()=>elementEstructuraClickHandler(i), false);

    return element;
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function initSceneDetail(){

    //var bigSphere = new THREE.SphereGeometry(100, 20, 100);
    //var cover = new THREE.MeshNormalMaterial();
    //nucleus = new THREE.Mesh(bigSphere, cover);
    //scene.add(nucleus);

    // Add the mesh to the scene
    //scene_atom_details.add( cube );
    //nucleus = buildNucleus(50)
    //scene_atom_details.add(nucleus);

}


function createAtom(electrons){

    let new_atom = {}
    new_atom.nucleus = createNucleus(12);
    new_atom.orbitals = [];
    let new_orbitals_parche = []

    let radio_actual = 30;
    let num_s = 0;
    let num_p = 1;
    let num_d = 2;
    let num_f = 3;

    let levels = [];
    levels[0] = [];
    levels[1] = [];
    levels[2] = [];
    levels[3] = [];
    levels[4] = [];
    levels[5] = [];
    levels[6] = [];

    /*excepcion para terminar el foreach**/
    var BreakException = {};

    var orbitalsTypes = ["S","S","P","S","P","S","D","P","S","D","P","S","F","D","P","S","F","D","P"];

    /*mientras los electrones sean > 0 los voy a ubicar en orbitales**/
    while(electrons>0){
        try {
            orbitalsTypes.forEach(function (type) {
                let cant = 0;

                switch (type) {
                    case "S":

                        while (electrons > 0 && cant < 2) {
                            electrons--;
                            cant++
                        }
                        //let orbit_s = createOrbit(radio_actual,cant,type,"red")
                        //new_atom.orbitals.push(orbit_s);

                        //console.log("Creando orbital S"+num_s+" con " + cant + " electrones.");
                        //console.log("Electrones restates a ubicar: " + electrons);
                        let orbital_json_s = {
                            radio: radio_actual,
                            cant: cant,
                            type: type,
                            color:"red"
                        };
                        levels[num_s].push(orbital_json_s);

                        if(num_s===0){
                            radio_actual += 50
                        };

                        num_s++;

                        break;
                    case "P":

                        while (electrons > 0 && cant < 6) {
                            electrons--;
                            cant++
                        }
                        ///let orbit_p = createOrbit(radio_actual,cant,type,"green");

                        //new_atom.orbitals.push(orbit_p);

                        //console.log("Creando orbital P"+num_p+" con " + cant + " electrones.");
                        //console.log("Electrones restates a ubicar: " + electrons);
                        let orbital_json_p = {
                            radio: radio_actual,
                            cant: cant,
                            type: type,
                            color:"green"
                        };
                        levels[num_p].push(orbital_json_p);

                        if(num_p===1){
                            radio_actual += 50
                        };

                        num_p++;
                        break;
                    case "D":

                        while (electrons > 0 && cant < 10) {
                            electrons--;
                            cant++
                        }

                        //let orbit_d = createOrbit(radio_actual,cant,type,"yellow");
                        //new_atom.orbitals.push(orbit_d);

                        //console.log("Creando orbital D"+num_d+" con " + cant + " electrones.");
                        //console.log("Electrones restates a ubicar: " + electrons);
                        let orbital_json_d = {
                            radio: radio_actual,
                            cant: cant,
                            type: type,
                            color:"yellow"
                        };
                        levels[num_d].push(orbital_json_d);
                        if(num_d===2){
                            radio_actual += 50
                        };
                        num_d++;
                        break;
                    case "F":

                        while (electrons > 0 && cant < 14) {
                            electrons--;
                            cant++
                        }
                        //let orbit_f = createOrbit(radio_actual,cant,type,"violet")
                        //new_atom.orbitals.push(orbit_f);

                        //console.log("Creando orbital F"+num_f+" con " + cant + " electrones.");
                        //console.log("Electrones restates a ubicar: " + electrons);
                        let orbital_json_f = {
                            radio: radio_actual,
                            cant: cant,
                            type: type,
                            color:"violet"
                        };
                        levels[num_f].push(orbital_json_f);
                        if(num_f===3 || num_f===4 || num_f===5 || num_f===6){
                            radio_actual += 50
                        };
                        num_f++;
                        break;
                }

                if (electrons < 1){
                    //console.log("loop terminado");
                    throw BreakException;
                }
                radio_actual = radio_actual+50;
            })
        }catch (e) {
            if (e !== BreakException) throw e;
            radio_actual = 30;
            levels.forEach(function (level) {
                level.forEach(function (orbit){
                    console.log("creando orbita: "+orbit.color+" "+orbit.type+" "+orbit.cant);
                    let new_orbit = createOrbit(radio_actual,orbit.cant,orbit.type, orbit.color)
                    radio_actual=radio_actual+50;
                    new_orbitals_parche.push(new_orbit);
                });
                radio_actual = radio_actual+80;
            });
            new_atom.orbitals = new_orbitals_parche;
        }
    }
    console.log(levels);

    console.log(new_orbitals_parche);
    console.log(new_atom.orbitals);
    return new_atom;
}

function initSceneDetail2(){

    atom = createAtom(1);

    scene_atom_details2.add(atom.nucleus);
    atom.orbitals.forEach(function (orbital) {
        scene_atom_details2.add(orbital);
        orbital.electrons.forEach(
            function (electron) {
                scene_atom_details2.add(electron);
            }
        );
    });

}

function updateAtom(electrons) {
    cleanAtomScene();
    atom = createAtom(electrons);

    scene_atom_details2.add(atom.nucleus);
    atom.orbitals.forEach(function (orbital) {
        scene_atom_details2.add(orbital);
        orbital.electrons.forEach(
            function (electron) {
                scene_atom_details2.add(electron);
            }
        );
    });

}

function cleanAtomScene(){
    while(scene_atom_details2.children.length > 0){
        scene_atom_details2.remove(scene_atom_details2.children[0]);
    }
}

function createNucleus(size){
    return new THREE.Mesh(new THREE.SphereGeometry(size, 32, 16), new THREE.MeshBasicMaterial({
        color: "gold"
    }));
}

function createOrbit(radius, electrons,type,color) {
    //orbit
    var shape = new THREE.Shape();
    shape.moveTo(orbit, 0);
    shape.absarc(0, 0, radius, 0, 2 * Math.PI, false);
    var spacedPoints = shape.createSpacedPointsGeometry(128);
    spacedPoints.rotateX(THREE.Math.degToRad(-90));
    var orbit = new THREE.Line(spacedPoints, new THREE.LineBasicMaterial({
        color: color,
        linewidth: 2
    }));
    orbit.radius = radius;
    orbit.electrons = [];
    orbit.obital_type = type;

    orbit.speed = 1000/orbit.radius;
    if(type==="F"){
        orbit.delay = orbit.radius/1;
    }
    else if(type==="S"){
        orbit.delay = 3.2;
    }
    else if(type==="P"){
        orbit.delay = 1;
    }
    else if(type==="D"){
        orbit.delay = orbit.radius/.33333333;
    }
    else{
        orbit.delay = orbit.radius/4;
    }

    let electron_color;
    switch (type) {
        case "S":
            electron_color = "black";
            break;
        case "P":
            electron_color = "black";
            break;
        case "D":
            electron_color = "black";
            break;
        case "F":
            electron_color = "black";
            break;
        default:
            electron_color = "black";
    }

    for(let i =0;i<electrons;i++){
        orbit.electrons.push(createElectron(orbit,electron_color));
    }

    return orbit;
}

function createElectron(orbit,color){

    var radius = 2;
    var speed = 5;



    var geom = new THREE.SphereGeometry(radius, 32, 16);
    var mat = new THREE.MeshBasicMaterial({
        color: color,
        //wireframe: true
    });


    var electron = new THREE.Mesh(geom, mat);
    electron.userData.orbit = orbit.radius;
    electron.userData.speed = speed;

    var canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    var ctx = canvas.getContext("2d");
    ctx.font = "44pt Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(name, 128, 44);
    //console.log(ctx);
    var tex = new THREE.Texture(canvas);
    tex.needsUpdate = true;
    var spriteMat = new THREE.SpriteMaterial({
        map: tex
    });
    var sprite = new THREE.Sprite(spriteMat);
    electron.add(sprite);

    return electron;
}