const characters: any = {
  'Magister Lor': {
    'name': 'Magister Lor',
    'description': 'Ostatni strażnik pradawnego sanktuarium, gdzie demony z dawnych dni spętano w kryształowym więzieniu',
    'traitsSections': [
      {
        'name': 'Mędrzec',
        'traits': [
          {
            'name': 'Przenikliwy',
            'value': 2,
          },
          {
            'name': 'Zamiary',
            'value': 1,
          },
          {
            'name': 'Uczony',
            'value': 1,
          },
          {
            'name': 'Sztuka',
            'value': 1,
          },
          {
            'name': 'Historia',
            'value': 1,
          },
          {
            'name': 'Okultyzm',
            'value': 1,
          },
          {
            'name': 'Demonologia',
            'value': 1,
          },
          {
            'name': 'Negocjacje',
            'value': 0,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Myśli',
            'value': 0,
          },
          {
            'name': 'Uczucia',
            'value': 0,
          },
        ],
        'traits_sgl_2': [],
      },
      {
        'name': 'Czarodziej',
        'traits': [
          {
            'name': 'Mistrz',
            'value': 2,
          },
          {
            'name': 'Rytuały',
            'value': 1,
          },
          {
            'name': 'Pogromca Demonów',
            'value': 0,
            'tags': []
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Atak',
            'value': 1,
          },
          {
            'name': 'Obrona',
            'value': 1,
          },
          {
            'name': 'Tworzenie',
            'value': 1,
          },
          {
            'name': 'Kontrola',
            'value': 1,
          },
          {
            'name': 'Wyczucie',
            'value': 1,
          },
        ],
        'traits_sgl_2': [
          {
            'name': 'Ogień',
            'value': 1,
          },
          {
            'name': 'Burza',
            'value': 1,
          },
          {
            'name': 'Esencja',
            'value': 0,
          },
          {
            'name': 'Odepchnij',
            'value': 1,
          },
          {
            'name': 'Przyciągnij',
            'value': 1,
          },
          {
            'name': 'Rytuały',
            'value': 1,
          },
        ],
      },
      {
        'name': 'Weteran',
        'traits': [
          {
            'name': 'Wysportowany',
            'value': 1,
          },
          {
            'name': 'Twardziel',
            'value': 1,
          },
          {
            'name': 'Przywódca',
            'value': 1,
          },
          {
            'name': 'Strateg',
            'value': 1,
          },
          {
            'name': 'Pilot',
            'value': 1,
          },
          {
            'name': 'Tropiciel',
            'value': 1,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Łowca Demonów',
            'value': 0,
          },
          {
            'name': 'Łowca Potworów',
            'value': 0,
          },
        ],
        'traits_sgl_2': [],
      },
      {
        'name': 'Wojownik',
        'traits': [
          {
            'name': 'Mistrz',
            'value': 2,
          },
          {
            'name': 'Bezlitosny',
            'value': 0,
          },
          {
            'name': 'Pogromca Demonów',
            'value': 0,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Ostrza',
            'value': 2,
          },
          {
            'name': 'Sztuki Walki',
            'value': 1,
          },
        ],
        'traits_sgl_2': [
          {
            'name': 'Atak',
            'value': 1,
          },
          {
            'name': 'Obrona',
            'value': 2,
          },
          {
            'name': 'Manewry',
            'value': 1,
          },
        ],
      },
    ],
    'keys': [
      {
        'name': 'Klucz Równowagi',
        'description': 'Jesteś strażnikiem Równowagi. Co ma być, niech się stanie. Nie ma znaczenia co w związku z tym czujemy. Użyj tego klucza, gdy przedkładasz Równowagę nad wszystko inne.',
        'buyoff': 'Postąp wiedziony strachem, gniewem, współczuciem lub miłością.'
      },
      {
        'name': 'Klucz Obowiązku',
        'description': 'Musisz spętać wszystkie demony, które uciekły ze swego więzienia. Użyj tego klucza, gdy działasz, aby dopełnić swój obowiązek.',
        'buyoff': 'Pozwól demonowi być wolnym.'
      },
      {
        'name': 'Klucz Mentora',
        'description': 'Jesteś mentorem Kaia w dziedzinie Sztuk Magicznych. Użyj tego klucza, gdy przypominasz uczniowi o jego treningu, dzielisz się z nim pradawną wiedzą lub ganisz go za jego wady lub porażki.',
        'buyoff': 'Pozwól odejść swojemu uczniowi.'
      },
    ],
    'secrets': [
      {
        'name': 'Sekret Strelai',
        'description': 'Znasz sekretne rytuały przyzywania, kontroli oraz pętania demonów, lecz nigdy wcześniej ich nie używałeś. W twych dłoniach, gwiezdna stal żarzy się magiczną mocą i jest w stanie przeciąć absolutnie wszystko.',
      },
      {
        'name': 'Sekret Mistrza i Ucznia',
        'description': 'Gdy ty i twój uczeń działacie razem, wspierając wzajemnie swe zamiary, każdy z was dodaje 1 kość to swoich rzutów.',
      },
    ],
    'states': [
      {
        'name': 'Chory*',
        'checked': 1
      },
      {
        'name': 'Ranny',
        'checked': 0
      },
      {
        'name': 'Wyssany',
        'checked': 0
      },
      {
        'name': 'Unieszkodliwiony',
        'checked': 0
      },
      {
        'name': 'Martwy (Przypuszczalnie)',
        'checked': 0
      },
      {
        'name': 'Zirytowany',
        'checked': 0
      },
      {
        'name': 'Omamiony',
        'checked': 0
      },
      {
        'name': 'Przytłoczony',
        'checked': 0
      },
    ],
    'statesInfo': '*Magister Lor cierpi na pewną dolegliwość i rozpoczyna ze stanem Chory.',
    'equipment': 'Szaty Strelai - Miecz z Gwiezdnej Stali - Biblioteka pełna okultystycznych ksiąg, artefaktów i komponentów używanych w rytuałach.',
    'poll': 4,
  },
  'Kai Tuvari': {
    'name': 'Kai Tuvari',
    'description': 'Młodzieniec, którego krew przenika Esencja gwiazd. Od najmłodszych lat uczeń Magistra Lora',
    'traitsSections': [
      {
        'name': 'Dostrojony',
        'traits': [
          {
            'name': 'Czujny',
            'value': 1,
          },
          {
            'name': 'Silna wola',
            'value': 2,
          },
          {
            'name': 'Uczony',
            'value': 1,
          },
          {
            'name': 'Sztuka',
            'value': 1,
          },
          {
            'name': 'Historia',
            'value': 1,
          },
          {
            'name': 'Demonologia',
            'value': 1,
          },
          {
            'name': 'Magiczny Wzrok',
            'value': 0,
          },
          {
            'name': 'Podróż przez Sen',
            'value': 0,
          },
        ],
        'traits_sgl_1': [],
        'traits_sgl_2': []
      },
      {
        'name': 'Czarodziej',
        'traits': [
          {
            'name': 'Rytuały',
            'value': 1,
          },
          {
            'name': 'Pogromca Demonów',
            'value': 0,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Atak',
            'value': 0,
          },
          {
            'name': 'Obrona',
            'value': 1,
          },
          {
            'name': 'Tworzenie',
            'value': 1,
          },
          {
            'name': 'Kontrola',
            'value': 0,
          },
        ],
        'traits_sgl_2': [
          {
            'name': 'Ogień',
            'value': 1,
          },
          {
            'name': 'Burza',
            'value': 0,
          },
          {
            'name': 'Światło',
            'value': 1,
          },
          {
            'name': 'Mrok',
            'value': 0,
          },
          {
            'name': 'Odepchnij',
            'value': 1,
          },
          {
            'name': 'Przyciągnij',
            'value': 1,
          },
          {
            'name': 'Roztrzaskaj',
            'value': 0,
          },
        ]
      },
      {
        'name': 'Adept',
        'traits': [
          {
            'name': 'Wysportowany',
            'value': 2,
          },
          {
            'name': 'Akrobata',
            'value': 1,
          },
          {
            'name': 'Twardziel',
            'value': 0,
          },
          {
            'name': 'Skryty',
            'value': 1,
          },
          {
            'name': 'Medycyna',
            'value': 1,
          },
          {
            'name': 'Leczenie',
            'value': 1,
          },
          {
            'name': 'Uzdrowiciel',
            'value': 0,
          },
          {
            'name': 'Heroiczny',
            'value': 0,
          },
        ],
        'traits_sgl_1': [],
        'traits_sgl_2': []
      },
      {
        'name': 'Wojownik',
        'traits': [
          {
            'name': 'Ocena sytuacji',
            'value': 0,
          },
          {
            'name': 'Pogromca Demonów',
            'value': 0,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Ostrze',
            'value': 1,
          },
          {
            'name': 'Sztuki walki',
            'value': 1,
          },
        ],
        'traits_sgl_2': [
          {
            'name': 'Atak',
            'value': 1,
          },
          {
            'name': 'Obrona',
            'value': 1,
          },
          {
            'name': 'Manewry',
            'value': 1,
          },
        ]
      },
    ],
    'keys': [
      {
        'name': 'Klucz Bliźniąt',
        'description': 'Kel jest twoim bratem bliźniakiem. Użyj tego klucza, gdy przedkładasz bezpieczeństwo twego brata nad wszystko inne.',
        'buyoff': 'Pozwól by Kel cierpiał.'
      },
      {
        'name': 'Klucz Obowiązku',
        'description': 'Musisz spętać wszystkie demony, które uciekły ze swego więzienia. Użyj tego klucza, gdy działasz, aby dopełnić swój obowiązek.',
        'buyoff': 'Pozwól demonowi być wolnym.'
      },
      {
        'name': 'Klucz Ucznia',
        'description': 'Jesteś uczniem Magistra Lora w dziedzinie Sztuk Magicznych. Użyj tego klucza, gdy przedkładasz rozkazy lub wartości twego mistrza ponad wszystko inne.',
        'buyoff': 'Sam zostań Magistrem lub odejdź ze służby u swego mistrza.'
      },
    ],
    'secrets': [
      {
        'name': 'Sekret Światła',
        'description': 'Twe wnętrze zamieszkuje światłość, podobna do blasku świetlistej gwiazdy. Każda kreatura mroku, która cię dotknie, zaznaje straszliwego cierpienia. Skupiona siła twojej woli jest w stanie je odpędzić (używając cechy Dostrojony).',
      },
      {
        'name': 'Sekret Esencjokrwistości',
        'description': 'Raz na odświeżenie możesz przerzucić wszystkie swoje kości, na których wypadła porażka.',
      },
    ],
    'states': [
      {
        'name': '*Chory',
        'checked': 0
      },
      {
        'name': 'Ranny',
        'checked': 0
      },
      {
        'name': 'Wyssany',
        'checked': 0
      },
      {
        'name': 'Unieszkodliwiony',
        'checked': 0
      },
      {
        'name': 'Martwy (Rzekomo)',
        'checked': 0
      },
      {
        'name': 'Zirytowany',
        'checked': 0
      },
      {
        'name': 'Omamiony',
        'checked': 0
      },
      {
        'name': 'Przytłoczony',
        'checked': 0
      },
    ],
    'statesInfo': '',
    'equipment': 'Szaty Strelai - Miecz z gwiezdnej stali - Sakwy przy pasie zawierające remedium na dolegliwość Magistra oraz inne medykamenty.',
    'poll': 6,
  },
  'Kel Tuvari': {
    'name': 'Kel Tuvari',
    'description': 'Młodzieniec naznaczony mrokiem, związany sekretna przysięgą z demonicą Setarrą',
    'traitsSections': [
      {
        'name': 'Ryzykant',
        'traits': [
          {
            'name': 'Wysportowany',
            'value': 2,
          },
          {
            'name': 'Lekkomyślny',
            'value': 2,
          },
          {
            'name': 'Pilot',
            'value': 1,
          },
          {
            'name': 'Akrobacje Powietrzne',
            'value': 1,
          },
          {
            'name': 'Walka Powietrzna',
            'value': 0,
          },
          {
            'name': 'Uniki',
            'value': 0,
          },
          {
            'name': 'Inspirujący',
            'value': 0,
          },
        ],
        'traits_sgl_1': [],
        'traits_sgl_2': []
      },
      {
        'name': 'Dostrojony',
        'traits': [
          {
            'name': 'Magiczny Wzrok',
            'value': 2,
          },
          {
            'name': 'Podróż przez Sen',
            'value': 1,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Odczynienie',
            'value': 2,
          },
          {
            'name': 'Atak',
            'value': 0,
          },
          {
            'name': 'Obrona',
            'value': 0,
          },
          {
            'name': 'Kontrola',
            'value': 0,
          },
        ],
        'traits_sgl_2': [
          {
            'name': 'Próżnia',
            'value': 1,
          },
          {
            'name': 'Sztuki magiczne',
            'value': 1,
          },
          {
            'name': 'Esencja',
            'value': 0,
          },
          {
            'name': 'Demoniczna Moc',
            'value': 0,
          },
        ]
      },
      {
        'name': 'Doświadczony',
        'traits': [
          {
            'name': 'Podróżnik',
            'value': 2,
          },
          {
            'name': 'Półświatek',
            'value': 1,
          },
          {
            'name': 'Piraci',
            'value': 1,
          },
          {
            'name': 'Rewolucjoniści',
            'value': 1,
          },
          {
            'name': 'Wykształcony',
            'value': 1,
          },
          {
            'name': 'Oklutyzm',
            'value': 0,
          },
          {
            'name': 'Demonologia',
            'value': 0,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Kultury',
            'value': 1,
          },
          {
            'name': 'Języki',
            'value': 1,
          },
        ],
        'traits_sgl_2': []
      },
      {
        'name': 'Ocalały',
        'traits': [
          {
            'name': 'Zaprawiony w Walce',
            'value': 1,
          },
          {
            'name': 'Skryty',
            'value': 1,
          },
          {
            'name': 'Nieustraszony',
            'value': 1,
          },
          {
            'name': 'Czarny Koń',
            'value': 1,
          },
          {
            'name': 'Twardziel',
            'value': 1,
          },
          {
            'name': 'Szabrownik',
            'value': 1,
          },
          {
            'name': 'Brutal',
            'value': 0,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Ostrze',
            'value': 0,
          },
          {
            'name': 'Pięści',
            'value': 0,
          },
        ],
        'traits_sgl_2': [
        ]
      },
    ],
    'keys': [
      {
        'name': 'Klucz Bliźniąt',
        'description': 'Kai jest twoim bratem bliźniakiem. Użyj tego klucza, gdy przedkładasz bezpieczeństwo twego brata nad wszystko inne.',
        'buyoff': 'Pozwól by Kai cierpiał.'
      },
      {
        'name': 'Klucz Demonicznej Przysięgi',
        'description': 'Poprzysiągłeś pomóc Setarrze w wyzwoleniu jej oraz jej braci z kryształowego więzienia. Użyj tego klucza, gdy wspierasz Setarrę w jej misji.',
        'buyoff': 'Złam przysięgę i w konsekwencji zaznaj męczarni.'
      },
      {
        'name': 'Klucz Wyrzutka',
        'description': 'Pozbawiony mentora, dorastałeś pośród innych wyrzutków polegając tylko na sobie. Użyj tego klucza, gdy twoja zachowawcza i podejrzliwa natura sprowadza na ciebie kłopoty.',
        'buyoff': 'Okaż wierność mistrzowi, ukochanej osobie lub organizacji.'
      },
    ],
    'secrets': [
      {
        'name': 'Sekret Próżni',
        'description': 'W twym wnętrzu kryje się mrok, podobny do próżni znajdującej się ponoć po drugiej stronie nieba. Możesz negować energię magiczną i Sztuki Magiczne (używając cechy Dostrojony). Możesz też stać się łącznikiem i przewodnikiem dla pożerającej wszystko próżni.',
      },
      {
        'name': 'Sekret Próżniokrwistości',
        'description': 'Raz na odświeżenie, zmuś inną, widzianą przez ciebie postać, aby przerzuciła wszystkie swoje kości, na których wypadł sukces.',
      },
    ],
    'states': [
      {
        'name': 'Chory',
        'checked': 0
      },
      {
        'name': 'Ranny',
        'checked': 0
      },
      {
        'name': 'Wyssany',
        'checked': 0
      },
      {
        'name': 'Unieszkodliwiony',
        'checked': 0
      },
      {
        'name': 'Martwy (Rzekomo)',
        'checked': 0
      },
      {
        'name': 'Zirytowany',
        'checked': 0
      },
      {
        'name': 'Omamiony',
        'checked': 0
      },
      {
        'name': 'Przytłoczony',
        'checked': 0
      },
    ],
    'statesInfo': '',
    'equipment': 'Strój podróżny - Peleryna do szybowania - Maska tlenowa - Sztylet - Mały statek powietrzny.',
    'poll': 6,
  },
  'Setarra': {
    'name': 'Setarra',
    'description': 'Pradawna demonica, która zerwawszy kajdany, kroczy ścieżką zemsty oraz wyzwolenia',
    'traitsSections': [
      {
        'name': 'Przebiegła',
        'traits': [
          {
            'name': 'Oszustwo',
            'value': 2,
          },
          {
            'name': 'Manipulacja',
            'value': 2,
          },
          {
            'name': 'Uczona',
            'value': 2,
          },
          {
            'name': 'Historia',
            'value': 2,
          },
          {
            'name': 'Okultyzm',
            'value': 1,
          },
          {
            'name': 'Arkana Magii',
            'value': 1,
          },
          {
            'name': 'Zapomniane Tajemnice',
            'value': 1,
          },
          {
            'name': 'Podstęp',
            'value': 1,
          },
          {
            'name': 'Ludzka Postać',
            'value': 0,
          },
        ],
        'traits_sgl_1': [],
        'traits_sgl_2': []
      },
      {
        'name': 'Przerażająca',
        'traits': [
          {
            'name': 'Demoniczne Spojrzenie',
            'value': 1,
          },
          {
            'name': 'Zastraszenie',
            'value': 2,
          },
          {
            'name': 'Upiorna',
            'value': 0,
          },
          {
            'name': 'Silna Wola',
            'value': 2,
          },
          {
            'name': 'Niewzruszona',
            'value': 0,
          },
          {
            'name': 'Hipnotyzująca',
            'value': 0,
          },
        ],
        'traits_sgl_1': [
        ],
        'traits_sgl_2': [
        ]
      },
      {
        'name': 'Sztuki Magiczne',
        'traits': [
          {
            'name': 'Moc',
            'value': 2,
          },
          {
            'name': 'Wyssanie',
            'value': 1,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Przyzwanie',
            'value': 1,
          },
          {
            'name': 'Kontrola',
            'value': 1,
          },
        ],
        'traits_sgl_2': [
          {
            'name': 'Woda',
            'value': 2,
          },
          {
            'name': 'Burza',
            'value': 2,
          },
          {
            'name': 'Chmury',
            'value': 2,
          },
          {
            'name': 'Lewiatany',
            'value': 1,
          },
          {
            'name': 'Esencja',
            'value': 0,
          },
        ]
      },
      {
        'name': 'Potworna',
        'traits': [
          {
            'name': 'Demoniczna',
            'value': 2,
          },
          {
            'name': 'Silna',
            'value': 1,
          },
          {
            'name': 'Szybka',
            'value': 1,
          },
        ],
        'traits_sgl_1': [
          {
            'name': 'Potężne Szpony',
            'value': 1,
          },
          {
            'name': 'Miażdżący Chwyt',
            'value': 1,
          },
        ],
        'traits_sgl_2': [
          {
            'name': 'Pogromczyni Czarodziejów',
            'value': 1,
          },
          {
            'name': 'Pogromczyni Demonów',
            'value': 0,
          },
        ]
      },
    ],
    'keys': [
      {
        'name': 'Klucz Zemsty',
        'description': 'Sprowadzisz cierpienie na tych, którzy spętali ciebie i twych braci w kryształowym więzieniu. Użyj tego klucza, gdy wywierasz swą zemstę na tych, którzy na to zasłużyli.',
        'buyoff': 'Wybacz im.'
      },
      {
        'name': 'Klucz Wyzwolicielki',
        'description': 'Uwolnisz każdego spętanego demona, którego napotkasz. Użyj tego klucza, gdy próbujesz to zrobić.',
        'buyoff': 'Porzuć demona w niewoli.'
      },
      {
        'name': 'Klucz Niewolnicy',
        'description': 'Jesteś demonem, zaprzysiężonym przez magię do posłuszeństwa, gdy znajdziesz się pod jej wpływem. Użyj tego klucza, gdy podporządkowujesz się czarodziejowi i jego magicznym rozkazom.',
        'buyoff': 'Sprzeciw się woli czarodzieja.'
      },
    ],
    'secrets': [
      {
        'name': 'Sekret Morskiego Demona',
        'description': 'Jesteś nieśmiertelna. Nie można cię zabić lub zniszczyć, lecz magia i gwiezdna stal są w stanie cię zranić. Można cię spętać rytualną magią oraz kontrolować rozkazami czarodzieja. Stworzono cię w pradawnym oceanie i znasz pieśń przyzywającą Lewiatany - potężne demony z Głębin.',
      },
      {
        'name': 'Sekret Wyssania Esencji',
        'description': 'Raz na odświeżenie możesz wyssać esencję życiową z maksymalnie czwórki ludzi, których widzisz. Ci mogą próbować się bronić lub unikać twojej mocy, o ile są w stanie. Jeśli przełamiesz ich opór, każdemu z nich kradniesz jedną kość z puli (mogą przekroczyć twoje maksimum). Jeśli nie mają żadnych kości, stają się Wyssani.',
      },
    ],
    'states': [
      {
        'name': 'Ranna',
        'checked': 0
      },
      {
        'name': 'Wyssana',
        'checked': 0
      },
      {
        'name': 'Odpędzona',
        'checked': 0
      },
      {
        'name': 'Osłabiona',
        'checked': 0
      },
      {
        'name': 'Spętana',
        'checked': 0
      },
      {
        'name': 'Wściekła',
        'checked': 0
      },
      {
        'name': 'Omamiona',
        'checked': 0
      },
      {
        'name': 'Zdominowana',
        'checked': 0
      },
    ],
    'statesInfo': '',
    'equipment': 'Wielkie, czarne rekinie oczy - Potężne szpony i zęby - Czarne, mokre łuski - Szkaradne piękno.',
    'poll': 8,
  },
  'empty': {
    'name': '',
    'description': '',
    'traitsSections': [
    ],
    'keys': [
    ],
    'secrets': [
    ],
    'states': [
    ],
    'statesInfo': '',
    'equipment': '',
    'poll': 4,
  },
}
