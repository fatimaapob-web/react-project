import { useState } from "react";
import { articles } from "../data/articles";
import ArticleCard from "../components/articles/ArticleCard";

function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = [
    "الكل",
    "البيئة",
    "إعادة التدوير",
    "المياه",
    "الطاقة",
    "الزراعة المستدامة",
    "الحياة المستدامة",
    "العناية بالحيوانات",
  ];

  const filteredArticles =
    selectedCategory === "الكل"
      ? articles
      : articles.filter(
          (article) => article.category === selectedCategory
        );

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white px-4 sm:px-6 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-14">

          {/* Small Label */}
          <span className="inline-flex items-center gap-1 mb-5 px-5 py-2 rounded-full bg-[#CFC6B5] text-[#7A5742] text-sm font-semibold">
            🌱 المعرفة والاستدامة
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#45427A] mb-5">
            المقالات
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-[#425D7A] text-lg leading-8">
            اكتشف مقالات ونصائح تساعدنا على حماية البيئة
            وبناء مستقبل أكثر استدامة.
          </p>

        </div>

        {/* Categories */}
        <div
          dir="rtl"
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-5 py-2.5
                rounded-full
                font-semibold
                transition-all
                duration-300
                border
                ${
                  selectedCategory === category
                    ? "bg-[#7A5742] text-white border-[#7A5742] shadow-md scale-105"
                    : "bg-[#CFC6B5] text-[#7A5742] border-[#CFC6B5] hover:bg-[#7A6542] hover:text-white hover:border-[#7A6542] hover:-translate-y-1"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}

          </div>
        ) : (

          /* No Articles */
          <div className="text-center py-20">

            <div className="text-5xl mb-5">
              🌱
            </div>

            <h2 className="text-2xl font-bold text-[#45427A] mb-3">
              لا توجد مقالات
            </h2>

            <p className="text-[#425D7A]">
              لا توجد مقالات ضمن هذا التصنيف حاليًا.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Articles;