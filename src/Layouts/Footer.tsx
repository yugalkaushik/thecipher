import Slider from "../Components/Slider"

const Footer = () => {
  return (
    <div>
      <Slider />
      <div className="py-5 md:py-7 font-Canopee text-lg md:text-2xl flex flex-row justify-between px-4 md:px-6">
        <a target="_blank" href="https://yugalkaushik.vercel.app">
          yugalkaushik ©
        </a>
      </div>
    </div>
  )
}

export default Footer
