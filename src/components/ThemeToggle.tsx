import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  // システムのテーマに基づいて初期設定を行う
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark' | 'system');
      applyTheme(savedTheme as 'light' | 'dark' | 'system');
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (selectedTheme: 'light' | 'dark' | 'system') => {
    const root = window.document.documentElement;

    if (selectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.remove('dark', 'light');
      if (systemTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.add('light');
      }
    } else {
      root.classList.remove('dark', 'light');
      root.classList.add(selectedTheme);
    }

    localStorage.setItem('theme', selectedTheme);
  };

  const handleThemeChange = (selectedTheme: 'light' | 'dark' | 'system') => {
    setTheme(selectedTheme);
    applyTheme(selectedTheme);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-4 py-2 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'} rounded-lg`}
        onClick={() => handleThemeChange('light')}
      >
        ライト
      </button>
      <button
        className={`px-4 py-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} rounded-lg`}
        onClick={() => handleThemeChange('dark')}
      >
        ダーク
      </button>
      <button
        className={`px-4 py-2 ${theme === 'system' ? 'bg-gray-500' : 'bg-gray-300'} rounded-lg`}
        onClick={() => handleThemeChange('system')}
      >
        自動
      </button>
    </div>
  );
};

export default ThemeToggle;