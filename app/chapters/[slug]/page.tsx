import chapters from "@/lib/chapters";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chapters.find((c) => c.slug === slug);
  return <p>{chapter?.description}</p>;
}
