export function AnimatedHeroOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Defs for gradients and filters */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Boy's Eyes - Blinking Animation */}
      {/* Left Eye */}
      <g
        className="animate-boy-blink"
        style={{ transformOrigin: "180px 140px" }}
      >
        <ellipse cx="175" cy="140" rx="6" ry="8" fill="#000" opacity="0.8" />
      </g>

      {/* Right Eye */}
      <g
        className="animate-boy-blink"
        style={{ transformOrigin: "220px 140px" }}
      >
        <ellipse cx="220" cy="140" rx="6" ry="8" fill="#000" opacity="0.8" />
      </g>

      {/* Boy's Head - Gentle Nod */}
      <g
        className="animate-head-nod"
        style={{ transformOrigin: "195px 130px" }}
      >
        {/* This group encompasses head movements */}
        <circle cx="195" cy="130" r="25" fill="none" stroke="none" />
      </g>

      {/* Boy's Finger - Tapping Animation */}
      <g
        className="animate-finger-tap"
        style={{ transformOrigin: "250px 200px" }}
      >
        <rect x="250" y="200" width="4" height="15" fill="#333" rx="2" />
      </g>

      {/* Robot - Floating Animation */}
      <g
        className="animate-float-robot"
        style={{ transformOrigin: "650px 220px" }}
      >
        {/* Robot body container */}
        <circle cx="650" cy="220" r="2" fill="none" stroke="none" />

        {/* Antenna - Wiggling */}
        <g
          className="animate-wiggle-antenna"
          style={{ transformOrigin: "650px 190px" }}
        >
          <line
            x1="650"
            y1="190"
            x2="650"
            y2="160"
            stroke="#333"
            strokeWidth="2"
          />
          <circle cx="650" cy="155" r="4" fill="#E65A5A" />
        </g>
      </g>

      {/* Video Player - Play Button Pulsing */}
      <g
        className="animate-pulse-play"
        style={{ transformOrigin: "520px 180px" }}
      >
        {/* Play button circle */}
        <circle
          cx="520"
          cy="180"
          r="20"
          fill="#fff"
          stroke="#E65A5A"
          strokeWidth="2"
        />
        {/* Play triangle */}
        <polygon points="515,170 515,190 535,180" fill="#E65A5A" />
      </g>

      {/* Video Progress Bar - Sliding Animation */}
      <g style={{ transformOrigin: "420px 195px" }}>
        {/* Progress track background */}
        <rect x="380" y="192" width="80" height="6" fill="#ddd" rx="3" />

        {/* Animated progress bar */}
        <g className="animate-progress-bar">
          <rect x="380" y="192" width="20" height="6" fill="#E65A5A" rx="3" />
        </g>
      </g>

      {/* Data Flow Lines - Connecting boy, laptop, video */}
      {/* Line 1: Boy to Laptop */}
      <g className="animate-data-flow">
        <line
          x1="260"
          y1="220"
          x2="420"
          y2="240"
          stroke="#7A9BCD"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.4"
          filter="url(#glow)"
        />
      </g>

      {/* Line 2: Laptop to Video */}
      <g className="animate-data-flow" style={{ animationDelay: "0.3s" }}>
        <line
          x1="420"
          y1="240"
          x2="520"
          y2="180"
          stroke="#7A9BCD"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.4"
          filter="url(#glow)"
        />
      </g>

      {/* Line 3: Video to Robot */}
      <g className="animate-data-flow" style={{ animationDelay: "0.6s" }}>
        <line
          x1="540"
          y1="180"
          x2="630"
          y2="220"
          stroke="#7A9BCD"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.4"
          filter="url(#glow)"
        />
      </g>

      {/* Subtle breathing/sway for the entire scene */}
      <g
        className="animate-boy-sway"
        style={{ transformOrigin: "400px 300px" }}
      >
        {/* This encompasses subtle movement of the scene */}
        <circle cx="400" cy="300" r="1" fill="none" stroke="none" />
      </g>
    </svg>
  );
}
