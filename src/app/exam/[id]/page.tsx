import { ExamShow } from "@/widgets/examshow";
import { Header } from "@/widgets/header";

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <Header />
      <ExamShow id={params.id} />
    </>
  );
}
