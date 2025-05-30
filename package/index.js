export default class FlappyBird {
  constructor(container) {
    this.container = container;
    this.iframe = null;
  }
  
  start() {
    // Create iframe with game
    this.iframe = document.createElement('iframe');
    this.iframe.src = './game/index.html';
    this.iframe.style.width = '100%';
    this.iframe.style.height = '100%';
    this.iframe.style.border = 'none';
    this.iframe.setAttribute('allowfullscreen', 'true');
    
    // Clear container and add iframe
    this.container.innerHTML = '';
    this.container.appendChild(this.iframe);
  }
  
  stop() {
    // Clean up
    if (this.iframe) {
      this.iframe.remove();
      this.iframe = null;
    }
    this.container.innerHTML = '';
  }
  
  pause() {
    // Send pause message to game if supported
    if (this.iframe && this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage({ action: 'pause' }, '*');
    }
  }
  
  resume() {
    // Send resume message to game if supported
    if (this.iframe && this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage({ action: 'resume' }, '*');
    }
  }
}