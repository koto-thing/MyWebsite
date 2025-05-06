import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const BackgroundMesh: React.FC<{ texture: THREE.Texture; size: [number, number] }> = ({ texture, size }) => {
    return (
        <mesh>
            <planeGeometry args={size} />
            <meshBasicMaterial 
                map={texture} 
                side={THREE.DoubleSide} 
                transparent={true}
                opacity={0.5}
                color={new THREE.Color(0xd3d3d3)}
            />
        </mesh>
    );
};

type Props = {
    imageUrl: string;
};

export const BackgroundScene: React.FC<Props> = ({ imageUrl }) => {
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const [size, setSize] = useState<[number, number]>([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        new THREE.TextureLoader().load(imageUrl, (loaded) => {
            setTexture(loaded);
        });
    }, [imageUrl]);

    if (!texture) return null;

    return (
        <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }}>
            <BackgroundMesh texture={texture} size={size} />
        </Canvas>
    );
};