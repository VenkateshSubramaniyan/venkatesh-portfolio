import { useEffect } from "react";

const NakerBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js";
    script.setAttribute("data-who", "💎 Made with naker.io 💎");
    script.setAttribute("data-option", JSON.stringify({
      environment: {
        gradient: "horizontal",
        sensitivity: 1,
        colorStart: [0, 0, 0, 1],
        colorEnd: [0, 0, 0, 1]
      },
      particle: {
        life: 5,
        power: 0.007,
        texture: "https://res.cloudinary.com/naker-io/image/upload/v1566560053/trace_01.png", // trace_01
        number: 730,
        colorStart: [253, 253, 253, 0.47],
        colorEnd: [255, 255, 255, 0.43],
        sizeStart: 0.4,
        sizeEnd: 0.8,
        direction1: { x: 0, y: 100, z: 100 },
        direction2: { x: 0, y: 0, z: 0 }
      }
    }));

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);

      // Remove canvas that Naker injects
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.remove();
      }
    };
  }, []);

  return null;
};

export default NakerBackground;
