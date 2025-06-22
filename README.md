# Karelus

Minimalna wersja sklepu internetowego z butami Jacka Karelusa – katalog wraz z formularzem zamówienia.

## Zawartość repozytorium

- **index.html** – strona katalogu z listą modeli butów.
- **zamowienie.html** – prosty formularz składania zamówienia.
- **models.json** – lista dostępnych modeli w formacie JSON.
- **karelus_style.css** – arkusz stylów i przykładowy markup używany przez formularz.

Dodatkowe zasoby (np. zdjęcia produktów) można umieszczać w katalogu `img/`.

## Budowanie stylów Tailwind

Projekt korzysta z biblioteki Tailwind CSS. Aby zbudować pliki stylów lokalnie:

```bash
npm install      # instalacja zależności
npm run build    # kompilacja Tailwind do pliku CSS
```

Skrypt `build` powinien uruchamiać `tailwindcss` zgodnie z konfiguracją w `package.json`.

## Dodawanie modelu w `models.json`

Plik `models.json` przechowuje tablicę obiektów opisujących buty. Każdy wpis ma pola `id`, `name`, `price`, opcjonalną listę `tags` oraz tablicę `images`. Aby dodać nowy model, dopisz kolejny obiekt, np.:

```json
{
  "id": "lowlander",
  "name": "Lowlander Mk II",
  "price": 1500,
  "tags": ["niskie", "larp"],
  "images": ["lowlander1.webp", "lowlander2.webp"]
}
```

Po zapisaniu zmian plik można wykorzystać w aplikacji do generowania katalogu.

## Publikacja na GitHub Pages lub Netlify

1. Utwórz repozytorium w GitHub i wypchnij kod.
2. W ustawieniach repozytorium włącz GitHub Pages, wskazując gałąź `main` lub `docs`.
   Alternatywnie skorzystaj z Netlify – po zalogowaniu wybierz opcję importu z GitHub i wskaż niniejszy projekt.
3. Po zbudowaniu strony adres będzie dostępny pod domeną `*.github.io` lub `*.netlify.app`.
4. (Opcjonalnie) Skonfiguruj własną domenę, np. `karelus.pl`, przekierowując DNS na adres GitHub Pages bądź rekordy podane przez Netlify.

Repozytorium ma charakter demonstracyjny, ale te kroki pozwolą szybko wystawić stronę w sieci.

