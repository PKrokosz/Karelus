document.addEventListener('DOMContentLoaded', () => {
  fetch('models.json')
    .then(response => response.json())
    .then(models => {
      const container = document.getElementById('katalog-modeli');
      models.forEach((model, idx) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow';
        card.dataset.tags = model.tags.join(' ');
        card.setAttribute('data-aos', 'zoom-in');
        if (idx) {
          card.setAttribute('data-aos-delay', idx * 100);
        }
        card.innerHTML = `
          <img src="${model.image}" alt="${model.name}" class="w-full h-64 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-1">${model.name}</h3>
            <p class="text-sm text-gray-700 mb-1">${model.description}</p>
            <p class="text-sm font-semibold text-[#5a3e2b] mb-3">Cena: od ${model.price} zł</p>
            <a href="zamowienie.html?model=${encodeURIComponent(model.name)}" class="inline-block text-[#5a3e2b] underline hover:opacity-80">Zamów ten model</a>
          </div>`;
        container.appendChild(card);
      });

      const checkboxes = document.querySelectorAll('#filters input[type=checkbox]');
      checkboxes.forEach(cb => cb.addEventListener('change', filterModels));

      function filterModels() {
        const active = Array.from(checkboxes).filter(c => c.checked).map(c => c.value);
        const cards = container.children;
        Array.from(cards).forEach(card => {
          const tags = card.dataset.tags.split(' ');
          const visible = active.every(tag => tags.includes(tag));
          card.classList.toggle('hidden', !visible);
        });
      }
    });
});
