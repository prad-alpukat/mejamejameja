import Link from "next/link";

export default function HighlightNews() {
  const data = [
    {
      image: "/images/highlight-news/one-stop.jpeg",
      title: "Genos Systems: One-Stop AI Development Solutions",
      description:
        "Genos Systems provides a simple yet powerful solution for all your AI development needs, making it easier for you to tap into the endless possibilities of AI technology.",
      href: "https://open.substack.com/pub/frgavin/p/one-stop-ai-development-solution?r=55fwj1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    },
    {
      image: "/images/highlight-news/genosio.jpeg",
      title: "Genosio  𝕏 Bot Multilingual AI",
      description:
        "With its advanced multilingual capabilities, Genosio is transforming how influencers and traders interact with the digital ecosystem.",
      href: "https://open.substack.com/pub/frgavin/p/genosio-bot-multilingual-ai-empowering?r=55fwj1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    },
    {
      image: "/images/highlight-news/Launch.jpeg",
      title: "$GENOS Token Launch",
      description: "A Visionary Overview, Empowering Use Case, and Your Pathway to Purchase $GENOS",
      href: "https://open.substack.com/pub/frgavin/p/genos-token-will-launch-on-uniswap?r=55fwj1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
    },
  ];
  return (
    <div className="highlight-news">
      {data.map((item, index) => (
        <CardHightlightNews key={index} item={item} />
      ))}
    </div>
  );
}

function CardHightlightNews({ item }) {
  return (
    <div className="highlight-news-card">
      <Link href={item.href} target="_blank">
        <img src={item.image} alt={item.title} className="mb-3 thumbnail-highlight-news-card" />
      </Link>
      <h3 className="mb-1">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}
