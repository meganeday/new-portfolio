import Image from "next/image";
 
const cards = ["ace", "king", "queen", "jack"];
 
export default function HeroFan() {
  return (
    <div className="fan" aria-hidden="true">
      {cards.map((c) => (
        <div className="pc art" key={c}>
          <Image src={`/cards/${c}.png`} alt="" width={1000} height={1400} sizes="180px" priority />
        </div>
      ))}
    </div>
  );
}