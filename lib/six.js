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
                  , easing: f.Easing.ease_in_out_quad
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
                    this.H[a].set(b, {duration: d, easing: f.Easing.ease_in_out_quad})
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
              , w = {duration: 2000, easing: f.Easing.ease_out_quad}
              , r = {duration: 1000, easing: f.Easing.ease_in_out_quad}

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
