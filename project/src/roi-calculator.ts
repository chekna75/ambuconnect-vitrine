export function initializeROICalculator() {
  // Attendre que le DOM soit chargé
  document.addEventListener('DOMContentLoaded', () => {
    const ambulanceInput = document.getElementById('ambulanceCount') as HTMLInputElement;
    const coursesInput = document.getElementById('coursesCount') as HTMLInputElement;
    const kmInput = document.getElementById('kmCount') as HTMLInputElement;
    
    const ambulanceValue = document.getElementById('ambulanceValue');
    const coursesValue = document.getElementById('coursesValue');
    const kmValue = document.getElementById('kmValue');
    
    const fuelValue = document.getElementById('fuelValue');
    const timeValue = document.getElementById('timeValue');
    const adminValue = document.getElementById('adminValue');
    const monthlyValue = document.getElementById('monthlyValue');
    const yearlyValue = document.getElementById('yearlyValue');

    if (!ambulanceInput || !coursesInput || !kmInput || 
        !ambulanceValue || !coursesValue || !kmValue || 
        !fuelValue || !timeValue || !adminValue || 
        !monthlyValue || !yearlyValue) {
      console.error('Certains éléments du calculateur ROI sont manquants');
      return;
    }

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
      ambulanceValue.textContent = ambulances.toString();
      coursesValue.textContent = coursesPerDay.toString();
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
  });
} 