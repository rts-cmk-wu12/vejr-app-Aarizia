Vejr-app
I denne opgave skal du lave en simpel hjemmeside, hvor man kan søge på en by og få temperaturen.
Du skal bruge OpenWeatherMap (OWM) API til at hente vejrdata fra deres servere.

Trin-for-trin:
Opret en gratis konto på OWM og få en API-nøgle.
Lav et inputfelt, hvor brugeren kan indtaste navnet på en by.
Lav en funktion, der sender en forespørgsel til OWM Geocoding API Du vil modtage et svar med de geografiske koordinater (bredde- og længdegrad) for den valgte by.
Lav en anden funktion, der sender en forespørgsel til OWM Current Weather API med:
De geografiske koordinater
Din API-nøgle
Du vil modtage et svar med aktuelle vejrdata for den valgte by, herunder temperaturen.
Vis temperaturen på hjemmesiden sammen med:
Bynavn
Eventuelt et passende ikon eller billede for vejret (se Weather Icons)
Test din hjemmeside og sørg for, at den virker for forskellige byer og håndterer eventuelle fejl eller ugyldige input.
Aflevering:
Push til GitHub og husk pull request til main