import type { ComponentType } from 'react';
import type { ThemeType } from '../types';

export interface ThemeProps {
  theme: ThemeType;
}

export function withTheme<P extends ThemeProps>(
  Component: ComponentType<P>,
) {
  function WithTheme(props: P) {
    return <Component {...props} />;
  }

  const componentName =
    Component.displayName || Component.name || 'Component';

  WithTheme.displayName = `withTheme(${componentName})`;

  return WithTheme;
}