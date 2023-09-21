const characters: any = {
  'Magister Lor': {
    'description': 'Ostatni strażnik pradawnego sanktuarium, gdzie demony z dawnych dni spętano w kryształowym więzieniu.',
    'traitsSections': [
      {
        'name': 'Mędrzec',
        'traits': [
          {
            'name': 'Przenikliwy',
            'value': 2,
            'tags': [
              {
                'name': 'Myśli',
                'value': 0,
              },
              {
                'name': 'Uczucia',
                'value': 0,
              },
            ]
          },
          {
            'name': 'Zamiary',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Uczony',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Sztuka',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Historia',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Okultyzm',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Demonologia',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Negocjacje',
            'value': 0,
            'tags': []
          },
        ]
      },
      {
        'name': 'Czarodziej',
        'traits': [
          {
            'name': 'Mistrz',
            'value': 2,
            'tags': [
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
            ]
          },
          {
            'name': 'Pogromca Demonów',
            'value': 0,
            'tags': []
          },
        ],
      },
      {
        'name': 'Weteran',
        'traits': [
          {
            'name': 'Wysportowany',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Twardziel',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Przywódca',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Strateg',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Pilot',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Tropiciel',
            'value': 1,
            'tags': [
              {
                'name': 'Łowca Demonów',
                'value': 0,
              },
              {
                'name': 'Łowca Potworów',
                'value': 0,
              },
            ],
          },
        ]
      },
      {
        'name': 'Wojownik',
        'traits': [
          {
            'name': 'Mistrz',
            'value': 2,
            'tags': [
              {
                'name': 'Ostrza',
                'value': 2,
              },
              {
                'name': 'Sztuki Walki',
                'value': 1,
              },
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
          {
            'name': 'Bezlitosny',
            'value': 0,
            'tags': [],
          },
          {
            'name': 'Pogromca Demonów',
            'value': 0,
            'tags': [],
          },
        ]
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
    'equipment': 'Szaty Strelai - Miecz z Gwiezdnej Stali - Biblioteka pełna okultystycznych ksiąg, artefaktów i komponentów używanych w rytuałach.'
  },
  'Kai Tuvari': {
    'description': 'Młodzieniec, którego krew przenika Esencja gwiazd. Od najmłodszych lat uczeń Magistra Lora.',
    'traitsSections': [
      {
        'name': 'Mędrzec',
        'traits': [
          {
            'name': 'Przenikliwy',
            'value': 2,
            'tags': [
              {
                'name': 'Myśli',
                'value': 0,
              },
              {
                'name': 'Uczucia',
                'value': 0,
              },
            ]
          },
          {
            'name': 'Zamiary',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Uczony',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Sztuka',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Historia',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Okultyzm',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Demonologia',
            'value': 1,
            'tags': []
          },
          {
            'name': 'Negocjacje',
            'value': 0,
            'tags': []
          },
        ]
      },
      {
        'name': 'Czarodziej',
        'traits': [
          {
            'name': 'Mistrz',
            'value': 2,
            'tags': [
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
            ]
          },
          {
            'name': 'Pogromca Demonów',
            'value': 0,
            'tags': []
          },
        ],
      },
      {
        'name': 'Weteran',
        'traits': [
          {
            'name': 'Wysportowany',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Twardziel',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Przywódca',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Strateg',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Pilot',
            'value': 1,
            'tags': [],
          },
          {
            'name': 'Tropiciel',
            'value': 1,
            'tags': [
              {
                'name': 'Łowca Demonów',
                'value': 0,
              },
              {
                'name': 'Łowca Potworów',
                'value': 0,
              },
            ],
          },
        ]
      },
      {
        'name': 'Wojownik',
        'traits': [
          {
            'name': 'Mistrz',
            'value': 2,
            'tags': [
              {
                'name': 'Ostrza',
                'value': 2,
              },
              {
                'name': 'Sztuki Walki',
                'value': 1,
              },
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
          {
            'name': 'Bezlitosny',
            'value': 0,
            'tags': [],
          },
          {
            'name': 'Pogromca Demonów',
            'value': 0,
            'tags': [],
          },
        ]
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
    'equipment': 'Szaty Strelai - Miecz z Gwiezdnej Stali - Biblioteka pełna okultystycznych ksiąg, artefaktów i komponentów używanych w rytuałach.'
  }
}
