import React, { useState, useEffect } from "react";

export default function Welcome() {
    const welcomes = ["환영!", "Welcome!", "Bienvenue!", "Willkommen!", "¡Bienvenido!", "Benvenuto!"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % welcomes.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="font-mono text-8xl font-bold uppercase">{welcomes[index]}</h1>
        </div>
    );
}