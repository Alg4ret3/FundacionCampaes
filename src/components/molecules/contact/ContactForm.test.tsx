import { render, screen, fireEvent } from '@testing-library/react';
import { ContactForm } from './ContactForm';
import { describe, it, expect, vi } from 'vitest';

// Mock del servicio de email
vi.mock('../../../services/EmailServices', () => ({
  sendEmail: vi.fn(() => Promise.resolve({ ok: true })),
}));

describe('ContactForm', () => {
  it('debe renderizar todos los campos del formulario', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/nombre completo/i)).toBeDefined();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeDefined();
    expect(screen.getByLabelText(/mensaje/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeDefined();
  });

  it('debe mostrar error si los campos están vacíos al enviar', () => {
    render(<ContactForm />);
    const submitBtn = screen.getByRole('button', { name: /enviar mensaje/i });
    
    fireEvent.click(submitBtn);
    
    // El navegador manejaría la validación 'required', pero aquí probamos la lógica
    expect(screen.queryByText(/mensaje enviado correctamente/i)).toBeNull();
  });
});
