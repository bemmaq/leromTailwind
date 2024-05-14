import React from "react";
import Container from "../../Helpers/Container";
import All from "../All/All";

const Production = () => {
  return (
    <Container>
      <div className="font-semibold">
        <h2 className="text-3xl pt-10">Производство</h2>
        <All />
        <div>
          <p className="pt-5">
            Общая площадь производственно-складских помещений - более 160 000
            квадратных метров.
          </p>
          <p className="pt-5">
            На предприятии на сегодняшний день работают более 1000
            квалифицированных специалистов. Ручной труд сведен к минимуму,
            производство полностью автоматизировано. Все корпусные упаковки
            упаковываются на роботизированных линиях.
          </p>
          <p className="pt-5">
            Предприятие оснащено высокотехнологичным оборудованием лидеров
            станкостроения Германии, Италии, Австрии. Все рабочие процессы и
            оборудование объединены в единый комплекс.
          </p>
          <p className="pt-5">
            Компания располагает собственным конструкторским бюро, благодаря
            чему дизайнерские идеи воплощаются с учетом конкретного
            производства, добиваясь максимального качества создаваемой
            продукции. Разработки дизайнеров компании неоднократно становились
            лауреатами международных мебельных выставок. В производство компания
            запускает только те разработки, которые получили признание
            авторитетного жюри международных конкурсов и награждены дипломами,
            подтверждающими достоинства выпускаемой мебели.
          </p>
          <p className="pt-5">
            Вся мебель, все производственные процессы, все используемые
            материалы сертифицированы и дополнительно проходят постоянный
            входной контроль качества и безопасности.
          </p>
          <p className="pt-5">
            Производство компании сертифицировано по международному стандарту
            качества ISO 9001-2015, подтверждающему, что система управления
            качеством в компании полностью отвечает международным требованиям,
            принятым более чем в 190 странах мира.
          </p>
          <p className="pt-5">
            Главная гордость компании - это конечная продукция. В основу
            проектов продукции Мебельной компании "Лером" заложен секционный
            принцип, позволяющий самостоятельно создавать индивидуальный
            интерьер с учетом планировки помещения и вкуса покупателя.
          </p>
          <p className="py-5">
            Модульные серии мебели для гостиных, спален, детских и прихожих -
            совокупность привлекательного дизайна, высококачественных
            материалов, стабильно высокого качества изготовления и оптимальной
            цены.
          </p>

          <div>
            <h2 className="text-center py-10">МЫ СОЗДАЕМ МЕБЕЛЬ ДЛЯ ВАС!</h2>

            <div className="flex gap-8 justify-between">
              <img className="w-[300px]"  src="https://www.lerom.ru/upload/resize_cache/iblock/11c/220_147_2/11cd60b1544a7099c9eee71558548b77.jpg" alt="" />
              <img className="w-[300px]"  src="https://www.lerom.ru/upload/resize_cache/iblock/bd5/220_147_2/bd5bf570347f5de3ec4b16c8c92fb10b.jpg" alt="" />
              <img className="w-[300px]"  src="https://www.lerom.ru/upload/resize_cache/iblock/019/220_147_2/019c7a44e70beca014aa1da39a4ee9ed.jpg" alt="" />
              <img className="w-[300px]"  src="https://www.lerom.ru/upload/resize_cache/iblock/269/220_147_2/26964cad128b7d0122474a6331ac19b0.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Production;