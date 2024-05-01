import { useQuizStore } from "@/store/quiz";
import { QuizType } from "../../../types";

export default function Quiz({
  alpha,
  text,
  id,
  answer,
  correctAnswer,
  quiz,
}: {
  alpha: string;
  text: string;
  id: number;
  answer: string;
  correctAnswer: boolean;
  quiz: QuizType;
}) {
  const setSelectedAnswer = useQuizStore((state) => state.setSelectedAnswer);
  const selectedAnswer = useQuizStore((state) => state.selectedAnswer);

  const points = useQuizStore((state) => state.points);
  const addPoints = useQuizStore((state) => state.addPoints);
  const hasAnswered = selectedAnswer !== "";

  return (
    <label
      htmlFor={alpha}
      className={`flex items-center justify-between w-full gap-x-6 max-w-xl mx-auto rounded-full px-4 py-3 font-geistmono cursor-pointer min-h-16 duration-300 bg-zinc-100`}
      // ${
      //   answer === alpha ? "bg-primary text-white" : "bg-error text-white"
      // }
    >
      <div
        className={`min-w-8 min-w-h-8 grid place-content-center rounded-full font-medium bg-white`}
        // ${
        //   answer === alpha
        //     ? "bg-[#1d64c0] text-white"
        //     : "bg-[#bb2020] text-white"
        // }
      >
        {alpha}
      </div>{" "}
      <p className="select-none text-sm">{text}</p>
      <input
        id={alpha}
        name="option"
        type="radio"
        value={alpha}
        onChange={(e) => {
          setSelectedAnswer(e.target.value);
          if (e.target.value === quiz.answer) {
            addPoints();
          }
        }}
        disabled={hasAnswered}
        className={`ml-auto self-center h-4 w-4 rounded-full text-primary focus:ring-transparent border-gray-300`}
        // ${
        //   answer === alpha
        //     ? "border-[#1d64c0] text-secondary"
        //     : "border-[#bb2020] text-red-500"
        // }
      />
    </label>
  );
}
