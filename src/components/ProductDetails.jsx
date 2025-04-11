import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const products = [
    {
      id: 1,
      name: "Raw Radicals Chyawanprash",
      image: "/images/pic1.png",
      price: 1999,
      tagline: "Rooted in tradition, powered by nature.",
      description:
        "Raw Radicals brings you premium chyawanprash, blending ancient Ayurvedic wisdom with modern quality standards. Made with over 40 potent herbs, it supports immunity, energy, and overall vitality.",
    },
    {
      id: 2,
      name: "Ashwagandha Capsules",
      image: "/images/pic2.png",
      price: 999,
      tagline: "Balance stress. Enhance vitality.",
      description:
        "Our high-potency Ashwagandha capsules are formulated to help your body adapt to stress, promote calm, and support adrenal health naturally.",
    },
    {
      id: 3,
      name: "Triphala Detox Blend",
      image: "/images/pic3.jpeg",
      price: 799,
      tagline: "Gentle cleansing for gut wellness.",
      description:
        "Triphala, the ancient Ayurvedic trio of amla, haritaki, and bibhitaki, supports digestion, detoxification, and regularity without harsh side effects.",
    },
    {
      id: 4,
      name: "Tulsi Immunity Drops",
      image: "/images/pic1.png",
      price: 499,
      tagline: "Holy basil for holy immunity.",
      description:
        "Extracted from organic tulsi leaves, these drops boost respiratory health, reduce inflammation, and promote inner calm.",
    },
    {
      id: 5,
      name: "Moringa Supergreen Powder",
      image: "/images/pic2.png",
      price: 899,
      tagline: "Plant-based nourishment for your daily vitality.",
      description:
        "Moringa is a powerhouse of antioxidants, vitamins, and protein. Add it to smoothies, teas, or water for a daily green boost.",
    },
    {
      id: 6,
      name: "Shilajit Resin",
      image: "/images/pic1.png",
      price: 1499,
      tagline: "Strength. Stamina. Shilajit.",
      description:
        "Sourced from the Himalayas, this potent black resin supports energy, libido, and rejuvenation. Pure and lab-tested.",
    },
    {
      id: 7,
      name: "Amla C+ Capsules",
      image: "/images/pic2.png",
      price: 599,
      tagline: "Nature’s richest source of Vitamin C.",
      description:
        "Boost your collagen, immunity, and skin glow with these antioxidant-packed amla capsules, free from synthetic additives.",
    },
    {
      id: 8,
      name: "Gut Restore Probiotic",
      image: "/images/pic5.jpeg",
      price: 1199,
      tagline: "More than probiotics — a gut revolution.",
      description:
        "This multi-strain probiotic blend helps balance gut flora, reduce bloating, and improve digestion for daily wellness.",
    },
    {
      id: 9,
      name: "Herbal Sleep Drops",
      image: "/images/pic1.png",
      price: 699,
      tagline: "Fall asleep. Stay asleep. Wake refreshed.",
      description:
        "Crafted with valerian root, chamomile, and brahmi, this blend helps you drift off naturally — without grogginess.",
    },
    {
      id: 9,
      name: "Herbal Sleep Drops",
      image: "/images/pic1.png",
      price: 699,
      tagline: "Fall asleep. Stay asleep. Wake refreshed.",
      description:
        "Crafted with valerian root, chamomile, and brahmi, this blend helps you drift off naturally — without grogginess.",
    },
    {
      id: 11,
      name: "Herbal Sleep Drops",
      image: "/images/pic1.png",
      price: 699,
      tagline: "Fall asleep. Stay asleep. Wake refreshed.",
      description:
        "Crafted with valerian root, chamomile, and brahmi, this blend helps you drift off naturally — without grogginess.",
    },
    {
      id: 10,
      name: "Herbal Sleep Drops",
      image: "/images/pic1.png",
      price: 699,
      tagline: "Fall asleep. Stay asleep. Wake refreshed.",
      description:
        "Crafted with valerian root, chamomile, and brahmi, this blend helps you drift off naturally — without grogginess.",
    },
  ];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!product) {
      navigate("/"); // redirect to homepage or 404 if not found
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div className="bg-gray-100 text-black min-h-screen pt-24 px-4 md:px-16 pb-16 uppercase tracking-widest text-sm">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto bg-gray-100  object-contain "
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-800 mb-4">{product.tagline}</p>
          <p className="text-lg mb-4 text-gray-500">{product.description}</p>

          <div className="text-2xl font-bold mb-6">₹{product.price}</div>

          <button className="relative w-full py-3 rounded mt-4 overflow-hidden border border-black group">
              <span className="absolute inset-0 bg-black transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm">
                Add to Cart
              </span>
            </button>
        </div>
      </div>
    </div>
  );
}
