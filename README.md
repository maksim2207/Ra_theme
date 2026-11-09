# HOC для управления темой

[![Deploy React App to GitHub Pages](https://github.com/maks2207/Ra_theme/actions/workflows/deploy.yml/badge.svg)](https://github.com/maksim2207/Ra_theme/actions/workflows/deploy.yml)

Учебный проект на React + TypeScript, демонстрирующий паттерн Higher-Order Component (HOC) на примере переключения темы оформления (light/dark), без использования React Context API.

## Стек

- React
- TypeScript
- Vite

## Задача

Реализовать компонент высшего порядка `withTheme`, который прокидывает проп `theme` в оборачиваемый компонент. Управление состоянием темы (light/dark) находится в родительском компоненте `App` и передаётся вниз исключительно через пропсы.

## Архитектура

### `withTheme` (src/hoc/withTheme.tsx)

HOC, который:

- Принимает любой React-компонент, требующий проп `theme`
- Возвращает новый компонент, прозрачно прокидывающий все пропсы (включая `theme`) во внутренний компонент
- Сохраняет `displayName` исходного компонента для удобства отладки в React DevTools

### `ThemedButton` (src/components/ThemedButton.tsx)

Пример компонента, обёрнутого в `withTheme`. Принимает `theme` и `label`, меняет цвет фона/текста в зависимости от значения темы.

### `App` (src/App.tsx)

Родительский компонент:

- Хранит состояние `theme` (`'light' | 'dark'`) через `useState`
- Содержит кнопку-переключатель темы
- Передаёт актуальное значение `theme` в `ThemedButtonWithTheme`
