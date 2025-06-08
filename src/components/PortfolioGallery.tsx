import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все работы" },
    { id: "hair", name: "Волосы" },
    { id: "nails", name: "Ногти" },
    { id: "face", name: "Лицо" },
    { id: "spa", name: "SPA" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "hair",
      title: "Окрашивание балаяж",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1594736797933-d0f4c7ffe9d5?w=200&h=150&fit=crop",
      master: "Анна Петрова",
    },
    {
      id: 2,
      category: "nails",
      title: "Дизайн ногтей",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=200&h=150&fit=crop",
      master: "Мария Сидорова",
    },
    {
      id: 3,
      category: "face",
      title: "Омолаживающий уход",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=200&h=150&fit=crop",
      master: "Елена Козлова",
    },
    {
      id: 4,
      category: "hair",
      title: "Стрижка каскад",
      image:
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=300&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=150&fit=crop",
      master: "Анна Петрова",
    },
    {
      id: 5,
      category: "spa",
      title: "Расслабляющий массаж",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop",
      master: "Ольга Иванова",
    },
    {
      id: 6,
      category: "nails",
      title: "Французский маникюр",
      image:
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&h=300&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=150&fit=crop",
      master: "Мария Сидорова",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-50 to-pink-50"
    >
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Посмотрите на результаты работы наших мастеров
          </p>

          {/* Фильтр категорий */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "border-pink-300 text-pink-700 hover:bg-pink-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Основное изображение */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay с информацией */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="font-montserrat text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-pink-200">Мастер: {item.master}</p>
                      <Button
                        size="sm"
                        className="mt-4 bg-white text-gray-800 hover:bg-gray-100"
                      >
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </div>

                {/* До/После */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-montserrat text-lg font-semibold text-gray-800">
                      {item.title}
                    </span>
                    <span className="text-sm text-pink-600 font-medium">
                      {item.master}
                    </span>
                  </div>

                  {/* Миниатюры до/после */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">До</p>
                      <img
                        src={item.beforeImage}
                        alt="До"
                        className="w-full h-16 object-cover rounded-lg"
                      />
                    </div>
                    <Icon
                      name="ArrowRight"
                      size={20}
                      className="text-pink-500"
                    />
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">После</p>
                      <img
                        src={item.image}
                        alt="После"
                        className="w-full h-16 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Отзывы клиентов */}
        <div className="mt-20">
          <h3 className="font-montserrat text-3xl font-bold text-center text-gray-800 mb-12">
            Отзывы наших клиентов
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анастасия К.",
                rating: 5,
                text: "Потрясающая работа! Мастер Анна превзошла все мои ожидания. Окрашивание получилось именно таким, как я мечтала.",
                service: "Окрашивание волос",
              },
              {
                name: "Мария Л.",
                rating: 5,
                text: "Прекрасная студия! Чистота, профессионализм, внимание к деталям. Маникюр держится уже 3 недели без сколов.",
                service: "Маникюр",
              },
              {
                name: "Елена С.",
                rating: 5,
                text: "Косметологические процедуры просто волшебные! Кожа стала гладкой и сияющей. Обязательно вернусь еще.",
                service: "Уход за лицом",
              },
            ].map((review, index) => (
              <Card key={index} className="bg-white border-pink-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-pink-600">{review.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
