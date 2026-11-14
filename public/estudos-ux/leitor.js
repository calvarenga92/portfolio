/*
 * Modo leitura dos estudos de UX: barra de volta ao portfólio e frames
 * reduzidos para caber na tela, sem rolagem lateral.
 */
(function () {
  var MARGEM = 48;

  function montarBarra() {
    var titulo = (document.title || 'Estudo').split(' · ')[0];
    var barra = document.createElement('header');
    barra.className = 'estudo-barra';
    barra.innerHTML =
      '<a href="/ux">← Portfólio UX</a><strong></strong><span>Claudio Alvarenga</span>';
    barra.querySelector('strong').textContent = titulo;
    document.body.prepend(barra);
  }

  function ajustar() {
    var largura = document.documentElement.clientWidth - MARGEM;
    var frames = document.querySelectorAll('.frame-wrap, .frame-col');
    frames.forEach(function (frame) {
      frame.style.zoom = '';
      var natural = frame.scrollWidth;
      var zoom = natural > largura ? largura / natural : 1;
      frame.style.zoom = zoom < 1 ? String(zoom) : '';
    });
  }

  function iniciar() {
    montarBarra();
    ajustar();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajustar);
    var espera;
    window.addEventListener('resize', function () {
      clearTimeout(espera);
      espera = setTimeout(ajustar, 120);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
