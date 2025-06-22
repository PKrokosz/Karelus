# Karelus
Minimalna wersja sklepu internetowego z butami Jacka Karelusa – katalog + formularz zamówienia.

## Dodawanie nowych modeli

Lista dostępnych butów znajduje się w pliku `models.json`. Każdy model opisany jest obiektem posiadającym pola:

```json
{
  "name": "Nazwa modelu",
  "description": "Krótki opis",
  "price": 0,
  "image": "ścieżka/do/obrazka.jpg"
}
```

Aby dodać nowy model, skopiuj jeden z istniejących wpisów w `models.json`, wstaw przecinek po poprzednim obiekcie i uzupełnij dane. Zapisz plik i odśwież katalog w przeglądarce – nowy model pojawi się automatycznie.
