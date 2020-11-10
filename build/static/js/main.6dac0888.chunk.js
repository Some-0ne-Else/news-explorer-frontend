(this["webpackJsonpnews-explorer-frontend"] =
  this["webpackJsonpnews-explorer-frontend"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, a) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMA3yAQz++fYFBAMM5jkV0AAABYSURBVBjTYyAPlO7ejeBIgzgKUA5InCMMicMlnYDgMChuM0BwmKSdoRyw1BYDCEcQCER3O0M4u8FACEnZRgVMA6D6IRyoBJzDDrWTIRrk0AlQtxUCOeQDAJTKHWfi5/b0AAAAAElFTkSuQmCC";
    },
    function (e, a) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAJ1BMVEUAAAAZGiIYHCAQECAZGiEbHCIZGiIZGyAZGiEZGSAYGCAbICAaGyI+lpG7AAAADHRSTlMA3yAQz++fYN9QQDBn7O0SAAAAWElEQVQY02MgD5SeOYPgyIA4ClAOSJwzDInDLZOA4DAoHjNAcJhknKEcsNQRAwhHEAhEzzhDOGfAoAlJ2QkFTAOg+iEcqAScww61kyEG5NAFULcVAjnkAwAl7yAREnCRFgAAAABJRU5ErkJggg==";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {
      e.exports = t.p + "static/media/author_photo.6a971bbd.jpg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/facebook_logo.5a290307.svg";
    },
    function (e, a, t) {
      e.exports = t.p + "static/media/github_logo.b710d332.svg";
    },
    function (e, a, t) {
      e.exports = t(49);
    },
    ,
    ,
    ,
    ,
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    ,
    ,
    ,
    ,
    ,
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {},
    function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        o = t.n(n),
        l = t(17),
        c = t.n(l),
        i = t(3),
        r = (t(27), t(7)),
        s = (t(28), t(1)),
        m = (t(29), t(30), t(31), t(10)),
        u = t.n(m),
        _ = t(11),
        p = t.n(_);
      var d = function (e) {
        var a = e.isLoggedIn,
          t = e.isMobileMenu,
          n = e.handleMobileMenuClick,
          l = e.userName,
          c = e.isSavedNews,
          r = e.handleLogout,
          s = e.loginButtonHandler,
          m = "navigation__menu-link",
          _ = "navigation__menu-link_active",
          d = "navigation__menu-item",
          E = "navigation__menu-button",
          b = "navigation__mobile-button",
          N = u.a;
        return (
          c &&
            ((m = "navigation__menu-link navigation__menu-link_theme_white"),
            (_ =
              "navigation__menu-link_active navigation__menu-link_active_theme_white"),
            (d = "navigation__menu-item navigation__menu-item_theme_white"),
            (E = "navigation__menu-button navigation__menu-button_theme_white"),
            (b =
              "navigation__mobile-button navigation__mobile-button_theme_white"),
            (N = p.a)),
          t
            ? o.a.createElement("button", {
                type: "button",
                className: b,
                onClick: n,
              })
            : a
            ? o.a.createElement(
                "nav",
                { className: "navigation" },
                o.a.createElement(
                  "ul",
                  { className: "navigation__menu" },
                  o.a.createElement(
                    "li",
                    { className: d },
                    o.a.createElement(
                      i.c,
                      { exact: !0, to: "/", className: m, activeClassName: _ },
                      "\u0413\u043b\u0430\u0432\u043d\u0430\u044f"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    { className: d },
                    o.a.createElement(
                      i.c,
                      {
                        exact: !0,
                        to: "/saved-news",
                        className: m,
                        activeClassName: _,
                      },
                      "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    { className: d },
                    o.a.createElement(
                      "button",
                      { className: E, onClick: r },
                      l,
                      o.a.createElement("img", {
                        alt:
                          "\u0418\u043a\u043e\u043d\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0430",
                        src: N,
                      })
                    )
                  )
                )
              )
            : o.a.createElement(
                "nav",
                { className: "navigation" },
                o.a.createElement(
                  "ul",
                  { className: "navigation__menu" },
                  o.a.createElement(
                    "li",
                    { className: d },
                    o.a.createElement(
                      i.c,
                      { exact: !0, to: "/", className: m, activeClassName: _ },
                      "\u0413\u043b\u0430\u0432\u043d\u0430\u044f"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    { className: d },
                    o.a.createElement(
                      "button",
                      { onClick: s, className: E },
                      "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"
                    )
                  )
                )
              )
        );
      };
      var E = function (e) {
        var a = e.isLoggedIn,
          t = e.userName,
          n = e.isMobileMenu,
          l = e.handleMobileMenuClick,
          c = e.loginButtonHandler,
          r = e.handleLogout,
          s = e.isSavedNews,
          m = "header__link",
          u = "header";
        return (
          s &&
            ((m = "header__link header__link_theme_white"),
            (u = "header header_theme_white")),
          o.a.createElement(
            "section",
            { className: u },
            o.a.createElement(
              "div",
              { className: "header__wrapper" },
              o.a.createElement(
                "h1",
                { className: "header__title" },
                o.a.createElement(
                  i.b,
                  { to: "/", className: m },
                  "NewsExplorer"
                )
              ),
              o.a.createElement(d, {
                isLoggedIn: a,
                isMobileMenu: n,
                handleMobileMenuClick: l,
                isSavedNews: s,
                userName: t,
                loginButtonHandler: c,
                handleLogout: r,
              })
            )
          )
        );
      };
      t(37);
      var b = function () {
          return o.a.createElement(
            "form",
            { className: "search__form" },
            o.a.createElement("input", {
              className: "search__input",
              placeholder:
                "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",
            }),
            o.a.createElement(
              "button",
              { className: "search__button", type: "submit" },
              o.a.createElement(
                "p",
                { className: "search__button-text" },
                "\u0418\u0441\u043a\u0430\u0442\u044c"
              )
            )
          );
        },
        N = (t(38), t(19)),
        g = t.n(N);
      var v = function () {
          return o.a.createElement(
            "section",
            { className: "about" },
            o.a.createElement(
              "div",
              { className: "about__wrapper" },
              o.a.createElement("img", {
                className: "about__photo",
                alt:
                  "\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0430",
                src: g.a,
              }),
              o.a.createElement(
                "div",
                { className: "about__info" },
                o.a.createElement(
                  "h2",
                  { className: "about__title" },
                  "\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"
                ),
                o.a.createElement(
                  "p",
                  { className: "about__text" },
                  "\u042d\u0442\u043e \u0431\u043b\u043e\u043a \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442, \u0447\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c, \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435."
                ),
                o.a.createElement(
                  "p",
                  { className: "about__text" },
                  "\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435, \u0447\u0435\u043c\u0443 \u0432\u044b \u0442\u0443\u0442 \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c, \u0438 \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c."
                )
              )
            )
          );
        },
        f = (t(39), t(20)),
        h = t.n(f),
        w = t(21),
        A = t.n(w);
      var k = function () {
        return o.a.createElement(
          "section",
          { className: "footer" },
          o.a.createElement(
            "p",
            { className: "footer__copyright" },
            "\xa9 2020 Supersite, Powered by News API"
          ),
          o.a.createElement(
            "div",
            { className: "footer__wrapper" },
            o.a.createElement(
              "nav",
              { className: "footer__nav" },
              o.a.createElement(
                "ul",
                { className: "footer__menu" },
                o.a.createElement(
                  "li",
                  { className: "footer__menu-item" },
                  o.a.createElement(
                    i.b,
                    { to: "/", className: "footer__menu-link" },
                    "\u0413\u043b\u0430\u0432\u043d\u0430\u044f"
                  )
                ),
                o.a.createElement(
                  "li",
                  { className: "footer__menu-item" },
                  o.a.createElement(
                    "a",
                    {
                      href: "https://praktikum.yandex.ru",
                      className: "footer__menu-link",
                      rel: "noopener noreferrer",
                      target: "_blank",
                    },
                    "\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "footer__social-media" },
              o.a.createElement(
                "a",
                {
                  className: "footer__social-media-link",
                  href: "https://github.com/Some-0ne-Else",
                  rel: "noopener noreferrer",
                  target: "_blank",
                },
                o.a.createElement("img", {
                  className: "footer__link-image",
                  alt: "Github logo",
                  src: A.a,
                })
              ),
              o.a.createElement(
                "a",
                {
                  className: "footer__social-media-link",
                  href: "https://facebook.com",
                  rel: "noopener noreferrer",
                  target: "_blank",
                },
                o.a.createElement("img", {
                  className: "footer__link-image",
                  alt: "Facebook logo",
                  src: h.a,
                })
              )
            )
          )
        );
      };
      var S = function (e) {
        var a = e.DeactivateSavedNews,
          t = e.isLoggedIn,
          n = e.userName,
          l = e.isMobileMenu,
          c = e.handleMobileMenuClick,
          i = e.loginButtonHandler,
          r = e.handleLogout;
        return (
          o.a.useEffect(function () {
            a();
          }),
          o.a.createElement(
            "section",
            { className: "main" },
            o.a.createElement(E, {
              DeactivateSavedNews: a,
              isLoggedIn: t,
              userName: n,
              isMobileMenu: l,
              handleMobileMenuClick: c,
              loginButtonHandler: i,
              handleLogout: r,
              isSavedNews: !1,
            }),
            o.a.createElement(
              "div",
              { className: "main__wrapper" },
              o.a.createElement(
                "h2",
                { className: "main__title" },
                "\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"
              ),
              o.a.createElement(
                "p",
                { className: "main__subtitle" },
                "\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."
              ),
              o.a.createElement(b, null)
            ),
            o.a.createElement(v, null),
            o.a.createElement(k, null)
          )
        );
      };
      t(40), t(41);
      var y = function (e) {
        var a = e.userName,
          t = e.keywordsArray;
        return o.a.createElement(
          "section",
          { className: "saved-news-header" },
          o.a.createElement(
            "h2",
            { className: "saved-news-header__title" },
            "\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"
          ),
          o.a.createElement(
            "p",
            { className: "saved-news-header__greeting" },
            a,
            ", \u0443 \u0432\u0430\u0441 5 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"
          ),
          o.a.createElement(
            "p",
            { className: "saved-news-header__keywords" },
            "\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c:",
            " ",
            o.a.createElement(
              "span",
              { className: "saved-news-header__keywords-span" },
              t[0],
              ", ",
              t[1]
            ),
            " ",
            "\u0438",
            " ",
            o.a.createElement(
              "span",
              { className: "saved-news-header__keywords-span" },
              t.length - 2,
              "-\u043c \u0434\u0440\u0443\u0433\u0438\u043c"
            )
          )
        );
      };
      t(42), t(43);
      var C = function (e) {
        var a = e.keyword,
          t = e.title,
          n = e.text,
          l = e.date,
          c = e.source,
          i = e.image;
        return e.isSearchCard
          ? o.a.createElement(
              "div",
              { className: "news-card" },
              o.a.createElement(
                "div",
                { className: "news-card__image-wrapper" },
                o.a.createElement("button", {
                  className: "news-card__bookmark-button",
                }),
                o.a.createElement("img", {
                  className: "news-card__image",
                  src: i,
                  alt: "",
                })
              ),
              o.a.createElement(
                "div",
                { className: "news-card__description-wrapper" },
                o.a.createElement("p", { className: "news-card__date" }, l),
                o.a.createElement("p", { className: "news-card__title" }, t),
                o.a.createElement("p", { className: "news-card__text" }, n),
                o.a.createElement("p", { className: "news-card__source" }, c)
              )
            )
          : o.a.createElement(
              "div",
              { className: "news-card" },
              o.a.createElement(
                "div",
                { className: "news-card__image-wrapper" },
                o.a.createElement("p", { className: "news-card__keyword" }, a),
                o.a.createElement("button", {
                  className: "news-card__delete-button",
                }),
                o.a.createElement("img", {
                  className: "news-card__image",
                  src: i,
                  alt: "",
                })
              ),
              o.a.createElement(
                "div",
                { className: "news-card__description-wrapper" },
                o.a.createElement("p", { className: "news-card__date" }, l),
                o.a.createElement("p", { className: "news-card__title" }, t),
                o.a.createElement("p", { className: "news-card__text" }, n),
                o.a.createElement("p", { className: "news-card__source" }, c)
              )
            );
      };
      var M = function (e) {
        var a = e.cards,
          t = e.isSearchCard;
        return o.a.createElement(
          "section",
          { className: "news-card-list" },
          a.map(function (e) {
            return o.a.createElement(C, {
              keyword: e.keyword,
              title: e.title,
              text: e.text,
              date: e.date,
              image: e.image,
              key: e._id,
              isSearchCard: t,
            });
          })
        );
      };
      var L = function (e) {
        var a = e.ActivateSavedNews,
          t = e.isSavedNews,
          n = e.isLoggedIn,
          l = e.userName,
          c = e.isMobileMenu,
          i = e.handleMobileMenuClick,
          r = e.handleLogout;
        return (
          o.a.useEffect(
            function () {
              a();
            },
            [a]
          ),
          o.a.createElement(
            "section",
            { className: "saved-news" },
            o.a.createElement(E, {
              isSavedNews: t,
              isLoggedIn: n,
              userName: l,
              isMobileMenu: c,
              handleMobileMenuClick: i,
              handleLogout: r,
            }),
            o.a.createElement(y, {
              userName: l,
              keywordsArray: [
                "\u041f\u0440\u0438\u0440\u043e\u0434\u0430",
                "\u0422\u0430\u0439\u0433\u0430",
                "\u0435\u0449\u0435 \u043e\u0434\u0438\u043d",
                "\u0435\u0449\u0435 \u043e\u0434\u0438\u043d",
              ],
            }),
            o.a.createElement(M, {
              cards: [
                {
                  _id: "5f8f4348e547192874e08cf4",
                  keyword: "\u041f\u0440\u0438\u0440\u043e\u0434\u0430",
                  title:
                    "\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2013 \u043f\u0430\u0440\u043a\u0438",
                  text:
                    "\u0412 2016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432 \u2013 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0438\u0440\u043e\u0434\u0435. ",
                  date: "2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",
                  source: "\u0414\u0437\u0435\u043d",
                  link: "http://link.ru",
                  image: "http://ihaveerror.ru/img/card_1.jpg",
                  __v: 0,
                },
                {
                  _id: "5f8f62988cb60c0c6cf61f3f",
                  keyword: "\u041f\u0440\u0438\u0440\u043e\u0434\u0430",
                  title:
                    "\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",
                  text:
                    "\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",
                  date: "2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",
                  source: "\u0410\u0444\u0438\u0448\u0430",
                  link: "http://link.ru",
                  image: "http://ihaveerror.ru/img/card_2.jpg",
                  __v: 0,
                },
                {
                  _id: "5f8f62988cb60c0c6cf61m2f",
                  keyword: "\u0422\u0430\u0439\u0433\u0430",
                  title:
                    "\xab\u041f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0439\u0433\u0430\xbb: \u043d\u043e\u0432\u044b\u0439 \u0444\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442 \u0418\u0433\u043e\u0440\u044f \u0428\u043f\u0438\u043b\u0435\u043d\u043a\u0430",
                  text:
                    "\u0417\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u0441\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u0435\u0441\u0430 \u0420\u043e\u0441\u0441\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f. \u0412 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u043e\u043d \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u0432 \u0414\u0432\u0438\u043d\u0441\u043a\u043e-\u041f\u0438\u043d\u0435\u0436\u0441\u043a\u0443\u044e \u0442\u0430\u0439\u0433\u0443, \u0433\u0434\u0435...",
                  date: "2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",
                  source:
                    "\u041c\u0435\u0434\u0438\u0430\u0437\u043e\u043d\u0430",
                  link: "http://link.ru",
                  image: "http://ihaveerror.ru/img/card_3.jpg",
                  __v: 0,
                },
                {
                  _id: "5f8f4348e547192874e08cf8",
                  keyword: "\u041f\u0440\u0438\u0440\u043e\u0434\u0430",
                  title:
                    "\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2013 \u043f\u0430\u0440\u043a\u0438",
                  text:
                    "\u0412 2016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432 \u2013 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0438\u0440\u043e\u0434\u0435. ",
                  date: "2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",
                  source: "\u0414\u0437\u0435\u043d",
                  link: "http://link.ru",
                  image: "http://ihaveerror.ru/img/card_1.jpg",
                  __v: 0,
                },
                {
                  _id: "5f8f62988cb60c0c6cf61f30",
                  keyword: "\u041f\u0440\u0438\u0440\u043e\u0434\u0430",
                  title:
                    "\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",
                  text:
                    "\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",
                  date: "2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",
                  source: "\u0410\u0444\u0438\u0448\u0430",
                  link: "http://link.ru",
                  image: "http://ihaveerror.ru/img/card_2.jpg",
                  __v: 0,
                },
              ],
            }),
            o.a.createElement(k, null)
          )
        );
      };
      t(44), t(45);
      var B = function (e) {
        var a = e.name,
          t = e.title,
          n = e.onClose,
          l = e.onSubmit,
          c = e.isOpen,
          i = e.actionCaption,
          r = e.children,
          s = e.buttonName,
          m = e.buttonHandler;
        return o.a.createElement(
          "section",
          {
            className: "popup popup_"
              .concat(a, " ")
              .concat(c && "popup_opened"),
          },
          o.a.createElement(
            "form",
            {
              className: "popup__form popup__form_".concat(a),
              onSubmit: l,
              noValidate: !0,
            },
            o.a.createElement("h2", { className: "popup__heading" }, t),
            o.a.createElement("button", {
              type: "button",
              className: "popup__close-button",
              onClick: n,
            }),
            r,
            o.a.createElement(
              "button",
              {
                type: "submit",
                className: "popup__action-button popup__action-button_".concat(
                  a
                ),
              },
              i
            ),
            o.a.createElement(
              "p",
              { className: "popup__option" },
              " ",
              "\u0438\u043b\u0438",
              " ",
              o.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: m,
                  className: "popup__versa-button",
                },
                s
              )
            )
          )
        );
      };
      var O = function (e) {
        var a = e.isLoginPopupOpen,
          t = e.registerButtonHandler,
          n = e.onClose,
          l = e.onSubmit;
        return o.a.createElement(
          B,
          {
            name: "login",
            title: "\u0412\u0445\u043e\u0434",
            actionCaption: "\u0412\u043e\u0439\u0442\u0438",
            isOpen: a,
            buttonName:
              "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",
            buttonHandler: t,
            onClose: n,
            onSubmit: function (e) {
              e.preventDefault(), l();
            },
          },
          o.a.createElement("p", { className: "popup__caption" }, "Email"),
          o.a.createElement("input", {
            type: "email",
            className: "popup__input",
            name: "email",
            id: "email",
            placeholder:
              "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",
            required: !0,
          }),
          o.a.createElement(
            "p",
            { className: "popup__caption" },
            "\u041f\u0430\u0440\u043e\u043b\u044c"
          ),
          o.a.createElement("input", {
            type: "password",
            className: "popup__input",
            name: "password",
            id: "password",
            placeholder:
              "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",
            required: !0,
          })
        );
      };
      t(46);
      var x = function (e) {
        var a = e.isSignUpPopupOpen,
          t = e.loginButtonHandler,
          n = e.onClose,
          l = e.onSubmit;
        return o.a.createElement(
          B,
          {
            name: "sign-up",
            title:
              "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
            actionCaption:
              "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",
            isOpen: a,
            buttonName: "\u0412\u043e\u0439\u0442\u0438",
            buttonHandler: t,
            onClose: n,
            onSubmit: function (e) {
              e.preventDefault(), l();
            },
          },
          o.a.createElement("p", { className: "popup__caption" }, "Email"),
          o.a.createElement("input", {
            type: "email",
            className: "popup__input",
            name: "email-signup",
            id: "email-signup",
            placeholder:
              "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",
            required: !0,
          }),
          o.a.createElement(
            "p",
            { className: "popup__caption" },
            "\u041f\u0430\u0440\u043e\u043b\u044c"
          ),
          o.a.createElement("input", {
            type: "password",
            className: "popup__input",
            name: "password-signup",
            id: "password-signup",
            placeholder:
              "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",
            required: !0,
          }),
          o.a.createElement(
            "p",
            { className: "popup__caption" },
            "\u0418\u043c\u044f"
          ),
          o.a.createElement("input", {
            type: "text",
            className: "popup__input",
            name: "name",
            id: "name",
            placeholder:
              "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",
            required: !0,
          })
        );
      };
      t(47);
      var I = function (e) {
        var a = e.isOpen,
          t = e.onLogin,
          n = e.onClose;
        return o.a.createElement(
          "section",
          { className: "info-tooltip ".concat(a && "info-tooltip_opened") },
          o.a.createElement(
            "div",
            { className: "info-tooltip__container" },
            o.a.createElement(
              "h2",
              { className: "info-tooltip__message" },
              "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"
            ),
            o.a.createElement(
              "button",
              {
                type: "button",
                onClick: t,
                className: "info-tooltip__login-button",
              },
              "\u0412\u043e\u0439\u0442\u0438"
            ),
            o.a.createElement("button", {
              type: "button",
              className: "info-tooltip__close-button",
              onClick: n,
            })
          )
        );
      };
      t(48);
      var j = function (e) {
        var a = e.isOpen,
          t = e.isSavedNews,
          n = e.isLoggedIn,
          l = e.userName,
          c = e.handleLogout,
          r = e.loginButtonHandler,
          s = e.onClose,
          m = "mobile-menu__container",
          _ = "mobile-menu__title",
          d = "mobile-menu__close-button",
          E = "mobile-menu__link",
          b = "mobile-menu__menu-button",
          N = u.a;
        return (
          t &&
            ((m = "mobile-menu__container mobile-menu__container_theme_white"),
            (_ = "mobile-menu__title mobile-menu__title_theme_white"),
            (d =
              "mobile-menu__close-button mobile-menu__close-button_theme_white"),
            (E = "mobile-menu__link mobile-menu__link_theme_white"),
            (b =
              "mobile-menu__menu-button mobile-menu__menu-button_theme_white"),
            (N = p.a)),
          n
            ? o.a.createElement(
                "section",
                { className: "mobile-menu ".concat(a && "mobile-menu_opened") },
                o.a.createElement(
                  "div",
                  { className: m },
                  o.a.createElement(
                    "div",
                    { className: "mobile-menu__header-wrapper" },
                    o.a.createElement(
                      i.b,
                      { className: _, to: "/" },
                      "NewsExplorer"
                    ),
                    o.a.createElement("button", {
                      type: "button",
                      className: d,
                      onClick: s,
                    })
                  ),
                  o.a.createElement(
                    "nav",
                    { className: "mobile-menu__navigation" },
                    o.a.createElement(
                      "ul",
                      { className: "mobile-menu__menu" },
                      o.a.createElement(
                        "li",
                        { className: "mobile-menu__menu-item" },
                        o.a.createElement(
                          i.b,
                          { to: "/", className: E },
                          "\u0413\u043b\u0430\u0432\u043d\u0430\u044f"
                        )
                      ),
                      o.a.createElement(
                        "li",
                        { className: "mobile-menu__menu-item" },
                        o.a.createElement(
                          i.b,
                          { to: "/saved-news", className: E },
                          "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"
                        )
                      )
                    ),
                    o.a.createElement(
                      "button",
                      { type: "button", className: b, onClick: c },
                      l,
                      o.a.createElement("img", {
                        alt:
                          "\u0418\u043a\u043e\u043d\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u0430",
                        src: N,
                      })
                    )
                  )
                )
              )
            : o.a.createElement(
                "section",
                { className: "mobile-menu ".concat(a && "mobile-menu_opened") },
                o.a.createElement(
                  "div",
                  { className: m },
                  o.a.createElement(
                    "div",
                    { className: "mobile-menu__header-wrapper" },
                    o.a.createElement(
                      i.b,
                      { className: _, to: "/" },
                      "NewsExplorer"
                    ),
                    o.a.createElement("button", {
                      type: "button",
                      className: d,
                      onClick: s,
                    })
                  ),
                  o.a.createElement(
                    "nav",
                    { className: "mobile-menu__navigation" },
                    o.a.createElement(
                      "ul",
                      { className: "mobile-menu__menu" },
                      o.a.createElement(
                        "li",
                        { className: "mobile-menu__menu-item" },
                        o.a.createElement(
                          i.b,
                          { to: "/", className: E },
                          "\u0413\u043b\u0430\u0432\u043d\u0430\u044f"
                        )
                      )
                    ),
                    o.a.createElement(
                      "button",
                      { type: "button", className: b, onClick: r },
                      "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"
                    )
                  )
                )
              )
        );
      };
      var D = function () {
        var e = o.a.useState(!1),
          a = Object(r.a)(e, 2),
          t = a[0],
          l = a[1],
          c = o.a.useState(!1),
          i = Object(r.a)(c, 2),
          m = i[0],
          u = i[1],
          _ = o.a.useState(!1),
          p = Object(r.a)(_, 2),
          d = p[0],
          E = p[1],
          b = o.a.useState(!1),
          N = Object(r.a)(b, 2),
          g = N[0],
          v = N[1],
          f = o.a.useState(!1),
          h = Object(r.a)(f, 2),
          w = h[0],
          A = h[1],
          k = o.a.useState(!1),
          y = Object(r.a)(k, 2),
          C = y[0],
          M = y[1],
          B = o.a.useState(!1),
          D = Object(r.a)(B, 2),
          H = D[0],
          q = D[1],
          G = o.a.useState(""),
          R = Object(r.a)(G, 2),
          Q = R[0],
          U = R[1],
          Y = Object(s.f)();
        function J() {
          A(!w),
            document.querySelector(".mobile-menu").addEventListener("click", z);
        }
        o.a.useEffect(
          function () {
            function e() {
              window.innerWidth <= 510 ? v(!0) : v(!1);
            }
            e(), window.addEventListener("resize", e);
          },
          [g]
        );
        var V = Object(n.useCallback)(function (e) {
          "Escape" === e.code && W();
        }, []);
        function z(e) {
          this === e.target && W();
        }
        function F() {
          W(),
            l(!0),
            document.querySelector(".popup_login").addEventListener("click", z);
        }
        function P() {
          q(!1), Y.push("/");
        }
        function W() {
          l(!1),
            u(!1),
            E(!1),
            A(!1),
            (function () {
              var e = document.querySelector(".popup_login"),
                a = document.querySelector(".popup_sign-up"),
                t = document.querySelector(".info-tooltip"),
                n = document.querySelector(".mobile-menu");
              e.removeEventListener("click", z),
                a.removeEventListener("click", z),
                t.removeEventListener("click", z),
                n.removeEventListener("click", z);
            })();
        }
        return (
          o.a.useEffect(
            function () {
              return (
                document.addEventListener("keydown", V, !1),
                function () {
                  document.removeEventListener("keydown", V, !1);
                }
              );
            },
            [V]
          ),
          o.a.createElement(
            "div",
            { className: "app" },
            o.a.createElement(
              s.c,
              null,
              o.a.createElement(
                s.a,
                { exact: !0, path: "/" },
                o.a.createElement(S, {
                  DeactivateSavedNews: function () {
                    M(!1);
                  },
                  isLoggedIn: H,
                  userName: Q,
                  isMobileMenu: g,
                  handleMobileMenuClick: J,
                  loginButtonHandler: F,
                  handleLogout: P,
                })
              ),
              o.a.createElement(
                s.a,
                { path: "/saved-news" },
                o.a.createElement(L, {
                  isSavedNews: C,
                  ActivateSavedNews: function () {
                    M(!0);
                  },
                  isLoggedIn: H,
                  userName: Q,
                  isMobileMenu: g,
                  handleMobileMenuClick: J,
                  handleLogout: P,
                })
              )
            ),
            o.a.createElement(O, {
              isLoginPopupOpen: t,
              registerButtonHandler: function () {
                W(),
                  u(!0),
                  document
                    .querySelector(".popup_sign-up")
                    .addEventListener("click", z);
              },
              onClose: W,
              onSubmit: function () {
                q(!0), U("\u0413\u0440\u0435\u0442\u0430"), W();
              },
            }),
            o.a.createElement(x, {
              isSignUpPopupOpen: m,
              loginButtonHandler: F,
              onClose: W,
              onSubmit: function () {
                u(!1),
                  E(!0),
                  document
                    .querySelector(".info-tooltip")
                    .addEventListener("click", z);
              },
            }),
            o.a.createElement(I, { isOpen: d, onClose: W, onLogin: F }),
            o.a.createElement(j, {
              isOpen: w,
              isLoggedIn: H,
              userName: Q,
              handleLogout: P,
              onClose: W,
              isSavedNews: C,
              loginButtonHandler: F,
            })
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        o.a.createElement(
          o.a.StrictMode,
          null,
          o.a.createElement(i.a, null, o.a.createElement(D, null))
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[22, 1, 2]],
]);
//# sourceMappingURL=main.6dac0888.chunk.js.map
