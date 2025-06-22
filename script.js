// Fetch models and render catalog with optional tag filtering

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('katalog-modeli');
  const filters = Array.from(document.querySelectorAll('.filter'));
  let cards = [];

  function createCard(model) {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow';
    div.dataset.tags = model.tags.join(' ');
    div.innerHTML = `
      <img src="img/${model.images[0] || 'placeholder.jpg'}" alt="${model.name}" class="w-full h-64 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-1">${model.name}</h3>
        <p class="text-sm font-semibold text-[#5a3e2b] mb-3">Cena: od ${model.price} zł</p>
        <a href="zamowienie.html?model=${encodeURIComponent(model.name)}" class="inline-block text-[#5a3e2b] underline hover:opacity-80">Zamów ten model</a>
      </div>`;
    return div;
  }

  function applyFilters() {
    const selected = filters.filter(f => f.checked).map(f => f.value);
    cards.forEach(card => {
      const tags = card.dataset.tags.split(' ');
      const visible = selected.every(tag => tags.includes(tag));
      card.style.display = visible ? '' : 'none';
    });
  }

  fetch('models.json')
    .then(resp => resp.json())
    .then(models => {
      container.innerHTML = '';
      cards = models.map(m => {
        const card = createCard(m);
        container.appendChild(card);
        return card;
      });
      applyFilters();
    })
    .catch(err => {
      container.textContent = 'Nie udało się wczytać modeli.';
      console.error(err);
    });

  filters.forEach(f => f.addEventListener('change', applyFilters));
});
