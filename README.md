## Vannovervåkning - Nettside

#Innhenting av data og misc

Dataen hentes inn av komponenten `getdata.js` der det brukes axios for å gjøre
en `GET-request`. komponenten `getData` blir senere brukt i andre filer for å
slippe å gjenta axioskallet. Filen `misc.js` definerer en rekke funksjoner som senere brukes,
som funksjonen som formaterer tid, gjør det mulig å laste ned som csv-fil og sjekker status.

#Presentasjon av data

`Chart.js` og `LineChart.js` definerer utseendet og de ulike graftypene som senere blir brukt. Grafene definert i de to filene henter ut graftyper fra bibloteket `react-chartjs-2`. `LineChart.js` blir brukt sammen med `getData` i `displaychart.js` for å vise dataen som linjegraf.

`history.js` er en tabell kodet med mulighet for å kunne bestemme tidsintervall samt laste ned dataen som csv-fil.

#Pages

`Pages`-mappen er en oversikt over de ulike sidene man kan navigere til fra startsiden og headermenyen.

#App.js

Dette er `main`-filen som bare henter inn komponenter fra mappen `components`.

#Layout

Til layout av siden brukes SCSS hvor gulp kompilerer SCSS til CSS. Bakgrunnen for valget av SCSS er at den er mer brukevennlig og lesbar for den som skriver kode.  

#Firebase

Nettsiden hostes gjennom [Firebase](https://firebase.google.com/). Denne hoster `index.html` man finner under `public`. 
