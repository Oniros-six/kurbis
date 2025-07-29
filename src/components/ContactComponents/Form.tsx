import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const API_URL = 'https://kurbisresend.onrender.com/api/contact';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  // Personalizar mensajes de validación nativos
  useEffect(() => {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach((input) => {
      input.addEventListener('invalid', (e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        const fieldName = target.name;
        
        // Mensajes personalizados según el campo
        let message = '';
        switch (fieldName) {
          case 'name':
            message = 'Por favor, ingresa tu nombre completo';
            break;
          case 'email':
            message = 'Por favor, ingresa un email válido';
            break;
          case 'phone':
            message = 'Por favor, ingresa tu número de teléfono';
            break;
          case 'message':
            message = 'Por favor, escribe tu mensaje';
            break;
          default:
            message = 'Por favor, completa este campo';
        }
        
        // Mostrar toast de error
        toast.error('Campo requerido', {
          description: message,
          duration: 3000,
          position: 'top-center',
          style: {
            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500'
          }
        });
        
        // Agregar clase de error visual
        target.classList.add('border-red-500', 'ring-red-500');
        
        // Remover clase después de un tiempo
        setTimeout(() => {
          target.classList.remove('border-red-500', 'ring-red-500');
        }, 3000);
      });
      
      // Limpiar clases de error cuando el usuario empieza a escribir
      input.addEventListener('input', () => {
        input.classList.remove('border-red-500', 'ring-red-500');
      });
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (data: FormData): boolean => {
    const errors: { [key: string]: string } = {};

    if (data.name.length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres.';
    }

    if (!data.email.includes('@')) {
      errors.email = 'Por favor ingresa un email válido.';
    }

    if (data.phone.length < 8) {
      errors.phone = 'El teléfono debe tener al menos 8 caracteres.';
    }

    if (data.message.length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    // Mostrar toasts para cada error
    Object.entries(errors).forEach(([field, message]) => {
      toast.error('Error de validación', {
        description: message,
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '500'
        }
      });
    });
    
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData)) return;

    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('¡Mensaje enviado exitosamente!', {
          description: 'Te contactaremos pronto.',
          duration: 5000,
          position: 'top-center',
          style: {
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600'
          }
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        toast.error('Error al enviar el mensaje', {
          description: data.message || 'Por favor intenta nuevamente.',
          duration: 4000
        });
      }
    } catch (error) {
      toast.error('Error de conexión', {
        description: 'Por favor intenta nuevamente.',
        duration: 4000
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCapitalize = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      setFormData(prev => ({
        ...prev,
        [e.target.name]: capitalizedValue
      }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-gradient-to-br from-[var(--color-secundario)] to-[var(--color-secundario)] rounded-lg p-3 md:p-8 lg:p-12 shadow-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8" noValidate>
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-[var(--color-perla)] text-lg font-medium mb-3 block">
                Nombre
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleCapitalize}
                className="capitalize h-12 bg-[var(--color-perla)] border-0 rounded text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[var(--color-primario)] focus:ring-offset-2 focus:ring-offset-[var(--color-secundario)] transition-all duration-200"
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-[var(--color-perla)] text-lg font-medium mb-3 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12 bg-[var(--color-perla)] border-0 rounded text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[var(--color-primario)] focus:ring-offset-2 focus:ring-offset-[var(--color-secundario)] transition-all duration-200"
                placeholder="ejemplo@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-[var(--color-perla)] text-lg font-medium mb-3 block">
                Nro de Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="h-12 bg-[var(--color-perla)] border-0 rounded text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[var(--color-primario)] focus:ring-offset-2 focus:ring-offset-[var(--color-secundario)] transition-all duration-200"
                placeholder="094 123 456"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="h-full flex flex-col">
              <Label htmlFor="message" className="text-[var(--color-perla)] text-lg font-medium mb-3 block">
                Mensaje
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="capitalize flex-1 min-h-[200px] lg:min-h-[280px] bg-[var(--color-perla)] border-0 rounded text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[var(--color-primario)] focus:ring-offset-2 focus:ring-offset-[var(--color-secundario)] resize-none transition-all duration-200"
                placeholder="Escribe tu mensaje aquí..."
                required
              />

              <div className="mt-6 flex justify-center md:justify-end">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-amber-700 to-amber-500 hover:from-amber-800 hover:to-amber-600 text-[var(--color-perla)] font-semibold px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
