# Sara & Dario · 1 maggio 2027

Landing page React per il matrimonio, con Vite. Stile ispirato all’invito: carta chiara, verde salvia, ulivi e nomi calligrafici. Font inclusi nel progetto, senza richieste a Google Fonts. Nessun servizio esterno necessario per mostrare la pagina.

## Avvio

Serve Node.js 22.12+ (consigliato Node 24).

```sh
npm ci
npm run dev
```

Apri l’indirizzo mostrato da Vite. Per creare e vedere la versione pubblicabile:

```sh
npm run build
npm run preview
```

## Pubblicazione su GitHub Pages

1. Crea un repository GitHub e carica questo progetto sul branch `main`.
2. In **Settings → Pages → Build and deployment → Source**, seleziona **GitHub Actions**.
3. Esegui il workflow **Publish wedding page** dalla scheda Actions, o invia un nuovo aggiornamento a `main`.
4. Il workflow installa le dipendenze, crea il sito e lo pubblica. L’indirizzo compare in Settings → Pages e nell’ambiente github-pages.

La configurazione di Vite usa percorsi relativi: la pagina funziona sia su `utente.github.io` sia su `utente.github.io/nome-repository/`, senza cambiare configurazione. La navigazione usa ancore nella stessa pagina.

Per annullare un aggiornamento, ripristina il commit precedente su main e lascia ripubblicare il workflow. Per controllare un rilascio, verifica l’esito in Actions e apri la pagina pubblica.

## Contenuti

- `src/content.js`: luogo, indirizzi, collegamenti e programma.
- `src/App.jsx`: testi della pagina e struttura delle sezioni.
- `src/styles.css`: colori, tipografia e disposizione su desktop e telefono.
- `src/assets/olive-branch.svg`: illustrazione botanica originale vettoriale.
- `src/assets/sara-e-dario.ics`: evento per calendario. Inizia alle 11:00 italiane del 1 maggio 2027; l’ora di fine non è specificata.

Le indicazioni per il parcheggio usano esattamente il link fornito dagli sposi. Non sono stati ipotizzati nome della scuola, ingresso, capienza o tempi a piedi. Nessuna raccolta di conferme di presenza è prevista.

Storia del luogo sintetizzata dal [sito ufficiale del Sermig](https://www.sermig.org/arsenali/arsenale-della-pace.html), consultato l’8 novembre 2026. Indirizzo anche dall’invito. La pagina rimanda alla fonte per approfondire.

## Controllo prima della condivisione

Verificare sul telefono la leggibilità e i link al Sermig e al parcheggio. Provare il pulsante **Salva la data** con il proprio calendario. Confermare con l’organizzazione l’effettiva disponibilità e l’accesso del parcheggio. Quindi aprire l’indirizzo pubblico di GitHub Pages e ripetere le verifiche.
