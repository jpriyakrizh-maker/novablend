import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import "./App.css";

const products = [
  {
    name: "Creamy Coffee",
    title: "Rich Creamy Coffee",
    description:
      "Smooth, rich and delicious coffee made with carefully selected ingredients.",
    price: "$25.50",
    color: "#3b2118",
    glow: "#b96f42",
    liquid: "#6b351d",
    cream: "#e5b17b",
  },
  {
    name: "Strawberry Cream",
    title: "Fresh Strawberry",
    description:
      "Sweet strawberry flavour blended with a soft creamy and refreshing finish.",
    price: "$27.50",
    color: "#641d32",
    glow: "#ef6684",
    liquid: "#c83d62",
    cream: "#ffb0c0",
  },
  {
    name: "Blueberry Bliss",
    title: "Blueberry Bliss",
    description:
      "A rich blueberry drink with a smooth, refreshing and fruity taste.",
    price: "$29.50",
    color: "#20295c",
    glow: "#647cff",
    liquid: "#4058c9",
    cream: "#aebcff",
  },
  {
    name: "Mint Fresh",
    title: "Cool Mint Fresh",
    description:
      "A cool mint flavour with a refreshing taste and creamy smooth texture.",
    price: "$23.50",
    color: "#16463f",
    glow: "#48d5b3",
    liquid: "#258d79",
    cream: "#a2ead8",
  },
  {
    name: "Mango Cream",
    title: "Golden Mango",
    description:
      "Sweet tropical mango blended into a creamy and delicious drink.",
    price: "$26.50",
    color: "#6b3e12",
    glow: "#ffb52e",
    liquid: "#d47c17",
    cream: "#ffe08a",
  },
  {
    name: "Lavender Milk",
    title: "Lavender Dream",
    description:
      "A soft lavender flavour with a delicate creamy and relaxing finish.",
    price: "$30.50",
    color: "#43285f",
    glow: "#b778e8",
    liquid: "#8151a8",
    cream: "#dfbaf5",
  },
];

function App() {
  const [activeProduct, setActiveProduct] = useState(0);
  const glassRef = useRef(null);

  const product = products[activeProduct];

  /* AUTOMATIC PRODUCT CHANGE */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProduct((current) => (current + 1) % products.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* MOUSE TILT */
  const handleMouseMove = (e) => {
    const glass = glassRef.current;

    if (!glass) return;

    const rect = glass.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 14;
    const rotateX = (y / rect.height - 0.5) * -14;

    glass.style.transform = `
      translateX(-50%)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  /* RESET TILT */
  const handleMouseLeave = () => {
    if (!glassRef.current) return;

    glassRef.current.style.transform = `
      translateX(-50%)
      rotateX(0deg)
      rotateY(0deg)
    `;
  };

  return (
    <div className="page">
      <div
        className="showcase"
        style={{
          background: `
            radial-gradient(
              circle at 50% 45%,
              ${product.glow} 0%,
              transparent 32%
            ),
            ${product.color}
          `,
        }}
      >
        {/* BRAND */}
        <div className="brand">
          <Sparkles size={18} strokeWidth={1.8} />
          <span>NovaBlend</span>
        </div>

        {/* LEFT CONTENT */}
        <div className="left-content">
          <h1>{product.title}</h1>

          <p>{product.description}</p>
        </div>

        {/* CENTER PRODUCT */}
        <div className="product-area">

          {/* FLOATING BUBBLES */}
          <div className="bubble bubble-1" />
          <div className="bubble bubble-2" />
          <div className="bubble bubble-3" />
          <div className="bubble bubble-4" />
          <div className="bubble bubble-5" />
          <div className="bubble bubble-6" />

          {/* GLASS */}
          <div
            key={activeProduct}
            ref={glassRef}
            className="glass-placeholder glass-enter"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* LIQUID */}
            <div
              className="liquid"
              style={{
                background: `
                  radial-gradient(
                    ellipse at 50% 0%,
                    ${product.cream} 0%,
                    transparent 25%
                  ),
                  linear-gradient(
                    115deg,
                    ${product.liquid},
                    ${product.cream},
                    ${product.liquid},
                    ${product.liquid}
                  )
                `,
              }}
            >
              {/* CREAM SWIRL */}
              <div
                className="cream-swirl"
                style={{
                  background: product.cream,
                }}
              />

              <div
                className="cream-swirl swirl-two"
                style={{
                  background: product.cream,
                }}
              />

              {/* ICE CUBES */}
              <div className="ice ice-one" />
              <div className="ice ice-two" />
              <div className="ice ice-three" />

              {/* INSIDE BUBBLES */}
              <div className="drink-bubble drink-bubble-one" />
              <div className="drink-bubble drink-bubble-two" />
              <div className="drink-bubble drink-bubble-three" />
              <div className="drink-bubble drink-bubble-four" />
              <div className="drink-bubble drink-bubble-five" />
            </div>

            {/* GLASS SHINE */}
            <div className="glass-shine" />

            {/* GLASS REFLECTION */}
            <div className="glass-reflection" />

            {/* BRAND ON GLASS */}
            <div className="glass-logo">NOVA</div>
          </div>

          {/* PRICE */}
          <div className="price">{product.price}</div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="right-content">
          <h3>{product.name}</h3>

          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;