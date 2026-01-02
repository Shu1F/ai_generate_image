module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/(dashboard)/dashboard/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/dashboard/tools/image-generator.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ImageGenerator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "ImageGenerator"
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/tools/image-generator.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ImageGenerator;
}),
"[project]/src/config/tools.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tools",
    ()=>tools
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$tools$2f$image$2d$generator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/tools/image-generator.tsx [app-rsc] (ecmascript)");
;
const tools = {
    'image-generator': {
        title: "AI を使用してお好みの画像を生成してみよう",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$tools$2f$image$2d$generator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    'remove-bg': {
        title: "背景削除",
        description: "画像から背景を自動で削除",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$tools$2f$image$2d$generator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    'optimize': {
        title: "画像圧縮",
        description: "画像を最適化して画像を縮小",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$tools$2f$image$2d$generator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    }
};
}),
"[project]/src/app/(dashboard)/dashboard/tools/[tool]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/tools.ts [app-rsc] (ecmascript)");
;
;
function ToolPage({ params }) {
    const toolType = params.tool;
    const tool = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tools"][toolType];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: tool.title
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/dashboard/tools/[tool]/page.tsx",
            lineNumber: 7,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/dashboard/tools/[tool]/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ToolPage;
}),
"[project]/src/app/(dashboard)/dashboard/tools/[tool]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(dashboard)/dashboard/tools/[tool]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a3591db0._.js.map