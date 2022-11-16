import logo from '../../assets/logo/logo.svg'
import logo_name from '../../assets/logo/logo_name.svg'
import phoneIcon from '../../assets/icon/phone.svg'
import telegramIcon from '../../assets/icon/tg.svg'
import whatsappIcon from '../../assets/icon/whatsapp.svg'

const Header = () => {
  return (
    <header className="flex items-center justify-between sm:sticky sm:top-0 sm:bg-[#1E1E1E] sm:py-5 sm:px-4 sm:justify-center">
      <div className="space-y-2 cursor-pointer sm:hidden">
        <div className="inline-flex items-center space-x-2">
          <img src={logo} alt="logo" />
          <img src={logo_name} alt="logo_name" />
        </div>
        <p className="w-1/2 text-[#E4E5EA] text-xs">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <nav>
        <ul className="text-[#E4E5EA] space-x-8 flex items-center">
          <li className="cursor-pointer sm:text-xs sm:uppercase">Услуги</li>
          <li className="cursor-pointer sm:text-xs sm:uppercase">Виджеты</li>
          <li className="cursor-pointer sm:text-xs sm:uppercase">Интеграции</li>
          <li className="cursor-pointer sm:text-xs sm:uppercase">Кейсы</li>
          <li className="cursor-pointer sm:text-xs sm:uppercase">
            Сертификаты
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between space-x-14 sm:hidden">
        <p className="text-white">+7 555 555-55-55</p>
        <div className="flex items-center space-x-8">
          <img className="cursor-pointer" src={telegramIcon} alt="telegram" />
          <img className="cursor-pointer" src={phoneIcon} alt="phone" />
          <img className="cursor-pointer" src={whatsappIcon} alt="whatsapp" />
        </div>
      </div>
    </header>
  )
}
export default Header
