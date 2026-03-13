'use client';

import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}
