import { useEffect, useRef } from 'react';
import { useScene } from '../context/SceneContext';

/**
 * useDocumentMeta — Dynamic Meta Tags & Virtual Routing (History API)
 */

const ROOM_META = {
    null: {
        path: '/',
        title: 'Mani (Manindra Babu) — Full Stack Developer & AI/ML Engineer',
        description: 'Portfolio of Chappidi Venkata Manindra Babu (Mani), Full Stack Developer & AI/ML Engineer specializing in MERN stack applications, LLM architectures, RAG systems, and deep learning engineering.',
    },
    about: {
        path: '/about',
        title: 'About — Mani Portfolio',
        description: 'Learn about Mani (Chappidi Venkata Manindra Babu) — B.Tech AI & ML undergraduate at Aditya University, Full Stack Developer, and Machine Learning practitioner.',
    },
    gallery: {
        path: '/gallery',
        title: 'Gallery & Featured Projects — Mani Portfolio',
        description: 'Explore featured projects engineered by Mani, including Knowledge Base Retrieval System (RAG), Custom GPT from scratch (PyTorch), MERN Web Applications, and Hackathon-winning solutions.',
    },
    studio: {
        path: '/studio',
        title: 'The Studio & Tech Insights — Mani Portfolio',
        description: 'Explore Mani\'s interactive 3D studio showcasing full-stack MERN engineering, AI & LLM architectures, and system design benchmarks.',
    },
    music: {
        path: '/music',
        title: 'Rain Voyage & Favorite Songs — Mani Portfolio',
        description: 'Take a serene 3D rain voyage boat ride featuring Mani\'s favorite tracks: Arz Kiya Hai (Anuv Jain) and Golden Brown (The Stranglers).',
    },
    contact: {
        path: '/contact',
        title: 'Contact — Mani Portfolio',
        description: 'Get in touch with Mani (Chappidi Venkata Manindra Babu) for full-stack web applications, AI integrations, and collaborative engineering projects.',
    },
};

// Map URL paths back to room IDs for deep linking
const PATH_TO_ROOM = {
    '/': null,
    '/about': 'about',
    '/gallery': 'gallery',
    '/studio': 'studio',
    '/music': 'music',
    '/contact': 'contact',
};

export function getInitialRoomFromUrl() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return PATH_TO_ROOM[path] !== undefined ? PATH_TO_ROOM[path] : null;
}

export function useDocumentMeta() {
    const { currentRoom, teleportTo, hasEntered } = useScene();
    const isHandlingPopState = useRef(false);
    const lastPushedRoom = useRef(undefined); // Track what we last pushed to avoid duplicates

    // Update document meta and URL when room changes
    useEffect(() => {
        const roomKey = currentRoom === null ? 'null' : currentRoom;
        const meta = ROOM_META[roomKey] || ROOM_META['null'];

        // Update the page title
        document.title = meta.title;

        // Update meta description
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
            descTag.setAttribute('content', meta.description);
        }

        // Update OG meta tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', meta.title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', meta.description);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `https://mani.dev${meta.path}`);

        // Update canonical link
        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
            canonicalTag.setAttribute('href', `https://mani.dev${meta.path}`);
        }

        // Push to browser history
        if (!isHandlingPopState.current && lastPushedRoom.current !== currentRoom) {
            if (lastPushedRoom.current === undefined) {
                window.history.replaceState({ room: currentRoom }, '', meta.path);
            } else {
                window.history.pushState({ room: currentRoom }, '', meta.path);
            }
            lastPushedRoom.current = currentRoom;
        }
        isHandlingPopState.current = false;
    }, [currentRoom]);

    // Handle browser back/forward buttons
    useEffect(() => {
        const handlePopState = (e) => {
            const room = e.state ? e.state.room : null;
            if (room !== undefined) {
                isHandlingPopState.current = true;
                lastPushedRoom.current = room;
                teleportTo(room);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [teleportTo]);
}
