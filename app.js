// Navegação do Fluxo Principal (Single Page Application)
function navigateTo(screenId) {
  const screens = document.querySelectorAll('.screen');
  
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  // Aguarda 100ms para disparar o efeito de fade suave do CSS
  setTimeout(() => {
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
    }
  }, 100);
}

// Calibração Dinâmica de Brilho, Contraste e Translucidez
function adjustGlow(value) {
  const intensity = value / 50; // Calibrado em torno do centro (1.0)
  document.documentElement.style.setProperty('--custom-glow-intensity', intensity);
  
  // Modifica de forma tátil o canal Alpha da borda de vidro
  const baseAlpha = 0.15 * intensity;
  document.documentElement.style.setProperty('--glass-border', `rgba(255, 197, 90, ${baseAlpha})`);
  
  // Brilho refrativo por trás do recipiente de vidro
  const glowAlpha = 0.02 * intensity;
  document.documentElement.style.setProperty('--glass-bg', `rgba(255, 255, 255, ${glowAlpha})`);
}

// Ativação e transição para o ecossistema estético escolhido
function selectTheme(themeName) {
  // Configura a flag de tema no elemento HTML principal
  document.documentElement.setAttribute('data-theme', themeName);
  
  alert(`Sintonizando frequência: ${themeName.toUpperCase()}.\nCarregando infraestrutura estética...`);
  
  // Próximo passo: direcionar para o ecossistema de exibição do tema escolhido
}
