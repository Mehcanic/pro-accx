import Button from "../../reusableComponents/Button/Button"

const Hero = () => {

  const handleClick = () => {
    console.log('clicked')
  }
  
  return (
    <>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title"></h1>
          <p className="hero__description">Hero Description</p>
        </div>
        <Button onClick={handleClick} variant='primary'>Learn More</Button>
      </div>
    </>
  )
}

export default Hero