function zoomInElement(i) {

    if(! openedElement) {

        console.log("zooming in: "+i);
        new TWEEN.Tween(targets.simple[i / 5].position)
            .to({x: 0, y: 0, z: 2500}, Math.random() * 500 + 2000)
            .onComplete(function () {
                selectedActual.find('.cerrar').fadeIn(250);
                selectedActual.find('.estructura').fadeIn(250);
                openedElement = true;
            })
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }else{
        openedElement = false;
    }
}

function zoomOutElement(i) {
    console.log("zooming out: "+i);
    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        //.onUpdate(render)
        .start();
}

function elementClickHandler(i){

    selectedAnterior = selectedActual;

    let elemento = $("#elemento"+i);
    selectedActual = elemento;

    if(selectedAnterior!=undefined){
        selectedAnterior.find('.cerrar').fadeOut(250);
        selectedAnterior.find('.estructura').fadeOut(250);
    }

    transform(targets.table,1000);

    zoomInElement(i);

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
    //this.cerrar.fadeOut(250);
    //this.estructura.fadeOut(250);

}

function elementCerrarClickHandler(i){
    console.log("cerrando elemento numero: "+i);
    let elemento = $("#elemento"+i);
    //let cerrar = elemento.find('.cerrar');
    //let estructura = elemento.find('.estructura');

    new TWEEN.Tween(selectedActual)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function elementEstructuraClickHandler(i){
    //console.log("Cargando estructura del elemento: "+i);
    let elemento = $("#elemento"+i);
    loadDetailScene(i);
    //empty(document.getElementById('container'));
    //changeScene(scene_detail);
    //actual_scene = scene_detail;
    //render();
    //let cerrar = elemento.find('.cerrar');
    //let estructura = elemento.find('.estructura');


}