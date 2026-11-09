import type { ThemeType } from '../types';

interface ThemedButtonProps {
    theme: ThemeType;
    label: string;
}

export function ThemedButton({
    theme,
    label,
}: ThemedButtonProps) {
    const isDarkTheme = theme === 'dark';

    return (
        <button
            className="themed-button"
            style={{
                backgroundColor: isDarkTheme ? '#1f2937' : '#ffffff',
                color: isDarkTheme ? '#ffffff' : '#1f2937',
                borderColor: isDarkTheme ? '#6b7280' : '#d1d5db',
            }}
        >
            {label}
        </button>
    );
}