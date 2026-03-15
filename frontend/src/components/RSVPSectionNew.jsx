import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Music, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { submitRSVP, ageCategories } from '../data/mockData';
import { toast } from 'sonner';

export const RSVPSectionNew = () => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [guests, setGuests] = useState([{ name: '', ageCategory: '', mainDish: '', allergies: '' }]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [songRequest, setSongRequest] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNumberOfGuestsChange = (value) => {
    const num = parseInt(value);
    setNumberOfGuests(num);
    
    const newGuests = [];
    for (let i = 0; i < num; i++) {
      newGuests.push(guests[i] || { name: '', ageCategory: '', mainDish: '', allergies: '' });
    }
    setGuests(newGuests);
  };

  const handleGuestChange = (index, field, value) => {
    const newGuests = [...guests];
    newGuests[index] = { ...newGuests[index], [field]: value };
    // Reset mainDish when ageCategory changes
    if (field === 'ageCategory') {
      newGuests[index].mainDish = '';
    }
    setGuests(newGuests);
  };

  const getDishOptions = (ageCategory) => {
    switch (ageCategory) {
      case 'adulto':
        return [
          { value: 'carne', label: 'Carne' },
          { value: 'pescado', label: 'Pescado' }
        ];
      case 'adolescente':
        return [
          { value: 'lasana-bolonesa', label: 'Lasaña boloñesa casera' },
          { value: 'medallones-solomillo', label: 'Medallones de solomillo ibérico con patatas fritas' }
        ];
      case 'niño':
        return [
          { value: 'escalope', label: 'Escalope casero con patatas fritas' },
          { value: 'pollo-empanado', label: 'Pollo empanado con patatas fritas' },
          { value: 'burger-ternera', label: 'Burger de ternera con queso cheddar y patatas fritas' }
        ];
      default:
        return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!phone) {
      toast.error('Por favor, indica tu teléfono de contacto');
      return;
    }
    
    if (!email) {
      toast.error('Por favor, indica tu email');
      return;
    }
    
    if (!privacyAccepted) {
      toast.error('Debes aceptar el aviso de privacidad');
      return;
    }
    
    const hasEmptyNames = guests.some(guest => !guest.name.trim());
    if (hasEmptyNames) {
      toast.error('Por favor, completa los nombres de todos los asistentes');
      return;
    }
    
    const hasEmptyAgeCategory = guests.some(guest => !guest.ageCategory);
    if (hasEmptyAgeCategory) {
      toast.error('Por favor, indica la categoría de cada asistente');
      return;
    }

    const hasEmptyDish = guests.some(guest => guest.ageCategory && !guest.mainDish);
    if (hasEmptyDish) {
      toast.error('Por favor, selecciona el plato principal de cada asistente');
      return;
    }

    setIsSubmitting(true);

    const formData = {
      attending: 'si',
      numberOfGuests: numberOfGuests,
      guests: guests,
      phone,
      email,
      comments,
      songRequest,
      submittedAt: new Date().toISOString()
    };

    try {
      await submitRSVP(formData);
      setIsSubmitted(true);
      toast.success('¡Gracias! Nos hace mucha ilusión contar contigo');
    } catch (error) {
      toast.error('Hubo un error al enviar. Por favor, inténtalo de nuevo');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gray-lightest flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-gray-darkest" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-darkest mb-6 font-light">
            ¡Confirmación recibida!
          </h2>
          <p className="text-gray-dark text-lg leading-relaxed mb-8">
            Nos hace mucha ilusión contar contigo. Si necesitas cambiar algo, escríbenos y lo actualizamos.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="border-2 border-gray-darkest text-gray-darkest bg-white hover:bg-gray-darkest hover:text-white transition-all duration-300"
          >
            Modificar respuesta
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gray-darkest mb-6 font-light">
            Confirmación Asistencia
          </h2>
          <p className="text-gray-dark text-lg leading-relaxed max-w-2xl mx-auto">
            Para organizarlo bien (y cuidar cada detalle), ayúdanos confirmando si vienes y cuántos seréis. Si hay alergias o intolerancias, indícalo por favor para que todo el mundo disfrute sin preocupaciones.
          </p>
          <p className="text-gray-darkest text-lg mt-4">
            Nos ayudaría mucho que nos confirmaras <span className="underline">antes del 30 de mayo.</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 p-8 md:p-12">
          {/* Number of Guests */}
          <div className="space-y-4">
            <Label className="text-lg font-normal text-gray-darkest">
              ¿Cuántas personas venís? <span className="text-gray-dark">*</span>
            </Label>
            <Select value={numberOfGuests.toString()} onValueChange={handleNumberOfGuestsChange}>
              <SelectTrigger className="w-full bg-white border border-gray-light focus:border-gray-darkest rounded-lg py-6 text-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'persona' : 'personas'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Guest Details */}
          <div className="space-y-6">
            {guests.map((guest, index) => (
              <div key={index} className="space-y-4 p-6 bg-white rounded-lg border border-gray-light">
                <h4 className="font-normal text-gray-darkest text-lg">
                  Asistente {index + 1}
                </h4>
                <div>
                  <Label htmlFor={`guest-name-${index}`} className="text-gray-darkest">
                    Nombre y apellidos <span className="text-gray-dark">*</span>
                  </Label>
                  <Input
                    id={`guest-name-${index}`}
                    value={guest.name}
                    onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
                    placeholder="Nombre completo"
                    className="mt-2 bg-white border border-gray-light focus:border-gray-darkest rounded-lg py-6 text-lg"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`guest-age-${index}`} className="text-gray-darkest">
                    Tipo de comensal <span className="text-gray-dark">*</span>
                  </Label>
                  <Select 
                    value={guest.ageCategory} 
                    onValueChange={(value) => handleGuestChange(index, 'ageCategory', value)}
                  >
                    <SelectTrigger 
                      id={`guest-age-${index}`}
                      className="mt-2 w-full bg-white border border-gray-light focus:border-gray-darkest rounded-lg py-6 text-lg"
                    >
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {ageCategories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {guest.ageCategory && (
                  <div>
                    <p className="text-sm text-gray-dark italic mb-3">
                      Cóctel largo, brindis, música… y en mesa, el toque final: elige tu plato principal.
                    </p>
                    <Label htmlFor={`guest-dish-${index}`} className="text-gray-darkest">
                      Plato principal <span className="text-gray-dark">*</span>
                    </Label>
                    <Select 
                      value={guest.mainDish} 
                      onValueChange={(value) => handleGuestChange(index, 'mainDish', value)}
                    >
                      <SelectTrigger 
                        id={`guest-dish-${index}`}
                        data-testid={`guest-dish-${index}`}
                        className="mt-2 w-full bg-white border border-gray-light focus:border-gray-darkest rounded-lg py-6 text-lg"
                      >
                        <SelectValue placeholder="Selecciona un plato" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {getDishOptions(guest.ageCategory).map(dish => (
                          <SelectItem key={dish.value} value={dish.value}>
                            {dish.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <div>
                  <Label htmlFor={`guest-allergies-${index}`} className="text-gray-darkest">
                    Alergias / intolerancias / Otra dieta (si aplica)
                  </Label>
                  <Input
                    id={`guest-allergies-${index}`}
                    value={guest.allergies}
                    onChange={(e) => handleGuestChange(index, 'allergies', e.target.value)}
                    placeholder="Indica alergias, intolerancias, dieta vegetariana..."
                    className="mt-2 bg-white border border-gray-light focus:border-gray-darkest rounded-lg py-6"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="phone" className="text-lg font-normal text-gray-darkest flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-dark" />
                Teléfono de contacto <span className="text-gray-dark">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="600 600 600"
                className="mt-2 bg-white border border-gray-light focus:border-gray-darkest rounded-lg py-6 text-lg"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-lg font-normal text-gray-darkest flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-dark" />
                Email <span className="text-gray-dark">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="mt-2 bg-white border border-gray-light focus:border-gray-darkest rounded-lg py-6 text-lg"
                required
              />
              <p className="text-sm text-gray mt-2">¡Para que te mandemos las fotos!</p>
            </div>

            <div>
              <Label htmlFor="comments" className="text-lg font-normal text-gray-darkest flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-gray-dark" />
                Comentarios
              </Label>
              <Textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="¿Algo a tener en cuenta?"
                className="mt-2 bg-white border border-gray-light focus:border-gray-darkest rounded-lg min-h-32"
              />
            </div>

            <div>
              <Label htmlFor="song" className="text-lg font-normal text-gray-darkest flex items-center gap-2">
                <Music className="w-5 h-5 text-gray-dark" />
                Canción que te gustaría escuchar
              </Label>
              <Input
                id="song"
                value={songRequest}
                onChange={(e) => setSongRequest(e.target.value)}
                placeholder="¡La pondremos en la barra libre!"
                className="mt-2 bg-white border border-gray-light focus:border-gray-darkest rounded-lg py-6"
              />
            </div>
          </div>

          {/* Privacy */}
          <div className="flex items-start space-x-3 p-4">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={setPrivacyAccepted}
              className="mt-1 border-2 border-gray-dark data-[state=checked]:bg-gray-darkest data-[state=checked]:border-gray-darkest"
            />
            <Label htmlFor="privacy" className="text-sm text-gray-dark leading-relaxed cursor-pointer">
              No te vamos a mandar publi, ¡aunque seamos de Marketing los dos! Pero acepta esto para la gestión de la invitación y asistencia. <span className="text-gray-darkest">*</span>
            </Label>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-darkest hover:bg-black text-white py-7 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Confirmación'}
            </Button>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-gray italic">
            Si necesitas actualizar tu respuesta, contáctanos.
          </p>
        </form>
      </div>
    </section>
  );
};
