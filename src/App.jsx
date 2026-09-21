import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import "./App.css";

const bottlePNG =
  "https://pngimg.com/uploads/bottle/bottle_PNG2942.png";

const products = [
  {
    name: "Creamy Coffee",
    title: "Rich Creamy Coffee",
    description:
      "Smooth, rich and delicious coffee made with carefully selected ingredients.",
    price: "$25.50",
    color: "#3b2118",
    glow: "#b96f42",
    liquid: "#7a3f22",
    light: "#d28a55",
  },
  {
    name: "Strawberry Cream",
    title: "Fresh Strawberry",
    description:
      "Sweet strawberry flavour blended with a soft creamy and refreshing finish.",
    price: "$27.50",
    color: "#641d32",
    glow: "#ef6684",
    liquid: "#d83d68",
    light: "#ff9eb4",
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
    light: "#91a2ff",
  },
  {
    name: "Mint Fresh",
    title: "Cool Mint Fresh",
    description:
      "A cool mint flavour with a refreshing taste and creamy smooth texture.",
    price: "$23.50",
    color: "#16463f",
    glow: "#48d5b3",
    liquid: "#239a80",
    light: "#83e6d0",
  },
  {
    name: "Mango Cream",
    title: "Golden Mango",
    description:
      "Sweet tropical mango blended into a creamy and delicious drink.",
    price: "$26.50",
    color: "#6b3e12",
    glow: "#ffb52e",
    liquid: "#f49a16",
    light: "#ffd66b",
  },
  {
    name: "Lavender Milk",
    title: "Lavender Dream",
    description:
      "A soft lavender flavour with a delicate creamy and relaxing finish.",
    price: "$30.50",
    color: "#43285f",
    glow: "#b778e8",
    liquid: "#8651b4",
    light: "#d4a8ef",
  },
];

function App() {
  const [activeProduct, setActiveProduct] = useState(0);
  const bottleRef = useRef(null);

  const product = products[activeProduct];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProduct((current) => (current + 1) % products.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const bottle = bottleRef.current;

    if (!bottle) return;

    const rect = bottle.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;

    bottle.style.transform = `
      translateX(-50%)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    if (!bottleRef.current) return;

    bottleRef.current.style.transform = `
      translateX(-50%)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
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
          <Sparkles size={18} />
          <span>NOVABLEND</span>
        </div>

        {/* LEFT */}
        <div className="left-content">
          <span className="eyebrow">PREMIUM BLEND</span>

          <h1>{product.title}</h1>

          <p>{product.description}</p>
        </div>

        {/* CENTER */}
        <div className="product-area">

          {/* FLOATING BUBBLES */}
          <div className="bubble bubble-1" />
          <div className="bubble bubble-2" />
          <div className="bubble bubble-3" />
          <div className="bubble bubble-4" />
          <div className="bubble bubble-5" />
          <div className="bubble bubble-6" />

          {/* BOTTLE */}
          <div
            key={activeProduct}
            ref={bottleRef}
            className="bottle-container bottle-enter"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* LIQUID INSIDE BOTTLE */}
            <div
              className="bottle-liquid"
              style={{
                background: `
                  linear-gradient(
                    90deg,
                    ${product.liquid},
                    ${product.light},
                    ${product.liquid}
                  )
                `,
              }}
            >
              <div className="liquid-top" />

              <div className="liquid-shine" />

              <div className="liquid-bubble liquid-bubble-1" />
              <div className="liquid-bubble liquid-bubble-2" />
              <div className="liquid-bubble liquid-bubble-3" />
            </div>

            {/* GLASS BOTTLE */}
            <img
              src={bottlePNG}
              alt={product.name}
              className="bottle-image"
            />

            {/* GLASS REFLECTION */}
            <div className="glass-highlight" />

            {/* BOTTLE GLOW */}
            <div
              className="bottle-glow"
              style={{
                background: product.glow,
              }}
            />
          </div>

          {/* PRICE */}
          <div className="price">{product.price}</div>
        </div>

        {/* RIGHT */}
        <div className="right-content">
          <div className="product-count">
            <span>
              {String(activeProduct + 1).padStart(2, "0")}
            </span>

            <div />

            <span>06</span>
          </div>

          <h3>{product.name}</h3>

          <button>
            Buy Now
            <ArrowRight size={17} />
          </button>
        </div>

        {/* BOTTOM */}
        <div className="bottom-line">
          <span>CRAFTED FOR YOUR MOMENT</span>

          <div className="dots">
            {products.map((_, index) => (
              <span
                key={index}
                className={
                  index === activeProduct ? "dot active" : "dot"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;