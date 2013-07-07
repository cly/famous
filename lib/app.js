define("0/a", ["require", "exports", "module"], function(require, exports, module) {
    /**
     * Defines some sort of class.
     * Takes in an DOM looking thing.
     * Creates a Node in a Singly Linked-List.
     * Looks like it is executing everything LIFO.
     */
    function Node(value) {
        this.value = value
        //this.next = void 0 // unnecessary
    }
    Node.prototype = {
        get: function() {
            return this.value
        }
      , append: function(value) {
            var node = new Node(value)
            this.set_next(node)
            return node
        }
      , set_next: function(node) {
            this.next = node
        }
      , execute: function() {
            var next = this.next
              , value = this.get()
              , next = next ? next.execute() : void 0

            if (value) {
                if ("function" == typeof value) {
                    return value(next)
                }
                if (value.u) {
                    return value.u(next)
                }

                var next = []
                  , key

                /**
                 * Looks like might be dead code.
                 */
                for (key in value) {
                    next.push(value[key].u())
                }
            }
            return next
        }}
    module.exports = Node
})

define("0/6", ["require", "exports", "module"], function(require, exports, module) {
    /**
     * Some sort of global event mediator.
     */
    function Module(initial_array) {
        this.some_array = []
        if (initial_array) {
            this.some_array = initial_array.slice(0)
        }
        this.events = {}
    }

    Module.prototype = {
        b: function(key, f) {
            f || (f = {})
            f.origin = this

            for (var i = 0; i < this.some_array.length; i++) {
                this.some_array[i].b(key, f)
            }

            var some_list = this.events[key]
            if (some_list) {
                for (var i = 0; i < some_list.length; i++) {
                    some_list[i].call(this, f)
                }
            }
        }
        // TODO: Probably dead code.
      , g: function(key, cb) {
            console.log('TODO', (new Error()).stack)
            this.events[key] || (this.events[key] = [])
            this.events[key].push(cb)
            return this
        }
      , on: function(key, cb) {
            this.events[key] || (this.events[key] = [])
            this.events[key].push(cb)
            return this
        }
    }
    module.exports = Module
})

define("0/3", ["require", "exports", "module", "./a", "./6"], function(require, exports, module, c, f) {
    function Module(a) {
        this.V = a
        this.ic = void 0
        this.fb = new f
    }

    Module.prototype = {
        Db: function(a) {
            return this.ic = new c(a)
        }
      , update: function() {
            this.ic && this.V.update(this.ic.execute())
        }
      , b: function(a, b) {
            this.fb.b(a, b)
        }
      , g: function(a, b) {
            this.fb.on(a, b)
        }
    }

    module.exports = Module
})

define("0/8", ["require", "exports", "module"], function(require, exports, module) {
    function Module(value) {
        this.value = value
        this.next = void 0
    }

    Module.prototype = {
        get: function() {
            return this.value
        }
      // , xe: function(next) {
      //       this.next = next
      //   }
      , b: function(c, f) {
            var a = this.get().b(c, f)

            a = "object" != typeof a ? [] : "string" == typeof a[0] ? [a] : a

            var b = []
              , next = this.next

            if (next) {
                for (var i = 0; i < a.length; i++) {
                    next.b(a[i][0], a[i][1])
                }
            }

            if (0 != b.length) {
                if (1 == b.length) {
                    return b[0]
                } else {
                    return b
                }
            }
        }
    }

    module.exports = Module
})

define("0/7", ["require", "exports", "module", "./8"], function(require, exports, module, c) {
    // Something related to event handler.
    function Module(c) {
        this.Kb = []
        c && this.m(c)
    }

    Module.prototype = {
        za: function(f) {
            f = new c(f)
            this.Kb.push(f)
            return f
        }
      , m: function(c) {
            "object" == typeof c && c.b && (c = [c])

            for (var i = 0; i < c.length; i++) {
                this.za(c[i])
            }
        }
      , reset: function() {
            this.Kb = []
        }
      , b: function(event_type, event) {
            event || (event = {})
            event.origin || (event.origin = this)

            for (var i = 0; i < this.Kb.length; i++) {
                this.Kb[i].b(event_type, event)
            }
        }
    }

    module.exports = Module
})

define("0/Matrix", ["require", "exports", "module"], function(require, exports, module) {
    /**
     * This module does matrix math.
     *
     * Primers:
     * See http://www.w3.org/TR/css3-transforms/#mathematical-description
     * http://lists.w3.org/Archives/Public/www-style/2010Sep/0257.html
     * http://dev.opera.com/articles/view/understanding-the-css-transforms-matrix/
     * http://fgiesen.wordpress.com/2012/02/12/row-major-vs-column-major-row-vectors-vs-column-vectors/
     * https://developer.mozilla.org/en-US/docs/CSS/transform#scale
     * http://en.wikipedia.org/wiki/Linear_transformation#Examples_of_linear_transformation_matrices
     * http://msdn.microsoft.com/en-us/library/ms533014(VS.85,loband).aspx
     * http://www.cs.brandeis.edu/~cs155/Lecture_07_6.pdf
     * http://www.cg.info.hiroshima-cu.ac.jp/~miyazaki/knowledge/teche23.html
     */
    var Module = {
        precision: 1e-6
      , identity: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      // , xg: function f(a, b) {
      //       /**
      //        * Seems like a and b are row-major.
      //        * More generic version of `multiply`.
      //        * Method not being used.
      //        *
      //        * h = [ a[0],  a[1],  a[2],  a[3],   [ b[0],  b[1],  b[2],  b[3],
      //        *       a[4],  a[5],  a[6],  a[7], x   b[4],  b[5],  b[6],  b[7],
      //        *       a[8],  a[9], a[10], a[11],     b[8],  b[9], b[10], b[11],
      //        *      a[12], a[13], a[14], a[15]]    b[12], b[13], b[14], b[15]]
      //        */
      //       var d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      //       d[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
      //       d[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
      //       d[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
      //       d[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
      //       d[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
      //       d[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
      //       d[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
      //       d[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
      //       d[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
      //       d[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
      //       d[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
      //       d[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
      //       d[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
      //       d[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
      //       d[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
      //       d[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];

      //       return 2 >= arguments.length ? d : f.apply(null, [d].concat(Array.prototype.slice.call(arguments, 2)))
      //   }
      , multiply: function multiply(a, b) {
            /**
             * Seems like a and b are row-major.
             * Very confusing since matrix3d is column-major.
             * Should be able to just call the method above.
             *
             * o = [ a[0],  a[1],  a[2], 0,   [ b[0],  b[1],  b[2], 0,
             *       a[4],  a[5],  a[6], 0, x   b[4],  b[5],  b[6], 0,
             *       a[8],  a[9], a[10], 0,     b[8],  b[9], b[10], 0,
             *      a[12], a[13], a[14], 1]    b[12], b[13], b[14], 1]
             */
            var o = [
                a[0]*b[0]+a[1]*b[4]+a[2]*b[8], a[0]*b[1]+a[1]*b[5]+a[2]*b[9], a[0]*b[2]+a[1]*b[6]+a[2]*b[10], 0
              , a[4]*b[0]+a[5]*b[4]+a[6]*b[8], a[4]*b[1]+a[5]*b[5]+a[6]*b[9], a[4]*b[2]+a[5]*b[6]+a[6]*b[10], 0
              , a[8]*b[0]+a[9]*b[4]+a[10]*b[8], a[8]*b[1]+a[9]*b[5]+a[10]*b[9], a[8]*b[2]+a[9]*b[6]+a[10]*b[10], 0
              , a[12]*b[0]+a[13]*b[4]+a[14]*b[8]+b[12], a[12]*b[1]+a[13]*b[5]+a[14]*b[9]+b[13]
              , a[12]*b[2]+a[13]*b[6]+a[14]*b[10]+b[14], 1
            ]

            if (arguments.length <= 2) {
                return o
            } else {
                return multiply.apply(null, [o].concat(Array.prototype.slice.call(arguments, 2)))
            }
        }
      , move: function(a, b) {
            // Column-major
            b[2] || (b[2] = 0)
            return [
                        a[0],         a[1],         a[2], 0
              ,         a[4],         a[5],         a[6], 0
              ,         a[8],         a[9],        a[10], 0
              , a[12] + b[0], a[13] + b[1], a[14] + b[2], 1
            ]
        }
      , translate: function(tx, ty, tz) {
            /**
             * ┌             ┐
             * | 1, 0, 0, tx |
             * | 0, 1, 0, ty |
             * | 0, 0, 1, tz |
             * | 0, 0, 0,  1 |
             * └             ┘
             */
            "number" != typeof tz && (tz = 0)
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1]
        }
      , scale: function(sx, sy, sz) {
            /**
             * ┌               ┐
             * | sx,  0,  0, 0 |
             * |  0, sy,  0, 0 |
             * |  0,  0, sz, 0 |
             * |  0,  0,  0, 1 |
             * └               ┘
             */
            "number" != typeof sz && (sz = 1)
            return [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0,  0, 1]
        }
      , rotate_x: function(angle) {
            // Counterclockwise rotation about x-axis.
            /**
             * Counterclockwise rotation about z-axis.
             * ┌                                ┐
             * |      1,      0,      0,     0  |
             * |      0,   cosa,  -sina,     0  |
             * |      0,   sina,   cosa,     0  |
             * |      0,      0,      0,     1  |
             * └                                ┘
             */
            var ca = Math.cos(angle)
              , sa = Math.sin(angle)

            return [1, 0, 0, 0, 0, ca, sa, 0, 0, -sa, ca, 0, 0, 0, 0, 1]
        }
      , rotate_y_cw: function(angle) {
            // TODO: Clockwise rotation about y-axis
            /**
             * Counterclockwise:
             * ┌                    ┐
             * |  ca,   0, -sa,   0 |
             * |   0,   1,   0,   0 |
             * |  sa,   0,  ca,   0 |
             * |   0,   0,   0,   1 |
             * └                    ┘
             *
             * Clockwise (what this is):
             * ┌                    ┐
             * |  ca,   0,  sa,   0 |
             * |   0,   1,   0,   0 |
             * | -sa,   0,  ca,   0 |
             * |   0,   0,   0,   1 |
             * └                    ┘
             */
            var ca = Math.cos(angle)
              , sa = Math.sin(angle)

            return [ca, 0, -sa, 0, 0, 1, 0, 0, sa, 0, ca, 0, 0, 0, 0, 1]
        }
      , rotate_z: function(angle) {
            /**
             * Counterclockwise rotation about z-axis.
             * ┌                                ┐
             * |   cosa,  -sina,      0,     0  |
             * |   sina,   cosa,      0,     0  |
             * |      0,      0,      1,     0  |
             * |      0,      0,      0,     1  |
             * └                                ┘
             */
            var ca = Math.cos(angle)
              , sa = Math.sin(angle)

            return [ca, sa, 0, 0, -sa, ca, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
      , rotate: function(a, b, d) {
            var h = Math.cos(a)
              , a = Math.sin(a)
              , s = Math.cos(b)
              , b = Math.sin(b)
              , e = Math.cos(d)
              , d = Math.sin(d)
              , g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

            g[0] = s * e
            g[1] = h * d + a * b * e
            g[2] = a * d - h * b * e
            g[4] = -s * d
            g[5] = h * e - a * b * d
            g[6] = a * e + h * b * d
            g[8] = b
            g[9] = -a * s
            g[10] = h * s
            return g
        }
      , get_css_transform: function(vector) {
            //TODO: Can be slightly optimized.
            vector = vector.slice(0)
            for (var i = 0; i < vector.length; i++) {
                if (Math.abs(vector[i]) < Module.precision) {
                    vector[i] = 0
                }
            }
            return "matrix3d(" + vector.join() + ")"
        }
      , Ba: function(a, b, c) {
            // Might be skew.
            /**
             * ┌                                ┐
             * |      1,   tanc,   tanb,     0  |
             * |      0,      1,   tana,     0  |
             * |      0,      0,      1,     0  |
             * |      0,      0,      0,     1  |
             * └                                ┘
             */
            return [1, 0, 0, 0, Math.tan(c), 1, 0, 0, Math.tan(b), Math.tan(a), 1, 0, 0, 0, 0, 1]
        }
      , get_translate: function(a) {
            return [a[12], a[13], a[14]]
        }
      , inverse: function(a) {
            /**
             * Assuming a looks like:
             * ┌                                ┐
             * |   a[0],   a[4],   a[8],  a[12] |
             * |   a[1],   a[5],   a[9],  a[13] |
             * |   a[2],   a[6],  a[10],  a[14] |
             * |      0,      0,      0,     1  |
             * └                                ┘
             *
             * The inverse treats the top 3x3 differently from the [a[12], a[13], a[14]] vector.
             */
            var d = a[5] * a[10] - a[6] * a[9]
              , h = a[4] * a[10] - a[6] * a[8]
              , s = a[4] * a[9] - a[5] * a[8]
              , e = a[1] * a[10] - a[2] * a[9]
              , g = a[0] * a[10] - a[2] * a[8]
              , j = a[0] * a[9] - a[1] * a[8]
              , k = a[1] * a[6] - a[2] * a[5]
              , m = a[0] * a[6] - a[2] * a[4]
              , w = a[0] * a[5] - a[1] * a[4]
              , det_a = 1 / (a[0] * d - a[1] * h + a[2] * s)

            var b = [
                det_a * d
              , -det_a * e
              , det_a * k
              , 0
              , -det_a * h
              , det_a * g
              , -det_a * m
              , 0
              , det_a * s
              , -det_a * j
              , det_a * w
              , 0
              , 0
              , 0
              , 0
              , 1
            ]

            b[12] = -a[12] * b[0] - a[13] * b[4] - a[14] * b[8]
            b[13] = -a[12] * b[1] - a[13] * b[5] - a[14] * b[9]
            b[14] = -a[12] * b[2] - a[13] * b[6] - a[14] * b[10]
            return b
        }
      , fa: function(a) {
            function distance(a, b, c) {
                c || (c = 0)
                return Math.sqrt(a * a + b * b + c * c)
            }
            var d = a[0] + distance(a[0], a[1], a[2])
              , h = 2 / (d * d + a[1] * a[1] + a[2] * a[2])
              , s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

            s[0] = 1 - h * d * d
            s[1] = -h * d * a[1]
            s[2] = -h * d * a[2]
            s[5] = 1 - h * a[1] * a[1]
            s[6] = -h * a[1] * a[2]
            s[10] = 1 - h * a[2] * a[2]
            s[4] = s[1]
            s[8] = s[2]
            s[9] = s[6]
            d = Module.multiply(a, s)
            h = distance(d[5], d[6])
            0 < d[5] && d[5] != h && (h *= -1)

            var h = d[5] + h
              , e = 2 / (h * h + d[6] * d[6])
              , j = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

            j[5] = 1 - e * h * h
            j[6] = -e * h * d[6]
            j[9] = j[6]
            j[10] = 1 - e * d[6] * d[6]
            s = Module.multiply(s, j)
            d = Module.multiply(a, s)
            h = Module.scale(0 > d[0] ? -1 : 1, 0 > d[5] ? -1 : 1, 0 > d[10] ? -1 : 1)
            d = Module.multiply(h, d)
            s = Module.multiply(s, h)
            h = {}
            h.translate = Module.get_translate(a)
            h.rotate = [Math.atan2(-s[6], s[10]), Math.asin(s[2]), Math.atan2(-s[1], s[0])]
            h.rotate[0] || (h.rotate[0] = 0, h.rotate[2] = Math.atan2(s[4], s[5]))
            h.scale = [d[0], d[5], d[10]]
            h.Ba = [Math.atan(d[9] / h.scale[2]), Math.atan(d[8] / h.scale[2]), Math.atan(d[4] / h.scale[0])]
            return h
        }
      , jf: function(a) {
            var b = Module.scale(a.scale[0], a.scale[1], a.scale[2])
              , d = Module.Ba(a.Ba[0], a.Ba[1], a.Ba[2])
              , h = Module.rotate(a.rotate[0], a.rotate[1], a.rotate[2])

            return Module.move(Module.multiply(b, d, h), a.translate)
        }
      , equal: function(a, b) {
            if (!a || !b) {
                return false
            }

            if (a == b) {
                return true
            }

            for (var i = 0, ii = a.length; i < ii; i++) {
                if (Math.abs(a[i] - b[i]) >= Module.precision) {
                    return false
                }
            }
            return true
        }
      , Sc: function(a) {
            a = a.slice(0)
            if (a[0] == Math.PI / 2 || a[0] == -Math.PI / 2) {
                a[0] = -a[0]
                a[1] = Math.PI - a[1]
                a[2] -= Math.PI
            }

            if (a[0] > Math.PI / 2) {
                a[0] -= Math.PI
                a[1] = Math.PI - a[1]
                a[2] -= Math.PI
            }

            if (a[0] < -Math.PI / 2) {
                a[0] += Math.PI
                a[1] = -Math.PI - a[1]
                a[2] -= Math.PI
            }

            while (a[1] < -Math.PI) {
                a[1] += 2 * Math.PI
            }

            while (a[1] >= Math.PI) {
                a[1] -= 2 * Math.PI
            }

            while (a[2] < -Math.PI) {
                a[2] += 2 * Math.PI
            }

            while (a[2] >= Math.PI) {
                a[2] -= 2 * Math.PI
            }

            return a
        }
    }

    module.exports = Module
})

define("0/c", ["require", "exports", "module", "./Matrix"], function(require, exports, module, Matrix) {
    function Module(a, d) {
        this.K = a
        this.R = {}
        this.Xb = {}
        this.Qc = {}
        this.Yb = {}
        this.Zb = {}
        this.Oa = {}
        this.i = {}
        this.pd = {}
        this.pf = {
            K: this.K
          , bb: []
          , Rc: 0
        }
        this.a = d
        this.a || (this.a = {})
        this.a.Ge || (this.a.Ge = "surface")
        this.a.Ud || (this.a.Ud = "group")
        this.a.fe || (this.a.fe = 30)
        this.a.Rb || (this.a.Rb = 0)
        this.a.ea || (this.a.ea = "c")
        this.a.size || (this.a.size = [a.offsetWidth, a.offsetHeight])
    }

    function c(b, d) {
        var css_transform = Matrix.get_css_transform(d)

        if (document.body.style.webkitTransform !== void 0) {
            b.style.webkitTransform = css_transform
        } else {
            b.style.transform = css_transform
        }
    }

    Module.prototype = {
        wc: function(a) {
            var d = {}
              , h = {}
              , c = {}
              , e = {}
              , g = {}
              , j = {}
              , k = {}

            if (a) {
                if ("undefined" != typeof a.id) {
                    this.pd[a.id] = a
                    h[a.id] = Matrix.identity
                    d[a.id] = 1
                } else if ("number" == typeof a.length) {
                    for (var i = 0, ii = a.length; i < ii; i++) {
                        var w = i.toString() + "A"
                          , r = this.wc(a[i])

                        for (var key in r.$b) {
                            d[key] = r.$b[key]
                        }

                        for (var key in r.v) {
                            h[key] = r.v[key]
                        }

                        for (var key in r.Ob) {
                            c[key] = r.Ob[key]
                        }

                        for (var key in r.i) {
                            e[key] = w + r.i[key]
                        }

                        for (var key in r.Sb) {
                            g[w + key] = r.Sb[key]
                        }

                        for (var key in r.Qb) {
                            j[w + key] = r.Qb[key]
                        }

                        for (var key in r.Pb) {
                            k[w + key] = r.Pb[key]
                        }
                    }
                } else if (a.target) {
                    var G = a.target

                    if ("object" == typeof a.transform) {
                        var t = a.transform
                    } else {
                         var t = Matrix.identity
                    }

                    if ("number" == typeof a.opacity) {
                        var r = a.opacity
                    } else {
                        var r = 1
                    }

                    var group = a.group
                      , a = a.ea

                    if (group) {
                        g.X = t
                        j.X = r
                    }

                    var I = this.wc(G)
                      , G = I.v
                      , p = I.$b
                      , y = I.Ob
                      , M = I.i
                      , O = I.Sb
                      , W = I.Qb
                      , I = I.Pb

                    for (m in G)
                        G.hasOwnProperty(m) && (h[m] = group || M.hasOwnProperty(m) ? G[m] : Matrix.multiply(G[m], t), d[m] = group || M.hasOwnProperty(m) ? p[m] : r * p[m], c[m] = y[m] || a, M.hasOwnProperty(m) ? e[m] = M[m] : group && (e[m] = "X"));

                    /*
                    for (var key in G) {
                        if (G.hasOwnProperty(key)) {

                            if (group) {
                                h[key] = group
                            } else if (M.hasOwnProperty(key)) {
                                h[key] = G[key]
                            } else {
                                h[key] = Matrix.multiply(G[key], t)
                            }

                            if (group) {
                                d[key] = group
                            } else if (M.hasOwnProperty(key)) {
                                d[key] = p[key]
                            } else {
                                d[key] = r * p[key]
                            }

                            c[key] = y[key] || a

                            if (M.hasOwnProperty(key)) {
                                e[key] = M[key]
                            } else if (group) {
                                e[key] = "X"
                            }
                        }
                    }
                    */

                    for (var key in O) {
                        if (O.hasOwnProperty(key)) {
                            g[key] = Matrix.multiply(O[key], t)
                        }
                    }

                    for (var key in W) {
                        if (W.hasOwnProperty(key)) {
                            j[key] = r * W[key]
                        }
                    }

                    for (var key in I) {
                        if (I.hasOwnProperty(key)) {
                            k[key] = I[key]
                        }
                    }
                }
            }

            return {
                v: h
              , i: e
              , Sb: g
              , $b: d
              , Qb: j
              , Ob: c
              , Pb: k
            }
        }

      , Xe: function(a) {
            var d = {}, h = [], c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var f = this.Oa[c];
                    f && (d.hasOwnProperty(f) ? h.push(f) : d[f] = a[c])
                }
            for (c = 0; c < h.length; c++)
                d.hasOwnProperty(h[c]) && delete d[h[c]];
            return d
        }
        /*
      , Xe: function(a) {
            var d = {}
              , h = []

            for (var key in a) {
                if (a.hasOwnProperty(key)) {
                    var f = this.Oa[key]

                    if (f) {
                        if (d.hasOwnProperty(f)) {
                            h.push(f)
                        } else {
                            d[f] = a[key]
                        }
                    }
                }
            }

            for (var i = 0; i < h.length; i++) {
                if (d.hasOwnProperty(h[i])) {
                    delete d[h[i]]
                }
            }

            return d
        }
        */

       , af: function(a) {
            for (var d in this.Oa)
                this.Oa.hasOwnProperty(d) && (this.Oa[d] = a[this.Oa[d]]);
            var h = {};
            for (d in this.i)
                if (this.i.hasOwnProperty(d))
                    if (a.hasOwnProperty(d)) {
                        h.hasOwnProperty(a[d]) || (h[a[d]] = []);
                        for (var c = 0; c < this.i[d].length; c++)
                            this.i[d][c].hb = 
                            a[d], h[a[d]].push(this.i[d][c])
                    } else
                        for (c = 0; c < this.i[d].length; c++)
                            delete this.i[d][c].hb;
            this.i = h
        }
        /*
      , af: function(a) {
            var h = {}

            for (var key in this.Oa) {
                if (this.Oa.hasOwnProperty(key)) {
                    this.Oa[key] = a[this.Oa[key]]
                }
            }

            for (var key in this.i) {
                if (this.i.hasOwnProperty(key)) {
                    if (a.hasOwnProperty(key)) {
                        h.hasOwnProperty(a[key]) || (h[a[key]] = [])
                        for (var i = 0; i < this.i[key].length; i++) {
                            this.i[key][i].hb = a[key]
                            h[a[key]].push(this.i[key][i])
                        }
                    } else {
                        for (var i = 0; i < this.i[key].length; i++) {
                            delete this.i[key][i].hb
                        }
                    }
                }
            }

            this.i = h
        }
        */
      , ud: function(a, d) {
            d = d || this.a.ea
            if ("tl" == d)
                return a
            var h = 0
            if ("r" == d || "tr" == d || "br" == d)
                h = this.a.size[0]
            else if (!d || "t" == d || "c" == d || "b" == d)
                h = 0.5 * this.a.size[0]
            var c = 0
            if ("bl" == d || "b" == d || "br" == d)
                c = this.a.size[1]
            else if (!d || "l" == d || "c" == d || "r" == d)
                c = 0.5 * this.a.size[1]
            return Matrix.move(a, [h, c, 0])
        }
      , Ue: function(a, d, h) {
            h = h || this.a.ea
            if ("tl" == h)
                return d
            var c = 0
            if ("r" == h || "tr" == h || "br" == h)
                c = -a[0]
            else if (!h || "t" == h || "c" == h || "b" == h)
                c = -0.5 * a[0]
            var e = 0
            if ("bl" == h || "b" == h || "br" == h)
                e = -a[1]
            else if (!h || "l" == h || "c" == h || "r" == h)
                e = -0.5 * a[1]
            return Matrix.move(d, [c, e, 0])
        }
      , update: function(a) {
            var d = this.wc(a)
              , a = d.v
              , h = d.i
              , c = d.$b
              , e = d.Ob
              , g = d.Sb
              , j = d.Qb
              , d = d.Pb
              , k = this.Xe(h)

            this.af(k)

            for (var key in this.R) {
                a.hasOwnProperty(key) || this.detach(key)
            }

            for (var key in a) {
                if (a.hasOwnProperty(key)) {
                    var temp = h.hasOwnProperty(key) ? Matrix.multiply(a[key], g[h[key]]) : a[key]
                    this.fg(key, a[key], h[key], c[key], e[key], temp)
                }
            }

            for (var key in g) {
                if (g.hasOwnProperty(key)) {
                    this.eg(key, g[key], j[key], d[key])
                }
            }
        }
      , eg: function(a, d, h, e) {
            if (a = this.i[a]) {
                for (var i = 0; i < a.length; i++) {
                    if (!Matrix.equal(a[i].ee, d)) {
                        a[i].ee = d
                        var j = Matrix.multiply(Matrix.translate(0, 0, this.a.Rb), this.ud(d, e))
                        c(a[i].K, j)
                    }

                    if (a[i].opacity != h) {
                        a[i].opacity = h
                        a[i].K.style.opacity = h
                    }
                }
            }
        }
      , ff: function(a, d) {
            this.i[a] || (this.i[a] = [])
            var h = this.i[a]
            d.hb = a
            h.push(d)
        }
      , Uf: function(a) {
            this.i.hasOwnProperty(a) || (this.i[a] = [])

            var d = this.i[a]
              , c = this.a.fe

            for (var i = 0; i < d.length && !(0 < d[i].bb.length || d[i].Rc < c); ) {
                i++
            }

            // K is a DOM element
            if (i >= d.length) {
                var element = document.createElement("div")
                element.classList.add(this.a.Ud)
                this.K.appendChild(element)
                d.push({
                    hb: a
                  , K: element
                  , Rc: 0
                  , bb: []
                })
            }
            return d[i]
        }
      , fg: function(a, d, h, e, g) {
            var j = this.pd[a]
              , k = this.Qc[a]

            if (k && h) {
                k.hb || this.ff(h, k)
                k.hb != h && this.detach(a)
            }

            this.Oa[a] = h
            this.R[a] || this.ef(a, h)
            k = this.R[a]

            if (j.wa || this.Xb[a]) {
                j.bg(k)
                this.Xb[a] = false
            }

            d = this.Ue(j.Kc(), d, g)

            if (!Matrix.equal(d, this.Yb[a])) {
                this.Yb[a] = d
                if (h) {
                    h = Matrix.move(d, [0, 0, -this.a.Rb])
                    c(k, h)
                } else {
                    c(k, this.ud(d, g))
                }
            }

            if (e != this.Zb[a]) {
                this.Zb[a] = e
                k.style.opacity = 0.999999 < e ? 0.999999 : e
            }
        }
      , ef: function(a, d) {
            var h = d != void 0 ? this.Uf(d) : this.pf
              , c

            if (h.bb.length) {
                c = h.bb.pop()
            } else {
                h.Rc++
                c = document.createElement("div")
                c.classList.add(this.a.Ge)
                h.K.appendChild(c)
            }

            this.Qc[a] = h
            this.R[a] = c
            this.Xb[a] = true
            return c
        }
      , detach: function(a) {
            var d = this.R[a]
            delete this.R[a]
            delete this.Yb[a]
            delete this.Zb[a]
            d && (this.pd[a].lf(d), this.Qc[a].bb.push(d), c(d, Matrix.scale(0, 0, 0)))
            this.Xb[a] = true
        }
      , fc: function(a) {
            this.a.ea = a
        }
      , ka: function(a) {
            this.a.size = a.slice(0)
            this.Yb = {}
            this.Zb = {}
            for (var key in this.i) {
                var a = this.i[key]
                for (var i = 0; i < a.length; i++) {
                    delete a[i].ee
                    delete a[i].opacity
                }
            }
        }
    }

    module.exports = Module
})

define("0/4", ["require", "exports", "module", "./3", "./7", "./c"]
, function(require, exports, module, f, k, a) {
    var K = new k

    var last_frame_at = (new Date).getTime()
      , b = []
      , h = []
      , d = []
      , fps = void 0

    function c(a) {
        h.push(a)
    }

    function on_resize() {
        if (document.activeElement && "INPUT" == document.activeElement.nodeName) {
            document.activeElement.addEventListener("blur", function listener() {
                this.removeEventListener("blur", listener)
                on_resize()
            })
        } else {
            window.scrollTo(0, 0)
            c(function() {
                var width = window.innerWidth
                  , height = window.innerHeight

                for (var i = 0, ii = b.length; i < ii; i++) {
                    b[i].b("resize")
                    var h = b[i].V
                    h && h.ka([width, height])
                }
            })
        }
    }

    requestAnimationFrame(function cb() {
        var now = (new Date).getTime()

        fps = 1000 / (now - last_frame_at)
        last_frame_at = now

        for (var i = 0; i < d.length; i++) {
            var c = d[i]
            if ("function" == typeof c) {
                c.call(this)
            } else {
                c.update()
            }
        }

        for (var i = 0; i < h.length; i++) {
            h[i].call(this)
        }
        h = []

        for (var i = 0; i < b.length; i++) {
            b[i].update()
        }

        requestAnimationFrame(cb)
    })

    window.addEventListener("resize", on_resize)
    on_resize()

    window.addEventListener("touchmove", function(event) {
        event.preventDefault()
    })

    var event_types = [
        "touchstart", "touchmove", "touchend", "touchcancel", "click", "keydown", "keyup", "keypress", "mouseenter"
      , "mousemove", "mouseleave"
    ]

    for (var i = 0; i < event_types.length; i++) {
        ;(function(event_type) {
            document.body.addEventListener(event_type, function(event) {
                K.b(event_type, event)
            })
        }).call(this, event_types[i])
    }

    module.exports = {
        C: function(a) {
            0 > d.indexOf(a) && d.push(a)
        }
      , nb: function(a) {
            a = d.indexOf(a)
            0 <= a && d.splice(a, 1)
        }
      , reset: function(a) {
            d = a.slice(0)
        }
      , m: function(a) {
            return K.m(a)
        }
      , za: function(a) {
            return K.za(a)
        }
        /* Not used
      , Xf: function() {
            return eventMultiplex.Xf()
        }
        */
      , Kd: function(d) {
            if (!d) {
                d = document.createElement("div")
                console.warn("Tried to create context on non-existent element")
            }
            var c = d.V ? d.V : new a(d, {Rb: -100000})
            d.V = c
            d = new f(c)
            b.push(d)
            return d
        }
        /* Not used
      , rg: function() {
            return fps
        }
        */
      , Pc: c
    }
})

define("0/b", ["require", "exports", "module", "./7", "./6"], function(require, exports, module, c, f) {
    function Module(a, b) {
        this.id = Module.num_instances++
        this.D = {}
        this.Y = {}
        this.content = ""
        this.wa = false
        this.classList = []
        this.sc = [] //dom class names
        var d = this
        this.listener = function(a) {
            d.b(a.type, a)
        }
        this.Dc = new c
        this.fb = new f
        this.size = void 0
        "object" == typeof a && this.ka(a)
        "undefined" != typeof b && this.T(b)
        Module.instances[this.id] = this
    }
    Module.num_instances = 0
    Module.instances = {}
    // Module.get_instance_by_id = function(a) {
    //     return Module.instances[a]
    // }
    Module.event_types = ["touchstart", "touchmove", "touchend", "touchcancel", "click"]
    Module.prototype = {
        g: function(a, b) {
            this.fb.on(a, b)
        }
      , b: function(a, b) {
            b && (b.origin = this)
            this.fb.b(a, b)
            this.Dc.b(a, b)
        }
      , u: function() {
            return this
        }
      , m: function(a) {
            return this.Dc = new c(a)
        }
      , pb: function(a) {
            for (key in a) {
                if (a.hasOwnProperty(key)) {
                    this.Y[key] = a[key]
                    this.wa = true
                }
            }
        }
      , h: function(a) {
            if (0 > this.classList.indexOf(a)) {
                this.classList.push(a)
                this.wa = true
            }
        }
      , T: function(a) {
            if (this.content != a) {
                this.content = a
                this.wa = true
            }
        }
      , add_all_event_listeners: function(element) {
            for (var key in this.D) {
                if (this.D.hasOwnProperty(key)) {
                    element.addEventListener(key, this.listener)
                }
            }

            var event_types = Module.event_types
            for (var i = 0; i < event_types.length; i++) {
                element.addEventListener(event_types[i], this.listener)
            }
        }
      , remove_all_event_listeners: function(element) {
            for (var key in this.D) {
                if (this.D.hasOwnProperty(key)) {
                    element.removeEventListener(key, this.listener)
                }
            }

            var event_types = Module.event_types
            for (var i = 0; i < event_types.length; i++) {
                element.removeEventListener(event_types[i], this.listener)
            }
        }
      , wd: function(a) {
            for (var i = 0; i < this.sc.length; i++) {
                a.classList.remove(this.sc[i])
            }

            this.sc = []
        }
      , bg: function(a) {
            if (this.size) {
                a.style.width = this.size[0] + "px"
                a.style.height = this.size[1] + "px"
            } else {
                this.rc = void 0
            }

            for (var key in this.Y) {
                if (this.Y.hasOwnProperty(key)) {
                    a.style[key] = this.Y[key]
                }
            }

            b = this.classList
            this.wd(a)

            for (var i = 0; i < b.length; i++) {
                a.classList.add(b[i])
            }

            this.Ld(a)
            this.add_all_event_listeners(a)
            this.wa = false
            this.xb = a
        }
      , lf: function(a) {
            this.bd()
            a.style.width = ""
            a.style.height = ""

            for (var key in this.Y) {
                if (this.Y.hasOwnProperty(key)) {
                    a.style[key] = ""
                }
            }

            this.wd(a)

            var class_list = this.classList
            for (var d = 0; d < class_list.length; d++) {
                a.classList.remove(class_list[d])
            }

            this.remove_all_event_listeners(a)
            this.xb = void 0
        }
      , Ld: function(a) {
            a.innerHTML = this.content
            this.b("deploy", a)
        }
      , bd: function() {
        }
      , Kc: function() {
            if (this.size) {
                return this.size.slice(0)
            }

            if (this.xb) {
                if (this.rc) {
                    return this.rc.slice(0)
                }

                var a = this.xb.offsetWidth
                  , b = this.xb.offsetHeight

                a && b && (this.rc = [a, b])
                return [a, b]
            }
            return [0, 0]
        }
      , ka: function(a) {
            this.size = a.slice(0, 2)
            this.wa = true
        }
    }

    module.exports = Module
})

define("0/2", ["require", "exports", "module", "./c", "./b", "./a"], function(require, exports, module, c, f, a) {
    //This thing extends ./b
    function Module() {
        f.apply(this, arguments)
        this.K = document.createElement("div")
        this.K.classList.add("container-surface")
        this.Ib = document.createElement("div")
        this.Ib.appendChild(this.K)
        this.V = new c(this.K, {size: this.size})
        this.wa = true
        this.Eb = void 0
    }

    Module.prototype = {
        Ld: function(a) {
            if (this.Ia) {
                if (this.Ia == a)
                    return
                this.bd()
            }
            a.innerHTML = ""
            this.Ia = a
            this.Ia.appendChild(this.Ib.removeChild(this.Ib.firstChild))
        }
      , bd: function() {
            this.Ib.appendChild(this.Ia.removeChild(this.Ia.firstChild))
            this.Ia = void 0
        }
      , update: function(a) {
            this.V.update(a)
        }
      , u: function(a) {
            !a && this.Eb && (a = this.Eb.execute())
            this.update(a)
            return f.prototype.u.call(this)
        }
      , Db: function(b) {
            return this.Eb = new a(b)
        }
      , fc: function(a) {
            this.V.fc(a)
        }
      , ka: function(a) {
            f.prototype.ka.apply(this, arguments)
            this.V && this.V.ka(a)
        }
    }

    for (var key in f.prototype) {
        if (f.prototype.hasOwnProperty(key)) {
            if (!Module.prototype.hasOwnProperty(key)) {
                Module.prototype[key] = f.prototype[key]
            }
        }
    }

    module.exports = Module
})

define("0/e", ["require", "exports", "module"], function(require, exports, module) {
    /**
     * These look like easing functions.
     *
     * http://www.gizma.com/easing/
     * http://developer.yahoo.com/yui/docs/Easing.js.html
     */
    function Module(c) {
        this.ca = null
        this.zb = []
        this.xc = []
        this.ce = 0
        this.Ta({
            duration: 500
          , q: Module.w.linear
        })
        this.set(c)
    }

    // Input is current time/duration = c
    Module.w = {
        linear: function(c) {
            return c
        }
      , ease_in_quad: function(c) {
            return c * c
        }
      , ease_out_quad: function(c) {
            return c * (2 - c)
        }
      , ease_in_out_quad: function(c) {
            if (0.5 >= c) {
                return 2 * c * c
            } else {
                return -2 * c * c + 4 * c - 1
            }
        }
      , sf: function(c) {
            // This is just c * (2.25 - 1.25c) = 2.25c - 1.25cc
            return c * (2.25 - 1.25 * c)
        }
      , hc: function(c) {
            return (1 - c) * Math.sin(6 * Math.PI * c) + c
        }
    }

    Module.prototype = {
        Cd: function() {
            if (0 >= this.zb.length) {
                this.set(this.state)
            } else {
                this.ca = this.zb.shift()
                this.startTime = this.getTime()
                this.Fe = this.xd(this.state)
            }
        }
      , df: function(c) {
            if (this.ca && (c || (c = this.getTime()), this.ce != c)) {
                this.ce = c
                var f = this.Fe
                  , a = this.ca[0]
                  , b = this.ca[2]
                  , c = (c - this.startTime) / this.ca[1]
                  , d = Math.min(Math.max(c, 0), 1)

                if ("object" == typeof this.state) {
                    for (var key in this.state) {
                        if (this.state.hasOwnProperty(key)) {
                            this.state[key] = this.Ad(f[key], a[key], b(d))
                        }
                    }
                } else {
                    this.state = this.Ad(f, a, b(d))
                }

                if (1 <= c) {
                    f = this.xc.shift()
                    this.Cd()
                    f && f()
                }
            }
        }
      , Ad: function(c, f, a) {
            return (1 - a) * c + a * f
        }
      , xd: function(c) {
            if ("object" == typeof c) {
                if (c.slice) {
                    return c.slice(0)
                }

                var f = {}
                for (var key in c) {
                    if (c.hasOwnProperty(key)) {
                        f[key] = c[key]
                    }
                }

                return f
            }
            return c
        }
      , $e: function(c) {
            var f = this.yd
              , a = {
                    q: f.q
                }

            if (f.duration) {
                a.duration = f.duration
            }

            if (f.speed) {
                a.speed = f.speed
            }

            if ("boolean" == typeof c) {
                return a
            }

            if ("number" == typeof c.duration) {
                a.duration = c.duration
            }

            if (c.q) {
                a.q = c.q
            }

            if (c.speed) {
                a.speed = c.speed
            }

            return a
        }
      , Ta: function(c) {
            this.yd = {}

            for (var key in c) {
                if (c.hasOwnProperty(key)) {
                    this.yd[key] = c[key]
                }
            }
        }
      , set: function(c, f, a) {
            if (f) {
                f = this.$e(f)

                if (f.speed) {
                    var b = this.get()
                      , d = 0

                    if ("object" == typeof b) {
                        for (var key in b) {
                            if (b.hasOwnProperty(key)) {
                                d += Math.pow(c[key] - b[key], 2)
                            }
                        }
                    } else {
                        d = Math.pow(c - b, 2)
                    }

                    f.duration = Math.sqrt(d) / f.speed
                }
                this.zb.push([c, f.duration, f.q])
                this.xc.push(a)
                this.ca || this.Cd()
            } else {
                this.startTime = 0
                this.Fe = this.state = this.xd(c)
                this.ca = null
                this.zb = []
                this.xc = []
                a && a()
            }
        }
      , getTime: function() {
            return this.Of ? this.Of : (new Date).getTime()
        }
      , get: function(c) {
            this.df(c)
            return this.state
        }
      , Tb: function() {
            return !!this.ca
        }
      , n: function() {
            this.set(this.get())
        }
    }

    module.exports = Module
})

define("0/d", ["require", "exports", "module", "./Matrix", "./e"], function(require, exports, module, Matrix, f) {
    function Module(a, b, d) {
        if (!a) {
            a = Matrix.identity
        }

        if ("number" != typeof b) {
            b = 1
        }

        this.qa = new f([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1])
        this.ac = new f(b)
        this.setTransform(a)
        this.Ua(b)
        this.fc(d)
    }

    Module.zd = function(a) {
        return [].concat(a.translate, a.rotate, a.Ba, a.scale)
    }

    Module.Ze = function(a) {
        return {
            translate: [a[0], a[1], a[2]]
          , rotate: [a[3], a[4], a[5]]
          , Ba: [a[6], a[7], a[8]]
          , scale: [a[9], a[10], a[11]]
        }
    }

    Module.prototype = {
        O: function() {
            return this.qa.Tb() ? Matrix.jf(Module.Ze(this.qa.get())) : this.Hc
        }
      , setTransform: function(a, b, d) {
            if (b) {
                if (this.Gd) {
                    this.qa.set(Module.zd(Matrix.fa(this.Hc)))
                    this.Gd = false
                }
                this.qa.set(Module.zd(Matrix.fa(a)), b, d)
            } else {
                this.qa.n()
                this.Gd = true
            }
            this.Hc = a
        }
      , Jc: function() {
            return this.ac.get()
        }
      , Ua: function(a, b, d) {
            this.ac.set(a, b, d)
        }
      , fc: function(value) {
            this.ea = value
        }
      , ve: function(a) {
            this.qa.Ta(a)
            this.ac.Ta(a)
        }
      , n: function() {
            this.qa.n()
            this.ac.n()
        }
      , jb: function() {
            return this.qa.Tb()
        }
      , u: function(a) {
            return {
                transform: this.O()
              , opacity: this.Jc()
              , ea: this.ea
              , target: a
            }
        }
    }

    module.exports = Module
})

define("0/1", ["require", "exports", "module", "./a"], function(require, exports, module, c) {
    function Module() {
        this.reset()
    }

    Module.prototype = {
        f: function(f) {
            f = new c(f)
            this.R.push(f)
            return f
        }
      , reset: function() {
            this.R = []
        }
      , u: function() {
            var c = []
            for (var i = 0, ii = this.R.length; i < ii; i++) {
                c.push(this.R[i].execute())
            }
            return c
        }
    }

    module.exports = Module
})

define("0/5", ["require", "exports", "module", "./7"], function(require, exports, module, f) {
    function g() {
    }

    g.prototype.b = function(a, b) {
        return [a, b]
    }

    function Module(a) {
        this.Fb = {}
        this.zc = a
    }

    Module.prototype = {
        Aa: function(value) {
            this.zc = value
        }
      , L: function(a) {
            this.Fb[a] || (this.Fb[a] = new f(new g))
            return this.Fb[a]
        }
      , b: function(a, b) {
            if ("undefined" != typeof this.zc) {
                b || (b = {})
                b.origin = this
                var d = this.Fb[this.zc]
                if (d)
                    return d.b(a, b)
            }
        }
    }

    module.exports = Module
})

define("1/g", ["require", "exports", "module", "0/Matrix", "0/e"], function(require, exports, module, Matrix, f) {
    function Module(a) {
        this.a = a
        this.a || (this.a = {})
        this.a.hasOwnProperty("xBounds") || (this.a.nc = [-Infinity, Infinity])
        this.a.hasOwnProperty("yBounds") || (this.a.oc = [-Infinity, Infinity])
        this.a.hasOwnProperty("zBounds") || (this.a.pc = [-Infinity, Infinity])
        this.Qa = new f([0, 0, 0])
        this.Sa = new f([0, 0, 0])
        this.Ca = new f([0, 0, 0])
        this.Qa.Ta({duration: 3000,q: f.w.ease_out_quad})
        this.Sa.Ta({duration: 1000,q: f.w.ease_out_quad})
        this.Ca.Ta({duration: 1000,q: f.w.ease_out_quad})
    }

    Module.prototype = {
        ab: function() {
            var a = this.Qa.get()
              , b = this.Sa.get()
              , d = this.Ca.get()
              , d = Matrix.rotate(-d[0], -d[1], -d[2])
              , b = Matrix.multiply(Matrix.rotate_z(b[2])
              , Matrix.rotate_y_cw(b[1])
              , Matrix.rotate_x(b[0]))
              , h = Matrix.translate(a[0], a[1], a[2])
              , a = Matrix.translate(-a[0], -a[1], -a[2])

            return Matrix.multiply(a, b, h, d, a)
        }
      , u: function(a) {
            a || (a = [])
            return {
                transform: this.ab()
              , target: a
              , group: true
            }
        }
      , jb: function() {
            return this.Qa.Tb() || this.Ca.Tb()
        }
      , n: function() {
            this.Qa.n()
            this.Sa.n()
            this.Ca.n()
        }
      , F: function() {
            return this.Qa.get()
        }
      , s: function(a, b, d) {
            a[0] < this.a.nc[0] && (a[0] = this.a.nc[0])
            a[0] > this.a.nc[1] && (a[0] = this.a.nc[1])
            a[1] < this.a.oc[0] && (a[1] = this.a.oc[0])
            a[1] > this.a.oc[1] && (a[1] = this.a.oc[1])
            a[2] < this.a.pc[0] && (a[2] = this.a.pc[0])
            a[2] > this.a.pc[1] && (a[2] = this.a.pc[1])
            this.Qa.set(a, b, d)
        }
      , da: function() {
            return this.Sa.get()
        }
      , A: function(a, b, d) {
            if (b) {
                var c = this.da()

                for (var i = 0; 3 > i; i++) {
                    if (a[i] > 0.5 * Math.PI && c[i] <= -0.5 * Math.PI) {
                        c[i] += 2 * Math.PI
                    }

                    if (a[i] < -0.5 * Math.PI && c[i] >= 0.5 * Math.PI) {
                        c[i] -= 2 * Math.PI
                    }
                }
                this.Sa.set(c)
            }
            this.Sa.set(a, b, d)
        }
      , La: function() {
            return this.Ca.get()
        }
      , J: function(a, b, d) {
            if (b) {
                var c = this.La()

                for (var i = 0; 3 > i; i++) {
                    if (a[i] > 0.5 * Math.PI && c[i] <= -0.5 * Math.PI) {
                        c[i] += 2 * Math.PI
                    }

                    if (a[i] < -0.5 * Math.PI && c[i] >= 0.5 * Math.PI) {
                        c[i] -= 2 * Math.PI
                    }
                }

                this.Ca.set(c)
            }

            this.Ca.set(a, b, d)
        }
      , ge: function() {
            var a = this.La()

            if (a[0] || a[1] || a[2]) {
                a = Matrix.fa(Matrix.inverse(this.ab()))
                this.s(a.translate)
                this.A([-a.rotate[0], -a.rotate[1], -a.rotate[2]])
                this.J([0, 0, 0])
            }
        }
      , Sc: function() {
            var a = this.da()

            if (a[0] || a[1] || a[2]) {
                a = Matrix.fa(this.ab())
                this.s([-a.translate[0], -a.translate[1], -a.translate[2]])
                this.J([-a.rotate[0], -a.rotate[1], -a.rotate[2]])
                this.A([0, 0, 0])
            }
        }
      , Cf: function() {
            var a = this.La()

            if (!a[0] && !a[1] && !a[2]) {
                return this.da()
            }

            a = Matrix.fa(Matrix.inverse(this.ab()))

            return [-a.rotate[0], -a.rotate[1], -a.rotate[2]]
        }
      , Pf: function(a, b, d) {
            var h = Matrix.fa(Matrix.inverse(a))
              , a = h.translate
              , h = Matrix.Sc(h.rotate)

            this.A([0, 0, 0], b)
            this.J([-h[0], -h[1], -h[2]], b)
            this.s([-a[0], -a[1], -a[2]], b, d)
        }
    }

    module.exports = Module
})

define("1/i", ["require", "exports", "module"], function(require, exports, module) {
    function Module(c) {
        this.e = c
    }

    Module.prototype = {
        move: function(c, f, a) {
            var b = this.e.F()
            this.e.s([b[0] + c[0], b[1] + c[1], b[2] + c[2]], f, a)
        }
      , rotate: function(c, f, a) {
            var b = this.e.da()
            this.e.A([b[0] + c[0], b[1] + c[1], b[2] + c[2]], f, a)
        }
      , p: function(c, f, a) {
            var b = this.e.La()
            this.e.J([b[0] + c[0], b[1] + c[1], b[2] + c[2]], f, a)
        }
    }

    module.exports = Module
})

define("1/h", ["require", "exports", "module", "./i"], function(require, exports, module, c) {
    function Module(a, b) {
        this.e = a
        this.a = b
        this.a || (this.a = {})
        this.a.me || (this.a.me = 0.8)
        this.a.Je || (this.a.Je = 0.2)
        this.a.re || (this.a.re = 0.0030)
        this.a.Ae || (this.a.Ae = 0.0030)
        this.a.oe || (this.a.oe = 700)
        this.a.Le || (this.a.Le = 1000)
        this.a.ed || (this.a.ed = 50)
        this.a.md || (this.a.md = 50)
        this.a.Ie || (this.a.Ie = 100)
        this.a.ne || (this.a.ne = 2000)
        this.a.Ke || (this.a.Ke = 2000)
        this.a.S || (this.a.S = 0.5)
        this.a.U || (this.a.U = 0.5)
        this.a.tb || (this.a.tb = Math.PI / 12)
        this.a.cd || (this.a.cd = 500)
        this.a.z || (this.a.z = c)
        this.a.$c || (this.a.$c = true)
        this.a.Me || (this.a.Me = this.a.$c)
        this.a.jd || (this.a.jd = true)
        this.a.Ee || (this.a.Ee = this.a.jd)
        this.a.Pa || (this.a.Pa = false)
        this.a.gd || (this.a.gd = false)
        this.a.nd || (this.a.nd = false)
        this.l = new this.a.z(this.e, this.a)
        this.state = null
    }

    Module.td = {
        Fa: 1
      , ba: 2
      , aa: 3
    }

    var f = Module.td

    Module.prototype = {
        ob: function() {
            return Math.max(this.e.F()[2] / 300, 1)
        }
      , Zc: function(a) {
            this.e.n()
            this.ha = a.targetTouches[0].pageX
            this.ia = a.targetTouches[0].pageY
            this.Za = this.Ya = 0
            this.G = (new Date).getTime()
        }
      , Yc: function(a) {
            var b = a.targetTouches[0].pageX
              , a = a.targetTouches[0].pageY
              , d = b - this.ha
              , c = a - this.ia

            this.e.Cf()
            var f = this.a.me * this.ob()
              , d = -f * d
              , c = -f * c

            this.a.Pa && (Math.abs(d) > Math.abs(c) && (c = 0), Math.abs(c) > Math.abs(d) && (d = 0))
            this.l.move([d, c, 0])
            this.ha = b
            this.ia = a
            b = (new Date).getTime()
            this.Ya = d / (b - this.G)
            this.Za = c / (b - this.G)
            this.G = b
        }
      , Xc: function() {
            var a = this.a.oe
              , b = this.ob() * this.a.ne
              , d = a * this.Ya
              , a = a * this.Za

            d > b && (d = b)
            a > b && (a = b)
            d < -b && (d = -b)
            a < -b && (a = -b)
            (d || a) && 
            this.l.move([d, a, 0], this.a.$c)
        }
      , lc: function(a) {
            this.e.n()
            this.be = this.Oe(a)
            this.ye = 0
            this.G = (new Date).getTime()
        }
      , kc: function(a) {
            a = this.Oe(a)
            diffDistance = a - this.be
            var b = 3 * Math.min(Math.abs(diffDistance) / this.a.Ie, 1) + 1
            dZ = -this.ob() * b * this.a.Je * diffDistance
            this.l.move([0, 0, dZ])
            this.be = a
            a = (new Date).getTime()
            b = a - this.G
            if (1 < b || 0 < b && 0 != dZ)
                this.ye = dZ / b
            this.G = a
        }
      , jc: function() {
            var a = this.a.Le * this.ye, b = this.ob() * this.a.Ke
            a > b && (a = b)
            a < -b && (a = -b)
            a && this.l.move([0, 0, a], this.a.Me)
        }
      , hd: function(a) {
            this.e.n()
            var b = a.changedTouches.length - 1
            this.ub = a.changedTouches[b].identifier
            this.ha = a.changedTouches[b].pageX
            this.ia = a.changedTouches[b].pageY
            this.se = false
        }
      , fd: function(a) {
            var b

            for (var i = 0; i < a.changedTouches.length; i++) {
                if (a.changedTouches[i].identifier == this.ub) {
                    b = a.changedTouches[i]
                }
            }

            if (b) {
                a = b.pageX
                b = b.pageY

                var c = this.a.re
                  , d = c * (a - this.ha)
                  , c = -c * (b - this.ia)
                  , f = (new Date).getTime()

                this.a.gd && (Math.abs(d) > Math.abs(c) && (c = 0), Math.abs(c) > Math.abs(d) && (d = 0))
                this.l.rotate([-c, -d, 0])
                this.se = true

                this.Ya = d / (f - this.G)
                this.Za = c / (f - this.G)
                this.G = f
                this.ha = a
                this.ia = b
            }
        }
      , dd: function(a) {
            var b
            for (var i = 0; i < a.changedTouches.length; i++) {
                a.changedTouches[i].identifier == this.ub && (b = a.changedTouches[i])
            }

            if (b) {
                if (this.se) {
                    b = this.a.ed
                    a = b * this.Ya
                    b *= this.Za
                    a > this.a.S && (a = this.a.S)
                    b > this.a.S && (b = this.a.S)
                    a < -this.a.S && (a = -this.a.S)
                    b < -this.a.S && (b = -this.a.S)

                    var d = this.e.da()
                      , c = [d[0] - b, d[1] - a, d[2]]

                    Math.abs(c[0]) < this.a.tb && (b = d[0])
                    Math.abs(c[1]) < this.a.tb && (a = d[1])
                    (a || b) && this.l.rotate([-b, -a, 0], this.a.jd)
                } else {
                    this.ya()
                }
            }
        }
      , ya: function() {
            this.e.A([0, 0, 0], {duration: this.a.cd})
        }
      , De: function(a) {
            this.e.n()

            var i = a.changedTouches.length - 1

            this.ub = a.changedTouches[i].identifier
            this.ha = a.changedTouches[i].pageX
            this.ia = a.changedTouches[i].pageY
            this.Ce = false
        }
      , Be: function(a) {
            var b
            for (var i = 0; i < a.changedTouches.length; i++) {
                if (a.changedTouches[i].identifier == this.ub) {
                    b = a.changedTouches[i]
                }
            }

            if (b) {
                a = b.pageX
                b = b.pageY

                var c = this.a.Ae
                  , d = c * (a - this.ha)
                  , c = -c * (b - this.ia)
                  , f = (new Date).getTime()

                this.a.nd && (Math.abs(d) > Math.abs(c) && (c = 0), Math.abs(c) > Math.abs(d) && (d = 0))
                this.l.p([-c, -d, 0])
                this.Ce = true
                this.Ya = d / (f - this.G)
                this.Za = c / (f - this.G)
                this.G = f
                this.ha = a
                this.ia = b
            }
        }
      , ze: function(a) {
            var b
            for (var i = 0; i < a.changedTouches.length; i++) {
                if (a.changedTouches[i].identifier == this.ub) {
                    b = a.changedTouches[i]
                }
            }

            if (b) {
                if (this.Ce) {
                    b = this.a.md
                    a = b * this.Ya
                    b *= this.Za
                    a > this.a.U && (a = this.a.U)
                    b > this.a.U && (b = this.a.U)
                    a < -this.a.U && (a = -this.a.U)
                    b < -this.a.U && (b = -this.a.U)

                    var d = this.e.La()
                      , c = [d[0] - b, d[1] - a, d[2]]

                    Math.abs(c[0]) < this.a.tb && (b = d[0])
                    Math.abs(c[1]) < this.a.tb && (a = d[1])

                    (a || b) && this.l.p([-b, -a, 0], this.a.Ee)
                } else {
                    this.Da()
                }
            }
        }
      , Da: function() {
            this.e.J([0, 0, 0], {duration: this.a.cd})
        }
      , Oe: function(a) {
            var b = a.touches[0]
              , d = a.touches[1]
              , a = d.pageX - b.pageX
              , b = d.pageY - b.pageY

            return Math.sqrt(a * a + b * b)
        }
      , pa: function(a) {
            if (!this.state && 1 >= a.touches.length) {
                this.state = f.Fa
                this.Zc(a)
            } else if (this.state != f.ba && 2 == a.touches.length) {
                this.state = f.ba
                this.lc(a)
            } else if (this.state != f.aa && 3 == a.touches.length) {
                this.state = f.aa
                this.hd(a)
            }
        }
      , oa: function(a) {
            this.state == f.Fa && this.Yc(a)
            this.state == f.ba && this.kc(a)
            this.state == f.aa && this.fd(a)
        }
      , na: function(a) {
            this.state == f.Fa && (this.Xc(a), this.state = null)
            this.state == f.ba && 2 > a.touches.length && (this.jc(a), this.state = null)
            this.state == f.aa && 3 > a.touches.length && (this.dd(a), this.state = null)
        }
      , b: function(a, b) {
            "touchstart" == a ? this.pa(b) : "touchmove" == a ? this.oa(b) : "touchend" == a && this.na(b)
        }
    }

    Module.prototype.trigger = Module.prototype.b
    module.exports = Module
})

define("1/p", ["require", "exports", "module", "./h"], function(require, exports, module, c) {
    function Module() {
        c.apply(this, arguments)
    }

    Module.prototype = {
        pa: function(a) {
            if (!this.state && 1 >= a.touches.length) {
                this.state = "pan"
                this.Zc(a)
            } else if ("swim" != this.state && 2 == a.touches.length) {
                this.state = "swim"
                this.lc(a)
            } else if ("spin" != this.state && 3 == a.touches.length) {
                this.state = "spin"
                this.De(a)
            }
        }
      , oa: function(a) {
            if ("pan" == this.state) {
                this.Yc(a)
            }
            if ("swim" == this.state) {
                this.kc(a)
            }
            if ("spin" == this.state) {
                this.Be(a)
            }
        }
      , na: function(a) {
            if ("pan" == this.state) {
                this.Xc(a)
                this.state = null
            }
            if ("swim" == this.state && 2 > a.touches.length) {
                this.jc(a)
                this.state = null
            }
            if ("spin" == this.state && 3 > a.touches.length) {
                this.ze(a)
                this.state = null
            }
        }
      , Da: function() {
            c.prototype.Da.call(this, arguments)
            c.prototype.ya.call(this, arguments)
        }
    }

    for (var key in c.prototype) {
        if (c.prototype.hasOwnProperty(key) && !Module.prototype.hasOwnProperty(key)) {
            Module.prototype[key] = c.prototype[key]
        }
    }

    module.exports = Module
})

define("1/o", ["require", "exports", "module", "./h", "0/Matrix"], function(require, exports, module, c, Matrix) {
    /**
     * This thing is a subclass of ./h.
     */
    function Module() {
        c.apply(this, arguments)
        this.a.I || (this.a.I = 0)
        this.a.Bb || (this.a.Bb = [0, 0, 0])
    }

    Module.prototype = {
        pa: function(a) {
            if (!this.state && 1 >= a.touches.length) {
                var d = Matrix.fa(this.e.ab())
                  , c = this.a.Bb[0] - d.translate[0]
                  , e = this.a.Bb[1] - d.translate[1]
                  , d = this.a.Bb[2] - d.translate[2]

                if (Math.sqrt(c * c + e * e + d * d) > this.a.I) {
                    this.e.Sc()
                    this.state = 4
                    this.De(a)
                } else {
                    this.e.ge()
                    this.state = 3
                    this.hd(a)
                }
            } else {
                if (2 != this.state && 2 == a.touches.length) {
                    this.state = 2
                    this.lc(a)
                }
            }
        }
      , oa: function(a) {
            if (2 == this.state) {
                this.kc(a)
            }
            if (3 == this.state) {
                this.fd(a)
            }
            if (4 == this.state) {
                this.Be(a)
            }
        }
      , na: function(a) {
            if (2 == this.state && 2 > a.touches.length) {
                this.jc(a)
                this.state = null
            }

            if (3 == this.state) {
                this.dd(a)
                this.state = null
            }

            if (4 == this.state) {
                this.ze(a)
                this.state = null
            }
        }
      , Da: function() {
            c.prototype.ya.call(this, arguments)
            c.prototype.Da.call(this, arguments)
        }
      , ya: function() {
            c.prototype.ya.call(this, arguments)
            c.prototype.Da.call(this, arguments)
        }
    }

    for (var key in c.prototype) {
        if (c.prototype.hasOwnProperty(key) && !Module.prototype.hasOwnProperty(key)) {
            Module.prototype[key] = c.prototype[key]
        }
    }

    module.exports = Module
})

define("1/n", ["require", "exports", "module", "./h"], function(require, exports, module, c) {
    var f = c.td

    function Module() {
        c.apply(this, arguments)
    }

    Module.prototype = {
        ob: function() {
            return 2
        }
      , pa: function(a) {
            if (!this.state && 1 >= a.touches.length) {
                this.state = f.Fa
                this.Zc(a)
            } else if (this.state != f.ba && 2 == a.touches.length) {
                this.state = f.ba
                this.lc(a)
            } else if (this.state != f.aa && 3 == a.touches.length) {
                this.state = f.aa
                this.hd(a)
            }
        }
      , oa: function(a) {
            if (this.state == f.Fa) {
                this.e.ge()
                this.Yc(a)
            }

            if (this.state == f.ba) {
                this.kc(a)
            }

            if (this.state == f.aa) {
                this.fd(a)
            }
        }
      , na: function(a) {
            if (this.state == f.Fa) {
                this.Xc(a)
                this.state = null
            }

            if (this.state == f.ba && 2 > a.touches.length) {
                this.jc(a)
                this.state = null
            }

            if (this.state == f.aa && 3 > a.touches.length) {
                this.dd(a)
                this.state = null
            }
        }
      , ya: function() {
            c.prototype.ya.call(this, arguments)
            c.prototype.Da.call(this, arguments)
        }
    }

    for (var key in c.prototype) {
        if (c.prototype.hasOwnProperty(key) && !Module.prototype.hasOwnProperty(key)) {
            Module.prototype[key] = c.prototype[key]
        }
    }

    module.exports = Module
})

define("1/j", ["require", "exports", "module", "./i"], function(require, exports, module, c) {
    function Module(f, a) {
        this.e = f
        this.a = a
        this.a || (this.a = {})
        "undefined" == typeof this.a.Wb && (this.a.Wb = 1)
        "undefined" == typeof this.a.Z && (this.a.Z = 0.0010)
        "undefined" == typeof this.a.$ && (this.a.$ = 0.0010)
        this.a.ae || (this.a.ae = 500)
        this.a.p || (this.a.p = false)
        this.a.Q || (this.a.Q = false)
        this.a.ga || (this.a.ga = false)
        this.a.z || (this.a.z = c)
        this.l = new this.a.z(f, a)
        if (!this.a.pg) {
            var b = this
            setTimeout(function h() {
                b.update()
                setTimeout(h, 20)
            }, 20)
        }
        this.Nc = (new Date).getTime()
        this.timestamp = (new Date).getTime()
        this.Ed()
    }

    Module.prototype = {
        Ed: function() {
            this.r = [0, 0, 0]
            this.j = [0, 0, 0]
            this.k = [0, 0, 0]
        }
      , update: function() {
            var c = (new Date).getTime()
              , a = c - this.timestamp

            if (c - this.Nc > this.a.ae) {
                this.Ed()
            }

            if (this.r[0] || this.r[1] || this.r[2]) {
                this.l.move([this.r[0] * this.a.Wb * a, this.r[1] * this.a.Wb * a, this.r[2] * this.a.Wb * a])
            }

            if (this.j[0] || this.j[1] || this.j[2]) {
                this.l.rotate([this.j[0] * this.a.Z * a, this.j[1] * this.a.Z * a, this.j[2] * this.a.Z * a])
            }

            if (this.k[0] || this.k[1] || this.k[2]) {
                this.l.p([this.k[0] * this.a.$ * a, this.k[1] * this.a.$ * a, this.k[2] * this.a.$ * a])
            }

            this.timestamp = c
        }
      , b: function(c, a) {
            function b(a, b) {
                if (this.a.p) {
                    if (38 == a.keyCode) {
                        this.k[0] = -b
                    } else if (40 == a.keyCode) {
                        this.k[0] = b
                    } else if (37 == a.keyCode) {
                        this.k[1] = b
                    } else if (39 == a.keyCode) {
                        this.k[1] = -b
                    }
                    this.a.Q && (this.k[1] *= -1)
                    this.a.ga && (this.k[0] *= -1)
                } else {
                    if (38 == a.keyCode) {
                        this.j[0] = b
                    } else if (40 == a.keyCode) {
                        this.j[0] = -b
                    } else if (37 == a.keyCode) {
                        this.j[1] = -b
                    } else if (39 == a.keyCode) {
                        this.j[1] = b
                    }
                    this.a.Q && (this.j[1] *= -1)
                    this.a.ga && (this.j[0] *= -1)
                }

                if (87 == a.keyCode) {
                    if (a.shiftKey) {
                        this.r[1] = -b
                    } else {
                        this.r[2] = -b
                    }
                } else if (65 == a.keyCode) {
                    this.r[0] = -b
                } else if (83 == a.keyCode) {
                    if (a.shiftKey) {
                        this.r[1] = b
                    } else {
                        this.r[2] = b
                    }
                } else if (68 == a.keyCode) {
                    this.r[0] = b
                }
            }

            if ("keydown" == c) {
                this.Nc = (new Date).getTime()
                b.call(this, a, 1)
                this.update()
            } else if ("keyup" == c) {
                b.call(this, a, 0)
            }
        }
    }

    Module.prototype.trigger = Module.prototype.b

    module.exports = Module
})

define("1/q", ["require", "exports", "module", "./j"], function(require, exports, module, c) {
    function Module(a, b) {
        c.apply(this, arguments)
    }

    Module.prototype = {
        b: function(a, b) {
            function d(a, b) {
                // These fields are not even defined.
                if (this.a.p) {
                    if (a.keyCode == c.KEY_UP) {
                        this.k[0] = -b
                    } else if (a.keyCode == c.KEY_DOWN) {
                        this.k[0] = b
                    } else if (a.keyCode == c.KEY_LEFT) {
                        this.k[1] = b
                    } else if (a.keyCode == c.KEY_RIGHT) {
                        this.k[1] = -b
                    }

                    this.a.Q && (this.k[1] *= -1)
                    this.a.ga && (this.k[0] *= -1)
                } else {
                    if (a.keyCode == c.KEY_UP) {
                        this.j[0] = b
                    } else if (a.keyCode == c.KEY_DOWN) {
                        this.j[0] = -b
                    } else if (a.keyCode == c.KEY_LEFT) {
                        this.j[1] = -b
                    } else if (a.keyCode == c.KEY_RIGHT) {
                        this.j[1] = b
                    }

                    this.a.Q && (this.j[1] *= -1)
                    this.a.ga && (this.j[0] *= -1)
                }

                if (a.keyCode == c.KEY_2) {
                    this.r[2] = -b
                } else if (a.keyCode == c.KEY_3) {
                    this.r[1] = -b
                } else if (a.keyCode == c.KEY_4) {
                    this.r[0] = -b
                } else if (a.keyCode == c.KEY_9) {
                    this.r[1] = b
                } else if (a.keyCode == c.KEY_8) {
                    this.r[2] = b
                } else if (a.keyCode == c.KEY_6) {
                    this.r[0] = b
                }
            }

            if (Common) {
                var c = new Common.API.TVKeyValue
                if ("keydown" == a) {
                    this.Nc = (new Date).getTime()
                    d.call(this, b, 1)
                    this.update()
                } else if ("keyup" == a) {
                    d.call(this, b, 0)
                }
            }
        }
    }

    for (var key in c.prototype) {
        if (c.prototype.hasOwnProperty(key) && !Module.prototype.hasOwnProperty(key)) {
            Module.prototype[key] = c.prototype[key]
        }
    }

    Module.prototype.trigger = Module.prototype.b

    module.exports = Module
})

define("1/l", ["require", "exports", "module", "./i"], function(require, exports, module, c) {
    function Module(f, a) {
        this.e = f
        this.a = a
        this.a || (this.a = {})
        "undefined" == typeof this.a.Z && (this.a.Z = 0.0050)
        "undefined" == typeof this.a.$ && (this.a.$ = 0.0050)
        this.a.Q || (this.a.Q = false)
        this.a.ga || (this.a.ga = false)
        this.a.p || (this.a.p = false)
        this.a.z || (this.a.z = c)
        this.a.lb || (this.a.lb = 100)
        this.a.va || (this.a.va = false)
        this.l = new this.a.z(f, a)
    }

    Module.prototype = {
        b: function(c, a) {
            if ("mouseenter" == c)
                this.a.va && !a.ctrlKey && (this.xa = void 0), this.xa = [a.screenX, a.screenY]
            else if ("mousemove" == c)
                if (this.a.va && !a.ctrlKey)
                    this.xa = void 0
                else {
                    var b = [a.screenX, a.screenY]
                    if (this.xa) {
                        var d = [this.xa[1] - b[1], b[0] - this.xa[0], 0]
                        if (d[0] || d[1] || d[2]) {
                            d[0] = Math.min(Math.max(d[0], -this.a.lb), this.a.lb)
                            d[1] = Math.min(Math.max(d[1], -this.a.lb), this.a.lb)
                            this.a.Q && (d[1] = -d[1])
                            this.a.ga && (d[0] = -d[0])

                            if (this.a.p) {
                                this.l.p([d[0] * -this.a.$, d[1] * -this.a.$, d[2] * -this.a.$])
                            } else {
                                this.l.rotate([d[0] * this.a.Z, d[1] * this.a.Z, d[2] * this.a.Z])
                            }
                        }
                    }
                    this.xa = b
                }
            else {
                if ("mouseleave" == c) {
                    this.xa = void 0
                }
            }
        }
    }

    Module.prototype.trigger = Module.prototype.b

    module.exports = Module
})

define("1/m", ["require", "exports", "module", "./i", "0/e"], function(require, exports, module, c, f) {
    function Module(a, b) {
        this.e = a
        this.a = b
        this.a || (this.a = {})
        this.a.I || (this.a.I = 0)
        this.a.Xa || (this.a.Xa = 0)
        this.a.ad || (this.a.ad = {duration: 3000,q: f.w.ease_out_quad})
        this.l = new c(this.e)
    }

    Module.prototype = {
        move: function(a, b, d) {
            var c = this.e.F()
              , c = [c[0], c[1], c[2] + 300]
              , c = Math.max(Math.sqrt(c[0] * c[0] + c[2] * c[2]), 300)
              , f = a[0] / c

            c < this.a.I && (f = -f)
            b === true && (b = this.a.ad)
            this.l.p([0, f, 0], b)
            this.l.move([0, a[1] + this.a.Xa * f, a[2]], b, d)
        }
      , rotate: function(a, b, d) {
            this.l.rotate(a, b, d)
        }
      , p: function(a, b, d) {
            this.l.move([0, this.a.Xa * a[1], 0], b)
            this.l.p(a, b, d)
        }
    }

    module.exports = Module
})

define("1/k", ["require", "exports", "module", "0/Matrix", "0/e"], function(require, exports, module, c, f) {
    function Module(a, b, d, c) {
        b || (b = [-Infinity, Infinity])
        d || (d = [-Infinity, Infinity])
        c || (c = [-Infinity, Infinity])
        this.Qe = new f(b)
        this.Re = new f(d)
        this.Se = new f(c)
        this.Vf = a
    }

    Module.prototype = {
        Ef: function() {
            return this.Qe.get()
        }
      , qb: function(a, b, d) {
            this.Qe.set(a, b, d)
        }
      , Ff: function() {
            return this.Re.get()
        }
      , rb: function(a, b, d) {
            this.Re.set(a, b, d)
        }
      , Gf: function() {
            return this.Se.get()
        }
      , sb: function(a, b, d) {
            this.Se.set(a, b, d)
        }
      , Dd: function(a) {
            var b = this.Vf.F()
              , d = this.Ef()
              , f = this.Ff()
              , e = this.Gf()
              , g = d[1] - d[0]
              , j = f[1] - f[0]
              , k = e[1] - e[0]
              , C = [b[0] + d[0]
              , b[0] + d[1]]
              , m = [b[1] + f[0]
              , b[1] + f[1]]
              , w = [b[2] + e[0]
              , b[2] + e[1]]
              , r = c.get_translate(a)
              , t = [0, 0, 0]

            r[0] < C[0] && (t[0] = g * Math.ceil((C[0] - r[0]) / g))
            r[0] > C[1] && (t[0] = g * Math.floor((C[1] - r[0]) / g))
            r[1] < m[0] && (t[1] = j * Math.ceil((m[0] - r[1]) / j))
            r[1] > m[1] && (t[1] = j * Math.floor((m[1] - r[1]) / j))
            r[2] < w[0] && (t[2] = k * Math.ceil((w[0] - r[2]) / k))
            r[2] > w[1] && (t[2] = k * Math.floor((w[1] - r[2]) / k))
            g = r.slice(0)
            g[0] += t[0] - b[0]
            g[1] += t[1] - b[1]
            g[2] += t[2] - b[2]
            b = Math.min(0.0050 * (g[0] - d[0]), 0.0050 * (d[1] - g[0]))
            f = Math.min(0.0050 * (g[1] - f[0]), 0.0050 * (f[1] - g[1]))
            e = Math.min(0.0050 * (g[2] - e[0]), 0.0050 * (e[1] - g[2]))
            e = Math.min(b, f, e, 1)

            return {
                transform: c.move(a, t)
              , opacity: e
            }
        }
      , Bf: function(a) {
            return this.Dd(a).transform
        }
      , u: function(a) {
            var b = []
            for (var i = 0; i < a.length; i++) {
                var c = this.Dd(a[i].transform)
                b.push({
                    transform: c.transform
                  , opacity: c.opacity * a[i].opacity
                  , target: a[i].target
                })
            }
            return b
        }
    }

    module.exports = Module
})

define("3/v", ["require", "exports", "module", "0/e"], function(require, exports, module, c) {
    function Module(f, a) {
        "undefined" == typeof f && (f = 0)
        "undefined" == typeof a && (a = true)
        this.ra = new c(f)
        this.vb = a
    }

    Module.prototype = {
        show: function(c) {
            this.set(1, this.vb, c)
        }
      , Na: function(c) {
            this.set(0, this.vb, c)
        }
      , set: function(c, a, b) {
            this.ra.n()
            this.ra.set(c, a, b)
        }
      , u: function(c) {
            var a = this.ra.get()
            return a ? {opacity: a,target: c} : null
        }
      , Lf: function(c) {
            c || (c = 0)
            return 1 <= c ? 1 == this.ra.get() : this.ra.get() > c
        }
    }

    module.exports = Module
})

define("3/w", ["require", "exports", "module", "0/Matrix", "0/e"], function(require, exports, module, Matrix, f) {
    function Module(a) {
        "undefined" == typeof a && (a = true)
        this.Fd = 0
        this.ra = new f(0)
        this.vb = a
        this.xf = 0.1
    }

    Module.prototype = {
        Mb: function(a, b) {
            "undefined" == typeof a && (a = 1 == this.Fd ? 0 : 1)
            this.Fd = a
            this.ra.set(a, this.vb, b)
        }
      , u: function(a) {
            var b = this.ra.get()
              , d = {
                    transform: Matrix.rotate_y_cw(Math.PI * b)
                  , target: a[0]
                }
              , a = {
                    transform: Matrix.rotate_y_cw(Math.PI * (b - 1))
                  , target: a[1]
                }

            return {
                transform: Matrix.scale(1, 1, this.xf)
              , target: [d, a]
            }
        }
    }

    module.exports = Module
})

define("3/x", ["require", "exports", "module"], function(require, exports, module) {
    function Module(c, f) {
        this.Yd = c
        this.timeout = f
        this.enabled = 0 < f
        this.reset()
    }

    Module.prototype = {
        enable: function() {
            this.enabled = true
        }
      , disable: function() {
            this.enabled = false
        }
      , update: function() {
            if (!this.ib && (this.enabled && this.Yd) && (new Date).getTime() - this.Mf > this.timeout) {
                this.ib = true
                this.Yd.call(this)
            }
        }
      , reset: function() {
            this.Mf = (new Date).getTime()
            this.ib = false
        }
      , b: function() {
            this.reset()
        }
    }

    module.exports = Module
})

define("3/z", ["require", "exports", "module"], function(require, exports, module) {
    function Module() {
        this.Dg = this.startTime = 0
        this.ec = []
        this.ja = -1
    }

    Module.prototype = {
        Ye: function(c) {
            if (this.js < 0) {
                this.ja = 0
            }

            while (this.ja < this.ec.length && this.ec[this.ja].Ag <= c) {
                this.ec[this.ja].action.call(this)
                this.ja++
            }
        }
      , update: function() {
            0 > this.ja || this.ja >= this.ec.length || this.Ye((new Date).getTime() - this.startTime)
        }
    }

    module.exports = Module
})

define("3/10", ["require", "exports", "module", "0/Matrix", "0/e", "0/d"], function(require, exports, module, c, f, a) {
    function Module(b) {
        this.cc = b
        this.v = {}
        this.Oc = {}
        for (var key in this.cc) {
            this.v[key] = new a
            this.v[key].ve({
                duration: 1000
              , q: f.w.ease_in_out_quad
            })
        }
    }

    Module.prototype = {
        n: function(a) {
            this.v[a].n()
        }
      , Vd: function(a) {
            for (var i = 0; i < a.length; i++) {
                this.n(i)
            }
        }
      , Hf: function() {
            this.Vd(this.all())
        }
      , set: function(a, d, c, f) {
            this.v[a].setTransform(d, c, f)
        }
      , $f: function(a, d, c, f) {
            for (var i = 0; i < a.length; i++) {
                this.set(a[i], d(i), c, 0 == i ? f : void 0)
            }
        }
      , Wa: function(a, d, c) {
            this.$f(this.all(), a, d, c)
        }
      , modify: function(a, d, f, e) {
            d = c.multiply(this.v[a].Hc, d)
            this.set(a, d, f, e)
        }
      , Ua: function(a, d, c, f) {
            this.v[a].Ua(d, c, f)
        }
      , Yf: function(a, d, c, f) {
            for (var i = 0; i < a.length; i++) {
                this.Ua(a[i], d, c, 0 == i ? f : void 0)
            }
        }
      , Va: function(a, d, c) {
            this.Yf(this.all(), a, d, c)
        }
      , all: function() {
            // This converts all keys in this.cc to an array.
            var a = []

            for (var key in this.cc) {
                a.push(key)
            }

            return a
        }
      , O: function(a) {
            return this.v[a].O()
        }
      , Jc: function(a) {
            return this.v[a].Jc()
        }
      , Vb: function(a) {
            this.Oc[a] = true
        }
      , mc: function(a) {
            this.Oc[a] = false
        }
      , $d: function(a) {
            return this.Oc[a]
        }
      , jb: function(a) {
            return this.v[a].jb()
        }
      , u: function() {
            var a = []

            for (var key in this.cc) {
                a.push(this.v[key].u(this.cc[key]))
            }

            return a
        }
    }

    module.exports = Module
})

define("6/19", ["require", "exports", "module", "0/Matrix"], function(require, exports, module, c) {
    function Module(c, a) {
        this.gc = c
        this.Ab = a
        this.Ka = []
        this.$a = []
        this.vc = {}
    }

    Module.prototype = {
        Ec: function(c) {
            0 > this.Ka.indexOf(c) && this.Ka.push(c)
            this.update()
        }
      , dg: function(c) {
            c = this.Ka.indexOf(c)
            0 <= c && this.Ka.splice(c, 1)
            this.update()
        }
      , kf: function(c) {
            var a = []

            for (var key in this.Ab) {
                this.Ab.hasOwnProperty(key) && 0 <= this.Ab[key].indexOf(c) && a.push(key)
            }

            return a
        }
      , update: function() {
            var f = []

            for (var i = 0; i < this.Ka.length; i++) {
                var b = this.Ab[this.Ka[i]]

                for (var j = 0; j < b.length; j++) {
                    0 > f.indexOf(b[j]) && f.push(b[j])
                }
            }

            var e = this.gc
              , g = []
              , b = []

            for (var i = 0; i < this.$a.length; i++) {
                var d = this.$a[i]
                if (0 > f.indexOf(d)) {
                    b.push(d)
                    e.modify(d, Matrix.translate(0, 0, this.vc[d]), true)
                    e.mc(d)
                }
            }

            for (var i = 0; i < f.length; i++) {
                0 > this.$a.indexOf(f[i]) && g.push(f[i])
            }

            b = [0, 0, 0]
            for (var i = 0; i < g.length; i++) {
                var j = Matrix.get_translate(e.O(g[i]))
                b[0] += j[0]
                b[1] += j[1]
                b[2] += j[2]
            }

            b[0] /= g.length
            b[1] /= g.length
            b[2] /= g.length

            var k = 0
            for (var i = 0; i < g.length; i++) {
                var j = Matrix.get_translate(e.O(g[i]))
                  , d = j[0] - b[0]
                  , D = j[1] - b[1]
                  , j = j[2] - b[2]
                  , d = Math.sqrt(d * d + D * D + j * j)

                if (d > k) {
                    k = d
                }

                ;(function(a, b) {
                    var d = this

                    setTimeout(function() {
                        var f = g[a]
                        d.vc[f] = 1800 * Math.pow(1 - b / k, 2) + 200
                        e.Vb(f)
                        e.modify(f, Matrix.translate(0, 0, -d.vc[f]), true)
                    }, 3 * b)
                }).call(this, a, d)
            }

            this.$a = f
        }
      , Kf: function(c) {
            return 0 <= this.$a.indexOf(c)
        }
    }

    module.exports = Module
})

define("6/1b", ["require", "exports", "module", "0/Matrix", "0/e"], function(require, exports, module, c, f) {
    function Module(a, b, d) {
        "undefined" == typeof a && (a = 300)
        "undefined" == typeof b && (b = 2000)
        "undefined" == typeof d && (d = 0.5)
        this.H = []
        this.gb = []
        this.Jf = a
        this.duration = b
        this.Ic = d
        this.enabled = true
    }

    Module.prototype = {
        enable: function() {
            this.enabled = true
        }
      , disable: function() {
            if (this.enabled) {
                this.enabled = false
                for (var i = 0; i < this.H.length; i++) {
                    this.Te(i)
                }
            }
        }
      , Ec: function(a) {
            0 > this.gb.indexOf(a) && this.gb.push(a)
        }
      , If: function(a) {
            a = this.gb.indexOf(a)
            0 <= a && this.gb.splice(a, 1)
        }
      , Te: function(a, duration) {
            if (this.H.hasOwnProperty(a)) {
                if ("undefined" == typeof duration) {
                    duration = 500
                }
                this.H[a].n()
                this.H[a].set(0, {
                    duration: duration
                  , q: f.w.ease_in_out_quad
                })
            }
        }
      , update: function() {
            if (this.enabled && this.H.length && !(Math.random() > this.Ic)) {
                var a = Math.floor(Math.random() * this.H.length)
                if (!(0 <= this.gb.indexOf(a))) {
                    var b = Math.round(this.Jf * (Math.random() - 0.5))
                      , d = Math.round(this.duration * (Math.random() + 0.5))

                    this.H[a].n()
                    this.H[a].set(b, {duration: d,q: f.w.ease_in_out_quad})
                }
            }
        }
      , u: function(a) {
            var b = Array(a.length)
            this.update()

            for (var i = 0; i < a.length; i++) {
                this.H.hasOwnProperty(i) || (this.H[i] = new f(0))
                var e = a[i]

                if (e.transform) {
                    b[i] = {
                        transform: c.move(e.transform, [0, 0, this.H[i].get()])
                      , opacity: e.opacity
                      , target: e.target
                    }
                } else {
                    b[i] = {
                        transform: c.translate(0, 0, this.H[i].get())
                      , target: e
                    }
                }
            }
            return b
        }
    }

    module.exports = Module
})

define("6/1a", ["require", "exports", "module", "0/Matrix", "0/e"], function(require, exports, module, c, f) {
    function Module(a, b) {
        b || (b = 0.1)
        this.gc = a
        this.Ic = b
    }

    Module.prototype = {
        cg: function(a, b) {
            var d = this.gc
            d.Vb(a)
            d.Vb(b)
            var e = c.get_translate(d.O(a))
              , g = c.get_translate(d.O(b))
              , j = g[0] - e[0]
              , k = g[1] - e[1]
              , e = g[2] - e[2]
              , g = 100 * Math.random() - 50
              , D = 100 * Math.random() - 50
              , C = 100 * Math.random() - 50
              , m = 100 * Math.random() - 50
              , w = {duration: 2000,q: f.w.ease_out_quad}
              , r = {duration: 1000,q: f.w.ease_in_out_quad}

            d.modify(a, c.translate(0, 0, e), w)
            d.modify(a, c.translate(j + g, 0, 0), w)
            d.modify(a, c.translate(0, k + D, 0), w)
            d.modify(a, c.translate(-g, 0, 0), r)
            d.modify(a, c.translate(0, -D, 0), r, function() {
                d.mc(a)
            })
            d.modify(b, c.translate(0, 0, -e), w)
            d.modify(b, c.translate(-j + C, 0, 0), w)
            d.modify(b, c.translate(0, -k + m, 0), w)
            d.modify(b, c.translate(-C, 0, 0), r)
            d.modify(b, c.translate(0, -m, 0), r, function() {
                d.mc(b)
            })
        }
      , update: function() {
            if (!(Math.random() > this.Ic)) {
                var a = this.gc
                  , b = a.all()
                  , d = b[Math.floor(Math.random() * b.length)]
                  , b = b[Math.floor(Math.random() * b.length)]

                d == b || (a.jb(d) || a.jb(b) || a.$d(d) || a.$d(b)) || this.cg(d, b)
            }
        }
    }

    module.exports = Module
})

define("2/s", ["require", "exports", "module"], function(require, exports, module) {
    function Module(c, f) {
        this.B = this.x = 0
        this.Ha = []
        this.Gc = 0.5
        this.Mc = 0.0001
        this.Qf = 1
        this.kb = (new Date).getTime()
        this.ua = false
        this.set(c, f)
    }

    Module.Gb = function(c) {
        return function(f, a, b) {
            return -c * a * a * b
        }
    }

    Module.Nb = function(c) {
        return function(f, a, b) {
            return -c * Math.abs(a) * b
        }
    }

    Module.hc = function(c, f, a) {
        f || (f = 0)
        a || (a = 0)
        var b = 2 * a * Math.sqrt(f)

        return function(a, e, g) {
            var a = a - c
              , j = a + e * g
              , k = 0.5 * f * a * a
              , D = 0.5 * f * j * j

            return -(0 > a / j ? k : D - k) - b * e * e * g
        }
    }

    Module.vg = function(c, f) {
        f || (f = 0)
        return function(a, b, d) {
            var e = a - c, a = e + b * d
            if (0.5 > Math.abs(e) && 0.5 > Math.abs(a))
                return -0.5 * b * b * d
            b = -f / Math.max(Math.abs(e), 0.5)
            return -(-f / Math.max(Math.abs(a), 0.5) - b)
        }
    }

    Module.prototype = {
        Hd: function() {
            this.kb = (new Date).getTime()
            this.ua = false
        }
      , set: function(c, f) {
            "number" == typeof c && this.s(c)
            "number" == typeof f && this.ld(f)
        }
      , s: function(c) {
            this.x = c
            this.Hd()
        }
      , ld: function(c) {
            this.B = c
            this.Hd()
        }
      , C: function(c) {
            "function" != typeof c && console.error("Invalid agent")
            0 > this.Ha.indexOf(c) && (this.Ha.push(c), this.ua = false)
        }
      , nb: function(c) {
            c = this.Ha.indexOf(c)
            0 <= c && (this.Ha.splice(c, 1), this.ua = false)
        }
      , reset: function(c) {
            this.Ha = c.slice(0)
            this.ua = false
        }
      , F: function() {
            this.update()
            return this.x
        }
      , Df: function() {
            this.update()
            return this.B
        }
      , update: function(c) {
            for (c || (c = (new Date).getTime()); this.kb < c; ) {
                var f = c - this.kb
                this.B && (f = Math.min(f, this.Gc / Math.abs(this.B)))
                f = Math.max(f, this.Qf)
                this.bf(f)
            }
        }
      , bf: function(c) {
            function f(b, c, d) {
                var f = a.Ha
                  , e = 0

                for (var i = 0; i < f.length; i++) {
                    e += f[i](b, c, d)
                }

                return e
            }
            this.kb += c
            if (!this.ua) {
                var a = this
                  , b = 0
                  , d = 0

                if (Math.abs(this.B) > this.Mc) {
                    b = f(this.x, this.B, c), d = 0 < this.B ? 1 : -1
                } else {
                    var e = f(this.x, this.Mc, c)
                      , g = f(this.x, -this.Mc, c)
                      , b = Math.max(e, g)
                      , d = e > g ? 1 : -1

                    0 >= e && 0 >= g && (this.ua = true)
                }

                e = this.B
                e = 0.5 * e * e + b

                if (0 > e) {
                    this.x += this.B * c * (e / b)
                    this.B = 0
                } else {
                    b = d * Math.sqrt(2 * Math.abs(e))
                    this.x += this.B * c
                    this.B = b
                }

                this.ua && (this.x = Math.round(this.x / this.Gc) * this.Gc)
            }
        }
    }

    module.exports = Module
})

define("2/t", ["require", "exports", "module", "0/Matrix", "./s"], function(require, exports, module, c, f) {
    function Module(a, b) {
        this.dir = a
        this.a = b
        this.a || (this.a = {})
        this.a.Od || (this.a.Od = 0.5)
        this.a.de || (this.a.de = 50)
        this.a.Nb || (this.a.Nb = 0.0001)
        this.a.Gb || (this.a.Gb = 0.0020)
        this.a.Td || (this.a.Td = 1)
        this.a.Bc || (this.a.Bc = 0.0002)
        this.a.Ac || (this.a.Ac = 1)
        this.a.Wc || (this.a.Wc = false)
        this.a.Uc || (this.a.Uc = 0.1)
        this.a.le || (this.a.le = 300)
        this.a.Vc || (this.a.Vc = 1)
        this.a.ke || (this.a.ke = 0.0002)
        this.a.je || (this.a.je = 1)
        this.a.Cb || (this.a.Cb = "x" == this.dir ? window.innerWidth : window.innerHeight)
        this.a.M || (this.a.M = 0)
        this.a.N || (this.a.N = 0)
        this.a.Id || (this.a.Id = false)
        this.a.gg && (this.a.N = this.a.M + this.a.gg - this.a.Cb)
        this.D = {}
        this.o = new f({position: 0})
        this.mf = this.We()
        this.dc = true
        this.W = false
        this.ta = []
        this.tc = 0
        this.zf = f.Nb(this.a.Nb)
        this.qf = f.Gb(this.a.Gb)
        this.ag(this.a.M, true)
        this.we(this.a.N, true)
        this.Fc = []
        this.Bd = this.t = this.qc = 0
        this.Zf()
        this.disabled = false
    }

    Module.prototype = {
        g: function(a, b) {
            this.D[a] || (this.D[a] = [])
            b in this.D[a] || this.D[a].push(b)
        }
      , b: function(a, b) {
            this.mf.b(a, b)
            if (this.D[a])
                for (var i = 0; i < this.D[a].length; i++) {
                    this.D[a][i](b)
                }
        }
      , u: function(a) {
            if (this.a.Id) {
                var b = 0

                if ("object" == typeof a) {
                    "function" == typeof a.Kc && (b = a.Kc(), b = "x" == this.a.dir ? b[0] : b[1])
                    "object" == typeof a.size && (b = "x" == this.a.dir ? a.size[0] : a.size[1])
                }
                b = Math.max(b - this.a.Cb, 0)
                this.we(this.a.M + b)
            }
            var b = this.o.F()
              , d = this.o.Df()

            if (this.a.Wc) {
                if (this.qc != this.t) {
                    this.o.nb(this.bc)
                    if (0 <= this.t) {
                        var e = Math.min(Math.max(this.a.mb[this.t], this.a.M), this.a.N)
                        this.bc = f.hc(e, this.a.ke, this.a.je)
                        this.o.C(this.bc)
                    }
                    this.qc = this.t
                }
                0 > this.t && Math.abs(d) < this.a.Vc && (this.t = this.Jd(b))
                (this.bc && !this.W || 0 <= this.ta.indexOf("page")) && this.o.C(this.bc)
            }
            if (!this.W || 0 <= this.ta.indexOf("edge")) {
                if (b < this.a.M || b > this.a.N) {
                    this.Hb || (this.o.reset([]), this.Hb = true)
                    if (this.od && (b < this.a.M && 0 >= d)) {
                        this.o.C(this.od)
                        this.dc && (this.b("pullDown"), this.dc = false)
                    }
                    this.Cc && (b > this.a.N && 0 <= d) && this.o.C(this.Cc)
                }
            }
            this.b("render", {position: b, Eg: d})
            0 == b && (this.dc = true)
            return {
                transform: "x" == this.dir ? c.translate(-b, 0) : c.translate(0, -b)
              , target: a
              , group: true
            }
        }
      , We: function() {
            var a = this
              , b = {}

            return {
                b: function(c, f) {
                    if ("touchmove" == c) {
                        var e = 0
                        for (var i = 0; i < f.changedTouches.length; i++) {
                            var j = f.changedTouches[i]
                            if (b.hasOwnProperty(j.identifier)) {
                                var k = b[j.identifier]
                                  , C = j.pageX - k.x
                                  , m = j.pageY - k.y
                                  , w = 0

                                if ("x" == a.dir) {
                                    var w = Math.abs(C) > Math.abs(m) ? C : 0
                                } else {
                                    var w = Math.abs(m) > Math.abs(C) ? m : 0
                                }

                                e = e - w

                                k.x = j.pageX
                                k.y = j.pageY
                            }
                        }
                        a.disabled || (0 < e && (a.dc = false), a.Sf(e), a.b("scrollmove"))
                    } else if ("touchstart" == c) {
                        if (!a.disabled) {
                            a.hf()
                            for (var i = 0; i < f.targetTouches.length; i++) {
                                var g = f.targetTouches[i]

                                b[g.identifier] = {
                                    x: g.pageX
                                  , y: g.pageY
                                }
                            }
                        }
                    } else if ("touchend" == c) {
                        a: {
                            for (var i = 0; i < f.changedTouches.length; i++) {
                                g = f.changedTouches[i]
                                b.hasOwnProperty(g.identifier) && delete b[g.identifier]
                            }

                            for (var i = 0; i < f.touches.length; i++) {
                                if (b.hasOwnProperty(f.touches[i].identifier)) {
                                    break a
                                }
                            }
                            a.Md()
                        }
                    }
                }
            }
        }
      , disable: function() {
            this.disabled = true
        }
      , enable: function() {
            this.disabled = false
        }
      , F: function() {
            return this.o.F()
        }
      , Sd: function() {
            return this.a.N - this.a.M
        }
      , ag: function(a, b) {
            if (b || a != this.a.M) {
                this.a.M = a
                this.o.nb(this.od)
                this.od = -Infinity < a ? f.hc(a, this.a.Bc, this.a.Ac) : null
                this.Hb = false
            }
        }
      , we: function(a, b) {
            if (b || a != this.a.N) {
                this.a.N = a
                this.o.nb(this.Cc)
                this.Cc = Infinity > a ? f.hc(a, this.a.Bc, this.a.Ac) : null
                this.Hb = false
            }
        }
      , gf: function(a) {
            a || (a = this.F())
            return a <= this.a.M || a >= this.a.N
        }
      , Jd: function(a) {
            var b = 0
              , c = Infinity

            for (i = 0; i < this.a.mb.length; i++) {
                var f = this.a.mb[i] - a
                Math.abs(f) < c && (b = i, c = Math.abs(f))
            }
            return b
        }
      , Zf: function(a) {
            if (Infinity > this.Sd() && !a) {
                var a = []
                  , b = this.a.Cb
                  , c = Math.round(this.Sd() / b)

                for (var i = 0; i < c; i++) {
                    a.push(i * b)
                }
            }

            this.a.mb = a
            this.b("pageStopsChange")
        }
      , s: function(a) {
            this.o.s(a)
        }
      , n: function() {
            this.o.ld(0)
        }
      , he: function() {
            this.Hb = false
            this.o.reset([])
            if (!this.W || 0 <= this.ta.indexOf("resist")) {
                this.o.C(this.zf), this.o.C(this.qf)
            }

            if (!this.W || 0 <= this.ta.indexOf("external")) {
                for (var i = 0; i < this.Fc.length; i++) {
                    this.Fc[i] && this.o.C(this.Fc[i])
                }
            }

            if (this.W) {
                for (var i = 0; i < this.sa.length; i++) {
                    this.o.C(this.sa[i])
                }
            }
        }
      , hf: function(a, b) {
            a || (a = [])
            b || (b = [])
            this.W && this.Md()
            0 > a.indexOf("flow") && this.n()
            this.W = true
            this.ta = a
            this.sa = b

            for (var i = 0; i < this.sa.length; i++) {
                this.og.C(this.sa[i])
            }

            this.he()
            this.Ga = 0
            this.uc = (new Date).getTime()
            return ++this.tc
        }
      , Md: function(a) {
            if (a && a != this.Af())
                return 0
            (new Date).getTime() - this.uc > this.a.de && (this.Ga = 0)
            this.W = false
            0 > this.ta.indexOf("flow") && this.o.ld(this.Ga * this.a.Td)
            this.ta = []

            for (var i = 0; i < this.sa.length; i++) {
                this.o.nb(this.sa[i])
            }

            this.sa = []
            this.he()

            if (this.a.Wc) {
                a = this.Jd(this.F())
                if (1 < Math.abs(a - this.qc)) {
                    this.t = a
                }
                this.Ga > this.a.Uc ? this.t++ : this.Ga < -this.a.Uc ? this.t-- : this.t = a

                if (0 > this.t) {
                    this.t = 0
                }

                if (this.t >= this.a.mb.length) {
                    this.t = this.a.mb.length - 1
                }
                a = (new Date).getTime()

                if (Math.abs(this.Ga) > this.a.Vc && a - this.Bd < this.a.le) {
                    this.t = -1
                }

                this.Bd = a
            }
            return this.tc
        }
      , Af: function() {
            return this.W ? this.tc : 0
        }
      , Sf: function(a) {
            var b = this.gf() ? this.a.Od * a : a
            this.s(this.F() + b)
            var b = (new Date).getTime(), c = b - this.uc
            this.uc = b
            c && (this.Ga = a / c)
        }
    }

    module.exports = Module
})

define("4/13", ["require", "exports", "module"], function(require, exports, module) {
    function Module(c) {
        this.touches = {}
        this.yb = false
        this.a = c
        this.a || (this.a = {})
        this.a.Ne || (this.a.Ne = 300)
        this.a.Wd || (this.a.Wd = 300)
        "undefined" == typeof this.a.Pe && (this.a.Pe = true)
        this.Pd = []
    }

    Module.prototype = {
        pa: function(c) {
            var f = this
            for (var i = 0; i < c.changedTouches.length; i++) {
                var b = c.changedTouches[i]
                  , d = b.identifier

                this.touches[d] = {
                    pe: b.pageX
                  , qe: b.pageY
                  , timestamp: (new Date).getTime()
                  , qd: 0
                  , rd: 0
                }

                c.origin.b("grab", {
                    target: c.target
                })

                ;(function(a, b) {
                    f.touches[a].Xd = setTimeout(function() {
                        b.b("hold", {id: a})
                    }, f.a.Wd)
                }).call(this, d, c.origin)
            }
            this.yb = 1 == c.touches.length
            this.Pd = []
        }
      , oa: function(c) {
            var f = (new Date).getTime()

            for (var i = 0; i < c.changedTouches.length; i++) {
                var b = c.changedTouches[i]
                  , d = b.identifier

                if (this.touches[d]) {
                    var e = this.touches[d]
                      , g = b.pageX
                      , b = b.pageY
                      , j = g - e.pe
                      , k = b - e.qe
                      , D = f - e.timestamp
                      , C = j / D
                      , m = k / D

                    c.origin.b("move", {
                        id: d
                      , mg: j
                      , ng: k
                      , sd: C
                      , sd: m
                      , Nd: D
                    })

                    e.pe = g
                    e.qe = b
                    e.qd = C
                    e.rd = m
                    e.timestamp = f
                    clearTimeout(e.Xd)
                }
            }
            this.yb = false
        }
      , na: function(c) {
            var f = (new Date).getTime()

            for (var i = 0; i < c.changedTouches.length; i++) {
                var b = c.changedTouches[i].identifier
                if (this.touches[b]) {
                    var d = this.touches[b]
                      , e = f - d.timestamp

                    c.origin.b("release", {
                        id: b
                      , hg: d.qd
                      , sd: d.rd
                      , Nd: e
                    })

                    if (this.yb && e < this.a.Ne) {
                        e = {
                            id: b
                          , Nd: e
                          , target: c.target
                        }
                        c.origin.b("tap", e)
                        this.a.Pe && (c.preventDefault(), c.origin.b("click", e))
                    }
                    clearTimeout(d.Xd)
                    this.Pd.push({
                        id: b
                      , hg: d.qd
                      , sd: d.rd
                      , timestamp: f
                    })
                    delete this.touches[b]
                }
            }
            0 == c.touches.length && (this.yb = false)
        }
      , b: function(c, f) {
            "touchmove" == c ? this.oa(f) : "touchstart" == c ? this.pa(f) : "touchend" == c && this.na(f)
        }
    }

    module.exports = Module
})

define("4/12", ["require", "exports", "module"], function(require, exports, module) {
    function Module() {
        this.Ea = {}
    }

    Module.prototype = {
        pa: function(c) {
            this.Lb && (this.ma = this.la = void 0)
            for (var i = 0; i < c.changedTouches.length; i++) {
                var a = c.changedTouches[i]
                this.Ea[a.identifier] = {
                    x: a.pageX
                  , y: a.pageY
                }

                if ("undefined" == typeof this.la) {
                    this.la = a.identifier
                } else if ("undefined" == typeof this.ma) {
                    this.ma = a.identifier
                    this.Lb = true
                }
            }
            this.timestamp = (new Date).getTime()
            this.cb = this.vd(this.Ea[this.la], this.Ea[this.ma])
            this.wb = 0
        }
      , oa: function(c) {
            for (var i = 0; i < c.changedTouches.length; i++) {
                var a = c.changedTouches[i]
                this.Ea[a.identifier] = {
                    x: a.pageX
                  , y: a.pageY
                }
            }

            if (this.Lb && "undefined" != typeof this.la && "undefined" != typeof this.ma) {
                c = (new Date).getTime()
                var f = c - this.timestamp
                a = this.vd(this.Ea[this.la], this.Ea[this.ma])

                if (10 < f || 0 < f && a != this.cb) {
                    this.wb = (a - this.cb) / f
                }

                this.cb = a
                this.timestamp = c
            }
        }
      , na: function(c) {
            var f = (new Date).getTime()

            for (var i = 0; i < c.changedTouches.length; i++) {
                var b = c.changedTouches[i]
                this.la == b.identifier && (this.la = void 0)
                this.ma == b.identifier && (this.ma = void 0)
                delete this.Ea[b.identifier]
            }

            if (this.Lb && ("undefined" == typeof this.la && "undefined" == typeof this.ma)) {
                this.Lb = false
                var a = f - this.timestamp

                if (300 > a && 0 > this.wb) {
                    c.origin.b("pinch", {
                        B: this.wb
                      , of: this.cb
                    })
                } else if (300 > a && 0 < this.wb) {
                    c.origin.b("spread", {
                        B: this.wb
                      , of: this.cb
                    })
                }
            }
            this.timestamp = f
        }
      , vd: function(c, f) {
            if (c && f) {
                var a = f.x - c.x
                  , b = f.y - c.y

                return Math.sqrt(a * a + b * b)
            }
        }
      , b: function(c, f) {
            "touchstart" == c ? this.pa(f) : "touchmove" == c ? this.oa(f) : "touchend" == c && this.na(f)
        }
    }

    module.exports = Module
})

define("6/18", {
    wf: [
        "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca"
      , "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y"
      , "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce"
      , "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir"
      , "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm"
      , "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Rv", "Fl"
      , "Uup", "Lv", "Uus", "Ur"
    ]
  , tf: {
        zg: [0, 5, 6, 7, 14, 15, 33]
      , yg: [1, 9, 17, 35, 53, 85, 117]
      , sg: [8, 16, 34, 52, 84, 116]
      , wg: [4, 13, 31, 32, 50, 51, 83]
      , vb: [
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 71, 72, 73, 74, 75, 76, 77
          , 78, 79, 103, 104, 105, 106, 107, 108, 109, 110, 111
        ]
      , Bg: [12, 30, 48, 49, 80, 81, 82, 112, 113, 114, 115]
      , jg: [2, 10, 18, 36, 54, 86]
      , kg: [3, 11, 19, 37, 55, 87]
      , ug: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]
      , ig: [88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102]
    }
  , vf: [
        "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon"
      , "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium"
      , "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper"
      , "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium"
      , "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium"
      , "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium"
      , "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium"
      , "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium"
      , "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon"
      , "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium"
      , "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium"
      , "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium"
      , "Copernicium", "Ravikantium", "Flerovium", "Ununpentium", "Livermorium", "Ununseptium", "Urasium"
    ]
  , uf: [
        "1.008", "4.003", "6.941", "9.012", "10.812", "12.011", "14.007", "15.999", "18.998", "20.180", "22.990"
      , "24.305", "26.982", "28.086", "30.974", "32.066", "35.453", "39.948", "39.098", "40.078", "44.956", "47.867"
      , "50.942", "51.996", "54.938", "55.845", "58.933", "58.693", "63.546", "65.382", "69.723", "72.631", "74.922"
      , "78.963", "79.904", "83.798", "85.468", "87.621", "88.906", "91.224", "92.906", "95.962", "(98)", "101.072"
      , "102.916", "106.421", "107.868", "112.411", "114.818", "118.712", "121.760", "127.603", "126.904", "131.294"
      , "132.905", "137.328", "138.905", "140.116", "140.908", "144.242", "(145)", "150.362", "151.964", "157.253"
      , "158.925", "162.500", "164.930", "167.259", "168.934", "173.055", "174.967", "178.492", "180.948", "183.841"
      , "186.207", "190.233", "192.217", "195.085", "196.967", "200.592", "204.383", "207.21", "208.980", "(209)"
      , "(210)", "(222)", "(223)", "(226)", "(227)", "232.038", "231.036", "238.029", "(237)", "(244)", "(243)"
      , "(247)", "(247)", "(251)", "(252)", "(257)", "(258)", "(259)", "(262)", "(267)", "(268)", "(269)", "(270)"
      , "(269)", "(278)", "(281)", "(281)", "(285)", "Angellist Maximus", "(289)", "(288)", "(293)", "(294)"
      , "Michael Arrington"
    ]
})

define("app", [
    "require", "exports", "module", "0/4", "0/b", "0/2", "0/Matrix", "0/d", "0/e", "0/1", "0/5", "0/7", "0/6", "1/g"
  , "1/h", "1/p", "1/o", "1/n", "1/j", "1/q", "1/l", "1/m", "1/k", "3/v", "3/w", "3/x", "3/z", "3/10", "6/19", "6/1b"
  , "6/1a", "2/t", "4/13", "4/12", "6/18", "6/18", "6/18", "6/18"], function(e) {

    function k(a) {
        117 == a ? a = 62 : 62 == a && (a = 117)
        return Matrix.translate(hb * (Math.floor(a / 15) - 3.5), ib * (a % 5 - 2), -jb * (Math.floor(a / 5) % 3) - 500)
    }

    function j(a) {
        0 == a ? a = 112 : 112 == a && (a = 0)
        return kb(a)
    }

    function g(a) {
        if (1 > a)
            a = [0, 0]
        else if (2 > a)
            a = [17, 0]
        else if (4 > a)
            a = [a - 2, 1]
        else if (10 > a)
            a = [a + 8, 1]
        else if (12 > a)
            a = [a - 10, 2]
        else if (18 > a)
            a = [a, 2]
        else if (36 > a)
            a = [a - 18, 3]
        else if (54 > a)
            a = [a - 36, 4]
        else if (56 > a)
            a = [a - 54, 5]
        else if (71 > a)
            a = [a - 53, 8]
        else if (86 > a)
            a = [a - 68, 5]
        else if (88 > a)
            a = [a - 86, 6]
        else if (103 > a)
            a = [a - 85, 9]
        else if (118 > a)
            a = [a - 100, 6]
        else
            return Matrix.scale(0, 0, 0)
        return Matrix.translate(150 * (a[0] - 8.5), 190 * (a[1] - 4.5), 0)
    }

    function c(a) {
        return Matrix.multiply(Matrix.translate(0, 20 * (a - 59), 700), Matrix.rotate_y_cw(0.1 * a * Math.PI))
    }

    function f(a) {
        return Matrix.multiply(Matrix.translate(0, 250 * (Math.floor(a / 30) - 1), -900)
          , Matrix.rotate_y_cw(-0.06667 * a * Math.PI))
    }

    // Current page number.
    var J = 4
    function a(new_page_number, b) {
        var page_number_changed = J != new_page_number
        J = "undefined" != typeof new_page_number ? new_page_number : (J + 1) % 5
        0 <= L && h(L)
        u.n()
        z.Hf()

        var e = {
            duration: 1000
          , q: M.w.ease_out_quad
        }

        if (3 == J) {
            z.Wa(g, e, b)
            z.Va(1, e)
            u.s([0, 0, 700], e)
            u.A([0, 0, 0], e)
            u.J([0, 0, 0], e)
            F.qb([-5000, 5000], e)
            F.rb([-3000, 3000], e)
            F.sb([-5000, 5000], e)
            X.setTransform(Matrix.translate(120, 0, 0), true)
            page_number_changed && s("periodic table")
        } else if (1 == J) {
            u.s([0, 0, 700], e)
            u.A([0, 0, 0], e)
            u.J([0, 0, 0], e)
            z.Wa(c, e, b)
            z.Va(1, e)
            F.qb([-5000, 5000], e)
            F.rb([-3000, 3000], e)
            F.sb([-5000, 5000], e)
            X.setTransform(Matrix.translate(0, 0, 0), true)
            page_number_changed && s("helix")
        } else if (2 == J) {
            u.s([0, 0, -500], e)
            u.A([0, 0, 0], e)
            u.J([0, 0, 0], e)
            z.Wa(f, e, b)
            z.Va(1, e)
            F.qb([-5000, 5000], e)
            F.rb([-3000, 3000], e)
            F.sb([-5000, 5000], e)
            X.setTransform(Matrix.translate(60, 0, 0), true)
            page_number_changed && s("wall of fame")
        } else if (0 == J) {
            u.s([0, 0, 800], e)
            u.A([0, 0, 0], e)
            u.J([0, 0, 0], e)
            z.Wa(j, e, b)
            z.Va(1, e)
            F.qb([-5000, 5000], e)
            F.rb([-3000, 3000], e)
            F.sb([-5000, 5000], e)
            X.setTransform(Matrix.translate(-60, 0, 0), true)
            page_number_changed && s("sphere")
        } else if (4 == J) {
            u.s([0, 0, -600], e)
            u.A([0, -Math.PI / 11, 0], e)
            u.J([0, 0, 0], e)
            z.Wa(k, e, b)
            z.Va(1, e)
            X.setTransform(Matrix.translate(-120, 0, 0), true)
            page_number_changed && s("paraflow")
        }

        4 == J ? Y.enable() : Y.disable()
        Z.Aa(J)
    }

    function b() {
        var a = {duration: 1000}
        h(L)
        u.s(La, a)
        u.A(lb, a)
        u.J(Ma, a)
    }

    function d(a) {
        Matrix.fa(z.O(a))
        L = a
        mb = z.O(a)
        z.Vb(a)
        ba.Aa(1)
        var b = S[a].Y.backgroundImage
        if (b) {
            S[a].pb({backgroundImage: ca[a].Y.backgroundImage})
            var c = new Image
            c.onload = function() {
                S[a].pb({backgroundImage: b})
            }
            c.src = b.substring(5, b.length - 2)
        }
        La = u.F().slice(0)
        lb = u.da().slice(0)
        Ma = u.La().slice(0)
        da.pb({backgroundColor: ca[a].Y.backgroundColor})
        c = Matrix.multiply(Matrix.translate(0, 0, -200), F.Bf(z.O(a)))
        u.Pf(c, {duration: 1000}, function() {
            L == a && (z.set(a, Matrix.scale(0, 0, 0)), G.Pc(function() {
                Na.show()
            }))
        })
        Y.Ec(a)
        Y.Te(a, 500)
        ia.disable()
    }

    function h(a) {
        ja.Mb(0)
        z.set(a, mb)
        z.mc(a)
        Y.If(a)
        L == a && (ia.enable(), L = -1, ba.Aa(0), Na.Na())
    }

    function s(a) {
        Oa.T(a)
        Pa.set(1, false)
        Pa.Na()
    }

    function E(b, c, d) {
        c = new A([60, 60], c)
        c.h("shape-button")
        c.m(new P)
        c.g("click", function() {
            t && (a(b), window._gaq && _gaq.push(["_trackEvent", "demo", "shapeshift", d, , false]))
        })
        return c
    }

    function K() {
        ua.Lf(1) && (ka.Na(), ua.Na(), T.Aa(0))
    }

    function D(a, b, c) {
        var d = "http://famo.us"
        b && (d += "/r/" + b)

        if (!c) {
            b = ["Wow! HTML5 performance solved. Check out famo.us Beta + Demo", "I can't believe what I saw HTML5 do."
              + " Check out famo.us Beta + Demo", "The famo.us demo just blew me away. Check out famo.us Beta + Demo"
              , "If I hadn't seen it, I wouldn't believe it: famo.us HTML5 Beta + Demo"
              , "I'm gunna go with holy shitsnacks! famo.us HTML5 Beta + Demo"]
            c = b[Math.floor(Math.random() * b.length)]
        }

        return '<a href="https://twitter.com/share?text=' + encodeURIComponent(c) + "&url=" + encodeURIComponent(d)
          + "&via=befamous\" onclick=\"event.preventDefault(); "
          + "window.open(event.currentTarget.href, '_blank', 'width=700,height=260');\">" + a + "</a>"
    }

    function C(a) {
        return D('<img src="content/icons/twitter.png" alt="Tweet" />', a, void 0)
    }

    function m() {
        ea.T("")
        ka.show()
        la.Ua(1)
        la.setTransform(Matrix.identity, true)
        Qa.Na()
        T.Aa(2)
    }

    function w() {
        ka.Na()
        la.setTransform(Matrix.move(Matrix.scale(0.0010, 0.0010, 0.0010) , [-0.5 * window.innerWidth, 0, 0]), true
          , function() {
                la.Ua(0)
            }
        )
        Qa.show()
        T.Aa(0)
        t = true
    }

    if (!("WebKitCSSMatrix" in window) || !("m11" in new WebKitCSSMatrix))
        window.location.pathname = "/c" + window.location.pathname
    else {
        document.title = "famo.us Stress Test Demo"
        var r = "Common" in window && "API" in Common
          , t = false
          , G = require("0/4")
          , A = require("0/b")
          , I = require("0/2")
          , Matrix = require("0/Matrix")
          , y = require("0/d")
          , M = require("0/e")
          , O = require("0/1")
          , W = require("0/5")
          , Eb = require("0/7")
          , va = require("0/6")
          , Fb = require("1/g")

        require("1/h")
        var Ra = require("1/p")
          , Gb = require("1/o")
          , Hb = require("1/n")
          , ma = require("1/j")
          , Ib = require("1/q")
          , wa = require("1/l")
          , fa = require("1/m")
          , Jb = require("1/k")
          , na = require("3/v")
          , Kb = require("3/w")
          , Lb = require("3/x")

        require("3/z")
        var Mb = require("3/10")
          , Nb = require("6/19")
          , Ob = require("6/1b")
          , Pb = require("6/1a")

        require("2/t")
        var P = require("4/13")
          , Qb = require("4/12")
          , Sa = require("6/18").wf
          , Rb = require("6/18").tf
          , nb = require("6/18").vf
          , ob = require("6/18").uf
          , oa = Sa.length
          , Ta = Array(oa)

        for (var i = 0; i < oa; i++) {
            Ta[i] = 0.1 + 0.7 * Math.random()
        }

        var ca
          , Va = Array(oa)

        for (var i = 0; i < Va.length; i++) {
            var xa = new A([120, 160])
            xa.pb({backgroundColor: "rgba(73,160,154," + Ta[i] + ")"})
            xa.h("periodic-item")
            xa.T('<div class="number">' + (i + 1)
              + '</div><div class="symbol">' + Sa[i]
              + '</div><div class="name">' + nb[i]
              + '</div><div class="mass">' + ob[i] + "</div>")
            Va[i] = xa
        }
        ca = Va

        var S
          , Wa = Array(oa)

        for (var i = 0; i < Wa.length; i++) {
            var ya = new A([360, 480])
            ya.pb({backgroundColor: "rgba(73,160,154," + Ta[i] + ")"})
            ya.h("periodic-item-hq")
            ya.T('<div class="number">' + (i + 1)
              + '</div><div class="symbol">' + Sa[i]
              + '</div><div class="name">' + nb[i]
              + '</div><div class="mass">' + ob[i] + "</div>")
            Wa[i] = ya
        }
        S = Wa
        var u = new Fb
        u.s([0, 0, 5000])
        u.A([0, 0, 0])
        u.J([0, -3 * Math.PI, 0])
        var F = new Jb(u)
          , Sb = new Ra(u)
          , Tb = new Gb(u, {
                I: 700
              , U: 2 * Math.PI
              , S: 2 * Math.PI
              , ed: 200
              , md: 200
              , gd: true
              , nd: true
              , Pa: true
            })
          , Ub = new Hb(u, {
                Pa: true
            })
          , Vb = new Ra(u, {
                I: 900
              , z: fa
              , ad: {
                    duration: 2000
                  , q: M.w.sf
                }
              ,Pa: true
            })
          , Wb = new Ra(u, {
                I: 700
              , Xa: 200 / Math.PI
              , z: fa,Pa: true
            })

        r && (ma = Ib)
        var Xb = new ma(u)
          , pb = new ma(u, {p: true})
          , Yb = new ma(u, {I: 700,Xa: 200 / Math.PI,p: true,Q: true,z: fa})
          , Zb = new ma(u, {I: 900,p: true,z: fa})
          , $b = new wa(u, {va: true})
          , qb = new wa(u, {va: true,p: true})
          , ac = new wa(u, {va: true,I: 700,Xa: 200 / Math.PI,p: true,Q: true,z: fa})
          , bc = new wa(u, {va: true,I: 900,p: true,z: fa})
          , ia = new Lb(function() {
            function b() {
                d.ib && setTimeout(function cc() {
                    if (d.ib) {
                        var a = u.da().slice(0)
                          , b = a.slice(0)
                          , c = 0.5 > Math.random() ? -1 : 1

                        0.5 > Math.random() ? b[0] += 2 * c * Math.PI : b[1] += 2 * c * Math.PI
                        u.A(b, {duration: 3000}, function() {
                            u.A(a)
                            setTimeout(cc, 10000)
                        })
                    }
                }, 10000)
            }
            function c() {
                d.ib && (z.Vd(z.all()), a(4, b))
            }
            var d = this
            0 == J ? c() : (a(0), setTimeout(c, 200))
        }, 15000)
        ia.disable()
        G.C(ia)
        var Y = new Ob(300, 2000, 1)
        Y.disable()

        var hb = 270
          , ib = 350
          , jb = 400
          , kb
          , za = []
          , rb = Math.floor(7)

        for (var i = 0; i <= rb; i++) {
            var sb = Math.PI / 2 - i * (Math.PI / rb), Aa = Math.floor(1400 * Math.PI * Math.cos(sb) / 160)
            0 == Aa && (Aa = 1)
            for (var iter = 0; iter < Aa; iter++) {
                var dc = iter * (2 * Math.PI / Aa) - Math.PI
                za.push(Matrix.multiply(Matrix.translate(0, 0, 700), Matrix.rotate_x(sb), Matrix.rotate_y_cw(dc)))
            }
        }

        while (118 > za.length) {
            za.push(Matrix.identity)
        }

        kb = function(a) {
            return 118 <= a ? Matrix.scale(0, 0, 0) : za[a]
        }
        var Z = new W(4)
        Z.L(3).m([Sb, pb, qb])
        Z.L(0).m([Tb, pb, qb])
        Z.L(4).m([Ub, Xb, $b])
        Z.L(1).m([Wb, Yb, ac])
        Z.L(2).m([Vb, Zb, bc])
        var tb = new va
        tb.on("keyup", function(b) {
            if (t)
                if (r) {
                    var c = new Common.API.TVKeyValue
                    b.keyCode == c.KEY_ENTER && a()
                } else
                    32 == b.keyCode && a()
        })
        var Ba = new va([new P, new Qb])

        Ba.on("click", function(a) {
            a.target == document.body && b()
        })

        Ba.on("pinch", function() {
            b()
        })

        Ba.on("keyup", function(a) {
            27 == a.keyCode ? b() : 32 == a.keyCode && ja.Mb()
        })

        var ba = new W(0)
          , z = new Mb(ca)

        z.Wa(g)
        z.Va(0)

        var ec = new Pb(z, 0.1)
          , Ca = new Nb(z, Rb)
          , Na = new na(0, false)
          , ja = new Kb
          , L = -1
          , La = void 0
          , lb = void 0
          , Ma = void 0
          , mb = void 0

        for (var i = 0; i < ca.length; i++) {
            ;(function(a, b) {
                b.m(new P)
                b.g("click", function() {
                    t && (0 > L ? d(a) : (h(L), d(a), La = [0, 0, 600], beforeRotate = [0, 0, 0], Ma = [0, 0, 0]))
                })
                b.g("hold", function() {
                    if (t) {
                        var b = Ca.kf(a)[0]
                        Ca.Kf(a) ? Ca.dg(b) : Ca.Ec(b)
                    }
                })
            }).call(this, i, ca[i])
        }

        for (var i = 0; i < S.length; i++) {
            S[i].m(new P), S[i].g("click", function() {
                ja.Mb(1)
            })
        }

        new M(0)
        var da = new A([360, 480], "Reserved for Future Examples")
        da.h("periodic-item-hq")
        da.h("periodic-item-back")
        da.m(new P)
        da.g("click", function() {
            ja.Mb(0)
        })
        var ub = new A([200, 32], "periodic table")
        ub.h("caption")
        var Oa = new A([600, 50], "")
        Oa.h("shape-flash")

        var Pa = new na(0, {duration: 1000,q: M.w.ease_in_quad})
          , X = new y(Matrix.translate(-120, 0, 0), 1, "b")

        X.ve({duration: 250,q: M.w.ease_in_out_quad})
        var vb = new A([60, 60], '<div class="shape-button-indicator-box"></div>')
        vb.h("shape-button-indicator")
        var fc = E(4, '<img src="content/icons/paraflow.png" alt="PF" />', "paraflow")
          , gc = E(3, '<img src="content/icons/periodic.png" alt="P" />', "periodic table")
          , hc = E(0, '<img src="content/icons/sphere.png" alt="S" />', "sphere")
          , ic = E(1, '<img src="content/icons/helix.png" alt="H" />', "helix")
          , jc = E(2, '<img src="content/icons/wall.png" alt="W" />', "wall of fame")
          , Za = new A([window.innerWidth, window.innerHeight])

        Za.h("obscure")
        var ka = new na(0), Da = new A([200, 60], "fun things to do &nbsp;&#9432;")
        Da.h("info-button")
        var ua = new na
        Da.m(new P)
        Da.g("click", function() {
            t && (ka.show(), ua.show(), T.Aa(1), window._gaq && _gaq.push(["_trackEvent", "sign-up", "info", , , true]))
        })
        sessionStorage.getItem("signedUp") ? (t = true, G.Pc(w)) : (t = false, G.Pc(m))
        var wb = new A([600, 400], "<h3>Fun Things to Do</h3><ul><li>One finger to scroll</li><li>"
          + "Two fingers to pinch zoom</li><li>Three fingers to plane in 3D</li>"
          + "<li>Touch any object to navigate to that object in 3D space</li>"
          + "<li>Touch-hold an object to disassemble any shape</li></ul>"
          + "<ul><li>Space key to shapeshift</li><li>WASD keys to move forward, left, backward, and right</li>"
          + "<li>Shift + W/S keys to move up/down</li><li>Arrow keys to rotate or spin</li>"
          + "<li>Hold Ctrl to enable mouse rotation</li></ul>")
        wb.h("info")
        var $a = new va([new P])
        $a.on("keyup", K)
        $a.on("click", K)
        var la = new y(Matrix.identity)
          , xb = new A([600, 500], '<h3>Welcome to <strong>famo.us</strong><br />'
              + '<span class="sub">a javascript engine and framework that solves HTML5 performance</span>'
              + '</h3><p>40-60fps on phones, tablets, PCs, and televisions<br /> '
              + 'mod a template, or piece together components<br /> no plug-ins, no WebGL, no Canvas<br /> '
              + 'works on modern browsers<br />everything is DOM<br /> 65KB footprint</p><p class="experience">'
              + 'sign up for the beta, then experience famo.us</p>')
        xb.h("signup-box")

        var ab = new A([600, 150], '<form method="POST" action="#">'
          + '<input id="email" type="text" size="30" name="email" maxlength="75" '
          + 'placeholder="enter email to sign up for beta" size="35" />'
          + '<input class="button" type="submit" value="sign up" /></form>')
        ab.h("signup")

        var ea = new A([600, 20])
        ea.h("signup-error")
        var Ea = new A([100, 100], '<img src="content/icons/circle-x.png" alt="x" />')
        Ea.h("signup-hide")
        Ea.m(new P)
        Ea.g("click", function() {
            w()
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "hide", , , false])
        })
        var Fa = new A([120, 30], "sign up for beta")
        Fa.h("signup-show")
        Fa.m(new P)
        Fa.g("click", function() {
            m()
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "show", , , false])
        })
        var Qa = new na(0)
          , pa = new O

        pa.f(xb)
        pa.f(new y(Matrix.translate(0, 175, 0.01))).append(ab)
        pa.f(new y(Matrix.translate(0, 210, 0.01))).append(ea)
        pa.f(new y(Matrix.translate(275, -225, 0.01))).append(Ea)
        window.addEventListener("submit", function(a) {
            a.preventDefault()

            var b = {}
              , a = a.target.querySelectorAll("input")

            for (var i = 0; i < a.length; i++) {
                var d = a[i]
                d.name && (b[d.name] = d.value)
            }
            a = document.location.href.split("/")
            b.referrerId = 2 <= a.length && "r" == a[a.length - 2] ? a[a.length - 1] : ""
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "submit", , 1, true])
            a = new XMLHttpRequest
            a.open("POST", "/developers")
            a.setRequestHeader("Content-Type", "application/json")
            a.onreadystatechange = function() {
                if (4 == this.readyState) {
                    if (200 == this.status) {
                        var a = JSON.parse(this.responseText)

                        if ("OK" == a.status) {
                            ea.T("")
                            ab.T("<p><strong>Success!</strong> We just sent you an email with some more information."
                              + " We'll send you updates soon.</p>"
                              + ('<div class="tweet-button">' + D("Tweet", a.socialId) + "</div>"))
                            Ga.T(C(a.socialId))
                            sessionStorage.setItem("signedUp", true)
                            window._gaq && _gaq.push(["_trackEvent", "sign-up", "success", , , false])
                        } else {
                            ea.T(a.msg)
                        }
                    } else {
                        ea.T("Ooops! Something went wrong. Try again.")
                        window._gaq && _gaq.push(["_trackEvent", "sign-up", "error", , , true])
                    }
                }
            }
            a.send(JSON.stringify(b))
        })
        var yb = new va
        yb.on("keyup", function(a) {
            if (r) {
                var b = new Common.API.TVKeyValue
                a.keyCode == b.KEY_EXIT && w()
            } else {
                27 == a.keyCode && w()
                13 == a.keyCode && (document.activeElement && "INPUT" != document.activeElement.nodeName) && w()
            }
        })
        var T = new W(0)
        T.L(0).m(ba)
        T.L(1).m($a)
        T.L(2).m(yb)
        var zb = new A([100, 60], "famo.us")
        zb.h("overlay-text")
        var Ha = new A([80, 60], '<a href="http://angel.co/famo-us" target="_blank">jobs</a>')
        Ha.h("jobs-button")
        Ha.h("overlay-text")
        Ha.g("click", function() {
            window._gaq && _gaq.push(["_trackEvent", "sign-up", "jobs", , , true])
        })
        var Ga = new A([60, 60], C())
        Ga.h("shape-button")
        Ga.g("click", function() {
            window._gaq && _gaq.push(["_trackEvent", "demo", "tweet", , , false])
        })
        var Ab = new A([300, 60], "&copy; 2012 Famous Industries, Inc.")
        Ab.h("copyright")
        var kc = G.Kd(document.querySelector("#main"))
          , Bb = G.Kd(document.querySelector("#overlay"))
          , bb = new O

        bb.f(new y(Matrix.move(Matrix.scale(3, 3, 3), [0, -1000, 0]))).append(ub)
        bb.f(F).append(Y).append(z)
        var cb = new O
        cb.f(u).append(bb)
        cb.f(Na).append(new y(Matrix.translate(0, 0, 200))).append(ja).append(function() {
            var a = {
                    transform: Matrix.scale(1 / 3, 1 / 3, 1 / 3)
                  , target: 0 <= L ? S[L] : null
                }
              , b = {
                    transform: Matrix.scale(1 / 3, 1 / 3, 1 / 3)
                  , target: da
                }

            return [a, b]
        })
        var Ia = new I([window.innerWidth, 60])
        Ia.h("bottom-bar")
        Bb.g("resize", function() {
            Ia.ka([window.innerWidth, 60])
            Za.ka([window.innerWidth, window.innerHeight])
        })
        var N = new O
        N.f(new y(Matrix.translate(240, 0), 1, "b")).append(Ga)
        N.f(new y(Matrix.translate(-120, 0), 1, "b")).append(fc)
        N.f(new y(Matrix.translate(120, 0), 1, "b")).append(gc)
        N.f(new y(Matrix.translate(0, 0), 1, "b")).append(ic)
        N.f(new y(Matrix.translate(60, 0), 1, "b")).append(jc)
        N.f(new y(Matrix.translate(-60, 0), 1, "b")).append(hc)
        N.f(new y(Matrix.translate(0, 0, 0.01), 1, "b")).append(X).append(vb)
        N.f(new y(Matrix.identity, 1, "br")).append(Da)
        N.f(new y(Matrix.identity, 1, "bl")).append(Ab)
        Ia.Db(N)
        var R = new O
        R.f(Pa).append(Oa)
        R.f(new y(Matrix.identity, 1, "tl")).append(zb)
        R.f(new y(Matrix.identity, 1, "tr")).append(Ha)
        R.f(new y(Matrix.translate(0, 0, 0), 1, "b")).append(Ia)
        R.f(new y(Matrix.translate(0, 0, 0.09))).append(ka).append(Za)
        R.f(new y(Matrix.translate(0, 0, 0.1))).append(ua).append(wb)
        R.f(new y(Matrix.translate(0, 0, 0.1))).append(la).append(pa)
        R.f(new y(Matrix.move(Matrix.rotate_z(Math.PI / 2), [-45, 0]), 1, "l")).append(Qa).append(Fa)
        kc.Db(cb)
        Bb.Db(R)
        ba.L(0).za(Z)
        ba.L(0).za(tb)
        ba.L(1).m(Ba)
        var db = new Eb
        db.za(T)
        db.za(ia)
        G.m(db)
        G.C(function() {
            if (4 == J) {
                var a = Math.ceil(oa / 15) * hb
                  , b = 5 * ib
                  , c = 3 * jb
                  , d = u.da()
                  , e = 0.5 * Math.abs(Math.sin(d[1]) + 1)
                  , d = 0.5 * Math.abs(-Math.sin(d[0]) + 1)

                F.qb([(e - 1) * a, e * a], false)
                F.rb([(d - 1) * b, d * b], false)
                F.sb([-c + 400, 400], false)
                ec.update()
            }
        })
        a(4)
    }
})

require(["app"])
