import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Configuration AOS avec plus d'effets
AOS.init({
  duration: 1000,
  once: true,
  mirror: true,
  easing: 'ease-out-cubic'
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen">
    <!-- Hero Section -->
    <header class="hero-gradient text-white">
      <nav class="container mx-auto px-6 py-6 flex justify-between items-center">
        <div class="text-2xl font-bold slide-in">AmbuConnect</div>
        <div class="hidden md:flex space-x-8">
          <a href="#features" class="nav-link hover:text-blue-200 transition-colors">Fonctionnalités</a>
          <a href="#benefits" class="nav-link hover:text-blue-200 transition-colors">Avantages</a>
          <a href="#contact" class="nav-link hover:text-blue-200 transition-colors">Contact</a>
        </div>
      </nav>
      
      <div class="container mx-auto px-6 py-24">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="200">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              Gérez votre flotte d'ambulances efficacement
            </h1>
            <p class="text-xl mb-8 pulse">
              Une solution complète pour la gestion de votre entreprise d'ambulances : 
              suivi en temps réel, gestion des chauffeurs et optimisation des courses.
            </p>
            <button class="btn-primary" data-aos="zoom-in" data-aos-delay="400">
              Demander une démo
            </button>
          </div>
          <div class="image-showcase" data-aos="fade-up" data-aos-delay="300">
            <div class="main-image-container">
              <div class="dashboard-label">
                Dashboard
              </div>
              <img 
                src="src/assets/img/pageAdmin.png"
                alt="Interface de gestion" 
                class="main-image"
              >
            </div>
            <div class="secondary-images">
              <div class="image-container" data-aos="zoom-in" data-aos-delay="400">
                <img 
                  src="src/assets/img/pageGestionAmbulance.png" 
                  alt="Gestion de flotte" 
                >
              </div>
              <div class="image-container" data-aos="zoom-in" data-aos-delay="500">
                <img 
                  src="src/assets/img/pageMessage.png" 
                  alt="Communication en temps réel" 
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Stats Section -->
    <section class="bg-blue-600 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div data-aos="fade-up">
            <div class="text-4xl font-bold mb-2">500+</div>
            <div>Ambulances gérées</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div class="text-4xl font-bold mb-2">98%</div>
            <div>Clients satisfaits</div>
          </div>
          <!-- Ajoutez 2 autres statistiques impressionnantes -->
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Fonctionnalités principales
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="feature-card" data-aos="flip-left" data-aos-delay="100">
            <div class="text-primary text-4xl mb-4 floating">📍</div>
            <h3 class="text-xl font-semibold mb-4">Géolocalisation en temps réel</h3>
            <p class="text-gray-600">Suivez vos véhicules en temps réel et optimisez les itinéraires pour une meilleure efficacité.</p>
          </div>
          
          <div class="feature-card" data-aos="flip-left" data-aos-delay="200">
            <div class="text-primary text-4xl mb-4 floating">👥</div>
            <h3 class="text-xl font-semibold mb-4">Gestion des chauffeurs</h3>
            <p class="text-gray-600">Gérez facilement les plannings, les contrats et les fiches de paie de vos employés.</p>
          </div>
          
          <div class="feature-card" data-aos="flip-left" data-aos-delay="300">
            <div class="text-primary text-4xl mb-4 floating">📱</div>
            <h3 class="text-xl font-semibold mb-4">Communication instantanée</h3>
            <p class="text-gray-600">Envoyez des messages et des notifications en temps réel à vos équipes sur le terrain.</p>
          </div>

          <div class="feature-card" data-aos="flip-left" data-aos-delay="300">
            <div class="text-primary text-4xl mb-4 floating">🚀</div>
            <h3 class="text-xl font-semibold mb-4">Gestion intelligente des courses</h3>
            <p class="text-gray-600">Optimisez chaque trajet et maximisez votre efficacité avec notre système intelligent de planification des courses.</p>
          </div>
          
          <div class="feature-card" data-aos="flip-left" data-aos-delay="400">
            <div class="text-primary text-4xl mb-4 floating">📊</div>
            <h3 class="text-xl font-semibold mb-4">Tableaux de bord analytiques</h3>
            <p class="text-gray-600">Visualisez vos performances en temps réel avec des indicateurs clés et prenez des décisions éclairées pour votre activité.</p>
          </div>

          <div class="feature-card" data-aos="flip-left" data-aos-delay="500">
            <div class="text-primary text-4xl mb-4 floating">🔧</div>
            <h3 class="text-xl font-semibold mb-4">Maintenance prédictive</h3>
            <p class="text-gray-600">Anticipez les besoins d'entretien de votre flotte et évitez les pannes grâce à notre système de suivi intelligent.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="section">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Pourquoi choisir AmbuConnect ?
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-duration="1200">
            <img 
              src="src/assets/img/statsFlotte.png" 
              alt="Statistiques et analyses" 
              class="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
          </div>
          
          <div class="flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1200">
            <div class="mb-6 hover:translate-x-2 transition-transform duration-300">
              <h3 class="text-2xl font-semibold mb-3">Optimisation des coûts</h3>
              <p class="text-gray-600">Réduisez vos coûts opérationnels grâce à une meilleure gestion de votre flotte et de vos ressources.</p>
            </div>
            
            <div class="mb-6 hover:translate-x-2 transition-transform duration-300">
              <h3 class="text-2xl font-semibold mb-3">Gain de temps</h3>
              <p class="text-gray-600">Automatisez les tâches administratives et concentrez-vous sur l'essentiel.</p>
            </div>
            
            <div class="hover:translate-x-2 transition-transform duration-300">
              <h3 class="text-2xl font-semibold mb-3">Satisfaction client</h3>
              <p class="text-gray-600">Améliorez la qualité de service grâce à une meilleure coordination des interventions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ROI Calculator Section -->
    <section class="section bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Calculez vos économies potentielles
        </h2>
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 text-gray-800">
          <div class="grid md:grid-cols-2 gap-8" data-aos="fade-up">
            <div class="space-y-6">
              <div>
                <label class="block mb-2 font-semibold flex items-center">
                  Nombre d'ambulances
                  <span class="ml-2 text-sm text-gray-500 cursor-help" title="Nombre de véhicules dans votre flotte">ℹ️</span>
                </label>
                <input type="range" min="1" max="30" value="5" class="w-full accent-blue-600 cursor-pointer" id="ambulanceCount">
                <div class="flex justify-between">
                  <span class="text-sm">1</span>
                  <span id="ambulanceValue" class="font-bold">5</span>
                  <span class="text-sm">30</span>
                </div>
              </div>
              <div>
                <label class="block mb-2 font-semibold flex items-center">
                  Courses par jour/véhicule
                  <span class="ml-2 text-sm text-gray-500 cursor-help" title="Nombre moyen de transports par véhicule et par jour">ℹ️</span>
                </label>
                <input type="range" min="3" max="12" value="6" class="w-full accent-blue-600 cursor-pointer" id="coursesCount">
                <div class="flex justify-between">
                  <span class="text-sm">3</span>
                  <span id="coursesValue" class="font-bold">6</span>
                  <span class="text-sm">12</span>
                </div>
              </div>
              <div>
                <label class="block mb-2 font-semibold flex items-center">
                  Kilomètres par course
                  <span class="ml-2 text-sm text-gray-500 cursor-help" title="Distance moyenne par transport">ℹ️</span>
                </label>
                <input type="range" min="5" max="50" value="15" class="w-full accent-blue-600 cursor-pointer" id="kmCount">
                <div class="flex justify-between">
                  <span class="text-sm">5 km</span>
                  <span id="kmValue" class="font-bold">15 km</span>
                  <span class="text-sm">50 km</span>
                </div>
              </div>
            </div>
            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-2xl font-bold mb-4 text-blue-600">Économies estimées</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span>Carburant :</span>
                  <span class="font-bold text-green-600" id="fuelValue">520 €</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Temps optimisé :</span>
                  <span class="font-bold text-green-600" id="timeValue">1 800 €</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Gestion administrative :</span>
                  <span class="font-bold text-green-600" id="adminValue">900 €</span>
                </div>
                <div class="border-t pt-4 mt-4">
                  <div class="flex justify-between items-center">
                    <span class="font-semibold">Total mensuel :</span>
                    <span class="font-bold text-green-600 text-xl" id="monthlyValue">3 220 €</span>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <span class="font-semibold">Total annuel :</span>
                    <span class="font-bold text-green-600 text-xl" id="yearlyValue">38 640 €</span>
                  </div>
                </div>
                <button class="btn-primary w-full mt-6 transform hover:scale-105 transition-transform duration-300">
                  Optimisez votre activité maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section bg-blue-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Ils nous font confiance
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div class="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-600 mb-4">"AmbuConnect a révolutionné notre gestion quotidienne. Nous avons augmenté notre efficacité de 40% en 3 mois."</p>
            <div class="font-semibold">Jean Dupont</div>
            <div class="text-sm text-gray-500">Directeur, Ambulances Secours</div>
          </div>
          <!-- Ajoutez 2 autres témoignages similaires -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
            Commencez dès aujourd'hui
          </h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-right">
              <h3 class="text-xl font-semibold mb-4">Démo gratuite</h3>
              <p class="mb-4">Découvrez toutes nos fonctionnalités en 30 minutes</p>
              <button class="btn-primary w-full">Réserver ma démo</button>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-left">
              <h3 class="text-xl font-semibold mb-4">Contact commercial</h3>
              <p class="mb-4">Questions sur nos offres ? Contactez-nous</p>
              <button class="btn-secondary w-full">Nous contacter</button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Floating CTA -->
    <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-center items-center space-x-4 md:space-x-8">
      <p class="text-lg font-semibold">Prêt à optimiser votre gestion ?</p>
      <button class="btn-primary">Essai gratuit</button>
      <button class="btn-secondary">Voir la démo</button>
    </div>

    <!-- Newsletter Popup -->
    <div id="newsletter-popup" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg max-w-md">
        <h3 class="text-2xl font-bold mb-4">Guide gratuit</h3>
        <p class="mb-6">Recevez notre guide "10 conseils pour optimiser la gestion de votre flotte d'ambulances"</p>
        <input type="email" placeholder="Votre email" class="w-full p-2 mb-4 border rounded">
        <button class="btn-primary w-full">Télécharger le guide</button>
      </div>
    </div>

    

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">AmbuConnect</h3>
            <p class="text-gray-400">La solution complète pour la gestion de votre entreprise d'ambulances.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <p class="text-gray-400">Email: contact@ambuconnect.com</p>
            <p class="text-gray-400">Tél: +33 1 23 45 67 89</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Liens utiles</h4>
            <ul class="text-gray-400">
              <li class="mb-2"><a href="#features" class="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li class="mb-2"><a href="#benefits" class="hover:text-white transition-colors">Avantages</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Optimized CTAs with enhanced styling -->
    <style>
      .btn-primary {
        @apply bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-8 rounded-lg
        transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out;
      }
      
      .btn-secondary {
        @apply bg-white text-blue-600 border-2 border-blue-600 font-bold py-3 px-8 rounded-lg
        transform hover:bg-blue-50 hover:shadow-md transition-all duration-300 ease-in-out;
      }

      .feature-card {
        @apply bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 
        hover:shadow-xl transition-all duration-300 ease-in-out;
      }

      .floating {
        animation: floating 3s ease-in-out infinite;
      }

      @keyframes floating {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }

      .nav-link {
        @apply relative;
      }

      .nav-link::after {
        content: '';
        @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300;
      }

      .nav-link:hover::after {
        @apply w-full;
      }
    </style>

    <!-- Add this script before closing body -->
    <script>
      // ROI Calculator Logic avec des valeurs réalistes
      const ambulanceInput = document.getElementById('ambulanceCount');
      const coursesInput = document.getElementById('coursesCount');
      const kmInput = document.getElementById('kmCount');
      
      const ambulanceValue = document.getElementById('ambulanceValue');
      const coursesValue = document.getElementById('coursesValue');
      const kmValue = document.getElementById('kmValue');
      
      const fuelValue = document.getElementById('fuelValue');
      const timeValue = document.getElementById('timeValue');
      const adminValue = document.getElementById('adminValue');
      const monthlyValue = document.getElementById('monthlyValue');
      const yearlyValue = document.getElementById('yearlyValue');

      function calculateROI() {
        const ambulances = parseInt(ambulanceInput.value);
        const coursesPerDay = parseInt(coursesInput.value);
        const kmPerCourse = parseInt(kmInput.value);
        
        // Constantes basées sur des moyennes du secteur
        const fuelCostPerKm = 0.15; // €/km (consommation moyenne)
        const fuelSavingsPercent = 0.20; // 20% d'économie de carburant
        const timeValuePerHour = 35; // €/heure (coût moyen chauffeur)
        const timeSavingsPercent = 0.15; // 15% de gain de temps
        const adminCostPerVehicle = 300; // €/mois/véhicule
        const adminSavingsPercent = 0.30; // 30% d'économie administrative

        // Calculs mensuels (20 jours ouvrés)
        const totalKmPerMonth = ambulances * coursesPerDay * kmPerCourse * 20;
        const fuelSavings = totalKmPerMonth * fuelCostPerKm * fuelSavingsPercent;
        
        const timePerCourse = 0.75; // 45 minutes en moyenne par course
        const totalHoursPerMonth = ambulances * coursesPerDay * timePerCourse * 20;
        const timeSavings = totalHoursPerMonth * timeValuePerHour * timeSavingsPercent;
        
        const adminSavings = ambulances * adminCostPerVehicle * adminSavingsPercent;

        // Totaux
        const monthlyTotal = Math.round(fuelSavings + timeSavings + adminSavings);
        const yearlyTotal = monthlyTotal * 12;

        // Mise à jour de l'interface
        ambulanceValue.textContent = ambulances;
        coursesValue.textContent = coursesPerDay;
        kmValue.textContent = kmPerCourse + ' km';
        
        fuelValue.textContent = Math.round(fuelSavings).toLocaleString() + ' €';
        timeValue.textContent = Math.round(timeSavings).toLocaleString() + ' €';
        adminValue.textContent = Math.round(adminSavings).toLocaleString() + ' €';
        monthlyValue.textContent = monthlyTotal.toLocaleString() + ' €';
        yearlyValue.textContent = yearlyTotal.toLocaleString() + ' €';
      }

      // Event listeners
      ambulanceInput.addEventListener('input', calculateROI);
      coursesInput.addEventListener('input', calculateROI);
      kmInput.addEventListener('input', calculateROI);

      // Calcul initial
      calculateROI();
    </script>
  </div>
`