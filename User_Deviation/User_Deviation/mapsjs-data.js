
/**
 * The code below uses open source software. Please visit the URL below for an overview of the licenses:
 * http://js.api.here.com/v3/3.1.24.1/HERE_NOTICE
 */

H.util.eval("function ps(a,b,c,d,e){e&1&&qs(a,a,b,c,d,0);e&2&&qs(a,a,b,c,d,1);e&4&&qs(a,a,b,c,d,2);e&8&&qs(a,a,b,c,d,3)}\nfunction qs(a,b,c,d,e,f){var g=(c+1)*(c+1),h,k=4*d,l=c+1,m,p=[{r:0,pm:0,Zl:0,Vg:0,next:null}];var q=1;var r=[\"r\",\"g\",\"b\",\"a\"][f];var v=2*c+1;for(var w,z;q<v;q++)p[q]={r:0,pm:0,Zl:0,Vg:0,next:null},p[q-1].next=p[q];p[2*c].next=p[0];var J=4*(d-1);for(h=0;h<e;h++){var G=h*k;var W=a[G+f];var V=W*l*(c+2)/2;v=W*l;for(q=0;q<=c;q++)p[q][r]=W;var va=0;for(q=1;q<=c;q++){var ea=q<d?G+4*q:G+J;ea=a[ea+f];V+=ea*(l-q);va+=ea;p[c+q][r]=ea}ea=p[0];w=p[l];q=G;z=4*l;var dc=G+J;for(W=0;W<d;W++){b[q+f]=V/g;V-=v;var sb=\nW+l<d?q+z:dc;sb=a[sb+f];va+=sb;V+=va;v-=ea[r];v+=w[r];va-=w[r];ea[r]=sb;ea=ea.next;w=w.next;q+=4;if(!V)for(;(m=4*(W+l))<k&&0===a[G+f+m];)W++,q+=4}}G=(e-1)*k;for(W=0;W<d;W++){a=4*W;h=b[a+f];V=h*l*(c+2)/2;v=h*l;for(q=0;q<=c;q++)p[q][r]=h;va=0;for(q=1;q<=c;q++)ea=q<e?a+q*k:a+G,ea=b[ea+f],V+=ea*(c-q+1),va+=ea,p[c+q][r]=ea;ea=p[0];w=p[l];q=a;dc=l*k;J=a+G;for(h=0;h<e;h++)if(b[q+f]=V/g,V-=v,sb=h+l<e?q+dc:J,sb=b[sb+f],va+=sb,V+=va,v-=ea[r],v+=w[r],va-=w[r],ea[r]=sb,ea=ea.next,w=w.next,q+=k,!V)for(;(m=h+l)<\ne&&0===b[m*k+f+a];)h++,q+=k}};function rs(a,b,c){this.f=b=a>>b;this.j=Math.log(b)*Math.LOG2E;this.i=a=document.createElement(\"CANVAS\");this.a=a.getContext(\"2d\");this.b=a.width=a.height=3*b;var d=document.createElement(\"canvas\");a=c.a;var e=c.b;b=[];var f;d.width=256;d.height=1;d=d.getContext(\"2d\");for(g in e)e.hasOwnProperty(g)&&b.push({stop:parseFloat(g),value:e[g]});e=b.length;b.sort(this.o);0<b[0].stop&&b.unshift({stop:0,value:b[0].value});1>b[e-1].stop&&b.push({stop:1,value:b[e-1].value});e=b.length;var g=d.createLinearGradient(0,\n0,256,0);for(f=0;f<e;f++){if(!a&&k){var h=k.stop+(b[f].stop-k.stop)/2;g.addColorStop(h,k.value);g.addColorStop(h,b[f].value)}g.addColorStop(b[f].stop,b[f].value);var k=b[f]}d.fillStyle=g;d.fillRect(0,0,256,1);this.c=d.getImageData(0,0,256,1).data;this.g=c.a}rs.prototype.o=function(a,b){return a.stop-b.stop};function ss(a,b){this.canvas=a;this.size=b};function ts(a,b,c){this.a=a=Yd(a,0,30);this.Qa=b;this.i=c;this.o=[];this.b=[];do this.b[a]=[],this.o[a]=new us;while(a--);b===vs?(this.m=ws,this.j=xs):(this.m=ys,this.j=zs);this.c=1/0;this.f=-1/0}var As=Math.log(.5);function xs(a){return this.g?Math.round((a-this.c)/this.g*255):127}function zs(a){return void 0===this.$?127:Math.round(255*Math.pow(a,this.$))}\nts.prototype.Hb=function(a){var b,c;var d=a.value;void 0===d&&(d=1);d>this.f&&(this.f=d,this.g=this.f-this.c);d<this.c&&(this.c=d,this.g=this.f-this.c);var e=Wi.ad(a).scale(1073741823).floor();d=this.a;var f=e.x>>30-d;e=e.y>>30-d;for(c=this.m;-1<d;){this.b[d][e]||(this.b[d][e]=[]);(b=this.b[d][e][f])||(b=this.b[d][e][f]=new c);b.Hb(a,d);var g=this.o[d];g.f>b.b&&(g.f=b.b);g.a<b.b&&(g.a=b.b);g.c>b.a&&(g.c=b.a);g.b<b.a&&(g.b=b.a);d--;f>>=1;e>>=1}};\nfunction Bs(a,b,c,d,e){var f=1<<b,g,h;d=Xd(d,f);f=0<=c&&c<f&&(g=a.b[b])&&(h=g[c])&&(f=h[d])||null;!f&&e&&0<=b&&(f=Bs(a,b-1,c>>1,d>>1,e));return f}function Cs(a,b,c,d,e,f){for(var g,h=[];c<=d;c++)for(g=e;g<=f;g++)h.push(Bs(a,b,c,g,!1));return h}function Ds(a,b){var c=0,d=0,e=Bs(a,0,0,0,!1),f;if(!0===b.c)return b.f;b.z===a.a?b.f=b.a:(Es(a,b,function(g){var h=Fs(a,g),k=4-h.length;if(g.z!==a.a){for(f=0;f<h.length;f++)c+=h[f].a,d++;c+=k*e.a;d+=k}}),b.f=c/d);b.c=!0;return b.f}\nfunction Es(a,b,c){b=[b];for(var d,e;0<b.length;)e=b.shift(),d=Fs(a,e),c(e),b.push.apply(b,d)}function Fs(a,b){var c=[],d,e,f;for(e=0;1>=e;e++)for(f=0;1>=f;f++)(d=Bs(a,b.z+1,2*b.x+e,2*b.y+f,!1))&&c.push(d);return c}ts.prototype.clear=function(){ts.call(this,this.a,this.Qa,this.i)};function ys(){this.a=this.b=this.g=0}ys.prototype.Hb=function(a,b){this.g++;this.b+=a.value||1;this.a=this.b/Math.pow(2,2*(30-b))};function ws(){this.a=this.b=this.g=0;this.c=!1}\nws.prototype.Hb=function(a){a=a.value;this.b+=void 0!==a?a:1;this.a=this.b/++this.g;this.c=!1};function us(){this.f=this.c=1/0;this.a=this.b=-1/0};function Gs(a,b){var c,d=0;if(!Da(a)||Ta(a))throw new D(Gs,0,a);for(c in a){var e=+c;d++;if(!(Cc(e)&&0<=e&&1>=e&&zc(a[c])))throw new D(Gs,0,a);}if(2>d)throw new D(Gs,0,\"Specify at least 2 stops\");this.b=a;this.a=!!b}t(\"H.data.heatmap.Colors\",Gs);var Hs=new Gs({0:\"#008\",\"0.2\":\"#0b0\",\"0.5\":\"#ff0\",\"0.7\":\"#f00\"},!0);Gs.DEFAULT=Hs;function Is(a){var b=a||{},c=+b.sampleDepth;a=+b.coarseness;var d=b.colors,e={min:b.min,max:b.max},f=b.tileSize,g=+b.dataMax;b.tileSize&&(e.tileSize=f);R.call(this,e);Vj(this,b.opacity);this.Qa=\"value\"===b.type?vs:Js;this.sampleDepth_=Cc(c)?Yd(Math.round(c),1,8):4;this.u=!!b.assumeValues;b=this.max;this.G=Cc(g)?Yd(Math.round(g),this.min,b+this.sampleDepth_):b;a=Cc(a)?Yd(Math.round(a),0,3):1;if(d&&!C(d,Gs))throw new D(Is,0,\"colors\");this.a=new ts(b+this.sampleDepth_,this.Qa,this.G);this.L=new rs(this.tileSize,\na,d||Hs);this.m=A(this.m,this);this.c=A(this.c,this);this.F=new xk(20,this.m)}u(Is,R);t(\"H.data.heatmap.Provider\",Is);Is.prototype.oc=function(a){Vj(this,a)};Is.prototype.setOpacity=Is.prototype.oc;Is.prototype.ed=function(){return this.i};Is.prototype.getOpacity=Is.prototype.ed;Is.prototype.kf=df;Is.prototype.providesRasters=Is.prototype.kf;\nIs.prototype.D=function(a,b,c,d,e){var f=this.u,g,h;if(Bs(this.a,0,0,0,!1)){if(!f){var k=Cs(this.a,c,b-1,b+1,a-1,a+1);for(g=k.length;g--&&!f;)if(null!==k[g]){f=!0;break}}f&&(h=this.F.push([a,b,c,d,e],this.c))}f||d(null);return h};Is.prototype.requestInternal=Is.prototype.D;\nfunction Ks(a,b,c,d){var e=document.createElement(\"canvas\"),f=a.tileSize,g=e.getContext(\"2d\");e.width=e.height=f;var h=a.L;var k=a.a,l=a.u,m=a.Qa;var p=h.f;var q=h.a,r,v,w=m===Js?2:1,z=w;a=Math.min(a.sampleDepth_+w,h.j);w=h.b;var J=k.a;if(l&&m===vs){for(v=-1;1>=v;v++)for(l=-1;1>=l;l++){var G=(G=Bs(k,d,c+v,b+l,!0))?k.j(Ds(k,G)):128;q.fillStyle=\"rgba(\"+G+\",128,0,1)\";q.fillRect((l+1)*p,(v+1)*p,p,p)}l=p-Math.floor(p/10);v=3;G=q.getImageData(0,0,w,w);ps(G.data,l,w,w,v);q.putImageData(G,0,0)}else q.fillStyle=\nl?\"#080\":\"#000\",q.fillRect(0,0,w,w);for(;z<=a&&d+z<=J;z++){l=p>>z;v=p-l;var W=m===Js?127+Math.floor(128/(1<<a-z)):255;G=(1<<z)+2;var V=1<<z;var va=b<<z;var ea=c<<z;V=Cs(k,d+z,ea-1,ea+V,va-1,va+V);for(va=V.length;va--;){ea=va%G;var dc=va/G<<0;if(r=V[va])r=k.j(r.a),q.fillStyle=\"rgba(\"+r+\",\"+W+\",0,1)\",q.fillRect(ea*l+v,dc*l+v,l,l)}G=q;W=l;V=v;va=p+2*l;l=p+2*l;ea=ea=3;dc=q.getImageData(V,v,va,l);ps(dc.data,W,va,l,ea);G.putImageData(dc,V,v)}b=q.getImageData(0,0,w,w);c=h.c;d=h.g;k=b.data;a=0;for(w=k.length;a<\nw;a+=4)m=k[a],z=k[a+1],4===c.length&&(m=0),k[a]=c[4*m],k[a+1]=c[4*m+1],k[a+2]=c[4*m+2],k[a+3]=c[4*m+3]*(d?z/255:10>z?0:1);q.putImageData(b,0,0);h=new ss(h.i,p);p=h.size;g.drawImage(h.canvas,p,p,p,p,0,0,f,f);return e}Is.prototype.m=function(a,b){a.done(Ks(this,b[0],b[1],b[2]))};Is.prototype.c=function(a,b,c){var d=a.data;a=d[3];d=d[4];c?d():a(b)};\nIs.prototype.wj=function(a,b){var c;if(!yc(a))throw new D(this.wj,0,a);if(c=a.length){for(;c--;)this.a.Hb(a[c]);a=this.a;var d;c=a.o;var e=a.a,f=0;if(a.Qa===Js){var g=c[a.a].a;for(d=a.a;0<=d;d--)if(c[d].a===g)f=d;else break;g=c[0].a;for(d=0;d<=f;d++)if(g===c[d].a)e=d;else break;f>a.i&&(f=a.i);g=Math.round(e+(f-e)/2);a.$=As/Math.log(c[g].b)}this.reload(!!b)}};Is.prototype.addData=Is.prototype.wj;Is.prototype.clear=function(){this.a.clear();this.reload(!0)};Is.prototype.clear=Is.prototype.clear;var Js=0,vs=1;function Ls(){}t(\"H.data.utils.Dom\",Ls);Ls.prototype.Td=function(a){return!!a&&/^\\s*(1|true)\\s*$/i.test(this.Na(a))};Ls.prototype.getBoolean=Ls.prototype.Td;Ls.prototype.Na=function(a){var b;try{if(a.nodeType===Node.ATTRIBUTE_NODE)return a.value;var c=\"\";var d=0;var e=a.childNodes;for(b=e.length;d<b;d++)e[d].nodeType!==Node.COMMENT_NODE&&(c+=e[d].nodeValue.replace(/^\\s+|\\s+$/g,\"\"))}catch(f){}return c||\"\"};Ls.prototype.getString=Ls.prototype.Na;\nLs.prototype.$f=function(a){return parseFloat(this.Na(a))||0};Ls.prototype.getFloat=Ls.prototype.$f;Ls.prototype.Tk=function(a){var b=a.split(/\\s+/),c=b.length,d=!(b&&1==c),e=d?1:3,f=[],g;d||(b=a.split(\",\"),c=b.length);for(g=0;g<c;g+=e)if(a=this.vi(d?b[g]:g+3>b.length?null:b.slice(g,g+3)))f.push(a);else return[];return f};Ls.prototype.parseCoords=Ls.prototype.Tk;\nLs.prototype.vi=function(a){if(!a)return null;var b=a instanceof Array&&0<a.length&&4>a.length?a:a.split(\",\");a=parseFloat(b[0]);var c=parseFloat(b[1]);b=parseFloat(b[2]);return isNaN(c)||isNaN(a)?null:new Xf(c,a,isNaN(b)?void 0:b)};Ls.prototype.parseCoord=Ls.prototype.vi;Ls.prototype.Wf=function(a){a=this.Na(a);return/^[0-9a-fA-F]{8}$/.test(a)?\"#\"+a.substr(6,2)+a.substr(4,2)+a.substr(2,2)+a.substr(0,2):\"#000000ff\"};Ls.prototype.getColor=Ls.prototype.Wf;function Ms(){this.a={4:function(a){return[\"#\",a.charAt(1),a.charAt(1),a.charAt(2),a.charAt(2),a.charAt(3),a.charAt(3),\"ff\"].join(\"\")},5:function(a){return[\"#\",a.charAt(1),a.charAt(1),a.charAt(2),a.charAt(2),a.charAt(3),a.charAt(3),a.charAt(4),a.charAt(4)].join(\"\")},7:function(a){return a+\"ff\"},9:function(a){return a}};this.b={4:function(a){return[Ns(a.charAt(1)),Ns(a.charAt(2)),Ns(a.charAt(3)),255]},5:function(a){return[Ns(a.charAt(1)),Ns(a.charAt(2)),Ns(a.charAt(3)),Ns(a.charAt(4))]},7:function(a){a=\nparseInt(a.substring(1),16);return[a>>16&255,a>>8&255,a&255,255]},9:function(a){a=parseInt(a.substring(1),16);return[a>>24&255,a>>16&255,a>>8&255,a&255]}}}t(\"H.data.utils.ColorHelper\",Ms);function Ns(a){a=parseInt(a,16);return(a<<4)+a}function Os(a){return 16>a?\"0\"+Math.round(a).toString(16):Math.round(a).toString(16)}\nfunction Ps(a,b,c){if(!/^(#|rgb).*/.test(b))return[0,0,0,255];c||(c=\"\",\"#\"===b.charAt(0)?c=a.a[b.length]?b:\"\":\"rgb\"===b.substr(0,3)&&(b=b.match(/\\d+(\\.\\d+)?/g),c=b.length,c=2<c&&5>c?[\"#\",Os(+b[0]),Os(+b[1]),Os(+b[2]),3<c?Os(255*+b[3]):\"ff\"].join(\"\"):\"\"),b=c);a=a.b[b.length](b);a[3]=Math.round(a[3]/255*100)/100;return a}\nMs.prototype.Gl=function(a,b){var c=\"\";if(!/^(#|rgb).*/.test(a)){c=\"\";var d;for(d=0;6>d;d++)c+=\"ABCDEF0123456789\".charAt(Math.floor(16*Math.random()));return c+\"ff\"}a=Ps(this,a,b);for(b=0;4>b;b++)3>b?d=Math.floor(Math.random()*(a[b]+1)):d=255*a[b],c+=Os(d);return c};Ms.prototype.toRandomRGBA=Ms.prototype.Gl;function Qs(a){a=a.attributes;for(var b,c=a.length;c--;)switch(b=a[c],b.name){case \"x\":this.x=parseFloat(b.value);break;case \"y\":this.y=parseFloat(b.value);break;case \"xunits\":this.gd=\"fraction\"===Ls.prototype.Na(b);break;case \"yunits\":this.Fc=\"fraction\"===Ls.prototype.Na(b)}}t(\"H.data.kml.HotSpot\",Qs);function Rs(a){var b=a.childNodes,c=new Ls;for(a=b.length;a--;){var d=b[a];switch(d.nodeName){case \"href\":this.href=c.Na(d)}}}t(\"H.data.kml.Icon\",Rs);function Ss(a){var b;if(a){a=a.childNodes;var c=a.length;for(b=new Ls;c--;){var d=a[c];switch(d.nodeName){case \"scale\":this.scale=b.$f(d);break;case \"Icon\":this.icon=d=new Rs(d);break;case \"hotSpot\":this.gk=d=new Qs(d)}}}}t(\"H.data.kml.IconStyle\",Ss);function Ts(a){a=a.childNodes;for(var b,c=a.length,d=new Ls,e=new Ms;c--;)switch(b=a[c],b.nodeName){case \"color\":this.color=d.Wf(b);break;case \"colorMode\":this.a=d.Na(b)}\"random\"===this.a&&(this.color=\"#\"+e.Gl(this.color,!1))}t(\"H.data.kml.ColorStyle\",Ts);function Us(a){var b=a.childNodes,c=b.length,d=new Ls;this.outline=this.fill=!0;for(this.Jf=new Ts(a);c--;)switch(a=b[c],a.nodeName){case \"fill\":this.fill=d.Td(a);break;case \"outline\":this.outline=d.Td(a)}}t(\"H.data.kml.PolyStyle\",Us);function Vs(a){var b=a.childNodes,c=b.length,d=new Ls;for(this.Jf=new Ts(a);c--;)a=b[c],\"width\"===a.nodeName&&(this.width=d.$f(a))}t(\"H.data.kml.LineStyle\",Vs);function Ws(a){a=a.childNodes;for(var b,c=a.length,d=new Ls;c--;)switch(b=a[c],b.nodeName){case \"bgColor\":this.bgColor=d.Wf(b);break;case \"textColor\":this.textColor=d.Wf(b);break;case \"text\":this.text=d.Na(b);break;case \"displayMode\":this.displayMode=d.Na(b)}}t(\"H.data.kml.BalloonStyle\",Ws);function Xs(a){var b=a.childNodes,c=b.length;for(this.id=a.getAttribute(\"id\");c--;)switch(a=b[c],a.nodeName){case \"IconStyle\":this.hk=a=new Ss(a);break;case \"LineStyle\":this.he=a=new Vs(a);break;case \"PolyStyle\":this.Vk=a=new Us(a);break;case \"BalloonStyle\":this.Ef=a=new Ws(a)}}t(\"H.data.kml.Style\",Xs);function Ys(a,b){a=a.childNodes;var c=a.length,d=new Ls;for(this.b=b;c--;)switch(b=a[c],b.nodeName){case \"key\":this.key=d.Na(b);break;case \"styleUrl\":this.a=d.Na(b)}}t(\"H.data.kml.Pair\",Ys);Ys.prototype.ta=function(){if(this.a){var a=\"highlight\"===this.key?!0:!1;a=this.b.Ih(this.a.substr(1),a)}return a};Ys.prototype.getStyle=Ys.prototype.ta;function Zs(a,b){var c=a.childNodes,d=c.length;this.b=b;this.id=a.getAttribute(\"id\");for(this.a=[];d--;)a=c[d],\"Pair\"===a.nodeName&&(a=new Ys(a,this.b),this.a.push(a))}t(\"H.data.kml.StyleMap\",Zs);Zs.prototype.ta=function(a){var b=null;a=a?\"highlight\":\"normal\";for(var c=this.a.length;c--;)this.a[c].key===a&&(b=this.a[c].ta());return b};Zs.prototype.getStyle=Zs.prototype.ta;function $s(){this.a={}}t(\"H.data.kml.StyleContainer\",$s);$s.prototype.Zg=function(a){a&&a.id&&(this.a[\"style_\"+a.id]=a)};$s.prototype.addStyle=$s.prototype.Zg;$s.prototype.Ih=function(a,b){a=this.a[\"style_\"+a];a instanceof Zs&&(a=a.ta(b));return a};$s.prototype.getStyleById=$s.prototype.Ih;function at(a,b){var c=a&&a.childNodes||[],d=new Ls;if(!a||!b)throw Error(\"Node or stylesContainer is not defined\");this.visibility=!0;this.Io=a;for(a=c.length;a--;){var e=c[a];switch(e.nodeName){case \"name\":this.name=d.Na(e);break;case \"description\":this.description=d.Na(e);break;case \"visibility\":this.visibility=d.Td(e);break;case \"open\":this.open=d.Td(e);break;case \"styleUrl\":if(this.a=d.Na(e))e=this.a.substr(1),this.nm=b.Ih(e,!1);break;case \"Style\":this.tk=e=new Xs(e)}}}\nt(\"H.data.kml.Feature\",at);function bt(a){a=a.childNodes;for(var b,c=a.length,d=null,e=new Ls;c--;)b=a[c],\"coordinates\"===b.nodeName&&(d=e.Na(b));this.a=null;d&&(this.a=e.vi(d)||null)}t(\"H.data.kml.Point\",bt);function ct(a){a=a.childNodes;for(var b,c=a.length,d=new Ls;c--;)if(b=a[c],\"coordinates\"===b.nodeName){b=d.Na(b);var e=[],f=new Ls;try{e=f.Tk(b)}catch(g){e=[]}this.a=2>e.length?[]:e}}t(\"H.data.kml.Line\",ct);function dt(a){for(var b=new L,c=a.a?a.a.length:0;c--;)b.Bd(a.a[c]);return b};function et(){}et.prototype.f=0;et.prototype.b=0;function ft(a){var b=a.childNodes,c=b.length;this.a=new L;for(this.c=[];c--;){var d=b[c];var e=d.nodeName;if(\"outerBoundaryIs\"===e||\"innerBoundaryIs\"===e){var f=d.childNodes;for(d=f.length;d--;){var g=f[d];if(\"LinearRing\"===g.nodeName){var h=new ct(g);if(\"outerBoundaryIs\"===e){this.a=dt(h);var k=void 0,l=a,m=h.a;h=new Ls;var p=l.querySelector(\"altitudeMode\");if(p&&p.parentNode===l&&!/^\\s*clampTo/.test(h.Na(p))&&m){p=m.length;for(var q=0;q<p&&0!==k;q++){var r=m[q].alt;r?k?r!==k&&(k=0):k=r:k=0}(m=l.querySelector(\"*|altitudeOffset\"))&&\nm.parentNode===g&&\"http://www.google.com/kml/ext/2.2\"===m.namespaceURI&&(g=h.$f(m))&&(k+=g);k&&(k=vd(xi,k),(g=l.querySelector(\"extrude\"))&&g.parentNode===l&&h.Td(g)?this.b=k:this.f=k)}}else this.c.push(dt(h))}}}}}u(ft,et);t(\"H.data.kml.Polygon\",ft);function gt(a,b){var c=document.createElement(\"CANVAS\");c.width=1;c.height=1;this.i=a;this.b={};this.f={};this.g=new Hj(c);this.c=b||\"\"}gt.prototype.create=function(a){this.a=new at(a,this.i);return ht(this,a,null)};\nfunction ht(a,b,c){b=b.childNodes;for(var d=b.length,e,f={},g;d--;){var h=b[d];switch(h.nodeName){case \"Point\":e=new bt(h);g=it(a,\"Marker\");e=new yn(e.a,g);g.wi&&Ce(g.wi,\"statechange\",A(a.j,a,g.wi,e,g),!1);break;case \"LineString\":e=new ct(h);g=it(a,\"Polyline\");e=new mh(dt(e),g);break;case \"LinearRing\":e=new ct(h);g=it(a,\"Polyline\");e=new mh(dt(e),g);break;case \"Polygon\":e=new ft(h);g=it(a,\"Polygon\");g.elevation=e.f;g.extrusion=e.b;e=new wi(new P(e.a,e.c),g);break;case \"MultiGeometry\":e=new Q,e=ht(a,\nh,e)}e&&(a.a.name&&(f.name=a.a.name),a.a.description&&(f.description=a.a.description),g&&g.Ef&&(f.balloonStyle=g.Ef),f.kmlNode=a.a.Io,e.setData(f),c&&c.da(e))}c&&(e=c);return e}gt.prototype.j=function(a,b,c){var d=c.anchor,e=c.scale;c=e+\"_\"+d.x+d.y+d.gd+d.Fc+\"_\"+c.href;var f={};if(1===a.getState()){var g=this.b[c];if(!g){var h=d.x;var k=d.y;if(g=a.Bb())g={w:g.w*e,h:g.h*e},f.size=g;h=d.gd&&g?g.w*h:h*e;k=d.Fc&&g?g.h*(1-k):!d.Fc&&g?g.h-k*e:k*e;f.anchor={x:h,y:k};g=new Hj(a.bd(),f);this.b[c]=g}b.Oc(g)}delete this.f[c]};\nfunction it(a,b){var c=a.a,d={visibility:c.visibility};var e=new Ms;var f=1;var g={x:0,y:0,gd:!1,Fc:!1};var h=jt(a,c.nm);c.tk&&(h=jt(a,c.tk,h));switch(b){case \"Marker\":if(h&&h.hk){e=h.hk;e.scale&&(f=e.scale);if(e.gk){var k=e.gk;g={x:k.x,y:k.y,gd:k.gd,Fc:k.Fc}}e.icon&&e.icon.href?(b=e.icon.href,kt.test(b)||(b=a.c+b),e=f+\"_\"+g.x+g.y+g.gd+g.Fc+\"_\"+b,k=a.b[e]||a.f[e],k||(k=new Hj(b),a.f[e]=k),0===k.getState()?(d.icon=a.g,d.wi=k,d.href=b,d.anchor=g,d.scale=f):1===k.getState()&&(d.icon=k)):1!==f&&(k||(g=\n{x:14,y:4,gd:!1,Fc:!1}),a={w:28*f,h:36*f},f={size:new Ji(a.w,a.h),anchor:new I(g.gd?a.w*g.x:g.x*f,g.Fc?a.h*(1-g.y):a.h-g.y*f),hitArea:new Ki(Li.POLYGON,[0*f,16*f,0*f,7*f,8*f,0*f,18*f,0*f,26*f,7*f,26*f,16*f,18*f,34*f,8*f,34*f])},d.icon=new Hj('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28px\" height=\"36px\"><path d=\"M 19 31 C 19 32.7 16.3 34 13 34 C 9.7 34 7 32.7 7 31 C 7 29.3 9.7 28 13 28 C 16.3 28 19 29.3 19 31 Z\" fill=\"#000\" fill-opacity=\".2\"/><path d=\"M 13 0 C 9.5 0 6.3 1.3 3.8 3.8 C 1.4 7.8 0 9.4 0 12.8 C 0 16.3 1.4 19.5 3.8 21.9 L 13 31 L 22.2 21.9 C 24.6 19.5 25.9 16.3 25.9 12.8 C 25.9 9.4 24.6 6.1 22.1 3.8 C 19.7 1.3 16.5 0 13 0 Z\" fill=\"#fff\"/><path d=\"M 13 2.2 C 6 2.2 2.3 7.2 2.1 12.8 C 2.1 16.1 3.1 18.4 5.2 20.5 L 13 28.2 L 20.8 20.5 C 22.9 18.4 23.8 16.2 23.8 12.8 C 23.6 7.07 20 2.2 13 2.2 Z\" fill=\"#18d\"/></svg>',\nf))}break;case \"Polyline\":d.style={};h&&h.he&&(f=h.he,d.style.strokeColor=\"rgba(\"+Ps(e,f.Jf.color,!0)+\")\",0<=f.width&&(d.style.lineWidth=f.width));break;case \"Polygon\":d.style={},h&&(h.he&&(f=h.he,d.style.strokeColor=\"rgba(\"+Ps(e,f.Jf.color,!0)+\")\",0<=f.width&&(d.style.lineWidth=f.width)),h.Vk&&(f=h.Vk,d.style.fillColor=f.fill?\"rgba(\"+Ps(e,f.Jf.color,!0)+\")\":\"rgba(0,0,0,0)\",f.outline||(d.style.lineWidth=0)))}d.Ef=h.Ef;return d}\nfunction jt(a,b,c){c=c||{};for(var d in b)b.hasOwnProperty(d)&&(c[d]=\"object\"===typeof b[d]?jt(a,b[d],c[d]):b[d]);return c}var kt=/^[^:\\/]+:/;function lt(a){uc(this,lt);this.url=a;this.b=[];this.a=y;this.c=A(this.c,this);F.call(this)}u(lt,F);t(\"H.data.AbstractReader\",lt);var mt={ERROR:-1,LOADING:0,VISIT:1,READY:2};lt.State=mt;lt.prototype.f=mt.READY;lt.prototype.j={Tl:\"statechange\"};lt.prototype.sb=function(){if(!this.a){this.a=new N;var a=this.a.ic();a.cc(this.b)}return new ml(this.a)};lt.prototype.getLayer=lt.prototype.sb;lt.prototype.mn=function(){return this.b.concat([])};lt.prototype.getParsedObjects=lt.prototype.mn;\nlt.prototype.C=function(){return this.url};lt.prototype.getUrl=lt.prototype.C;lt.prototype.Wo=function(a){if(this.f===mt.LOADING||this.f===mt.VISIT)throw Error(\"InvalidState: state \"+this.f);this.b=[];this.a=y;this.url=a;return this};lt.prototype.setUrl=lt.prototype.Wo;lt.prototype.getState=function(){return this.f};lt.prototype.getState=lt.prototype.getState;lt.prototype.O=function(a,b,c){this.f=a;this.dispatchEvent(new nt(b||this,this.j.Tl,a,c||\"\"))};\nlt.prototype.parse=function(){var a=this;tc(this.url)?(this.O(mt.LOADING),(new rf(\"text/plain\",this.url)).then(function(b){try{a.c(b)}catch(c){a.O(mt.ERROR,y,c.message)}},function(){a.O(mt.ERROR,y,\"Error loading file\")})):a.O(mt.ERROR,y,\"File url was not set\")};lt.prototype.parse=lt.prototype.parse;function nt(a,b,c,d){nt.l.constructor.call(this,b,a);this.state=c;this.message=d}u(nt,rd);function ot(a){var b=a?a.lastIndexOf(\"/\"):B;this.g=[];lt.call(this,a);0<=b&&(this.i=a.substr(0,b)+\"/\")}u(ot,lt);t(\"H.data.kml.Reader\",ot);\not.prototype.c=function(a){var b,c=null;if(a&&\"\"!=a.trim()){try{var d=(new DOMParser).parseFromString(a,\"text/xml\")}catch(h){this.O(mt.ERROR,void 0,\"Error parsing KML document\");return}if(d.getElementsByTagName(\"parsererror\").length)this.O(mt.ERROR,void 0,\"Error parsing KML document\");else if((a=d.childNodes&&\"kml\"===d.childNodes[0].nodeName?d.childNodes[0]:void 0)&&(b=pt(a.childNodes,\"Document\")[0]),b=b||a){d=new $s;for(var e=pt(b.childNodes,\"Style\"),f=pt(b.childNodes,\"StyleMap\"),g=e.length;g--;)a=\nnew Xs(e[g]),d.Zg(a);for(g=f.length;g--;)a=new Zs(f[g],d),d.Zg(a);this.m=d;this.o=new gt(this.m,this.i);a=b.childNodes;for(b=a.length;b--;)if(e=a[b],d=c,\"Placemark\"===e.nodeName?(e=this.o.create(e))&&qt(this,e,d):\"Folder\"===e.nodeName&&(e={group:new Q,node:e},qt(this,e.group,d),this.g.push(e)),!b&&(d=this.g.shift()))a=d.node.childNodes,c=d.group,b=a.length;this.O(mt.READY)}else this.O(mt.ERROR,void 0,\"Invalid KML document\")}else this.O(mt.ERROR,void 0,\"Unable to create objects from the empty data\")};\nfunction qt(a,b,c){c?c.da(b):(a.a&&a.a.ic().da(b),a.b.push(b),a.O(mt.VISIT,b))}function pt(a,b){for(var c=a.length,d,e=[];c--;)d=a[c],d.nodeName===b&&e.push(d);return e};function rt(a,b){this.b=a;this.a=b}\nrt.prototype.create=function(a,b){var c=a.coordinates;switch(a.type){case \"Point\":var d=new yn(st(c));break;case \"LineString\":d=new mh(tt(c));break;case \"Polygon\":d=new wi(ut(c));break;case \"MultiPoint\":var e=0;var f=c.length;d=[];if(this.a){for(;e<f;e++)d.push(st(c[e]));c=new yn(new Ii(d))}else{for(;e<f;e++)d.push(new yn(st(c[e])));c=new Q;c.cc(d)}d=c;f=\"multiPoint\";break;case \"MultiLineString\":e=0;f=c.length;d=[];if(this.a){for(;e<f;e++)d.push(tt(c[e]));c=new mh(new lh(d))}else{for(;e<f;e++)d.push(new mh(tt(c[e])));\nc=new Q;c.cc(d)}d=c;f=\"multiLineString\";break;case \"MultiPolygon\":d=[];e=0;f=c.length;if(this.a){for(;e<f;e++)d.push(ut(c[e]));c=new wi(new ui(d))}else{for(;e<f;e++)d.push(new wi(ut(c[e])));c=new Q;c.cc(d)}d=c;f=\"multiPolygon\";break;case \"GeometryCollection\":c=d=new Q;e=a.geometries;f=0;for(var g=e.length;f<g;f++)this.create(e[f],c);f=\"geometryCollection\"}d&&(c=d,e=a.properties,a=a.id,g={},e&&(this.a?g=e:g.properties=e),f&&!this.a&&(g[f]=!0),a&&c.Ti(a),c.setData(g),this.b(d));b&&d&&b.da(d);return d};\nrt.prototype.create=rt.prototype.create;function st(a){return new Xf(a[1],a[0])}function ut(a){for(var b=tt(a[0]),c=[],d,e=1,f=a.length;e<f;e++)d=tt(a[e]),c.push(d);return new P(b,c)}function tt(a){for(var b=0,c=a.length,d=new L;b<c;b++)d.Bd(st(a[b]));return d};function vt(a,b){b=b||{};this.i=b.style||this.Pd;(this.g=!!b.disableLegacyMode)||window.console.warn(\"H.data.geojson.Reader: Legacy parser is enabled in GeoJSON Reader. Features like Multi-Geometries, Polygon interiors and GeoJSON feature properties might not work as expected. To maximise compatibility with the remote services it is recommended to set the `disableLegacyMode` flag to true.\");lt.call(this,a)}u(vt,lt);t(\"H.data.geojson.Reader\",vt);\nvt.prototype.c=function(a){var b,c;try{var d=\"string\"===typeof a?JSON.parse(a):a;if(\"object\"===typeof d){var e=new rt(this.i,this.g);switch(d.type){case \"FeatureCollection\":if(b=d.features){var f=new Q;wt(this,f);for(c=0;c<b.length;c++){var g=xt(b[c]);(g=e.create(g))&&f.da(g)}}break;case \"Feature\":g=xt(d);(g=e.create(g))&&wt(this,g);break;default:(g=e.create(d))&&wt(this,g)}this.O(mt.READY)}else this.O(mt.ERROR,void 0,\"Invalid syntax\")}catch(h){this.O(mt.ERROR,void 0,\"Parse error. \"+h.message)}};\nvt.prototype.Ho=function(a){this.O(mt.LOADING);this.c(a)};vt.prototype.parseData=vt.prototype.Ho;vt.prototype.Pd=function(){};function xt(a){var b={};if(a.geometry){var c=a.geometry;b.type=c.type;b.properties=a.properties;c.coordinates&&(b.coordinates=c.coordinates);c.geometries&&(b.geometries=c.geometries);a.id&&(b.id=a.id)}return b}function wt(a,b){a.a&&a.a.ic().da(b);a.b.push(b);a.O(mt.VISIT,b)};t(\"H.data.buildInfo\",function(){return Ef(\"H-data\",\"1.24.1\",\"abfe236\")});\n");