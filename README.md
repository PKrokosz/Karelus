
# Buty Jacka Karelusa – Strona Zamówień

Rzemieślnicza strona internetowa do prezentacji i zamawiania butów wykonanych przez Jacka Karelusa. Projekt stworzony z myślą o klientach LARPowych, rekonstrukcyjnych i miłośnikach rzemiosła.

## 📦 Zawartość repozytorium

- `index.html` – strona główna z manifestem, archetypami butów, galerią i poradnikiem
- `zamowienie.html` – formularz zamówienia z wyborem akcesoriów i dynamiczną wyceną
- `models.json` – dane o modelach butów (ID, nazwa, opis, zdjęcia)
- `script.js` – skrypt obsługujący kalkulację ceny i rabatu
- `output.css` – zbudowany lokalnie styl TailwindCSS
- `img/` – zdjęcia modeli, detali rzemieślniczych i hero background

## 🛠️ Uruchomienie lokalne

Wymaga serwera lokalnego do poprawnego działania `fetch()` na `models.json`.

### Opcja 1 – Node.js:
```bash
npx serve
```

### Opcja 2 – Python:
```bash
python -m http.server
```

Następnie otwórz przeglądarkę i wejdź na `http://localhost:8000`.

## ✨ Funkcje

- Archetypiczny katalog modeli (Wędrowiec, Przodek, Odkupiciel…)
- Manifest rzemieślniczy
- Poradnik doboru butów do postaci
- Dynamiczne zliczanie ceny zamówienia
- Przygotowany pod rozbudowę o integracje (np. n8n / Google Sheets)

## 📧 Kontakt

Zamówienia i pytania: [sanchose@wp.pl](mailto:sanchose@wp.pl)
