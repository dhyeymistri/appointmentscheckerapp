(this.webpackJsonpappointmentsapp=this.webpackJsonpappointmentsapp||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(8),o=s.n(r),c=(s(18),s(9)),i=s(4),m=s(2),l=s(3),d=s(0),u=function(e){var t=e.onSendAppointment,s=e.lastId,a={ownerName:"",petName:"",aptDate:"",aptTime:"",aptNotes:""},r=Object(n.useState)(!1),o=Object(i.a)(r,2),c=o[0],u=o[1],b=Object(n.useState)(a),j=Object(i.a)(b,2),p=j[0],x=j[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){u(!c)},className:"bg-blue-600 text-white px-2 py-3 w-full text-left ".concat(c?"rounded-t-md":"rounded-md"),children:Object(d.jsxs)("div",{children:[Object(d.jsx)(m.b,{className:"inline-block align-text-top"}),"  Add Appointment"]})}),c&&Object(d.jsxs)("div",{className:"border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4",children:[Object(d.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(d.jsx)("label",{htmlFor:"ownerName",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Owner Name"}),Object(d.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(d.jsx)("input",{type:"text",name:"ownerName",id:"ownerName",onChange:function(e){x(Object(l.a)(Object(l.a)({},p),{},{ownerName:e.target.value}))},value:p.ownerName,className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"})})]}),Object(d.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(d.jsx)("label",{htmlFor:"petName",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Pet Name"}),Object(d.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(d.jsx)("input",{type:"text",name:"petName",id:"petName",onChange:function(e){x(Object(l.a)(Object(l.a)({},p),{},{petName:e.target.value}))},value:p.petName,className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"})})]}),Object(d.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(d.jsx)("label",{htmlFor:"aptDate",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Appointment Date"}),Object(d.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(d.jsx)("input",{type:"date",name:"aptDate",id:"aptDate",onChange:function(e){x(Object(l.a)(Object(l.a)({},p),{},{aptDate:e.target.value}))},value:p.aptDate,className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"})})]}),Object(d.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(d.jsx)("label",{htmlFor:"aptTime",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Appointment Time"}),Object(d.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(d.jsx)("input",{type:"time",name:"aptTime",id:"aptTime",onChange:function(e){x(Object(l.a)(Object(l.a)({},p),{},{aptTime:e.target.value}))},value:p.aptTime,className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"})})]}),Object(d.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(d.jsx)("label",{htmlFor:"aptNotes",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Appointment Notes"}),Object(d.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(d.jsx)("textarea",{id:"aptNotes",name:"aptNotes",rows:"3",onChange:function(e){x(Object(l.a)(Object(l.a)({},p),{},{aptNotes:e.target.value}))},value:p.aptNotes,className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"Detailed comments about the condition"})})]}),Object(d.jsx)("div",{className:"pt-5",children:Object(d.jsx)("div",{className:"flex justify-end",children:Object(d.jsx)("button",{onClick:function(){var e={id:s+1,ownerName:p.ownerName,petName:p.petName,aptDate:p.aptDate+""+p.aptTime,aptNotes:p.aptNotes};t(e),x(a),u(!c)},type:"submit",className:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400",children:"Submit"})})})]})]})},b=function(e){var t=e.sort,s=e.onSortChange,n=e.order,a=e.onOrderChange;return Object(d.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 w-56\r rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",children:Object(d.jsxs)("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:[Object(d.jsxs)("div",{onClick:function(){return s("petName")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Pet Name ","petName"===t&&Object(d.jsx)(m.d,{})]}),Object(d.jsxs)("div",{onClick:function(){return s("ownerName")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Owner Name  ","ownerName"===t&&Object(d.jsx)(m.d,{})]}),Object(d.jsxs)("div",{onClick:function(){return s("aptDate")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Date ","aptDate"===t&&Object(d.jsx)(m.d,{})]}),Object(d.jsxs)("div",{onClick:function(){return a("asc")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2",role:"menuitem",children:["Ascending ","asc"===n&&Object(d.jsx)(m.d,{})]}),Object(d.jsxs)("div",{onClick:function(){return a("desc")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Descending ","desc"===n&&Object(d.jsx)(m.d,{})]})]})})},j=function(e){var t=e.query,s=e.onQueryChange,a=e.order,r=e.onOrderChange,o=e.sort,c=e.onSortChange,l=Object(n.useState)(!1),u=Object(i.a)(l,2),j=u[0],p=u[1];return Object(d.jsx)("div",{className:"py-5",children:Object(d.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(d.jsxs)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:[Object(d.jsx)(m.e,{}),Object(d.jsx)("label",{htmlFor:"query",className:"sr-only"})]}),Object(d.jsx)("input",{type:"text",name:"query",id:"query",value:t,onChange:function(e){s(e.target.value)},className:"pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300",placeholder:"Search"}),Object(d.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("button",{onClick:function(){p(!j)},type:"button",className:"justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center",id:"options-menu","aria-haspopup":"true","aria-expanded":"true",children:["Sort By ",Object(d.jsx)(m.c,{className:"ml-2"})]}),j&&Object(d.jsx)(b,{sort:o,onSortChange:function(e){return c(e)},order:a,onOrderChange:function(e){return r(e)}})]})})]})})},p=function(e){var t=e.appointment,s=e.onDeleteAppointment;return Object(d.jsxs)("li",{className:"px-3 py-3 flex items-start",children:[Object(d.jsx)("button",{onClick:function(){return s(t.id)},type:"button",className:"p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:Object(d.jsx)(m.f,{})}),Object(d.jsxs)("div",{className:"flex-grow",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)("span",{className:"flex-none font-medium text-2xl text-blue-500",children:t.petName}),Object(d.jsx)("span",{className:"flex-grow text-right",children:t.aptDate})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{className:"font-bold text-blue-500",children:"Owner:"})," ",t.ownerName]}),Object(d.jsx)("div",{className:"leading-tight",children:t.aptNotes})]})]})};var x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1],x=Object(n.useState)("petName"),g=Object(i.a)(x,2),h=g[0],f=g[1],O=Object(n.useState)("asc"),N=Object(i.a)(O,2),v=N[0],y=N[1],w=s.filter((function(e){return e.petName.toLowerCase().includes(l.toLowerCase())||e.ownerName.toLowerCase().includes(l.toLowerCase())||e.aptNotes.toLowerCase().includes(l.toLowerCase())})).sort((function(e,t){var s="asc"===v?1:-1;return e[h].toLowerCase()<t[h].toLowerCase()?-1*s:1*s})),C=Object(n.useCallback)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);return Object(n.useEffect)((function(){C()}),[C]),Object(d.jsxs)("div",{className:"App container mx-auto mt-3 font-thin",children:[Object(d.jsxs)("h1",{className:"text-5xl mb-3",children:[Object(d.jsx)(m.a,{className:"inline-block text-red-400 align-top"}),"Your Appointments"]}),Object(d.jsx)(u,{onSendAppointment:function(e){return a([].concat(Object(c.a)(s),[e]))},lastId:s.reduce((function(e,t){return Number(t.id)>e?Number(t.id):e}),0)}),Object(d.jsx)(j,{query:l,onQueryChange:function(e){return b(e)},order:v,onOrderChange:function(e){return y(e)},sort:h,onSortChange:function(e){return f(e)}}),Object(d.jsx)("ul",{className:"divide-y divide-gray-200",children:w.map((function(e){return Object(d.jsx)(p,{appointment:e,onDeleteAppointment:function(e){return a(s.filter((function(t){return t.id!==e})))}},e.id)}))})]})};o.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3b9444b3.chunk.js.map