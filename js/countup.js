/* ===== Count-up animation for stat numbers ===== */
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SEL = '.history__stat b, .ohist-hero__stat b, .chuva__stat b, .ohist-facts__num';

  function animate(el){
    var raw = el.getAttribute('data-countup') || el.textContent.trim();
    el.setAttribute('data-countup', raw);
    var m = raw.match(/^(\D*)(\d[\d,]*)(.*)$/);
    if(!m) return;                       // no number (e.g. "UVA") — leave as is
    var prefix = m[1], numStr = m[2], suffix = m[3];
    var hasComma = numStr.indexOf(',') > -1;
    var digits = numStr.replace(/,/g,'');
    var target = parseInt(digits, 10);
    var leadingZero = digits.charAt(0) === '0';
    var pad = digits.length;

    function fmt(v){
      var s = hasComma ? v.toLocaleString() : String(v);
      if(leadingZero) s = String(v).padStart(pad, '0');
      return prefix + s + suffix;
    }

    var dur = Math.min(1600, 700 + target * 0.35), start = null;
    function step(ts){
      if(!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = fmt(Math.round(eased * target));
      if(p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    }
    el.textContent = fmt(0);
    requestAnimationFrame(step);
  }

  var els = [].slice.call(document.querySelectorAll(SEL));
  if(!els.length) return;
  if(reduce) return;                     // honor reduced motion — keep final values

  if(!('IntersectionObserver' in window)){ els.forEach(animate); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  els.forEach(function(el){ io.observe(el); });
})();
