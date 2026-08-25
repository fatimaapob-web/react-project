import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";

function ArticleDetails() {
  const { id } = useParams();

  const article = articles.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return (
      <div
        dir="rtl"
        className="min-h-screen bg-[#fafaf8] flex flex-col items-center justify-center px-6"
      >
        <div className="text-6xl mb-6">🌱</div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          المقال غير موجود
        </h1>

        <Link
          to="/articles"
          className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          العودة إلى المقالات
        </Link>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#fafaf8] px-4 sm:px-6 py-10 md:py-14"
    >
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 mb-8 text-green-700 font-semibold hover:text-green-900 transition"
        >
          ← العودة إلى المقالات
        </Link>

        {/* Article */}
        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">

          {/* Image */}
          <div className="relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 sm:h-80 md:h-[450px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            <span className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-green-700 text-sm font-bold shadow-md">
              {article.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-12">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-9 mb-8">
              {article.description}
            </p>

            {/* Info */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500 border-y border-gray-100 py-5 mb-8">
              <span>📅 {article.date}</span>
              <span>✍️ {article.author}</span>
              <span>📚 {article.source}</span>
            </div>

            {/* Content */}
            <div className="text-gray-700 text-lg leading-9 whitespace-pre-line">
              {article.content}
            </div>

            {/* Source */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <span className="text-gray-500">
                المصدر:
              </span>

              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-green-700 font-semibold hover:underline"
              >
                {article.source} ↗
              </a>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}

export default ArticleDetails;