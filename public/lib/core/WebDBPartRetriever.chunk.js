/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{530:function(wa,ta,n){n.r(ta);var pa=n(0),na=n(1);n.n(na);wa=n(113);n=n(439);wa=function(oa){function ia(ka,ea,z){ea=oa.call(this,ka,ea,z)||this;ea.db=ka;return ea}Object(pa.c)(ia,oa);ia.prototype.request=function(ka){var ea=this;Object(na.each)(ka,function(z){ea.db.get(z,function(x,f,e){return x?ea.trigger("partReady.partRetriever",{zb:z,error:x}):ea.trigger("partReady.partRetriever",{zb:z,data:f,Wj:!1,kh:!1,error:null,Qd:e})})})};
ia.prototype.nw=function(ka){ka()};return ia}(wa.a);Object(n.a)(wa);Object(n.b)(wa);ta["default"]=wa}}]);}).call(this || window)

//# sourceMappingURL=WebDBPartRetriever.chunk.js.map