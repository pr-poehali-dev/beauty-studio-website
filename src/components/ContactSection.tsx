import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    // Здесь будет логика отправки формы
  };

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      details: ["ул. Красивая, 25", "г. Москва, 123456"],
      action: "Построить маршрут",
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (926) 123-45-67"],
      action: "Позвонить",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      details: ["Пн-Пт: 09:00 - 21:00", "Сб-Вс: 10:00 - 20:00"],
      action: "Записаться онлайн",
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["info@beautystudio.ru", "booking@beautystudio.ru"],
      action: "Написать",
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Контакты и запись
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом или запишитесь онлайн
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-8">
              Как нас найти
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-pink-100 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={info.icon as any}
                          size={20}
                          className="text-white"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-3 text-pink-600 border-pink-300 hover:bg-pink-50"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Карта */}
            <Card className="border-pink-100">
              <CardContent className="p-6">
                <h4 className="font-montserrat font-semibold text-gray-800 mb-4">
                  Наше расположение
                </h4>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                    <p>Интерактивная карта</p>
                    <p className="text-sm">ул. Красивая, 25, Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Форма записи */}
          <div>
            <Card className="border-pink-100">
              <CardContent className="p-8">
                <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-6">
                  Запись на процедуру
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Имя */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Телефон и Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <Input
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Услуга */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Выберите услугу *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hair">
                          Парикмахерские услуги
                        </SelectItem>
                        <SelectItem value="nails">Маникюр/Педикюр</SelectItem>
                        <SelectItem value="cosmetology">
                          Косметология
                        </SelectItem>
                        <SelectItem value="spa">SPA-процедуры</SelectItem>
                        <SelectItem value="consultation">
                          Консультация
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Дата и время */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Предпочитаемая дата
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Время
                      </label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) =>
                          setFormData({ ...formData, time: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Сообщение */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Дополнительные пожелания
                    </label>
                    <Textarea
                      placeholder="Расскажите о ваших пожеланиях..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                    />
                  </div>

                  {/* Кнопка отправки */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Мы свяжемся с вами в течение 30 минут для подтверждения
                    записи
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Социальные сети */}
            <Card className="mt-6 border-pink-100">
              <CardContent className="p-6">
                <h4 className="font-montserrat font-semibold text-gray-800 mb-4 text-center">
                  Следите за нами в соцсетях
                </h4>
                <div className="flex justify-center space-x-4">
                  {[
                    {
                      icon: "Instagram",
                      name: "Instagram",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      icon: "Facebook",
                      name: "Facebook",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      icon: "MessageCircle",
                      name: "Telegram",
                      color: "from-blue-400 to-blue-500",
                    },
                    {
                      icon: "Phone",
                      name: "WhatsApp",
                      color: "from-green-400 to-green-500",
                    },
                  ].map((social) => (
                    <Button
                      key={social.name}
                      size="sm"
                      className={`bg-gradient-to-r ${social.color} text-white hover:shadow-lg`}
                    >
                      <Icon name={social.icon as any} size={16} />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
