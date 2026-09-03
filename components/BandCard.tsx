import Image from "next/image";
import { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="bandCard">
      <div className="bandImageWrap">
        <Image
          src={band.image}
          alt={`วง ${band.name}`}
          width={400}
          height={400}
          className="bandImage"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>

      <div className="bandInfo">
        <h2>{band.name}</h2>
        <p className="bandGenre">แนวเพลง: {band.genre}</p>

        <h3>สมาชิกวง</h3>
        <ul className="memberList">
          {band.members.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}