export default (req, res) => {
  const languageHeader = req.headers["accept-language"];
  console.log("Received Language Header:", languageHeader);
  console.log("Preferred Language:", preferredLanguage);
  console.log("Current URL:", req.url);

  // Парсим заголовок и ищем язык с наивысшим приоритетом
  const preferredLanguage = languageHeader
    .split(",")
    .map((lang) => lang.split(";")[0].trim()) // Убираем качественный фактор, если он есть
    .find((lang) => lang.includes("en") || lang.includes("ru")); // Ищем английский или русский

  if (preferredLanguage && preferredLanguage.includes("ru")) {
    console.log("Redirecting to Russian version");
    res.writeHead(302, { Location: "/ru" });
  } else {
    console.log("Redirecting to English version");
    res.writeHead(302, { Location: "/" });
  }
  res.end();
};
