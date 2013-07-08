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
