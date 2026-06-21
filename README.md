# Deutsch B1 Begleiter

Eine installierbare Web-App (PWA) fuer Android und Desktop.

## Lokal testen

Entpacken Sie zuerst die ZIP-Datei. Danach oeffnen Sie `index.html` direkt im Browser oder starten Sie einen kleinen Webserver in diesem Ordner.

## Oeffentlicher Link

Dieser Ordner kann unveraendert auf statisches Hosting hochgeladen werden:

- Netlify: Ordner per Drag & Drop in Netlify Deploys ziehen.
- Vercel: neues Projekt anlegen und diesen Ordner als statische App deployen.
- GitHub Pages: ZIP entpacken, den Inhalt des Ordners hochladen, dann Pages aktivieren. Wichtig: `index.html` muss direkt im veroeffentlichten Root liegen.
- Firebase Hosting: Projekt erstellen, diesen Ordner als Public-Verzeichnis verwenden.

Nach dem Hosting kann die App auf Android in Chrome geoeffnet und ueber das Browsermenue als App installiert werden.

## GitHub Pages Schritt fuer Schritt

1. ZIP-Datei entpacken.
2. Alle Dateien aus `integrationskurs-b1-pwa` in das GitHub-Repository hochladen: `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `service-worker.js`, `.nojekyll` und den Ordner `assets`.
3. In GitHub zu `Settings` -> `Pages` gehen.
4. Als Source den Branch `main` und den Ordner `/root` waehlen, wenn die Dateien direkt im Repository liegen.
5. Nicht den Link `github.com/.../blob/.../index.html` verwenden. Die App funktioniert ueber den GitHub-Pages-Link, zum Beispiel `https://name.github.io/repository/`.

## App installieren auf Android

Der Button "Installieren / Anleitung" versucht in kompatiblen Browsern den echten Installationsdialog zu oeffnen. Wenn der Browser das nicht erlaubt, zeigt die App eine Schritt-fuer-Schritt-Anleitung.

Wichtig: Der Codex-In-App-Browser und manche eingebettete Browser koennen PWAs nicht direkt installieren. Testen Sie die Installation auf Android am besten in Chrome oder Edge mit einem oeffentlichen HTTPS-Link.

## Wichtiger Hinweis

Die App bildet die offizielle DTZ-Struktur pruefungsnah nach und enthaelt einen LiD-Trainingskatalog mit 310 Fragen. Der offizielle BAMF-Katalog kann ergaenzend im Bereich "Leben in Deutschland" geoeffnet werden. Fuer produktive Nutzung sollte der amtliche Fragenkatalog als JSON/CSV-Datenblock importiert und regelmaessig geprueft werden.
