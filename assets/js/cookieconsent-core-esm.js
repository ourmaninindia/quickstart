/*!
 * CookieConsent 3.0.0
 * https://github.com/orestbida/cookieconsent/tree/v3
 * Author Orest Bida
 * Released under the MIT License
 */
const e = 'opt-in',
	t = 'opt-out',
	n = 'show--consent',
	o = 'show--preferences',
	s = 'disable--interaction',
	a = 'data-category',
	c = 'div',
	r = 'button',
	i = 'aria-hidden',
	l = 'btn-group',
	d = 'click',
	f = 'data-role',
	_ = 'consentModal',
	u = 'preferencesModal';
class p {
	constructor() {
		this.t = {
			mode: e,
			revision: 0,
			autoShow: !0,
			lazyHtmlGeneration: !0,
			autoClearCookies: !0,
			manageScriptTags: !0,
			hideFromBots: !0,
			cookie: {
				name: 'cc_cookie',
				expiresAfterDays: 182,
				domain: '',
				path: '/',
				sameSite: 'Lax'
			}
		}, this.o = {
			i: {},
			l: '',
			_: {},
			u: {},
			p: {},
			m: [],
			v: !1,
			h: null,
			C: null,
			S: null,
			M: '',
			D: !0,
			T: !1,
			k: !1,
			A: !1,
			N: !1,
			H: [],
			V: !1,
			I: !0,
			L: [],
			j: !1,
			F: '',
			P: !1,
			O: [],
			R: [],
			B: [],
			G: [],
			J: !1,
			U: !1,
			$: !1,
			q: [],
			K: [],
			W: [],
			X: {},
			Y: {},
			Z: {},
			ee: {},
			te: {},
			ne: []
		}, this.oe = {
			se: {},
			ae: {}
		}, this.ce = {}, this.re = {
			ie: 'cc:onFirstConsent',
			le: 'cc:onConsent',
			de: 'cc:onChange',
			fe: 'cc:onModalShow',
			_e: 'cc:onModalHide',
			ue: 'cc:onModalReady'
		}
	}
}
const m = new p,
	g = (e, t) => e.indexOf(t),
	b = (e, t) => -1 !== g(e, t),
	v = e => Array.isArray(e),
	y = e => 'string' == typeof e,
	h = e => !!e && 'object' == typeof e && !v(e),
	C = e => 'function' == typeof e,
	w = e => Object.keys(e),
	S = e => Array.from(new Set(e)),
	x = () => document.activeElement,
	M = e => e.preventDefault(),
	D = (e, t) => e.querySelectorAll(t),
	T = e => e.dispatchEvent(new Event('change')),
	k = e => {
		const t = document.createElement(e);
		return e === r && (t.type = e), t
	},
	A = (e, t, n) => e.setAttribute(t, n),
	E = (e, t, n) => {
		e.removeAttribute(n ? 'data-' + t : t)
	},
	N = (e, t, n) => e.getAttribute(n ? 'data-' + t : t),
	H = (e, t) => e.appendChild(t),
	V = (e, t) => e.classList.add(t),
	I = (e, t) => V(e, 'cm__' + t),
	L = (e, t) => V(e, 'pm__' + t),
	j = (e, t) => e.classList.remove(t),
	F = e => {
		if ('object' != typeof e) return e;
		if (e instanceof Date) return new Date(e.getTime());
		let t = Array.isArray(e) ? [] : {};
		for (let n in e) {
			let o = e[n];
			t[n] = F(o)
		}
		return t
	},
	P = () => {
		const e = {},
			{
				O: t,
				X: n,
				Y: o
			} = m.o;
		for (const s of t) e[s] = G(o[s], w(n[s]));
		return e
	},
	O = (e, t) => dispatchEvent(new CustomEvent(e, {
		detail: t
	})),
	R = (e, t, n, o) => {
		e.addEventListener(t, n), o && m.o.m.push({
			pe: e,
			me: t,
			ge: n
		})
	},
	B = () => {
		const e = m.t.cookie.expiresAfterDays;
		return C(e) ? e(m.o.F) : e
	},
	G = (e, t) => {
		const n = e || [],
			o = t || [];
		return n.filter((e => !b(o, e))).concat(o.filter((e => !b(n, e))))
	},
	J = e => {
		m.o.R = S(e), m.o.F = (() => {
			let e = 'custom';
			const {
				R: t,
				O: n,
				B: o
			} = m.o, s = t.length;
			return s === n.length ? e = 'all' : s === o.length && (e = 'necessary'), e
		})()
	},
	U = (e, t, n, o) => {
		const s = 'accept-',
			{
				show: a,
				showPreferences: c,
				hide: r,
				hidePreferences: i,
				acceptCategory: l
			} = t,
			f = e || document,
			_ = e => D(f, `[data-cc="${e}"]`),
			u = (e, t) => {
				M(e), l(t), i(), r()
			},
			p = _('show-preferencesModal'),
			g = _('show-consentModal'),
			b = _(s + 'all'),
			v = _(s + 'necessary'),
			y = _(s + 'custom'),
			h = m.t.lazyHtmlGeneration;
		for (const e of p) A(e, 'aria-haspopup', 'dialog'), R(e, d, (e => {
			M(e), c()
		})), h && (R(e, 'mouseenter', (e => {
			M(e), m.o.N || n(t, o)
		}), !0), R(e, 'focus', (() => {
			m.o.N || n(t, o)
		})));
		for (let e of g) A(e, 'aria-haspopup', 'dialog'), R(e, d, (e => {
			M(e), a(!0)
		}), !0);
		for (let e of b) R(e, d, (e => {
			u(e, 'all')
		}), !0);
		for (let e of y) R(e, d, (e => {
			u(e)
		}), !0);
		for (let e of v) R(e, d, (e => {
			u(e, [])
		}), !0)
	},
	$ = (e, t) => {
		e && (t && (e.tabIndex = -1), e.focus(), t && e.removeAttribute('tabindex'))
	},
	z = (e, t) => {
		const n = o => {
			o.target.removeEventListener('transitionend', n), 'opacity' === o.propertyName && '1' === getComputedStyle(e).opacity && $((e => 1 === e ? m.oe.be : m.oe.ve)(t))
		};
		R(e, 'transitionend', n)
	};
let q;
const K = e => {
		clearTimeout(q), e ? V(m.oe.ye, s) : q = setTimeout((() => {
			j(m.oe.ye, s)
		}), 500)
	},
	Q = ['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5', 'M 3.572 13.406 L 8.281 18.115 L 20.428 5.885', 'M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],
	W = (e = 0, t = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Q[e]}"/></svg>`,
	X = e => {
		const t = m.oe,
			n = m.o;
		(e => {
			const o = e === t.he,
				s = n.i.disablePageInteraction ? t.ye : o ? t.Ce : t.ye;
			R(s, 'keydown', (t => {
				if ('Tab' !== t.key || !(o ? n.k && !n.A : n.A)) return;
				const s = x(),
					a = o ? n.q : n.K;
				0 !== a.length && (t.shiftKey ? s !== a[0] && e.contains(s) || (M(t), $(a[1])) : s !== a[1] && e.contains(s) || (M(t), $(a[0])))
			}), !0)
		})(e)
	},
	Y = ['[href]', r, 'input', 'details', '[tabindex]'].map((e => e + ':not([tabindex="-1"])')).join(','),
	Z = e => {
		const {
			o: t,
			oe: n
		} = m, o = (e, t) => {
			const n = D(e, Y);
			t[0] = n[0], t[1] = n[n.length - 1]
		};
		1 === e && t.T && o(n.he, t.q), 2 === e && t.N && o(n.we, t.K)
	},
	ee = (e, t, n) => {
		const {
			de: o,
			le: s,
			ie: a,
			_e: c,
			ue: r,
			fe: i
		} = m.ce, l = m.re;
		if (t) {
			const o = {
				modalName: t
			};
			return e === l.fe ? C(i) && i(o) : e === l._e ? C(c) && c(o) : (o.modal = n, C(r) && r(o)), O(e, o)
		}
		const d = {
			cookie: m.o.p
		};
		e === l.ie ? C(a) && a(F(d)) : e === l.le ? C(s) && s(F(d)) : (d.changedCategories = m.o.L, d.changedServices = m.o.ee, C(o) && o(F(d))), O(e, F(d))
	},
	te = (e, t) => {
		try {
			return e()
		} catch (e) {
			return !t && console.warn('CookieConsent:', e), !1
		}
	},
	ne = e => {
		const {
			Y: t,
			ee: n,
			O: o,
			X: s,
			ne: c,
			p: r,
			L: i
		} = m.o;
		for (const e of o) {
			const o = n[e] || t[e] || [];
			for (const n of o) {
				const o = s[e][n];
				if (!o) continue;
				const {
					onAccept: a,
					onReject: c
				} = o;
				!o.Se && b(t[e], n) && C(a) ? (o.Se = !0, a()) : o.Se && !b(t[e], n) && C(c) && (o.Se = !1, c())
			}
		}
		if (!m.t.manageScriptTags) return;
		const l = c,
			d = e || r.categories || [],
			f = (e, o) => {
				if (o >= e.length) return;
				const s = c[o];
				if (s.xe) return f(e, o + 1);
				const r = s.Me,
					l = s.De,
					_ = s.Te,
					u = b(d, l),
					p = !!_ && b(t[l], _);
				if (!_ && !s.ke && u || !_ && s.ke && !u && b(i, l) || _ && !s.ke && p || _ && s.ke && !p && b(n[l] || [], _)) {
					s.xe = !0;
					const t = N(r, 'type', !0);
					E(r, 'type', !!t), E(r, a);
					let n = N(r, 'src', !0);
					n && E(r, 'src', !0);
					const c = k('script');
					c.textContent = r.innerHTML;
					for (const {
							nodeName: e
						}
						of r.attributes) A(c, e, r[e] || N(r, e));
					t && (c.type = t), n ? c.src = n : n = r.src;
					const i = !!n && (!t || ['text/javascript', 'module'].includes(t));
					if (i && (c.onload = c.onerror = () => {
							f(e, ++o)
						}), r.replaceWith(c), i) return
				}
				f(e, ++o)
			};
		f(l, 0)
	},
	oe = 'bottom',
	se = 'left',
	ae = 'center',
	ce = 'right',
	re = 'inline',
	ie = 'wide',
	le = 'pm--',
	de = ['middle', 'top', oe],
	fe = [se, ae, ce],
	_e = {
		box: {
			Ae: [ie, re],
			Ee: de,
			Ne: fe,
			He: oe,
			Ve: ce
		},
		cloud: {
			Ae: [re],
			Ee: de,
			Ne: fe,
			He: oe,
			Ve: ae
		},
		bar: {
			Ae: [re],
			Ee: de.slice(1),
			Ne: [],
			He: oe,
			Ve: ''
		}
	},
	ue = {
		box: {
			Ae: [],
			Ee: [],
			Ne: [],
			He: '',
			Ve: ''
		},
		bar: {
			Ae: [ie],
			Ee: [],
			Ne: [se, ce],
			He: '',
			Ve: se
		}
	},
	pe = e => {
		const t = m.o.i.guiOptions,
			n = t && t.consentModal,
			o = t && t.preferencesModal;
		0 === e && me(m.oe.he, _e, n, 'cm--', 'box', 'cm'), 1 === e && me(m.oe.we, ue, o, le, 'box', 'pm')
	},
	me = (e, t, n, o, s, a) => {
		e.className = a;
		const c = n && n.layout,
			r = n && n.position,
			i = n && n.flipButtons,
			l = !n || !1 !== n.equalWeightButtons,
			d = c && c.split(' ') || [],
			f = d[0],
			_ = d[1],
			u = f in t ? f : s,
			p = t[u],
			g = b(p.Ae, _) && _,
			v = r && r.split(' ') || [],
			y = v[0],
			h = o === le ? v[0] : v[1],
			C = b(p.Ee, y) ? y : p.He,
			w = b(p.Ne, h) ? h : p.Ve,
			S = t => {
				t && V(e, o + t)
			};
		S(u), S(g), S(C), S(w), i && S('flip');
		const x = a + '__btn--secondary';
		if ('cm' === a) {
			const {
				Ie: e,
				Le: t
			} = m.oe;
			e && (l ? j(e, x) : V(e, x)), t && (l ? j(t, x) : V(t, x))
		} else {
			const {
				je: e
			} = m.oe;
			e && (l ? j(e, x) : V(e, x))
		}
	},
	ge = (e, t) => {
		const n = m.o,
			o = m.oe,
			{
				hide: s,
				hidePreferences: a,
				acceptCategory: _
			} = e,
			p = e => {
				_(e), a(), s()
			},
			g = n.u && n.u.preferencesModal;
		if (!g) return;
		const b = g.title,
			v = g.closeIconLabel,
			C = g.acceptAllBtn,
			S = g.acceptNecessaryBtn,
			x = g.savePreferencesBtn,
			M = g.sections || [],
			D = C || S || x;
		if (o.Fe) o.Pe = k(c), L(o.Pe, 'body');
		else {
			o.Fe = k(c), V(o.Fe, 'pm-wrapper');
			const e = k('div');
			V(e, 'pm-overlay'), H(o.Fe, e), R(e, d, a), o.we = k(c), V(o.we, 'pm'), A(o.we, 'role', 'dialog'), A(o.we, i, !0), A(o.we, 'aria-modal', !0), A(o.we, 'aria-labelledby', 'pm__title'), R(o.ye, 'keydown', (e => {
				27 === e.keyCode && a()
			}), !0), o.Oe = k(c), L(o.Oe, 'header'), o.Re = k('h2'), L(o.Re, 'title'), o.Re.id = 'pm__title', o.Be = k(r), L(o.Be, 'close-btn'), A(o.Be, 'aria-label', g.closeIconLabel || ''), R(o.Be, d, a), o.Ge = k('span'), o.Ge.innerHTML = W(), H(o.Be, o.Ge), o.Je = k(c), L(o.Je, 'body'), o.Ue = k(c), L(o.Ue, 'footer');
			var T = k(c);
			V(T, 'btns');
			var E = k(c),
				N = k(c);
			L(E, l), L(N, l), H(o.Ue, E), H(o.Ue, N), H(o.Oe, o.Re), H(o.Oe, o.Be), o.ve = k(c), A(o.ve, 'tabIndex', -1), H(o.we, o.ve), H(o.we, o.Oe), H(o.we, o.Je), D && H(o.we, o.Ue), H(o.Fe, o.we)
		}
		let I;
		b && (o.Re.innerHTML = b, v && A(o.Be, 'aria-label', v)), M.forEach(((e, t) => {
			const s = e.title,
				a = e.description,
				l = e.linkedCategory,
				f = l && n.P[l],
				_ = e.cookieTable,
				u = _ && _.body,
				p = _ && _.caption,
				m = u && u.length > 0,
				b = !!f,
				v = b && n.X[l],
				C = h(v) && w(v) || [],
				S = b && (!!a || !!m || w(v).length > 0);
			var x = k(c);
			if (L(x, 'section'), S || a) {
				var M = k(c);
				L(M, 'section-desc-wrapper')
			}
			let D = C.length;
			if (S && D > 0) {
				const e = k(c);
				L(e, 'section-services');
				for (const t of C) {
					const n = v[t],
						o = n && n.label || t,
						s = k(c),
						a = k(c),
						r = k(c),
						i = k(c);
					L(s, 'service'), L(i, 'service-title'), L(a, 'service-header'), L(r, 'service-icon');
					const d = be(o, t, f, !0, l);
					i.innerHTML = o, H(a, r), H(a, i), H(s, a), H(s, d), H(e, s)
				}
				H(M, e)
			}
			if (s) {
				var T = k(c),
					E = k(b ? r : c);
				if (L(T, 'section-title-wrapper'), L(E, 'section-title'), E.innerHTML = s, H(T, E), b) {
					const e = k('span');
					e.innerHTML = W(2, 3.5), L(e, 'section-arrow'), H(T, e), x.className += '--toggle';
					const t = be(s, l, f);
					let n = g.serviceCounterLabel;
					if (D > 0 && y(n)) {
						let e = k('span');
						L(e, 'badge'), L(e, 'service-counter'), A(e, i, !0), A(e, 'data-servicecounter', D), n && (n = n.split('|'), n = n.length > 1 && D > 1 ? n[1] : n[0], A(e, 'data-counterlabel', n)), e.innerHTML = D + (n ? ' ' + n : ''), H(E, e)
					}
					if (S) {
						L(x, 'section--expandable');
						var N = l + '-desc';
						A(E, 'aria-expanded', !1), A(E, 'aria-controls', N)
					}
					H(T, t)
				} else A(E, 'role', 'heading'), A(E, 'aria-level', '3');
				H(x, T)
			}
			if (a) {
				var F = k('p');
				L(F, 'section-desc'), F.innerHTML = a, H(M, F)
			}
			if (S && (A(M, i, 'true'), M.id = N, ((e, t, n) => {
					R(E, d, (() => {
						t.classList.contains('is-expanded') ? (j(t, 'is-expanded'), A(n, 'aria-expanded', 'false'), A(e, i, 'true')) : (V(t, 'is-expanded'), A(n, 'aria-expanded', 'true'), A(e, i, 'false'))
					}))
				})(M, x, E), m)) {
				const e = k('table'),
					n = k('thead'),
					s = k('tbody');
				if (p) {
					const t = k('caption');
					L(t, 'table-caption'), t.innerHTML = p, e.appendChild(t)
				}
				L(e, 'section-table'), L(n, 'table-head'), L(s, 'table-body');
				const a = _.headers,
					r = w(a),
					i = o.$e.createDocumentFragment(),
					l = k('tr');
				for (const e of r) {
					const n = a[e],
						o = k('th');
					o.id = 'cc__row-' + n + t, A(o, 'scope', 'col'), L(o, 'table-th'), o.innerHTML = n, H(i, o)
				}
				H(l, i), H(n, l);
				const d = o.$e.createDocumentFragment();
				for (const e of u) {
					const n = k('tr');
					L(n, 'table-tr');
					for (const o of r) {
						const s = a[o],
							r = e[o],
							i = k('td'),
							l = k(c);
						L(i, 'table-td'), A(i, 'data-column', s), A(i, 'headers', 'cc__row-' + s + t), l.insertAdjacentHTML('beforeend', r), H(i, l), H(n, i)
					}
					H(d, n)
				}
				H(s, d), H(e, n), H(e, s), H(M, e)
			}(S || a) && H(x, M);
			const P = o.Pe || o.Je;
			b ? (I || (I = k(c), L(I, 'section-toggles')), I.appendChild(x)) : I = null, H(P, I || x)
		})), C && (o.ze || (o.ze = k(r), L(o.ze, 'btn'), A(o.ze, f, 'all'), H(E, o.ze), R(o.ze, d, (() => p('all')))), o.ze.innerHTML = C), S && (o.je || (o.je = k(r), L(o.je, 'btn'), A(o.je, f, 'necessary'), H(E, o.je), R(o.je, d, (() => p([])))), o.je.innerHTML = S), x && (o.qe || (o.qe = k(r), L(o.qe, 'btn'), L(o.qe, 'btn--secondary'), A(o.qe, f, 'save'), H(N, o.qe), R(o.qe, d, (() => p()))), o.qe.innerHTML = x), o.Pe && (o.we.replaceChild(o.Pe, o.Je), o.Je = o.Pe), pe(1), n.N || (n.N = !0, ee(m.re.ue, u, o.we), t(e), H(o.Ce, o.Fe), X(o.we), setTimeout((() => V(o.Fe, 'cc--anim')), 100)), Z(2)
	};

function be(e, t, n, o, s) {
	const c = m.o,
		r = m.oe,
		l = k('label'),
		f = k('input'),
		_ = k('span'),
		u = k('span'),
		p = k('span'),
		g = k('span'),
		v = k('span');
	if (g.innerHTML = W(1, 3), v.innerHTML = W(0, 3), f.type = 'checkbox', V(l, 'section__toggle-wrapper'), V(f, 'section__toggle'), V(g, 'toggle__icon-on'), V(v, 'toggle__icon-off'), V(_, 'toggle__icon'), V(u, 'toggle__icon-circle'), V(p, 'toggle__label'), A(_, i, 'true'), o ? (V(l, 'toggle-service'), A(f, a, s), r.ae[s][t] = f) : r.se[t] = f, o ? (e => {
			R(f, 'change', (() => {
				const t = r.ae[e],
					n = r.se[e];
				c.Z[e] = [];
				for (let n in t) {
					const o = t[n];
					o.checked && c.Z[e].push(o.value)
				}
				n.checked = c.Z[e].length > 0
			}))
		})(s) : (e => {
			R(f, d, (() => {
				const t = r.ae[e],
					n = f.checked;
				c.Z[e] = [];
				for (let o in t) t[o].checked = n, n && c.Z[e].push(o)
			}))
		})(t), f.value = t, p.textContent = e.replace(/<.*>.*<\/.*>/gm, ''), H(u, v), H(u, g), H(_, u), c.D)(n.readOnly || n.enabled) && (f.checked = !0);
	else if (o) {
		const e = c.Y[s];
		f.checked = n.readOnly || b(e, t)
	} else b(c.R, t) && (f.checked = !0);
	return n.readOnly && (f.disabled = !0), H(l, f), H(l, _), H(l, p), l
}
const ve = () => {
		const e = k('span');
		return m.oe.Ke || (m.oe.Ke = e), e
	},
	ye = (e, t) => {
		const n = m.o,
			o = m.oe,
			{
				hide: s,
				showPreferences: a,
				acceptCategory: u
			} = e,
			p = n.u && n.u.consentModal;
		if (!p) return;
		const g = p.acceptAllBtn,
			b = p.acceptNecessaryBtn,
			v = p.showPreferencesBtn,
			y = p.closeIconLabel,
			h = p.footer,
			C = p.label,
			w = p.title,
			S = e => {
				s(), u(e)
			};
		if (!o.Qe) {
			o.Qe = k(c), o.he = k(c), o.We = k(c), o.Xe = k(c), o.Ye = k(c), V(o.Qe, 'cm-wrapper'), V(o.he, 'cm'), I(o.We, 'body'), I(o.Xe, 'texts'), I(o.Ye, 'btns'), A(o.he, 'role', 'dialog'), A(o.he, 'aria-modal', 'true'), A(o.he, i, 'false'), A(o.he, 'aria-describedby', 'cm__desc'), C ? A(o.he, 'aria-label', C) : w && A(o.he, 'aria-labelledby', 'cm__title');
			const e = 'box',
				t = n.i.guiOptions,
				s = t && t.consentModal,
				a = (s && s.layout || e).split(' ')[0] === e;
			w && y && a && (o.Le || (o.Le = k(r), o.Le.innerHTML = W(), I(o.Le, 'btn'), I(o.Le, 'btn--close'), R(o.Le, d, (() => {
				S([])
			})), H(o.We, o.Le)), A(o.Le, 'aria-label', y)), H(o.We, o.Xe), (g || b || v) && H(o.We, o.Ye), o.be = k(c), A(o.be, 'tabIndex', -1), H(o.he, o.be), H(o.he, o.We), H(o.Qe, o.he)
		}
		w && (o.Ze || (o.Ze = k('h2'), o.Ze.className = o.Ze.id = 'cm__title', H(o.Xe, o.Ze)), o.Ze.innerHTML = w);
		let x = p.description;
		if (x && (n.V && (x = x.replace('{{revisionMessage}}', n.I ? '' : p.revisionMessage || '')), o.et || (o.et = k('p'), o.et.className = o.et.id = 'cm__desc', H(o.Xe, o.et)), o.et.innerHTML = x), g && (o.tt || (o.tt = k(r), H(o.tt, ve()), I(o.tt, 'btn'), A(o.tt, f, 'all'), R(o.tt, d, (() => {
				S('all')
			}))), o.tt.firstElementChild.innerHTML = g), b && (o.Ie || (o.Ie = k(r), H(o.Ie, ve()), I(o.Ie, 'btn'), A(o.Ie, f, 'necessary'), R(o.Ie, d, (() => {
				S([])
			}))), o.Ie.firstElementChild.innerHTML = b), v && (o.nt || (o.nt = k(r), H(o.nt, ve()), I(o.nt, 'btn'), I(o.nt, 'btn--secondary'), A(o.nt, f, 'show'), R(o.nt, 'mouseenter', (() => {
				n.N || ge(e, t)
			})), R(o.nt, d, a)), o.nt.firstElementChild.innerHTML = v), o.ot || (o.ot = k(c), I(o.ot, l), g && H(o.ot, o.tt), b && H(o.ot, o.Ie), (g || b) && H(o.We, o.ot), H(o.Ye, o.ot)), o.nt && !o.st && (o.st = k(c), o.Ie && o.tt ? (I(o.st, l), H(o.st, o.nt), H(o.Ye, o.st)) : (H(o.ot, o.nt), I(o.ot, l + '--uneven'))), h) {
			if (!o.ct) {
				let e = k(c),
					t = k(c);
				o.ct = k(c), I(e, 'footer'), I(t, 'links'), I(o.ct, 'link-group'), H(t, o.ct), H(e, t), H(o.he, e)
			}
			o.ct.innerHTML = h
		}
		pe(0), n.T || (n.T = !0, ee(m.re.ue, _, o.he), t(e), H(o.Ce, o.Qe), X(o.he), setTimeout((() => V(o.Qe, 'cc--anim')), 100)), Z(1), U(o.We, e, ge, t)
	},
	he = e => {
		if (!y(e)) return null;
		if (e in m.o._) return e;
		let t = e.slice(0, 2);
		return t in m.o._ ? t : null
	},
	Ce = () => m.o.l || m.o.i.language.default,
	we = e => {
		e && (m.o.l = e)
	},
	Se = async e => {
		const t = m.o;
		let n = he(e) ? e : Ce(),
			o = t._[n];
		if (!o) return !1;
		if (y(o)) {
			const e = await (async e => {
				try {
					const t = await fetch(e);
					return await t.json()
				} catch (e) {
					return console.error(e), !1
				}
			})(o);
			if (!e) return !1;
			o = e
		}
		return t.u = o, we(n), !0
	}, xe = () => {
		let e = m.o.i.language.rtl,
			t = m.oe.Ce;
		e && t && (v(e) || (e = [e]), b(e, m.o.l) ? V(t, 'cc--rtl') : j(t, 'cc--rtl'))
	}, Me = () => {
		const e = m.oe;
		if (e.Ce) return;
		e.Ce = k(c), e.Ce.id = 'cc-main', e.Ce.setAttribute('data-nosnippet', ''), xe();
		let t = m.o.i.root;
		t && y(t) && (t = document.querySelector(t)), (t || e.$e.body).appendChild(e.Ce)
	}, De = e => te((() => localStorage.removeItem(e))), Te = (e, t) => {
		if (t instanceof RegExp) return e.filter((e => t.test(e)));
		{
			const n = g(e, t);
			return n > -1 ? [e[n]] : []
		}
	}, ke = e => {
		const {
			hostname: t,
			protocol: n
		} = location, {
			name: o,
			path: s,
			domain: a,
			sameSite: c,
			useLocalStorage: r
		} = m.t.cookie, i = e ? (() => {
			const e = m.o.S,
				t = e ? new Date - e : 0;
			return 864e5 * B() - t
		})() : 864e5 * B(), l = new Date;
		l.setTime(l.getTime() + i), m.o.p.expirationTime = l.getTime();
		const d = JSON.stringify(m.o.p);
		let f = o + '=' + encodeURIComponent(d) + (0 !== i ? '; expires=' + l.toUTCString() : '') + '; Path=' + s + '; SameSite=' + c;
		b(t, '.') && (f += '; Domain=' + a), 'https:' === n && (f += '; Secure'), r ? ((e, t) => {
			te((() => localStorage.setItem(e, t)))
		})(o, d) : document.cookie = f, m.o.p
	}, Ae = (e, t, n) => {
		if (0 === e.length) return;
		const o = n || m.t.cookie.domain,
			s = t || m.t.cookie.path,
			a = 'www.' === o.slice(0, 4),
			c = a && o.substring(4),
			r = (e, t) => {
				document.cookie = e + '=; path=' + s + (t ? '; domain=.' + t : '') + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
			};
		for (const t of e) r(t), r(t, o), a && r(t, c)
	}, Ee = e => {
		const t = e || m.t.cookie.name,
			n = m.t.cookie.useLocalStorage;
		return ((e, t) => {
			let n;
			return n = te((() => JSON.parse(t ? e : decodeURIComponent(e))), !0) || {}, n
		})(n ? (o = t, te((() => localStorage.getItem(o))) || '') : Ne(t, !0), n);
		var o
	}, Ne = (e, t) => {
		const n = document.cookie.match('(^|;)\\s*' + e + '\\s*=\\s*([^;]+)');
		return n ? t ? n.pop() : e : ''
	}, He = e => {
		const t = document.cookie.split(/;\s*/),
			n = [];
		for (const o of t) {
			let t = o.split('=')[0];
			e ? te((() => {
				e.test(t) && n.push(t)
			})) : n.push(t)
		}
		return n
	}, Ve = (n, o = []) => {
		((e, t) => {
			const {
				O: n,
				R: o,
				B: s,
				N: a,
				Z: c,
				X: r
			} = m.o;
			let i = [];
			if (e) {
				v(e) ? i.push(...e) : y(e) && (i = 'all' === e ? n : [e]);
				for (const e of n) c[e] = b(i, e) ? w(r[e]) : []
			} else i = o, a && (i = (() => {
				const e = m.oe.se;
				if (!e) return [];
				let t = [];
				for (let n in e) e[n].checked && t.push(n);
				return t
			})());
			i = i.filter((e => !b(n, e) || !b(t, e))), i.push(...s), J(i)
		})(n, o), (e => {
			const t = m.o,
				{
					Z: n,
					B: o,
					Y: s,
					X: a,
					O: c
				} = t,
				r = c;
			t.te = F(s);
			for (const e of r) {
				const t = a[e],
					c = w(t),
					r = n[e] && n[e].length > 0,
					i = b(o, e);
				if (0 !== c.length) {
					if (s[e] = [], i) s[e].push(...c);
					else if (r) {
						const t = n[e];
						s[e].push(...t)
					} else s[e] = [];
					s[e] = S(s[e])
				}
			}
		})(), (() => {
			const n = m.o;
			n.L = m.t.mode === t && n.D ? G(n.G, n.R) : G(n.R, n.p.categories);
			let o = n.L.length > 0,
				s = !1;
			for (const e of n.O) n.ee[e] = G(n.Y[e], n.te[e]), n.ee[e].length > 0 && (s = !0);
			const a = m.oe.se;
			for (const e in a) a[e].checked = b(n.R, e);
			for (const e of n.O) {
				const t = m.oe.ae[e],
					o = n.Y[e];
				for (const e in t) t[e].checked = b(o, e)
			}
			n.C || (n.C = new Date), n.M || (n.M = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))), n.p = {
				categories: F(n.R),
				revision: m.t.revision,
				data: n.h,
				consentTimestamp: n.C.toISOString(),
				consentId: n.M,
				services: F(n.Y)
			};
			let c = !1;
			const r = o || s;
			(n.D || r) && (n.D && (n.D = !1, c = !0), n.S = n.S ? new Date : n.C, n.p.lastConsentTimestamp = n.S.toISOString(), ke(), m.t.autoClearCookies && (c || r) && (e => {
				const t = m.o,
					n = He(),
					o = (e => {
						const t = m.o;
						return (e ? t.O : t.L).filter((e => {
							const n = t.P[e];
							return !!n && !n.readOnly && !!n.autoClear
						}))
					})(e);
				for (const e in t.ee)
					for (const o of t.ee[e]) {
						const s = t.X[e][o].cookies;
						if (!b(t.Y[e], o) && s)
							for (const e of s) {
								const t = Te(n, e.name);
								Ae(t, e.path, e.domain)
							}
					}
				for (const s of o) {
					const o = t.P[s].autoClear,
						a = o && o.cookies || [],
						c = b(t.L, s),
						r = !b(t.R, s),
						i = c && r;
					if (e ? r : i) {
						o.reloadPage && i && (t.j = !0);
						for (const e of a) {
							const t = Te(n, e.name);
							Ae(t, e.path, e.domain)
						}
					}
				}
			})(c), ne()), c && (ee(m.re.ie), ee(m.re.le), m.t.mode === e) || (r && ee(m.re.de), n.j && (n.j = !1, location.reload()))
		})()
	}, Ie = e => {
		const t = m.o.D ? [] : m.o.R;
		return b(t, e)
	}, Le = (e, t) => {
		const {
			O: n,
			X: o
		} = m.o;
		if (!(e && t && y(t) && b(n, t) && 0 !== w(o[t]).length)) return !1;
		((e, t) => {
			const n = m.o,
				{
					X: o,
					Z: s,
					N: a
				} = n,
				c = m.oe.ae[t] || {},
				r = m.oe.se[t] || {},
				i = w(o[t]);
			if (s[t] = [], y(e)) {
				if ('all' === e) {
					if (s[t].push(...i), a)
						for (let e in c) c[e].checked = !0, T(c[e])
				} else if (b(i, e) && s[t].push(e), a)
					for (let t in c) c[t].checked = e === t, T(c[t])
			} else if (v(e))
				for (let n of i) {
					const o = b(e, n);
					o && s[t].push(n), a && (c[n].checked = o, T(c[n]))
				}
			const l = 0 === s[t].length;
			n.R = l ? n.R.filter((e => e !== t)) : S([...n.R, t]), a && (r.checked = !l, T(r))
		})(e, t), Ve()
	}, je = (e, t) => {
		const n = m.o.D ? [] : m.o.Y[t];
		return b(n, e)
	}, Fe = e => '' !== Ne(e, !0), Pe = (e, t, n) => {
		let o = [];
		const s = e => {
			if (y(e)) {
				let t = Ne(e);
				'' !== t && o.push(t)
			} else o.push(...He(e))
		};
		if (v(e))
			for (let t of e) s(t);
		else s(e);
		Ae(o, t, n)
	}, Oe = e => {
		const {
			oe: t,
			o: o
		} = m;
		if (!o.k) {
			if (!o.T) {
				if (!e) return;
				ye(Je, Me)
			}
			o.k = !0, o.U = x(), o.v && K(!0), z(t.he, 1), V(t.ye, n), A(t.he, i, 'false'), setTimeout((() => {
				$(m.oe.be)
			}), 100), ee(m.re.fe, _)
		}
	}, Re = () => {
		const {
			oe: e,
			o: t,
			re: o
		} = m;
		t.k && (t.k = !1, t.v && K(), $(e.Ke, !0), j(e.ye, n), A(e.he, i, 'true'), $(t.U), t.U = null, ee(o._e, _))
	}, Be = () => {
		const e = m.o;
		e.A || (e.N || ge(Je, Me), e.A = !0, e.k ? e.$ = x() : e.U = x(), z(m.oe.we, 2), V(m.oe.ye, o), A(m.oe.we, i, 'false'), setTimeout((() => {
			$(m.oe.ve)
		}), 100), ee(m.re.fe, u))
	}, Ge = () => {
		const e = m.o;
		e.A && (e.A = !1, (() => {
			const e = We(),
				t = m.o.P,
				n = m.oe.se,
				o = m.oe.ae,
				s = e => b(m.o.G, e);
			for (const a in n) {
				const c = !!t[a].readOnly;
				n[a].checked = c || (e ? Ie(a) : s(a));
				for (const t in o[a]) o[a][t].checked = c || (e ? je(t, a) : s(a))
			}
		})(), $(m.oe.Ge, !0), j(m.oe.ye, o), A(m.oe.we, i, 'true'), e.k ? ($(e.$), e.$ = null) : ($(e.U), e.U = null), ee(m.re._e, u))
	};
var Je = {
	show: Oe,
	hide: Re,
	showPreferences: Be,
	hidePreferences: Ge,
	acceptCategory: Ve
};
const Ue = async (e, t) => {
	if (!he(e)) return !1;
	const n = m.o;
	return !(e === Ce() && !0 !== t || !await Se(e) || (we(e), n.T && ye(Je, Me), n.N && ge(Je, Me), xe(), 0))
}, $e = () => {
	const {
		F: e,
		Y: t
	} = m.o, {
		accepted: n,
		rejected: o
	} = (() => {
		const {
			D: e,
			R: t,
			O: n
		} = m.o;
		return {
			accepted: t,
			rejected: e ? [] : n.filter((e => !b(t, e)))
		}
	})();
	return F({
		acceptType: e,
		acceptedCategories: n,
		rejectedCategories: o,
		acceptedServices: t,
		rejectedServices: P()
	})
}, ze = (e, t) => {
	let n = document.querySelector('script[src="' + e + '"]');
	return new Promise((o => {
		if (n) return o(!0);
		if (n = k('script'), h(t))
			for (const e in t) A(n, e, t[e]);
		n.onload = () => o(!0), n.onerror = () => {
			n.remove(), o(!1)
		}, n.src = e, H(document.head, n)
	}))
}, qe = e => {
	let t, n = e.value,
		o = e.mode,
		s = !1;
	const a = m.o;
	if ('update' === o) {
		a.h = t = Ke('data');
		const e = typeof t == typeof n;
		if (e && 'object' == typeof t) {
			!t && (t = {});
			for (let e in n) t[e] !== n[e] && (t[e] = n[e], s = !0)
		} else !e && t || t === n || (t = n, s = !0)
	} else t = n, s = !0;
	return s && (a.h = t, a.p.data = t, ke(!0)), s
}, Ke = (e, t) => {
	const n = Ee(t);
	return e ? n[e] : n
}, Qe = e => {
	const t = m.t,
		n = m.o.i;
	return e ? t[e] || n[e] : {
		...t,
		...n,
		cookie: {
			...t.cookie
		}
	}
}, We = () => !m.o.D, Xe = async e => {
	const {
		o: n,
		t: o,
		re: s
	} = m, c = window;
	if (!c._ccRun) {
		if (c._ccRun = !0, (e => {
				const {
					oe: n,
					t: o,
					o: s
				} = m, c = o, r = s, {
					cookie: i
				} = c, l = m.ce, d = e.cookie, f = e.categories, _ = w(f) || [], u = navigator, p = document;
				n.$e = p, n.ye = p.documentElement, i.domain = location.hostname, r.i = e, r.P = f, r.O = _, r._ = e.language.translations, r.v = !!e.disablePageInteraction, l.ie = e.onFirstConsent, l.le = e.onConsent, l.de = e.onChange, l._e = e.onModalHide, l.fe = e.onModalShow, l.ue = e.onModalReady;
				const {
					mode: g,
					autoShow: v,
					lazyHtmlGeneration: y,
					autoClearCookies: C,
					revision: S,
					manageScriptTags: x,
					hideFromBots: M
				} = e;
				g === t && (c.mode = g), 'boolean' == typeof C && (c.autoClearCookies = C), 'boolean' == typeof x && (c.manageScriptTags = x), 'number' == typeof S && S >= 0 && (c.revision = S, r.V = !0), 'boolean' == typeof v && (c.autoShow = v), 'boolean' == typeof y && (c.lazyHtmlGeneration = y), !1 === M && (c.hideFromBots = !1), !0 === c.hideFromBots && u && (r.J = u.userAgent && /bot|crawl|spider|slurp|teoma/i.test(u.userAgent) || u.webdriver), h(d) && (c.cookie = {
					...i,
					...d
				}), c.autoClearCookies, r.V, c.manageScriptTags, (e => {
					const {
						P: t,
						X: n,
						Y: o,
						Z: s,
						B: a
					} = m.o;
					for (let c of e) {
						const e = t[c],
							r = e.services || {},
							i = h(r) && w(r) || [];
						n[c] = {}, o[c] = [], s[c] = [], e.readOnly && (a.push(c), o[c] = i), m.oe.ae[c] = {};
						for (let e of i) {
							const t = r[e];
							t.Se = !1, n[c][e] = t
						}
					}
				})(_), (() => {
					if (!m.t.manageScriptTags) return;
					const e = m.o,
						t = D(document, 'script[' + a + ']');
					for (const n of t) {
						let t = N(n, a),
							o = n.dataset.service || '',
							s = !1;
						if (t && '!' === t.charAt(0) && (t = t.slice(1), s = !0), '!' === o.charAt(0) && (o = o.slice(1), s = !0), b(e.O, t) && (e.ne.push({
								Me: n,
								xe: !1,
								ke: s,
								De: t,
								Te: o
							}), o)) {
							const n = e.X[t];
							n[o] || (n[o] = {
								Se: !1
							})
						}
					}
				})(), we((() => {
					const e = m.o.i.language.autoDetect;
					if (e) {
						const t = {
								browser: navigator.language,
								document: document.documentElement.lang
							},
							n = he(t[e]);
						if (n) return n
					}
					return Ce()
				})())
			})(e), n.J) return;
		(() => {
			const e = m.o,
				n = m.t,
				o = Ee(),
				{
					categories: s,
					services: a,
					consentId: c,
					consentTimestamp: r,
					lastConsentTimestamp: i,
					data: l,
					revision: d
				} = o,
				f = v(s);
			e.p = o, e.M = c;
			const _ = !!c && y(c);
			e.C = r, e.C && (e.C = new Date(r)), e.S = i, e.S && (e.S = new Date(i)), e.h = void 0 !== l ? l : null, e.V && _ && d !== n.revision && (e.I = !1), e.D = !(_ && e.I && e.C && e.S && f), n.cookie.useLocalStorage && !e.D && (e.D = (new Date).getTime() > (o.expirationTime || 0), e.D && De(n.cookie.name)), e.D, (() => {
				const e = m.o;
				for (const n of e.O) {
					const o = e.P[n];
					if (o.readOnly || o.enabled && e.i.mode === t) {
						e.G.push(n);
						const t = e.X[n] || {};
						for (let o in t) e.Y[n].push(o)
					}
				}
			})(), e.D ? n.mode === t && (e.R = [...e.G]) : (e.Y = {
				...e.Y,
				...a
			}, J([...e.B, ...s])), e.Z = {
				...e.Y
			}
		})();
		const i = We();
		if (!await Se()) return !1;
		if (U(null, r = Je, ge, Me), m.o.D && ye(r, Me), m.t.lazyHtmlGeneration || ge(r, Me), o.autoShow && !i && Oe(!0), i) return ne(), ee(s.le);
		o.mode === t && ne(n.G)
	}
	var r
}, Ye = e => {
	const {
		Ce: t,
		ye: a
	} = m.oe, {
		name: c,
		path: r,
		domain: i,
		useLocalStorage: l
	} = m.t.cookie;
	e && (l ? De(c) : Pe(c, r, i));
	for (const {
			pe: e,
			me: t,
			ge: n
		}
		of m.o.m) e.removeEventListener(t, n);
	t && t.remove(), a && a.classList.remove(s, o, n);
	const d = new p;
	for (const e in m) m[e] = d[e];
	window._ccRun = !1
};
export {
	Ve as acceptCategory, 
	Le as acceptService, 
	Ie as acceptedCategory, 
	je as acceptedService, 
	Pe as eraseCookies, 
	Qe as getConfig, 
	Ke as getCookie, 
	$e as getUserPreferences, 
	Re as hide, 
	Ge as hidePreferences, 
	ze as loadScript, 
	Ye as reset, 
	Xe as run, 
	qe as setCookieData, 
	Ue as setLanguage, 
	Oe as show, 
	Be as showPreferences, 
	We as validConsent, 
	Fe as validCookie
};