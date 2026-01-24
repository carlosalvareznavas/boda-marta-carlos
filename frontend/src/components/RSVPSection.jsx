import React, { useState } from 'react';
import { Heart, Users, Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { submitRSVP, ageCategories } from '../data/mockData';
import { toast } from 'sonner';

export const RSVPSection = () => {
  const [attending, setAttending] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [guests, setGuests] = useState([{ name: '', ageCategory: '', allergies: '' }]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAttendingChange = (value) => {
    setAttending(value);
    if (value === 'no') {
      setNumberOfGuests(1);
      setGuests([{ name: '', ageCategory: '', allergies: '' }]);
    }
  };

  const handleNumberOfGuestsChange = (value) => {
    const num = parseInt(value);
    setNumberOfGuests(num);
    
    const newGuests = [];
    for (let i = 0; i < num; i++) {
      newGuests.push(guests[i] || { name: '', ageCategory: '', allergies: '' });
    }
    setGuests(newGuests);
  };

  const handleGuestChange = (index, field, value) => {
    const newGuests = [...guests];
    newGuests[index] = { ...newGuests[index], [field]: value };
    setGuests(newGuests);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validations
    if (!attending) {
      toast.error('Por favor, indica si vas a asistir');
      return;
    }
    
    if (!phone) {
      toast.error('Por favor, indica tu teléfono de contacto');
      return;
    }
    
    if (!privacyAccepted) {
      toast.error('Debes aceptar el aviso de privacidad');
      return;
    }
    
    if (attending === 'si') {
      const hasEmptyNames = guests.some(guest => !guest.name.trim());
      if (hasEmptyNames) {
        toast.error('Por favor, completa los nombres de todos los asistentes');
        return;
      }
      
      const hasEmptyAgeCategory = guests.some(guest => !guest.ageCategory);
      if (hasEmptyAgeCategory) {
        toast.error('Por favor, indica si cada asistente es adulto, adolescente o niño/a');
        return;
      }
    }

    setIsSubmitting(true);

    const formData = {
      attending,
      numberOfGuests: attending === 'si' ? numberOfGuests : 0,
      guests: attending === 'si' ? guests : [],
      phone,
      email,
      comments,
      submittedAt: new Date().toISOString()
    };

    try {
      await submitRSVP(formData);
      setIsSubmitted(true);
      
      if (attending === 'si') {
        toast.success('¡Gracias! Nos hace mucha ilusión contar contigo');
      } else {
        toast.success('Gracias por avisar. Te tendremos muy presente ese día');
      }
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
            <div className="w-20 h-20 rounded-full bg-terracota/20 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-terracota" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-olive mb-6">
            {attending === 'si' ? '¡Confirmación recibida!' : 'Gracias por avisar'}
          </h2>
          <p className="text-olive-dark text-lg leading-relaxed mb-8">
            {attending === 'si' 
              ? 'Nos hace mucha ilusión contar contigo. Si necesitas cambiar algo, escríbenos y lo actualizamos.'
              : 'Te tendremos muy presente ese día.'}
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-2 border-terracota text-terracota hover:bg-terracota hover:text-white transition-all duration-300"
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
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-terracota" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-olive mb-6">
            Confirmación de asistencia
          </h2>
          <p className="text-olive-dark text-lg leading-relaxed max-w-2xl mx-auto">
            Para organizarlo bien (y cuidar cada detalle), ayúdanos confirmando si vienes y cuántos seréis. Si hay alergias o intolerancias, indícalo por favor para que todo el mundo disfrute sin preocupaciones.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-cream/30 p-8 md:p-12 rounded-3xl">
          {/* Attending */}
          <div className="space-y-4">
            <Label className="text-lg font-medium text-olive">
              ¿Vas a venir? <span className="text-terracota">*</span>
            </Label>
            <RadioGroup value={attending} onValueChange={handleAttendingChange}>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white hover:bg-olive-light/50 transition-colors cursor-pointer">
                <RadioGroupItem value="si" id="si" />
                <Label htmlFor="si" className="flex-1 cursor-pointer text-olive">
                  Sí, allí estaré
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white hover:bg-olive-light/50 transition-colors cursor-pointer">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="flex-1 cursor-pointer text-olive">
                  Esta vez no podré
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Number of Guests */}
          {attending === 'si' && (
            <>
              <div className="space-y-4">
                <Label className="text-lg font-medium text-olive flex items-center gap-2">
                  <Users className="w-5 h-5 text-terracota" />
                  ¿Cuántas personas venís? <span className="text-terracota">*</span>
                </Label>
                <Select value={numberOfGuests.toString()} onValueChange={handleNumberOfGuestsChange}>
                  <SelectTrigger className="w-full bg-white border-2 border-olive/20 focus:border-terracota rounded-xl py-6 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
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
                  <div key={index} className="space-y-4 p-6 bg-white rounded-2xl border-2 border-olive/10">
                    <h4 className="font-medium text-olive text-lg">
                      Asistente {index + 1}
                    </h4>
                    <div>
                      <Label htmlFor={`guest-name-${index}`} className="text-olive">
                        Nombre y apellidos <span className="text-terracota">*</span>
                      </Label>
                      <Input
                        id={`guest-name-${index}`}
                        value={guest.name}
                        onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
                        placeholder="Nombre completo"
                        className="mt-2 bg-white border-2 border-olive/20 focus:border-terracota rounded-xl py-6 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`guest-age-${index}`} className="text-olive">
                        Categoría <span className="text-terracota">*</span>
                      </Label>
                      <Select 
                        value={guest.ageCategory} 
                        onValueChange={(value) => handleGuestChange(index, 'ageCategory', value)}
                      >
                        <SelectTrigger 
                          id={`guest-age-${index}`}
                          className="mt-2 w-full bg-white border-2 border-olive/20 focus:border-terracota rounded-xl py-6 text-lg"
                        >
                          <SelectValue placeholder="Selecciona categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          {ageCategories.map(category => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor={`guest-allergies-${index}`} className="text-olive">
                        Alergias / intolerancias (si aplica)
                      </Label>
                      <Input
                        id={`guest-allergies-${index}`}
                        value={guest.allergies}
                        onChange={(e) => handleGuestChange(index, 'allergies', e.target.value)}
                        placeholder="Indica alergias o intolerancias alimentarias"
                        className="mt-2 bg-white border-2 border-olive/20 focus:border-terracota rounded-xl py-6"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="phone" className="text-lg font-medium text-olive flex items-center gap-2">
                <Phone className="w-5 h-5 text-terracota" />
                Teléfono de contacto <span className="text-terracota">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="634 123 456"
                className="mt-2 bg-white border-2 border-olive/20 focus:border-terracota rounded-xl py-6 text-lg"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-lg font-medium text-olive flex items-center gap-2">
                <Mail className="w-5 h-5 text-terracota" />
                Email (opcional)
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="mt-2 bg-white border-2 border-olive/20 focus:border-terracota rounded-xl py-6"
              />
            </div>

            <div>
              <Label htmlFor="comments" className="text-lg font-medium text-olive flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-terracota" />
                Comentarios (opcional)
              </Label>
              <Textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Cualquier cosa que quieras comentarnos..."
                className="mt-2 bg-white border-2 border-olive/20 focus:border-terracota rounded-xl min-h-32"
              />
            </div>
          </div>

          {/* Privacy */}
          <div className="flex items-start space-x-3 p-4 rounded-xl bg-white">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={setPrivacyAccepted}
              className="mt-1 border-2 border-olive/30 data-[state=checked]:bg-terracota data-[state=checked]:border-terracota"
            />
            <Label htmlFor="privacy" className="text-sm text-olive-dark leading-relaxed cursor-pointer">
              He leído el aviso de privacidad y acepto el tratamiento de mis datos para la gestión de la invitación y asistencia. <span className="text-terracota">*</span>
            </Label>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-terracota hover:bg-terracota-dark text-white py-7 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar confirmación'}
            </Button>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-olive-dark italic">
            Si necesitas actualizar tu respuesta, contáctanos.
          </p>
        </form>
      </div>
    </section>
  );
};
