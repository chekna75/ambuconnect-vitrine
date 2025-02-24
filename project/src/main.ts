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
        <div class="text-2xl font-bold slide-in">AmbuManager</div>
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
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ambulance-dashboard.png" 
                alt="Interface de gestion" 
                class="main-image"
              >
            </div>
            <div class="secondary-images">
              <div class="image-container" data-aos="zoom-in" data-aos-delay="400">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ambulance-fleet.png" 
                  alt="Gestion de flotte" 
                >
              </div>
              <div class="image-container" data-aos="zoom-in" data-aos-delay="500">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ambulance-chat.png" 
                  alt="Communication en temps réel" 
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

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
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="section">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Pourquoi choisir AmbuManager ?
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-duration="1200">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ambulance-stats.png" 
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

    <!-- Contact Section -->
    <section id="contact" class="section bg-gray-50">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          Prêt à optimiser votre gestion ?
        </h2>
        <p class="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
          Contactez-nous pour une démonstration personnalisée de notre solution.
        </p>
        <button class="btn-primary" data-aos="zoom-in" data-aos-delay="200">
          Demander une démo
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">AmbuManager</h3>
            <p class="text-gray-400">La solution complète pour la gestion de votre entreprise d'ambulances.</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <p class="text-gray-400">Email: contact@ambumanager.com</p>
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
  </div>
`