$((function() {
    var ua = window.navigator.userAgent
      , isIE = /MSIE|Trident/.test(ua);
    function not_menu() {
        $(window).width() <= 970 && $(".section311").each((function(i, e) {
            0 != $(this).find(".menu1 li").length && 0 != $(this).find(".menu1").length || $(this).addClass("not_menu")
        }
        ))
    }
    function hexToRgbA(i, e) {
        var t;
        return /^#([A-Fa-f0-9]{3}){1,2}$/.test(i) ? (3 == (t = i.substring(1).split("")).length && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
        "rgba(" + [(t = "0x" + t.join("")) >> 16 & 255, t >> 8 & 255, 255 & t].join(",") + "," + e + ")") : ""
    }
    function parseYouTubeLinkNG(i) {
        let e = null;
        if (i.includes("youtube.com/watch") || i.includes("youtu.be")) {
            const t = new URL(i)
              , n = new URLSearchParams(t.search);
            i.includes("youtube.com/watch") ? e = n.get("v") : i.includes("youtu.be") && (e = t.pathname.substring(1))
        } else if (i.includes("youtube.com/shorts") || i.includes("youtube.com/embed")) {
            e = new URL(i).pathname.split("/").pop()
        }
        return e
    }
    function playAnimationFront(i, e, t="") {
        let n = window.getComputedStyle(document.querySelector(`#b_${i} .flexblock_wrapper[data-index="${e}"]`))
          , o = n.getPropertyValue("--animate-type").trim() || "off"
          , s = n.getPropertyValue("--animate-event").trim() || "blockVisible"
          , a = n.getPropertyValue("--animate-delay").trim() || 0
          , r = n.getPropertyValue("--animate-duration").trim() || 300
          , d = n.getPropertyValue("--animate-distance").trim() || 100
          , l = n.getPropertyValue("--animate-zoom").trim() || 1
          , c = n.getPropertyValue("--animate-easing").trim() || "linear"
          , h = n.getPropertyValue("--animate-rotate").trim() || 0;
        t == s && "off" != o && ("fadeIn" == o && anime({
            targets: "#b_" + i + ' .flexblock_wrapper[data-index="' + e + '"]',
            keyframes: [{
                opacity: 0,
                rotate: h,
                scale: l,
                duration: 0
            }, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                duration: r,
                delay: a
            }],
            easing: c
        }),
        "fadeInLeft" == o && anime({
            targets: "#b_" + i + ' .flexblock_wrapper[data-index="' + e + '"]',
            keyframes: [{
                opacity: 0,
                rotate: h,
                scale: l,
                translateX: "-" + d,
                duration: 0
            }, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                translateX: 0,
                duration: r,
                delay: a
            }],
            easing: c
        }),
        "fadeInRight" == o && anime({
            targets: "#b_" + i + ' .flexblock_wrapper[data-index="' + e + '"]',
            keyframes: [{
                opacity: 0,
                rotate: h,
                scale: l,
                translateX: d,
                duration: 0
            }, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                translateX: 0,
                duration: r,
                delay: a
            }],
            easing: "linear"
        }),
        "fadeInTop" == o && anime({
            targets: "#b_" + i + ' .flexblock_wrapper[data-index="' + e + '"]',
            keyframes: [{
                opacity: 0,
                rotate: h,
                scale: l,
                translateY: "-" + d,
                duration: 0
            }, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                translateY: 0,
                duration: r,
                delay: a
            }],
            easing: c
        }),
        "fadeInBottom" == o && anime({
            targets: "#b_" + i + ' .flexblock_wrapper[data-index="' + e + '"]',
            keyframes: [{
                opacity: 0,
                rotate: h,
                scale: l,
                translateY: d,
                duration: 0
            }, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                translateY: 0,
                duration: r,
                delay: a
            }],
            easing: c
        }),
        "zoomIn" == o && anime({
            targets: "#b_" + i + ' .flexblock_wrapper[data-index="' + e + '"]',
            keyframes: [{
                opacity: 0,
                rotate: h,
                scale: l,
                duration: 0
            }, {
                opacity: 1,
                rotate: 0,
                scale: 1,
                duration: r,
                delay: a
            }],
            easing: c
        }))
    }
    if (isIE ? $("body").addClass("ie") : $("body").addClass("not_ie"),
    _.mixin({
        get: function(i, e) {
            var t;
            return i || e ? (_.isEmpty(e.match(/^\[\d\]/)) ? (t = e.split(/[\.\[]/),
            nPath = _.first(t)) : (t = e.replace(/^[\[\]]/g, "").split(/\./),
            nPath = _.first(t[0].replace(/\]/, ""))),
            remainingPath = _.reduce(_.rest(t), (function(i, e) {
                return _.isEmpty(e) || (e.match(/^\d\]/) && (e = "[" + e),
                i.push(e)),
                i
            }
            ), []).join("."),
            _.isEmpty(remainingPath) ? i[nPath] : _.has(i, nPath) && _.get(i[nPath], remainingPath)) : void 0
        },
        set: function(i, e, t) {
            e = e.split(".");
            for (var n = 3 === arguments.length && e.pop(), o = 0; o < e.length; o++)
                i = i[e[o]] = i[e[o]] || {};
            return n && (i = i[n] = t),
            i
        }
    }),
    window.SetVideoBG = function(i) {
        var e = 16 / 9;
        function t() {
            var t = Math.floor(i.width())
              , n = Math.floor(i.outerHeight())
              , o = Math.floor($(window).width());
            o < t && (o = t);
            var s = Math.floor(o / e);
            s < n && (s = n,
            o = Math.floor(s * e));
            var a = 0
              , r = 0;
            n - s < 0 && (a = Math.floor((n - s) / 2)),
            t - o < 0 && (r = Math.floor((t - o) / 2)),
            i.find(".video_bg").css({
                height: s,
                width: o,
                left: r,
                top: a
            })
        }
        t(),
        $(window).resize((function() {
            t()
        }
        ))
    }
    ,
    $(".section").each((function() {
        $(this).find(".video_bg").length && SetVideoBG($(this))
    }
    )),
    $("#wrapper").find("iframe").each((function() {
        var i = $(this).attr("src")
          , e = $(this).data("src")
          , t = $(this).data("video-id")
          , n = this;
        if ($(this).parents(".form_html, .html, .section1700, .section_item, .section4000").size())
            return !1;
        if ("VK" == $(this).data("iframe-source") && $(n).attr("src", e),
        i.indexOf("https://www.youtube.com/embed/") > -1 || i.indexOf("https://www.youtube.com/shorts/") > -1 || i.indexOf("https://youtu.be/") > -1) {
            var o = parseYouTubeLinkNG(i)
              , s = "hqdefault";
            $.ajax({
                url: "/system/check_video.php?videoId=" + o,
                type: "HEAD",
                success: function() {
                    s = "maxresdefault"
                },
                complete: function() {
                    $(n).replaceWith(`<div class="video_holder" data-vid="${o}" data-hosting="youtube" data-video="${$(n).attr("src")}" style="width:${$(n).width()}px; height:${$(n).height()}px; background-image: url(https://i.ytimg.com/vi/${o}/${s}.jpg);"></div>`)
                }
            })
        }
        i.indexOf("https://rutube.ru/") > -1 && $.ajax({
            type: "POST",
            url: "/system/videoThumbs.php",
            cache: !1,
            dataType: "json",
            data: {
                action: "get_video_thumb",
                hosting: "rutube",
                video_id: t
            },
            success: function(i) {
                $(n).replaceWith('<div class="video_holder" data-hosting="rutube" data-video="' + $(n).attr("src") + '" style="width:' + $(n).width() + "px; height:" + $(n).height() + "px; background-image: url(" + i.thumb[0] + ');"></div>')
            }
        }),
        i.indexOf("https://player.vimeo.com/video/") > -1 && $.ajax({
            type: "POST",
            url: "/system/videoThumbs.php",
            cache: !1,
            dataType: "json",
            data: {
                action: "get_video_thumb",
                hosting: "vimeo",
                video_id: t
            },
            success: function(i) {
                $(n).replaceWith('<div class="video_holder" data-hosting="vimeo" data-video="' + $(n).attr("src") + '" style="width:' + $(n).width() + "px; height:" + $(n).height() + "px; background-image: url(" + i.thumb + ');"></div>')
            }
        })
    }
    )),
    $("body").on("click", ".video_holder", (function() {
        if (tobiz.editor)
            return !1;
        var i = $(this).data("video");
        "youtube" == $(this).data("hosting") ? $(this).replaceWith(`<iframe loading=lazy allowfullscreen src="https://www.youtube.com/embed/${parseYouTubeLinkNG(i)}"></iframe>`) : "rutube" != $(this).data("hosting") && "vimeo" != $(this).data("hosting") || $(this).replaceWith('<iframe loading=lazy allowfullscreen src="' + i + '"></iframe>')
    }
    )),
    $("body").on("click", ".close_video_btn", (function() {
        $("#wrapper").children(".popup_video").remove(),
        $("body").removeClass("modal")
    }
    )),
    $("body").on("click", ".play_btn", (function() {
        if (tobiz.editor)
            return !1;
        var i = $(this).closest(".section");
        $("body").addClass("modal");
        var e = $(this).parent().siblings().find(".video_holder").data("video").match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/)
          , t = !(!e || 11 != e[7].length) && e[7];
        i.parent().append('<div class="popup_video"><div class="close_video_btn"></div><div class="video_this"></div></div>'),
        $(".video_this").replaceWith('<iframe loading=lazy allowfullscreen src="https://www.youtube.com/embed/' + t + '?autoplay=1"></iframe>')
    }
    )),
    $("body").on("touchstart", ".video_holder", (function() {
        if (tobiz.editor)
            return !1;
        var i = $(this).data("video");
        "youtube" == $(this).data("hosting") ? $(this).replaceWith('<iframe loading=lazy allowfullscreen src="https://www.youtube.com/embed/' + parseYouTubeLinkNG(i) + '?autoplay=1"></iframe>') : "rutube" != $(this).data("hosting") && "vimeo" != $(this).data("hosting") || $(this).replaceWith('<iframe loading=lazy allowfullscreen src="' + i + '"></iframe>')
    }
    )),
    $(".section318 .accordion .line.caption, .section319 .accordion .line.caption").click((function() {
        $(this).parent().parent().find(".line.option, .line.btn").hide(),
        $(this).parent().find(".line.option, .line.btn").show()
    }
    )),
    $("body").on("click", ".extra_info_block .close", (function() {
        if ($("body").removeClass("noscroll"),
        $(this).parent().parent().siblings().find(".btn1").hasClass("open_card_was") && (console.log("close"),
        $(this).parent().parent().siblings().children(".btn1").addClass("open_card"),
        $(this).parents(".arr1 ").find(".btns_wrapp").children(".btn1") && $(this).parents(".arr1 ").find(".btns_wrapp").children(".btn1").addClass("open_card")),
        1 == tobiz.editor) {
            var i = $(this).closest(".section")
              , e = i.data("id");
            console.log(e),
            i.hasClass("section1130") && delete window.tobiz.slider1130array[e]
        }
    }
    )),
    $("body").on("click", ".popup_thanks_close, .popup_form_close", (function() {
        $(this).parent().parent().siblings(".btn1").hasClass("open_card_was") && $(this).parent().parent().siblings(".btn1").addClass("open_card"),
        $(".popup_thanks").hide(),
        $(this).parent().parent().parent().hasClass("section3010") ? ($("body").find(".temp_form").removeClass("showed"),
        setTimeout((function() {
            $("body").find(".temp_form").remove()
        }
        ), 400)) : $(".popup_form").hide().animate({
            opacity: "0"
        }, 300),
        $("body").removeClass("modal"),
        $("body").removeClass("no_clip")
    }
    )),
    $("body").on("click", ".basket_thanks_close", (function() {
        $("#basket_bg_thanks").hide()
    }
    )),
    $("body").on("click", ".section1009 .widget_form_close", (function() {
        $(".section1009 .form_wrapper").hide()
    }
    )),
    $("body").on("click", ".section1010 .widget_form_close", (function() {
        $(".section1010 .arr1").hide()
    }
    )),
    $("body").on("click", ".choose_btns label", (function() {
        $(".choose_btns label").removeClass("current_btn"),
        $(this).addClass("current_btn")
    }
    )),
    $("body").on("click", ".all_form_close", (function() {
        $(".section1009 .all_forms").hide()
    }
    )),
    $("body").on("click", ".section1009 .ico1", (function(i) {
        $(this).children("a").is(":visible") || ($(".section1009 .field_input_textarea").parent().addClass("field_textarea"),
        $(".section1009 .pop_form").toggle(),
        $(".section1009 .social_icons").toggle(),
        $(".section1009 .form_wrapper").show(),
        $(".section1009 .all_forms").show())
    }
    )),
    $("body").on("click", ".section1009 .image2", (function() {
        $(".section1009 .field_input_textarea").parent().addClass("field_textarea"),
        $(".section1009 .pop_form").toggle(),
        $(".section1009 .social_icons").toggle(),
        $(".section1009 .form_wrapper").show(),
        $(".section1009 .all_forms").show()
    }
    )),
    $("body").on("click", ".popup_form", (function(i) {
        0 === $(i.target).closest(".popup_form_inner").length && ($(this).siblings(".btn1").hasClass("open_card_was") && $(this).siblings(".btn1").addClass("open_card"),
        $(this).parent().hasClass("section3010") ? ($("body").find(".temp_form").removeClass("showed"),
        setTimeout((function() {
            $("body").find(".temp_form").remove()
        }
        ), 400)) : $(".popup_form").hide(),
        $("body").removeClass("modal"),
        $("body").removeClass("no_clip"))
    }
    )),
    $("body").on("mouseup", "#wrapper", (function(i) {
        var e = $(".section1009 .section_inner > .form_wrapper");
        0 === e.has(i.target).length && e.hide()
    }
    )),
    $("body").on("mouseup", "#wrapper", (function(i) {
        var e = $(".section1009 .all_forms");
        0 === e.has(i.target).length && e.hide()
    }
    )),
    $("body").on("mouseup", "#wrapper", (function(i) {
        var e = $(" .section1009 .section_inner > .social_icons");
        0 === e.has(i.target).length && e.hide()
    }
    )),
    $("body").on("click", ".popup_thanks", (function(i) {
        0 === $(i.target).closest(".popup_thanks_inner").length && $(".popup_thanks").hide()
    }
    )),
    $(".section153").length && $(".section153").each((function() {
        SetVideoBG($(this))
    }
    )),
    $(".section155").length && $(".section155").each((function() {
        SetVideoBG($(this))
    }
    )),
    $(".section119").length && $(".section119 .policy").click((function() {
        $("#policy").remove(),
        $("body").append('<div id="policy">\n<div class="close close_x">X</div>\n<h1>Политика конфиденциальности</h1>\n<p>Данный сайт уважает Ваше право и соблюдает конфиденциальность при заполнении, передаче и хранении Ваших конфиденциальных сведений.\nРазмещение заявки на данном сайте означает Ваше согласие на обработку данных и дальнейшей передачи ваших контактных данных нашей компании.\nПод персональными данными подразумевается информация, относящаяся к субъекту персональных данных, в частности имя, контактные реквизиты (адрес электронной почты) и иные данные, относимые Федеральным законом от 27 июля 2006 года № 152-ФЗ «О персональных данных» к категории персональных данных.\nЦелью обработки персональных данных является информирование об оказываемых услугах нашей компании.\nЕсть вопросы? Пишите нам на ' + window.tobiz.owner_email + '.</p>\n<div class="close close_btn">Закрыть</div></div>'),
        $("#policy .close_x, #policy .close_btn").click((function() {
            $("#policy").remove()
        }
        ))
    }
    )),
    $("body").on("click", ".section119 .policy2", (function() {
        $(this).parent().parent().children(".policy2_popup").toggle()
    }
    )),
    $("body").on("click", ".product_card", (function() {
        $(this).parent().parent().children(".extra_info_block_wrapper").eq($(this).data("id")).is(":visible") ? $(this).parent().parent().children(".extra_info_block_wrapper").hide() : ($(this).parent().parent().children(".extra_info_block_wrapper").hide(),
        $(this).parent().parent().children(".extra_info_block_wrapper").eq($(this).data("id")).show(),
        $("body").addClass("modal"));
        var i = $(this).closest(".section");
        if (i.hasClass("section1130") && 1 == tobiz.editor) {
            var e = i.data("id");
            window.tobiz.slider1130array[e] = $(this).closest(".arr1").data("varBoxId")
        }
    }
    )),
    $("body").on("click", ".extra_info_block .close", (function() {
        $(this).parent().parent().hide(),
        $("body").removeClass("modal")
    }
    )),
    $("body").on("click", "#basket_form_close", (function() {
        $("body").removeClass("modal")
    }
    )),
    $("body.editor_false").on("click", ".btn_text2", (function() {
        $(this).parent().parent().hide(),
        $("body").removeClass("modal")
    }
    )),
    $("body").on("click", ".btn1x", (function() {
        $("body").removeClass("modal")
    }
    )),
    $("body").on("change", ".section .field_input_file input", (function(i) {
        console.log($(this).prop("files")[0].name),
        $(this).parent().parent().children(".field_input_file_name").remove(),
        $(this).parent().parent().append('<div class="field_input_file_name">' + $(this).prop("files")[0].name + "</div>")
    }
    )),
    $("body").on("click", ".extra_info_block_wrapper", (function(i) {
        0 === $(i.target).closest(".extra_info_block").length && void 0 === window.tobiz.editor && ($(this).siblings().children(".btn1").hasClass("open_card_was") && $(this).siblings().children(".btn1").addClass("open_card"),
        $(".extra_info_block_wrapper").hide(),
        $("body").removeClass("modal"))
    }
    )),
    $(".section143 .overlay_image_box, .section334 .overlay_image_box, .section144 .overlay_image_box, .section145 .overlay_image_box, .section1144 .overlay_image_box, .section148 .overlay_image_box, .section147 .overlay_image_box, .section313 .overlay_image_box, .section315 .overlay_image_box, .section128 .overlay_image_box, .section1152 .overlay_image_box, .section1153 .overlay_image_box, .section146 .overlay_image_box, .section1145 .overlay_image_box, .section1155 .overlay_image_box, .section2156 .overlay_image_box, .section2157 .overlay_image_box  , .section2158 .overlay_image_box, .section2159 .overlay_image_box  ").size() && $(".section143 .overlay_image_box, .section334 .overlay_image_box, .section144 .overlay_image_box, .section145 .overlay_image_box, .section1144 .overlay_image_box, .section148 .overlay_image_box, .section147 .overlay_image_box, .section313 .overlay_image_box, .section315 .overlay_image_box, .section128 .overlay_image_box, .section1152 .overlay_image_box, .section1153 .overlay_image_box, .section146 .overlay_image_box, .section1145 .overlay_image_box, .section1155 .overlay_image_box, .section2156 .overlay_image_box, .section2157 .overlay_image_box  , .section2158 .overlay_image_box, .section2159 .overlay_image_box  ").click((function() {
        if ("" != $(this).attr("data-link") && "undefined" != $(this).attr("data-link"))
            return console.log($(this).attr("data-link")),
            1 == parseInt($(this).attr("data-link-target")) || "_blank" == $(this).attr("data-target") ? window.open($(this).attr("data-link"), "_blank") : window.open($(this).attr("data-link"), "_self"),
            !1
    }
    )),
    $(".link_on.image1, .link_on.image2, .link_on.s_image, .link_on.arr1").size() && $("body").on("click", ".link_on.image1, .link_on.image2, .link_on.s_image, .link_on.arr1", (function() {
        if ("" != $(this).attr("data-link") && "undefined" != $(this).attr("data-link"))
            return $(this).parents(".section").hasClass("get_item_from_category") ? $(this).siblings(".gotoitempage").click() : 1 == parseInt($(this).attr("data-link-target")) || "_blank" == $(this).attr("data-target") ? window.open($(this).attr("data-link"), "_blank") : window.open($(this).attr("data-link"), "_self"),
            !1
    }
    )),
    $("body").on("click", ".section2000 .item .image, .section2100 .item .image", (function(i) {
        i.preventDefault(),
        $(this).parents(".item").find(".gotoitempage").click()
    }
    )),
    $("body").on("click", ".section2000 .item-content .tit, .section2100 .item-content .tit", (function(i) {
        i.preventDefault(),
        $(this).parents(".item").find(".gotoitempage").click()
    }
    )),
    $("body").on("submit", ".section1117 form.search", (function(i) {
        if (i.preventDefault(),
        window.tobiz.editor)
            return !1;
        var e = $(this).closest(".section")
          , t = ""
          , n = $(this).children('input[type="search"]').val();
        if ($(this).parents(".section").hasClass("search_in_page")) {
            n = (n = n.replace(/ {1,}/g, " ")).toLowerCase();
            var o = $(".arr1 .title1");
            o.map((function() {
                return $.trim($(this).text())
            }
            )).get();
            e.find(".find_popup").hide(),
            $.each(o, (function(i, e) {
                $(this).parents(".arr1").removeClass("finded_in_page");
                var t = $.trim($(this).text()).toLowerCase();
                t = (t = (t = t.replace(" ", " ")).replace(" ", " ")).replace(/ {1,}/g, " "),
                search_arr = n.split(" "),
                search_arr_length = search_arr.length,
                includes_counter = 0,
                $.each(search_arr, (function(i, e) {
                    console.log(t + " | " + e + " | " + t.indexOf(e.toString())),
                    -1 !== t.indexOf(e.toString()) && includes_counter++
                }
                )),
                includes_counter > .8 * search_arr_length && $(this).parents(".arr1").addClass("finded_in_page")
            }
            )),
            0 == $(".arr1.finded_in_page").length && e.find(".find_popup").show().text("Ничего не найдено"),
            0 != $(".arr1.finded_in_page").length && $("html,body").stop().animate({
                scrollTop: $(".finded_in_page").offset().top
            }, 1e3)
        } else
            $.ajax({
                url: "/search.php",
                dataType: "json",
                method: "POST",
                data: {
                    search: n
                },
                cache: !1,
                success: function(i) {
                    t = i,
                    e.find(".find_popup").empty();
                    var n = "";
                    $.each(t, (function(i, e) {
                        n += '<div class="find_item"><a href="' + e.link + '" target="_blank">' + e.title + "</a><p>" + e.description + "</p></div>"
                    }
                    )),
                    e.find(".find_popup").append(n),
                    "" == n && e.find(".find_popup").append("Ничего не найдено."),
                    e.find(".find_popup").fadeIn(),
                    e.find(".find_popup").prepend('<div class="result_title">Результаты вашего поиска</div><div class="close"></div>')
                }
            })
    }
    )),
    $("body").on("submit", ".section120 form.search", (function(i) {
        if (i.preventDefault(),
        window.tobiz.editor)
            return !1;
        var e = $(this).closest(".section")
          , t = ""
          , n = $(this).children('input[type="search"]').val();
        if ($(this).parents(".section").hasClass("search_in_page")) {
            var o = $(".arr1 .title1");
            e.find(".find_popup").hide();
            o.map((function() {
                return $.trim($(this).text())
            }
            )).get();
            $.each(o, (function(i, e) {
                $(this).parents(".arr1").removeClass("finded_in_page");
                var t = $.trim($(this).text()).toLowerCase();
                t = (t = (t = t.replace(" ", " ")).replace(" ", " ")).replace(/ {1,}/g, " "),
                search_arr = n.split(" "),
                search_arr_length = search_arr.length,
                includes_counter = 0,
                $.each(search_arr, (function(i, e) {
                    console.log(t + " | " + e + " | " + t.indexOf(e.toString())),
                    -1 !== t.indexOf(e.toString()) && includes_counter++
                }
                )),
                includes_counter > .8 * search_arr_length && $(this).parents(".arr1").addClass("finded_in_page")
            }
            )),
            0 == $(".arr1.finded_in_page").length && e.find(".find_popup").show().text("Ничего не найдено"),
            0 != $(".arr1.finded_in_page").length && $("html,body").stop().animate({
                scrollTop: $(".finded_in_page").offset().top
            }, 1e3)
        } else
            $.ajax({
                url: "/search.php",
                dataType: "json",
                method: "POST",
                data: {
                    search: n
                },
                cache: !1,
                success: function(i) {
                    t = i,
                    e.find(".find_popup").empty();
                    var n = "";
                    $.each(t, (function(i, e) {
                        n += '<div class="find_item"><a href="' + e.link + '" target="_blank">' + e.title + "</a><p>" + e.description + "</p></div>"
                    }
                    )),
                    e.find(".find_popup").append(n),
                    "" == n && e.find(".find_popup").append("Ничего не найдено."),
                    e.find(".find_popup").fadeIn(),
                    e.find(".find_popup").prepend('<div class="result_title">Результаты вашего поиска</div><div class="close"></div>')
                }
            })
    }
    )),
    $("body").on("submit", ".section1120 form.search, .section2120 form.search", (function(i) {
        if (i.preventDefault(),
        window.tobiz.editor)
            return !1;
        var e = $(this).closest(".section")
          , t = ""
          , n = $(this).children('input[type="search"]').val();
        if ($(this).parents(".section").hasClass("search_in_page")) {
            n = (n = n.replace(/ {1,}/g, " ")).toLowerCase();
            var o = $(".arr1 .title1");
            e.find(".find_popup").hide();
            o.map((function() {
                return $.trim($(this).text())
            }
            )).get();
            $.each(o, (function(i, e) {
                $(this).parents(".arr1").removeClass("finded_in_page");
                var t = $.trim($(this).text()).toLowerCase();
                t = (t = (t = t.replace(" ", " ")).replace(" ", " ")).replace(/ {1,}/g, " "),
                search_arr = n.split(" "),
                search_arr_length = search_arr.length,
                includes_counter = 0,
                $.each(search_arr, (function(i, e) {
                    console.log(t + " | " + e + " | " + t.indexOf(e.toString())),
                    -1 !== t.indexOf(e.toString()) && includes_counter++
                }
                )),
                includes_counter > .8 * search_arr_length && $(this).parents(".arr1").addClass("finded_in_page")
            }
            )),
            0 == $(".arr1.finded_in_page").length && e.find(".find_popup").show().text("Ничего не найдено"),
            0 != $(".arr1.finded_in_page").length && $("html,body").stop().animate({
                scrollTop: $(".finded_in_page").offset().top
            }, 1e3)
        } else
            $.ajax({
                url: "/search.php",
                dataType: "json",
                method: "POST",
                data: {
                    search: n
                },
                cache: !1,
                success: function(i) {
                    t = i,
                    e.find(".find_popup").empty();
                    var n = "";
                    $.each(t, (function(i, e) {
                        n += '<div class="find_item"><a href="' + e.link + '" target="_blank">' + e.title + "</a><p>" + e.description + "</p></div>"
                    }
                    )),
                    e.find(".find_popup").append(n),
                    "" == n && e.find(".find_popup").append("Ничего не найдено."),
                    e.find(".find_popup").fadeIn(),
                    e.find(".find_popup").prepend('<div class="result_title">Результаты вашего поиска</div><div class="close"></div>')
                }
            })
    }
    )),
    $("body").on("submit", ".section119 form.search", (function(i) {
        if (i.preventDefault(),
        window.tobiz.editor)
            return !1;
        var e = $(this).closest(".section")
          , t = ""
          , n = $(this).children('input[type="search"]').val();
        if ($(this).parents(".section").hasClass("search_in_page")) {
            n = (n = n.replace(/ {1,}/g, " ")).toLowerCase();
            var o = $(".arr1 .title1");
            e.find(".find_popup").hide();
            o.map((function() {
                return $.trim($(this).text())
            }
            )).get();
            $.each(o, (function(i, e) {
                $(this).parents(".arr1").removeClass("finded_in_page");
                var t = $.trim($(this).text()).toLowerCase();
                -1 !== (t = (t = (t = t.replace(" ", " ")).replace(" ", " ")).replace(/ {1,}/g, " ")).indexOf(n) && $(this).parents(".arr1").addClass("finded_in_page")
            }
            )),
            0 == $(".arr1.finded_in_page").length && e.find(".find_popup").show().text("Ничего не найдено"),
            0 != $(".arr1.finded_in_page").length && $("html,body").stop().animate({
                scrollTop: $(".finded_in_page").offset().top
            }, 1e3)
        } else
            $.ajax({
                url: "/search.php",
                dataType: "json",
                cache: !1,
                data: {
                    search: n
                },
                success: function(i) {
                    t = i,
                    e.find(".find_popup").empty();
                    var n = "";
                    $.each(t, (function(i, e) {
                        n += '<div class="find_item"><a href="' + e.link + '" target="_blank">' + e.title + "</a><p>" + e.description + "</p></div>"
                    }
                    )),
                    e.find(".find_popup").append(n),
                    "" == n && e.find(".find_popup").append("Ничего не найдено."),
                    e.find(".find_popup").fadeIn(),
                    e.find(".find_popup").prepend('<div class="result_title">Результаты вашего поиска</div><div class="close"></div>')
                }
            })
    }
    )),
    $("body").on("click", ".find_popup .close", (function() {
        $(this).parent().fadeOut()
    }
    )),
    1 != tobiz.editor) {
        let e = function(i) {
            const e = i.getBoundingClientRect();
            return e.top >= 0 && e.left >= 0 && e.bottom - 20 <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
          , t = function(i) {
            const e = i.getBoundingClientRect();
            return e.top >= 0 && e.top + 350 <= (window.innerHeight || document.documentElement.clientHeight)
        }
          , n = [].slice.call(document.querySelectorAll(".section1600 .flexblock_wrapper"))
          , o = !1
          , s = function() {
            !1 === o && (o = !0,
            setTimeout((function() {
                n.forEach((function(i) {
                    if (e(i) && "none" !== getComputedStyle(i).display) {
                        playAnimationFront($(i).data("blockId"), $(i).data("index"), "elementVisible"),
                        n = n.filter((function(e) {
                            return e !== i
                        }
                        )),
                        0 === i.length && (document.removeEventListener("scroll", s),
                        window.removeEventListener("resize", s),
                        window.removeEventListener("orientationchange", s))
                    }
                }
                )),
                o = !1
            }
            ), 200))
        };
        document.addEventListener("scroll", s),
        window.addEventListener("resize", s),
        window.addEventListener("orientationchange", s),
        s();
        let a = [].slice.call(document.querySelectorAll(".section"))
          , r = !1
          , d = function() {
            !1 === r && (r = !0,
            setTimeout((function() {
                a.forEach((function(i) {
                    if (t(i) && "none" !== getComputedStyle(i).display) {
                        let e = $(i).data("id");
                        $('.section1600[data-id="' + e + '"] .flexblock_wrapper').each((function() {
                            playAnimationFront($(this).data("blockId"), $(this).data("index"), "blockVisible")
                        }
                        )),
                        a = a.filter((function(e) {
                            return e !== i
                        }
                        )),
                        0 === i.length && (document.removeEventListener("scroll", d),
                        window.removeEventListener("resize", d),
                        window.removeEventListener("orientationchange", d))
                    }
                }
                )),
                r = !1
            }
            ), 200))
        };
        document.addEventListener("scroll", d),
        window.addEventListener("resize", d),
        window.addEventListener("orientationchange", d),
        d()
    }
    if ($(".section141 .overlay_image_box,  .section147 .overlay_image_box, .section142 .overlay_image_box, .section1157 .overlay_image_box,  .section146 .overlay_image_box,  .section315 .overlay_image_box, .section315 img ").size() && $(".section141 .overlay_image_box,  .section147 .overlay_image_box, .section142 .overlay_image_box, .section1157 .overlay_image_box,  .section146 .overlay_image_box,  .section315 .overlay_image_box, .section315 img ").click((function() {
        if ($(this).closest(".section").hasClass("img_zoom")) {
            var i = "/img/800x600/" + $(this).parent().children().attr("src").split("/")[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
            $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + i + ')"></div><div id="img_zoomer_close"></div></div>')
        }
    }
    )),
    $(".overlay_image_box").parent().hasClass("img_zoom") || $(".image_box").hasClass("img_zoom")) {
        $(window).resize((function() {
            $("#popup_img_wrap img").css("max-height", .98 * $(window).height())
        }
        ));
        var $all_photo = $(".section .img_zoom"), clicked_img_number, $preload, start, $gallery_img_hide, $gallery_img, portfolio_img_src = [];
        function GotoRight() {
            ++clicked_img_number + 1 > portfolio_img_src.length && (clicked_img_number = 0),
            start = !1,
            load_img()
        }
        function GotoLeft() {
            --clicked_img_number < 0 && (clicked_img_number = portfolio_img_src.length - 1),
            start = !1,
            load_img()
        }
        function CloseGallery() {
            $("#popup_img").fadeOut(100, (function() {
                $("#popup_img").remove()
            }
            ))
        }
        function load_img() {
            var i = setTimeout((function() {
                $preload.show()
            }
            ), 400);
            start ? ($gallery_img.attr("src", portfolio_img_src[clicked_img_number]).load((function() {
                clearTimeout(i),
                $preload.hide()
            }
            )),
            $gallery_img.attr("src", portfolio_img_src[clicked_img_number])) : $gallery_img_hide.attr("src", portfolio_img_src[clicked_img_number]).load((function() {
                $preload.hide(),
                $gallery_img.fadeOut(100, (function() {
                    clearTimeout(i),
                    $gallery_img.attr("src", portfolio_img_src[clicked_img_number]).fadeIn(400)
                }
                ))
            }
            ))
        }
        $all_photo.click((function(i) {
            (i.stopPropagation(),
            "" == $(this).children(".overlay_image_box").data("link")) && (portfolio_img_src.length = 0,
            ($(this).parent().hasClass("item") ? $(this).parent().parent().find(".img_zoom") : $(this).parent().children(".img_zoom")).each((function() {
                var i = $(this).children("img").data("src") || $(this).children("img").attr("src") || $(this).children(".img").data("src")
                  , e = (i.split("/"),
                $(this).closest(".section"))
                  , t = i.split("/")
                  , n = "0x1800";
                e.hasClass("img_album") && (n = "0x1800"),
                e.hasClass("img_portrait") && (n = "1200x1800"),
                (e.hasClass("img_square") || e.hasClass("square")) && (n = "1800x1800");
                var o = "/img/" + n + "/" + t[3];
                portfolio_img_src.push(o)
            }
            )),
            -1 === (clicked_img_number = $(this).parent().hasClass("item") ? $(this).parent().index() : $(this).index()) && (clicked_img_number = 0),
            start = !0,
            $("body").append('<div id="popup_img"><div id="preload"></div><img id="popup_img_hide" src=' + portfolio_img_src[clicked_img_number] + '>\n<div id="popup_img_prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div> <div id="popup_img_next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>   \n<div id="popup_img_wrap"><img src="' + portfolio_img_src + '"><div id="close_popup_img" title="Закрыть"></div></div></div>'),
            $("#popup_img_wrap img").css("max-height", .98 * $(window).height()),
            $("#popup_img").fadeIn(200),
            $preload = $("#preload"),
            $gallery_img = $("#popup_img_wrap img"),
            $gallery_img_hide = $("#popup_img_hide"),
            load_img())
        }
        )),
        $("body").on("click", "#popup_img_wrap", (function(i) {
            i.stopPropagation(),
            GotoRight()
        }
        )),
        $("body").on("click", "#popup_img_next", (function(i) {
            i.stopPropagation(),
            GotoRight()
        }
        )),
        $("body").on("click", "#popup_img_prev", (function(i) {
            i.stopPropagation(),
            GotoLeft()
        }
        )),
        $("body").on("click", "#close_popup_img", (function(i) {
            i.stopPropagation(),
            CloseGallery()
        }
        )),
        $("body").on("click", "#popup_img", (function(i) {
            i.stopPropagation(),
            CloseGallery()
        }
        )),
        $(document).keydown((function(i) {
            37 === i.which && GotoLeft(),
            39 === i.which && GotoRight()
        }
        )),
        $(document).keydown((function(i) {
            27 === i.which && ($(".popup_wrap").fadeOut(400),
            $("#popup_img").fadeOut(100, (function() {
                $("#popup_img").remove()
            }
            )))
        }
        ))
    }
    $(".section130 .image1").size() && $(".section130").on("click", ".image1", (function() {
        $(".show_extra_info").removeClass("currnet"),
        $(this).addClass("currnet");
        var i = $(this).closest(".arr1")
          , e = 0;
        if ($.each(i.find(".show_extra_info"), (function(i, t) {
            $(t).hasClass("currnet") && (e = i)
        }
        )),
        $(this).hasClass("show_extra_info"))
            return $(this).parent().parent().children(".extra_info_block_wrapper").length > 0 && ($(this).parent().parent().children(".extra_info_block_wrapper").eq(e).show(),
            $("body").addClass("modal")),
            !0;
        if ($(this).hasClass("extra_image"))
            return !1;
        var t = $(this).closest(".section");
        if (t.hasClass("img_zoom")) {
            if (t.hasClass("get_item_from_category"))
                return;
            var n = ($(this).children().data("src") || $(this).children().attr("src")).split("/")
              , o = "1600x1200"
              , s = "";
            t.hasClass("img_album") && (o = "1600x1200"),
            t.hasClass("img_portrait") && (o = "800x1120",
            s = "portret"),
            t.hasClass("img_square") && (o = "1200x1200",
            s = "square");
            var a = "/img/" + o + "/" + n[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
            $("body").append(`<div id="img_zoomer_bg"><img id="img_zoomer" class="${s}" src="${a}" loading="lazy" /><div id="img_zoomer_close"></div></div>`)
        }
    }
    )),
    $(".section1600 .flexblock_wrapper_image .flexblock_content").size() && $(".section1600").on("click", '.flexblock_wrapper_image .flexblock_content[data-zoom="1"]', (function() {
        var i = $(this).data("image").split("/")
          , e = "1600x1200"
          , t = $(this).data("imageZoomFormat");
        switch (t) {
        case "full":
            e = "0x1000";
            break;
        case "album":
            e = "1600x1200";
            break;
        case "portrait":
            e = "0x1000",
            t = "portret";
            break;
        case "square":
            e = "1200x1200"
        }
        var n = `/img/${e}/${i[3]}`;
        $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
        var o = `\n<div id="img_zoomer_bg">\n\t<img id="img_zoomer" class="${t}" src="${n}" loading="lazy" />\n\t<div id="img_zoomer_close"></div>\n</div>`;
        $("body").append(o)
    }
    )),
    $(".section1158 .image1, .section1158 .image2").size() && $(".section1158").on("click", ".image1, .image2", (function() {
        var i = $(this).closest(".section");
        if (i.hasClass("img_zoom")) {
            var e = ($(this).children().data("src") || $(this).children().attr("src")).split("/")
              , t = "img_album";
            i.hasClass("img_album");
            var n = "/img/" + "0x1200" + "/" + e[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
            $("body").append(`<div id="img_zoomer_bg"><img id="img_zoomer" class="${t}" src="${n}" loading="lazy" /><div id="img_zoomer_close"></div></div>`)
        }
    }
    )),
    $(".section1302.collapse_menu").each((function() {
        $(this).find(".level1").hide(),
        $(this).find(".level0").each((function(i, e) {
            $(e).next().hasClass("level1") && $(e).addClass("children_toggle")
        }
        ))
    }
    )),
    $("body").on("click", ".section1302.collapse_menu .children_toggle a", (function(i) {
        i.preventDefault()
    }
    )),
    $("body").on("click", ".section1302.collapse_menu .children_toggle", (function() {
        var i = $(this).closest(".section");
        i.find(".level1").hide(),
        i.find(".children_toggle").removeClass("active"),
        $(this).addClass("active");
        var e = !1;
        $(this).nextAll().each((function(i, t) {
            e || ($(t).hasClass("level1") ? $(t).show() : e = !0)
        }
        ))
    }
    )),
    $(".section1302 .image1").size() && $(".section1302").on("click", ".image1", (function() {
        $(".show_extra_info").removeClass("currnet"),
        $(this).addClass("currnet");
        var i = $(this).closest(".arr1")
          , e = 0;
        if ($.each(i.find(".show_extra_info"), (function(i, t) {
            $(t).hasClass("currnet") && (e = i)
        }
        )),
        $(this).hasClass("show_extra_info"))
            return $(this).parent().parent().children(".extra_info_block_wrapper").length > 0 && ($(this).parent().parent().children(".extra_info_block_wrapper").eq(e).show(),
            $("body").addClass("modal")),
            !0;
        if ($(this).hasClass("extra_image"))
            return !1;
        var t = $(this).closest(".section");
        if (t.hasClass("img_zoom")) {
            if (t.hasClass("get_item_from_category"))
                return;
            var n = ($(this).children().data("src") || $(this).children().attr("src")).split("/")
              , o = "1600x1200"
              , s = "";
            t.hasClass("img_album") && (o = "1600x1200"),
            t.hasClass("img_portrait") && (o = "800x1120",
            s = "portret"),
            t.hasClass("img_square") && (o = "1200x1200",
            s = "square");
            var a = "/img/" + o + "/" + n[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
            $("body").append(`<div id="img_zoomer_bg"><img id="img_zoomer" class="${s}" src="${a}" loading="lazy" /><div id="img_zoomer_close"></div></div>`)
        }
    }
    )),
    $(".section1130 .image1").size() && $(".section1130").on("click", ".image1", (function() {
        $(".show_extra_info").removeClass("currnet"),
        $(this).addClass("currnet");
        var i = $(this).closest(".arr1")
          , e = 0;
        if ($.each(i.find(".show_extra_info"), (function(i, t) {
            $(t).hasClass("currnet") && (e = i)
        }
        )),
        $(this).hasClass("show_extra_info"))
            return $(this).parent().parent().children(".extra_info_block_wrapper").eq(e).show(),
            $("body").addClass("modal"),
            !0;
        if ($(this).hasClass("extra_image"))
            return !1;
        var t = $(this).closest(".section");
        if (t.hasClass("img_zoom")) {
            if (t.hasClass("get_item_from_category"))
                return;
            var n = ($(this).children().data("src") || $(this).children().attr("src")).split("/")
              , o = "1600x1200"
              , s = "";
            t.hasClass("img_album") && (o = "1600x1200"),
            t.hasClass("img_portrait") && (o = "800x1120",
            s = "portret"),
            t.hasClass("img_square") && (o = "1200x1200",
            s = "square");
            var a = "/img/" + o + "/" + n[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
            $("body").append(`<div id="img_zoomer_bg"><img id="img_zoomer" class="${s}" src="${a}" loading="lazy" /><div id="img_zoomer_close"></div></div>`)
        }
    }
    )),
    $(".section138 .image").size() && $(".section138 .image").click((function() {
        var i = $(this).closest(".section");
        if (i.hasClass("img_zoom")) {
            var e = $(this).children().attr("src").split("/");
            if (i.hasClass("big_img")) {
                var t = "/img/0x1000/" + e[3];
                $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
                var n = `\n<div id="img_zoomer_bg">\n\t<img id="img_zoomer" src="${t}" loading="lazy" />\n\t<div id="img_zoomer_close"></div>\n</div>`;
                $("body").append(n)
            } else if (i.hasClass("wide")) {
                t = "/img/1254x600/" + e[3];
                $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
                $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + t + ') ;background-repeat: no-repeat;  width: 1254px; height: 600px;max-width: 94%; "></div><div id="img_zoomer_close"></div></div>')
            } else if (i.hasClass("fill_img")) {
                t = "/img/1000x702/" + e[3];
                $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
                $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + t + ') ;background-repeat: no-repeat;  width: 1000px; height: 702px;max-width: 94%; "></div><div id="img_zoomer_close"></div></div>')
            } else {
                t = "/img/800x563/" + e[3];
                $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
                $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + t + ') ;background-repeat: no-repeat;  width: 800px; height: 560px; max-width: 94%; "></div><div id="img_zoomer_close"></div></div>')
            }
        }
    }
    )),
    $(".section128 .image1, .section125 .image1, .section124 .image1, .section149 .image1, .section150 .image1, .section200 .image1, .section201 .image1,.section250 .image1").size() && $(".section128 .image1, .section128 .image2, .section128 .image3,  .section125 .image1,  .section125 .image2,  .section124 .image1,  .section124 .image2,  .section124 .image3, .section149 .image1, .section149 .image2, .section149 .image3, .section150 .image1, .section150 .image2, .section200 .image1, .section200 .image2, .section200 .image3, .section200 .image4, .section201 .image1, .section201 .image2, .section201 .image3, .section201 .image4, .section201 .image5, .section250 .image1, .section250 .image2").click((function() {
        $(".show_extra_info").removeClass("currnet"),
        $(this).addClass("currnet");
        var i = $(this).closest(".arr1")
          , e = 0;
        if ($.each(i.find(".show_extra_info"), (function(i, t) {
            $(t).hasClass("currnet") && (e = i)
        }
        )),
        $(this).hasClass("show_extra_info"))
            return $(this).parent().parent().children(".extra_info_block_wrapper").eq(e).show(),
            $("body").addClass("modal"),
            !0;
        if ($(this).hasClass("extra_image"))
            return !1;
        if ($(this).closest(".section").hasClass("img_zoom")) {
            var t = $(this).children().attr("src").split("/");
            if ($(this).hasClass("image_big")) {
                var n = "/img/1200x1200/" + t[3];
                $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
                $("body").append(`<div id="img_zoomer_bg"><img id="img_zoomer" src="${n}" loading="lazy" /><div id="img_zoomer_close"></div></div>`)
            } else {
                n = "/img/1600x1200/" + t[3];
                $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
                $("body").append(`<div id="img_zoomer_bg"><img id="img_zoomer" src="${n}" loading="lazy" /><div id="img_zoomer_close"></div></div>`)
            }
        }
    }
    )),
    $(".section151 .image1").size() && $(".section151 .image1, .section151 .image2, .section151 .image3, .section151 .image4").click((function() {
        var i = $(this).closest(".section");
        if (i.hasClass("img_zoom")) {
            var e = ($(this).children().data("src") || $(this).children().attr("src")).split("/");
            i.hasClass("img_album");
            var t = "/img/" + "0x1200" + "/" + e[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(),
            $("body").append(`<div id="img_zoomer_bg"><img id="img_zoomer" class="img_album" src="${t}" loading="lazy" /><div id="img_zoomer_close"></div></div>`)
        }
    }
    )),
    $("body").on("click", "#img_zoomer_bg ,#img_zoomer_clocse", (function() {
        $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove()
    }
    )),
    window.basket = {
        status: 0,
        getBasketModified: function() {
            var i = JSON.parse(localStorage.getItem("basket_modified"));
            return null == i ? (new Date).getTime() : i
        },
        setBasketModified: function() {
            try {
                return localStorage.setItem("basket_modified", JSON.stringify((new Date).getTime())),
                !0
            } catch (i) {
                i == QUOTA_EXCEEDED_ERR && alert("Ошибка добавления товара в корзину")
            }
        },
        getData: function() {
            var i = JSON.parse(localStorage.getItem("basket"));
            return null == i ? [] : i
        },
        saveData: function(i) {
            try {
                localStorage.setItem("basket", JSON.stringify(i))
            } catch (i) {
                i == QUOTA_EXCEEDED_ERR && alert("Ошибка добавления товара в корзину")
            }
        },
        addItem: function(i) {
            var e = this.getData()
              , t = !1;
            $.each(e, (function(e, n) {
                n.title == i.title && 1 * n.price == 1 * i.price && (t = !0,
                void 0 === n.quantity ? n.quantity = 1 : (n.quantity = parseInt(n.quantity),
                n.quantity++),
                n.price = 1 * n.price)
            }
            )),
            t || e.push(i),
            this.setBasketModified(),
            this.saveData(e),
            this.renderForm(),
            this.renderBtn(),
            this.showBtn()
        },
        removeItem: function(i) {
            var e = this.getData()
              , t = !1;
            null != i.price && "NaN" != i.price && "null" != i.price || (i.price = 0),
            e && $.each(e, (function(n, o) {
                if (t)
                    return !0;
                null != o.price && "NaN" != o.price && "null" != o.price || (o.price = 0),
                o.title == i.title && o.price == i.price && (e.splice(n, 1),
                t = !0)
            }
            )),
            this.saveData(e)
        },
        updateItem: function(i) {
            var e = this.getData()
              , t = !1;
            e && $.each(e, (function(e, n) {
                if (t)
                    return !0;
                n.title == i.title && 1 * n.price == 1 * i.price && (n.quantity = i.quantity,
                t = !0),
                n.price = 1 * n.price
            }
            )),
            this.saveData(e)
        },
        clean: function() {
            this.saveData([])
        },
        countItems: function() {
            return this.getData().length
        },
        countSum: function() {
            var i = 0;
            return $.each(this.getData(), (function(e, t) {
                i += parseInt(t.quantity) * parseFloat(t.price)
            }
            )),
            i = 1 * i.toFixed(2)
        },
        btnEventListener: function() {
            var i = this;
            $("body").on("click", "#basket_btn", (function() {
                i.showForm(),
                $("body").addClass("modal")
            }
            ))
        },
        renderBtn: function() {
            $("#basket_btn").remove(),
            this.countItems() > 0 && $("body").append(`<div id="basket_btn" style="display:none"><i class="fa fa-shopping-basket" aria-hidden="true"></i><span>${this.countItems()}</span></div>`),
            $("#basket_btn").addClass("animate"),
            this.init()
        },
        hideBtn: function() {
            $("#basket_btn").hide()
        },
        showBtn: function() {
            $("#basket_btn").show()
        },
        updateForm: function() {
            if (null !== window.tobiz.basket_conf && void 0 !== window.tobiz.basket_conf && void 0 !== window.tobiz.basket_conf.basket_extra) {
                var i = window.tobiz.basket_conf
                  , e = 0
                  , t = 1
                  , n = "";
                if (void 0 !== i.basket_free_delivery && i.basket_free_delivery) {
                    var o = i.basket_free_delivery_from;
                    o = 1 * (o = parseFloat(o)).toFixed(2),
                    this.countSum() > o ? ($("#basket_delivery").html("Доставка бесплатная"),
                    $('#basket_make_order input[name="delivery"]').val("Бесплатная доставка")) : ($("#basket_delivery").html(`Стоимость доставки: ${i.basket_delivery_price + this.getCurrency()}<div>Бесплатная доставка при заказе от ${i.basket_free_delivery_from + this.getCurrency()}</div>`),
                    e = 1 * i.basket_delivery_price,
                    $('#basket_make_order input[name="pickup"]').prop("checked") && (e = 0,
                    $("#basket_delivery").html("")),
                    $('#basket_make_order input[name="delivery"]').val(`Стоимость доставки ${e + this.getCurrency()}`))
                }
                if (void 0 !== i.basket_promo) {
                    $('#basket_make_order input[name="promo_code"]').val("");
                    var s = $("#promo_code").val();
                    if (s = (s = s.trim()).toUpperCase(),
                    _.result(i, "basket_promo_code", "").trim().toUpperCase() == s && "" != s) {
                        let e = parseFloat(_.result(i, "basket_promo_discount", 0)) / 100;
                        if (e > 0 && e < 1) {
                            t = 1 - e;
                            let i = this.countSum() * e;
                            i = 1 * i.toFixed(2),
                            n = '<span class="promo">Код принят! Скидка составляет: ' + i + this.getCurrency() + "</span>",
                            $('#basket_make_order input[name="promo_code"]').val(s)
                        }
                    }
                    if (_.result(i, "basket_promo_code2", "").trim().toUpperCase() == s && "" != s) {
                        let e = parseFloat(_.result(i, "basket_promo_discount2", 0)) / 100;
                        if (e > 0 && e < 1) {
                            t = 1 - e;
                            let i = this.countSum() * e;
                            i = 1 * i.toFixed(2),
                            n = '<span class="promo">Код принят! Скидка составляет: ' + i + this.getCurrency() + "</span>",
                            $('#basket_make_order input[name="promo_code"]').val(s)
                        }
                    }
                    if (_.result(i, "basket_promo_code3", "").trim().toUpperCase() == s && "" != s) {
                        let e = parseFloat(_.result(i, "basket_promo_discount3", 0)) / 100;
                        if (e > 0 && e < 1) {
                            t = 1 - e;
                            let i = this.countSum() * e;
                            i = 1 * i.toFixed(2),
                            n = '<span class="promo">Код принят! Скидка составляет: ' + i + this.getCurrency() + "</span>",
                            $('#basket_make_order input[name="promo_code"]').val(s)
                        }
                    }
                    if (_.result(i, "basket_promo_code4", "").trim().toUpperCase() == s && "" != s) {
                        let e = parseFloat(_.result(i, "basket_promo_discount4", 0)) / 100;
                        if (e > 0 && e < 1) {
                            t = 1 - e;
                            let i = this.countSum() * e;
                            i = 1 * i.toFixed(2),
                            n = '<span class="promo">Код принят! Скидка составляет: ' + i + this.getCurrency() + "</span>",
                            $('#basket_make_order input[name="promo_code"]').val(s)
                        }
                    }
                    if (_.result(i, "basket_promo_code5", "").trim().toUpperCase() == s && "" != s) {
                        let e = parseFloat(_.result(i, "basket_promo_discount5", 0)) / 100;
                        if (e > 0 && e < 1) {
                            t = 1 - e;
                            let i = this.countSum() * e;
                            i = 1 * i.toFixed(2),
                            n = '<span class="promo">Код принят! Скидка составляет: ' + i + this.getCurrency() + "</span>",
                            $('#basket_make_order input[name="promo_code"]').val(s)
                        }
                    }
                }
                var a = this.countSum() * t + e;
                a = 1 * a.toFixed(2),
                $("#basket_form_itogo").html(n + " Итого: <span>" + a + this.getCurrency() + "</span>"),
                $('#basket_make_order input[name="amount"]').val(a)
            }
        },
        formEventListener: function() {
            var i = this;
            $("body").on("click", "#basket_form_close", (function() {
                i.hideForm()
            }
            )),
            $("body").on("click", "#basket_left .remove", (function() {
                var e = {
                    title: $(this).parent().find(".item-title-in-title").text(),
                    price: $(this).parent().find(".item-price-in-title span").text()
                };
                i.removeItem(e),
                i.renderForm(),
                i.showForm(),
                i.updateForm()
            }
            )),
            $("body").on("change", '#basket_make_order input[name="pickup"]', (function() {
                $(this).prop("checked") ? $('#basket_make_order textarea[name="address"]').prop("required", !1) : $('#basket_make_order textarea[name="address"]').prop("required", !0),
                i.updateForm()
            }
            )),
            $("body").on("keyup", "#basket_left .quantity input", (function(e) {
                this.value = this.value.replace(/\D/gi, "").replace(/^0+/, ""),
                "" == this.value && (this.value = 0);
                var t = $(this).parent().parent().find(".item-title-in-title").text()
                  , n = $(this).parent().parent().find(".item-price-in-title span").text()
                  , o = $(this).val()
                  , s = {
                    title: t,
                    price: n,
                    quantity: o
                }
                  , a = n * parseInt(o);
                a = 1 * a.toFixed(2),
                $(this).parent().parent().children(".itogo").text(a + i.getCurrency()),
                i.updateItem(s),
                $('#basket_make_order textarea[name="order"]').text(JSON.stringify(i.getData())),
                $("#basket_form_itogo").html("Итого: <span>" + i.countSum() + i.getCurrency() + "</span>"),
                $('#basket_make_order input[name="amount"]').val(i.countSum()),
                i.updateForm()
            }
            )),
            $("body").on("keyup", "#promo_code", (function(e) {
                i.updateForm()
            }
            )),
            $("body").on("click", "#basket_continue, #wrapper", (function(e) {
                i.hideForm()
            }
            )),
            $("body").on("click", "#basket_next_step", (function() {
                "items" == $(this).data("mode") ? ($(this).data("mode", "form"),
                $(this).text("Вернуться к списку"),
                $("#basket_left .item").hide(),
                $("#basket_right").addClass("active")) : ($(this).data("mode", "items"),
                $(this).text("Перейти к оформлению"),
                $("#basket_left .item").show(),
                $("#basket_right").removeClass("active"))
            }
            ))
        },
        renderThanks: function() {
            let i = _.result(_.get(window, "tobiz.basket_conf"), "basket_thanks_title", "Спасибо за покупку!")
              , e = _.result(_.get(window, "tobiz.basket_conf"), "basket_thanks_text", "Заявка отправлена. Свяжемся с Вами в ближайшее время.");
            "" == i && (i = "Спасибо за покупку!"),
            "" == e && (e = "Заявка отправлена. Свяжемся с Вами в ближайшее время."),
            $("#basket_bg_thanks").remove(),
            $("body").append(`<div id="basket_bg_thanks"><div id="basket_thanks_inner"><div class="basket_thanks_close">X</div><div class="basket_thanks_title">${i}</div><div class="basket_thanks_text">${e}</div></div></div>`)
        },
        renderForm: function() {
            var i = this;
            $("#basket_form_bg").remove(),
            $("body").append(`<div id="basket_form_bg" class="" style="display:none">\n<div id="basket_form_inner">\n\t<div class="basket_title"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Корзина</div>\n\t<div class="basket_descr">${this.countItems()} товаров в корзине</div>\n\t<div id="basket_form_close"><i class="fa fa-times" aria-hidden="true"></i></div>\n\t<div id="basket_left"></div>\n\t<div id="basket_right"></div>\n</div></div>`);
            var e = this.getData();
            if ($("#basket_left").append('<div class="item caption">\n<div class="image">Фото</div>\n<div class="title">Название</div>\n<div class="quantity">Количество</div>\n<div class="itogo">Цена</div>\n<div class="remove"></div></div>'),
            $.each(e, (function(e, t) {
                var n = "";
                "" != t.image && (n = '<img src="' + t.image + '"/>');
                var o = t.price * t.quantity;
                o = 1 * o.toFixed(2),
                $("#basket_left").append(`<div class="item" data-id="${e}">\n<div class="image">${n}</div>\n<div class="title"><div class="item-title-in-title">${t.title}</div>\n<div class="item-price-in-title"><span>${t.price}</span>${i.getCurrency()}</div>\n<div class="text-muted">(цена за шт.)</div></div>\n<div class="quantity"><input type="numper" value="${t.quantity}"/></div>\n<div class="itogo">${o + i.getCurrency()}</div>\n<div class="remove"><i class="fa fa-trash"></i></div></div>`)
            }
            )),
            $("#basket_left").append('<div class="tools"></div><div class="btn-group"></div>'),
            null !== window.tobiz.basket_conf && void 0 !== window.tobiz.basket_conf && void 0 !== window.tobiz.basket_conf.basket_extra) {
                var t = window.tobiz.basket_conf;
                if (void 0 !== t.basket_promo && $("#basket_left .tools").append('<div id="basket_promo">Промокод <input type="text" name="promo_code" id="promo_code" placeholder="Введите промокод"/> </div>'),
                $("#basket_left .tools").append('<div id="basket_form_itogo">Итого: <span>' + this.countSum() + i.getCurrency() + "</span></div>"),
                void 0 !== t.basket_free_delivery) {
                    var n = t.basket_free_delivery_from;
                    if (n = 1 * (n = parseFloat(n)).toFixed(2),
                    this.countSum() > n)
                        $("#basket_left .tools").append('<div id="basket_delivery"><i class="fa fa-truck" aria-hidden="true"></i> Доставка бесплатная</div>');
                    else {
                        var o = parseFloat(t.basket_delivery_price);
                        o = 1 * o.toFixed(2),
                        $("#basket_left .tools").append('<div id="basket_delivery">Стоимость доставки: ' + o + this.getCurrency() + "<div>Бесплатная доставка при заказе от " + t.basket_free_delivery_from + i.getCurrency() + "</div></div>")
                    }
                }
                void 0 !== t.basket_continue_shopping && t.basket_continue_shopping && $("#basket_left .btn-group").append('<div id="basket_continue">Продолжить покупки</div>'),
                $("#basket_left .btn-group").append('<div id="basket_next_step" style=" background:' + t.basket_btn_color + '" data-mode="items">Перейти к оформлению</div>'),
                $("#basket_right").append('<div id="basket_title">' + t.basket_title + "</div>"),
                $("#basket_right").append(`<div id="basket_make_order"><form action="handler.php" enctype="multipart/form-data" method="post">\n<input type="hidden" name="action" value="basket"/>\n<input type="hidden" name="promo_code" value=""/>\n<input type="hidden" name="delivery" value=""/>\n<input type="hidden" name="amount" value="${i.countSum()}"/>\n<div><textarea name="order" style="display:none">${JSON.stringify(i.getData())}</textarea></div>\n</form></div>`),
                void 0 !== window.tobiz.basket_conf.basket_name && window.tobiz.basket_conf.basket_name && $("#basket_right form").append('<div><input type="text" name="user_name"  required="required" placeholder="Введите Имя"/></div>'),
                void 0 !== window.tobiz.basket_conf.basket_redirect && window.tobiz.basket_conf.basket_redirect && $("#basket_right form").append('<input type="hidden" name="redirect" value="' + window.tobiz.basket_conf.basket_redirect_link + '"  />');
                var s = "";
                if (void 0 !== window.tobiz.basket_conf.basket_mask && void 0 !== window.tobiz.basket_conf.basket_mask_format && window.tobiz.basket_conf.basket_mask && (s = window.tobiz.basket_conf.basket_mask_format),
                $("#basket_right form").append('<div><input type="text" data-mask="' + s + '" name="tel"  required="required" placeholder="Ваш контактный телефон"/></div>'),
                void 0 !== window.tobiz.basket_conf.hide_email && window.tobiz.basket_conf.hide_email || $("#basket_right form").append('<div><input type="text" name="email" required="required" placeholder="Введите E-mail"/></div>'),
                void 0 !== window.tobiz.basket_conf.basket_fio && window.tobiz.basket_conf.basket_fio && $("#basket_right form").append('<div><input type="text" name="fio" required="required" placeholder="ФИО заказчика"/></div>'),
                void 0 !== window.tobiz.basket_conf.basket_pasport && window.tobiz.basket_conf.basket_pasport && $("#basket_right form").append('<div><input type="text" name="passport" required="required" placeholder="Введите паспортные данные"/></div>'),
                void 0 !== window.tobiz.basket_conf.basket_address && window.tobiz.basket_conf.basket_address && $("#basket_right form").append('<div><textarea type="text" name="address"  required="required" placeholder="Адрес доставки"></textarea></div>'),
                void 0 !== window.tobiz.basket_conf.basket_pickup && window.tobiz.basket_conf.basket_pickup && $("#basket_right form").append('<div><label><input type="checkbox" name="pickup"  value=1 /> Самовывоз (бесплатно) </label></div>'),
                "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_methods_selector", "0")) {
                    let i = "";
                    "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_method_cash", "0") && (i += '<option value="cash">Наличные</option>'),
                    "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_method_bank", "0") && (i += '<option value="bank">Оплата по счету</option>'),
                    "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_method_rk", "0") && (i += '<option value="rk">Робокасса</option>'),
                    "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_method_sb", "0") && (i += '<option value="sb">Сбербанк</option>'),
                    "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_method_yookassa", "0") && (i += '<option value="yookassa">Yookassa</option>'),
                    "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_method_ik", "0") && (i += '<option value="ik">InterKassa</option>'),
                    "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_method_payeer", "0") && (i += '<option value="payeer">Payeer</option>'),
                    "1" == _.result(_.get(window, "tobiz.basket_conf"), "payment_method_tinkoff", "0") && (i += '<option value="tinkoff">Tinkoff</option>'),
                    "" != i && $("#basket_right form").append(`<div><select name="payment_method" required="required" ><option value="" seleted="seleted">Способ оплаты</option>${i}</select></div>`)
                }
                void 0 !== window.tobiz.basket_conf.basket_comment && window.tobiz.basket_conf.basket_comment && $("#basket_right form").append('<div><textarea name="comment" placeholder="Комментарий" ></textarea></div>'),
                void 0 !== window.tobiz.basket_conf.basket_captcha && window.tobiz.basket_conf.basket_captcha && $("#basket_right form").append('<div><input class="input" type="text" name="norobot" required="required" placeholder="Введите код с картинки"><br><img class="mt-2" src="/captcha.php"></div>'),
                $("#basket_right form").append('<div><input style=" background-color:' + t.basket_btn_color + '" type="submit" value="Оформить заказ"/></div>'),
                $("#basket_right").append('<div id="basket_descr">' + t.basket_descr + "</div>"),
                "1" == _.result(t, "default_agreement", "") && $("#basket_right").append('<div id="basket_form_default_agreement">Нажимая на кнопку, Вы принимаете <a href="/?personal_data=1" target="_blank">Положение</a> и <a href="?personal_data=2" target="_blank">Согласие на обработку персональных данных</a></div>')
            } else
                $("#basket_left .tools").append('<div id="basket_form_itogo">Итого: <span>' + this.countSum() + i.getCurrency() + "</span></div>"),
                $("#basket_right").append('<div id="basket_title">Оформить заказ</div>'),
                $("#basket_right").append(`<div id="basket_make_order"><form action="handler.php" enctype="multipart/form-data" method="post">\n<input type="hidden" name="action" value="basket"/>\n<input type="hidden" name="amount" value="${i.countSum()}"/>\n<div><input type="text" name="email" required="required" placeholder="Введите E-mail"/></div>\n<div><input type="text" name="tel"  required="required" placeholder="Введите телефон"/></div>\n<div><textarea name="comment" placeholder="Адрес доставки (комментарий)" ></textarea></div>\n<div><textarea name="order" style="display:none">${JSON.stringify(i.getData())}</textarea></div>\n<div><input type="submit" value="Оформить заказ"/></div>\n</form></div>`),
                $("#basket_left .btn-group").append('<div id="basket_next_step" data-mode="items">Перейти к оформлению</div>');
            this.init(),
            this.updateForm()
        },
        hideForm: function() {
            $("#basket_form_bg").hide(),
            $("body").removeClass("modal"),
            this.renderBtn(),
            this.showBtn()
        },
        showForm: function() {
            $("#basket_form_bg").show(),
            this.hideBtn()
        },
        sendForm: function() {},
        getCurrency: function() {
            var i = " руб.";
            return null !== window.tobiz.basket_conf && void 0 !== window.tobiz.basket_conf && void 0 !== window.tobiz.basket_conf.basket_extra && void 0 !== window.tobiz.basket_conf.products_currency && null != window.tobiz.basket_conf.products_currency && (i = " " + window.tobiz.basket_conf.products_currency),
            i
        },
        init: function() {
            this.status || (this.status = 1,
            this.formEventListener(),
            this.btnEventListener())
        }
    },
    window.basket.countItems() > 0 && window.tobiz.t >= 3 && (window.basket.renderForm(),
    window.basket.renderBtn(),
    window.basket.showBtn(),
    window.basket.init());
    var clearBasket = function() {
        var i = window.basket.getBasketModified()
          , e = new Date;
        e.setTime(e.getTime() - 144e5);
        var t = e.getTime();
        (new Date).getTime();
        i < t && (window.basket.saveData([]),
        window.basket.setBasketModified())
    }();
    function silder310(i, e) {
        var t = i.find(".image_box").size()
          , n = i.find(".image_box").eq(0).css("marginRight");
        n = 1 * n.replace(/px/g, "");
        var o = i.find(".image_box").eq(0).width() + ""
          , s = t * (o = 1 * o.replace(/px/g, "")) + (t - 1) * n + n;
        i.find(".image_wrapper").css({
            width: s + "px"
        });
        var a = i.find(".image_wrapper").css("left");
        a = 1 * a.replace(/px/g, ""),
        "left" == e && (s <= -(a -= n + o) + i.find(".image_screen").width() && (a = 0),
        a < -1 * (t * o + (t - 1) * n)) || ("right" == e && (a += n + o) > 0 && (a = 0),
        i.find(".image_wrapper").css({
            left: a + "px"
        }))
    }
    function silder1155(i, e) {
        var t = i.find(".image_box").size()
          , n = i.find(".image_box").eq(0).css("marginLeft")
          , o = i.find(".image_box").eq(0).css("marginRight");
        o = 1 * o.replace(/px/g, ""),
        n = 1 * n.replace(/px/g, "");
        var s = i.find(".image_box").eq(0).width() + ""
          , a = t * (s = 1 * s.replace(/px/g, "")) + (t - 1) * o + o;
        i.find(".image_wrapper").css({
            width: a + "px"
        });
        var r = i.find(".image_wrapper").css("left");
        r = 1 * r.replace(/px/g, "");
        var d = t * (o + s);
        $(window).width() < 800 ? ("left" == e && (-(d - s) >= r - 10 ? r = 0 : r -= o + s),
        "right" == e && (r += o + s) > 0 && (r = 0)) : ("left" == e && (-d > r - 1170 - s ? r = 0 : r -= o + s),
        "right" == e && (r += o + s) > 0 && (r = 0)),
        i.find(".image_wrapper").css({
            left: r + "px"
        })
    }
    function silder1160(i, e) {
        var t = i.find(".arr1").size()
          , n = $(window).width()
          , o = i.find(".arr1").eq(0).width() + ""
          , s = t * (o = 1 * o.replace(/px/g, "")) + 0 * (t - 1) + 0;
        i.find(".image_wrapper").css({
            width: s + "px"
        });
        var a = i.find(".image_wrapper").css("left");
        a = 1 * a.replace(/px/g, "");
        var r = t * (0 + o)
          , d = "px";
        $(window).width() > 1024 ? "left" == e && (-r > a - 1170 - o / t ? (a = -25,
        d = "vw") : a > 0 ? (a = 0,
        d = "vw") : a -= 0 + o) : "left" == e && (-r > a - n - o ? (a = 0,
        console.log(11),
        d = "vw") : a > 0 ? (console.log(22),
        a = 0,
        d = "vw") : (console.log(33),
        a -= 0 + o)),
        "right" == e && (a += 0 + o) > 0 && (console.log(4),
        a = 0,
        d = "vw"),
        i.find(".image_wrapper").css({
            left: a + d
        })
    }
    if ($(".section .item_operation").click((function() {
        var i = $(this).text()
          , e = $(this).parent().find("input").val();
        let t = e;
        switch (i) {
        case "+":
            t = Number(e) + 1;
            break;
        case "-":
            e > 1 && (t = Number(e) - 1)
        }
        $(this).parent().find("input").val(t)
    }
    )),
    $("div.btn1, div.btn2, div.btn3, div.btn4,  div.btn5, div.btn6").click((function() {
        var i = $(this).closest(".section")
          , e = this
          , t = ".title1, .title2, .title3, .title4, .title5"
          , n = ".price1, .price2, .price3, .price4, .price5";
        if (image_selector = ".image1 img, .image2 img, .image3 img, .image4 img, .image5 img",
        $(this).hasClass("add_basket") && window.tobiz.t >= 3) {
            var o = $(this).parent().find(t).text()
              , s = $(this).parent().find(n).text();
            if (i.hasClass("section125") || i.hasClass("section126") || i.hasClass("section1130") || i.hasClass("section129"))
                var a = $(this).parent().parent().find(`${image_selector}, .left img`).attr("src");
            else
                a = $(this).parent().find(image_selector).attr("src");
            var r = 1;
            $(this).hasClass("new_basket_btn") && (r = $(this).parent().parent().find(".item_counter input").val(),
            o = $(this).parent().parent().find(t).text(),
            s = $(this).parent().parent().find(n).text(),
            a = $(this).parent().parent().find(image_selector).attr("src")),
            i.hasClass("section1130") && ($("body").removeClass("modal"),
            o = $(this).parent().siblings(t).text(),
            s = $(this).parent().siblings(n).text(),
            $(this).parent().hasClass("right") && (o = $(this).siblings(".title1").text(),
            s = $(this).siblings(".price1").text()),
            $(this).hasClass("new_basket_btn") && (o = $(this).parent().parent().parent().find(t).text(),
            s = $(this).parent().parent().parent().find(n).text(),
            a = $(this).parent().parent().parent().find(image_selector).attr("src")));
            var d = s.replace(/[^-,.0-9]/gim, "");
            if (d = d.replace(",", "."),
            d = 1 * (d = parseFloat(d)).toFixed(2),
            s = parseInt(s.replace(/\D+/g, "")),
            s = d,
            a) {
                var l = a.split("/");
                a = "/img/100x100/" + l[l.length - 1]
            } else
                a = "";
            var c = {
                title: o,
                price: s,
                image: a,
                quantity: r
            };
            window.basket.addItem(c),
            window.basket.renderForm(),
            null !== window.tobiz.basket_conf && void 0 !== window.tobiz.basket_conf || void 0 !== window.tobiz.basket_conf.do_not_show_when_add && window.tobiz.basket_conf.do_not_show_when_add || window.basket.showForm(),
            $('#basket_make_order input[name="tel"]').each((function() {
                var i = $(this).data("mask");
                $(this).mask(i)
            }
            ))
        } else if ($(this).hasClass("open_card"))
            $(this).closest(".arr1").find(".extra_info_block_wrapper").show(),
            $(this).addClass("open_card_was"),
            $(this).removeClass("open_card");
        else if ($("body").addClass("modal"),
        $("body").addClass("no_clip"),
        i.find(".arr1").size())
            if (i.hasClass("section312"))
                $(this).closest(".arr1").find(".popup_form").show().animate({
                    opacity: "1"
                }, 300);
            else if (i.hasClass("section318") || i.hasClass("section319"))
                $(e).parent().find(".popup_form").show().animate({
                    opacity: "1"
                }, 300);
            else if (i.hasClass("section126"))
                $(e).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({
                    opacity: "1"
                }, 300),
                $(e).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({
                    opacity: "1"
                }, 300);
            else if (i.hasClass("section155"))
                $(e).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({
                    opacity: "1"
                }, 300),
                $(e).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({
                    opacity: "1"
                }, 300);
            else if (i.hasClass("section1127"))
                $(e).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({
                    opacity: "1"
                }, 300),
                $(e).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({
                    opacity: "1"
                }, 300);
            else if (i.hasClass("section1250"))
                $(e).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({
                    opacity: "1"
                }, 300),
                $(e).hasClass("btn2") && ($(this).parent().find(".popup_form").eq(1).length ? $(this).parent().find(".popup_form").eq(1).show().animate({
                    opacity: "1"
                }, 300) : $(this).parent().find(".popup_form").eq(0).show().animate({
                    opacity: "1"
                }, 300));
            else if (i.hasClass("section129"))
                $(e).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({
                    opacity: "1"
                }, 300),
                $(e).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({
                    opacity: "1"
                }, 300);
            else if (i.hasClass("section1130")) {
                if ($(e).hasClass("btn1") && $(this).parent().siblings(".popup_form").eq(0).show().animate({
                    opacity: "1"
                }, 300),
                $(e).hasClass("btn2")) {
                    let i = $(this).find(".popup_form").length;
                    $(this).parent().parent().find(".popup_form").eq(i - 1).show().animate({
                        opacity: "1"
                    }, 300)
                }
            } else if (i.hasClass("section3010")) {
                if ($(e).hasClass("btn1")) {
                    var h = $(this).parent().find(".popup_form").clone();
                    i.append(h),
                    h.addClass("temp_form"),
                    h.show(),
                    setTimeout((function() {
                        h.addClass("showed")
                    }
                    ), 100),
                    h.animate({
                        opacity: "1"
                    }, 300)
                }
            } else
                $(this).parent().find(".popup_form").show().animate({
                    opacity: "1"
                }, 300);
        else
            i.find(".popup_form").show().animate({
                opacity: "1"
            }, 300)
    }
    )),
    $(".section1130 .btn3").click((function() {
        for (i = 0; i <= 5; i++)
            if ($(this).parent().children(".extra_info" + i).size()) {
                var e = $(this).closest(".arr1").find(".btn" + i).eq(0);
                null != e.attr("href") ? window.location.href = e.attr("href") : $(this).hasClass("add_basket") || e.click()
            }
    }
    )),
    $(".btn1x, .btn2x, .btn3x, .btn4x, .btn5x").click((function() {
        for (i = 0; i <= 5; i++)
            if ($(this).parent().children(".extra_info" + i).size()) {
                var e = $(this).closest(".arr1").find(".btn" + i).eq(0);
                null != e.attr("href") ? window.location.href = e.attr("href") : e.click()
            }
        $(".extra_info_block_wrapper").hide()
    }
    )),
    $(".btn1, .btn2, .btn3, .btn4,  .btn5, .btn6, .submit_btn, .btn1x, .btn2x, .btn3x, .btn4x,  .btn5x").hover((function() {
        if ($(this).hasClass("surround")) {
            var i = $(this).data("hcolor")
              , e = $(this).closest(".section").data("hcolor")
              , t = $(this).css("background-color")
              , n = "#ffffff";
            $(this).attr("data-color", t),
            $(this).parent().parent(".extra_info_block").size() && (e = $(this).parents(".arr1").find(".btn1").data("hcolor")),
            "rgb(255, 255, 255)" == t && (n = "#3D3D3D"),
            "#ffffff" == e && (n = "#ffffff",
            e = "#ff6600"),
            null != i ? $(this).css({
                backgroundColor: i
            }) : $(this).css({
                backgroundColor: e
            }),
            $(this).css({
                borderColor: "transparent"
            })
        } else if ($(this).hasClass("brd_animation")) {
            t = $(this).css("color");
            $(this).attr("data-color", t),
            $(this).css({
                backgroundColor: "transparent",
                color: t
            })
        } else {
            e = $(this).closest(".section").data("hcolor"),
            t = $(this).css("color"),
            n = "#fff",
            i = $(this).data("hcolor");
            $(this).attr("data-color", t),
            $(this).parent().parent(".extra_info_block").size() && (e = $(this).parents(".arr1").find(".btn1").data("hcolor"),
            i = $(this).parents(".arr1").find(".btn1").data("hcolor")),
            n = void 0 !== i || "undefined" !== i ? i : e,
            "rgb(255, 255, 255)" == (t = " transparent") && (n = "#ff6600",
            t = " transparent"),
            $(this).css({
                backgroundColor: t,
                color: n
            })
        }
        $(this).addClass("hover")
    }
    ), (function() {
        if ($(this).hasClass("surround")) {
            var i = $(this).data("color");
            $(this).css({
                backgroundColor: i,
                borderColor: "transparent"
            }),
            "rgb(255, 255, 255)" == $(this).css("background-color") && ($(this).css({
                color: "#3D3D3D"
            }),
            $(this).css({
                backgroundColor: "#ffffff"
            }))
        } else {
            i = $(this).data("color");
            $(this).css({
                color: i,
                backgroundColor: "transparent"
            })
        }
        $(this).removeAttr("date-color"),
        $(this).removeClass("hover")
    }
    )),
    setInterval((function() {
        $(".objtimer").size() && $(".objtimer").each((function() {
            var i = $(this).data("type")
              , e = $(this).data("dd")
              , t = $(this).data("dm")
              , n = $(this).data("dy")
              , o = ($(this).data("monthly"),
            $(this).data("weekly"))
              , s = $(this).data("hr")
              , a = $(this).data("min")
              , r = new Date;
            if ("date" == i)
                var d = new Date(n,t - 1,e,s,a,0,0);
            if ("monthly" == i) {
                var d = new Date(r.getFullYear(),r.getMonth(),e,s,a,0,0);
                r > d && (d = new Date(r.getFullYear(),r.getMonth() + 1,e,s,a,0,0))
            }
            "weekly" == i && (d = new Date(r.getFullYear(),r.getMonth(),r.getDate(),s,a,0,0)).setDate(r.getDate() + (o + 7 - r.getDay()) % 7);
            if ("daily" == i) {
                d = new Date(r.getFullYear(),r.getMonth(),r.getDate(),s,a,0,0);
                r > d && (d = new Date(r.getFullYear(),r.getMonth(),r.getDate() + 1,s,a,0,0))
            }
            if (r > d)
                window.tobiz.editor,
                $(this).children(".days").text("00"),
                $(this).children(".hrs").text("00"),
                $(this).children(".min").text("00"),
                $(this).children(".sec").text("00");
            else {
                var l = parseInt((d.getTime() - r.getTime()) / 1e3)
                  , c = Math.floor(l / 86400)
                  , h = Math.floor((l - 24 * c * 3600) / 3600)
                  , p = Math.floor((l - 24 * c * 3600 - 3600 * h) / 60)
                  , f = Math.floor((l - 24 * c * 3600 - 3600 * h - 60 * p) / 1);
                c < 10 && (c = "0" + c),
                h < 10 && (h = "0" + h),
                p < 10 && (p = "0" + p),
                f < 10 && (f = "0" + f)
            }
            $(this).children(".days").text(c),
            $(this).children(".hrs").text(h),
            $(this).children(".min").text(p),
            $(this).children(".sec").text(f)
        }
        ))
    }
    ), 1e3),
    setInterval((function() {
        $(".objtimer_new").size() && $(".objtimer_new").each((function() {
            var i = $(this).data("type")
              , e = $(this).data("dd")
              , t = $(this).data("dm")
              , n = $(this).data("dy")
              , o = ($(this).data("monthly"),
            $(this).data("weekly"))
              , s = $(this).data("hr")
              , a = $(this).data("min")
              , r = new Date;
            if ("date" == i)
                var d = new Date(n,t - 1,e,s,a,0,0);
            if ("monthly" == i) {
                var d = new Date(r.getFullYear(),r.getMonth(),e,s,a,0,0);
                r > d && (d = new Date(r.getFullYear(),r.getMonth() + 1,e,s,a,0,0))
            }
            "weekly" == i && (d = new Date(r.getFullYear(),r.getMonth(),r.getDate(),s,a,0,0)).setDate(r.getDate() + (o + 7 - r.getDay()) % 7);
            if ("daily" == i) {
                d = new Date(r.getFullYear(),r.getMonth(),r.getDate(),s,a,0,0);
                r > d && (d = new Date(r.getFullYear(),r.getMonth(),r.getDate() + 1,s,a,0,0))
            }
            if (r > d)
                window.tobiz.editor ? ($(this).children().children(".days").text("00"),
                $(this).children().children(".hrs").text("00"),
                $(this).children().children(".min").text("00"),
                $(this).children().children(".sec").text("00")) : $(this).closest(".section").addClass("invis");
            else {
                var l = parseInt((d.getTime() - r.getTime()) / 1e3)
                  , c = Math.floor(l / 86400)
                  , h = 14 * c
                  , p = (h = Math.floor(l / 86400),
                Math.floor((l - 24 * c * 3600) / 3600))
                  , f = 17.5 * p
                  , u = Math.floor((l - 24 * c * 3600 - 3600 * p) / 60)
                  , _ = 7 * u
                  , m = Math.floor((l - 24 * c * 3600 - 3600 * p - 60 * u) / 1)
                  , g = 7 * m;
                c < 10 && (c = "0" + c),
                c > 30 && (h = 420),
                p < 10 && (p = "0" + p),
                u < 10 && (u = "0" + u),
                m < 10 && (m = "0" + m)
            }
            $(this).children().children(".days").text(c),
            $(this).children(".day_block").children().children(".outer").css({
                "stroke-dashoffset": 421 - h
            }),
            $(this).children().children(".hrs").text(p),
            $(this).children(".hour_block").children().children(".outer").css({
                "stroke-dashoffset": 421 - f
            }),
            $(this).children().children(".min").text(u),
            $(this).children(".min_block").children().children(".outer").css({
                "stroke-dashoffset": 421 - _
            }),
            $(this).children().children(".sec").text(m),
            $(this).children(".sec_block").children().children(".outer").css({
                "stroke-dashoffset": 421 - g
            })
        }
        ))
    }
    ), 1e3),
    window.map_rendered = 0,
    setInterval((function() {
        "undefined" != typeof ymaps && $("[data-map-obj]").size() && $("[data-map-obj]").each((function(i) {
            var e = JSON.parse(_.unescape($(this).attr("data-map-obj")))
              , t = JSON.parse(_.unescape($(this).attr("data-map-center")))
              , n = parseInt($(this).attr("data-scroll_off"));
            $(".map_inner").length;
            $(this).removeAttr("data-map-obj"),
            $(this).removeAttr("data-map-center"),
            $(this).removeAttr("data-scroll_off");
            var o = $(this).children(".map_inner")[0];
            ymaps.ready((function() {
                var i;
                i = new ymaps.Map(o,t),
                t.controls = ["zoomControl"],
                n && (i.behaviors.disable("scrollZoom"),
                i.behaviors.disable("drag")),
                _.each(e, (function(e, t) {
                    if (_.isArray(e.coordinates)) {
                        var n = new ymaps.Placemark(e.coordinates,{},{
                            preset: "islands#icon",
                            iconColor: e.color
                        });
                        i.geoObjects.add(n)
                    }
                }
                ))
            }
            ))
        }
        ))
    }
    ), 200),
    setInterval((function() {
        if ($(".fixed_top").size()) {
            $(".fixed_top").size();
            var i = 0
              , e = 0;
            $(".fixed_top:visible").each((function() {
                i += $(this).outerHeight(),
                $(this).css({
                    position: "fixed"
                }),
                $(this).css({
                    top: e + "px"
                }),
                e += $(this).outerHeight()
            }
            )),
            $("#wrapper").css({
                paddingTop: i + "px"
            })
        } else
            $("#wrapper").css({
                paddingTop: "0px"
            })
    }
    ), 200),
    $(window).scroll((function() {
        $(".fixed_top").css({
            left: "-" + $(window).scrollLeft() + "px"
        })
    }
    )),
    "?rk_pay=success" == window.location.search && (alert("Оплата успешно завершена!"),
    window.location.search = ""),
    "?rk_pay=fail" == window.location.search && (alert("Оплата не завершена!"),
    window.location.search = ""),
    $(".section302 .left.style2 ul li a, .section302 .left.style4 ul li a").hover((function() {
        $(this).parent().addClass("hover")
    }
    ), (function() {
        $(this).parent().removeClass("hover")
    }
    )),
    $("body").on("click", ".section304 .spoiler_toggle, .section305 .spoiler_toggle", (function() {
        $(this).parent().hasClass("close") && $(this).text("-"),
        $(this).parent().hasClass("open") && $(this).text("+"),
        $(this).parent().toggleClass("open"),
        $(this).parent().toggleClass("close")
    }
    )),
    $("body").on("click", ".section304 .spoiler_title, .section305 .spoiler_title", (function() {
        void 0 === window.tobiz.editor && ($(this).parent().toggleClass("open"),
        $(this).parent().toggleClass("close"))
    }
    )),
    $(".section304 .spoiler").size() && void 0 === window.tobiz.editor && $(".section304 .spoiler").each((function() {
        $(this).removeClass("open"),
        $(this).addClass("close")
    }
    )),
    $(".section305 .spoiler").size() && void 0 === window.tobiz.editor && $(".section305 .spoiler").each((function() {
        $(this).removeClass("open"),
        $(this).addClass("close")
    }
    )),
    $(".extra_info_block .extra_image").size() && void 0 === window.tobiz.editor && $(".extra_info_block .extra_image").click((function(i) {
        var e = "/img/320x320/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", e),
        $(this).parent().parent().children("img").attr("srcset", "")
    }
    )),
    $(".extra_info_block.s300 .extra_image").size() && void 0 === window.tobiz.editor && $(".extra_info_block.s300 .extra_image").click((function(i) {
        var e = "/img/320x464/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", e),
        $(this).parent().parent().children("img").attr("srcset", "")
    }
    )),
    $(".extra_info_block.s150 .extra_image").size() && void 0 === window.tobiz.editor && $(".extra_info_block.s150 .extra_image").click((function(i) {
        var e = "/img/320x220/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", e),
        $(this).parent().parent().children("img").attr("srcset", "")
    }
    )),
    $(".extra_images_big .extra_info_block.s200 .extra_image").size() && void 0 === window.tobiz.editor && $(".extra_images_big .extra_info_block.s200 .extra_image").click((function(i) {
        var e = "/img/600x600/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", e),
        $(this).parent().parent().children("img").attr("srcset", "")
    }
    )),
    $(".extra_images_big .extra_info_block.s300 .extra_image").size() && void 0 === window.tobiz.editor && $(".extra_images_big .extra_info_block.s300 .extra_image").click((function(i) {
        var e = "/img/400x560/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", e),
        $(this).parent().parent().children("img").attr("srcset", "")
    }
    )),
    $(".extra_images_big .extra_info_block.s150 .extra_image").size() && void 0 === window.tobiz.editor && $(".extra_images_big .extra_info_block.s150 .extra_image").click((function(i) {
        var e = "/img/800x600/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", e),
        $(this).parent().parent().children("img").attr("srcset", "")
    }
    )),
    $("body").on("mouseenter mouseleave", ".section302 li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = ($(e).position().top,
            $(e).outerHeight());
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (n = $(e).outerHeight(),
                n - 1) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section302 .menu1", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("click", "li.level1 a", (function(i) {
        $(this).closest(".section311") || $(this).closest(".menu1").hide()
    }
    )),
    $("body").on("mouseenter mouseleave", ".section116 li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = 0
              , a = ($(e).outerHeight(),
            $(this).closest(".section").css("backgroundColor"));
            340,
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (s += $(e).outerHeight(),
                $(window).width() < 810 ? $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: a,
                    width: 340,
                    textAlign: "left",
                    marginTop: n.top
                }) : $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: a,
                    width: 340,
                    textAlign: "left"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section116 .menu1", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("mouseenter mouseleave", ".section2116 li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = $(e).outerHeight()
              , a = n.top + s - 5
              , r = $(this).closest(".section").css("backgroundColor");
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (0 != i && (a += $(e).outerHeight() - 1),
                $(e).show().addClass("visible").css({
                    top: a,
                    left: o,
                    background: r,
                    width: 300,
                    textAlign: "left"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section2116 .menu1, .section2116 .menu2", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("mouseenter mouseleave", ".section107   li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = ($(e).outerHeight(),
            n.top)
              , a = $(this).closest(".section").css("backgroundColor");
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (s += $(e).outerHeight() - 1,
                $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: a,
                    width: 200,
                    textAlign: "left",
                    paddingLeft: "16px"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section120 li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = 0
              , a = ($(e).outerHeight(),
            $(this).closest(".section").css("backgroundColor"));
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (s += $(e).outerHeight() - 1,
                $(window).width() < 810 ? $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: a,
                    width: 250,
                    textAlign: "left",
                    marginTop: n.top
                }) : $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: a,
                    width: 250,
                    textAlign: "left"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section120 .menu1", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("mouseenter mouseleave", ".section107   li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = ($(e).outerHeight(),
            n.top + 5)
              , a = $(this).closest(".section").css("backgroundColor");
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (s += $(e).outerHeight() - 1,
                $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: a,
                    width: 200,
                    textAlign: "left",
                    paddingLeft: "16px"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section107 .menu1", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("mouseenter mouseleave", ".section109   li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = ($(e).outerHeight(),
            n.top + 5)
              , a = $(this).closest(".section").css("backgroundColor");
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (s += $(e).outerHeight() - 1,
                $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: a,
                    width: 200,
                    textAlign: "left",
                    paddingLeft: "5px"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section109 .menu", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("mouseenter mouseleave", ".section105 li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = ($(e).outerHeight(),
            n.top - 2)
              , a = $(this).closest(".section").css("backgroundColor");
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (s += $(e).outerHeight() - 3,
                $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: a,
                    width: 300,
                    textAlign: "left",
                    paddingLeft: "16px"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section105 .menu1", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("mouseenter mouseleave", ".section311   li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = ($(e).outerHeight(),
            n.top + 0);
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (s += $(e).outerHeight() - 1,
                $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: "rgba(0,0,0,0.5)",
                    width: 170,
                    textAlign: "left",
                    paddingLeft: "10px"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section1156   li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position()
              , o = n.left
              , s = ($(e).outerHeight(),
            n.top + 0);
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? (s += $(e).outerHeight() - 1,
                $(e).show().addClass("visible").css({
                    top: s,
                    left: o,
                    background: "rgba(50,50,50,1)",
                    width: 170,
                    textAlign: "left",
                    paddingLeft: "10px"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section1116   li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var t = !1
              , n = $(e).position();
            n.left,
            $(e).outerHeight(),
            n.top;
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? ($(e).outerHeight() - 1,
                $(e).show().addClass("visible").css({
                    background: "rgba(0,0,0,0)",
                    width: 170,
                    textAlign: "left",
                    paddingLeft: "15px"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section1117   li.level0", (function(i) {
        if (window.tobiz.editor)
            return !0;
        var e = this;
        if ("mouseenter" == i.type) {
            $(this).parent().find("li.level1.visible").addClass("visible");
            var t = !1
              , n = $(e).position();
            n.left,
            $(e).outerHeight(),
            n.top;
            $(e).nextAll("li").each((function(i, e) {
                t || ($(e).hasClass("level1") ? ($(e).outerHeight() - 1,
                $(e).show().addClass("visible").css({
                    background: "rgba(0,0,0,0)",
                    width: 170,
                    textAlign: "left",
                    paddingLeft: "20px"
                })) : t = !0)
            }
            ))
        }
    }
    )),
    $("body").on("mouseenter mouseleave", ".section1116 .menu1", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("mouseenter mouseleave", ".section311 .menu1", (function(i) {
        if (window.tobiz.editor)
            return !0;
        "mouseleave" == i.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    }
    )),
    $("body").on("click", ".section126 .img_1, .section126 .img_2 , .section126 .img_3 , .section126 .img_4 ", (function() {
        $(this).parent().parent().find(".image1").addClass("blur"),
        $(this).parent().find(".current").removeClass("current"),
        $(this).addClass("current");
        var i = $(this).children("img").data("image")
          , e = $(this).children("img").data("set")
          , t = $(this).parent().parent().find(".image1").children("img");
        setTimeout((function() {
            t.attr("src", i),
            t.attr("srcset", e)
        }
        ), 200),
        setTimeout((function() {
            $(".blur").removeClass("blur")
        }
        ), 200)
    }
    )),
    $("body").on("click", ".section129 .img_1, .section129 .img_2 , .section129 .img_3 , .section129 .img_4 ", (function() {
        var i = $(this).children("img").data("image");
        $(this).parent().parent().find(".image1").children("img").attr("src", i)
    }
    )),
    $(".section310 .image_box:first-child").addClass("current"),
    $("body").on("click", ".section310 .image_box", (function() {
        var i = $(this).children("img").data("image");
        $(this).parent().parent().find(".image_box").removeClass("current"),
        $(this).addClass("current"),
        $(this).parent().parent().parent().parent().find(".viewport").css({
            backgroundImage: "url(" + i + ")"
        })
    }
    )),
    $("body").on("click", ".section310 .iamges .go_left", (function() {
        silder310($(this).closest(".section"), "right")
    }
    )),
    $("body").on("click", ".section310 .iamges .go_right", (function() {
        silder310($(this).closest(".section"), "left")
    }
    )),
    $("body").on("click", ".section1155 .go_left", (function() {
        silder1155($(this).closest(".section"), "right")
    }
    )),
    $("body").on("click", ".section1155 .go_right", (function() {
        silder1155($(this).closest(".section"), "left")
    }
    )),
    $("body").on("click", ".section1160 .go_left", (function() {
        silder1160($(this).closest(".section"), "right")
    }
    )),
    $("body").on("click", ".section1160 .go_right", (function() {
        silder1160($(this).closest(".section"), "left")
    }
    )),
    $("body").on("click", ".section105 .menu_mobile_btn", (function() {
        var i = $(this).parent().siblings(".logo_img").clone()
          , e = $(this).parent().siblings(".logo_text").clone()
          , t = $(this).siblings(".phone1").clone()
          , n = $(this).parent().siblings(".social_icons").clone();
        "underfined" != i && ($(this).siblings(".menu1").find(".logo_img").remove(),
        $(this).siblings(".menu1").prepend(i)),
        "underfined" != e && ($(this).siblings(".menu1").find(".logo_text").remove(),
        $(this).siblings(".menu1").prepend(e)),
        "underfined" == t || t.hasClass("hidden") || ($(this).siblings(".menu1").find(".phone1").remove(),
        $(this).siblings(".menu1").append(t)),
        "underfined" == n || n.hasClass("hidden") || ($(this).siblings(".menu1").find(".social_icons").remove(),
        $(this).siblings(".menu1").append(n))
    }
    )),
    $("body").on("click", ".section107 .menu_mobile_btn", (function() {
        var i = $(this).parent().siblings(".logo_img").clone()
          , e = $(this).parent().siblings(".logo_text").clone()
          , t = $(this).siblings(".social_icons").clone();
        "underfined" != i && ($(this).siblings(".menu1").find(".logo_img").remove(),
        $(this).siblings(".menu1").prepend(i)),
        "underfined" != e && ($(this).siblings(".menu1").find(".logo_text").remove(),
        $(this).siblings(".menu1").prepend(e)),
        "underfined" == t || t.hasClass("hidden") || ($(this).siblings(".menu1").find(".social_icons").remove(),
        $(this).siblings(".menu1").append(t))
    }
    )),
    $("body").on("click", ".section116 .menu-toogler", (function() {
        $(this).parent().children(".menu1").toggleClass("active"),
        $("body").toggleClass("modal"),
        $(this).toggleClass("active")
    }
    )),
    $("body").on("click", ".section1156 .menu-toogler", (function() {
        $(this).parent().children(".menu1").toggleClass("active"),
        $(this).toggleClass("active"),
        $("body").toggleClass("modal")
    }
    )),
    $("body").on("click", ".section120 .menu-toogler", (function() {
        $(this).parent().children(".menu1").toggle(),
        $(this).parent().children(".menu1").toggleClass("active"),
        $(this).closest(".section").toggleClass("menu_open"),
        $("body").toggleClass("modal"),
        $(this).toggleClass("active")
    }
    )),
    $("body").on("click", ".section2116 .menu-toogler", (function() {
        var i = $(this).siblings(".logo").clone();
        "underfined" != i && ($(this).siblings(".menu1").find(".logo").remove(),
        $(this).siblings(".menu1").prepend(i));
        var e = $(this).siblings(".menu2").find("li");
        $(this).siblings(".menu1").children("ul").append(e);
        $(this).parent().children(".menu_block").toggleClass("active"),
        $(this).closest(".section").toggleClass("menu_open"),
        $(this).toggleClass("active"),
        $(this).siblings(".menu_block").toggle(),
        $("body").toggleClass("modal")
    }
    )),
    $("body").on("click", ".section2120 .menu-toogler", (function() {
        $(this).parent().siblings(".menu_content").toggle(),
        $(this).toggleClass("active"),
        $(this).closest(".section").toggleClass("menu_open"),
        $(this).closest(".section").toggleClass("menu_open_new"),
        $("body").toggleClass("modal")
    }
    )),
    $("body").on("click", ".section2120 .menu-toogler_fixed", (function() {
        $(this).siblings(".menu_content").toggle(),
        $(this).siblings(".head").toggleClass("active"),
        $(this).toggleClass("active"),
        $(this).closest(".section").toggleClass("menu_open_new"),
        $("body").toggleClass("modal")
    }
    )),
    $("body").on("click", ".section311 .menu1 a", (function(i) {
        i.stopPropagation(),
        $(window).width() <= 970 && $(this).closest(".menu-and-phone-and-btn").removeClass("active")
    }
    )),
    $("body").on("click", ".section311 .menu-and-phone-and-btn .clear", (function(i) {
        $(window).width() <= 970 && (i.preventDefault(),
        $("body").toggleClass("modal"),
        $(this).toggleClass("active"),
        $(this).parent().toggleClass("active"),
        $(this).siblings(".menu1").toggleClass("active"))
    }
    )),
    void 0 === window.tobiz.editor) {
        function clearFilters(i) {
            var e = $(i).closest(".section")
              , t = e.find(".arr1")
              , n = e.find(".items_filter .filter_wrap");
            console.log("filterClear"),
            t.show(),
            e.find(".filters_nothing_to_show").remove(),
            n.each((function(i, e) {
                var t = $(e).data("filterType");
                $(e).data("filterName");
                if ("tag" == t && $(e).find(".filter_option_toogl").removeClass("active"),
                "multiselect" == t) {
                    $(e).find(".filter_options input").each((function(i, e) {
                        $(this).prop("checked", !1)
                    }
                    ))
                }
                "range" == t && $(e).find(".filter_options input").each((function(i, e) {
                    $(e).data("ionRangeSlider").update({
                        from: $(e).data("min"),
                        to: $(e).data("max")
                    })
                }
                ))
            }
            ))
        }
        function filterApply(i) {
            var e = $(i).closest(".section")
              , t = e.find(".arr1")
              , n = e.find(".items_filter .filter_wrap");
            t.show(),
            e.find(".filters_nothing_to_show").remove(),
            n.each((function(i, e) {
                var n = $(e).data("filterType")
                  , o = $(e).data("filterName")
                  , s = $(e).data("filterExtra");
                if ("tag" == n && $(e).find(".filter_option_toogl").hasClass("active") && t.each((function(i, e) {
                    1 != $(e).data(o) && $(e).hide()
                }
                )),
                "multiselect" == n) {
                    var a = [];
                    $(e).find(".filter_options input").each((function(i, e) {
                        $(this).prop("checked") && a.push($(this).val())
                    }
                    )),
                    a.length > 0 && (1 == s ? t.each((function(i, e) {
                        var t = !1
                          , n = $(e).data("extraFilters");
                        $.each(n, (function(i, e) {
                            e.title == o && a.indexOf(e.value) >= 0 && (t = !0)
                        }
                        )),
                        0 == t && $(e).hide()
                    }
                    )) : t.each((function(i, e) {
                        -1 == a.indexOf($(e).data(o)) && $(e).hide()
                    }
                    )))
                }
                if ("range" == n) {
                    a = [];
                    $(e).find(".filter_options input").each((function(i, e) {
                        t.each((function(i, t) {
                            var n = 1 * $(t).data(o);
                            n && (n < $(e).data("from") || n > $(e).data("to")) && $(t).hide()
                        }
                        ))
                    }
                    ))
                }
            }
            ));
            var o = 0;
            t.each((function(i, e) {
                $(e).is(":visible") && o++
            }
            )),
            o || (e.find(".items_filter").after('<div class="filters_nothing_to_show">Ничего не найдено. <span class="dorp_filters">Сбросить фильтры</span></div>'),
            console.log("Ничего не найдено"))
        }
        $("body").on("click", ".dorp_filters", (function() {
            clearFilters(this)
        }
        )),
        $("body").on("change", ".filter_options input", (function() {
            filterApply(this)
        }
        )),
        $("body").on("click", '[data-filter-type="tag"] .filter_option_toogl', (function() {
            $(".filter_options").hide(),
            $(this).toggleClass("active"),
            filterApply(this)
        }
        )),
        $("body").on("click", ".filter_option_toogl.has_options", (function() {
            var i = $(this).parent().children(".filter_options");
            $(".filter_options").not(i).hide(),
            $(this).parent().children(".filter_options").toggle();
            var e = $(this).parent().children(".filter_options").outerWidth() + $(this).parent().children(".filter_options").offset().left
              , t = $("body").outerWidth() - e;
            t < 0 && (t -= 20,
            $(this).parent().children(".filter_options").css({
                left: t + "px"
            }))
        }
        )),
        $("body").on("click", ".filter_wrap", (function(i) {
            i.stopPropagation()
        }
        )),
        $(document).click((function() {
            $(".filter_options").hide()
        }
        ))
    }
    if ($(".section.animate").size() && void 0 === window.tobiz.editor && $(window).width() > 1e3 && parseInt(window.tobiz.t) >= 3 && $(".section.animate").each((function() {
        if ($(this).hasClass("section118") || $(this).hasClass("section128") || $(this).hasClass("section149") || $(this).hasClass("section124")) {
            var i = ".col_3"
              , e = $(this).find(i)
              , t = ".arr1"
              , n = $(this).find(t);
            e.css({
                opacity: 0,
                position: "relative"
            });
            var o = $(this);
            (s = o.find(".title, .sub_title")).css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-200px"
                }),
                $(t).find(i).eq(2).css({
                    left: "200px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section125") || $(this).hasClass("section250")) {
            i = ".col_2",
            e = $(this).find(i),
            t = ".arr1",
            n = $(this).find(t);
            var s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-200px"
                }),
                $(t).find(i).eq(1).css({
                    left: "200px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1200),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1200))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section1144")) {
            var a = $(".image_box");
            e = $(this).find(a),
            o = $(this);
            $.each(e, (function(i, e) {
                $(e).css({
                    "margin-top": 200 * i + "px",
                    "margin-left": 20 * i + "px",
                    opacity: "0"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    $(window).scrollTop() + $(window).height() / 2 > $(e).parent(".images").offset().top && $(e).animate({
                        "margin-top": "0px",
                        "margin-left": 0 * i + "px",
                        opacity: "1"
                    }, 100 * i + 1e3)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section1149")) {
            a = $(".arr1 "),
            e = $(this).find(a),
            o = $(this);
            $.each(e, (function(i, e) {
                $(e).css({
                    "margin-top": 200 * i + "px",
                    "margin-left": 20 * i + "px",
                    opacity: "0"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    $(window).scrollTop() + $(window).height() / 2 > $(e).parent(".items").offset().top && $(e).animate({
                        "margin-top": "0px",
                        "margin-left": 0 * i + "px",
                        opacity: "1"
                    }, 200 * i + 1e3)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section1419")) {
            a = $(".arr1"),
            e = $(this).find(a),
            o = $(this);
            $.each(e, (function(i, e) {
                $(e).css({
                    "margin-top": 200 * i + "px",
                    "margin-left": 20 * i + "px",
                    opacity: "0"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    $(window).scrollTop() + $(window).height() / 2 > $(e).parent(".section_inner").offset().top && $(e).animate({
                        "margin-top": "0px",
                        "margin-left": 0 * i + "px",
                        opacity: "1"
                    }, 200 * i + 1e3)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section1250")) {
            a = $(".section1250 .btn1");
            var r = $(".section1250 .btn2");
            a.css({
                "margin-top": "100px",
                "margin-right": "200px",
                opacity: "0"
            }),
            r.css({
                "margin-top": "100px",
                "margin-left": "200px",
                opacity: "0"
            }),
            $(window).scroll((function() {
                $(window).scrollTop() + $(window).height() / 2 + 100 > a.parent(".arr1").offset().top && a.animate({
                    "margin-top": "0px",
                    "margin-right": "20px",
                    opacity: "1"
                }, 1200),
                $(window).scrollTop() + $(window).height() / 2 + 100 > r.parent(".arr1").offset().top && r.animate({
                    "margin-top": "0px",
                    "margin-left": "0px",
                    opacity: "1"
                }, 1200)
            }
            ))
        }
        if ($(this).hasClass("section1145")) {
            a = $(".item"),
            e = $(this).find(a),
            o = $(this);
            $.each(e, (function(i, e) {
                $(e).css({
                    "margin-top": 200 * i / 2 + "px",
                    opacity: "0"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    $(window).scrollTop() + $(window).height() / 2 > $(e).parent(".images").offset().top && $(e).animate({
                        "margin-top": "0px",
                        opacity: "1"
                    }, 100 * i + 1500)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section1146")) {
            a = $(".item"),
            e = $(this).find(a),
            o = $(this);
            $.each(e, (function(i, e) {
                $(e).css({
                    "margin-top": 200 * i / 2 + "px",
                    opacity: "0"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    $(window).scrollTop() + $(window).height() / 2 > $(e).parent(".images").offset().top && $(e).animate({
                        "margin-top": "0px",
                        opacity: "1"
                    }, 100 * i + 1500)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section2158")) {
            a = $(".anim"),
            e = $(this).find(a),
            o = $(this);
            $.each(e, (function(i, e) {
                $(e).css({
                    "margin-top": 200 * i / 2 + "px",
                    opacity: "0"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    $(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top && $(e).animate({
                        "margin-top": "0px",
                        opacity: "1"
                    }, 100 * i + 1500)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section1130")) {
            a = $(".arr1"),
            e = $(this).find(a),
            o = $(this);
            $.each(e, (function(i, e) {
                $(e).css({
                    "margin-top": 200 * i / 2 + "px",
                    opacity: "0"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    $(window).scrollTop() + $(window).height() / 2 > $(e).parent(".catalog_items ").offset().top && $(e).animate({
                        "margin-top": "0px",
                        opacity: "1"
                    }, 500 * i + 500)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section307")) {
            i = ".col",
            e = $(this).find(i),
            t = ".section_inner",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-600px"
                }),
                $(t).find(i).eq(1).css({
                    left: "-400px"
                }),
                $(t).find(i).eq(2).css({
                    left: "-200px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section314")) {
            i = ".col_3",
            e = $(this).find(i),
            t = ".section_inner",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-600px"
                }),
                $(t).find(i).eq(1).css({
                    left: "-400px"
                }),
                $(t).find(i).eq(2).css({
                    left: "-200px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section309")) {
            i = ".col",
            e = $(this).find(i),
            t = ".section_inner",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-1000px"
                }),
                $(t).find(i).eq(1).css({
                    left: "-800px"
                }),
                $(t).find(i).eq(2).css({
                    left: "-600px"
                }),
                $(t).find(i).eq(3).css({
                    left: "-400px"
                }),
                $(t).find(i).eq(4).css({
                    left: "-200px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section153") || $(this).hasClass("section154") || $(this).hasClass("section157") || $(this).hasClass("section159") || $(this).hasClass("section258") || $(this).hasClass("section1154") || $(this).hasClass("section311") || $(this).hasClass("section155") || $(this).hasClass("section1258")) {
            i = ".section_inner",
            e = $(this).find(i),
            o = $(this);
            var d = e.find(".title")
              , l = e.find(".sub_title")
              , c = e.find(".arr_block")
              , h = e.find(".arr1")
              , p = e.find(".btn1")
              , f = e.find(".btn2")
              , u = e.find(".btn_descr")
              , _ = e.find(".form_wrapper")
              , m = e.find(".timer")
              , g = e.find(".header")
              , w = e.find(".play");
            d.css({
                left: "-1000px",
                opacity: 0,
                position: "relative"
            }),
            l.css({
                right: "-1000px",
                opacity: 0,
                position: "relative"
            }),
            p.css({
                bottom: "-200px",
                opacity: 0,
                position: "relative"
            }),
            f.css({
                bottom: "-200px",
                opacity: 0,
                position: "relative"
            }),
            u.css({
                bottom: "-200px",
                opacity: 0,
                position: "relative"
            }),
            _.css({
                bottom: "-300px",
                opacity: 0,
                position: "relative"
            }),
            m.css({
                bottom: "-300px",
                opacity: 0,
                position: "relative"
            }),
            g.css({
                top: "-300px",
                opacity: 0,
                position: "relative"
            }),
            c.css({
                opacity: 0,
                position: "relative"
            }),
            h.css({
                bottom: "-300px",
                opacity: 0,
                position: "relative"
            }),
            w.css({
                bottom: "-500px",
                opacity: 0
            }),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 4 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && (d.animate({
                        left: "0",
                        opacity: 1
                    }, 1e3),
                    l.animate({
                        right: "0",
                        opacity: 1,
                        position: "static"
                    }, 1500),
                    p.animate({
                        bottom: "0",
                        opacity: 1
                    }, 1200),
                    f.animate({
                        bottom: "0",
                        opacity: 1
                    }, 1200),
                    u.animate({
                        bottom: "0",
                        opacity: 1,
                        position: "static"
                    }, 1200),
                    m.animate({
                        bottom: "0",
                        opacity: 1,
                        position: "static"
                    }, 1200),
                    _.animate({
                        bottom: "0",
                        opacity: 1,
                        position: "static"
                    }, 1500),
                    c.animate({
                        opacity: 1,
                        position: "relative"
                    }, 1500),
                    g.animate({
                        top: "0",
                        opacity: 1,
                        position: "relative"
                    }, 1e3),
                    h.css({
                        bottom: "0",
                        opacity: 1,
                        position: "relative"
                    }, 1e3),
                    w.animate({
                        bottom: "165px",
                        opacity: 1
                    }, 1e3))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section308")) {
            i = ".col",
            e = $(this).find(i),
            t = ".section_inner",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-800px"
                }),
                $(t).find(i).eq(1).css({
                    left: "-600px"
                }),
                $(t).find(i).eq(2).css({
                    left: "-400px"
                }),
                $(t).find(i).eq(3).css({
                    left: "-200px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section226")) {
            i = ".arr1",
            e = $(this).find(i),
            t = ".section_inner",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(e, (function(i, e) {
                $(e).css({
                    left: "-" + 400 * (i + 1) + "px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section132")) {
            i = ".text",
            e = $(this).find(i),
            t = ".section_inner",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            e.eq(0).css({
                left: "-400px"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section164")) {
            i = ".pcenter";
            e = $(this).find(i),
            t = ".section_inner",
            n = $(this).find(t),
            o = $(this),
            s = o.find(".title, .sub_title"),
            e.css({
                opacity: 0,
                position: "relative"
            }),
            e.eq(0).css({
                left: "-400px"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section310") || $(this).hasClass("section148") || $(this).hasClass("section147") || $(this).hasClass("section143") || $(this).hasClass("section306")) {
            i = ".viewport, .iamges, .image_box1, .image_box2, .image_box3, .image_box4, .image_box5, .image_box, .form_wrapper",
            e = $(this).find(i),
            t = ".section_inner",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0
            }),
            s.css({
                opacity: 0
            }),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".section_inner").offset().top + $(e).closest(".section_inner").height()) && ($(e).animate({
                        opacity: 1
                    }, 1500),
                    s.animate({
                        opacity: 1
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section126")) {
            i = ".image1, .video1, .right";
            var b = ".extra_images"
              , v = (e = $(this).find(i),
            $(this).find(b));
            t = ".arr1",
            n = $(this).find(t);
            e.css({
                opacity: 0,
                position: "relative"
            }),
            v.css({
                opacity: 0
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-200px"
                }),
                $(t).find(i).eq(1).css({
                    left: "200px"
                })
            }
            ));
            o = $(this);
            (s = o.find(".title, .sub_title")).css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                )),
                $.each(v, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && $(e).animate({
                        opacity: 1
                    }, 2e3)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section129")) {
            i = ".image1, .video1, .right",
            b = ".extra_images",
            e = $(this).find(i),
            v = $(this).find(b),
            t = ".arr1",
            n = $(this).find(t);
            e.css({
                opacity: 0,
                position: "relative"
            }),
            v.css({
                opacity: 0
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-200px"
                }),
                $(t).find(i).eq(1).css({
                    left: "200px"
                })
            }
            ));
            o = $(this);
            (s = o.find(".title, .sub_title")).css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                )),
                $.each(v, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && $(e).animate({
                        opacity: 1
                    }, 2e3)
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section301")) {
            i = ".arr1",
            t = ".section_inner",
            n = $(this).find(t),
            o = $(this),
            e = $(this).find(i),
            s = o.find(".title, .sub_title");
            e.css({
                opacity: 0,
                left: "-400px",
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section117")) {
            i = ".col_2",
            e = $(this).find(i),
            t = ".arr1",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                (e + 1) % 2 ? ($(t).find(i).eq(0).css({
                    left: "-200px"
                }),
                $(t).find(i).eq(1).css({
                    left: "200px"
                })) : ($(t).find(i).eq(0).css({
                    left: "200px"
                }),
                $(t).find(i).eq(1).css({
                    left: "-200px"
                }))
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0
                    }, 1200),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1200))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section152") || $(this).hasClass("section201")) {
            i = ".image_box1, .image_box2, .image_box3, .image_box4, .image_box5, .col_5 ",
            e = $(this).find(i),
            t = ".arr1",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-200px"
                }),
                $(t).find(i).eq(1).css({
                    left: "-100px"
                }),
                $(t).find(i).eq(3).css({
                    left: "100px"
                }),
                $(t).find(i).eq(4).css({
                    left: "200px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0,
                        top: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
        if ($(this).hasClass("section121") || $(this).hasClass("section151") || $(this).hasClass("section200")) {
            i = ".col_4",
            e = $(this).find(i),
            t = ".arr1",
            n = $(this).find(t),
            s = (o = $(this)).find(".title, .sub_title");
            e.css({
                opacity: 0,
                position: "relative"
            }),
            s.css({
                opacity: 0,
                top: "0",
                position: "relative"
            }),
            $.each(n, (function(e, t) {
                $(t).find(i).eq(0).css({
                    left: "-200px"
                }),
                $(t).find(i).eq(1).css({
                    left: "-100px"
                }),
                $(t).find(i).eq(2).css({
                    left: "100px"
                }),
                $(t).find(i).eq(3).css({
                    left: "200px"
                })
            }
            )),
            $(window).scroll((function() {
                $.each(e, (function(i, e) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(e).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(e).closest(".arr1").offset().top + $(e).closest(".arr1").height()) && ($(e).animate({
                        opacity: 1,
                        left: 0,
                        top: 0
                    }, 1500),
                    s.animate({
                        opacity: 1,
                        top: 0
                    }, 1500))
                }
                ))
            }
            ))
        }
    }
    )),
    $(".section.widget").size() && void 0 === window.tobiz.editor && 1 == parseInt(window.tobiz.w)) {
        if (!$('.section[data-mode="popup"]').size()) {
            const c = [1e3, 1004, 1005, 1006, 1007];
            c.forEach((i=>{
                if ($(`.section${i}`).length) {
                    let e = !0;
                    $("html").mouseleave((t=>{
                        e && (e = !1,
                        $(`.section${i}`).find(".extra_info_block_wrapper").show())
                    }
                    ))
                }
            }
            )),
            $(".section1003").size() && $(".section1003").show()
        }
        if ($('.section[data-mode="popup"]').each((function() {
            const i = new Date
              , e = parseInt($(this).data("lag"))
              , t = parseInt($(this).data("start"))
              , n = parseInt($(this).data("stop"));
            if (!(t < 0 || t > 23 || n < 0 || n > 23 || t > n) && i.getHours() >= t && i.getHours() <= n) {
                const i = $(this).find(".extra_info_block_wrapper");
                setTimeout((()=>{
                    i.show()
                }
                ), 1e3 * e)
            }
        }
        )),
        $(".section1001").size()) {
            var today = new Date;
            $(".section1001").each((function() {
                var i = parseInt($(this).data("lag"))
                  , e = parseInt($(this).data("start"))
                  , t = parseInt($(this).data("stop"));
                if (e < 0 && e > 23)
                    return !1;
                if (t < 0 && t > 23)
                    return !1;
                if (e > t)
                    return !1;
                if (today.getHours() >= e && today.getHours() <= t) {
                    var n = $(this).find(".extra_info_block_wrapper");
                    setTimeout((function() {
                        n.show()
                    }
                    ), 1e3 * i)
                }
            }
            ))
        }
        const l = [{
            id: 1008,
            className: "this_show"
        }, {
            id: 1010,
            className: "this_shows"
        }];
        l.forEach((i=>{
            if ($(`.section${i.id}`).length) {
                const e = new Date;
                $(`.section${i.id}`).each((function() {
                    const t = parseInt($(this).data("lag"))
                      , n = parseInt($(this).data("start"))
                      , o = parseInt($(this).data("stop"));
                    if (n < 0 || n > 23 || o < 0 || o > 23 || n > o)
                        return !1;
                    if (e.getHours() >= n && e.getHours() <= o) {
                        const e = $(this).find(".extra_info_block" + (i.id ? "" : "_wrapper"));
                        setTimeout((()=>{
                            e.show(),
                            e.addClass(i.className)
                        }
                        ), 1e3 * t)
                    }
                }
                ))
            }
        }
        ))
    }
    window.tobiz.slider1130array = new Object,
    window.tobiz.slider1130Init = function(i) {
        var e = "undefined";
        window.tobiz.slider1130Init[i],
        e = window.tobiz.slider1130array[i],
        $("#b_" + i).size() && window.tobiz.editor && $("#b_" + i).find(".arr1").eq(e).find(".extra_info_block_wrapper").show()
    }
    ,
    $(".section1130").each((function() {
        window.tobiz.slider1130Init($(this).data("id"))
    }
    )),
    window.tobiz.slider1011array = new Object,
    window.tobiz.slider1011Init = function(i) {
        var e = 0
          , t = ".quiz_wrapper .field"
          , n = ".next"
          , o = ".prev"
          , s = !1;
        if (void 0 !== window.tobiz.slider1011array[i] && (void 0 !== window.tobiz.slider1011array[i].current_id && (e = window.tobiz.slider1011array[i].current_id),
        delete window.tobiz.slider1011array[i]),
        $("#b_" + i).size()) {
            var a = $("#b_" + i);
            a.find(".field").each((function(i, e) {
                $(e).attr("data-index", i)
            }
            )),
            window.tobiz.slider1011array[i] = {
                len: a.find(t).size(),
                current_id: 0,
                lag: 5e3,
                speed: 300,
                setStatusBar: function() {
                    if (a.find(".progress").length > 0) {
                        var i = Math.floor(100 * (this.current_id + 1) / this.len);
                        a.find(".progress").css({
                            width: i + "%"
                        }),
                        !a.find(".discount_text").length > 0 ? a.find(".progress").after('<div class="discount_text">Готово: <span>' + i + "%</span> </div>") : a.find(".discount_text span").html(i + "%")
                    }
                },
                setSteps: function() {
                    if (a.find(".steps").length > 0) {
                        var i = this.len
                          , e = this.current_id + 1;
                        a.find(".steps .this_step").text(e),
                        a.find(".steps .renderQuiz").text(i)
                    }
                },
                setDiscount: function() {
                    if (a.find(".discount").length > 0) {
                        var i;
                        i = 1 == this.len ? 1 : this.current_id / (this.len - 1);
                        var e, t = 1 * a.find(".discount").eq(0).data("min"), n = 1 * a.find(".discount").eq(0).data("max");
                        e = Math.floor(t + (n - t) * i),
                        a.find(".discount span").text(e + "%")
                    }
                },
                goToSlide: function(i) {
                    this.current_id = i,
                    a.find(t).hide(),
                    a.find(t).removeClass("active"),
                    a.find(t).eq(i).addClass("active"),
                    a.find(t).eq(i).show(),
                    a.find(".point").removeClass("current"),
                    a.find(".point").eq(i).addClass("current"),
                    this.setStatusBar(),
                    this.setDiscount(),
                    this.setSteps(),
                    a.find(".steps .this_step").text(this.current_id + 1),
                    1 * this.current_id == 0 || s ? (a.find(".steps").hide(),
                    a.find(".prev").addClass("hidden")) : (a.find(".prev").removeClass("hidden"),
                    a.find(".steps").show())
                },
                eventListener: function() {
                    var e = this;
                    a.unbind("swiperight"),
                    a.unbind("swipeleft"),
                    $("body").on("click", "#quiz_editor .field_editor_title", (function() {
                        var i = $(this).parent().data("index");
                        e.goToSlide(i)
                    }
                    )),
                    a.find(".point").unbind("click"),
                    a.find(".point").click((function() {
                        $(this).hasClass("current") || e.goToSlide($(this).data("id"))
                    }
                    )),
                    this.current_id <= 0 && a.find(".prev").addClass("hidden"),
                    a.find('.field_input_radio input[type="radio"], .field_input_radio label').unbind("click"),
                    a.find('.field_input_radio input[type="radio"], .field_input_radio label').click((function() {
                        setTimeout((function() {
                            $("#b_" + i).find(".next").click()
                        }
                        ), 1e3)
                    }
                    )),
                    a.find(o + ", " + n).unbind("click"),
                    a.find(o + ", " + n).click((function() {
                        var i, n = e.current_id;
                        if ($(this).hasClass(o.replace(".", ""))) {
                            if ($(this).hasClass("hidden"))
                                return;
                            --n < 0 && (n = 0),
                            $(this).hasClass("prev") && (0 == n || $(this).siblings(".next").addClass("show")),
                            n > 0 && a.find(".prev").removeClass("hidden"),
                            a.find(".quiz_wrapper").show(),
                            a.find(".form_wrapper").hide(),
                            a.find(".next").removeClass("send")
                        } else {
                            if (!$(this).hasClass("show") && !$("body").hasClass("editor_true"))
                                return !1;
                            a.find(".next").removeClass("show"),
                            n++,
                            i = $(".field.active").find("input:checked").val(),
                            a.find(t).each((function(t, o) {
                                $(o).data("sub_question_hook") == i && "active" == $(o).data("sub_question") && e.current_id + 1 == $(o).data("sub_question_num") && (n = $(o).data("index"),
                                s = !0)
                            }
                            )),
                            a.find(".prev").addClass("hidden"),
                            n > e.len - 1 && $(this).addClass("send"),
                            n > e.len - 1 && (n = e.len - 1,
                            $("body").hasClass("editor_true") ? (a.find(".quiz_wrapper").hide(),
                            a.find(".form_wrapper").show()) : (a.find(".slides").hide(),
                            a.find(".form_wrapper").show()))
                        }
                        a.find(".simple__loader").fadeIn(300),
                        setTimeout((function() {
                            e.goToSlide(n),
                            a.find(".simple__loader").fadeOut(100)
                        }
                        ), 1e3)
                    }
                    )),
                    $(window).width() <= 800 && (a.on("swiperight", (function() {
                        a.find(n).click()
                    }
                    )),
                    a.on("swipeleft", (function() {
                        a.find(o).click()
                    }
                    )))
                },
                init: function(i) {
                    a.find(".point").eq(0).addClass("current"),
                    a.find(t).hide(),
                    a.find(t).eq(0).show(),
                    this.setStatusBar(),
                    this.setSteps(),
                    this.eventListener(),
                    this.goToSlide(i)
                }
            },
            window.tobiz.slider1011array[i].init(e)
        }
    }
    ,
    $(".section1011").each((function() {
        window.tobiz.slider1011Init($(this).data("id"))
    }
    )),
    window.tobiz.slider126array = new Object,
    window.tobiz.slider126Init = function(i) {
        var e = 0
          , t = 1;
        if (!$("#b_" + i).hasClass("slider"))
            return !0;
        if ($("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider126array[i] && (void 0 !== window.tobiz.slider126array[i].current_id && (e = window.tobiz.slider126array[i].current_id),
        t = window.tobiz.slider126array[i].auto_slide,
        void 0 !== window.tobiz.slider126array[i].auto_slide_interval && clearInterval(window.tobiz.slider126array[i].auto_slide_interval),
        delete window.tobiz.slider126array[i]),
        $("#b_" + i).size()) {
            var n = $("#b_" + i);
            window.tobiz.slider126array[i] = {
                len: n.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * n.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6e3,
                speed: 300,
                setScroller: function() {
                    n.find(".scroller").html("");
                    n.find(".slide").size();
                    $.each(n.find(".slide"), (function(i, e) {
                        n.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e, t) {
                    var o = this.speed;
                    1 == e && (o = 0),
                    "right" != t && (t = "left"),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    this.current_id = i,
                    "left" == t ? (n.find(".point").hide(),
                    n.find(".slider_wrapper").animate({
                        left: "-100%"
                    }, o, (function() {
                        n.find(".slider_wrapper").css({
                            left: "100%"
                        }),
                        n.find(".slide").hide(),
                        n.find(".slide").eq(i).show(),
                        n.find(".point").removeClass("current"),
                        n.find(".point").eq(i).addClass("current"),
                        n.find(".slider_wrapper").animate({
                            left: "0%"
                        }, o, (function() {
                            n.find(".point").show()
                        }
                        ))
                    }
                    ))) : (n.find(".point").hide(),
                    n.find(".slider_wrapper").animate({
                        left: "+100%"
                    }, o, (function() {
                        n.find(".slider_wrapper").css({
                            left: "-100%"
                        }),
                        n.find(".slide").hide(),
                        n.find(".slide").eq(i).show(),
                        n.find(".point").removeClass("current"),
                        n.find(".point").eq(i).addClass("current"),
                        n.find(".slider_wrapper").animate({
                            left: "0%"
                        }, o, (function() {
                            n.find(".point").show()
                        }
                        ))
                    }
                    )))
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    n.unbind("swiperight"),
                    n.unbind("swipeleft"),
                    n.find(".point").unbind("click"),
                    n.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    n.find(".go_left, .go_right").unbind("click"),
                    n.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0);
                        var t = "left";
                        $(this).hasClass("go_right") && (t = "right"),
                        i.goToSlide(e, i.speed, t),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800 && (n.on("swiperight", (function() {
                        n.find(".go_right").click()
                    }
                    )),
                    n.on("swipeleft", (function() {
                        n.find(".go_left").click()
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    n.find(".point").eq(0).addClass("current"),
                    n.find(".slide").hide(),
                    n.find(".slide").eq(0).show(),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider126array[i].init(e, t)
        }
    }
    ,
    $(".section126").each((function() {
        window.tobiz.slider126Init($(this).data("id"))
    }
    )),
    window.tobiz.slider129array = new Object,
    window.tobiz.slider129Init = function(i) {
        var e = 0
          , t = 1;
        if (!$("#b_" + i).hasClass("slider"))
            return !0;
        if ($("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider129array[i] && (void 0 !== window.tobiz.slider129array[i].current_id && (e = window.tobiz.slider129array[i].current_id),
        t = window.tobiz.slider129array[i].auto_slide,
        void 0 !== window.tobiz.slider129array[i].auto_slide_interval && clearInterval(window.tobiz.slider129array[i].auto_slide_interval),
        delete window.tobiz.slider129array[i]),
        $("#b_" + i).size()) {
            var n = $("#b_" + i);
            window.tobiz.slider129array[i] = {
                len: n.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * n.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5e3,
                speed: 500,
                setScroller: function() {
                    n.find(".scroller").html("");
                    n.find(".slide").size();
                    $.each(n.find(".slide"), (function(i, e) {
                        n.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e, t) {
                    var o = this.speed;
                    1 == e && (o = 0),
                    "right" != t && (t = "left"),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    this.current_id = i,
                    "left" == t ? (n.find(".point").hide(),
                    n.find(".slider_wrapper").animate({
                        left: "-150%"
                    }, o, (function() {
                        n.find(".slider_wrapper").css({
                            left: "150%"
                        }),
                        n.find(".slide").hide(),
                        n.find(".slide").eq(i).show(),
                        n.find(".point").removeClass("current"),
                        n.find(".point").eq(i).addClass("current"),
                        n.find(".slider_wrapper").animate({
                            left: "0%"
                        }, o, (function() {
                            n.find(".point").show()
                        }
                        ))
                    }
                    ))) : (n.find(".point").hide(),
                    n.find(".slider_wrapper").animate({
                        left: "150%"
                    }, o, (function() {
                        n.find(".slider_wrapper").css({
                            left: "-150%"
                        }),
                        n.find(".slide").hide(),
                        n.find(".slide").eq(i).show(),
                        n.find(".point").removeClass("current"),
                        n.find(".point").eq(i).addClass("current"),
                        n.find(".slider_wrapper").animate({
                            left: "0%"
                        }, o, (function() {
                            n.find(".point").show()
                        }
                        ))
                    }
                    )))
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    n.unbind("swiperight"),
                    n.unbind("swipeleft"),
                    n.find(".point").unbind("click"),
                    n.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    n.find(".go_left, .go_right").unbind("click"),
                    n.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0);
                        var t = "left";
                        $(this).hasClass("go_right") && (t = "right"),
                        i.goToSlide(e, i.speed, t),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800 && (n.on("swiperight", (function() {
                        n.find(".go_right").click()
                    }
                    )),
                    n.on("swipeleft", (function() {
                        n.find(".go_left").click()
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    n.find(".point").eq(0).addClass("current"),
                    n.find(".slide").hide(),
                    n.find(".slide").eq(0).show(),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider129array[i].init(e, t)
        }
    }
    ,
    $(".section129").each((function() {
        window.tobiz.slider129Init($(this).data("id"))
    }
    )),
    window.tobiz.slider151array = new Object,
    window.tobiz.slider151Init = function(i) {
        var e = 0
          , t = 1;
        if (!$("#b_" + i).hasClass("slider"))
            return !0;
        var n = ".slide"
          , o = ".slider_wrapper";
        if ($(window).width() <= 640 ? ($("#b_" + i).find(n).css({
            display: "block"
        }),
        n = ".col_4",
        o = ".slider_wrapper") : $("#b_" + i).find(".col_4").show(),
        $("#b_" + i).find(n).eq(0).css({
            display: "flex"
        }),
        $("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider151array[i] && (void 0 !== window.tobiz.slider151array[i].current_id && (e = window.tobiz.slider151array[i].current_id),
        t = window.tobiz.slider151array[i].auto_slide,
        delete window.tobiz.slider151array[i]),
        $("#b_" + i).size()) {
            var s = $("#b_" + i);
            window.tobiz.slider151array[i] = {
                len: s.find(n).size(),
                current_id: 0,
                auto_slide: 1 * s.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5e3,
                speed: 750,
                setScroller: function() {
                    s.find(".scroller").html("");
                    s.find(n).size();
                    $.each(s.find(n), (function(i, e) {
                        s.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e, t) {
                    var a = this.speed;
                    1 == e && (a = 0),
                    "right" != t && (t = "left"),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    this.current_id = i,
                    "left" == t ? s.find(o).animate({
                        left: "+100%"
                    }, a, (function() {
                        s.find(o).css({
                            left: "-100%"
                        }),
                        s.find(n).hide(),
                        ".col_4" == n ? s.find(n).eq(i).css({
                            display: "block"
                        }) : s.find(n).eq(i).css({
                            display: "flex"
                        }),
                        s.find(".point").removeClass("current"),
                        s.find(".point").eq(i).addClass("current"),
                        s.find(o).animate({
                            left: "0%"
                        }, a)
                    }
                    )) : s.find(o).animate({
                        left: "-100%"
                    }, a, (function() {
                        s.find(o).css({
                            left: "100%"
                        }),
                        s.find(n).hide(),
                        ".col_4" == n ? s.find(n).eq(i).css({
                            display: "block"
                        }) : s.find(n).eq(i).css({
                            display: "flex"
                        }),
                        s.find(".point").removeClass("current"),
                        s.find(".point").eq(i).addClass("current"),
                        s.find(o).animate({
                            left: "0%"
                        }, a)
                    }
                    ))
                },
                autoSlide: function() {
                    if (1 == this.auto_slide && $(window).width() > 900) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    s.unbind("swiperight"),
                    s.unbind("swipeleft"),
                    s.find(".point").unbind("click"),
                    s.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    s.find(".go_left, .go_right").unbind("click"),
                    s.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0);
                        var t = "left";
                        $(this).hasClass("go_right") && (t = "right"),
                        i.goToSlide(e, i.speed, t),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800 && (s.on("swiperight", (function() {
                        s.find(".go_right").click()
                    }
                    )),
                    s.on("swipeleft", (function() {
                        s.find(".go_left").click()
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    s.find(".point").eq(0).addClass("current"),
                    s.find(n).hide(),
                    s.find(n).eq(0).css({
                        display: "flex"
                    }),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider151array[i].init(e, t)
        }
    }
    ,
    $(".section151").each((function() {
        window.tobiz.slider151Init($(this).data("id"))
    }
    )),
    window.tobiz.slider160array = new Object,
    window.tobiz.slider160Init = function(i) {
        var e = 0
          , t = 1;
        if (!$("#b_" + i).hasClass("slider"))
            return !0;
        var n = ".slide"
          , o = ".slider_wrapper";
        if ($(window).width() <= 640 ? ($("#b_" + i).find(n).show(),
        n = ".col_4",
        o = ".slider_wrapper") : $("#b_" + i).find(".col_4").show(),
        $("#b_" + i).find(n).eq(0).show(),
        $("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider160array[i] && (void 0 !== window.tobiz.slider160array[i].current_id && (e = window.tobiz.slider160array[i].current_id),
        t = window.tobiz.slider160array[i].auto_slide,
        void 0 !== window.tobiz.slider160array[i].auto_slide_interval && clearInterval(window.tobiz.slider160array[i].auto_slide_interval),
        delete window.tobiz.slider160array[i]),
        $("#b_" + i).size()) {
            var s = $("#b_" + i);
            window.tobiz.slider160array[i] = {
                len: s.find(n).size(),
                current_id: 0,
                auto_slide: 1 * s.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5e3,
                speed: 500,
                setScroller: function() {
                    s.find(".scroller").html("");
                    s.find(n).size();
                    $.each(s.find(n), (function(i, e) {
                        s.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e, t) {
                    var a = this.speed;
                    1 == e && (a = 0),
                    "right" != t && (t = "left"),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    this.current_id = i,
                    "left" == t ? s.find(o).animate({
                        top: "-10%",
                        opacity: "0"
                    }, a, (function() {
                        s.find(o).css({
                            top: "10%",
                            opacity: "0"
                        }),
                        s.find(n).hide(),
                        s.find(n).eq(i).show(),
                        s.find(".point").removeClass("current"),
                        s.find(".point").eq(i).addClass("current"),
                        s.find(o).animate({
                            top: "0%",
                            opacity: "1"
                        }, a)
                    }
                    )) : s.find(o).animate({
                        top: "+10%"
                    }, a, (function() {
                        s.find(o).css({
                            top: "-10%"
                        }),
                        s.find(n).hide(),
                        s.find(n).eq(i).show(),
                        s.find(".point").removeClass("current"),
                        s.find(".point").eq(i).addClass("current"),
                        s.find(o).animate({
                            top: "0%"
                        }, a)
                    }
                    ))
                },
                autoSlide: function() {
                    if (1 == this.auto_slide && $(window).width() > 900) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    s.find(".point").unbind("click"),
                    s.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    s.find(".go_left, .go_right").unbind("click"),
                    s.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0);
                        var t = "left";
                        $(this).hasClass("go_right") && (t = "right"),
                        i.goToSlide(e, i.speed, t),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    ))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    s.find(".point").eq(0).addClass("current"),
                    s.find(n).hide(),
                    s.find(n).eq(0).show(),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider160array[i].init(e, t)
        }
    }
    ,
    $(".section160").each((function() {
        window.tobiz.slider160Init($(this).data("id"))
    }
    )),
    window.tobiz.slider320array = new Object,
    window.tobiz.slider320Init = function(i) {
        var e = 0
          , t = 1;
        if (!$("#b_" + i).hasClass("slider"))
            return !0;
        var n = ".slide";
        if ($("#b_" + i).find(n).eq(0).show(),
        $("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider320array[i] && (void 0 !== window.tobiz.slider320array[i].current_id && (e = window.tobiz.slider320array[i].current_id),
        t = window.tobiz.slider320array[i].auto_slide,
        void 0 !== window.tobiz.slider320array[i].auto_slide_interval && clearInterval(window.tobiz.slider320array[i].auto_slide_interval),
        delete window.tobiz.slider320array[i]),
        $("#b_" + i).size()) {
            var o = $("#b_" + i);
            window.tobiz.slider320array[i] = {
                len: o.find(n).size(),
                current_id: 0,
                auto_slide: 1 * o.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5e3,
                speed: 750,
                setScroller: function() {
                    o.find(".scroller").html("");
                    o.find(n).size();
                    $.each(o.find(n), (function(i, e) {
                        o.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e, t) {
                    var s = this.speed;
                    1 == e && (s = 0),
                    "right" != t && (t = "left"),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    this.current_id = i,
                    "left" == t ? o.find(".slider_wrapper").animate({
                        left: "-100%"
                    }, s, (function() {
                        o.find(".slider_wrapper").css({
                            left: "100%"
                        }),
                        o.find(n).hide(),
                        o.find(n).eq(i).show(),
                        o.find(".point").removeClass("current"),
                        o.find(".point").eq(i).addClass("current"),
                        o.find(".slider_wrapper").animate({
                            left: "0%"
                        }, s)
                    }
                    )) : o.find(".slider_wrapper").animate({
                        left: "+100%"
                    }, s, (function() {
                        o.find(".slider_wrapper").css({
                            left: "-100%"
                        }),
                        o.find(n).hide(),
                        o.find(n).eq(i).show(),
                        o.find(".point").removeClass("current"),
                        o.find(".point").eq(i).addClass("current"),
                        o.find(".slider_wrapper").animate({
                            left: "0%"
                        }, s)
                    }
                    ))
                },
                autoSlide: function() {
                    if (1 == this.auto_slide && $(window).width() > 900) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    o.find(n).unbind("swiperight"),
                    o.find(n).unbind("swipeleft"),
                    o.find(".point").unbind("click"),
                    o.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    o.find(".go_left, .go_right").unbind("click"),
                    o.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0);
                        var t = "left";
                        $(this).hasClass("go_right") && (t = "right"),
                        i.goToSlide(e, i.speed, t),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800 && (o.find(n).on("swiperight", (function() {
                        o.find(".go_right").click()
                    }
                    )),
                    o.find(n).on("swipeleft", (function() {
                        o.find(".go_left").click()
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    o.find(".point").eq(0).addClass("current"),
                    o.find(n).hide(),
                    o.find(n).eq(0).show(),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider320array[i].init(e, t)
        }
    }
    ,
    $(".section320").each((function() {
        window.tobiz.slider320Init($(this).data("id"))
    }
    )),
    window.tobiz.slider149array = new Object,
    window.tobiz.slider149Init = function(i) {
        var e = 0
          , t = 1;
        if (!$("#b_" + i).hasClass("slider"))
            return !0;
        var n = ".slide";
        if ($(window).width() <= 640 ? ($("#b_" + i).find(n).show(),
        n = ".col_3") : $("#b_" + i).find(".col_3").show(),
        $("#b_" + i).find(n).eq(0).show(),
        $("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider149array[i] && (void 0 !== window.tobiz.slider149array[i].current_id && (e = window.tobiz.slider149array[i].current_id),
        t = window.tobiz.slider149array[i].auto_slide,
        void 0 !== window.tobiz.slider149array[i].auto_slide_interval && clearInterval(window.tobiz.slider149array[i].auto_slide_interval),
        delete window.tobiz.slider149array[i]),
        $("#b_" + i).size()) {
            var o = $("#b_" + i);
            window.tobiz.slider149array[i] = {
                len: o.find(n).size(),
                current_id: 0,
                auto_slide: 1 * o.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5e3,
                speed: 750,
                setScroller: function() {
                    o.find(".scroller").html("");
                    o.find(n).size();
                    $.each(o.find(n), (function(i, e) {
                        o.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e, t) {
                    var s = this.speed;
                    1 == e && (s = 0),
                    "right" != t && (t = "left"),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    this.current_id = i,
                    "left" == t ? (o.find(".point").hide(),
                    o.find(".slider_wrapper").animate({
                        left: "-100%"
                    }, s, (function() {
                        o.find(".slider_wrapper").css({
                            left: "100%"
                        }),
                        o.find(n).hide(),
                        o.find(n).eq(i).show(),
                        o.find(".point").removeClass("current"),
                        o.find(".point").eq(i).addClass("current"),
                        o.find(".slider_wrapper").animate({
                            left: "0%"
                        }, s, (function() {
                            o.find(".point").show()
                        }
                        ))
                    }
                    ))) : (o.find(".point").hide(),
                    o.find(".slider_wrapper").animate({
                        left: "+100%"
                    }, s, (function() {
                        o.find(".slider_wrapper").css({
                            left: "-100%"
                        }),
                        o.find(n).hide(),
                        o.find(n).eq(i).show(),
                        o.find(".point").removeClass("current"),
                        o.find(".point").eq(i).addClass("current"),
                        o.find(".slider_wrapper").animate({
                            left: "0%"
                        }, s, (function() {
                            o.find(".point").show()
                        }
                        ))
                    }
                    )))
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i, e, t = this;
                    (o.unbind("swiperight"),
                    o.unbind("swipeleft"),
                    o.find(".point").unbind("click"),
                    o.find(".point").click((function() {
                        $(this).hasClass("current") || t.goToSlide($(this).data("id")),
                        t.auto_slide = 0,
                        clearInterval(t.auto_slide_interval)
                    }
                    )),
                    o.find(".go_left, .go_right").unbind("click"),
                    o.find(".go_left, .go_right").click((function() {
                        var i = t.current_id;
                        $(this).hasClass("go_left") ? --i < 0 && (i = t.len - 1) : ++i > t.len - 1 && (i = 0);
                        var e = "left";
                        $(this).hasClass("go_right") && (e = "right"),
                        t.goToSlide(i, t.speed, e),
                        t.auto_slide = 0,
                        clearInterval(t.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800) && (o.on("swiperight", (function() {
                        clearTimeout(i),
                        i = setTimeout((()=>{
                            o.find(".go_right").click()
                        }
                        ), 200)
                    }
                    )),
                    o.on("swipeleft", (function() {
                        clearTimeout(e),
                        e = setTimeout((()=>{
                            o.find(".go_left").click()
                        }
                        ), 200)
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    o.find(".point").eq(0).addClass("current"),
                    o.find(n).hide(),
                    o.find(n).eq(0).show(),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider149array[i].init(e, t)
        }
    }
    ,
    $(".section149").each((function() {
        window.tobiz.slider149Init($(this).data("id"))
    }
    )),
    window.tobiz.slider118array = new Object,
    window.tobiz.slider118Init = function(i) {
        var e = 0
          , t = 1;
        if (!$("#b_" + i).hasClass("slider"))
            return !0;
        var n = ".slide";
        if ($(window).width() <= 800 ? ($("#b_" + i).find(n).show(),
        n = ".col_3") : $("#b_" + i).find(".col_3").show(),
        $("#b_" + i).find(n).eq(0).show(),
        $("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider118array[i] && (void 0 !== window.tobiz.slider118array[i].current_id && (e = window.tobiz.slider118array[i].current_id),
        t = window.tobiz.slider118array[i].auto_slide,
        void 0 !== window.tobiz.slider118array[i].auto_slide_interval && clearInterval(window.tobiz.slider118array[i].auto_slide_interval),
        delete window.tobiz.slider118array[i]),
        $("#b_" + i).size()) {
            var o = $("#b_" + i);
            window.tobiz.slider118array[i] = {
                len: o.find(n).size(),
                current_id: 0,
                auto_slide: 1 * o.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5e3,
                speed: 750,
                setScroller: function() {
                    o.find(".scroller").html("");
                    o.find(n).size();
                    $.each(o.find(n), (function(i, e) {
                        o.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e, t) {
                    var s = this.speed;
                    1 == e && (s = 0),
                    "right" != t && (t = "left"),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    this.current_id = i,
                    "left" == t ? (o.find(".point").hide(),
                    o.find(".slider_wrapper").animate({
                        left: "-100%"
                    }, s, (function() {
                        o.find(".slider_wrapper").css({
                            left: "100%"
                        }),
                        o.find(n).hide(),
                        o.find(n).eq(i).show(),
                        o.find(".point").removeClass("current"),
                        o.find(".point").eq(i).addClass("current"),
                        o.find(".slider_wrapper").animate({
                            left: "0%"
                        }, s, (function() {
                            o.find(".point").show()
                        }
                        ))
                    }
                    ))) : (o.find(".point").hide(),
                    o.find(".slider_wrapper").animate({
                        left: "+100%"
                    }, s, (function() {
                        o.find(".slider_wrapper").css({
                            left: "-100%"
                        }),
                        o.find(n).hide(),
                        o.find(n).eq(i).show(),
                        o.find(".point").removeClass("current"),
                        o.find(".point").eq(i).addClass("current"),
                        o.find(".slider_wrapper").animate({
                            left: "0%"
                        }, s, (function() {
                            o.find(".point").show()
                        }
                        ))
                    }
                    )))
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    o.find(n).unbind("swiperight"),
                    o.find(n).unbind("swipeleft"),
                    o.find(".point").unbind("click"),
                    o.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    o.find(".go_left, .go_right").unbind("click"),
                    o.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0);
                        var t = "left";
                        $(this).hasClass("go_right") && (t = "right"),
                        i.goToSlide(e, i.speed, t),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800 && (o.find(n).on("swiperight", (function() {
                        o.find(".go_right").click()
                    }
                    )),
                    o.find(n).on("swipeleft", (function() {
                        o.find(".go_left").click()
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    o.find(".point").eq(0).addClass("current"),
                    o.find(n).hide(),
                    o.find(n).eq(0).show(),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider118array[i].init(e, t)
        }
    }
    ,
    $(".section118").each((function() {
        window.tobiz.slider118Init($(this).data("id"))
    }
    )),
    window.tobiz.slider312array = new Object,
    window.tobiz.slider312Init = function(i) {
        var e = 0
          , t = 1;
        if ($("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider312array[i] && (void 0 !== window.tobiz.slider312array[i].current_id && (e = window.tobiz.slider312array[i].current_id),
        t = window.tobiz.slider312array[i].auto_slide,
        void 0 !== window.tobiz.slider312array[i].auto_slide_interval && clearInterval(window.tobiz.slider312array[i].auto_slide_interval),
        delete window.tobiz.slider312array[i]),
        $("#b_" + i).size()) {
            var n = $("#b_" + i);
            window.tobiz.slider312array[i] = {
                width: n.find(".section_inner").width(),
                height: n.find(".slider").height(),
                len: n.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * n.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6e3,
                setScroller: function() {
                    n.find(".scroller").html("");
                    n.find(".slide").size();
                    $.each(n.find(".slide"), (function(i, e) {
                        n.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e) {
                    var t = 500;
                    1 == e && (t = 0),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    n.find(".point").removeClass("current");
                    var o = i * this.width * -1 + "px";
                    n.find(".slider_wrapper").animate({
                        left: o
                    }, t),
                    this.current_id = i,
                    n.find(".point").eq(i).addClass("current")
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    n.find(".point").unbind("click"),
                    n.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    n.find(".go_left, .go_right").unbind("click"),
                    n.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0),
                        i.goToSlide(e),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    ))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    n.find(".point").eq(0).addClass("current"),
                    n.find(".slider_wrapper").css({
                        width: this.width * this.len,
                        height: this.height
                    }),
                    n.find(".slide").css({
                        width: this.width
                    }),
                    n.find(".arr1").css({
                        width: this.width
                    }),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider312array[i].init(e, t)
        }
    }
    ,
    $(".section312").each((function() {
        window.tobiz.slider312Init($(this).data("id"))
    }
    )),
    window.tobiz.slider334array = new Object,
    window.tobiz.slider334Init = function(i) {
        var e = 0
          , t = 1;
        if ($("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider334array[i] && (void 0 !== window.tobiz.slider334array[i].current_id && (e = window.tobiz.slider334array[i].current_id),
        t = window.tobiz.slider334array[i].auto_slide,
        void 0 !== window.tobiz.slider334array[i].auto_slide_interval && clearInterval(window.tobiz.slider334array[i].auto_slide_interval),
        delete window.tobiz.slider334array[i]),
        $("#b_" + i).size()) {
            var n = $("#b_" + i);
            window.tobiz.slider334array[i] = {
                width: n.find(".section_inner").width(),
                height: n.find(".slider").height(),
                len: n.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * n.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6e3,
                setScroller: function() {
                    n.find(".scroller").html("");
                    n.find(".slide").size();
                    $.each(n.find(".slide"), (function(i, e) {
                        n.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e) {
                    var t = 500;
                    1 == e && (t = 0),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    n.find(".point").removeClass("current");
                    var o = i * this.width * -1 + "px";
                    n.find(".slider_wrapper").animate({
                        left: o
                    }, t),
                    this.current_id = i,
                    n.find(".point").eq(i).addClass("current")
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    n.find(".point").unbind("click"),
                    n.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    n.find(".go_left, .go_right").unbind("click"),
                    n.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0),
                        i.goToSlide(e),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    ))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    n.find(".point").eq(0).addClass("current"),
                    n.find(".slider_wrapper").css({
                        width: this.width * this.len,
                        height: this.height
                    }),
                    n.find(".slide").css({
                        width: this.width
                    }),
                    n.find(".arr1").css({
                        width: this.width
                    }),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider334array[i].init(e, t)
        }
    }
    ,
    $(".section334").each((function() {
        window.tobiz.slider334Init($(this).data("id"))
    }
    )),
    window.tobiz.slider156array = new Object,
    window.tobiz.slider156Init = function(i) {
        var e = 0
          , t = 1;
        if ($("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider156array[i] && (void 0 !== window.tobiz.slider156array[i].current_id && (e = window.tobiz.slider156array[i].current_id),
        t = window.tobiz.slider156array[i].auto_slide,
        void 0 !== window.tobiz.slider156array[i].auto_slide_interval && clearInterval(window.tobiz.slider156array[i].auto_slide_interval),
        delete window.tobiz.slider156array[i]),
        $("#b_" + i).size()) {
            var n = $("#b_" + i);
            window.tobiz.slider156array[i] = {
                width: n.find(".section_inner").width(),
                height: n.find(".slider").height(),
                len: n.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * n.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6e3,
                setScroller: function() {
                    n.find(".scroller").html("");
                    n.find(".slide").size();
                    $.each(n.find(".slide"), (function(i, e) {
                        n.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e) {
                    var t = 500;
                    1 == e && (t = 0),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    n.find(".point").removeClass("current");
                    var o = i * this.width * -1 + "px";
                    n.find(".slider_wrapper").animate({
                        left: o,
                        opacity: 1
                    }, t),
                    this.current_id = i,
                    n.find(".point").eq(i).addClass("current")
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    n.unbind("swiperight"),
                    n.unbind("swipeleft"),
                    n.find(".point").unbind("click"),
                    n.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    n.find(".go_left, .go_right").unbind("click"),
                    n.find(".go_left, .go_right").click((function() {
                        console.log("fff");
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0),
                        i.goToSlide(e),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800 && (n.on("swiperight", (function() {
                        n.find(".go_right").click()
                    }
                    )),
                    n.on("swipeleft", (function() {
                        n.find(".go_left").click()
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    n.find(".point").eq(0).addClass("current"),
                    n.find(".slider_wrapper").css({
                        width: this.width * this.len,
                        height: this.height
                    }),
                    n.find(".slide").css({
                        width: this.width
                    }),
                    n.find(".arr1").css({
                        width: this.width
                    }),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider156array[i].init(e, t)
        }
    }
    ,
    $(".section156").each((function() {
        window.tobiz.slider156Init($(this).data("id"))
    }
    )),
    window.tobiz.slider1156array = new Object,
    window.tobiz.slider1156Init = function(i) {
        var e = 0
          , t = 1;
        if ($("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider1156array[i] && (void 0 !== window.tobiz.slider1156array[i].current_id && (e = window.tobiz.slider1156array[i].current_id),
        t = window.tobiz.slider1156array[i].auto_slide,
        void 0 !== window.tobiz.slider1156array[i].auto_slide_interval && clearInterval(window.tobiz.slider1156array[i].auto_slide_interval),
        delete window.tobiz.slider1156array[i]),
        $("#b_" + i).size()) {
            var n = $("#b_" + i);
            window.tobiz.slider1156array[i] = {
                width: n.find(".section_inner").width(),
                height: n.find(".slider").height(),
                len: n.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * n.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6e3,
                setScroller: function() {
                    n.find(".scroller").html("");
                    n.find(".slide").size();
                    $.each(n.find(".slide"), (function(i, e) {
                        n.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e) {
                    var t = 500;
                    1 == e && (t = 0),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    n.find(".point").removeClass("current");
                    var o = i * this.width * -1 + "px";
                    n.find(".slider_wrapper").animate({
                        left: o,
                        opacity: 1
                    }, t),
                    this.current_id = i,
                    n.find(".point").eq(i).addClass("current")
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    n.unbind("swiperight"),
                    n.unbind("swipeleft"),
                    n.find(".point").unbind("click"),
                    n.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    n.find(".go_left, .go_right").unbind("click"),
                    n.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0),
                        i.goToSlide(e),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800 && (n.on("swiperight", (function() {
                        n.find(".go_left").click()
                    }
                    )),
                    n.on("swipeleft", (function() {
                        n.find(".go_right").click()
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    n.find(".point").eq(0).addClass("current"),
                    n.find(".slider_wrapper").css({
                        width: this.width * this.len,
                        height: this.height
                    }),
                    n.find(".slide").css({
                        width: this.width
                    }),
                    n.find(".arr1").css({
                        width: this.width
                    }),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider1156array[i].init(e, t)
        }
    }
    ,
    $(".section1156").each((function() {
        window.tobiz.slider1156Init($(this).data("id"))
    }
    )),
    window.tobiz.slider166array = new Object,
    window.tobiz.slider166Init = function(i) {
        var e = 0
          , t = 1;
        if ($("#b_" + i).size() && (t = 1 * $("#b_" + i).data("autoslide")),
        void 0 !== window.tobiz.slider166array[i] && (void 0 !== window.tobiz.slider166array[i].current_id && (e = window.tobiz.slider166array[i].current_id),
        t = window.tobiz.slider166array[i].auto_slide,
        void 0 !== window.tobiz.slider166array[i].auto_slide_interval && clearInterval(window.tobiz.slider166array[i].auto_slide_interval),
        delete window.tobiz.slider166array[i]),
        $("#b_" + i).size()) {
            var n = $("#b_" + i);
            window.tobiz.slider166array[i] = {
                width: n.find(".section_inner").width(),
                height: n.find(".slider").height(),
                len: n.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * n.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6e3,
                setScroller: function() {
                    n.find(".scroller").html("");
                    n.find(".slide").size();
                    $.each(n.find(".slide"), (function(i, e) {
                        n.find(".scroller").append('<div class="point" data-id="' + i + '"></div>')
                    }
                    ))
                },
                goToSlide: function(i, e) {
                    var t = 500;
                    1 == e && (t = 0),
                    i < 0 && (i = this.len - 1),
                    i > this.len - 1 && (i = 0),
                    n.find(".point").removeClass("current");
                    var o = i * this.width * -1 + "px";
                    n.find(".slider_wrapper").animate({
                        left: o,
                        opacity: 1
                    }, t),
                    this.current_id = i,
                    n.find(".point").eq(i).addClass("current")
                },
                autoSlide: function() {
                    if (1 == this.auto_slide) {
                        var i = this.current_id;
                        ++i > this.len - 1 && (i = 0),
                        this.goToSlide(i)
                    }
                },
                eventListener: function() {
                    var i = this;
                    n.unbind("swiperight"),
                    n.unbind("swipeleft"),
                    n.find(".point").unbind("click"),
                    n.find(".point").click((function() {
                        $(this).hasClass("current") || i.goToSlide($(this).data("id")),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    n.find(".go_left, .go_right").unbind("click"),
                    n.find(".go_left, .go_right").click((function() {
                        var e = i.current_id;
                        $(this).hasClass("go_left") ? --e < 0 && (e = i.len - 1) : ++e > i.len - 1 && (e = 0),
                        i.goToSlide(e),
                        i.auto_slide = 0,
                        clearInterval(i.auto_slide_interval)
                    }
                    )),
                    $(window).width() <= 800 && (n.on("swiperight", (function() {
                        n.find(".go_right").click()
                    }
                    )),
                    n.on("swipeleft", (function() {
                        n.find(".go_left").click()
                    }
                    )))
                },
                init: function(i, e) {
                    this.auto_slide = e,
                    n.find(".point").eq(0).addClass("current"),
                    n.find(".slider_wrapper").css({
                        width: this.width * this.len,
                        height: this.height
                    }),
                    n.find(".slide").css({
                        width: this.width
                    }),
                    n.find(".arr1").css({
                        width: this.width
                    }),
                    this.setScroller(),
                    this.eventListener(),
                    this.goToSlide(i, 1);
                    var t = this;
                    void 0 === window.tobiz.editor && (t.auto_slide_interval = setInterval((function() {
                        t.autoSlide()
                    }
                    ), t.lag))
                }
            },
            window.tobiz.slider166array[i].init(e, t)
        }
    }
    ,
    window.tobiz.section1307Init = function(id) {
        var block_calc_id = "#b_" + id
          , results = $(block_calc_id).find(".calc_result")
          , r = [];
        $.each(results, (function(i, el) {
            var formula = $(el).data("formula")
              , data = JSON.parse(decodeURIComponent($(el).data("params")));
            formula = formula.toLowerCase(),
            $.each(data, (function(i, e) {
                if ("select" == e.type || "checkbox" == e.type || "radio" == e.type || "number" == e.type || "range" == e.type) {
                    var t = String.fromCharCode(97 + i);
                    if ("number" == e.type)
                        (n = parseFloat($(block_calc_id).find(".field").eq(i).find("input").val())) || (n = 0),
                        n += "";
                    if ("checkbox" == e.type) {
                        var n = 0;
                        _.each($(block_calc_id).find(".field").eq(i).find("input:checked"), (function(i) {
                            $(i).val() && (n += parseFloat($(i).val()))
                        }
                        )),
                        n += ""
                    }
                    if ("radio" == e.type)
                        (n = parseFloat($(block_calc_id).find(".field").eq(i).find("input:checked").val())) || (n = 0),
                        n += "";
                    if ("range" == e.type)
                        (n = parseFloat($(block_calc_id).find(".field").eq(i).find("input").val())) || (n = 0),
                        n += "";
                    if ("select" == e.type)
                        (n = parseFloat($(block_calc_id).find(".field").eq(i).find("option:selected").val())) || (n = 0),
                        n += "";
                    var o = new RegExp(t,"gi");
                    formula = formula.replace(o, n)
                }
            }
            )),
            $.each(r, (function(i, e) {
                var t = new RegExp("r" + (i + 1),"gi");
                formula = formula.replace(t, r[i])
            }
            ));
            var result = "Укажите параметры";
            try {
                result = Math.round(100 * parseFloat(eval(formula))) / 100
            } catch (i) {}
            r[i] = Math.round(100 * parseFloat(result)) / 100,
            (isNaN(result) || "Infinity" === result) && (result = 0),
            $(el).text(result)
        }
        ));
        var results_input = $(block_calc_id).find('.total_block input[type="hidden"]')
          , r_i = [];
        $.each(results_input, (function(i, el) {
            var formula = $(el).data("formula");
            formula = formula.toLowerCase();
            var data = JSON.parse(decodeURIComponent($(el).data("params")));
            $.each(data, (function(i, e) {
                if ("select" == e.type || "checkbox" == e.type || "radio" == e.type || "number" == e.type || "range" == e.type) {
                    var t = String.fromCharCode(97 + i);
                    if ("number" == e.type)
                        (n = parseFloat($(block_calc_id).find(".field").eq(i).find("input").val())) || (n = 0),
                        n += "";
                    if ("checkbox" == e.type) {
                        var n = 0;
                        _.each($(block_calc_id).find(".field").eq(i).find("input:checked"), (function(i) {
                            $(i).val() && (n += parseFloat($(i).val()))
                        }
                        )),
                        n += ""
                    }
                    if ("radio" == e.type)
                        (n = parseFloat($(block_calc_id).find(".field").eq(i).find("input:checked").val())) || (n = 0),
                        n += "";
                    if ("range" == e.type)
                        (n = parseFloat($(block_calc_id).find(".field").eq(i).find("input").val())) || (n = 0),
                        n += "";
                    if ("select" == e.type)
                        (n = parseFloat($(block_calc_id).find(".field").eq(i).find("option:selected").val())) || (n = 0),
                        n += "";
                    var o = new RegExp(t,"gi");
                    formula = formula.replace(o, n)
                }
            }
            )),
            $.each(r_i, (function(i, e) {
                var t = new RegExp("r" + (i + 1),"gi");
                formula = formula.replace(t, r_i[i])
            }
            ));
            var results_input = "";
            try {
                results_input = Math.round(100 * parseFloat(eval(formula))) / 100
            } catch (i) {}
            r_i[i] = Math.round(100 * parseFloat(results_input)) / 100,
            $(el).val(results_input),
            $(el).hasClass("default_result") && $(el).parent().parent().find("[data-amount]").eq(0).attr("data-amount", results_input)
        }
        )),
        window.tobiz.section1307Descr(id)
    }
    ,
    window.tobiz.section1307Descr = function(i) {
        var e = $("#b_" + i).find("form");
        e.find("input.select_descr___").remove(),
        $.each(e.find("select"), (function(i, e) {
            var t = $(e).closest(".field").find(".field_title").text() || "Выбрана опция " + i
              , n = $(e).find("option:selected").eq(0).text();
            $(e).after('<input type="hidden" class="select_descr___" name="Выбрана опция (' + t + ')" value="' + n + '">')
        }
        )),
        e.find("input.radio_descr___").remove(),
        $.each(e.find('input[type="radio"]'), (function(i, e) {
            if ($(e).prop("checked")) {
                var t = $(e).closest(".field").find(".field_title").text() || "Выбрана опция " + i
                  , n = $(e).parent().find(".data_title").eq(0).text();
                $(e).siblings("label").after('<input type="hidden" class="radio_descr___" name="Выбрана опция (' + t + ')" value="' + n + '">')
            }
        }
        ))
    }
    ,
    $(".section166").each((function() {
        window.tobiz.slider166Init($(this).data("id"))
    }
    )),
    $(".section1307").each((function() {
        window.tobiz.section1307Init($(this).data("id"))
    }
    )),
    $(".section1226").size() && $(".section1226").each((function() {
        var i = $(this);
        i.find(".section_inner").css({
            minHeight: i.find(".arr_wrapp").outerHeight() + "px"
        })
    }
    ));
    var sections = [".section139", ".section1810", ".section1820", ".section1800"];
    function refreshTableWrappers() {
        if ($(window).width() <= 840) {
            var i = $(".section_inner").width();
            $(".table").each((function(e, t) {
                $(t).width() > i && ($(this).parent().hasClass("table_wrap") || ($(t).wrap('<div class="table_wrap table_wrap_' + e + '" style="overflow-y: scroll;overflow-x: visible; padding-top: 25px"></div>'),
                $(".table_wrap_" + e).prepend('<div style="display: flex; display: -webkit-flex; display: -webkit-box; position: absolute; top: 0px; left: 50%; -webkit-transform: translateX(-50%); transform: translateX(-50%); align-items: center;"><span style="display:block; -webkit-transform: rotate(90deg); margin-right: 10px;  transform: rotate(90deg); width: 15px; height: 15px; background:url(/img/editor_icons/downwards-pointer_1.svg) no-repeat center;  background-size: 100%;"></span><span class="finger_tap" style="display:block; width: 20px; height: 20px; background:url(/img/editor_icons/finger-tap.svg) no-repeat center; background-size: 100%;"></span><span style="display:block; margin-left: 10px; -webkit-transform: rotate(-90deg);   transform: rotate(-90deg); width: 15px; height: 15px; background:url(/img/editor_icons/downwards-pointer_1.svg) no-repeat center; background-size: 100%;"></span> </div>')))
            }
            ))
        }
    }
    function refreshTwentyTwentyBlocks() {
        [".section139", ".section1800", ".section1810", ".section1820"].forEach((function(i) {
            $(i).each((function() {
                $(this).find(".twentytwenty-container").twentytwenty({
                    default_offset_pct: .7,
                    orientation: "horizontal",
                    before_label: "",
                    after_label: "",
                    no_overlay: !0,
                    move_slider_on_hover: !1,
                    move_with_handle_only: !1,
                    click_to_move: !1
                })
            }
            ))
        }
        ))
    }
    sections.forEach((function(i) {
        $(i).size() && setTimeout((function() {
            $(i).each((function() {
                $(this).find(".twentytwenty-container").twentytwenty({
                    default_offset_pct: .7,
                    orientation: "horizontal",
                    before_label: "",
                    after_label: "",
                    no_overlay: !0,
                    move_slider_on_hover: !1,
                    move_with_handle_only: !1,
                    click_to_move: !1
                })
            }
            ))
        }
        ), ".section1800" === i ? 300 : 0)
    }
    )),
    $(window).resize((function() {
        this.resizeTO && clearTimeout(this.resizeTO),
        this.resizeTO = setTimeout((function() {
            $(this).trigger("resizeComplete")
        }
        ), 500)
    }
    )),
    $(window).bind("resizeComplete", (function() {
        delMobClass(),
        not_menu(),
        refreshTableWrappers(),
        $(".section320").each((function() {
            window.tobiz.slider320Init($(this).data("id"))
        }
        )),
        $(".section312").each((function() {
            window.tobiz.slider312Init($(this).data("id"))
        }
        )),
        $(".section334").each((function() {
            window.tobiz.slider334Init($(this).data("id"))
        }
        )),
        $(".section156").each((function() {
            window.tobiz.slider156Init($(this).data("id"))
        }
        )),
        $(".section1156").each((function() {
            window.tobiz.slider1156Init($(this).data("id"))
        }
        )),
        $(".section166").each((function() {
            window.tobiz.slider166Init($(this).data("id"))
        }
        )),
        $(".section160").each((function() {
            window.tobiz.slider160Init($(this).data("id"))
        }
        )),
        $(".section126").each((function() {
            window.tobiz.slider126Init($(this).data("id"))
        }
        )),
        $(".section1011").each((function() {
            window.tobiz.slider1011Init($(this).data("id"))
        }
        )),
        $(".section129").each((function() {
            window.tobiz.slider129Init($(this).data("id"))
        }
        )),
        $(".section151").each((function() {
            window.tobiz.slider151Init($(this).data("id"))
        }
        )),
        $(".section149").each((function() {
            window.tobiz.slider149Init($(this).data("id"))
        }
        )),
        $(".section118").each((function() {
            window.tobiz.slider118Init($(this).data("id"))
        }
        )),
        refreshTwentyTwentyBlocks(),
        $(window).width() > 640 ? $(".section116").find(".menu1").show() : $(".section116").find(".menu1").hide(),
        $(".section1226").size() && $(".section1226").each((function() {
            var i = $(this);
            i.find(".section_inner").css({
                minHeight: i.find(".arr_wrapp").outerHeight() + "px"
            })
        }
        ))
    }
    )),
    setTimeout((function() {
        refreshTwentyTwentyBlocks(),
        refreshTableWrappers()
    }
    ), 500),
    $("body").on("click", ".menu_mobile_btn", (function(i) {
        $(this).next(".menu1").toggleClass("active"),
        $("body").toggleClass("modal"),
        $(this).toggleClass("active")
    }
    )),
    $("body").on("click", ".menu-toogler_widget", (function(i) {
        $(this).parent(".section1116").addClass("view_menu"),
        $(this).next(".menu-toogler_widget_close").show(),
        $(this).hide()
    }
    )),
    $("body").on("change", ".section1307 input, .section1307 select", (function(i) {
        var e = $(this).closest(".section").data("id") + "";
        window.tobiz.section1307Init(e)
    }
    )),
    $("body").on("click", ".menu-toogler_widget_close", (function() {
        $(this).parent(".section1116").removeClass("view_menu"),
        $(this).prev(".menu-toogler_widget").show(),
        $(this).hide()
    }
    )),
    $("body").on("click", ".for_view", (function() {
        $(this).parent(".section1116").addClass("view_menu"),
        $(this).hide(),
        $(".type_id_1116 .for_hide").show()
    }
    )),
    $("body").on("click", ".for_hide", (function() {
        $(this).parent(".section1116").removeClass("view_menu"),
        $(this).hide(),
        $(".type_id_1116 .for_view").show()
    }
    )),
    $("body").on("click", ".section1117 .menu-toogler_widget", (function(i) {
        $(this).parent(".section1117").addClass("view_menu"),
        $(this).next(".menu-toogler_widget_close").show(),
        $(this).siblings(".section_inner").children(".menu1").show(),
        $(this).hide()
    }
    )),
    $("body").on("click", ".menu-toogler_widget_close", (function() {
        $(this).parent(".section1117").removeClass("view_menu"),
        $(this).prev(".menu-toogler_widget").show(),
        $(this).hide()
    }
    )),
    $("body").on("click", ".section1302 .level0,.section1302 .level1", (function(i) {
        console.log(1),
        $(this).parents(".section_inner").removeClass("active"),
        $(this).parents(".menu1").removeClass("active")
    }
    )),
    $("body").on("click", ".section1302 .menu_mobile_btn2", (function(i) {
        $(this).toggleClass("active"),
        $(this).next(".menu1").toggleClass("active")
    }
    )),
    $("body").on("click", ".formula", (function() {
        $(".formula").removeClass("active"),
        $(this).addClass("active")
    }
    ));
    var video_block = $(".section159 .video"), icon = $(".section159 .play"), ctx;
    function sort_to_max(i, e) {
        var t = parseInt($(i).find(".price1").text())
          , n = parseInt($(e).find(".price1").text());
        return t > n ? 1 : n > t ? -1 : 0
    }
    function sort_to_min(i, e) {
        var t = parseInt($(i).find(".price1").text())
          , n = parseInt($(e).find(".price1").text());
        return t > n ? -1 : n > t ? 1 : 0
    }
    function foo() {
        $(".section321").each((function() {
            console.log("tab_id: " + $(this).data("id")),
            $(this).find(".arr1:nth-of-type(1)").find(".tab_btn").click()
        }
        ))
    }
    function txtArea() {
        $(".calculator textarea").click()
    }
    function delMobClass() {
        $(window).width() <= 1200 ? $(".section_inner.width1170").each((function() {
            $(this).addClass("was_width1170"),
            $(this).removeClass("width1170")
        }
        )) : $(window).width() > 1200 && $(".section_inner.was_width1170").each((function() {
            $(this).removeClass("was_width1170"),
            $(this).addClass("width1170")
        }
        ))
    }
    function ToTopBtn() {
        var i = $(".section1163");
        $(window).scrollTop() > 300 ? i.show() : i.hide()
    }
    (icon.click((function() {
        return icon.toggleClass("active"),
        video_block.toggleClass("play_active"),
        !1
    }
    )),
    $(document).on("click", ".filter_btns button", (function() {
        $(".filter_btns button"),
        $(this).parent().css({
            order: "-1"
        }),
        $(this).parent().find("button").removeClass("current_btn"),
        $(this).addClass("current_btn");
        var i = $(this).parent().parent().children(".arr1");
        "to_max" === $(this).data("sort_dir") ? i.sort(sort_to_max) : i.sort(sort_to_min),
        i.each((function(i, e) {
            $(e).css({
                order: i
            })
        }
        ))
    }
    )),
    $((function() {
        var i = 0;
        try {
            i = $(".table").offset().top
        } catch (i) {}
        var e = 0
          , t = $(window);
        t.on("load scroll", (function() {
            t.scrollTop() + t.height() - 200 >= i && 0 == e && ($(".table").prev().addClass("this"),
            e = 1)
        }
        ))
    }
    )),
    $("body").on("click", ".section321 .tab_btn", (function() {
        $(this).parent().parent().parent().parent().find(".tab_btn").removeClass("active"),
        $(this).addClass("active"),
        $(this).parent().parent().parent().parent().find(".tabs__content").removeClass("active"),
        $(this).next().addClass("active")
    }
    )),
    setTimeout(foo, 100),
    setTimeout(txtArea, 100),
    $("body").on("input change mousemove", ".field_input_range input", (function() {
        var i = $(this).val();
        $(this).siblings(".change_val").text(i)
    }
    )),
    $("body").on("mousemove", '#btn_config input[name="btn_radius"]', (function() {
        var i = $(this).val();
        $(this).parent().siblings(".val_range").html(" " + i + " em")
    }
    )),
    $("body").on("click", ".x_pattern_new .spoiler-title, .x_pattern .spoiler-title", (function() {
        $(this).siblings(".spoiler-content").toggle()
    }
    )),
    $("body").on("change", '.section1011 .slides input[type="checkbox"]', (function() {
        $(this).parent(".checkbox_field").toggleClass("active")
    }
    )),
    $("body").on("change", '.section1011 .slides input[type="radio"]', (function() {
        $(this).parents(".field_input").find(".checkbox_field").removeClass("active"),
        $(this).parent(".checkbox_field").addClass("active")
    }
    )),
    $("body").on("click", ".section1011 .slides .prev, .section1011 .slides .next", (function() {
        var i = $(this).closest(".section1011").offset().top;
        $(window).width() < 810 && $(window).scrollTop(i)
    }
    )),
    $("body").on("change", ".section1011 .slides input", (function() {
        $(this).parents(".field_input").children(".checkbox_field").each((function(i, e) {
            if ($(this).children("input").prop("checked"))
                return $(".section1011 .next").addClass("show"),
                !1;
            $(".section1011 .next").removeClass("show")
        }
        ))
    }
    )),
    $("body").on("change input", '.section1011 .slides input[type="range"]', (function() {
        $(".section1011 .next").addClass("show")
    }
    )),
    $("body").on("change input", '.section1011 .slides input[type="text"], .section1011 .slides textarea', (function() {
        $(this).parent(".field_input").each((function() {
            0 !== $(this).children('input[type="text"]').val() || 0 !== $(this).children("textarea").val() ? $(".section1011 .next").addClass("show") : $(".section1011 .next").removeClass("show")
        }
        ))
    }
    )),
    $("body").on("click", ".data_title", (function() {
        $(this).siblings("input").click()
    }
    )),
    $("body").on("click", ".x_pattern_new .spoiler-title", (function() {
        $(this).parent().siblings(".x_pattern_opacity").toggle(),
        $(this).parent().siblings(".x_pattern_fixed").toggle()
    }
    )),
    $("body").on("click", ".section2120 .search button", (function() {
        $(this).siblings("input").addClass("active"),
        $(this).parent().parent().siblings(".logo_img").addClass("search_active")
    }
    )),
    $("body").on("click", ".send.next", (function() {
        var i = $(this).closest(".section")
          , e = "";
        i.find(".quiz_wrapper .field").each((function() {
            e += "| Вопрос: " + $(this).data("question") + " |\n",
            e += " Ответ: ";
            var i = [];
            $(this).find('input:checked, select option:selected, input[type="range"], input[type="text"], textarea').each((function() {
                i.push($(this).val())
            }
            )),
            e += i.join(", ") + "  | | \n\n"
        }
        )),
        i.find("form textarea.quiz_report").remove(),
        i.find("form").append('<textarea style="display:none;" name="QUIZ_RESULT">' + e + "</textarea>")
    }
    )),
    $(".section333").each((function(i, e) {
        var t = $(this).find(".level0")
          , n = $(this);
        t.each((function(i, e) {
            $(this).children("a").html(i + 1)
        }
        ));
        var o = $(this).find(".level0")
          , s = o.length;
        s > 10 && n.addClass("no-radius"),
        s > 5 && o.each((function(i, e) {
            $(this).find("a").attr("href") === window.location.pathname && $(this).addClass("active")
        }
        ))
    }
    )),
    $(document).on("click", document, (function(i) {
        if ($(window).width() < 810) {
            if ($(i.target).closest(".menu-toogler, .menu_mobile_btn, .menu1, .menu2").length)
                return;
            $(".level1").hide(),
            $(".menu1").hide(),
            $(".menu2").hide(),
            $(".section311 .menu1, .section2120 .menu1, .section2120 .menu2").show(),
            $(".section").removeClass("menu_open"),
            i.stopPropagation()
        }
    }
    )),
    delMobClass(),
    setInterval(ToTopBtn, 300),
    $(".section1163").on("click", (function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    }
    )),
    $("body").on("click", ".section1130 .btns_wrapp .btn1, .section1130 .btns_wrapp .btn2", (function(i) {
        tobiz.editor || (-1 !== i.currentTarget.className.indexOf("open_card") ? $("body").addClass("noscroll") : $("body").addClass("modal"))
    }
    )),
    $("body").on("click", ".section2120 .menu a", (function(i) {
        $(this).parents(".section").removeClass("view_menu"),
        $(this).parents(".section").removeClass("menu_open_new"),
        $(this).parents(".section").removeClass("menu_open"),
        $(this).parents(".section").find(".menu_content").hide(),
        $("body").removeClass("modal"),
        $(this).parents(".section").find(".menu-toogler ").removeClass("active")
    }
    )),
    $("body").on("click", ".menu1 a, .menu a", (function(i) {
        $(window).width() < 960 && ($(this).parents(".menu1").removeClass("active"),
        $("body").removeClass("modal"),
        $(this).parents(".section").removeClass("view_menu"),
        $(this).parents(".section").removeClass("menu_open_new"),
        $(this).parents(".section").removeClass("menu_open"),
        $(this).parents(".section").find(".menu_content").hide(),
        $(this).parents(".section").find(".menu-toogler_widget").show(),
        $(this).parents(".section").find(".menu_mobile_btn").removeClass("active"),
        $(this).parents(".section").find(".menu-toogler ").removeClass("active"))
    }
    )),
    $("body").on("click", 'a:not(.flexblock_content)[href^="#"]', (function(i) {
        var e = $(this).attr("href").substr(1)
          , t = $('a[name="' + e + '"]');
        if (t.length > 0 && $(window).width() > 1e3)
            return $("html,body").stop().animate({
                scrollTop: t.offset().top
            }, 1e3),
            !1
    }
    )),
    $(".menu1").each((function(i, e) {
        $(e).children().children().length || ($(this).siblings(".menu-toogler").hide(),
        $(this).hide())
    }
    )),
    setTimeout((function() {
        $(".section1011 .field_input_text input, .section1011 .field_input_textarea textarea").val(""),
        $(".field input").attr("autocomplete", "off")
    }
    ), 300),
    $(".section1128").length && (t_show = $(".section1128").data("showtime"),
    t_fade = $(".section1128").data("fade"),
    time_to_remove = t_show + t_fade,
    setTimeout((function() {
        $(".section1128").addClass("showed")
    }
    ), t_show),
    setTimeout((function() {
        $(".section1128").hide()
    }
    ), time_to_remove)),
    $(".section1550").size() && $(".section1550").each((function() {
        var i = $(this).closest(".section").attr("id")
          , e = "";
        e += "<ul>",
        $("body").find("h1, h2, h3, h4, h5, h6").each((function(t, n) {
            var o = 1;
            "H1" == $(this).prop("tagName") && (o = 1),
            "H2" == $(this).prop("tagName") && (o = 2),
            "H3" == $(this).prop("tagName") && (o = 3),
            "H4" == $(this).prop("tagName") && (o = 4),
            "H5" == $(this).prop("tagName") && (o = 5),
            "H6" == $(this).prop("tagName") && (o = 6),
            $(this).prepend('<a id="t_shema_' + i + "_" + t + '"></a>'),
            e += '<li class="level_' + o + '"><a href="#t_shema_' + i + "_" + t + '">' + $(this).text() + "</a></li>"
        }
        )),
        e += "</ul>",
        $(this).find(".shema").html(e)
    }
    )),
    $(".section1700").size() && $(".section1700").each((function() {
        var i = $(".article_content").find("h2, h3, h4, h5, h6");
        if (i.length) {
            var e = $(this).closest(".section").attr("id")
              , t = "<p><b>Содержание:</b></p>";
            t += "<ul>";
            $.each(i, (function(i, n) {
                $(this).prepend('<a id="t_shema_' + e + "_" + i + '"></a>');
                var o = function(i) {
                    var e = 1;
                    return "H2" == $(i).prop("tagName") && (e = 1),
                    "H3" == $(i).prop("tagName") && (e = 2),
                    "H4" == $(i).prop("tagName") && (e = 3),
                    "H5" == $(i).prop("tagName") && (e = 4),
                    "H6" == $(i).prop("tagName") && (e = 5),
                    e
                }(n);
                t += '<li class="level_' + o + '"><a href="#t_shema_' + e + "_" + i + '">' + $(this).text() + "</a></li>"
            }
            )),
            t += "</ul>",
            $(this).find(".shema").html(t)
        } else
            $(".shema").remove()
    }
    )),
    $(".section1400").size()) && $(".section1400").each((function() {
        var i = $(this).attr("id");
        $(this).find(".chart").each((function() {
            ctx = this.getContext("2d")
        }
        ));
        var e = $("#" + i + " .arr_color")
          , t = $("#" + i + " .arr_title")
          , n = $("#" + i + " .arr_value")
          , o = $("#" + i + " .graph").data("type");
        function s(i) {
            for (var e = new Array, t = 0; t < i.length; t++)
                e.push($(i[t]).text());
            return e
        }
        new Chart(ctx,{
            type: o,
            data: {
                labels: s(t),
                datasets: [{
                    label: "",
                    data: s(n),
                    backgroundColor: s(e)
                }]
            },
            options: {
                legend: {
                    position: "right",
                    labels: {
                        fontSize: 14
                    }
                }
            }
        })
    }
    ));
    if ($('#basket_make_order input[name="tel"]').each((function() {
        var i = String($(this).data("mask"));
        "undefined" !== i && $(this).mask(i)
    }
    )),
    $(".section1302").size()) {
        var this_location = window.location.pathname;
        $(".section1302 li").each((function(i, e) {
            var t = $(this).children("a").attr("href");
            this_location == t ? $(this).addClass("this_page") : $(this).removeClass("this_page")
        }
        ))
    }
    $('input[type="search"]').each((function(i, e) {
        $(this).blur()
    }
    )),
    $(".field_input_phone input").each((function() {
        var i = String($(this).data("mask"));
        "undefined" !== i && $(this).mask(i)
    }
    )),
    $("body").on("click", ".tobiz_auth .user", (function(i) {
        $(".popup_user").toggleClass("active")
    }
    )),
    $(".menu1 a").hover((function(i) {
        $(this).removeAttr("title")
    }
    )),
    not_menu(),
    $(".section146 .image_box img").click((function(i) {
        var e = $(this).next(".overlay_image_box").data("link")
          , t = $(this).next(".overlay_image_box").data("link-target");
        "" != e && (1 == t ? window.open(e, "_blank") : window.open(e, "_self"))
    }
    )),
    $("body").find(".gotoitempage").each((function() {
        $(this).attr("style2", $(this).attr("style"))
    }
    )),
    $(".gotoitempage").click((function(i) {
        i.preventDefault();
        var e = JSON.parse(localStorage.getItem("itempage"));
        null == e && (e = {});
        var t = $(this).data("id")
          , n = $(this).attr("style")
          , o = $(this).attr("style2")
          , s = 0;
        $(this).hasClass("surround") && (s = 1),
        e[t] = {
            style: n,
            style2: o,
            surround: s,
            url: window.location.href
        },
        localStorage.setItem("itempage", JSON.stringify(e)),
        window.location.href = $(this).attr("href")
    }
    )),
    $(document).keyup((function(i) {
        13 === i.keyCode && $(".save").click(),
        27 === i.keyCode && $(".extra_info_block .close").click()
    }
    )),
    $('.section146 .overlay_image_box[data-link]:not([data-link=""])').parent().children("img").css({
        cursor: "pointer"
    }),
    $("body").on("click", '.flexblock_wrapper_btn .flexblock_content[data-action="2"]', (function() {
        if (!tobiz.editor) {
            var i = $(this).parent().children(".flexblock_popup_form").html()
              , e = $(this).parent().children(".flexblock_popup_form").find("form > .flexblock_popup_title").html();
            window.modal.getModal(e, i, "flexblock_popup")
        }
    }
    ));
    var url = {
        getParam: function(i, e) {
            e || (e = window.location.href),
            i = i.replace(/[\[\]]/g, "\\$&");
            var t = new RegExp("[?&]" + i + "(=([^&#]*)|&|#|$)").exec(e);
            return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
        }
    }
      , cookie = {
        set: function(i, e, t) {
            var n = "";
            if (t) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3),
                n = "; expires=" + o.toUTCString()
            }
            document.cookie = i + "=" + (e || "") + n + "; path=/"
        },
        get: function(i) {
            for (var e = i + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                for (var o = t[n]; " " == o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 == o.indexOf(e))
                    return o.substring(e.length, o.length)
            }
            return null
        },
        remove: function(i) {
            document.cookie = i + "=; Max-Age=-99999999;"
        }
    }
      , partnerID = url.getParam("partnerID");
    function setClassPadding() {
        $(".section1126").length && $(window).width() > 1300 ? $("#wrapper").addClass("padding_wrapper_right") : $("#wrapper").removeClass("padding_wrapper_right")
    }
    partnerID && (cookie.set("partnerID", partnerID),
    $.ajax({
        dataType: "json",
        type: "POST",
        url: "/auth.php",
        data: {
            action: "partnerClick",
            partnerID: partnerID
        }
    }).done((function(i) {
        i.status,
        console.log(i.status)
    }
    ))),
    $(".section.fixed_top").length && $(".section > a").css({
        position: "absolute",
        display: "inline-block",
        top: -1 * $(".section.fixed_top").height()
    }),
    setTimeout((function() {
        if ($(".editor_false .section5001").length) {
            let i = $(".section5001").data()
              , e = {
                flakeCount: i.flakeCount,
                flakeColor: i.flakeColor,
                minSize: i.minSize,
                maxSize: i.maxSize,
                minSpeed: i.minSpeed,
                maxSpeed: i.maxSpeed,
                round: i.round,
                shadow: i.shadow,
                image: "/img/snowfall/" + i.image,
                collection: i.collection
            };
            i.image && void 0 !== i.image && "undefined" != i.image ? delete e.collection : delete e.image,
            i.collection && void 0 !== i.collection && "undefined" != i.collection || delete e.collection,
            $("#wrapper").snowfall(e)
        }
    }
    ), 1e3),
    setTimeout((function() {
        setClassPadding()
    }
    ), 300),
    $("body").on("click", ".hide_long_catalog .hide_long_catalog_spoiler", (function() {
        $(this).closest(".hide_long_catalog").removeClass("hide_long_catalog"),
        $(this).remove()
    }
    )),
    $(window).on("scroll", (function() {
        $(".parallax_section").each((function() {
            var i = $(this).data("id")
              , e = $("#b_" + i).offset().top
              , t = $(window).scrollTop()
              , n = t - e;
            t >= e && $("#b_" + i).find(".section_inner").children().css({
                transform: "translateY(" + n / 2 + "px)"
            })
        }
        ))
    }
    )),
    $(document).on("click", '[data-action="show-module-description"]', (function() {
        var i = $(this).data("module-id");
        $(this).find(".fa").toggleClass("rotate-90"),
        $(`.content_wrapper[data-module-id="${i}"]`).toggleClass("hidden")
    }
    )),
    $(document).on("click", '[data-action="get_course_to_user"]', (function() {
        var i = $(this)
          , e = i.data();
        $.ajax({
            url: "/auth.php",
            type: "POST",
            dataType: "json",
            data: e,
            async: !1,
            cache: !1,
            success: function(e) {
                "Success" == e.status ? (e.payment_url && (window.location.href = e.payment_url),
                e.btn_text && i.html(e.btn_text)) : alert(e.description)
            },
            error: function(i) {
                console.log(i)
            }
        })
    }
    ))
}
));
