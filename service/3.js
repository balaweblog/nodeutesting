class Book{
    getIndexPage(req, res) {
        if (req.user.isLoggedIn()) {
          return res.send("Hey");
        }
        res.send("Ooops. You need to log in to access this page");
      }
}
module.exports = Book;