/* eslint-disable no-useless-escape */

import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
  //...
}
\n\n\n\n\n\n\n\n\n\n\n
const passwordIsValid = (password: number): Boolean => {
  // Minimum eight characters
  // At least one uppercase letter
  // One lowercase letter
  // One number
  // One special character
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return validPassword.test(password);
};
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Escreva seus regex em uma constante',
    fontSize: 'h2'
  },
  code,
  stepperProps: {
    defaultValue: [1, 3],
    values: [[16, 24]]
  }
}

export default slide;
