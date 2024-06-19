export default (req, res) => {
  const language = req.headers["accept-language"];
  console.log("Accept-Language:", language); // Добавьте эту строку для логирования

  if (language && language.includes("ru")) {
    res.writeHead(302, { Location: "/ru" });
  } else {
    res.writeHead(302, { Location: "/" });
  }
  res.end();
};
