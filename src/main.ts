<style>
  .btn-primary {
    @apply bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-8 rounded-lg
    transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out
    relative overflow-hidden;
  }
  
  .btn-primary::after {
    content: '';
    @apply absolute inset-0 bg-white opacity-0;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0; }
    50% { transform: scale(1.5); opacity: 0.2; }
    100% { transform: scale(2); opacity: 0; }
  }
  
  .btn-secondary {
    @apply bg-white text-blue-600 border-2 border-blue-600 font-bold py-3 px-8 rounded-lg
    transform hover:bg-blue-50 hover:shadow-md transition-all duration-300 ease-in-out;
  }
</style>

<head>
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // Remplacez par votre ID GA4

    // Configuration des événements de conversion
    const trackConversion = (eventName, eventData = {}) => {
      gtag('event', eventName, {
        ...eventData,
        send_to: 'G-XXXXXXXXXX'
      });
    };
  </script>
</head>

<!-- Add this script before closing body -->
<script>
  // Existing ROI Calculator Logic
  // ... existing code ...

  // Intelligent Popup System
  document.addEventListener('DOMContentLoaded', function() {
    let hasShownPopup = false;
    let exitIntent = false;
    
    // Exit Intent Detection
    document.addEventListener('mouseleave', function(e) {
      if (e.clientY <= 0 && !hasShownPopup && !exitIntent) {
        exitIntent = true;
        setTimeout(showExitPopup, 1000);
      }
    });

    // Scroll Depth Detection
    let scrollDepth = 0;
    window.addEventListener('scroll', function() {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const currentDepth = (scrolled / height) * 100;
      
      if (currentDepth > scrollDepth) {
        scrollDepth = currentDepth;
        if (scrollDepth >= 70 && !hasShownPopup) {
          showScrollDepthPopup();
        }
      }
    });

    function showExitPopup() {
      const popup = document.createElement('div');
      popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
      popup.innerHTML = `
        <div class="bg-white p-8 rounded-lg max-w-md mx-4" data-aos="zoom-in">
          <h3 class="text-2xl font-bold mb-4">Attendez !</h3>
          <p class="mb-6">Découvrez comment AmbuConnect peut réduire vos coûts opérationnels de 25% en 3 mois.</p>
          <div class="space-y-4">
            <button class="btn-primary w-full">Télécharger le guide gratuit</button>
            <button class="btn-secondary w-full" onclick="this.closest('.fixed').remove()">Non merci</button>
          </div>
        </div>
      `;
      document.body.appendChild(popup);
      hasShownPopup = true;
    }

    function showScrollDepthPopup() {
      const popup = document.createElement('div');
      popup.className = 'fixed bottom-4 right-4 max-w-sm bg-white p-6 rounded-lg shadow-xl z-40';
      popup.innerHTML = `
        <div class="flex items-start">
          <div class="flex-1">
            <h4 class="font-semibold mb-2">Prêt à optimiser votre gestion ?</h4>
            <p class="text-sm text-gray-600 mb-4">Réservez une démo personnalisée maintenant</p>
            <button class="btn-primary w-full text-sm py-2">Réserver ma démo</button>
          </div>
          <button class="ml-4" onclick="this.closest('.fixed').remove()">×</button>
        </div>
      `;
      document.body.appendChild(popup);
      hasShownPopup = true;
    }

    // Live Chat Functionality
    const chatButton = document.getElementById('live-chat');
    if (chatButton) {
      chatButton.addEventListener('click', function() {
        // Intégration avec votre système de chat en direct
        alert('Fonctionnalité de chat en direct à intégrer');
      });
    }

    // Analytics Event Tracking
    // Suivi des clics sur les CTA principaux
    document.querySelectorAll('.btn-primary').forEach(button => {
      button.addEventListener('click', function(e) {
        const buttonText = e.target.textContent.trim();
        trackConversion('cta_click', {
          button_text: buttonText,
          page_location: window.location.pathname
        });
      });
    });

    // Suivi des soumissions de formulaire
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = new FormData(e.target);
        const fleetSize = formData.get('fleet_size');
        
        // Envoi de l'événement de conversion
        trackConversion('form_submission', {
          form_id: 'contact_form',
          fleet_size: fleetSize
        });

        // Stockage temporaire des données
        sessionStorage.setItem('form_submitted', 'true');
        sessionStorage.setItem('fleet_size', fleetSize);

        // Redirection vers la page de confirmation
        window.location.href = '/confirmation.html';
      });
    }

    // Suivi des interactions avec le calculateur ROI
    const roiInputs = document.querySelectorAll('#ambulanceCount, #coursesCount, #kmCount');
    roiInputs.forEach(input => {
      input.addEventListener('change', function(e) {
        trackConversion('roi_calculator_interaction', {
          input_id: e.target.id,
          value: e.target.value
        });
      });
    });

    // Suivi des clics sur le chat
    const chatButton = document.getElementById('live-chat');
    if (chatButton) {
      chatButton.addEventListener('click', function() {
        trackConversion('chat_opened');
      });
    }

    // Suivi des interactions avec les popups
    function trackPopupInteraction(action, popupType) {
      trackConversion('popup_interaction', {
        action: action,
        popup_type: popupType
      });
    }

    // Modification des fonctions de popup existantes
    const originalShowExitPopup = showExitPopup;
    showExitPopup = function() {
      originalShowExitPopup();
      trackPopupInteraction('shown', 'exit_intent');
    };

    const originalShowScrollDepthPopup = showScrollDepthPopup;
    showScrollDepthPopup = function() {
      originalShowScrollDepthPopup();
      trackPopupInteraction('shown', 'scroll_depth');
    };

    // Suivi de la profondeur de scroll
    let maxScrollDepth = 0;
    window.addEventListener('scroll', function() {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        if (maxScrollDepth >= 25) trackConversion('scroll_depth', { depth: 25 });
        if (maxScrollDepth >= 50) trackConversion('scroll_depth', { depth: 50 });
        if (maxScrollDepth >= 75) trackConversion('scroll_depth', { depth: 75 });
        if (maxScrollDepth >= 90) trackConversion('scroll_depth', { depth: 90 });
      }
    });

    // Suivi du temps passé sur la page
    let timeOnPage = 0;
    const timeInterval = setInterval(() => {
      timeOnPage += 30;
      if (timeOnPage === 30) trackConversion('time_on_page', { seconds: 30 });
      if (timeOnPage === 60) trackConversion('time_on_page', { seconds: 60 });
      if (timeOnPage === 180) trackConversion('time_on_page', { seconds: 180 });
      if (timeOnPage === 300) {
        trackConversion('time_on_page', { seconds: 300 });
        clearInterval(timeInterval);
      }
    }, 30000);
  });
</script>
</body>
</html>