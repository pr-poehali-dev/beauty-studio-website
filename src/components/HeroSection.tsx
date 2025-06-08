import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-white"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"></div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Бейдж */}
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium mb-6">
            <Icon name="Award" size={16} className="mr-2" />
            Премиум студия красоты №1 в городе
          </div>

          {/* Главный заголовок */}
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Создаем
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              красоту{" "}
            </span>
            вместе!
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Профессиональные услуги красоты в современной студии. Опытные
            мастера, качественная косметика, индивидуальный подход к каждому
            клиенту.
          </p>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на процедуру
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть портфолио
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">5</div>
              <div className="text-gray-600 text-sm">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Видов услуг</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                100%
              </div>
              <div className="text-gray-600 text-sm">Качество</div>
            </div>
          </div>
        </div>
      </div>

      {/* Скролл индикатор */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-pink-500" />
      </div>
    </section>
  );
};

export default HeroSection;
