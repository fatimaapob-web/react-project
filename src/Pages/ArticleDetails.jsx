import { useLocation, Link } from "react-router-dom";


function ArticleDetails() {
  const location = useLocation();
const article = location.state?.article;
if (!article) {
  return <h1>المقال غير موجود</h1>;
}

  return (
    <>
      <Link to="/articles" className="back-button">
        ← العودة إلى المقالات
      </Link>
   
      <article>
        <h1>{article.title}</h1>

        <span>🌱 البيئة</span>

<p>
  {new Date(article.publishedAt).toLocaleDateString()}
</p>

        <p>{article.description}</p>

        <div>
          {article.content}
        </div>
      </article>
    </>
  
);
  
}

export default ArticleDetails;