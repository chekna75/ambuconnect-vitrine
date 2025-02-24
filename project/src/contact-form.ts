interface ContactFormData {
  nom: string;
  email: string;
  telephone?: string;
  entreprise?: string;
  nombreAmbulances?: string;
  sujet: string;
  message: string;
  rgpd: boolean;
}

export function initializeContactForm() {
  const contactButtons = document.querySelectorAll('[data-contact-trigger]');
  const modal = document.getElementById('contact-modal');
  const modalContent = modal?.querySelector('.contact-modal-content');
  const closeButton = document.getElementById('close-modal');
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  
  // Animation d'entrée pour les champs du formulaire
  function animateFormFields() {
    const fields = document.querySelectorAll('.form-group');
    fields.forEach((field, index) => {
      field.classList.add('opacity-0', 'translate-y-4');
      setTimeout(() => {
        field.classList.remove('opacity-0', 'translate-y-4');
        field.classList.add('transition-all', 'duration-500', 'ease-out');
      }, index * 100);
    });
  }

  // Ouvrir la modal avec animation
  function openModal() {
    if (modal && modalContent) {
      document.body.style.overflow = 'hidden';
      modal.style.display = 'flex';
      requestAnimationFrame(() => {
        modal.classList.remove('hidden');
        modalContent.classList.remove('hidden');
        animateFormFields();
      });
    }
  }

  // Fermer la modal avec animation
  function closeModal() {
    if (modal && modalContent) {
      modalContent.classList.add('hidden');
      modal.classList.add('hidden');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    }
  }

  // Ajouter les event listeners pour les boutons d'ouverture
  contactButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  // Fermer la modal
  if (closeButton && modal) {
    closeButton.addEventListener('click', closeModal);

    // Fermer en cliquant en dehors
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Gérer la soumission du formulaire
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data: Partial<ContactFormData> = {};
      
      formData.forEach((value, key) => {
        data[key as keyof ContactFormData] = value.toString();
      });

      const submitButton = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
      const successMessage = document.getElementById('success-message');
      const errorMessage = document.getElementById('error-message');

      try {
        submitButton.disabled = true;
        submitButton.innerHTML = `
          <div class="loading-spinner">
            <div class="loading-spinner-dot"></div>
            <div class="loading-spinner-dot"></div>
            <div class="loading-spinner-dot"></div>
          </div>
        `;

        // Simuler l'envoi d'email (à remplacer par votre logique d'envoi réelle)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (successMessage && errorMessage) {
          successMessage.classList.remove('hidden');
          errorMessage.classList.add('hidden');
        }
        
        contactForm.reset();
        
        // Fermer la modal après 2 secondes
        setTimeout(() => {
          closeModal();
          if (successMessage) {
            successMessage.classList.add('hidden');
          }
        }, 2000);

      } catch (error) {
        if (errorMessage && successMessage) {
          errorMessage.classList.remove('hidden');
          successMessage.classList.add('hidden');
        }
        console.error('Erreur lors de l\'envoi du message:', error);
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = `
          <span class="relative z-10">Envoyer le message</span>
          <div class="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        `;
      }
    });
  }

  // Ajouter des effets de focus sur les champs
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach(group => {
    const input = group.querySelector('input, select, textarea');
    const label = group.querySelector('label');

    if (input && label) {
      input.addEventListener('focus', () => {
        label.classList.add('text-blue-600', 'transform', '-translate-y-1');
      });

      input.addEventListener('blur', () => {
        if (!(input as HTMLInputElement).value) {
          label.classList.remove('text-blue-600', 'transform', '-translate-y-1');
        }
      });
    }
  });
} 