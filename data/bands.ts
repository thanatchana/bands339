import { Band } from "@/types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "Cocktail",
    genre: "Rock",
    image: "/images/bands/cocktail.jpg",
    members: ["ปั้น - ธนกฤต", "โอม", "เล็ก", "ฟิลิปส์"],
  },
  {
    id: 2,
    name: "Paradox",
    genre: "Alternative Rock",
    image: "/images/bands/paradox.jpg",
    members: ["ต้า - อารมณ์", "โจ้", "อ๊อฟ", "ป๊อด"],
  },
  {
    id: 3,
    name: "Serious Bacon",
    genre: "Pop",
    image: "/images/bands/serious-bacon.jpg",
    members: ["เค้ก - เปมิกา", "สองเมือง - ไชยฤทธิ์"],
  },
];