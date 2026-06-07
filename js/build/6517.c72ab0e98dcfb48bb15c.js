// "use strict";
// (globalThis.webpackChunkladys = globalThis.webpackChunkladys || []).push([[6517], {
//     36517(e, r, a) {
//         a.d(r, {
//             initAdvertCreateReviewPlaceholder: () => n
//         });
//         var s = a(5338)
//           , i = a(71468)
//           , t = a(47992)
//           , l = a(94415)
//           , d = a(95030)
//           , c = a(74848);
//         const n = e => {
//             const r = Number(e.dataset.id)
//               , a = JSON.parse(e.dataset.services);
//             (0,
//             s.createRoot)(e).render((0,
//             c.jsx)(i.Kq, {
//                 store: d.M,
//                 children: (0,
//                 c.jsx)(t.Kd, {
//                     children: (0,
//                     c.jsx)("div", {
//                         className: "mx-n3 mx-lg-0",
//                         children: (0,
//                         c.jsx)(l.k, {
//                             id: r,
//                             services: a,
//                             onAfterSaveReview: () => new Promise(e => {
//                                 $.pjax.reload("#pjax-advert-reviews-container"),
//                                 $("#pjax-advert-reviews-container").one("pjax:complete", () => {
//                                     e()
//                                 }
//                                 )
//                             }
//                             )
//                         })
//                     })
//                 })
//             }))
//         }
//     },
//     94415(e, r, a) {
//         a.d(r, {
//             k: () => v
//         });
//         var s = a(96540)
//           , i = a(46942)
//           , t = a.n(i)
//           , l = a(89365)
//           , d = a(81592)
//           , c = a(12333)
//           , n = a(52516)
//           , o = a(74848);
//         const v = ({id: e, services: r, onAfterSaveReview: a=null, review: i=null}) => {
//             const [v,m] = (0,
//             s.useState)(!1)
//               , x = () => {
//                 m(!0)
//             }
//             ;
//             return (0,
//             o.jsxs)(o.Fragment, {
//                 children: [(0,
//                 o.jsxs)("div", {
//                     className: "color-bg-brown-medium py-4 px-3 fs-lg color-white",
//                     children: [(0,
//                     o.jsxs)("div", {
//                         className: "color-primary fs-big-extra mb-4",
//                         children: [(0,
//                         o.jsx)("b", {
//                             className: "me-1",
//                             children: (0,
//                             o.jsxs)(l.If, {
//                                 condition: Boolean(i),
//                                 children: [(0,
//                                 o.jsx)(l.al, {
//                                     children: d.y.tForReact("advert_createReviewPlaceholder", "Edit REVIEW")
//                                 }), (0,
//                                 o.jsx)(l._I, {
//                                     children: d.y.tForReact("advert_createReviewPlaceholder", "Add REVIEW")
//                                 })]
//                             })
//                         }), d.y.tForReact("advert_createReviewPlaceholder", "about girl")]
//                     }), (0,
//                     o.jsxs)("div", {
//                         className: "row",
//                         children: [(0,
//                         o.jsx)("div", {
//                             className: "col-md-6",
//                             children: r.map( (e, r) => {
//                                 let a = 0;
//                                 if (i) {
//                                     const r = i.services.find(r => r.serviceId === e.id);
//                                     a = r?.value || a
//                                 }
//                                 return (0,
//                                 o.jsxs)("div", {
//                                     className: t()("d-flex align-items-center", {
//                                         "mt-3": r > 0
//                                     }),
//                                     children: [(0,
//                                     o.jsx)("div", {
//                                         className: "w-130px",
//                                         children: e.title
//                                     }), (0,
//                                     o.jsx)(c.A, {
//                                         rating: a,
//                                         starDimension: "25px",
//                                         changeRating: x
//                                     })]
//                                 }, e.id)
//                             }
//                             )
//                         }), (0,
//                         o.jsx)("div", {
//                             className: "col-md-6",
//                             children: ( () => {
//                                 let e = d.y.tForReact("advert_createReviewPlaceholder", "Additional text");
//                                 return i && i.comment && (e = i.comment),
//                                 (0,
//                                 o.jsx)("textarea", {
//                                     onClick: x,
//                                     className: t()("input-flat__control", "rounded-3", "h-100px", "w-100", "mt-4 mt-lg-0", "border-0", "p-3"),
//                                     value: e,
//                                     readOnly: !0
//                                 })
//                             }
//                             )()
//                         })]
//                     })]
//                 }), (0,
//                 o.jsx)(n.A, {
//                     id: e,
//                     show: v,
//                     afterSubmit: () => new Promise(e => {
//                         a ? a().then( () => {
//                             e()
//                         }
//                         ) : e()
//                     }
//                     ),
//                     onHideHandler: () => {
//                         m(!1)
//                     }
//                 })]
//             })
//         }
//     }
// }]);
// //# sourceMappingURL=6517.c72ab0e98dcfb48bb15c.js.map
