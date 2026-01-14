import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({ isDark }) => {
  const containerRef = useRef(null);
  const materialsRef = useRef({ particles: null, lines: null });

  useEffect(() => {
    if (!containerRef.current) return;

    const getCircleTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        ctx.beginPath();
        ctx.arc(16, 16, 14, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    const count = 200;
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for(let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
        if(i % 3 === 0) velocities.push((Math.random() - 0.5) * 0.02);
        if(i % 3 === 1) velocities.push((Math.random() - 0.5) * 0.02);
        if(i % 3 === 2) velocities.push((Math.random() - 0.5) * 0.02);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1, 
        map: getCircleTexture(), 
        color: isDark ? 0x818cf8 : 0x4f46e5,
        transparent: true,
        opacity: 0.9,
        alphaTest: 0.5 
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const lineMaterial = new THREE.LineBasicMaterial({
        color: isDark ? 0x6366f1 : 0x94a3b8,
        transparent: true,
        opacity: isDark ? 0.2 : 0.3
    });

    const linesGeometry = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lines);

    materialsRef.current = { particles: particlesMaterial, lines: lineMaterial };

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationId;
    const animate = () => {
        animationId = requestAnimationFrame(animate);

        const posAttribute = particles.geometry.attributes.position;
        const positionsArray = posAttribute.array;

        for(let i = 0; i < count; i++) {
            const i3 = i * 3;
            positionsArray[i3] += velocities[i * 3];
            positionsArray[i3 + 1] += velocities[i * 3 + 1];
            positionsArray[i3 + 2] += velocities[i * 3 + 2];

            if(Math.abs(positionsArray[i3]) > 10) velocities[i * 3] *= -1;
            if(Math.abs(positionsArray[i3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
            if(Math.abs(positionsArray[i3 + 2]) > 10) velocities[i * 3 + 2] *= -1;
        }
        posAttribute.needsUpdate = true;

        const linePositions = [];
        for(let i = 0; i < count; i++) {
            for(let j = i + 1; j < count; j++) {
                const dx = positionsArray[i*3] - positionsArray[j*3];
                const dy = positionsArray[i*3+1] - positionsArray[j*3+1];
                const dz = positionsArray[i*3+2] - positionsArray[j*3+2];
                const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

                if(dist < 2.5) {
                    linePositions.push(
                        positionsArray[i*3], positionsArray[i*3+1], positionsArray[i*3+2],
                        positionsArray[j*3], positionsArray[j*3+1], positionsArray[j*3+2]
                    );
                }
            }
        }

        const maxLines = 3000 * 6; 
        const finalLines = linePositions.slice(0, maxLines);
        
        lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(finalLines, 3));

        particles.rotation.y += 0.001;
        lines.rotation.y += 0.001;

        renderer.render(scene, camera);
    };
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        if (containerRef.current && renderer.domElement) {
            try {
                containerRef.current.removeChild(renderer.domElement);
            } catch (e) {}
        }
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        if (particlesMaterial.map) particlesMaterial.map.dispose();
        linesGeometry.dispose();
        lineMaterial.dispose();
    };
  }, []);

  useEffect(() => {
    if (materialsRef.current.particles && materialsRef.current.lines) {
        if (isDark) {
            materialsRef.current.particles.color.setHex(0x818cf8);
            materialsRef.current.lines.color.setHex(0x6366f1);
            materialsRef.current.lines.opacity = 0.2;
        } else {
            materialsRef.current.particles.color.setHex(0x4f46e5); 
            materialsRef.current.lines.color.setHex(0x94a3b8);
            materialsRef.current.lines.opacity = 0.3;
        }
    }
  }, [isDark]);

  return (
    <div 
        ref={containerRef} 
        className="fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-500 pointer-events-none"
    />
  );
};

export default ThreeBackground;