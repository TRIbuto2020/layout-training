import { createGlobalStyle } from 'styled-components'

export const colors = {
  blue1: '#7ED7C1',
  blue2: "#8DDFCB",
  red: "#FF8080",
  beige: '#F5FFC9',
  purple: '#D9ACF5',
  pink: '#ff8dc7',
  deep: '#694E4E',
  green: '#b6e2a1'
}

export const textShadows = `
text-shadow:
0px 1px 0px ${colors.blue1},
1px 0px 0px ${colors.blue2},
1px 2px 1px ${colors.blue1},
2px 1px 1px ${colors.blue2},
2px 3px 2px ${colors.blue1},
3px 2px 2px ${colors.blue2},
3px 4px 2px ${colors.blue1},
4px 3px 3px ${colors.blue2},
4px 5px 3px ${colors.blue1},
5px 4px 2px ${colors.blue2},
5px 6px 2px ${colors.blue1},
6px 5px 2px ${colors.blue2},
6px 7px 1px ${colors.blue1},
7px 6px 1px ${colors.blue2},
7px 8px 0px ${colors.blue1},
8px 7px 0px ${colors.blue2};
`

export const blockShadows = `
box-shadow:
0px 1px 0px ${colors.blue1},
1px 0px 0px ${colors.blue2},
1px 2px 1px ${colors.blue1},
2px 1px 1px ${colors.blue2},
2px 3px 2px ${colors.blue1},
3px 2px 2px ${colors.blue2},
3px 4px 2px ${colors.blue1},
4px 3px 3px ${colors.blue2},
4px 5px 3px ${colors.blue1},
5px 4px 2px ${colors.blue2},
5px 6px 2px ${colors.blue1},
6px 5px 2px ${colors.blue2},
6px 7px 1px ${colors.blue1},
7px 6px 1px ${colors.blue2},
7px 8px 0px ${colors.blue1},
8px 7px 0px ${colors.blue2};
`

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    text-decoration: none;
  }

  html{
    overflow-x: hidden;
    width: 100vw;

    body{
    overflow-x: hidden;

      height: 100%
    }
  }
  
`