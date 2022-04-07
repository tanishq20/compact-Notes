import './ColorPallete.css'

export const ColorPallete = ({ passColor }) => {
  const colors = ['#FAFFAF', '#95D1CC', '#5584AC', '#22577E', '#F24A72']
  return (
    <div className='d-flex flex-wrap align-items-center justify-content-center position-absolute rounded-5 color-pallete-container'>
      {colors.map((color) => {
        return (
          <div
            key={color}
            className='color-showcase'
            style={{ backgroundColor: `${color}` }}
            onClick={() => passColor(color)}
          ></div>
        )
      })}
    </div>
  )
}
