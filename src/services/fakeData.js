export const fakeData = [
  {
    id: '2021-05-14_mathematic_loi_gravitation',
    idTitle: 'loi_gravitation',
    idCategory: 'mathematic',
    datePublication: 1620983907000,
    theme: 'Formules',
    title: 'Loi de la gravitation',
    subtitle:
      '<b>Newton 1686 </><m>f(X)</m><t> Lorem</><i> Ipsum </><u>Dolor</><m>\\vec{\\nabla } \\cdot \\vec {E} = \\frac {\\rho }{\\varepsilon _{0}}</m><i>amet</><t>foo </><b>bar </><u>baz</>',
    highlight: {
      type: 'formula',
      content: 'c^2=a^2+b^2-2\\cdot a \\cdot b \\cdot \\cos \\(\\gamma\\)',
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
];
