import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
const splitLocale = navigator.language.split('-')
const language = splitLocale[0]
const country = splitLocale[1]

const [language, country] = navigator.language.split('-')

const myArray = [1, 2]
const [a, d, c = 3] = myArray
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Array destructuring',
    fontSize: 'h2'
  },
  code,
  stepperProps: {
    defaultValue: [1, 3],
    values: [[5, 5], [7, 8]]
  }
}

export default slide;
