import Image from "next/image";
import chapters from "@/lib/chapters";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {chapters.map((chapter) => (
        <Link key={chapter.slug} href={`/chapters/${chapter.slug}`}>
          <Image
            src={chapter.image}
            alt={chapter.name}
            width={250}
            height={250}
          />
        </Link>
      ))}
    </div>
  );
}
