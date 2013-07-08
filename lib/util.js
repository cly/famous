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
