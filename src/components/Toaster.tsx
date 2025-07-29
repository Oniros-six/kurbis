import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      toastOptions={{
        style: {
          background: 'var(--color-perla)',
          color: 'var(--color-secundario)',
          border: '2px solid var(--color-primario)',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        },
        duration: 4000,
      }}
    />
  );
} 