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
