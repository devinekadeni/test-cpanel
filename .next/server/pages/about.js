"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/about.js




function About({ data , layoutData  }) {
    const { locale  } = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/about",
                            locale: "en",
                            children: "EN"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: "Home"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Welcome to About Page"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            "Language: ",
                            locale
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: JSON.stringify(data === null || data === void 0 ? void 0 : data.headOffice)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            margin: 20
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: JSON.stringify(layoutData === null || layoutData === void 0 ? void 0 : layoutData.navigations)
                    })
                ]
            })
        ]
    }));
};
const getStaticProps = async ({ locale  })=>{
    const [{ data: resultContact  }, { data: resultLayout  }] = await Promise.all([
        external_axios_default()({
            method: 'get',
            baseURL: 'https://samoedera-cms-website.herokuapp.com/api',
            url: '/contact-page',
            params: {
                populate: [
                    'hero',
                    'hero.backdropImage',
                    'headOffice',
                    'emailForm',
                    'contactNumbers',
                    'contactNumbers',
                    'contactNumbers.icon',
                    'socialMedias',
                    'socialMedias.icon', 
                ],
                locale
            }
        }),
        external_axios_default()({
            method: 'get',
            baseURL: 'https://samoedera-cms-website.herokuapp.com/api',
            url: '/layout',
            params: {
                populate: [
                    'logo',
                    'navigations',
                    'subFooter',
                    'subFooter.backdropImage',
                    'socialMedias',
                    'socialMedias.icon', 
                ],
                locale
            }
        }), 
    ]);
    const contactPageData = formatContactPageData(resultContact.data);
    const layoutData = formatLayoutData(resultLayout.data);
    return {
        props: {
            data: contactPageData,
            layoutData
        },
        revalidate: 60
    };
};
function formatContactPageData(data) {
    var ref15, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12;
    return {
        hero: {
            ...data === null || data === void 0 ? void 0 : (ref15 = data.attributes) === null || ref15 === void 0 ? void 0 : ref15.hero,
            backdropImage: data === null || data === void 0 ? void 0 : (ref1 = data.attributes) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.hero) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.backdropImage) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.data) === null || ref4 === void 0 ? void 0 : ref4.attributes
        },
        headOffice: data === null || data === void 0 ? void 0 : (ref5 = data.attributes) === null || ref5 === void 0 ? void 0 : ref5.headOffice,
        contactNumbers: data === null || data === void 0 ? void 0 : (ref6 = data.attributes) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.contactNumbers) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.data) === null || ref8 === void 0 ? void 0 : ref8.map((contactNumber)=>{
            var ref, ref13, ref14;
            return {
                ...contactNumber === null || contactNumber === void 0 ? void 0 : contactNumber.attributes,
                icon: contactNumber === null || contactNumber === void 0 ? void 0 : (ref = contactNumber.attributes) === null || ref === void 0 ? void 0 : (ref13 = ref.icon) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.data) === null || ref14 === void 0 ? void 0 : ref14.attributes
            };
        }),
        socialMedias: data === null || data === void 0 ? void 0 : (ref9 = data.attributes) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.socialMedias) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.data) === null || ref11 === void 0 ? void 0 : ref11.map((socialMedia)=>{
            var ref, ref16, ref17;
            return {
                ...socialMedia === null || socialMedia === void 0 ? void 0 : socialMedia.attributes,
                icon: socialMedia === null || socialMedia === void 0 ? void 0 : (ref = socialMedia.attributes) === null || ref === void 0 ? void 0 : (ref16 = ref.icon) === null || ref16 === void 0 ? void 0 : (ref17 = ref16.data) === null || ref17 === void 0 ? void 0 : ref17.attributes
            };
        }),
        emailForm: data === null || data === void 0 ? void 0 : (ref12 = data.attributes) === null || ref12 === void 0 ? void 0 : ref12.emailForm
    };
}
function formatLayoutData(data) {
    var ref30, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27;
    return {
        ...data === null || data === void 0 ? void 0 : data.attributes,
        logo: data === null || data === void 0 ? void 0 : (ref30 = data.attributes) === null || ref30 === void 0 ? void 0 : (ref18 = ref30.logo) === null || ref18 === void 0 ? void 0 : (ref19 = ref18.data) === null || ref19 === void 0 ? void 0 : ref19.attributes,
        subFooter: {
            ...data === null || data === void 0 ? void 0 : (ref20 = data.attributes) === null || ref20 === void 0 ? void 0 : ref20.subFooter,
            backdropImage: data === null || data === void 0 ? void 0 : (ref21 = data.attributes) === null || ref21 === void 0 ? void 0 : (ref22 = ref21.subFooter) === null || ref22 === void 0 ? void 0 : (ref23 = ref22.backdropImage) === null || ref23 === void 0 ? void 0 : (ref24 = ref23.data) === null || ref24 === void 0 ? void 0 : ref24.attributes
        },
        socialMedias: data === null || data === void 0 ? void 0 : (ref25 = data.attributes) === null || ref25 === void 0 ? void 0 : (ref26 = ref25.socialMedias) === null || ref26 === void 0 ? void 0 : (ref27 = ref26.data) === null || ref27 === void 0 ? void 0 : ref27.map((socialMedia)=>{
            var ref, ref28, ref29;
            return {
                ...socialMedia === null || socialMedia === void 0 ? void 0 : socialMedia.attributes,
                icon: socialMedia === null || socialMedia === void 0 ? void 0 : (ref = socialMedia.attributes) === null || ref === void 0 ? void 0 : (ref28 = ref.icon) === null || ref28 === void 0 ? void 0 : (ref29 = ref28.data) === null || ref29 === void 0 ? void 0 : ref29.attributes
            };
        })
    };
}


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(179)));
module.exports = __webpack_exports__;

})();