!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n;jQuery.extend(BookReader.defaultOptions,{enableArchiveAnalytics:!0,debugArchiveAnaltyics:!1}),BookReader.prototype.init=(n=BookReader.prototype.init,function(){var e=this;n.call(this),this.options.enableArchiveAnalytics&&this.bind(BookReader.eventNames.fragmentChange,(function(){return e.archiveAnalyticsSendFragmentChange()}))}),BookReader.prototype.archiveAnalyticsSendFragmentChange=function(){if(window.archive_analytics){var e=this.archiveAnalyticsSendFragmentChange.prevFragment,t=this.paramsFromCurrent(),n=this.fragmentFromParams(t);if(e!=n){var r={bookreader:"user_changed_view",itemid:this.bookId,cache_bust:Math.random(),offsite:1,details:0};try{r.offsite=window.top.location.hostname.match(/\.archive.org$/)?0:1,r.details=!r.offsite&&window.top.location.pathname.match(/^\/details\//)?1:0}catch(e){}archive_analytics.send_ping(r,null,"augment_for_ao_site"),archive_analytics.send_event("BookReader","UserChangedView",null),this.archiveAnalyticsSendFragmentChange.prevFragment=n}}},BookReader.prototype.archiveAnalyticsSendEvent=function(e,t,n,r){this.options.enableArchiveAnalytics&&(this.options.debugArchiveAnaltyics&&console.log("archiveAnalyticsSendEvent",arguments,window.archive_analytics),window.archive_analytics&&(r=r||{},"number"==typeof n&&(r.ev=n),window.archive_analytics.send_event(e,t,null,r)))}}]);
//# sourceMappingURL=plugin.archive_analytics.js.map