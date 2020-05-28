import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
const itIsOfAge = (age: number): Boolean => (age > 18 ? true : false);

const itIsOfAge = (age: number): Boolean => age > 18;
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Não seja redundante',
    fontSize: 'h2'
  },
  code,
  stepperProps: {
    defaultValue: [],
    values: [[1, 1], [3, 3]]
  }
}

export default slide;
