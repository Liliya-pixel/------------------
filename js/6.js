!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var f, d = navigator.userAgent, c = /iphone/i.test(d), a = /chrome/i.test(d), b = /android/i.test(d);
    e.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    },
    e.fn.extend({
        caret: function(i, g) {
            var h;
            if (0 !== this.length && !this.is(":hidden")) {
                return "number" == typeof i ? (g = "number" == typeof g ? g : i,
                this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(i, g) : this.createTextRange && (h = this.createTextRange(),
                    h.collapse(!0),
                    h.moveEnd("character", g),
                    h.moveStart("character", i),
                    h.select())
                })) : (this[0].setSelectionRange ? (i = this[0].selectionStart,
                g = this[0].selectionEnd) : document.selection && document.selection.createRange && (h = document.selection.createRange(),
                i = 0 - h.duplicate().moveStart("character", -100000),
                g = i + h.text.length),
                {
                    begin: i,
                    end: g
                })
            }
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(q, j) {
            var n, k, h, i, p, g, l, o;
            if (!q && this.length > 0) {
                n = e(this[0]);
                var m = n.data(e.mask.dataName);
                return m ? m() : void 0
            }
            return j = e.extend({
                autoclear: e.mask.autoclear,
                placeholder: e.mask.placeholder,
                completed: null
            }, j),
            k = e.mask.definitions,
            h = [],
            i = l = q.length,
            p = null,
            e.each(q.split(""), function(r, s) {
                "?" == s ? (l--,
                i = r) : k[s] ? (h.push(new RegExp(k[s])),
                null === p && (p = h.length - 1),
                i > r && (g = h.length - 1)) : h.push(null)
            }),
            this.trigger("unmask").each(function() {
                function r() {
                    if (j.completed) {
                        for (var I = p; g >= I; I++) {
                            if (h[I] && w[I] === E(I)) {
                                return
                            }
                        }
                        j.completed.call(F)
                    }
                }
                function E(I) {
                    return j.placeholder.charAt(I < j.placeholder.length ? I : 0)
                }
                function D(I) {
                    for (; ++I < l && !h[I]; ) {}
                    return I
                }
                function y(I) {
                    for (; --I >= 0 && !h[I]; ) {}
                    return I
                }
                function v(L, I) {
                    var K, J;
                    if (!(0 > L)) {
                        for (K = L,
                        J = D(I); l > K; K++) {
                            if (h[K]) {
                                if (!(l > J && h[K].test(w[J]))) {
                                    break
                                }
                                w[K] = w[J],
                                w[J] = E(J),
                                J = D(J)
                            }
                        }
                        C(),
                        F.caret(Math.max(p, L))
                    }
                }
                function s(M) {
                    var K, L, I, J;
                    for (K = M,
                    L = E(M); l > K; K++) {
                        if (h[K]) {
                            if (I = D(K),
                            J = w[K],
                            w[K] = L,
                            !(l > I && h[I].test(J))) {
                                break
                            }
                            L = J
                        }
                    }
                }
                function A() {
                    var I = F.val()
                      , J = F.caret();
                    if (o && o.length && o.length > I.length) {
                        for (u(!0); J.begin > 0 && !h[J.begin - 1]; ) {
                            J.begin--
                        }
                        if (0 === J.begin) {
                            for (; J.begin < p && !h[J.begin]; ) {
                                J.begin++
                            }
                        }
                        F.caret(J.begin, J.begin)
                    } else {
                        for (u(!0); J.begin < l && !h[J.begin]; ) {
                            J.begin++
                        }
                        F.caret(J.begin, J.begin)
                    }
                    r()
                }
                function x() {
                    u(),
                    F.val() != H && F.change()
                }
                function z(L) {
                    if (!F.prop("readonly")) {
                        var M, K, I, J = L.which || L.keyCode;
                        o = F.val(),
                        8 === J || 46 === J || c && 127 === J ? (M = F.caret(),
                        K = M.begin,
                        I = M.end,
                        I - K === 0 && (K = 46 !== J ? y(K) : I = D(K - 1),
                        I = 46 === J ? D(I) : I),
                        t(K, I),
                        v(K, I - 1),
                        L.preventDefault()) : 13 === J ? x.call(this, L) : 27 === J && (F.val(H),
                        F.caret(0, u()),
                        L.preventDefault())
                    }
                }
                function G(M) {
                    if (!F.prop("readonly")) {
                        var L, O, K, I = M.which || M.keyCode, N = F.caret();
                        if (!(M.ctrlKey || M.altKey || M.metaKey || 32 > I) && I && 13 !== I) {
                            if (N.end - N.begin !== 0 && (t(N.begin, N.end),
                            v(N.begin, N.end - 1)),
                            L = D(N.begin - 1),
                            l > L && (O = String.fromCharCode(I),
                            h[L].test(O))) {
                                if (s(L),
                                w[L] = O,
                                C(),
                                K = D(L),
                                b) {
                                    var J = function() {
                                        e.proxy(e.fn.caret, F, K)()
                                    };
                                    setTimeout(J, 0)
                                } else {
                                    F.caret(K)
                                }
                                N.begin <= g && r()
                            }
                            M.preventDefault()
                        }
                    }
                }
                function t(K, I) {
                    var J;
                    for (J = K; I > J && l > J; J++) {
                        h[J] && (w[J] = E(J))
                    }
                }
                function C() {
                    F.val(w.join(""))
                }
                function u(J) {
                    var I, N, M, L = F.val(), K = -1;
                    for (I = 0,
                    M = 0; l > I; I++) {
                        if (h[I]) {
                            for (w[I] = E(I); M++ < L.length; ) {
                                if (N = L.charAt(M - 1),
                                h[I].test(N)) {
                                    w[I] = N,
                                    K = I;
                                    break
                                }
                            }
                            if (M > L.length) {
                                t(I + 1, l);
                                break
                            }
                        } else {
                            w[I] === L.charAt(M) && M++,
                            i > I && (K = I)
                        }
                    }
                    return J ? C() : i > K + 1 ? j.autoclear || w.join("") === B ? (F.val() && F.val(""),
                    t(0, l)) : C() : (C(),
                    F.val(F.val().substring(0, K + 1))),
                    i ? I : p
                }
                var F = e(this)
                  , w = e.map(q.split(""), function(J, I) {
                    return "?" != J ? k[J] ? E(I) : J : void 0
                })
                  , B = w.join("")
                  , H = F.val();
                F.data(e.mask.dataName, function() {
                    return e.map(w, function(J, I) {
                        return h[I] && J != E(I) ? J : null
                    }).join("")
                }),
                F.one("unmask", function() {
                    F.off(".mask").removeData(e.mask.dataName)
                }).on("focus.mask", function() {
                    if (!F.prop("readonly")) {
                        clearTimeout(f);
                        var I;
                        H = F.val(),
                        I = u(),
                        f = setTimeout(function() {
                            F.get(0) === document.activeElement && (C(),
                            I == q.replace("?", "").length ? F.caret(0, I) : F.caret(I))
                        }, 10)
                    }
                }).on("blur.mask", x).on("keydown.mask", z).on("keypress.mask", G).on("input.mask paste.mask", function() {
                    F.prop("readonly") || setTimeout(function() {
                        var I = u(!0);
                        F.caret(I),
                        r()
                    }, 0)
                }),
                a && b && F.off("input.mask").on("input.mask", A),
                u()
            })
        }
    })
});
