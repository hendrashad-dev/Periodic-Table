

const states = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    container: null,
    atomGroup: null,
    electrons: [],
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

        if (states.controls) {
             states.controls.update()
        }

        states.electrons.forEach( ele => {
            ele.userData.angle += ele.userData.speed;
            ele.position.x = Math.cos(ele.userData.angle) * ele.userData.radius
            ele.position.z = Math.sin(ele.userData.angle) * ele.userData.radius
        })
    

        if (states.atomGroup) {
            states.atomGroup.rotation.y += 0.002
        }
    
        if (states.renderer && states.scene) {
            states.renderer.render(states.scene, states.camera)
        }
    }
    
    animate()

}

function createAtom(atomNum) {
    states.atomGroup = new THREE.Group()
    states.atomGroup.add(createNucleus(atomNum))

    createElectronShells(atomNum)
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

function createElectronShells(atomicNumber) {
    let remainingElectrons = atomicNumber
    let shellIndex = 1
    

    while (remainingElectrons > 0) {
        const capacity = 2 * shellIndex * shellIndex
        const count = Math.min(remainingElectrons, capacity)
        
        const radius = 4 + (shellIndex * 2.5)
        const speed = 0.02 / shellIndex


        const orbitGeo = new THREE.TorusGeometry(radius, 0.05, 16, 100)


        const orbitMat = new THREE.MeshBasicMaterial(
            { 
                color: 0xaaaaaa,
                transparent: true,
                opacity: 0.3
            }
        )

        const orbit = new THREE.Mesh(orbitGeo, orbitMat)
        orbit.rotation.x = Math.PI / 2

        const ringGeo = new THREE.TorusGeometry(radius, 0.05, 16, 100)
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.3 })

        const ring = new THREE.Mesh(ringGeo, ringMat)
        ring.rotation.x = Math.PI / 2
        
        
        const eleGeo = new THREE.SphereGeometry(0.13, 16,16)
        const eleMat = new THREE.MeshPhongMaterial(
            { 
                color: 0x0071e3,
                emissive: 0x0071e3,
                emissiveIntensity : 0.5 

            }
        )

        const shellGroup = new THREE.Group()
        shellGroup.add(ring)

        for (let i = 0; i < count; i++) {
            const electron = new THREE.Mesh(eleGeo, eleMat)
            const angel = Math.random() * Math.PI * 2

            electron.userData = {
                angle: angel,
                radius: radius,
                speed: speed * (shellIndex % 2 === 0? 1 : -1),
            }

            electron.position.x = Math.cos(angel) * radius
            electron.position.z = Math.sin(angel) * radius

            shellGroup.add(electron)
            states.electrons.push(electron)
            
        }
        
        
        shellGroup.rotation.x = Math.random() * Math.PI
        shellGroup.rotation.y = Math.random() * Math.PI
        
        states.atomGroup.add(shellGroup)

        remainingElectrons -= count
        shellIndex++
    }
}