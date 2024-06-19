export default (req, res) => {
  const languageHeader = req.headers["accept-language"];
  console.log("Received Language Header:", languageHeader);

  // Парсим заголовок и ищем язык с наивысшим приоритетом
  const languages = languageHeader.split(",");
  const preferredLanguage = languages
    .map((lang) => {
      const [code, priority] = lang.split(";")[0].trim().split(";");
      return {
        code,
        priority: priority ? parseFloat(priority.split("=")[1]) : 1,
      };
    })
    .sort((a, b) => b.priority - a.priority)[0].code; // Получаем язык с наивысшим приоритетом

  console.log("Preferred Language:", preferredLanguage);

  // Перенаправляем на нужную версию сайта на основе языка
  if (preferredLanguage.includes("ru")) {
    console.log("Redirecting to Russian version");
    res.writeHead(302, { Location: "/ru" });
    res.end();
  } else {
    console.log("Redirecting to English version");
    res.writeHead(302, { Location: "/" });
    res.end();
  }
};
