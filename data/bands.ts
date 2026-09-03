import { Band } from "@/types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "Cocktail",
    genre: "Rock",
    image: "/images/bands/cocktail.jpg",
    members: ["	ปัณฑพล ประสารราชกิจ",
      "ชวรัตน์ หรรษคุณาฒัย", "เกริกเกียรติ สว่างวงศ์", "ฟิลิปส์ เปรมสิริกรณ์", "วิวัฒน์ สว่างวรรณรัตน์", "ชรัณ ตัณฑนันทน์"],
  },
  {
    id: 2,
    name: "Paradox",
    genre: "Alternative Rock",
    image: "/images/bands/paradox.jpg",
    members: ["ต้า - อิทธิพงศ์ กฤดากร ณ อยุธยา", "บิ๊ก - ขจัดภัย กาญจนาภา", "สอง - จักรพงศ์ สิริริน", "โจอี้  - เสรฐพร กฤดากร ณ อยุธยา"],
  },
  {
    id: 3,
    name: "Serious Bacon",
    genre: "Pop",
    image: "/images/bands/Serious-Bacon.jpg",
    members: ["เค้ก -  เปมิกา จิระนารักษ์", "เมือง - สองเมือง ไชยฤทธิ์"],
  },
];