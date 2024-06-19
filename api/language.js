export default (req, res) => {
  const language = req.headers["accept-language"];
  if (language.includes("ru")) {
    res.writeHead(302, { Location: "/ru" });
    res.end();
  } else {
    res.writeHead(302, { Location: "/" });
    res.end();
  }
};
