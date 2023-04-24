import Button from "../../reusableComponents/Button/Button"

import backgroundImage from '../../assets/-min.jpg'

const Hero = () => {

  const handleClick = () => {
    console.log('clicked')
  }
  
  return (
    <div className="relative text-secondary">
      <div className="hero bg-no-repeat bg-center bg-cover h-screen" style={{ backgroundImage: `url(${backgroundImage})`, height: `calc(100vh - 80px)`}}>
        <div className="absolute z-10 inset-0 bg-black opacity-25"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative z-20 text-center flex flex-col justify-around items-center w-full h-5/6 mx-auto">
            <h1 className="hero__title text-4xl md:text-7xl mx-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi aliquid pariatur blanditiis cupiditate iste!</h1>
            <Button onClick={handleClick} variant='primary' className="w-56 h-12 " >Learn More</Button>
            <p className="text-sm">Images from Freepik</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero