import { useState } from 'react';
import { ThemedButton } from './components/ThemedButton';
import { withTheme } from './hoc/withTheme';
import type { ThemeType } from './types';
import './App.css';

const ThemedButtonWithTheme = withTheme(ThemedButton);

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light',
    );
  };

  return (
    <main className={`app app--${theme}`}>
      <section className="theme-panel">
        <h1>HOC Theme Provider</h1>

        <p className="theme-status">
          Текущая тема:{' '}
          <strong>{theme}</strong>
        </p>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
        >
          Переключить тему
        </button>

        <ThemedButtonWithTheme
          theme={theme}
          label="Тематическая кнопка"
        />
      </section>
    </main>
  );
}

export default App;
