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
          , q: M.Easing.ease_out_quad
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
                  , q: M.Easing.sf
                }
              , Pa: true
            })
          , Wb = new Ra(u, {
                I: 700
              , Xa: 200 / Math.PI
              , z: fa
              , Pa: true
            })

        r && (ma = Ib)
        var Xb = new ma(u)
          , pb = new ma(u, {p: true})
          , Yb = new ma(u, {I: 700, Xa: 200 / Math.PI, p: true, Q: true, z: fa})
          , Zb = new ma(u, {I: 900, p: true, z: fa})
          , $b = new wa(u, {va: true})
          , qb = new wa(u, {va: true, p: true})
          , ac = new wa(u, {va: true, I: 700, Xa: 200 / Math.PI, p: true, Q: true, z: fa})
          , bc = new wa(u, {va: true, I: 900, p: true, z: fa})
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

        var Pa = new na(0, {duration: 1000, q: M.Easing.ease_in_quad})
          , X = new y(Matrix.translate(-120, 0, 0), 1, "b")

        X.ve({duration: 250, q: M.Easing.ease_in_out_quad})
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
