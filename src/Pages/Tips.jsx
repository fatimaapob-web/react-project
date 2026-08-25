import { tips } from "../data/tips";
import TipCard from "../components/articles/TipCard";

function Tips() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#fafaf8] px-4 sm:px-6 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-14">

          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
            🌱 نصائح بسيطة
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            نصائح بيئية
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-8">
            أفكار ونصائح بسيطة تساعدك على اتخاذ خطوات
            أكثر استدامة في حياتك اليومية.
          </p>

        </div>

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {tips.map((tip) => (
            <TipCard
              key={tip.id}
              tip={tip}
            />
          ))}

        </div>

      </div>
    </div>
  );
}

export default Tips;
