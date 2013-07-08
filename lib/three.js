define("3/x", ["require", "exports", "module"], function(require, exports, module) {
    function Module(callback, timeout) {
        this.callback = callback
        this.timeout = timeout
        this.enabled = 0 < timeout
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
            if (!this.running) {
                if (this.enabled && this.callback && (new Date).getTime() - this.last_reset > this.timeout) {
                    this.running = true
                    this.callback.call(this)
                }
            }
        }
      , reset: function() {
            this.last_reset = (new Date).getTime()
            this.running = false
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
