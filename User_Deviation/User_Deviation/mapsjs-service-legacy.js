
/**
 * The code below uses open source software. Please visit the URL below for an overview of the licenses:
 * http://js.api.here.com/v3/3.1.24.1/HERE_NOTICE
 */

H.service.util.eval("function cs(a){var b;if(a)for(this.a={},b=a.length;b--;)this.a[a[b]]=!0;this.zl={}}var ds;cs.prototype.a={};cs.prototype.parse=function(a,b,c){var d,e,f,g,h;ds=!1;try{c=Kp.JSON.parse(c)}catch(m){ds=!0}if(c&&(d=c.metadata)){var k={spatials:[]};for(e in d){if(c=!this.a[e]&&(f=es[e]))(g=d[e])||(ds=!0,g=void 0),c=g;if(c)for(c=g.length;c--;){var l;(l=g[c])||(ds=!0,l=void 0);(h=l)&&f(b,a,this,e,h,k)}}}else ds=!0;return ds?void 0:k};cs.prototype.parse=cs.prototype.parse;\nvar es={\"street labels\":function(a,b,c,d,e,f){var g;(g=e.vertices)||(ds=!0,g=void 0);if(g){var h,k=g.length,l;(l=0<k)||(ds=!0,l=void 0);if(l)for(h=Array(k/2);k;){var m=g[--k];l=g[--k];h[k/2]=new I(l,m)}h=h?{a:[h]}:B;k=+e[\"font size\"]/a.$a();g=c.zl[k];g||(fs.lineWidth=k,g=c.zl[k]=c.Pd.Sj(fs));gs(a,b,h,!1,g,e,d,f)}delete e.vertices},\"city center labels\":function(a,b,c,d,e,f){gs(a,b,hs(e,new qh([])),!0,c.Pd,e,d,f)},labels:function(a,b,c,d,e,f){var g;(g=e[\"bounding boxes\"])||(ds=!0,g=void 0);if(g){for(var h=\ng.length,k=new qh([]),l;h--;){var m;(m=g[h])||(ds=!0,m=void 0);(l=m)&&hs(l,k)}gs(a,b,k,!0,c.Pd,e,d,f)}delete e[\"bounding boxes\"]},buildings:function(a,b,c,d,e,f){var g=e.id,h=b.Ag[g],k,l,m,p=[],q=[];(k=e)||(ds=!0,k=void 0);if(k&&((l=k.vertices)||(ds=!0,l=void 0),l)){var r;(r=k.polygons)||(ds=!0,r=void 0);(m=r)&&p.push.apply(p,is(l,m));(k=k.outlines)||(ds=!0,k=void 0);(m=k)&&q.push.apply(q,is(l,m))}m=p.length;p.push.apply(p,q);q=new qh(p,Td,m);(p=p.length)||(ds=!0,p=void 0);p&&(h?(Sq(h,a,[q]),f.spatials.push(h)):\n(h=gs(a,b,q,!0,c.Pd,e,d,f,g),b.da(h)))}};es[\"transit stops\"]=es.POIs=es.labels;var js=[\"box 2\",\"box 1\",\"annotation box\",\"icon box\"];function hs(a,b){for(var c=js.length,d,e;c--;)if(d=js[c],e=a[d]){var f=e[0],g=e[1],h=e[2];e=e[3];b.a.push([new I(f,g),new I(f+h,g),new I(f+h,g+e),new I(f,g+e)]);delete a[d]}return b}\nfunction is(a,b){var c=b.length,d,e,f;if(0<c)for(e=Array(c);c--;)if((d=b[c])||(ds=!0,d=void 0),d){var g=d.length;if(0<g)for(e[c]=f=Array(g);g--;){var h=2*d[g];f[g]=new I(a[h],a[h+1])}}return e||[]}var ks={};function gs(a,b,c,d,e,f,g,h,k){ks.style=e;d=new Oq(b,d,k,ks);c&&Sq(d,a,[c]);ls(f);f.category=g;d.setData(f);h.spatials.push(d);d.ia(b);return d}cs.prototype.Pd=new O({strokeColor:\"transparent\",fillColor:\"transparent\",lineWidth:0});var fs={};\nfunction ls(a){var b,c=!1;switch(typeof a){case \"object\":if(a instanceof Array)for(b=a.length;b--;)ls(a[b])?c=!0:delete a[b];else if(a)for(b in a)ls(a[b])?c=!0:delete a[b];break;case \"number\":c=!0;break;default:c=!!a}return c};function ms(a,b,c){c=c||{};b=b||{};var d=c.tileType||\"maptile\",e=c.scheme||\"normal.day\";R.call(this,{min:0,max:20});!0===b.pois&&(b.pois=\"!F\");this.a=b;if(!(a&&a instanceof ns))throw Error(\"InvalidArgument: service required\");this.G=a;this.u=A(this.u,this);this.G.addEventListener(\"versionupdate\",this.u);this.c=a.C().clone().I(d+\"/\"+a.Bc()+\"/\"+e).K(this.L).K(b);this.Zb=a.Hh()||null;this.Y=c.pixelRatio||c.pixelratio||Se();this.tileSize=c.tileSize||256;this.tileType=d;this.scheme=e;this.m=new kq(new cs(c.categoryFilter));\nthis.m.ia(this);this.F=A(this.F,this);this.m.addEventListener(\"update\",this.F);R.call(this,{min:0,max:20});this.v(new Dk(c.tileCacheSize||256,A(this.Da,this)))}u(ms,R);t(\"H.service.metaInfo.TileProvider\",ms);ms.prototype.Da=function(a,b){a=b.Va();for(var c=a.length,d;c--;)d=a[c],delete d.qf[b.key],d.release();b.data&&(Mp.push(b.yg(),this.tileSize),b.zg())};ms.prototype.F=function(){this.dispatchEvent(\"update\")};\nms.prototype.D=function(a,b,c,d,e){var f=this.c.clone(),g=this.Zb,h=this.tileSize,k=this.getTileKey(a,b,c);k=this.Nb().get(k);var l;if(k&&!k.fe()){d(Mp.pop(this.tileSize),null);var m={cancel:function(){}}}else{g&&f.Sa(g[(c+b+a)%g.length]);f.I(c+\"/\"+a+\"/\"+b+\"/\"+h+\"/png8\");var p=Kp.setTimeout(function(){l=new rf(\"text/plain\",f.toString());l.then(function(q){d(null,q)},e)},500)}return m||{cancel:function(){l?l.cancel():Kp.clearTimeout(p)}}};ms.prototype.requestInternal=ms.prototype.D;\nms.prototype.od=function(a,b,c,d,e){var f=this.m;var g=d||Mp.pop(this.tileSize);if(d)a=this.Nb().get(this.getTileKey(a,b,c)),a.T(d);else if(d=a=new Pk(this.vd(a,b,c),a,b,c,this.tileSize,this.Y,c,f),delete d.j,d.o=e,a.T(g))for(e=a.Va(),g=e.length;g--;)e[g].Eg();else Mp.push(g,this.tileSize);return a};ms.prototype.createTileInternal=ms.prototype.od;ms.prototype.B=function(){this.m.B();this.G.removeEventListener(\"versionupdate\",this.u);R.prototype.B.call(this)};\nms.prototype.u=function(){var a=this.G;this.c=a.C().clone().I(this.tileType+\"/\"+a.Bc()+\"/\"+this.scheme).K(this.L).K(this.a);this.reload(!1)};ms.prototype.L={metadata:\"metaonly\",mgen:\"2\"};function ns(a){ns.l.constructor.call(this,ns,a);a=Bp(this,a);this.Zb=a.shards;(this.Qa=a.ignoreTypes?null:a.type)&&this.C().Sa(this.Qa);this.$b=a.version;this.yi={};this.Yc=new Xp;\"newest\"===this.$b&&this.rh()}u(ns,Ap);t(\"H.service.metaInfo.Service\",ns);ns.prototype.a=function(){return{type:\"base\",version:\"newest\",subDomain:\"maps.ls\",path:\"maptile/2.1\",shards:[\"1\",\"2\",\"3\",\"4\"]}};ns.CONFIG_KEY=\"metaInfo\";function os(a,b){for(var c={},d=a[b+\"s\"][b],e=d.length;e--;)c[d[e].id]=d[e];a[b+\"s\"]=c}\nns.prototype.Hh=function(){return this.Zb};ns.prototype.ak=function(){return this.Qa};ns.prototype.Bc=function(){return this.$b};ns.prototype.getVersion=ns.prototype.Bc;ns.prototype.Vi=function(a){this.$b=a};ns.prototype.sa=function(){return this.Yc};ns.prototype.getCopyrights=ns.prototype.sa;\nns.prototype.cj=function(a){a=a.response;var b;os(a,\"map\");os(a,\"scheme\");os(a,\"tiletype\");os(a,\"format\");os(a,\"resolution\");os(a,\"language\");if(\"newest\"===this.$b&&\"traffic\"!==this.Qa)for(b in a.maps)a.maps[b].hash&&a.maps[b].newest&&(this.Vi(a.maps[b].hash),this.dispatchEvent(\"versionupdate\"));this.Nh=a;this.dispatchEvent(\"infoupdate\")};\nns.prototype.rh=function(){var a=this;var b=this.C().clone().I(\"info\").K({output:\"json\"});this.Zb&&b.Sa(this.Zb[0]);this.D(b,function(c){a.cj(c)},function(c){throw c;})};ns.prototype.zh=function(){return this.Nh};ns.prototype.getInfo=ns.prototype.zh;ns.prototype.He=function(a,b,c,d,e,f){return new ms(this,d,{tileSize:a,pixelRatio:b,categoryFilter:c,tileType:e,scheme:f})};ns.prototype.createTileProvider=ns.prototype.He;ns.prototype.uc=function(a,b,c,d,e,f){return new ll(this.He(a,b,c,d,e,f))};\nns.prototype.createTileLayer=ns.prototype.uc;Y.prototype.Tj=function(a){return this.Ya(ns,a)};Y.prototype.getMetaInfoService=Y.prototype.Tj;(function(){var a=Y.prototype.createDefaultLayers;Y.prototype.createDefaultLayers=function(b,c,d,e,f,g){var h=a.call(this,b,c,d,e,f,g),k={},l=this.Tj();\"object\"===typeof b&&(g=b,b=g.tileSize,c=g.ppi,d=g.lg,e=g.lg2,f=g.style,g=g.pois);b=b||256;var m=320===c?2:1;if(0>[72,250,320,500].indexOf(+c)){if(c!==B)throw new D(this.kh,1,c);}else k.ppi=+c;d&&(k.lg=d);e&&(k.lg2=e);f&&(k.style=f);g&&(k.pois=g);h.raster.normal.metaInfo=l.uc(b,m,[\"buildings\"],k);return h}})();\n");