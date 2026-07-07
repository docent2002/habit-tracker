# Platja d'Aro Kaufkompass

Interaktive Single-Page-App (keine Abhängigkeiten, deutsche Oberfläche) zur
Kaufentscheidung für eine Ferienwohnung mit Airbnb-Lizenz in
Castell-Platja d'Aro (Costa Brava).

## Dateien

- **`app.html`** – kanonische Quelle (Artifact-Fragment: `<title>`, CSS, Markup, JS).
  Hier werden Änderungen gemacht.
- **`index.html`** – dieselbe App mit HTML-Wrapper, direkt im Browser zu öffnen.
  Wird aus `app.html` generiert:

  ```sh
  printf '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>' > index.html
  cat app.html >> index.html
  printf '</body></html>' >> index.html
  ```

## Täglicher Analyse-Lauf

Eine Claude-Routine aktualisiert die App jeden Morgen:

1. Portale nach Inseraten mit „licencia turística" in Platja d'Aro absuchen
2. `OBJEKTE`-Array in `app.html` pflegen (neue Objekte mit `neu: true`,
   verschwundene entfernen, Preisänderungen im `note`-Feld vermerken)
3. `STAND`-Konstante auf das Tagesdatum setzen
4. `index.html` neu generieren (Kommando oben), committen, pushen
5. Artifact unter derselben URL neu veröffentlichen

## Funktionen

- **Objekte** – lizenzierte Inserate, filter- und sortierbar, 4-Kriterien-Anzeige
- **Finanzierung** – Nicht-Residenten-Rechner (ITP-Staffel Katalonien, Annuität,
  benötigtes Einkommen inkl. CHF)
- **Rendite** – Direktkauf (24 % Brutto-IRNR, Nicht-EU) vs. spanische SL (25 % netto)
- **Checkliste** – Due Diligence mit `localStorage`-Persistenz
- **Fahrplan** – ~12 Wochen bis zum Live-Listing

Rechercheunterlage, keine Rechts-/Steuer-/Anlageberatung.
