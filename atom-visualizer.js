

const states = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    container: null,
    atomGroup: null,
}

function startInit(divId, atomNum) {
    states.container = document.getElementById(divId)
    
    states.scene = new THREE.Scene()
    states.scene.background = null;

    const aspect = states.container.clientWidth / states.container.clientHeight
    states.camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
    states.camera.position.z = 20

    states.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    states.renderer.setSize(states.container.clientWidth, states.container.clientHeight)
    states.renderer.setPixelRatio(window.devicePixelRatio)

    states.container.innerHTML = ''

    states.container.appendChild(states.renderer.domElement)

    states.renderer.render(states.scene, states.camera)


    states.controls = new THREE.OrbitControls(states.camera, states.renderer.domElement)
    states.controls.enableDamping = true
    states.controls.autoRotate = true


    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    states.scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    states.scene.add(pointLight)


    createAtom(atomNum)
    
    function animate() {
        requestAnimationFrame(animate)
        states.controls.update()
        states.renderer.render(states.scene, states.camera)
    }
    
    animate()

}

function createAtom(atomNum) {
    states.atomGroup = new THREE.Group()
    states.atomGroup.add(createNucleus(atomNum))
    states.scene.add(states.atomGroup)
}


function createNucleus(atomNum) {
    const nucleusGroup = new THREE.Group()
    const particleCount = atomNum * 2

    const geometry = new THREE.SphereGeometry(0.8, 36, 32)

    const protonMat = new THREE.MeshPhongMaterial({ color: 0xff4d4d, shininess: 100 })

    const neutronMat = new THREE.MeshPhongMaterial({ color: 0xcccccc, shininess: 100 })

    for (let i = 0; i < particleCount; i++) {

        const isProton = Math.random() > 0.5

        const particle = new THREE.Mesh(geometry, isProton ? protonMat : neutronMat)


        const radius = Math.cbrt(particleCount) * 0.6
        const theta = Math.random() * Math.PI * 2

        const phi = Math.acos(2 * Math.random() - 1)
        const r = Math.cbrt(Math.random()) * radius

        particle.position.set(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.sin(phi) * Math.sin(theta),
            r * Math.cos(phi)
        )
        

        nucleusGroup.add(particle)
    }
    
    return nucleusGroup
}
