(function(){"use strict";var e={1701:function(e,t,n){n.d(t,{L:function(){return qt}});n(6992),n(8674),n(9601),n(7727);var s=n(9963),o=n(6252),r=n.p+"img/logo.png",a={class:"container container-xs relative mx-auto xl:rounded xl:border xl:shadow-xl xl:my-5 p-5 pb-12 xl:pb-5 text-left dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500",id:"global"},i={class:"mb-2"},l={class:"flex flex-wrap"},u=(0,o._)("div",{class:"w-3/4 text-left my-auto"},[(0,o._)("div",{class:"text-3xl xl:text-5xl lg:text-4xl font-light"},"Health Status")],-1),g={class:"w-1/4 flex justify-end"},d=["src"],c={key:1,src:r,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}};function h(e,t,n,s,r,h){var p=(0,o.up)("router-view"),f=(0,o.up)("Tooltip"),m=(0,o.up)("Social");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o._)("div",i,[(0,o._)("div",l,[u,(0,o._)("div",g,[h.getLogo?((0,o.wg)(),(0,o.iD)("img",{key:0,src:h.getLogo,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}},null,8,d)):((0,o.wg)(),(0,o.iD)("img",c))])])]),(0,o.Wm)(p,{onShowTooltip:h.showTooltip},null,8,["onShowTooltip"])]),(0,o.Wm)(f,{result:r.tooltip.result,event:r.tooltip.event},null,8,["result","event"]),(0,o.Wm)(m)],64)}var p=n.p+"img/github.png",f=function(e){return(0,o.dD)("data-v-a88161aa"),e=e(),(0,o.Cn)(),e},m={id:"social"},A=f((function(){return(0,o._)("a",{href:"https://github.com/TwiN/gatus",target:"_blank",title:"Gatus on GitHub"},[(0,o._)("img",{src:p,alt:"GitHub",width:"32",height:"auto"})],-1)})),v=[A];function w(e,t,n,s,r,a){return(0,o.wg)(),(0,o.iD)("div",m,v)}var y={name:"Social"},x=n(3744);const T=(0,x.Z)(y,[["render",w],["__scopeId","data-v-a88161aa"]]);var k=T,I=(n(6977),n(3577)),b=(0,o._)("div",{class:"tooltip-title"},"Timestamp:",-1),R={id:"tooltip-timestamp"},D=(0,o._)("div",{class:"tooltip-title"},"Response time:",-1),S={id:"tooltip-response-time"},C=(0,o._)("div",{class:"tooltip-title"},"Conditions:",-1),B={id:"tooltip-conditions"},E=(0,o._)("br",null,null,-1),P={key:0,id:"tooltip-errors-container"},H=(0,o._)("div",{class:"tooltip-title"},"Errors:",-1),O={id:"tooltip-errors"},U=(0,o._)("br",null,null,-1);function z(e,t,n,s,r,a){return(0,o.wg)(),(0,o.iD)("div",{id:"tooltip",ref:"tooltip",class:(0,I.C_)(r.hidden?"invisible":""),style:(0,I.j5)("top:"+r.top+"px; left:"+r.left+"px")},[n.result?(0,o.WI)(e.$slots,"default",{key:0},(function(){return[b,(0,o._)("code",R,(0,I.zw)(a.prettifyTimestamp(n.result.timestamp)),1),D,(0,o._)("code",S,(0,I.zw)((n.result.duration/1e6).toFixed(0))+"ms",1),C,(0,o._)("code",B,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.result.conditionResults,(function(t){return(0,o.WI)(e.$slots,"default",{key:t},(function(){return[(0,o.Uk)((0,I.zw)(t.success?"✓":"X")+" ~ "+(0,I.zw)(t.condition),1),E]}))})),128))]),n.result.errors&&n.result.errors.length?((0,o.wg)(),(0,o.iD)("div",P,[H,(0,o._)("code",O,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.result.errors,(function(t){return(0,o.WI)(e.$slots,"default",{key:t},(function(){return[(0,o.Uk)(" - "+(0,I.zw)(t),1),U]}))})),128))])])):(0,o.kq)("",!0)]})):(0,o.kq)("",!0)],6)}n(4916),n(5306);var M={name:"Endpoints",props:{event:Event,result:Object},methods:{prettifyTimestamp:function(e){var t=new Date(e),n=t.getFullYear(),s=(t.getMonth()+1<10?"0":"")+(t.getMonth()+1),o=(t.getDate()<10?"0":"")+t.getDate(),r=(t.getHours()<10?"0":"")+t.getHours(),a=(t.getMinutes()<10?"0":"")+t.getMinutes(),i=(t.getSeconds()<10?"0":"")+t.getSeconds();return n+"-"+s+"-"+o+" "+r+":"+a+":"+i},htmlEntities:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},reposition:function(){if(this.event&&this.event.type)if("mouseenter"===this.event.type){var e=this.event.target.getBoundingClientRect().y+30,t=this.event.target.getBoundingClientRect().x,n=this.$refs.tooltip.getBoundingClientRect();t+window.scrollX+n.width+50>document.body.getBoundingClientRect().width&&(t=this.event.target.getBoundingClientRect().x-n.width+this.event.target.getBoundingClientRect().width,t<0&&(t+=-t)),e+window.scrollY+n.height+50>document.body.getBoundingClientRect().height&&e>=0&&(e=this.event.target.getBoundingClientRect().y-(n.height+10),e<0&&(e=this.event.target.getBoundingClientRect().y+30)),this.top=e,this.left=t}else"mouseleave"===this.event.type&&(this.hidden=!0)}},watch:{event:function(e){e&&e.type&&("mouseenter"===e.type?this.hidden=!1:"mouseleave"===e.type&&(this.hidden=!0))}},updated:function(){this.reposition()},created:function(){this.reposition()},data:function(){return{hidden:!0,top:0,left:0}}};const Q=(0,x.Z)(M,[["render",z]]);var W=Q,X={name:"App",components:{Social:k,Tooltip:W},methods:{showTooltip:function(e,t){this.tooltip={result:e,event:t}},login:function(){}},computed:{getLogo:function(){return window.config&&window.config.logo&&"{{ .Logo }}"!==window.config.logo?window.config.logo:""}},data:function(){return{tooltip:{}}}};const K=(0,x.Z)(X,[["render",h]]);var Y=K,F=n(2119);function q(e,t,n,s,r,a){var i=(0,o.up)("Endpoints"),l=(0,o.up)("Pagination"),u=(0,o.up)("Settings");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i,{endpointStatuses:r.endpointStatuses,showStatusOnHover:!0,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:r.showAverageResponseTime},null,8,["endpointStatuses","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,o.Wm)(l,{onPage:a.changePage},null,8,["onPage"]),(0,o.Wm)(u,{onRefreshData:a.fetchData},null,8,["onRefreshData"])],64)}n(1539),n(2222),n(8862);var G={id:"settings",class:"flex bg-gray-200 border-gray-300 rounded border shadow dark:text-gray-200 dark:bg-gray-800 dark:border-gray-500"},Z=(0,o._)("div",{class:"text-xs text-gray-600 rounded-xl py-1 px-2 dark:text-gray-200"}," ↻ ",-1),j=["selected"],L=["selected"],N=["selected"],J=["selected"],V=["selected"],_=["selected"],$=(0,o.Uk)("☀"),ee=(0,o.Uk)("🌙");function te(e,t,n,s,r,a){return(0,o.wg)(),(0,o.iD)("div",G,[Z,(0,o._)("select",{class:"text-center text-gray-500 text-xs dark:text-gray-200 dark:bg-gray-800 border-r border-l border-gray-300 dark:border-gray-500",id:"refresh-rate",ref:"refreshInterval",onChange:t[0]||(t[0]=function(){return a.handleChangeRefreshInterval&&a.handleChangeRefreshInterval.apply(a,arguments)})},[(0,o._)("option",{value:"10",selected:10===r.refreshInterval},"10s",8,j),(0,o._)("option",{value:"30",selected:30===r.refreshInterval},"30s",8,L),(0,o._)("option",{value:"60",selected:60===r.refreshInterval},"1m",8,N),(0,o._)("option",{value:"120",selected:120===r.refreshInterval},"2m",8,J),(0,o._)("option",{value:"300",selected:300===r.refreshInterval},"5m",8,V),(0,o._)("option",{value:"600",selected:600===r.refreshInterval},"10m",8,_)],544),(0,o._)("button",{onClick:t[1]||(t[1]=function(){return a.toggleDarkMode&&a.toggleDarkMode.apply(a,arguments)}),class:"text-xs p-1"},[r.darkMode?(0,o.WI)(e.$slots,"default",{key:0},(function(){return[$]})):(0,o.WI)(e.$slots,"default",{key:1},(function(){return[ee]}))])])}var ne={name:"Settings",props:{},methods:{setRefreshInterval:function(e){sessionStorage.setItem("gatus:refresh-interval",e);var t=this;this.refreshIntervalHandler=setInterval((function(){t.refreshData()}),1e3*e)},refreshData:function(){this.$emit("refreshData")},handleChangeRefreshInterval:function(){this.refreshData(),clearInterval(this.refreshIntervalHandler),this.setRefreshInterval(this.$refs.refreshInterval.value)},toggleDarkMode:function(){"dark"===localStorage.theme?localStorage.theme="light":localStorage.theme="dark",this.applyTheme()},applyTheme:function(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(this.darkMode=!0,document.documentElement.classList.add("dark")):(this.darkMode=!1,document.documentElement.classList.remove("dark"))}},created:function(){10!==this.refreshInterval&&30!==this.refreshInterval&&60!==this.refreshInterval&&120!==this.refreshInterval&&300!==this.refreshInterval&&600!==this.refreshInterval&&(this.refreshInterval=60),this.setRefreshInterval(this.refreshInterval),this.applyTheme()},unmounted:function(){clearInterval(this.refreshIntervalHandler)},data:function(){return{refreshInterval:sessionStorage.getItem("gatus:refresh-interval")<10?60:parseInt(sessionStorage.getItem("gatus:refresh-interval")),refreshIntervalHandler:0,darkMode:!0}}};const se=(0,x.Z)(ne,[["render",te]]);var oe=se,re=(n(8309),{id:"results"});function ae(e,t,n,s,r,a){var i=(0,o.up)("EndpointGroup");return(0,o.wg)(),(0,o.iD)("div",re,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.endpointGroups,(function(t){return(0,o.WI)(e.$slots,"default",{key:t},(function(){return[(0,o.Wm)(i,{endpoints:t.endpoints,name:t.name,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:n.showAverageResponseTime},null,8,["endpoints","name","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])]}))})),128))])}var ie={class:"font-mono text-gray-400 text-xl font-medium pb-2 px-3 dark:text-gray-200 dark:hover:text-gray-500 dark:border-gray-500"},le={key:0,class:"text-green-600"},ue={key:1,class:"text-yellow-400"},ge={class:"float-right endpoint-group-arrow"};function de(e,t,n,s,r,a){var i=(0,o.up)("Endpoint");return(0,o.wg)(),(0,o.iD)("div",{class:(0,I.C_)(0===n.endpoints.length?"mt-3":"mt-4")},["undefined"!==n.name?(0,o.WI)(e.$slots,"default",{key:0},(function(){return[(0,o._)("div",{class:"endpoint-group pt-2 border dark:bg-gray-800 dark:border-gray-500",onClick:t[0]||(t[0]=function(){return a.toggleGroup&&a.toggleGroup.apply(a,arguments)})},[(0,o._)("h5",ie,[r.healthy?((0,o.wg)(),(0,o.iD)("span",le,"✓")):((0,o.wg)(),(0,o.iD)("span",ue,"~")),(0,o.Uk)(" "+(0,I.zw)(n.name)+" ",1),(0,o._)("span",ge,(0,I.zw)(r.collapsed?"▼":"▲"),1)])])]})):(0,o.kq)("",!0),r.collapsed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:1,class:(0,I.C_)("undefined"===n.name?"":"endpoint-group-content")},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.endpoints,(function(t,s){return(0,o.WI)(e.$slots,"default",{key:s},(function(){return[(0,o.Wm)(i,{data:t,maximumNumberOfResults:20,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:n.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])]}))})),128))],2))],2)}var ce={key:0,class:"endpoint px-3 py-3 border-l border-r border-t rounded-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-500"},he={class:"flex flex-wrap mb-2"},pe={class:"w-3/4"},fe={key:0,class:"text-gray-500 font-light"},me={class:"w-1/4 text-right"},Ae=["title"],ve={class:"status-over-time flex flex-row"},we=["onMouseenter"],ye=["onMouseenter"],xe={class:"flex flex-wrap status-time-ago"},Te={class:"w-1/2"},ke={class:"w-1/2 text-right"},Ie=(0,o._)("div",{class:"w-1/2"},"   ",-1);function be(e,t,n,s,r,a){var i=(0,o.up)("router-link");return n.data?((0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("div",he,[(0,o._)("div",pe,[(0,o.Wm)(i,{to:a.generatePath(),class:"font-bold hover:text-blue-800 hover:underline dark:hover:text-blue-400",title:"View detailed endpoint health"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,I.zw)(n.data.name),1)]})),_:1},8,["to"]),n.data.results&&n.data.results.length&&n.data.results[n.data.results.length-1].hostname?((0,o.wg)(),(0,o.iD)("span",fe," | "+(0,I.zw)(n.data.results[n.data.results.length-1].hostname),1)):(0,o.kq)("",!0)]),(0,o._)("div",me,[n.data.results&&n.data.results.length?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"font-light overflow-x-hidden cursor-pointer select-none",onClick:t[0]||(t[0]=function(){return a.toggleShowAverageResponseTime&&a.toggleShowAverageResponseTime.apply(a,arguments)}),title:n.showAverageResponseTime?"Average response time":"Minimum and maximum response time"},[n.showAverageResponseTime?(0,o.WI)(e.$slots,"default",{key:0},(function(){return[(0,o.Uk)(" ~"+(0,I.zw)(r.averageResponseTime)+"ms ",1)]})):(0,o.WI)(e.$slots,"default",{key:1},(function(){return[(0,o.Uk)((0,I.zw)(r.minResponseTime===r.maxResponseTime?r.minResponseTime:r.minResponseTime+"-"+r.maxResponseTime)+"ms ",1)]}))],8,Ae)):(0,o.kq)("",!0)])]),(0,o._)("div",null,[(0,o._)("div",ve,[n.data.results&&n.data.results.length?(0,o.WI)(e.$slots,"default",{key:0},(function(){return[n.data.results.length<n.maximumNumberOfResults?(0,o.WI)(e.$slots,"default",{key:0},(function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.maximumNumberOfResults-n.data.results.length,(function(e){return(0,o.wg)(),(0,o.iD)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")})),128))]})):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.data.results,(function(n){return(0,o.WI)(e.$slots,"default",{key:n},(function(){return[n.success?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"status status-success rounded bg-success",onMouseenter:function(e){return a.showTooltip(n,e)},onMouseleave:t[1]||(t[1]=function(e){return a.showTooltip(null,e)})},null,40,we)):((0,o.wg)(),(0,o.iD)("span",{key:1,class:"status status-failure rounded bg-red-600",onMouseenter:function(e){return a.showTooltip(n,e)},onMouseleave:t[2]||(t[2]=function(e){return a.showTooltip(null,e)})},null,40,ye))]}))})),128))]})):(0,o.WI)(e.$slots,"default",{key:1},(function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.maximumNumberOfResults,(function(e){return(0,o.wg)(),(0,o.iD)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")})),128))]}))])]),(0,o._)("div",xe,[n.data.results&&n.data.results.length?(0,o.WI)(e.$slots,"default",{key:0},(function(){return[(0,o._)("div",Te,(0,I.zw)(e.generatePrettyTimeAgo(n.data.results[0].timestamp)),1),(0,o._)("div",ke,(0,I.zw)(e.generatePrettyTimeAgo(n.data.results[n.data.results.length-1].timestamp)),1)]})):(0,o.WI)(e.$slots,"default",{key:1},(function(){return[Ie]}))])])):(0,o.kq)("",!0)}n(9653);var Re={methods:{generatePrettyTimeAgo:function(e){var t=(new Date).getTime()-new Date(e).getTime();if(t>2592e5){var n=(t/864e5).toFixed(0);return n+" day"+("1"!==n?"s":"")+" ago"}if(t>36e5){var s=(t/36e5).toFixed(0);return s+" hour"+("1"!==s?"s":"")+" ago"}if(t>6e4){var o=(t/6e4).toFixed(0);return o+" minute"+("1"!==o?"s":"")+" ago"}return(t/1e3).toFixed(0)+" seconds ago"}}},De={name:"Endpoint",props:{maximumNumberOfResults:Number,data:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],mixins:[Re],methods:{updateMinAndMaxResponseTimes:function(){var e=null,t=null,n=0;for(var s in this.data.results){var o=parseInt((this.data.results[s].duration/1e6).toFixed(0));n+=o,(null==e||e>o)&&(e=o),(null==t||t<o)&&(t=o)}this.minResponseTime!==e&&(this.minResponseTime=e),this.maxResponseTime!==t&&(this.maxResponseTime=t),this.data.results&&this.data.results.length&&(this.averageResponseTime=(n/this.data.results.length).toFixed(0))},generatePath:function(){return this.data?"/endpoints/".concat(this.data.key):"/"},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.$emit("toggleShowAverageResponseTime")}},watch:{data:function(){this.updateMinAndMaxResponseTimes()}},created:function(){this.updateMinAndMaxResponseTimes()},data:function(){return{minResponseTime:0,maxResponseTime:0,averageResponseTime:0}}};const Se=(0,x.Z)(De,[["render",be]]);var Ce=Se,Be={name:"EndpointGroup",components:{Endpoint:Ce},props:{name:String,endpoints:Array,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{healthCheck:function(){if(this.endpoints)for(var e in this.endpoints)for(var t in this.endpoints[e].results)if(!this.endpoints[e].results[t].success)return void(this.healthy&&(this.healthy=!1));this.healthy||(this.healthy=!0)},toggleGroup:function(){this.collapsed=!this.collapsed,sessionStorage.setItem("gatus:endpoint-group:".concat(this.name,":collapsed"),this.collapsed)},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.$emit("toggleShowAverageResponseTime")}},watch:{endpoints:function(){this.healthCheck()}},created:function(){this.healthCheck()},data:function(){return{healthy:!0,collapsed:"true"===sessionStorage.getItem("gatus:endpoint-group:".concat(this.name,":collapsed"))}}};const Ee=(0,x.Z)(Be,[["render",de]]);var Pe=Ee,He={name:"Endpoints",components:{EndpointGroup:Pe},props:{showStatusOnHover:Boolean,endpointStatuses:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{process:function(){var e={};for(var t in this.endpointStatuses){var n=this.endpointStatuses[t];e[n.group]&&0!==e[n.group].length||(e[n.group]=[]),e[n.group].push(n)}var s=[];for(var o in e)"undefined"!==o&&s.push({name:o,endpoints:e[o]});e["undefined"]&&s.push({name:"undefined",endpoints:e["undefined"]}),this.endpointGroups=s},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.$emit("toggleShowAverageResponseTime")}},watch:{endpointStatuses:function(){this.process()}},data:function(){return{userClickedStatus:!1,endpointGroups:[]}}};const Oe=(0,x.Z)(He,[["render",ae]]);var Ue=Oe,ze={class:"mt-3 flex"},Me={class:"flex-1"},Qe={class:"flex-1 text-right"};function We(e,t,n,s,r,a){return(0,o.wg)(),(0,o.iD)("div",ze,[(0,o._)("div",Me,[r.currentPage<5?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[0]||(t[0]=function(){return a.nextPage&&a.nextPage.apply(a,arguments)}),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},"<")):(0,o.kq)("",!0)]),(0,o._)("div",Qe,[r.currentPage>1?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[1]||(t[1]=function(){return a.previousPage&&a.previousPage.apply(a,arguments)}),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},">")):(0,o.kq)("",!0)])])}var Xe={name:"Pagination",components:{},emits:["page"],methods:{nextPage:function(){this.currentPage++,this.$emit("page",this.currentPage)},previousPage:function(){this.currentPage--,this.$emit("page",this.currentPage)}},data:function(){return{currentPage:1}}};const Ke=(0,x.Z)(Xe,[["render",We]]);var Ye=Ke,Fe={name:"Home",components:{Pagination:Ye,Endpoints:Ue,Settings:oe},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{fetchData:function(){var e=this;fetch("".concat(qt,"/api/v1/endpoints/statuses?page=").concat(this.currentPage),{credentials:"include"}).then((function(e){return e.json()})).then((function(t){JSON.stringify(e.endpointStatuses)!==JSON.stringify(t)&&(e.endpointStatuses=t)}))},changePage:function(e){this.currentPage=e,this.fetchData()},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.showAverageResponseTime=!this.showAverageResponseTime}},data:function(){return{endpointStatuses:[],currentPage:1,showAverageResponseTime:!0}},created:function(){this.fetchData()}};const qe=(0,x.Z)(Fe,[["render",q]]);var Ge=qe,Ze="data:image/png;base64,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",je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAII0lEQVR4nO2b708b9x3H3wbfJYEk2MT2YbgfNv4R/8CGkSZNaoIhU/pg6oNpezBpjypN6rq12wKtMhiBsIyGtE26NlqkteuWlE5p0jYJv6uBnUp7tP9nJGBD5D24O2Ofv0f4dawun5d0UhRIfLxe37v73vcOgCAIgiAIgiAIgiAIgiAIgiAIgiCI7x42k42wGFsPYB/t6HAMJBLOvni8sS8ebxxIJJyjHR2OHsAOCmEZNgC1Q+3tLf/u6fkPaxvv7AwCqAVFsIQaAAf6I5Fw5vjxQtkWDhcy4XBhNJnsBHBA+15il6kFUPdqa2uCJT8TDhcuRCJnANRp30vsMnYAh3+mKJ1mAX4ZCnUDOAK6FliCHcCRn0rSCyz5mXC48How2APgKCiAJdgBHN0owGuBQC8ogGWUBzDIpwDWs3GAUIgCWMx6AMbopwDWYx4gFCpkQqHC64HAOVAAy2AH0OQbAnCgALsOBfg/UxmgRD4FsJ7yAAb5FMB6NgywGAxSAItZD8AY/RTAekwDLAaDFGAPYAbQ5VMA66kIUCqfAlhPWQCjfApgPRsHCAQogMUUA7BGPwUoxzb98sv+E6qIGuyODPMAgYAVAWxQ9732UU+PD1X07lENAPviyZN/+vb8+d/7gIPYnVdF2AE0+bscwKbtM7eYTv/qm/b2G9rnV8XbFrUADs6Ew9e/TSaX/3Xu3CVBEOqx8yXiygAl8ncxgE37rINzXV2/zUSjS1M+38fYvYFkKTaoP/yRR6HQnzPHjxceJ5PL8729I263+zB2FqE8gEH+YiBQ+kBmuwF0+XXTqdSFTDS6tKAohQeK8inUty34Hez/nmCDupPOr0Khm/rD88fJ5PLsziOsB2DIX2xt3WkAXf6hUvkLilK4ryj/AOBEFbz0ZYO6k8fuB4N/KX12m00kcrO9vcNuYLsRzAO0tu40QHHkT6qnnSe6/AVZLtyT5dsAjqGKArjutbbeMj46fJxI5GZ6ewfj2zsS2AE0+TsIYANgF4D6ya6uN7KRyNOifC3AXVm+A8CFagpwlxFAPxJm0unBlMu11TfYKgOUyN9mABuAWkEQ6h+ayF+Q5cIXknQbVRSAB9B4XZIufRMKrbEeH24zQnkAg/xtBCgd+b/ORqNM+XOS9OyG13sVVXQK4gA4Gg4cCFyX5Yn5YHCNtX6fTSRycz09A1s4Ha0HYMhf9Pu3EsAGwN4M1D3s6nqjQr4WYFaSnt1oarrnBkIAHKiCWRCgzpXrAXidPJ94VxQn5gMBdoS2ttxsOv2HTc6OzAP4/VsJULzgPkql3txA/tp7Xu/dFo7rAODF9icPe04N1EPVAUBq5rjOa5L02XwwuMpaRs62teXn0+nhTRwJ7ACa/E0GKMqf6ur6XTYaXTaTPy4I//Ry3AsAZFTJFFRHv40/BKARgOzluBPjknR7LhBYZS2kZePxlfne3pHnRKgMUCJ/EwHWp5pnz/ZlYrEnJvJXrwnC55p8RfsZDqEK7oJLKd7UQIvQzHGdV0Xx01lWhECgkI3Flue6uy9vEKE8gEH+cwIU92cylerLxGJLpiO/qWmiZOTr8qvi1GOkIoKb437wTnPz34oRDDdU2VhseT6dZh0J+v+lBmDIX/D5Cq8pCivA+sjX5ft8BWOAEvknUD7yq1K+TkWEeqB9rLn5k7nW1lXWkkI2FlsxXBNq8JwACz6fWYDSC+6FTCz2hCV/TpLWxj2ezxzqBbfqR76R0ghOADIPJLQIa6y72mwslpvt7h4yRODACKDLLwnQgPXnEPZmoG76pZd+k2FdcNWR/+yqx3OHB5L4HsrXMUaQALT90ev966zfv8aa12djsfzM2bP6zRoHdQ5eFqBUviEAD4DTlxfM5M9J0tqYx3MHQALfY/k6rAjx0aamW7N+/yozQjSan0mlBk84nQ1Q1+MbfiJJJ43iDQEcAA663e7DpjdZ2jn/Hbf77wDasA/k65hFuDnj9+dZ08tsNJqbSaUG5YYGJ4DGH4viKbMAv5DlHwI45gAcX6dSb5qN/BlJyl8RhI+xz+TrFJ84QYvAA4nLXu9H0z5fjjXDyUaj+enu7iFXXV3zKy0tZ8wCvCrL5wF4vzxzhn2TpSiFKUnKjXo8t+rXz/lO7CP5OvrNWjFCPc8nR7zeD6d9vhXWLCcTieS/PH167BVR7DEL8HNF+dHEiy8OZqLRFRP5K6OCcLOe5/e1fJ2KCA6Oax/xej+YVpRl1kV2MRLJ3T99+nOzAF+cOjWRMS4pl8gfEYSbDo5rh3rqc2qfvS/l61REcPJ8crip6f0pRVlmSc6EQmtmARaDwTUz+ZcF4SOG/KpaXrAKYwSxnueTg01N707JMjMCc2OIX5DlwpQk5UYE4UOSvzEVEXigbVAQxidlObcD+flLgvCBdsEl+c+hNIIDaoT4Rbd7bEqW85sWr8mflqTVIZfrfV6dapL8TVIRAUDsosdzZUqWVzctXxRXB1yu9wDEQPK3DDNCv8s1OinL+Y3E66edAbf7Gkj+jjCLMDwpScynWAuyXJiUpJWLbvcYVPmi9m9J/jYxRmjhgdgFl2v4oSQ9LRW/IMuFR6L49KLHc4UH4iD5uwbzwtzv8Qw/EMUlXf5DUXzytsczql1wSf4uwzoS4v2CMPRAFP/7QBSX3vJ4RmjkW4seQX/booUHIm+5XH39Ltfbh4EogBaQfEspjXAUgAB1QU3S/tygfY3kW4gegYf68lcD1Bj12t+R/D1A/90tO9RHlRzKH94Te4TNsBEEQRAEQRAEQRAEQRAEQRAEQXwn+R/bUgKesM7q/wAAAABJRU5ErkJggg==",Le="data:image/png;base64,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",Ne=function(e){return(0,o.dD)("data-v-45b9ce90"),e=e(),(0,o.Cn)(),e},Je=(0,o.Uk)(" ← "),Ve=Ne((function(){return(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RECENT CHECKS",-1)})),_e=Ne((function(){return(0,o._)("hr",{class:"mb-4"},null,-1)})),$e={key:1,class:"mt-12"},et=Ne((function(){return(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"UPTIME",-1)})),tt=Ne((function(){return(0,o._)("hr",null,null,-1)})),nt={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},st={class:"flex-1"},ot=Ne((function(){return(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 7 days",-1)})),rt=["src"],at={class:"flex-1"},it=Ne((function(){return(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 24 hours",-1)})),lt=["src"],ut={class:"flex-1"},gt=Ne((function(){return(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last hour",-1)})),dt=["src"],ct={key:2,class:"mt-12"},ht=Ne((function(){return(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RESPONSE TIME",-1)})),pt=Ne((function(){return(0,o._)("hr",null,null,-1)})),ft=["src"],mt={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},At={class:"flex-1"},vt=Ne((function(){return(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 7 days",-1)})),wt=["src"],yt={class:"flex-1"},xt=Ne((function(){return(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 24 hours",-1)})),Tt=["src"],kt={class:"flex-1"},It=Ne((function(){return(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last hour",-1)})),bt=["src"],Rt={key:3},Dt=Ne((function(){return(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400 mt-4"},"EVENTS",-1)})),St=Ne((function(){return(0,o._)("hr",{class:"mb-4"},null,-1)})),Ct={class:"p-3 my-4"},Bt={class:"text-lg"},Et={key:0,src:Ze,alt:"Healthy",class:"border border-green-600 rounded-full opacity-75 bg-green-100 mr-2 inline",width:"26"},Pt={key:1,src:je,alt:"Unhealthy",class:"border border-red-500 rounded-full opacity-75 bg-red-100 mr-2 inline",width:"26"},Ht={key:2,src:Le,alt:"Start",class:"border border-gray-500 rounded-full opacity-75 bg-gray-100 mr-2 inline",width:"26"},Ot={class:"flex mt-1 text-sm text-gray-400"},Ut={class:"flex-1 text-left pl-10"},zt={class:"flex-1 text-right"};function Mt(e,t,n,s,r,a){var i=(0,o.up)("router-link"),l=(0,o.up)("Endpoint"),u=(0,o.up)("Pagination"),g=(0,o.up)("Settings");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i,{to:"../",class:"absolute top-2 left-2 inline-block px-2 pb-0.5 text-lg text-black bg-gray-100 rounded hover:bg-gray-200 focus:outline-none border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},{default:(0,o.w5)((function(){return[Je]})),_:1}),(0,o._)("div",null,[r.endpointStatus?(0,o.WI)(e.$slots,"default",{key:0},(function(){return[Ve,_e,(0,o.Wm)(l,{data:r.endpointStatus,maximumNumberOfResults:20,onShowTooltip:a.showTooltip,onToggleShowAverageResponseTime:a.toggleShowAverageResponseTime,showAverageResponseTime:r.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,o.Wm)(u,{onPage:a.changePage},null,8,["onPage"])]}),!0):(0,o.kq)("",!0),r.endpointStatus&&r.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",$e,[et,tt,(0,o._)("div",nt,[(0,o._)("div",st,[ot,(0,o._)("img",{src:a.generateUptimeBadgeImageURL("7d"),alt:"7d uptime badge",class:"mx-auto"},null,8,rt)]),(0,o._)("div",at,[it,(0,o._)("img",{src:a.generateUptimeBadgeImageURL("24h"),alt:"24h uptime badge",class:"mx-auto"},null,8,lt)]),(0,o._)("div",ut,[gt,(0,o._)("img",{src:a.generateUptimeBadgeImageURL("1h"),alt:"1h uptime badge",class:"mx-auto"},null,8,dt)])])])):(0,o.kq)("",!0),r.endpointStatus&&r.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",ct,[ht,pt,(0,o._)("img",{src:a.generateResponseTimeChartImageURL(),alt:"response time chart",class:"mt-6"},null,8,ft),(0,o._)("div",mt,[(0,o._)("div",At,[vt,(0,o._)("img",{src:a.generateResponseTimeBadgeImageURL("7d"),alt:"7d response time badge",class:"mx-auto mt-2"},null,8,wt)]),(0,o._)("div",yt,[xt,(0,o._)("img",{src:a.generateResponseTimeBadgeImageURL("24h"),alt:"24h response time badge",class:"mx-auto mt-2"},null,8,Tt)]),(0,o._)("div",kt,[It,(0,o._)("img",{src:a.generateResponseTimeBadgeImageURL("1h"),alt:"1h response time badge",class:"mx-auto mt-2"},null,8,bt)])])])):(0,o.kq)("",!0),r.endpointStatus&&r.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",Rt,[Dt,St,(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.events,(function(t){return(0,o.WI)(e.$slots,"default",{key:t},(function(){return[(0,o._)("div",Ct,[(0,o._)("h2",Bt,["HEALTHY"===t.type?((0,o.wg)(),(0,o.iD)("img",Et)):"UNHEALTHY"===t.type?((0,o.wg)(),(0,o.iD)("img",Pt)):"START"===t.type?((0,o.wg)(),(0,o.iD)("img",Ht)):(0,o.kq)("",!0),(0,o.Uk)(" "+(0,I.zw)(t.fancyText),1)]),(0,o._)("div",Ot,[(0,o._)("div",Ut,(0,I.zw)(new Date(t.timestamp).toISOString()),1),(0,o._)("div",zt,(0,I.zw)(t.fancyTimeAgo),1)])])]}),!0)})),128))])])):(0,o.kq)("",!0)]),(0,o.Wm)(g,{onRefreshData:a.fetchData},null,8,["onRefreshData"])],64)}var Qt={name:"Details",components:{Pagination:Ye,Endpoint:Ce,Settings:oe},emits:["showTooltip"],mixins:[Re],methods:{fetchData:function(){var e=this;fetch("".concat(this.serverUrl,"/api/v1/endpoints/").concat(this.$route.params.key,"/statuses?page=").concat(this.currentPage)).then((function(e){return e.json()})).then((function(t){if(JSON.stringify(e.endpointStatus)!==JSON.stringify(t)){e.endpointStatus=t,e.uptime=t.uptime;for(var n=[],s=t.events.length-1;s>=0;s--){var o=t.events[s];if(s===t.events.length-1)"UNHEALTHY"===o.type?o.fancyText="Endpoint is unhealthy":"HEALTHY"===o.type?o.fancyText="Endpoint is healthy":"START"===o.type&&(o.fancyText="Monitoring started");else{var r=t.events[s+1];"HEALTHY"===o.type?o.fancyText="Endpoint became healthy":"UNHEALTHY"===o.type?o.fancyText=r?"Endpoint was unhealthy for "+e.prettifyTimeDifference(r.timestamp,o.timestamp):"Endpoint became unhealthy":"START"===o.type&&(o.fancyText="Monitoring started")}o.fancyTimeAgo=e.generatePrettyTimeAgo(o.timestamp),n.push(o)}e.events=n}}))},generateUptimeBadgeImageURL:function(e){return"".concat(this.serverUrl,"/api/v1/endpoints/").concat(this.endpointStatus.key,"/uptimes/").concat(e,"/badge.svg")},generateResponseTimeBadgeImageURL:function(e){return"".concat(this.serverUrl,"/api/v1/endpoints/").concat(this.endpointStatus.key,"/response-times/").concat(e,"/badge.svg")},generateResponseTimeChartImageURL:function(){return"".concat(this.serverUrl,"/api/v1/endpoints/").concat(this.endpointStatus.key,"/response-times/24h/chart.svg")},prettifyUptime:function(e){return e?(100*e).toFixed(2)+"%":"0%"},prettifyTimeDifference:function(e,t){var n=Math.ceil((new Date(e)-new Date(t))/1e3/60);return n+(1===n?" minute":" minutes")},changePage:function(e){this.currentPage=e,this.fetchData()},showTooltip:function(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime:function(){this.showAverageResponseTime=!this.showAverageResponseTime}},data:function(){return{endpointStatus:{},uptime:{},events:[],hourlyAverageResponseTime:{},serverUrl:"."===qt?"..":qt,currentPage:1,showAverageResponseTime:!0,chartLabels:[],chartValues:[]}},created:function(){this.fetchData()}};const Wt=(0,x.Z)(Qt,[["render",Mt],["__scopeId","data-v-45b9ce90"]]);var Xt=Wt,Kt=[{path:"/",name:"Home",component:Ge},{path:"/endpoints/:key",name:"Details",component:Xt},{path:"/services/:key",redirect:{name:"Details"}}],Yt=(0,F.p7)({history:(0,F.PO)("/"),routes:Kt}),Ft=Yt,qt=".";(0,s.ri)(Y).use(Ft).mount("#app")}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,r){if(!s){var a=1/0;for(g=0;g<e.length;g++){s=e[g][0],o=e[g][1],r=e[g][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(g--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var g=e.length;g>0&&e[g-1][2]>r;g--)e[g]=e[g-1];e[g]=[s,o,r]}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,r,a=s[0],i=s[1],l=s[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var g=l(n)}for(t&&t(s);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[a[u]]=0;return n.O(g)},s=self["webpackChunkgatus"]=self["webpackChunkgatus"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(1701)}));s=n.O(s)})();