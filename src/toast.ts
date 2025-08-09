// Toast notification system with animations
type ToastType = 'success' | 'error' | 'info';

interface ToastConfig {
  message: string;
  type?: ToastType;
  duration?: number;
}

class Toast {
  private toastElement: HTMLElement | null = null;
  private messageElement: HTMLElement | null = null;
  private checkmarkIcon: HTMLElement | null = null;
  private crossIcon: HTMLElement | null = null;

  constructor() {
    this.createToastHTML();
    this.initializeElements();
  }

  private createToastHTML(): void {
    // Create toast container
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'hidden';
    
    // Create checkmark SVG
    const checkmarkSVG = `
      <svg id="checkmarkIcon" class="icon checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark__circle" cx="26" cy="26" r="25" />
        <path class="checkmark__check" d="M14 27l7 7 16-16" />
      </svg>
    `;

    // Create cross SVG
    const crossSVG = `
      <svg id="crossIcon" class="icon cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style="display:none;">
        <line class="cross__line1" x1="16" y1="16" x2="36" y2="36" stroke="white" />
        <line class="cross__line2" x1="36" y1="16" x2="16" y2="36" stroke="white" />
      </svg>
    `;

    // Create message span
    const messageSpan = '<span id="toastMessage"></span>';

    toast.innerHTML = checkmarkSVG + crossSVG + messageSpan;
    document.body.appendChild(toast);
  }

  private initializeElements(): void {
    this.toastElement = document.getElementById('toast');
    this.messageElement = document.getElementById('toastMessage');
    this.checkmarkIcon = document.getElementById('checkmarkIcon');
    this.crossIcon = document.getElementById('crossIcon');
  }

  private resetAnimation(element: HTMLElement | SVGElement): void {
    element.style.animation = 'none';
    (element as any).offsetHeight; // Trigger reflow
    element.style.animation = '';
  }

  private getThemeColors(): { [key in ToastType]: string } {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    return {
      success: isDark ? '#059669' : '#10b981',
      error: isDark ? '#dc2626' : '#ef4444',
      info: isDark ? '#2563eb' : '#3b82f6'
    };
  }

  private showIcon(type: ToastType): void {
    if (!this.checkmarkIcon || !this.crossIcon) return;

    if (type === 'success' || type === 'info') {
      this.crossIcon.style.display = 'none';
      this.checkmarkIcon.style.display = 'inline-block';
      
      // Reset and trigger checkmark animation
      const checkPaths = this.checkmarkIcon.querySelectorAll('circle, path') as NodeListOf<SVGElement>;
      checkPaths.forEach(el => this.resetAnimation(el as HTMLElement));
    } else {
      this.checkmarkIcon.style.display = 'none';
      this.crossIcon.style.display = 'inline-block';
      
      // Reset and trigger cross animation
      const crossLines = this.crossIcon.querySelectorAll('line') as NodeListOf<SVGElement>;
      crossLines.forEach(el => this.resetAnimation(el as HTMLElement));
    }
  }

  public show(config: ToastConfig): void {
    const { message, type = 'info', duration = 3000 } = config;
    
    if (!this.toastElement || !this.messageElement) return;

    const colors = this.getThemeColors();
    
    // Set message and color
    this.messageElement.textContent = message;
    this.toastElement.style.setProperty('--toast-bg', colors[type]);
    
    // Show appropriate icon
    this.showIcon(type);
    
    // Show toast
    this.toastElement.classList.remove('hidden');
    
    // Trigger show animation
    setTimeout(() => {
      this.toastElement?.classList.add('opacity-100');
    }, 10);
    
    // Auto hide after duration
    setTimeout(() => {
      this.hide();
    }, duration);
  }

  private hide(): void {
    if (!this.toastElement) return;

    this.toastElement.classList.add('opacity-0');
    this.toastElement.classList.remove('opacity-100');
    
    setTimeout(() => {
      if (this.toastElement) {
        this.toastElement.classList.add('hidden');
        this.toastElement.classList.remove('opacity-0');
      }
    }, 500);
  }

  // Convenience methods
  public success(message: string, duration?: number): void {
    this.show({ message, type: 'success', duration });
  }

  public error(message: string, duration?: number): void {
    this.show({ message, type: 'error', duration });
  }

  public info(message: string, duration?: number): void {
    this.show({ message, type: 'info', duration });
  }
}

// Export singleton instance
export const toast = new Toast();
