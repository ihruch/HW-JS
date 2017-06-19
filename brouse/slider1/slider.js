/**
 * Created by Игорь on 05.06.2017.
 */
/***************************************************************************************************/
function Slider(selector,options) {
    var __self = this;
    //DOM NODES
    var sliderNode = document.querySelector(selector);
    //получили врап который в последствии будем двигать и создавать эффект перемещения
    var slideImagesNode = sliderNode.querySelector('.slider__images-wrap');
    // получаем стрелки управления
    var prevSliderNode = sliderNode.querySelector('.slider__pager_previous');
    var nextSliderNode = sliderNode.querySelector('.slider__pager_next');
    //получаем пагинацию
    var paginationNode = sliderNode.querySelector('.slider__pagination');


    //переменная для хранения текущего элемента
    var currentSlideIndex = options.currentSlide || 0;
    //кол-во картинок
    var countImages = slideImagesNode.children.length;
    // храним ширину врапера картинки
    var slideSize = slideImagesNode[(options.direction == 'vertical') ? 'offsetHeight' : 'offsetWidth' ];



    this.prevSlide = function () {
        if( currentSlideIndex == 0 ){
            currentSlideIndex = countImages - 1;

            //console.log(slideImagesNode.lastElementChild);
            //console.log(currentSlideIndex);
            //slideImagesNode.prepend(slideImagesNode.lastElementChild );

           // currentSlideIndex = slideImagesNode.insertBefore( slideImagesNode.lastElementChild , slideImagesNode.children[0]);

            return;
        }
        currentSlideIndex--;
    };
    this.nextSlide = function () {
        if( currentSlideIndex == countImages - 1){
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };

    //функция которая отвечает за рендер
    this._render = function() {

        var directionStyle = (options.direction == 'vertical') ? 'marginTop' : 'marginLeft' ;
        slideImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) +'px';

        //slideImagesNode.style.marginLeft = -(currentSlideIndex * slideSize )+ 'px'; этого достаточно если только горизонтальная прокрутка

        // делаем вывод точек
        paginationNode.querySelector('.active').classList.remove('active'); //удали у всех класс активной точки
       
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');

    };

    //события на кнопки
    prevSliderNode.onclick = function (e) {
        e.preventDefault();
        __self.prevSlide();
        __self._render();
    };
    nextSliderNode.onclick = function (e) {
        e.preventDefault();
        __self.nextSlide();
        __self._render();
    };

    paginationNode.onclick = function (e) {
       e.preventDefault();
       var link = e.target; // тут взяли ссылку на эл=т на который тыкнули

       if(link.tagName != 'A') return; // проверили что мы тыкнули точно "A"

        currentSlideIndex = +link.dataset['slider__item'];
        __self._render();
    };

    // отвечает за то как будет идти прокручивание вертикально либо горизонтально
    if( options.direction == 'vertical'){
        slideImagesNode.style.whiteSpace = 'normal';
    }
    // этот вызов нужен для того чтобы если есть настройка в optional чс какого кадра показываь слайд то
    //нам надо отрендерить при загрузке документа что бы мы перешли на этот слайд
    this._render();

}
