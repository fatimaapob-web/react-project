import
 { useEffect, useState } from "react";
import { getArticles } from "../services/newsApi";
import { Link } from "react-router-dom";


function Articles() {
    const [apiArticles, setApiArticles] = useState([]);
   useEffect(() => {
  getArticles().then((data) => {
    console.log("Articles from API:", data);
    setApiArticles(data);
  });
}, []);
  return (
    <div>
      <h1>المقالات</h1>
      <p>اكتشف مقالات ونصائح تساعدنا على حماية البيئة وبناء مستقبل أكثر استدامة 🌱</p>

<div>
  {apiArticles.map((article) => (
    <article key={article.id} className="article-card">
        <img
  src={article.image}
  alt={article.title}
/>
      <h2 className="article-title">{article.title}</h2>
      <span className="article-category">
  🌱 البيئة
</span>
      <p className="article-description">{article.description}</p>
      <span className="article-date">
  {new Date(article.publishedAt).toLocaleDateString()}
</span>

 <Link
  to={`/article/${article.id}`}
  state={{ article }}
  className="article-button"
>
  اقرأ المقال
</Link>
    </article>
  ))}
</div>
    </div>
  );
}

export default Articles;