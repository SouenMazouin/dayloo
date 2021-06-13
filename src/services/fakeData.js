export const fakeData = [
  {
    id: '2021-05-14_mathematic_loi_gravitation',
    idTitle: 'loi_gravitation',
    idCategory: 'mathematic',
    datePublication: 1620983907000,
    theme: 'Formules',
    title: 'Loi de la gravitation',
    subtitle: '<i>Newton 1686 </>',
    highlight: {
      type: 'formula',
      content: '<m>c^2=a^2+b^2-2\\cdot a \\cdot b \\cdot \\cos (\\gamma)</m>',
    },
    source: 'https://fr.wikipedia.org/wiki/Niue',

    blocks: [
      {
        type: 'table',
        content: [
          {
            highlight: {
              type: 'formula',
              content: '\\vec{\\nabla } \\cdot \\vec {E} = \\frac {\\rho }{\\varepsilon _{0}}',
            },
            text: '<b>Force</> qu"exerce le corp a sur b',
            example: '',
          },
          {
            highlight: {
              type: 'formula',
              content: 'G',
            },
            text:
              'constante gravitationnelle qui vaut <m>6.67408 \\times 10^{-11} N cdot m^2 cdot kg^{-2}</m>',
            example: 'La terre sur la lune',
          },
          {
            highlight: {
              type: 'formula',
              content: 'F\\(X\\)',
            },
            text: 'ckdodks blalbla',
            example:
              'F designe (<m>(P(E) = {n \\choose k} p^k\\)</m>) et blabla designe <m>6.67408 \\times 10^{-11}</m> ',
          },
        ],
      },
    ],
  },
  {
    id: '2019-06-01_geographie_niue',
    idTitle: 'niue',
    idCategory: 'geographie',
    datePublication: 1559340000000,

    theme: 'Océanie',
    title: 'Niue',
    subtitle: 'Îles tropicales',
    highlight: {
      type: 'image',
      content:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Niue_on_the_globe_%28Polynesia_centered%29.svg/800px-Niue_on_the_globe_%28Polynesia_centered%29.svg.png',
    },
    source: 'https://fr.wikipedia.org/wiki/Niue',

    blocks: [
      {
        type: 'paragraphes',
        content: [
          {
            text: 'Une île aux couleurs incroyables',
            example: 'Un peu comme Tahiti',
          },
          {
            text: 'Colonisée en 1789 par les anglais',
            example: "Alors dirigés par la Reine d'Angleterre",
          },
        ],
      },
      {
        type: 'table',
        content: [
          {
            highlight: {
              type: 'icon',
              content: 'map',
            },
            text: '342 000 km²',
            example: 'Superficie',
          },
        ],
      },
    ],
  },
];
