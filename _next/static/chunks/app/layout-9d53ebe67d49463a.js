(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4968:(e,t,s)=>{Promise.resolve().then(s.bind(s,7869)),Promise.resolve().then(s.t.bind(s,3967,23))},9265:(e,t,s)=>{"use strict";s.d(t,{C:()=>a});let a="https://test.create.diagnal.com/"},9336:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>k,MM:()=>S,RZ:()=>N});var a=s(8943),r=s(4399),o=s(1561),i=s.n(o),c=s(2651),n=s(9265);let d=c.A.create({baseURL:n.C}),l=(0,a.Z0)({name:"movie",initialState:{data:{},movies:[],loading:!1,isError:!1,hasMore:!0,isSuccess:!1},reducers:{setMovies:(e,t)=>{e.movies=[...e.movies,...t.payload["content-items"].content]},setLoading:(e,t)=>{e.loading=t.payload},setError:(e,t)=>{e.isError=t.payload},setSuccess:(e,t)=>{e.isSuccess=t.payload},setData:(e,t)=>{e.data=t.payload},setHasMore:(e,t)=>{e.hasMore=t.payload}}}),{setMovies:u,setLoading:m,setError:M,setData:h,setHasMore:v,setSuccess:p}=l.actions,y=e=>e.movie,g=(0,r.Mz)(y,e=>e.movies),b=(0,r.Mz)(y,e=>e.loading),z=(0,r.Mz)(y,e=>e.isError),E=(0,r.Mz)(y,e=>e.data),f=(0,r.Mz)(y,e=>e.hasMore),_=(0,r.Mz)(y,e=>e.isSuccess),N=(0,r.Mz)([g,b,z,E,f,_],(e,t,s,a,r,o)=>({movies:e,isLoading:t,hasError:s,data:a,hasMore:r,isSuccess:o})),S=e=>async t=>{try{t(m(!0));let{page:s}=(await d.get("data/page".concat(e,".json"))).data,a=i()(s,"content-items"),r=Math.ceil(Number(a["total-content-items"])/Number(a["page-size-requested"]));t(u(s)),t(h(a)),t(v(e<r)),t(p(!0))}catch(e){t(M(!0)),t(p(!1)),console.error("Unable to fetch Movies.",e)}finally{t(m(!1))}},k=l.reducer},7869:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(5155),r=s(2115),o=s(3391),i=s(8943),c=s(9336);let n=()=>(0,i.U1)({reducer:{movie:c.Ay}});function d(e){let{children:t}=e,s=(0,r.useRef)();return s.current||(s.current=n()),(0,a.jsx)(o.Kq,{store:s.current,children:t})}},3967:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[8,225,441,517,358],()=>t(4968)),_N_E=e.O()}]);