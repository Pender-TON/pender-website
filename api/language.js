export default (req, res) => {
  const languageHeader = req.headers["accept-language"];

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

  // Извлекаем текущий путь из запроса
  const currentPath = new URL(req.url, `https://${req.headers.host}`).pathname;

  // Перенаправляем на нужную версию сайта на основе языка
  if (preferredLanguage.includes("ru") && currentPath !== "/ru") {
    res.writeHead(302, { Location: "/ru" });
    res.end();
  } else if (!preferredLanguage.includes("ru") && currentPath !== "/") {
    res.writeHead(302, { Location: "/" });
    res.end();
  } else {
    // Если текущий путь уже совпадает с требуемым, ничего не делаем
    res.end();
  }
};
