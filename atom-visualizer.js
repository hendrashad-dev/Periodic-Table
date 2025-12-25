

const states = {
    scene: null,
    camera: null,
    renderer: null,
    container: null
}

function startInit(divId) {
    states.container = document.getElementById(divId)
    
    states.scene = new THREE.Scene()
    states.scene.background = null;

    const aspect = states.container.clientWidth / states.container.clientHeight
    states.camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
    states.camera.position.z = 20

    states.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    states.renderer.setSize(states.container.clientWidth, states.container.clientHeight)
    states.renderer.setPixelRatio(window.devicePixelRatio)

    states.container.appendChild(states.renderer.domElement)

    states.renderer.render(states.scene, states.camera)

    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshStandardMaterial({ color: 0x00aaff })
    const sphere = new THREE.Mesh(geometry, material)
    states.scene.add(sphere)

    const light = new THREE.PointLight(0xffffff, 6)
    light.position.set(5, 5, 5)
    states.scene.add(light)

    function animate() {
        requestAnimationFrame(animate)
        sphere.rotation.y += 0.06
        states.renderer.render(states.scene, states.camera)
    }

    animate()

}