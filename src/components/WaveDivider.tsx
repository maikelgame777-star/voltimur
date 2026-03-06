export function DarkToLight() {
  return (
    <div className="bg-[#0d1117] -mb-px overflow-hidden">
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C200,100 400,0 600,50 C800,100 1000,10 1200,55 C1320,80 1380,30 1440,50 L1440,100 L0,100 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export function LightToDark() {
  return (
    <div className="bg-white -mb-px overflow-hidden">
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C200,0 400,100 600,50 C800,0 1000,90 1200,45 C1320,20 1380,70 1440,50 L1440,100 L0,100 Z"
          fill="#0d1117"
        />
      </svg>
    </div>
  );
}
