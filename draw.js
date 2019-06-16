var scene = new THREE.Scene();
scene.background = new THREE.Color(0xebe6e6)
var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight*2 , 0.1, 250);
camera.position.z=120;
camera.position.y=5;
camera.lookAt(0,0,0);
var renderer = new THREE.WebGLRenderer({antialias:1});
renderer.setSize( window.innerWidth, window.innerHeight/2 );
document.getElementById("banner").appendChild( renderer.domElement );
var loader = new THREE.FontLoader();
loader.load( 'asset/helvetiker_bold.typeface.json', function ( font ) {
	var geometry = new THREE.TextGeometry( 'CALVIN TEY', {
		font: font,
	     size: 18,
	     height: 1,
	     curveSegments: 12,
	     bevelEnabled: true,
	     bevelThickness: 0.5,
	     bevelSize: 0.25,
	     bevelOffset: 0,
	     bevelSegments: 5
	} );
	geometry.center();
  var material = new THREE.MeshBasicMaterial( { color: 0xb6363b } );
  var txt = new THREE.Mesh( geometry, material );
  scene.add( txt );
  function animate() {
  	requestAnimationFrame( animate );
  	renderer.render( scene, camera );
    txt.rotation.y +=0.01;
    camera.aspect = window.innerWidth/window.innerHeight*2;
    camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight/2 );

  }
  animate();

} );
