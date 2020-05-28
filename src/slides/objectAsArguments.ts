import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
export const createModal = (title, body, onConfirm, onCancel) => {/**/};
//...
createModal(
  'Baby Shark',
  'doo doo doo doo doo doo doo doo',
  () => {},
  () => {}
);
\n\n\n\n\n\n\n
export const createModal = ({ title, body, onConfirm, onCancel }) => {/**/};
//...
createModal({
  title: 'Baby Shark',
  body: 'doo doo doo doo doo doo doo doo',
  onConfirm: () => {},
  onCancel: () => {},
});
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Ache o problema dessa função',
    fontSize: 'h2'
  },
  code,
  stepperProps: {
    defaultValue: [1, 8],
    values: [[17, 24]]
  }
}

export default slide;
