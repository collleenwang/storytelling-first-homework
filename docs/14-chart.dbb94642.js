parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"TA0C":[function(require,module,exports) {
!function(){var a=50,t=50,n=50,r=50,e=800-r-t,i=600-a-n,c=d3.select("#chart14").append("svg").attr("width",e+r+t).attr("height",i+a+n).append("g").attr("transform","translate("+r+","+a+")"),d=d3.scaleLinear().domain([0,10]).range([i,0]),l=d3.scaleOrdinal().domain(["dog","cow","cat"]).range(["grey","yellow","blue"]),s=d3.scaleBand().range([0,e]);d3.csv("eating-data.csv").then(function(a){var t=a.map(function(a){return a.name});s.domain(t),c.selectAll("rect").data(a).enter().append("rect").attr("x",function(a){return s(a.name)}).attr("y",function(a){return d(a.hamburgers)}).attr("fill",function(a){return l(a.animal)}).attr("width",function(a){return s.bandwidth()}).attr("height",function(a){return i-d(a.hamburgers)});var n=d3.axisLeft(d);c.append("g").attr("class","axis y-axis").call(n);var r=d3.axisBottom(s);c.append("g").attr("class","axis x-axis").attr("transform","translate(0,"+i+")").call(r)}).catch(function(a){console.log("Failed with",a)})}();
},{}]},{},["TA0C"], null)
//# sourceMappingURL=/14-chart.dbb94642.map