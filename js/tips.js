const tips = [
    "Take deep breaths and clear your mind.",
    "Meditate for at least 5 minutes every day.",
    "Focus on the present moment.",
    "Practice gratitude and mindfulness.",
    "Find a quiet place free of distractions.",
    "Visualize a peaceful place to calm your thoughts.",
    "Sit comfortably and keep your spine straight.",
    "Use soft background music for relaxation.",
    "Breathe slowly and deeply to reduce stress.",
];

function generateTip() {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").innerText = tip;
}

// Load initial tip
generateTip();
