import style from './slider.module.css'
import { StyledSliderSection } from './styled'

export default function Slider ({ title, icon, children, height }) {
  return (
    <StyledSliderSection>
      <span className={style.label}>
        {icon && <img src={icon} alt={`icon of ${title}`} />}
        <h2>{title}</h2>
      </span>
      {children}
    </StyledSliderSection>
  )
}
