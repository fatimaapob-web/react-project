export const API_KEY = "88b03aae087a8388ea9445a9af694b36";

export async function getArticles() {
  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=environment&lang=en&apikey=${API_KEY}`
    );

    const data = await response.json();

    if (!response.ok) {
      alert(JSON.stringify(data));
      return [];
    }

    return data.articles || [];
  } catch (error) {
    console.log("Error fetching articles:", error);
    return [];
  }
}