import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
class UnicornService {
  private BASE_URI = 'https://unicorn.com/api/';
  private PRIVATE_KEY = 'tinker-bell';
}`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Mantenha os dados configuráveis em níveis altos',
    fontSize: 'h2'
  },
  code,
  stepperProps: {
    defaultValue: [],
    values: [[2, 3]]
  }
}

export default slide;
