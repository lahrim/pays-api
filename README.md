# API gratuit de liste des pays
API gratuite vous permet de récupérer une liste des pays, avec diverses informations pour chaque pays.


## Démo
[https://iso.lahrim.fr](https://iso.lahrim.fr)


## Developpement local
Changer .env.exemple en .env et ajouter les informations de la base de données, puis dans le terminal à la racine du projet :
```
yarn install
```

Une fois l'installation fini :
```
yarn start
```

Si vous êtes bien connecté à la base de donnée, dans le terminal il doit afficher :
```
=> Bien joué mon pote („• ᴗ •„)
```

**Url**
- Application : [http://localhost:8080](http://localhost:8080)


## Routes
Seul le https est pris en charge pour vos demandes.
```
Get /countries
Get /alpha2/FR
Get /alpha3/FRA
Get /alpha3/France
Get /tld/.fr
Get /lang/iso/fr
Get /lang/direction/LTR
Get /phone/indicatif/33
Get /phone/length/9
Get /monetary/iso/EUR
Get /fr/countries/France
Get /fr/region/Europe
Get /fr/subregion/Europe de l'Ouest
Get /fr/lang/français
Get /en/countries/France
Get /en/region/Europe
Get /en/subregion/Western Europe
Get /en/lang/french
```

## Exemples
Récupérez la liste des pays :
```
fetch("https://iso.lahrim.fr/countries")
  .then(response => response.json())
  .then(json => console.log(json))
```

Récupérez le pays par rapport à sont code alpha2 (deux caractères) :
```
fetch("https://iso.lahrim.fr/alpha2/FR")
  .then(response => response.json())
  .then(json => console.log(json))
```

**Réponse attendu**
```json
"resultat": true,
"total": 1,
"data": [
  {
    "id": 75,
    "flag": "🇫🇷",
    "alpha2": "FR",
    "alpha3": "FRA",
    "tld": ".fr",
    "name": "France",
    "name_fr": "France",
    "name_en": "France",
    "region_fr": "Europe",
    "region_en": "Europe",
    "sub_region_fr": "Europe de l'Ouest",
    "sub_region_en": "Western Europe",
    "lang": "Français",
    "lang_fr": "Français",
    "lang_en": "French",
    "lang_iso": "fr",
    "lang_local": "fr_FR",
    "lang_direction": "LTR",
    "indicatif": "33",
    "phone_length": 9,
    "monetary": "Euro",
    "iso_4217": "EUR"
  }
]
```
