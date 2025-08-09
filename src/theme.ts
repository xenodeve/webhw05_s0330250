// Theme switching functionality
type Theme = 'light' | 'dark';

interface ThemeState {
  value: Theme;
}

const storageKey = 'theme-preference';

const onClick = (): void => {
  // flip current value
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  setPreference();
};

const getColorPreference = (): Theme => {
  const stored = localStorage.getItem(storageKey) as Theme | null;
  if (stored) {
    return stored;
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
};

const setPreference = (): void => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = (): void => {
  const documentElement = document.firstElementChild as HTMLElement;
  documentElement.setAttribute('data-theme', theme.value);

  const themeToggle = document.querySelector('#theme-toggle') as HTMLButtonElement;
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme.value);
  }
};

const theme: ThemeState = {
  value: getColorPreference(),
};

// set early so no page flashes / CSS is made aware
reflectPreference();

// Initialize theme functionality
export const initTheme = (): void => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  const themeToggle = document.querySelector('#theme-toggle') as HTMLButtonElement;
  if (themeToggle) {
    themeToggle.addEventListener('click', onClick);
  }

  // sync with system changes
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }: MediaQueryListEvent) => {
      theme.value = isDark ? 'dark' : 'light';
      setPreference();
    });
};
