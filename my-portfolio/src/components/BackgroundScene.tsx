import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const BackgroundMesh: React.FC<{ texture: THREE.Texture }> = ({ texture }) => {
    return (
        <mesh>
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
    );
};

type Props = {
    imageUrl: string;
};

export const BackgroundScene: React.FC<Props> = ({ imageUrl }) => {
    const [texture, setTexture] = useState<THREE.Texture | null>(null);

    useEffect(() => {
        new THREE.TextureLoader().load(imageUrl, (loaded) => {
            setTexture(loaded);
        });
    }, [imageUrl]);

    if (!texture) return null;

    return (
        <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }}>
            <BackgroundMesh texture={texture} />
        </Canvas>
    );
};
