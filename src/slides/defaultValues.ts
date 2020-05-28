/* eslint-disable no-template-curly-in-string */
import { CodeSlide } from '../utils/renderCodeSlide';

const classAndAdditionalClasses = '`icon-hover ${additionalClasses}`';
const classAndClassName = '`icon-hover ${className}`';

const code = `
const Icon = ({ className }) => {
  const additionalClasses = className || 'icon-large'
  return <i className={${classAndAdditionalClasses}} />
};

const Icon = ({ className = 'icon-large' }) => (
  <i className={${classAndClassName}} />
);

const Icon = ({ className }) => (
  <i className={${classAndClassName}} />
);

Icon.defaultProps = {
  className: 'icon-large',
};

class Icon extends React.Component {
  static defaultProps = {
    className: 'icon-large',
  }

  //...

  render() {
    return <i className={'icon-hover ' + this.props.className} />
  }
}
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Defina valores padrões',
    fontSize: 'h2'
  },
  code,
  stepperProps: {
    defaultValue: [1, 4],
    values: [[6, 8], [10, 16], [18, 28]]
  }
}

export default slide;
