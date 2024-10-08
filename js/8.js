(function(a) {
    if (typeof define === "function" && define.amd) {
        define([], a)
    } else {
        if ((typeof module !== "undefined" && module !== null) && module.exports) {
            module.exports = a
        } else {
            a()
        }
    }
}
)(function() {
    var O = Object.assign || window.jQuery && jQuery.extend;
    var e = 8;
    var E = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(U, T) {
            return window.setTimeout(function() {
                U()
            }, 25)
        }
        )
    }
    )();
    var j = {
        textarea: true,
        input: true,
        select: true,
        button: true
    };
    var l = {
        move: "mousemove",
        cancel: "mouseup dragstart",
        end: "mouseup"
    };
    var g = {
        move: "touchmove",
        cancel: "touchend",
        end: "touchend"
    };
    var i = /\s+/;
    var n = {
        bubbles: true,
        cancelable: true
    };
    var Q = Symbol("events");
    function G(T) {
        return new CustomEvent(T,n)
    }
    function f(T) {
        return T[Q] || (T[Q] = {})
    }
    function A(T, Y, aa, W, V) {
        Y = Y.split(i);
        var ac = f(T);
        var X = Y.length;
        var U, Z;
        function ab(ad) {
            aa(ad, W)
        }
        while (X--) {
            Z = Y[X];
            U = ac[Z] || (ac[Z] = []);
            U.push([aa, ab]);
            T.addEventListener(Z, ab)
        }
    }
    function M(T, Y, aa, V) {
        Y = Y.split(i);
        var ab = f(T);
        var X = Y.length;
        var Z, U, W;
        if (!ab) {
            return
        }
        while (X--) {
            Z = Y[X];
            U = ab[Z];
            if (!U) {
                continue
            }
            W = U.length;
            while (W--) {
                if (U[W][0] === aa) {
                    T.removeEventListener(Z, U[W][1]);
                    U.splice(W, 1)
                }
            }
        }
    }
    function z(W, U, T) {
        var V = G(U);
        if (T) {
            O(V, T)
        }
        W.dispatchEvent(V)
    }
    function q(V) {
        var X = V
          , W = false
          , T = false;
        function U(Y) {
            if (W) {
                X();
                E(U);
                T = true;
                W = false
            } else {
                T = false
            }
        }
        this.kick = function(Y) {
            W = true;
            if (!T) {
                U()
            }
        }
        ;
        this.end = function(Z) {
            var Y = X;
            if (!Z) {
                return
            }
            if (!T) {
                Z()
            } else {
                X = W ? function() {
                    Y();
                    Z()
                }
                : Z;
                W = true
            }
        }
    }
    function P() {}
    function D(T) {
        T.preventDefault()
    }
    function m(T) {
        return !!j[T.target.tagName.toLowerCase()]
    }
    function w(T) {
        return (T.which === 1 && !T.ctrlKey && !T.altKey)
    }
    function N(V, W) {
        var U, T;
        if (V.identifiedTouch) {
            return V.identifiedTouch(W)
        }
        U = -1;
        T = V.length;
        while (++U < T) {
            if (V[U].identifier === W) {
                return V[U]
            }
        }
    }
    function p(U, T) {
        var V = N(U.changedTouches, T.identifier);
        if (!V) {
            return
        }
        if (V.pageX === T.pageX && V.pageY === T.pageY) {
            return
        }
        return V
    }
    function r(T) {
        if (!w(T)) {
            return
        }
        if (m(T)) {
            return
        }
        A(document, l.move, v, T);
        A(document, l.cancel, y, T)
    }
    function v(U, T) {
        u(U, T, U, B)
    }
    function y(U, T) {
        B()
    }
    function B() {
        M(document, l.move, v);
        M(document, l.cancel, y)
    }
    function S(U) {
        if (j[U.target.tagName.toLowerCase()]) {
            return
        }
        var V = U.changedTouches[0];
        var T = {
            target: V.target,
            pageX: V.pageX,
            pageY: V.pageY,
            identifier: V.identifier,
            touchmove: function(X, W) {
                s(X, W)
            },
            touchend: function(X, W) {
                I(X, W)
            }
        };
        A(document, g.move, T.touchmove, T);
        A(document, g.cancel, T.touchend, T)
    }
    function s(U, T) {
        var V = p(U, T);
        if (!V) {
            return
        }
        u(U, T, V, R)
    }
    function I(U, T) {
        var V = N(U.changedTouches, T.identifier);
        if (!V) {
            return
        }
        R(T)
    }
    function R(T) {
        M(document, g.move, T.touchmove);
        M(document, g.cancel, T.touchend)
    }
    function u(X, W, Y, V) {
        var U = Y.pageX - W.pageX;
        var T = Y.pageY - W.pageY;
        if ((U * U) + (T * T) < (e * e)) {
            return
        }
        t(X, W, Y, U, T, V)
    }
    function t(X, V, U, aa, Y, Z) {
        var W = X.targetTouches;
        var T = X.timeStamp - V.timeStamp;
        var ab = {
            altKey: X.altKey,
            ctrlKey: X.ctrlKey,
            shiftKey: X.shiftKey,
            startX: V.pageX,
            startY: V.pageY,
            distX: aa,
            distY: Y,
            deltaX: aa,
            deltaY: Y,
            pageX: U.pageX,
            pageY: U.pageY,
            velocityX: aa / T,
            velocityY: Y / T,
            identifier: V.identifier,
            targetTouches: W,
            finger: W ? W.length : 1,
            enableMove: function() {
                this.moveEnabled = true;
                this.enableMove = P;
                X.preventDefault()
            }
        };
        z(V.target, "movestart", ab);
        Z(V)
    }
    function L(U, T) {
        var V = T.timer;
        T.touch = U;
        T.timeStamp = U.timeStamp;
        V.kick()
    }
    function d(W, U) {
        var V = U.target;
        var T = U.event;
        var X = U.timer;
        c();
        x(V, T, X, function() {
            setTimeout(function() {
                M(V, "click", D)
            }, 0)
        })
    }
    function c() {
        M(document, l.move, L);
        M(document, l.end, d)
    }
    function C(V, U) {
        var T = U.event;
        var X = U.timer;
        var W = p(V, T);
        if (!W) {
            return
        }
        V.preventDefault();
        T.targetTouches = V.targetTouches;
        U.touch = W;
        U.timeStamp = V.timeStamp;
        X.kick()
    }
    function k(W, U) {
        var V = U.target;
        var T = U.event;
        var Y = U.timer;
        var X = N(W.changedTouches, T.identifier);
        if (!X) {
            return
        }
        o(U);
        x(V, T, Y)
    }
    function o(T) {
        M(document, g.move, T.activeTouchmove);
        M(document, g.end, T.activeTouchend)
    }
    function K(U, W, T) {
        var V = T - U.timeStamp;
        U.distX = W.pageX - U.startX;
        U.distY = W.pageY - U.startY;
        U.deltaX = W.pageX - U.pageX;
        U.deltaY = W.pageY - U.pageY;
        U.velocityX = 0.3 * U.velocityX + 0.7 * U.deltaX / V;
        U.velocityY = 0.3 * U.velocityY + 0.7 * U.deltaY / V;
        U.pageX = W.pageX;
        U.pageY = W.pageY
    }
    function x(V, U, W, T) {
        W.end(function() {
            z(V, "moveend", U);
            return T && T()
        })
    }
    function b(V) {
        if (V.defaultPrevented) {
            return
        }
        if (!V.moveEnabled) {
            return
        }
        var T = {
            startX: V.startX,
            startY: V.startY,
            pageX: V.pageX,
            pageY: V.pageY,
            distX: V.distX,
            distY: V.distY,
            deltaX: V.deltaX,
            deltaY: V.deltaY,
            velocityX: V.velocityX,
            velocityY: V.velocityY,
            identifier: V.identifier,
            targetTouches: V.targetTouches,
            finger: V.finger
        };
        var U = {
            target: V.target,
            event: T,
            timer: new q(W),
            touch: undefined,
            timeStamp: V.timeStamp
        };
        function W(X) {
            K(T, U.touch, U.timeStamp);
            z(U.target, "move", T)
        }
        if (V.identifier === undefined) {
            A(V.target, "click", D);
            A(document, l.move, L, U);
            A(document, l.end, d, U)
        } else {
            U.activeTouchmove = function(Y, X) {
                C(Y, X)
            }
            ;
            U.activeTouchend = function(Y, X) {
                k(Y, X)
            }
            ;
            A(document, g.move, U.activeTouchmove, U);
            A(document, g.end, U.activeTouchend, U)
        }
    }
    A(document, "mousedown", r);
    A(document, "touchstart", S);
    A(document, "movestart", b);
    if (!window.jQuery) {
        return
    }
    var a = ("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(" ");
    function J(T) {
        T.enableMove()
    }
    function H(T) {
        T.enableMove()
    }
    function F(T) {
        T.enableMove()
    }
    function h(T) {
        var U = T.handler;
        T.handler = function(X) {
            var V = a.length;
            var W;
            while (V--) {
                W = a[V];
                X[W] = X.originalEvent[W]
            }
            U.apply(this, arguments)
        }
    }
    jQuery.event.special.movestart = {
        setup: function() {
            A(this, "movestart", J);
            return false
        },
        teardown: function() {
            M(this, "movestart", J);
            return false
        },
        add: h
    };
    jQuery.event.special.move = {
        setup: function() {
            A(this, "movestart", H);
            return false
        },
        teardown: function() {
            M(this, "movestart", H);
            return false
        },
        add: h
    };
    jQuery.event.special.moveend = {
        setup: function() {
            A(this, "movestart", F);
            return false
        },
        teardown: function() {
            M(this, "movestart", F);
            return false
        },
        add: h
    }
});
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", undefined, "jquery.event.move"], a)
    } else {
        if ((typeof module !== "undefined" && module !== null) && module.exports) {
            module.exports = a
        } else {
            a(jQuery)
        }
    }
}
)(function(g, h) {
    var f = g.event.add
      , c = g.event.remove
      , d = function(j, i, k) {
        g.event.trigger(i, k, j)
    }
      , e = {
        threshold: 0.1,
        sensitivity: 2
    };
    function b(l) {
        var i, j, k;
        i = l.currentTarget.offsetWidth;
        j = l.currentTarget.offsetHeight;
        k = {
            distX: l.distX,
            distY: l.distY,
            velocityX: l.velocityX,
            velocityY: l.velocityY,
            finger: l.finger
        };
        if (l.distX > l.distY) {
            if (l.distX > -l.distY) {
                if (l.distX / i > e.threshold || l.velocityX * l.distX / i * e.sensitivity > 1) {
                    k.type = "swiperight";
                    d(l.currentTarget, k)
                }
            } else {
                if (-l.distY / j > e.threshold || l.velocityY * l.distY / i * e.sensitivity > 1) {
                    k.type = "swipeup";
                    d(l.currentTarget, k)
                }
            }
        } else {
            if (l.distX > -l.distY) {
                if (l.distY / j > e.threshold || l.velocityY * l.distY / i * e.sensitivity > 1) {
                    k.type = "swipedown";
                    d(l.currentTarget, k)
                }
            } else {
                if (-l.distX / i > e.threshold || l.velocityX * l.distX / i * e.sensitivity > 1) {
                    k.type = "swipeleft";
                    d(l.currentTarget, k)
                }
            }
        }
    }
    function a(i) {
        var j = g.data(i, "event_swipe");
        if (!j) {
            j = {
                count: 0
            };
            g.data(i, "event_swipe", j)
        }
        return j
    }
    g.event.special.swipe = g.event.special.swipeleft = g.event.special.swiperight = g.event.special.swipeup = g.event.special.swipedown = {
        setup: function(k, j, i) {
            var k = a(this);
            if (k.count++ > 0) {
                return
            }
            f(this, "moveend", b);
            return true
        },
        teardown: function() {
            var i = a(this);
            if (--i.count > 0) {
                return
            }
            c(this, "moveend", b);
            return true
        },
        settings: e
    }
});
