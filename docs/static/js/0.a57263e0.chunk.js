(this["webpackJsonppersonal-app"]=this["webpackJsonppersonal-app"]||[]).push([[0],{147:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(13),a=n(46),i=(n(32),function(t,e,n,i,o){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,a=e/n,i=t.velocityX,s=n/2,u=i>=0&&(i>.2||t.deltaX>s),p=(u?1-a:a)*n,d=0;if(p>5){var h=p/Math.abs(i);d=Math.min(h,540)}o(u,a<=0?.01:Object(r.j)(0,a,.9999),d)}})})}}]);
//# sourceMappingURL=0.a57263e0.chunk.js.map