import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
const buttonDisabled = true;
if (!buttonDisabled) {
  //...
}
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Não negue uma negação',
    fontSize: 'h2'
  },
  code,
  stepperProps: {
    defaultValue: [],
    values: []
  }
}

export default slide;
