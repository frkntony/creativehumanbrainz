// logo.js
// using webGL
console.log('logo.js loaded');

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, scene, renderer;
var geometry, material, mesh;

function setup() {

    var W = document.documentElement.clientWidth, H = window.innerHeight;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( W, H );

    document.body.appendChild( renderer.domElement );
    document.getElementById("figure-web").appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
    camera.position.z = 500;

    scene = new THREE.Scene();
    
    geometry = new THREE.CubeGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({shading: THREE.FlatShading, color: 0xdcdcdc, wireframe: true, wireframeLinewidth: 1});
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.20;
    scene.add(mesh);


}

function draw() {

    requestAnimationFrame( draw );
    
    mesh.rotation.x = Date.now() * 0.0005;
    mesh.rotation.y = Date.now() * 0.0002;	
    mesh.rotation.z = Date.now() * 0.001;


    renderer.render( scene, camera );

}

setup();
draw();
