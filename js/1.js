window.ASTC = {
    version: "1.2.04",
    RGBToHex: function(o) {
        void 0 === o && (o = "rgb(255,255,255)");
        let t = o.indexOf(",") > -1 ? "," : " "
          , n = (+(o = o.substr(4).split(")")[0].split(t))[0]).toString(16)
          , r = (+o[1]).toString(16)
          , e = (+o[2]).toString(16);
        return 1 == n.length && (n = "0" + n),
        1 == r.length && (r = "0" + r),
        1 == e.length && (e = "0" + e),
        "#" + n + r + e
    },
    str_split: function(o, t) {
        return o.match(new RegExp("[^]{" + parseInt(t || "1", 10) + "}","g"))
    },
    getContrast: function(o) {
        if (3 == (o = o.replace("#", "")).length) {
            var t = str_split(o, 1);
            o = "",
            t.each((function(n) {
                o += t[n] + t[n]
            }
            ))
        }
        var n = parseInt(o, 16)
          , r = [255 & n >> 16, 255 & n >> 8, 255 & n];
        return contrast = (Math.round(299 * r[0]) + Math.round(587 * r[1]) + Math.round(114 * r[2])) / 1e3,
        contrast
    },
    checkColor: function(o) {
        return !(ASTC.getContrast(o) >= 125)
    },
    checkColorBtn: function(o) {
        return !(ASTC.getContrast(o) >= 180)
    },
    getContrastColor: function(o) {
        return ASTC.checkColor(o) ? "#000000" : "#ffffff"
    },
    makeDarkOrLight: function(o) {
        var t = $("#b_" + o)
          , n = t.css("background-color");
        "rgba(0, 0, 0, 0)" != n && ((n = ASTC.RGBToHex(n)) && ASTC.checkColor(n) ? t.addClass("dark") : t.removeClass("dark")),
        $(".bg_color").length && t.find(".bg_color").each((function() {
            var o = $(this).css("display")
              , t = $(this).css("background-color");
            "rgba(0, 0, 0, 0)" != t && ((t = ASTC.RGBToHex(t)) && ASTC.checkColor(t) && "none" != o ? $(this).parent().addClass("dark") : t && !ASTC.checkColor(t) && "block" == o && $(this).parent().addClass("light"))
        }
        )),
        t.find(".extra_info_block, .text_block, .col_3, .col_4, .txt_and_btn, .table .line, .icon_layer, .tile, .content-tile, .content-text").each((function() {
            var o = $(this)
              , t = o.css("background-color");
            "rgba(0, 0, 0, 0)" == t && o.closest(".text_block").length > 0 && (t = o.closest(".text_block").css("background-color")),
            "rgba(0, 0, 0, 0)" == t && (t = o.closest(".section").css("background-color")),
            "rgba(0, 0, 0, 0)" != t && ((t = ASTC.RGBToHex(t)) && ASTC.checkColor(t) ? o.addClass("dark") : o.removeClass("dark"))
        }
        )),
        t.find(".bg_right, .form_bg_color, .col_bg, .menu1 ul").each((function() {
            var o = $(this)
              , t = o.css("background-color");
            "rgba(0, 0, 0, 0)" == t && o.closest(".text_block").length > 0 && (t = o.closest(".text_block").css("background-color")),
            "rgba(0, 0, 0, 0)" == t && (t = o.closest(".section").css("background-color")),
            "rgba(0, 0, 0, 0)" != t && ((t = ASTC.RGBToHex(t)) && ASTC.checkColor(t) ? o.parent().addClass("dark") : o.parent().removeClass("dark"))
        }
        ))
    },
    makeDarkOrLightBTNs: function(o) {
        $("#b_" + o).find(".surround, .cookie_btn, .section1011 .next").each((function() {
            var o = $(this)
              , t = o.css("background-color");
            "rgba(0, 0, 0, 0)" != t && (t = ASTC.RGBToHex(t),
            o.hasClass("surround") ? t && ASTC.checkColorBtn(t) && o.addClass("dark") : t && ASTC.checkColor(t) && o.addClass("dark"))
        }
        ))
    },
    checkSectionsColor: function() {
        $(".section").each((function() {
            var o = $(this).data("id");
            ASTC.getImageContrastColor(o),
            ASTC.makeDarkOrLight(o),
            ASTC.makeDarkOrLightBTNs(o)
        }
        ))
    },
    checkBackgroundImageInUse: function(o) {
        var t = $("#b_" + o).css("background-image");
        return !(!t || "undefined" == t || null == t || "none" == t || t.indexOf("null.png") > -1 || t.indexOf("linear-gradient") > -1)
    },
    getImageContrastColor: function(o) {
        if (!ASTC.checkBackgroundImageInUse(o))
            return !1;
        var t = $("#b_" + o)
          , n = t.css("background-image").match(/url\(["']?([^"']*)["']?\)/)[1];
        if (t.find(".back_dark").length > 0) {
            var r = ASTC.getAverageBackgroundColor(t.children(".back_dark"));
            if ("rgba(0, 0, 0, 0)" != r) {
                if (!(r = ASTC.RGBToHex(r)) || !ASTC.checkColor(r))
                    return !1;
                t.addClass("dark")
            }
        }
        var e = new Image;
        e.src = n,
        e.style.display = "none",
        document.body.appendChild(e),
        e.onload = function() {
            var o = document.createElement("canvas")
              , n = o.getContext("2d");
            o.width = e.width,
            o.height = e.height,
            n.drawImage(e, 0, 0),
            e.remove();
            var r = n.getImageData(0, 0, o.width, o.height).data
              , a = 4 * (100 * o.width + 960)
              , c = r[a]
              , s = r[a + 1]
              , i = r[a + 2]
              , l = (r[a + 3],
            "#" + ((1 << 24) + (c << 16) + (s << 8) + i).toString(16).slice(1));
            return !!ASTC.isValidHexColor(l) && "#000000" != l && (l && ASTC.checkColor(l) ? t.addClass("dark") : t.removeClass("dark"),
            void t.find(".bg_right, .form_bg_color, .col_bg").each((function() {
                var o = $(this).css("opacity");
                l && ASTC.checkColor(l) && o < .5 && $(this).parent().addClass("dark")
            }
            )))
        }
    },
    checkSubstring: function(o, t) {
        return !!o.includes(t)
    },
    isValidHexColor: function(o) {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(o)
    },
    getAverageBackgroundColor: function(o) {
        for (var t = [], n = (o.css("background-image").replace(/.*gradient\(/, "").replace(/\)/, "").replace(/rgba?\([^\)]+\)/g, (function(o) {
            t.push(o)
        }
        )),
        []), r = 0; r < t.length; r++) {
            var e = t[r].replace(/rgba?\(/, "").replace(/\)/, "").split(",");
            n[0] = (n[0] || 0) + parseInt(e[0], 10),
            n[1] = (n[1] || 0) + parseInt(e[1], 10),
            n[2] = (n[2] || 0) + parseInt(e[2], 10)
        }
        return n[0] = Math.round(n[0] / t.length),
        n[1] = Math.round(n[1] / t.length),
        n[2] = Math.round(n[2] / t.length),
        "rgb(" + n.join(",") + ")"
    }
},
$((function() {
    console.log("ASTC DEV: " + ASTC.version),
    ASTC.checkSectionsColor(),
    $("body").on("change", "input.choose_bg_color", (function() {
        ASTC.checkSectionsColor()
    }
    )),
    $("body").on("mouseover mouseout", ".surround", (function() {
        $(".section").each((function() {
            ASTC.makeDarkOrLightBTNs($(this).data("id"))
        }
        ))
    }
    )),
    setInterval((function() {
        $(".cke_editable li").each((function(o) {
            var t = $(this)
              , n = t.find("*").css("font-size")
              , r = t.find("*").css("color");
            t.css("font-size", n),
            t.css("color", r)
        }
        ))
    }
    ), 500);
    var o = $(".clip_influx:not(.clip_none)").length;
    $(".clip_influx:not(.clip_none)").each((function(t) {
        var n = $(this)
          , r = 15 + o - t
          , e = Math.round(-1 * n.outerHeight() * .06, 1) + "px";
        n.attr("style", n.attr("style") + "; --cliped-margin-bottom: " + e),
        n.css("z-index", r)
    }
    ))
}
));
