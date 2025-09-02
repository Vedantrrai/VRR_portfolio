// About.tsx
import { useEffect, useState } from "react";

export default function About() {
  const snapshots = [
    { icon: "🔥", title: "Passionate Designer", desc: "I craft intuitive experiences." },
    { icon: "📚", title: "Learning Mindset", desc: "Always exploring new tools." },
    { icon: "🧩", title: "Problem Solver", desc: "Turning ideas into scalable solutions." },
    { icon: "🤝", title: "Team Player", desc: "Collaboration fuels creativity." },
  ];

  const combos = [
    { emoji: "🔥", word: "Grind" },
    { emoji: "🏋️", word: "Hustle" },
    { emoji: "🎯", word: "Execute" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % combos.length);
    }, 600); // rapid rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-background text-foreground transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {snapshots.map((snap) => (
            <div
              key={snap.title}
              className="relative p-6 bg-card text-card-foreground rounded-3xl 
                         shadow-[0_0_10px_rgba(59,130,246,0.2),0_0_15px_rgba(147,51,234,0.2),0_0_20px_rgba(236,72,153,0.2)]
                         transform hover:-translate-y-2 hover:scale-105 
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.4),0_0_25px_rgba(147,51,234,0.4),0_0_30px_rgba(236,72,153,0.4)]
                         transition duration-500 group overflow-hidden"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-xl transition-opacity duration-500 group-hover:opacity-20"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Bouncing Emoji */}
                <div className="text-6xl mb-4 animate-bounce">{snap.icon}</div>

                <h3 className="font-semibold text-xl mb-2">{snap.title}</h3>
                <p className="text-muted-foreground">{snap.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rotating Motivation */}
        <div className="flex justify-center mt-12">
          <p className="text-3xl sm:text-4xl md:text-4xl font-bold flex items-center gap-3">
            {/* Emoji */}
            <span>{combos[current].emoji}</span>

            {/* Word with gradient */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {combos[current].word}
            </span>
          </p>
        </div>
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-800 dark:to-pink-900 opacity-15 pointer-events-none transition-colors duration-500"></div>
    </section>
  );
}
