import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <article className="group relative h-[430px] overflow-hidden rounded-3xl shadow-md">

      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">

        <span className="w-fit mb-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm font-semibold">
          {article.category}
        </span>

        <h2 className="text-2xl font-bold leading-9 mb-3">
          {article.title}
        </h2>

        <p className="text-white/85 leading-7 mb-4 line-clamp-2">
          {article.description}
        </p>

        <div className="flex flex-wrap gap-3 text-sm text-white/75 mb-5">
          <span>📅 {article.date}</span>
          <span>✍️ {article.author}</span>
        </div>

      
        <Link
          to={`/article/${article.id}`}
          className="w-full text-center px-5 py-3 rounded-xl bg-white text-green-700 font-bold hover:bg-green-50 transition-all duration-300"
        >
          اقرأ المقال ←
        </Link>

      </div>
    </article>
  );
}

export default ArticleCard;