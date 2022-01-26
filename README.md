<h1 align="center">Welcome to movieselector 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-15.7.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-7.6.2-blue.svg" />
</p>

> I faget APP2000 ved USN har vi lagd applikasjonen Movie Selector. Tinder for film, hvor dere felles kan endelig bli enig om den perfekte filmen for kvelden!

### 🏠 [Homepage](https://salty-stream-58366.herokuapp.com/)

## Prerequisites

- node 15.7.0
- npm 7.6.2

## Install 

```sh
I terminalen
1. 'cd ./' til root mappen 
2. 'npm install' 
3. 'cd client'
4. 'npm install'
5. 'cd ..'
6. I config mappen, opprett filen dev.js og legg inn relevant nøkler
```

## Usage

```sh
npm run dev
```


## FilStructure

```bash
Root prosjekt mappe
├── Client                 # Frontend, React delen
   ├── public              # Root html, statisk filer(bilder, css) 
   ├── src❤️               # Her ligger meste av vår kode
       ├                   # Actions, Reducers er Redux konsepter  ### [Redux](https://redux.js.org/)
       ├─actions           # Actions kan sees på som events som beskriver noe  
       ├                   # som vil skje i applikasjonen
       ├─reducers          # Håntering av state og actions. Kan sees på som en event lytter
       ├                   # som håntere dataen basert på handlingen
       ├─components        # Components inneholder klasse og funksjones komponenter
          ├─App.js         # App.js kan vi se på som inngansporten til de andre kompontene i components
          ├─.   
          ├─.. 
       ├─index.css         # 
       ├─index.js          # "Import, export portal", kommunikasjonen med public/index.html
       ├─setupProxy.js     # TODO forklar denne Håkon
       
   ├── .gitignore          #  
   ├── package-lock.json   #
   ├── package.json        #
   └── README.md           #
   
├── Config❤️               # Verdifiserings url'er og nøkler for utvikling og heroku
├── Middlewares❤️          # Operasjoner som skjer på tidspunktet mellom spørring og henting. 
├── Models ❤️              # Modeler for databasen, strukturert med Mongoose
├── Public                
├── Routes❤️               # Ruting ved authenfisering via Passport
├── Services❤️             # Konfigurering av Passport mot google autenfisering    
├
├── .gitignore             # Filer som ikke skal lastet opp til GitHub, pga plass eller nøkler
├── package-lock.json      # Låste moduler, så applikasjon skal kjøre likes mulig på tvers av datamaskiner
├── package.json           # Generell tredjeparts avhengiheter, kommandoen 'npm install' sjekker 
├                          # her for hva som skal installeres.                          
└── README.md              # Denne filen her
```


## Author

👤 **Benjamin**
* Github: [@benjaminnese](https://github.com/benjaminnese)
 
👤 **Johannes**
* Github: [@6pBit ](https://github.com/6pBit)
 
* 👤 **Håkon**
* Github: [@hakon98](https://github.com/hakon98)
 
👤 **Mathias**
* Github: [@Wavierbear](https://github.com/Wavierbear)
***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
