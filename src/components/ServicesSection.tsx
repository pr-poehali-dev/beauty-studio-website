import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Scissors",
      title: "Парикмахерские услуги",
      description: "Стрижки, окрашивание, укладки от опытных мастеров",
      features: [
        "Стрижки любой сложности",
        "Окрашивание",
        "Укладки и локоны",
        "Лечение волос",
      ],
      price: "от 1 500 ₽",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      icon: "Hand",
      title: "Маникюр и педикюр",
      description: "Качественный уход за ногтями с долговременным покрытием",
      features: [
        "Классический маникюр",
        "Гель-лак",
        "Дизайн ногтей",
        "SPA-педикюр",
      ],
      price: "от 800 ₽",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: "Sparkles",
      title: "Косметология",
      description: "Профессиональный уход за кожей лица и тела",
      features: [
        "Чистка лица",
        "Пилинги",
        "Массаж лица",
        "Антивозрастной уход",
      ],
      price: "от 2 000 ₽",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: "Flower",
      title: "SPA-процедуры",
      description: "Расслабляющие и восстанавливающие процедуры для тела",
      features: [
        "Массаж тела",
        "Обертывания",
        "Ароматерапия",
        "Релакс-программы",
      ],
      price: "от 2 500 ₽",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг красоты для вашего совершенства
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Иконка */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={service.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>

                {/* Заголовок */}
                <h3 className="font-montserrat text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                {/* Описание */}
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Особенности */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Цена и кнопка */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800">
                    {service.price}
                  </span>
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg`}
                  >
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Специальное предложение */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="font-montserrat text-2xl font-bold mb-4">
              🎉 Специальное предложение!
            </h3>
            <p className="text-lg mb-6">
              Комплекс "Полное преображение" - скидка 20% при записи на 3 и
              более услуги
            </p>
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100"
            >
              <Icon name="Gift" size={20} className="mr-2" />
              Узнать подробности
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
