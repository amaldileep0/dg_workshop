(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6977:(e,t,r)=>{Promise.resolve().then(r.bind(r,8625))},1004:(e,t,r)=>{var n=r(7550),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},7550:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},719:(e,t,r)=>{var n=r(5255),a=r(1332),o=r(2816),s=Math.max,i=Math.min;e.exports=function(e,t,r){var c,l,u,d,p,f,h=0,v=!1,m=!1,_=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var r=c,n=l;return c=l=void 0,h=t,d=e.apply(n,r)}function y(e){var r=e-f,n=e-h;return void 0===f||r>=t||r<0||m&&n>=u}function g(){var e,r,n,o=a();if(y(o))return S(o);p=setTimeout(g,(e=o-f,r=o-h,n=t-e,m?i(n,u-r):n))}function S(e){return(p=void 0,_&&c)?x(e):(c=l=void 0,d)}function j(){var e,r=a(),n=y(r);if(c=arguments,l=this,f=r,n){if(void 0===p)return h=e=f,p=setTimeout(g,t),v?x(e):d;if(m)return clearTimeout(p),p=setTimeout(g,t),x(f)}return void 0===p&&(p=setTimeout(g,t)),d}return t=o(t)||0,n(r)&&(v=!!r.leading,u=(m="maxWait"in r)?s(o(r.maxWait)||0,t):u,_="trailing"in r?!!r.trailing:_),j.cancel=function(){void 0!==p&&clearTimeout(p),h=0,c=f=l=p=void 0},j.flush=function(){return void 0===p?d:S(a())},j}},1332:(e,t,r)=>{var n=r(2673);e.exports=function(){return n.Date.now()}},2816:(e,t,r)=>{var n=r(1004),a=r(5255),o=r(3480),s=0/0,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return s;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=c.test(e);return r||l.test(e)?u(e.slice(2),r?2:8):i.test(e)?s:+e}},5192:(e,t,r)=>{"use strict";var n=r(859);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,s){if(s!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},1996:(e,t,r)=>{e.exports=r(5192)()},859:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8625:(e,t,r)=>{"use strict";r.d(t,{default:()=>A});var n=r(5155),a=r(2115),o=r(6658),s=r(4617),i=r.n(s);let c=a.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:l,Provider:u}=c;function d(e,t){let{prefixes:r}=(0,a.useContext)(c);return e||r[t]||t}function p(){let{breakpoints:e}=(0,a.useContext)(c);return e}function f(){let{minBreakpoint:e}=(0,a.useContext)(c);return e}let h=a.forwardRef((e,t)=>{let{bsPrefix:r,className:a,as:o="div",...s}=e,c=d(r,"row"),l=p(),u=f(),h="".concat(c,"-cols"),v=[];return l.forEach(e=>{let t;let r=s[e];delete s[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r,null!=t&&v.push("".concat(h).concat(e!==u?"-".concat(e):"","-").concat(t))}),(0,n.jsx)(o,{ref:t,...s,className:i()(a,c,...v)})});h.displayName="Row";let v=a.forwardRef((e,t)=>{let[{className:r,...a},{as:o="div",bsPrefix:s,spans:c}]=function(e){let{as:t,bsPrefix:r,className:n,...a}=e;r=d(r,"col");let o=p(),s=f(),c=[],l=[];return o.forEach(e=>{let t,n,o;let i=a[e];delete a[e],"object"==typeof i&&null!=i?{span:t,offset:n,order:o}=i:t=i;let u=e!==s?"-".concat(e):"";t&&c.push(!0===t?"".concat(r).concat(u):"".concat(r).concat(u,"-").concat(t)),null!=o&&l.push("order".concat(u,"-").concat(o)),null!=n&&l.push("offset".concat(u,"-").concat(n))}),[{...a,className:i()(n,...c,...l)},{as:t,bsPrefix:r,spans:c}]}(e);return(0,n.jsx)(o,{...a,ref:t,className:i()(r,!c.length&&s)})});v.displayName="Col";var m=r(719),_=r.n(m),x=r(1996),y=r.n(x),g=r(3397),S=r.n(g);let j=e=>{let{title:t="",handleSearch:r}=e,[o,s]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!1),l=(0,a.useRef)(null),u=()=>{c(document.documentElement.scrollTop>0)},d=()=>{var e;s(!0),null===(e=l.current)||void 0===e||e.focus()},p=_()(e=>{(e.length>=1||""===e)&&r(e)},400);return(0,a.useEffect)(()=>(window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)),[]),(0,n.jsx)("div",{className:"".concat(S().searchBarWrapper," ").concat(i?S().hasShadow:""),children:(0,n.jsxs)("div",{className:S().searchBar,children:[(0,n.jsx)("div",{className:"".concat(S().iconContainer," ").concat(S().left),children:(0,n.jsx)("div",{className:"".concat(S().icon," ").concat(S().arrow),onClick:()=>{s(!1),r("")}})}),o?(0,n.jsx)("input",{type:"text",className:S().customInput,minLength:1,maxLength:32,placeholder:"Type at least 1 character to search...",ref:l,onChange:e=>p(e.target.value)}):(0,n.jsx)("h1",{className:S().title,onClick:d,children:t}),!o&&(0,n.jsx)("div",{className:"".concat(S().iconContainer," ").concat(S().right),children:(0,n.jsx)("div",{className:"".concat(S().icon," ").concat(S().search),onClick:d})})]})})};j.propTypes={handleSearch:y().func.isRequired,title:y().string};var b=r(9336);let N=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(0,a.useRef)(null),[n,o]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!e.current)return;let n="0px 0px ".concat(t,"px 0px");return r.current=new IntersectionObserver(e=>{let[t]=e;return o(t.isIntersecting)},{rootMargin:n,threshold:1}),r.current.observe(e.current),()=>{var e;null===(e=r.current)||void 0===e||e.disconnect()}},[e,t]),n},w=a.forwardRef((e,t)=>{let{bsPrefix:r,variant:a,animation:o="border",size:s,as:c="div",className:l,...u}=e;r=d(r,"spinner");let p="".concat(r,"-").concat(o);return(0,n.jsx)(c,{ref:t,...u,className:i()(l,p,s&&"".concat(p,"-").concat(s),a&&"text-".concat(a))})});w.displayName="Spinner";var E=r(778),C=r.n(E);let M=()=>(0,n.jsx)("div",{className:C().fallbackSpinnerContainer,children:(0,n.jsx)(w,{animation:"border",variant:"dark"})});var T=r(1544),L=r(3391);let O=L.wA.withTypes(),R=L.d4.withTypes();L.Pj.withTypes();var k=r(7037),B=r.n(k);let P=(0,a.lazy)(()=>Promise.all([r.e(970),r.e(394)]).then(r.bind(r,6394))),A=()=>{let[e,t]=(0,a.useState)(""),[r,s]=(0,a.useState)(1),{data:i,movies:c,hasMore:l,isLoading:u,hasError:d,isSuccess:p}=R(b.RZ),f=O(),m=(0,o.useRouter)(),_=(0,a.useRef)(null),x=N(_,T.lb),y=e=>{f((0,b.MM)(e))};(0,a.useEffect)(()=>{(x||1===r)&&l&&(y(r),s(r+1))},[x]),(0,a.useEffect)(()=>{d&&m.push("/error")},[d,m]);let g=(0,a.useMemo)(()=>c.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())),[c,e]);return(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsxs)("div",{className:B().moviesPage,children:[(0,n.jsx)(j,{handleSearch:e=>{t(e)},title:(null==i?void 0:i.title)||""}),(0,n.jsxs)("section",{children:[(0,n.jsxs)("div",{id:"scrollableDiv",className:B().movieList,children:[(0,n.jsx)(h,{children:g.length?(0,n.jsx)(n.Fragment,{children:g.map((e,t)=>(0,n.jsx)(v,{xs:4,md:4,lg:2,className:B().mediaCol,children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(M,{}),children:(0,n.jsx)(P,{movie:e},t)})},t))}):(0,n.jsx)(n.Fragment,{children:p&&(0,n.jsx)(v,{children:(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,n.jsx)("p",{children:"".concat(e?T.nl.NO_SEARCH_RESULTS:T.nl.NO_RESULTS," ").concat(e)})})})})}),(0,n.jsx)("div",{className:"".concat(!g.length||e?B().hidden:B().show),ref:_})]}),u&&(0,n.jsx)(M,{})]})]})})}},9265:(e,t,r)=>{"use strict";r.d(t,{C:()=>n});let n="https://test.create.diagnal.com/"},1544:(e,t,r)=>{"use strict";r.d(t,{GA:()=>a,lb:()=>n,nl:()=>o});let n=500,a="placeholder_for_missing_posters.png",o={NO_SEARCH_RESULTS:"Sorry. No results found for",NO_RESULTS:"No movies available at the moment."}},9336:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>E,MM:()=>w,RZ:()=>N});var n=r(8943),a=r(4399),o=r(1561),s=r.n(o),i=r(2651),c=r(9265);let l=i.A.create({baseURL:c.C}),u=(0,n.Z0)({name:"movie",initialState:{data:{},movies:[],loading:!1,isError:!1,hasMore:!0,isSuccess:!1},reducers:{setMovies:(e,t)=>{e.movies=[...e.movies,...t.payload["content-items"].content]},setLoading:(e,t)=>{e.loading=t.payload},setError:(e,t)=>{e.isError=t.payload},setSuccess:(e,t)=>{e.isSuccess=t.payload},setData:(e,t)=>{e.data=t.payload},setHasMore:(e,t)=>{e.hasMore=t.payload}}}),{setMovies:d,setLoading:p,setError:f,setData:h,setHasMore:v,setSuccess:m}=u.actions,_=e=>e.movie,x=(0,a.Mz)(_,e=>e.movies),y=(0,a.Mz)(_,e=>e.loading),g=(0,a.Mz)(_,e=>e.isError),S=(0,a.Mz)(_,e=>e.data),j=(0,a.Mz)(_,e=>e.hasMore),b=(0,a.Mz)(_,e=>e.isSuccess),N=(0,a.Mz)([x,y,g,S,j,b],(e,t,r,n,a,o)=>({movies:e,isLoading:t,hasError:r,data:n,hasMore:a,isSuccess:o})),w=e=>async t=>{try{t(p(!0));let{page:r}=(await l.get("data/page".concat(e,".json"))).data,n=s()(r,"content-items"),a=Math.ceil(Number(n["total-content-items"])/Number(n["page-size-requested"]));t(d(r)),t(h(n)),t(v(e<a)),t(m(!0))}catch(e){t(f(!0)),t(m(!1)),console.error("Unable to fetch Movies.",e)}finally{t(p(!1))}},E=u.reducer},778:e=>{e.exports={fallbackSpinnerContainer:"Loader_fallbackSpinnerContainer__DaElE"}},7037:e=>{e.exports={moviesPage:"MovieList_moviesPage__Qa4z_",movieList:"MovieList_movieList__bMmwc",mediaCol:"MovieList_mediaCol__Hh6Az",hidden:"MovieList_hidden__irQSG",show:"MovieList_show__KUKPA"}},3397:e=>{e.exports={searchBarWrapper:"SearchBar_searchBarWrapper__LpiiN",hasShadow:"SearchBar_hasShadow__A3gJs",searchBar:"SearchBar_searchBar__QVgwE",customInput:"SearchBar_customInput__bONjL",title:"SearchBar_title__DWU_1",iconContainer:"SearchBar_iconContainer__KG8OQ",left:"SearchBar_left__rpOOJ",icon:"SearchBar_icon__tyuo_",arrow:"SearchBar_arrow__RZKJV",search:"SearchBar_search__ph_Kj"}},4617:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}(r)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(r=(function(){return a}).apply(t,[]))&&(e.exports=r)}()}},e=>{var t=t=>e(e.s=t);e.O(0,[436,225,441,517,358],()=>t(6977)),_N_E=e.O()}]);