const MainContent = () => {
  return (
    <div className="flex justify-between sm:flex-col sm:space-y-11">
      <div>
        <h1 className="w-1/3 text-white text-5xl sm:text-4xl">
          Зарабатывайте больше
        </h1>
        <p className="text-5xl mt-1 font-black text-transparent bg-clip-text bg-gradient-to-br from-[#FCB045] to-[#FF3F78] sm:text-4xl">
          с WELBEX
        </p>
        <p className="text-lg w-1/2 mt-8 text-white">
          Развиваем и контролируем продажи за вас
        </p>
      </div>
      <div>
        <p className="text-[#E4E5EA] text-lg mb-10 w-[60%] text-right ml-auto sm:mr-auto sm:ml-0 sm:text-left sm:mb-5">
          Вместе с 
          <span className="uppercase text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
            бесплатной консультацией
          </span>{' '}
          мы дарим:
        </p>
        <div className="grid grid-cols-2 gap-8 ml-auto w-[65%] sm:mr-auto sm:ml-0 sm:gap-5">
          <div>
            <h3 className="text-[#E4E5EA] text-lg text-right sm:text-left sm:before:content-['-'] sm:before:text-transparent sm:before:bg-clip-text sm:before:bg-gradient-to-br sm:before:from-[#FCB045] sm:before:to-[#FF3F78] sm:before:pr-1">
              Виджеты
            </h3>
            <p className="text-[#E4E5EA] text-right sm:hidden">
              30 готовых решений
            </p>
          </div>
          <div>
            <h3 className="text-[#E4E5EA] text-lg text-right sm:text-left sm:before:content-['-'] sm:before:text-transparent sm:before:bg-clip-text sm:before:bg-gradient-to-br sm:before:from-[#FCB045] sm:before:to-[#FF3F78] sm:before:pr-1">
              Dashboard
            </h3>
            <p className="text-[#E4E5EA] text-right sm:hidden">
              с показателями вашего бизнеса
            </p>
          </div>
          <div>
            <h3 className="text-[#E4E5EA] text-lg text-right sm:text-left sm:before:content-['-'] sm:before:text-transparent sm:before:bg-clip-text sm:before:bg-gradient-to-br sm:before:from-[#FCB045] sm:before:to-[#FF3F78] sm:before:pr-1">
              Skype Аудит
            </h3>
            <p className="text-[#E4E5EA] text-right sm:hidden">
              отдела продажи и CRM системы
            </p>
          </div>
          <div>
            <h3 className="text-[#E4E5EA] text-lg text-right sm:text-left sm:before:content-['-'] sm:before:text-transparent sm:before:bg-clip-text sm:before:bg-gradient-to-br sm:before:from-[#FCB045] sm:before:to-[#FF3F78] sm:before:pr-1">
              35 дней
            </h3>
            <p className="text-[#E4E5EA] text-right sm:hidden">
              использования CRM
            </p>
          </div>
        </div>
        <button className="text-[#E4E5EA] font-medium px-8 py-6 flex ml-auto mt-20 bg-[#4077F3] sm:hidden">
          Получить консультацию
        </button>
      </div>
    </div>
  )
}
export default MainContent
