import React from 'react'
import { Deck } from 'spectacle'
import slides from './slides/Slides'
import theme from './theme'
import { renderCodeSlide, CodeSlide } from './utils/renderCodeSlide'
import { renderImageSlide, ImageSlide } from './utils/renderImageSlide'
import { renderCommonSlide } from './utils/renderCommonSlide'

const App: React.FC = () => (
  <Deck transitionEffect="slide" theme={theme}>
    {
      slides.map((slide: JSX.Element | CodeSlide | ImageSlide) => {
        const isCodeType = slide.type === 'code'
        if (isCodeType) {
          return renderCodeSlide(slide as CodeSlide)
        }

        const isImageType = slide.type === 'image'
        if (isImageType) {
          return renderImageSlide(slide as ImageSlide)
        }

        return renderCommonSlide(slide as JSX.Element)
      })
    }
  </Deck>
);

export default App;
