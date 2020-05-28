import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
const Component = (props) => {
  const others = { ...props };
  delete others.className;

  return (
    <div className={props.className}>
      <OtherComponent {...others} />
    </div>
  );
};

const Component = ({ className, ...others }) => (
  <div className={className}>
    <OtherComponent {...others} />
  </div>
);


<Component a="1" {...props} />

<Component {...props} a={1} />
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'REST/Spread',
    fontSize: 'h2'
  },
  code,
  stepperProps: {
    defaultValue: [1, 10],
    values: [[12, 16], [19, 19], [21, 21]]
  }
}

export default slide;
