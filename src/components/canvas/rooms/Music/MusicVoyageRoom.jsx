import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, useCursor, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useScene } from '../../../../context/SceneContext';
import GalleryClouds from '../Gallery/GalleryClouds';

// Favorite Songs Configuration
export const FAVORITE_SONGS = [
    {
        id: 'arz-kiya-hai',
        title: 'Arz Kiya Hai',
        artist: 'Anuv Jain',
        tag: 'Acoustic / Soulful Poetry',
        year: '2023',
        color: '#d97706',
        accentBg: '#fef3c7',
        spotifyUrl: 'https://open.spotify.com/search/Arz%20Kiya%20Hai%20Anuv%20Jain',
        youtubeUrl: 'https://www.youtube.com/results?search_query=Arz+Kiya+Hai+Anuv+Jain',
        lyricsExcerpt: 'Kuch toh tha tere mere darmiyaan...'
    },
    {
        id: 'golden-brown',
        title: 'Golden Brown',
        artist: 'The Stranglers',
        tag: 'Timeless Baroque / Psychedelic',
        year: '1981',
        color: '#b45309',
        accentBg: '#fef3c7',
        spotifyUrl: 'https://open.spotify.com/search/Golden%20Brown%20The%20Stranglers',
        youtubeUrl: 'https://www.youtube.com/results?search_query=Golden+Brown+The+Stranglers',
        lyricsExcerpt: 'Golden brown, texture like sun...'
    }
];

// Subtle Pencil Sketch Acoustic Pulse Rings in 3D Space
const AcousticPulseRings = ({ isPlaying }) => {
    const ring1 = useRef();
    const ring2 = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (isPlaying) {
            const s1 = 1 + ((t * 0.7) % 1) * 1.8;
            const op1 = Math.max(0, 0.3 * (1 - ((t * 0.7) % 1)));
            if (ring1.current) {
                ring1.current.scale.set(s1, s1, 1);
                ring1.current.material.opacity = op1;
            }

            const s2 = 1 + (((t * 0.7) + 0.5) % 1) * 1.8;
            const op2 = Math.max(0, 0.3 * (1 - (((t * 0.7) + 0.5) % 1)));
            if (ring2.current) {
                ring2.current.scale.set(s2, s2, 1);
                ring2.current.material.opacity = op2;
            }
        }
    });

    return (
        <group position={[0, -0.95, -5.5]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh ref={ring1}>
                <ringGeometry args={[1.5, 1.54, 48]} />
                <meshBasicMaterial color="#a8a29e" transparent opacity={0.25} />
            </mesh>
            <mesh ref={ring2}>
                <ringGeometry args={[1.5, 1.54, 48]} />
                <meshBasicMaterial color="#d6d3d1" transparent opacity={0.15} />
            </mesh>
        </group>
    );
};

// Hand-Drawn Paper & Wood Turntable
const VinylTurntable = ({ activeSong, isPlaying, onTogglePlay }) => {
    const vinylDiscRef = useRef();
    const tonearmRef = useRef();
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

    useFrame((_, delta) => {
        if (vinylDiscRef.current && isPlaying) {
            vinylDiscRef.current.rotation.y += delta * 2.4;
        }

        if (tonearmRef.current) {
            const targetAngle = isPlaying ? 0.38 : 0.0;
            tonearmRef.current.rotation.y = THREE.MathUtils.lerp(
                tonearmRef.current.rotation.y,
                targetAngle,
                delta * 3
            );
        }
    });

    return (
        <group
            position={[0, -0.75, -5.5]}
            scale={[0.62, 0.62, 0.62]}
            rotation={[0.3, 0, 0]}
            onClick={(e) => {
                e.stopPropagation();
                onTogglePlay();
            }}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* Turntable Paper Plinth */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4.4, 0.35, 3.8]} />
                <meshStandardMaterial
                    color="#f5f2e9"
                    roughness={0.7}
                    metalness={0.05}
                />
            </mesh>

            {/* Hand-Drawn Pencil Wireframe Edge */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[4.44, 0.37, 3.84]} />
                <meshBasicMaterial color="#292524" wireframe transparent opacity={0.8} />
            </mesh>

            {/* Platter Base */}
            <mesh position={[-0.5, 0.2, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 0.08, 48]} />
                <meshStandardMaterial color="#e7e5e4" metalness={0.1} roughness={0.6} />
            </mesh>

            {/* Platter Sketch Ring */}
            <mesh position={[-0.5, 0.21, 0]}>
                <cylinderGeometry args={[1.52, 1.52, 0.09, 48]} />
                <meshBasicMaterial color="#44403c" wireframe transparent opacity={0.5} />
            </mesh>

            {/* Spinning Classic Grooved Vinyl Record */}
            <group ref={vinylDiscRef} position={[-0.5, 0.26, 0]}>
                <mesh>
                    <cylinderGeometry args={[1.42, 1.42, 0.03, 64]} />
                    <meshStandardMaterial color="#1c1917" roughness={0.3} metalness={0.2} />
                </mesh>

                {[0.6, 0.9, 1.15, 1.3].map((r, idx) => (
                    <mesh key={idx} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.016, 0]}>
                        <ringGeometry args={[r - 0.02, r, 48]} />
                        <meshBasicMaterial color="#292524" />
                    </mesh>
                ))}

                <mesh position={[0, 0.02, 0]}>
                    <cylinderGeometry args={[0.44, 0.44, 0.035, 32]} />
                    <meshStandardMaterial
                        color={activeSong.accentBg}
                        roughness={0.8}
                    />
                </mesh>

                <mesh position={[0, 0.022, 0]}>
                    <cylinderGeometry args={[0.45, 0.45, 0.036, 32]} />
                    <meshBasicMaterial color="#292524" wireframe transparent opacity={0.7} />
                </mesh>

                <mesh position={[0, 0.04, 0]}>
                    <cylinderGeometry args={[0.06, 0.06, 0.08, 16]} />
                    <meshStandardMaterial color="#78716c" metalness={0.5} />
                </mesh>
            </group>

            {/* Tonearm Base Pivot */}
            <group position={[1.4, 0.25, -1.1]}>
                <mesh>
                    <cylinderGeometry args={[0.22, 0.22, 0.25, 24]} />
                    <meshStandardMaterial color="#57534e" roughness={0.5} />
                </mesh>
                <mesh>
                    <cylinderGeometry args={[0.23, 0.23, 0.26, 24]} />
                    <meshBasicMaterial color="#1c1917" wireframe transparent opacity={0.7} />
                </mesh>

                <group ref={tonearmRef}>
                    <mesh position={[-0.6, 0.15, 0.55]} rotation={[0, -0.65, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 1.5, 16]} />
                        <meshStandardMaterial color="#292524" />
                    </mesh>
                    <mesh position={[-1.15, 0.08, 1.15]} rotation={[0, -0.65, 0]}>
                        <boxGeometry args={[0.15, 0.12, 0.25]} />
                        <meshStandardMaterial color="#d97706" />
                    </mesh>
                </group>
            </group>

            {/* Power/Speed Switch Button */}
            <mesh position={[1.4, 0.2, 1.1]}>
                <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
                <meshStandardMaterial
                    color={isPlaying ? "#16a34a" : "#dc2626"}
                />
            </mesh>
            <mesh position={[1.4, 0.2, 1.1]}>
                <cylinderGeometry args={[0.13, 0.13, 0.11, 16]} />
                <meshBasicMaterial color="#1c1917" wireframe transparent opacity={0.8} />
            </mesh>
        </group>
    );
};

// Handcrafted Torn-Paper Compact Floating Album Covers
const FloatingAlbumCover = ({ song, index, isActive, onSelect }) => {
    const vinylSlipRef = useRef();
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

    // Positioned gracefully left & right of the central area
    const xPos = index === 0 ? -1.85 : 1.85;
    const yPos = 0.35;
    const zPos = -5.8;

    useFrame((_, delta) => {
        if (vinylSlipRef.current) {
            const targetX = (hovered || isActive) ? (index === 0 ? -0.55 : 0.55) : 0;
            vinylSlipRef.current.position.x = THREE.MathUtils.lerp(
                vinylSlipRef.current.position.x,
                targetX,
                delta * 5
            );
        }
    });

    return (
        <Float speed={2.0} rotationIntensity={0.1} floatIntensity={0.3}>
            <group
                position={[xPos, yPos, zPos]}
                rotation={[0, index === 0 ? 0.25 : -0.25, 0]}
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(index);
                }}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                {/* Vinyl Record sliding out */}
                <group ref={vinylSlipRef} position={[0, 0, -0.04]}>
                    <mesh rotation={[0, 0, 0]}>
                        <cylinderGeometry args={[0.65, 0.65, 0.015, 32]} rotation={[Math.PI / 2, 0, 0]} />
                        <meshStandardMaterial color="#1c1917" roughness={0.3} metalness={0.2} />
                    </mesh>
                    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.01]}>
                        <cylinderGeometry args={[0.24, 0.24, 0.018, 24]} />
                        <meshStandardMaterial color={song.accentBg} roughness={0.7} />
                    </mesh>
                </group>

                {/* Handcrafted Paper Album Sleeve */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.45, 1.45, 0.06]} />
                    <meshStandardMaterial
                        color="#faf8f2"
                        roughness={0.8}
                    />
                </mesh>

                {/* Hand-Drawn Sketch Pencil Border */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.48, 1.48, 0.07]} />
                    <meshBasicMaterial
                        color={isActive ? "#d97706" : hovered ? "#1c1917" : "#78716c"}
                        wireframe
                        transparent
                        opacity={isActive ? 0.95 : 0.65}
                    />
                </mesh>

                {/* Inner Decorative Sketch Box */}
                <mesh position={[0, 0, 0.035]}>
                    <planeGeometry args={[1.3, 1.3]} />
                    <meshStandardMaterial
                        color={isActive ? song.accentBg : "#f5f2e9"}
                        roughness={0.9}
                    />
                </mesh>

                {/* Album Title */}
                <Text
                    position={[0, 0.32, 0.05]}
                    fontSize={0.14}
                    color="#1c1917"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={1.2}
                    textAlign="center"
                >
                    {song.title}
                </Text>

                {/* Artist */}
                <Text
                    position={[0, 0.08, 0.05]}
                    fontSize={0.11}
                    color={song.color}
                    anchorX="center"
                    anchorY="middle"
                >
                    {song.artist}
                </Text>

                {/* Tag */}
                <Text
                    position={[0, -0.16, 0.05]}
                    fontSize={0.08}
                    color="#57534e"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={1.2}
                    textAlign="center"
                >
                    {song.tag}
                </Text>

                {/* Active Status Badge */}
                <Text
                    position={[0, -0.45, 0.05]}
                    fontSize={0.09}
                    color={isActive ? "#16a34a" : "#78716c"}
                    anchorX="center"
                    anchorY="middle"
                >
                    {isActive ? "● ON TURNTABLE" : "▶ CLICK TO PLAY"}
                </Text>
            </group>
        </Float>
    );
};

export default function MusicVoyageRoom({ showRoom, onReady, isExiting }) {
    const { requestExit } = useScene();
    const [activeSongIndex, setActiveSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        onReady?.();
    }, [onReady]);

    const activeSong = FAVORITE_SONGS[activeSongIndex];

    const handleSelectSong = (index) => {
        setActiveSongIndex(index);
        setIsPlaying(true);
    };

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <group>
            {/* Natural Warm Studio Lighting */}
            <ambientLight intensity={1.1} />
            <directionalLight position={[5, 12, 5]} intensity={1.2} color="#fffbeb" />

            {/* Hand-Drawn Paper Clouds Floating in Background */}
            <GalleryClouds count={20} seed={77} rotationOffset={[0, Math.PI / 2, 0]} />

            {/* Subtle Expanding Acoustic Sketch Waves */}
            <AcousticPulseRings isPlaying={isPlaying} />

            {/* Hand-Drawn Architectural Title in Background */}
            <group position={[0, 1.85, -6.8]}>
                <Text
                    position={[0, 0, 0]}
                    fontSize={0.65}
                    color="#1c1917"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#44403c"
                >
                    VINYL LOUNGE
                </Text>
                <Text
                    position={[0, -0.45, 0]}
                    fontSize={0.22}
                    color="#78716c"
                    anchorX="center"
                    anchorY="middle"
                >
                    Mani's Favorite Songs • Handcrafted Audio Deck
                </Text>
            </group>

            {/* 3D Handcrafted Paper & Wood Vinyl Turntable Player */}
            <VinylTurntable
                activeSong={activeSong}
                isPlaying={isPlaying}
                onTogglePlay={handleTogglePlay}
            />

            {/* 3D Compact Floating Paper Album Covers - Perfectly framed on left & right */}
            {FAVORITE_SONGS.map((song, idx) => (
                <FloatingAlbumCover
                    key={song.id}
                    song={song}
                    index={idx}
                    isActive={activeSongIndex === idx}
                    onSelect={handleSelectSong}
                />
            ))}

            {/* Hand-Drawn Torn Paper Styled Media Deck HUD */}
            <Html position={[0, -1.55, -4.8]} center transform={false}>
                <div style={{
                    minWidth: '340px',
                    maxWidth: '440px',
                    padding: '16px 20px',
                    backgroundColor: '#fefdfa',
                    border: '2px solid #292524',
                    borderRadius: '16px',
                    boxShadow: '4px 5px 0px #1c1917, 0 16px 32px rgba(0, 0, 0, 0.06)',
                    color: '#1c1917',
                    fontFamily: 'var(--font-sans, system-ui, sans-serif)',
                    userSelect: 'none',
                    textAlign: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#78716c', fontWeight: 700 }}>
                            💽 Turntable Deck ({activeSongIndex + 1}/{FAVORITE_SONGS.length})
                        </span>
                        <span style={{
                            fontSize: '0.7rem',
                            padding: '2px 8px',
                            borderRadius: '10px',
                            backgroundColor: isPlaying ? '#dcfce7' : '#fee2e2',
                            border: `1.5px solid ${isPlaying ? '#16a34a' : '#dc2626'}`,
                            color: isPlaying ? '#15803d' : '#b91c1c',
                            fontWeight: 700
                        }}>
                            {isPlaying ? '● 33⅓ RPM PLAYING' : '⏸ PAUSED'}
                        </span>
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <h4 style={{ margin: '0 0 2px', fontSize: '1.15rem', fontWeight: 800, color: activeSong.color, letterSpacing: '0.5px' }}>
                            {activeSong.title}
                        </h4>
                        <p style={{ margin: '0 0 4px', fontSize: '0.85rem', color: '#44403c', fontWeight: 600 }}>
                            {activeSong.artist} • <span style={{ color: '#78716c' }}>{activeSong.tag}</span>
                        </p>
                        <p style={{ margin: 0, fontSize: '0.76rem', color: '#78716c', fontStyle: 'italic' }}>
                            "{activeSong.lyricsExcerpt}"
                        </p>
                    </div>

                    {/* Hand-Drawn Paper Buttons Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                        <button
                            onClick={() => {
                                setActiveSongIndex((prev) => (prev === 0 ? FAVORITE_SONGS.length - 1 : prev - 1));
                                setIsPlaying(true);
                            }}
                            title="Previous Track"
                            style={{
                                padding: '6px 14px',
                                borderRadius: '8px',
                                border: '1.5px solid #292524',
                                backgroundColor: '#f5f2e9',
                                boxShadow: '2px 2px 0px #1c1917',
                                color: '#1c1917',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                fontWeight: 600
                            }}
                        >
                            ⏮ Prev
                        </button>

                        <button
                            onClick={handleTogglePlay}
                            style={{
                                padding: '8px 20px',
                                borderRadius: '10px',
                                border: '2px solid #292524',
                                background: 'linear-gradient(135deg, #fbbf24, #d97706)',
                                boxShadow: '2px 2px 0px #1c1917',
                                color: '#1c1917',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                cursor: 'pointer'
                            }}
                        >
                            {isPlaying ? '⏸ Pause Record' : '▶ Play Record'}
                        </button>

                        <button
                            onClick={() => {
                                setActiveSongIndex((prev) => (prev + 1) % FAVORITE_SONGS.length);
                                setIsPlaying(true);
                            }}
                            title="Next Track"
                            style={{
                                padding: '6px 14px',
                                borderRadius: '8px',
                                border: '1.5px solid #292524',
                                backgroundColor: '#f5f2e9',
                                boxShadow: '2px 2px 0px #1c1917',
                                color: '#1c1917',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                fontWeight: 600
                            }}
                        >
                            Next ⏭
                        </button>
                    </div>

                    {/* Direct Links */}
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '10px' }}>
                        <a
                            href={activeSong.spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '0.74rem',
                                padding: '4px 12px',
                                borderRadius: '16px',
                                backgroundColor: '#dcfce7',
                                border: '1.5px solid #16a34a',
                                boxShadow: '1.5px 1.5px 0px #1c1917',
                                color: '#15803d',
                                textDecoration: 'none',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}
                        >
                            🟢 Spotify
                        </a>
                        <a
                            href={activeSong.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '0.74rem',
                                padding: '4px 12px',
                                borderRadius: '16px',
                                backgroundColor: '#fee2e2',
                                border: '1.5px solid #dc2626',
                                boxShadow: '1.5px 1.5px 0px #1c1917',
                                color: '#b91c1c',
                                textDecoration: 'none',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}
                        >
                            🔴 YouTube
                        </a>
                    </div>

                    {/* Return to Corridor */}
                    <button
                        onClick={() => requestExit()}
                        style={{
                            fontSize: '0.75rem',
                            color: '#78716c',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            fontWeight: 600
                        }}
                    >
                        ← Exit Lounge & Return to Corridor
                    </button>
                </div>
            </Html>
        </group>
    );
}
