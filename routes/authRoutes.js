const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: "select_account"
    })
  );

  app.get('/logout', (req, res) => {
    req.logout(); // assuming you use Passport.js for authentication
    res.redirect('/');
});


  app.get("/auth/google/callback", 
  passport.authenticate("google"),
  (req,res) => {
    res.redirect("/surveys");
  }
);

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};

