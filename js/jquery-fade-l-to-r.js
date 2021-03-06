/**
 * jQuery Diagonal Matrix Fade Plugin
 * Examples and documentation at: http://jonobr1.github.com/diagonalFade
 * Copyright (c) 2010 Jono Brandel
 * Version: .01 (18-MAY-2010)
 * Requires: jQuery v1.3.2 or later
 *
 * TODO:
 * + Extend Cycle or write own (based on jquery.cycle.lite.js)
 * + Make it so it's not just for a fixed container
 *
 * Copyright 2010 jonobr1
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(i) {
    void 0 == i.support && (i.support = {
        opacity: !i.browser.msie
    });
    i.fn.diagonalFade = function(n) {
        function l(j, e, f, h, g, k) {
            var c = f,
                b = true;
            if (h == "left-right" && g == "top-bottom" || h == "left-right" && g == "bottom-top") {
                c++;
                if (e[c])
                    for (f = 0; f < e[c].length; f++) {
                        var d = e[c][f] + 1;
                        j.children(":nth-child(" + d + ")").animate({
                            opacity: k
                        }, a.time, function() {
                            if (b) {
                                l(j, e, c, h, g, k);
                                b = false
                            }
                        })
                    } else i.isFunction(a.complete) && a.complete.apply(this)
            } else if (h == "right-left" && g == "top-bottom" || h == "right-left" && g == "bottom-top") {
                c--;
                if (c >= 0)
                    for (f = 0; f < e[c].length; f++) {
                        d = e[c][f] + 1;
                        j.children(":nth-child(" + d + ")").animate({
                            opacity: k
                        }, a.time, function() {
                            if (b) {
                                l(j, e, c, h, g, k);
                                b = false
                            }
                        })
                    } else i.isFunction(a.complete) && a.complete.apply(this)
            }
        }
        var a = i.extend({}, i.fn.diagonalFade.defaultOptions, n);
        return this.each(function() {
            for (var j = i(this), e = j.width(), f = j.height(), h = j.children(), g = i(h[0]).outerWidth(true), k = i(h[0]).outerHeight(true), e = Math.floor(e / g), f = Math.floor(f / k), k = [], g = [], c = 0, b = 0; b < f; b++) {
                k[b] = Array(e);
                for (var d = 0; d < e; d++)
                    if (h[b *
                            e + d] && h[b * e + d].offsetWidth > 0 && h[b * e + d].offsetHeight > 0) {
                        k[b][d] = c;
                        c++
                    }
            }
            switch (a.fade) {
                case "in":
                    var m = 1;
                    break;
                case "out":
                    m = 0
            }
            if (a.fadeDirection_y == "top-bottom" && a.fadeDirection_x == "left-right" || a.fadeDirection_y == "bottom-top" && a.fadeDirection_x == "right-left") {
                for (b = 0; b < f + e - 1; b++) {
                    h = b < e ? 0 : b - e + 1;
                    c = [];
                    for (d = b - (b < f ? 0 : b - f + 1); d >= h; d--) c.push(k[d][b - d]);
                    g.push(c)
                }
                if (a.fadeDirection_y == "top-bottom" && a.fadeDirection_x == "left-right") l(j, g, -1, a.fadeDirection_x, a.fadeDirection_y, m);
                else if (a.fadeDirection_y ==
                    "bottom-top" && a.fadeDirection_x == "right-left") {
                    c = g.length;
                    l(j, g, c, a.fadeDirection_x, a.fadeDirection_y, m)
                }
            } else if (a.fadeDirection_y == "bottom-top" && a.fadeDirection_x == "left-right" || a.fadeDirection_y == "top-bottom" && a.fadeDirection_x == "right-left") {
                for (b = 1 - f; b < e; b++) {
                    c = [];
                    for (d = 0; d < f; d++) b + d >= 0 && b + d < e && c.push(k[d][b + d]);
                    g.push(c)
                }
                if (a.fadeDirection_y == "bottom-top" && a.fadeDirection_x == "left-right") l(j, g, -1, a.fadeDirection_x, a.fadeDirection_y, m);
                else if (a.fadeDirection_y == "top-bottom" && a.fadeDirection_x ==
                    "right-left") {
                    c = g.length;
                    l(j, g, c, a.fadeDirection_x, a.fadeDirection_y, m)
                }
            }
        })
    };
    i.fn.diagonalFade.defaultOptions = {
        time: 100,
        fadeDirection_x: "left-right",
        fadeDirection_y: "top-bottom",
        fade: "out",
        complete: null
    }
})(jQuery);
