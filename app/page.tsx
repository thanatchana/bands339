import BandCard from "@/components/BandCard";
import { bands } from "@/data/bands";

export default function FavoriteBandsPage() {
  return (
    <main className="page">
      <h1>วงดนตรีที่ชื่นชอบ</h1>
      <p className="pageDescription">
        รวมข้อมูลวงดนตรีที่ชื่นชอบ พร้อมรายชื่อสมาชิกของแต่ละวง
      </p>

      <section className="bandGrid">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}