import { ExamShow } from "@/widgets/examshow";
import { Header } from "@/widgets/header";
import { QuestionList } from "@/widgets/questionlist";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Header />
      <ExamShow id={id} />
      <QuestionList id={id} />
    </>
  );
}
