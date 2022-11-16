import phoneIcon from '../../assets/icon/phone.svg'
import telegramIcon from '../../assets/icon/tg.svg'
import whatsappIcon from '../../assets/icon/whatsapp.svg'

const Footer = () => {
  return (
    <footer className="sm:bg-[#1E1E1E] sm:px-4 sm:pt-10 sm:pb-16">
      <nav className="flex justify-between sm:flex-col">
        <div>
          <p className="text-[#656566] font-bold sm:text-sm mb-5">О компании</p>
          <ul className="space-y-1">
            <li className="text-[#E4E5EA] cursor-pointer">
              Партнёрская программа
            </li>
            <li className="text-[#E4E5EA] cursor-pointer">Вакансии</li>
          </ul>
        </div>
        <div className="sm:mt-8">
          <p className="text-[#656566] font-bold sm:text-sm mb-5">Меню</p>
          <ul className="columns-2 space-y-1">
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">
              Расчёт стоимости
            </li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">Услуги</li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">Виджеты</li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">
              Интеграции
            </li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">
              Наши клиенты
            </li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">Кейсы</li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">
              Благодарственные письма
            </li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">
              Сертификаты
            </li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">
              Блог на Youtube
            </li>
            <li className="text-[#E4E5EA] cursor-pointer sm:text-sm">
              Вопрос / Ответ
            </li>
          </ul>
        </div>
        <div className="text-right sm:text-left sm:mt-8">
          <p className="text-[#656566] font-bold sm:text-sm mb-5">Контакты</p>
          <p className="text-white mt-5 mb-6">+7 555 555-55-55</p>
          <div className="flex items-center space-x-4 justify-end sm:justify-start">
            <img className="cursor-pointer" src={telegramIcon} alt="telegram" />
            <img className="cursor-pointer" src={phoneIcon} alt="phone" />
            <img className="cursor-pointer" src={whatsappIcon} alt="whatsapp" />
          </div>
          <p className="text-[#E4E5EA] mt-5 sm:text-sm">
            Москва, Путевой проезд 3с1, к 902
          </p>
        </div>
      </nav>
      <div className="mt-8 text-right sm:text-left">
        <p className="text-[#E4E5EA] text-xs">
          ©WELBEX 2022. Все права защищены.
        </p>
        <p className="underline text-[#E4E5EA] text-xs cursor-pointer">
          Политика конфиденциальности
        </p>
      </div>
    </footer>
  )
}
export default Footer
