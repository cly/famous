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
      , on_touchstart: function(a) {
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
      , on_touchmove: function(a) {
            this.state == f.Fa && this.Yc(a)
            this.state == f.ba && this.kc(a)
            this.state == f.aa && this.fd(a)
        }
      , on_touchend: function(a) {
            this.state == f.Fa && (this.Xc(a), this.state = null)
            this.state == f.ba && 2 > a.touches.length && (this.jc(a), this.state = null)
            this.state == f.aa && 3 > a.touches.length && (this.dd(a), this.state = null)
        }
      , b: function(c, f) {
            if ("touchstart" == c) {
                this.on_touchstart(f)
            } else if ("touchmove" == c) {
                this.on_touchmove(f)
            } else if ("touchend" == c) {
                this.on_touchend(f)
            }
        }
    }

    Module.prototype.trigger = Module.prototype.b

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
