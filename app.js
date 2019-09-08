'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    var rnd = Math.floor(Math.random() * newQuote.length);
    _this.state = {
      randomIndex: rnd,
      text: newQuote[rnd].text,
      author: newQuote[rnd].author
    };

    return _this;
  }

  _createClass(App, [{
    key: "handleChange",
    value: function handleChange() {
      var rnd = Math.floor(Math.random() * newQuote.length);
      //Если новое случайное число совпадает с предыдущим индексом, то 
      //присваивается число, большее на 1. Если число равно последнему 
      //из диапазона, то присваивается меньшее на 1.
      if (rnd === this.state.randomIndex) {
        if (rnd === newQuote.length - 1) {
          rnd = rnd - 1;
        }
        rnd = rnd + 1;
      }
      this.setState({
        randomIndex: rnd,
        text: newQuote[rnd].text,
        author: newQuote[rnd].author
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "content" },
        React.createElement(
          "div",
          { className: "App shadow rounded", id: "quote-box" },
          React.createElement(
            "h1",
            null,
            "\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u0446\u0438\u0442\u0430\u0442 \u043D\u0430 React"
          ),
          React.createElement(Blockquote, { randomIndex: this.state.randomIndex, quote: this.state.text, author: this.state.author }),
          React.createElement(Buttons, { handleClick: this.handleChange })
        ),
        React.createElement(
          "p",
          null,
          "\u0418\u0441\u0445\u043E\u0434\u043D\u0438\u043A\u0438 \u043D\u0430 ",
          React.createElement(
            "a",
            { href: "https://github.com/injashkin/Random-Quote-Machine" },
            "GitHub"
          ),
          ", \u0430 \u0434\u0435\u043C\u043E \u0431\u0435\u0437 \u0442\u0435\u0441\u0442\u043E\u0432 ",
          React.createElement(
            "a",
            { href: "http://projects.jinv.ru/projects/random-quote-machine/index.html" },
            "\u0437\u0434\u0435\u0441\u044C"
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var Buttons = function Buttons(props) {
  return React.createElement(
    "div",
    { className: "buttons d-flex justify-content-between" },
    React.createElement(
      "button",
      {
        className: "btn btn-primary",
        id: "new-quote",
        onClick: props.handleClick
      },
      "\u041D\u043E\u0432\u0430\u044F \u0446\u0438\u0442\u0430\u0442\u0430"
    ),
    React.createElement(
      "a",
      {
        className: "btn btn-primary",
        id: "tweet-quote",
        title: "Tweet this quote!",
        href: "https://twitter.com/intent/tweet"
      },
      React.createElement("i", { className: "fa fa-twitter" })
    )
  );
};

var Blockquote = function Blockquote(props) {
  return React.createElement(
    "blockquote",
    { className: "blockquote text-left" },
    React.createElement(
      "p",
      { id: "text" },
      props.quote
    ),
    React.createElement(
      "footer",
      { className: "blockquote-footer" },
      React.createElement(
        "cite",
        { id: "author" },
        props.author
      )
    )
  );
};

var newQuote = [{
  text: 'Никакую проблему нельзя решить на том же уровне, на котором она возникла.',
  author: 'Альберт Эйнштейн'
}, {
  text: 'Ты можешь сказать, что у тебя плохая генетика, плохой обмен веществ, а можешь просто поднять свою задницу с дивана и начать работать над собой, задаться целью и верить в себя. В этом случае ты обязательно добьёшься успеха.',
  author: 'Арнольд Шварцнеггер'
}, {
  text: 'Не говорите о том, что у вас нет времени. Времени у вас ровно столько же, сколько его было у Микеланджело, Леонардо да Винчи, Томаса Джефферсона, Пастера, Хелен Келлер, Альберта Эйнштейна.',
  author: 'Джексон Браун'
}, {
  text: 'Жизнь — как вождение велосипеда. Чтобы сохранить равновесие, ты должен двигаться.',
  author: 'Альберт Эйнштейн'
}, {
  text: 'Если ты собираешься в один прекрасный день создать что-то великое, помни – один прекрасный день – это сегодня.',
  author: 'Стивен Спилберг'
}, {
  text: 'Я обнаружил, что у каждого отдельного успешного человека, с которым я когда-либо говорил, был поворотный момент. Этот поворотный момент был там, где они принимали ясное, определенное, недвусмысленное решение о том, что они не собираются жить дальше как обычно. Они решали преуспеть. Некоторые люди принимают такое решение в 15. Некоторые люди делают это в 50. Большинство людей никогда не делает этого.',
  author: 'Брайан Трейси'
}, {
  text: 'Учись у прошлого, живи сегодня, надейся на завтра. Самое важное в жизни — это не переставать задавать вопросы.',
  author: 'Альберт Эйнштейн'
}, {
  text: 'Если ты чувствуешь, что сдаешься, вспомни, ради чего ты держался до этого.',
  author: 'Джаред Лето.'
}, {
  text: 'Люди всегда ждут идеальных обстоятельств, чтобы начать что-то делать, будь то учеба, бизнес или тренировки. Пойми ты наконец: идеальной ситуации не существует! На тебя не свалится из ниоткуда куча возможностей, после чего ты скажешь: вот оно — мое время. Началом всего может быть только одно — твой первый шаг, час боли, дающий величие длиною в жизнь.',
  author: 'Джордж Грегори Плитт'
}, {
  text: 'Раз уж начал — побеждай.',
  author: 'Эрнест Хемингуэй'
}, {
  text: 'Вам знакомо выражение «выше головы не прыгнешь»? Это заблуждение. Человек может все.',
  author: 'Никола Тесла'
}, {
  text: '…и в мире нет таких вершин, что взять нельзя…',
  author: 'В. Высоцкий'
}, {
  text: 'Устал — отдохни. Но тогда ты никогда не будешь первым.',
  author: 'Че Гевара'
}, {
  text: 'Не бойтесь делать то, что не умеете. Помните, ковчег построил любитель, — профессионалы построили Титаник.',
  author: 'Дэйв Берри'
}, {
  text: 'Искушение сдаться будет особенно сильным незадолго до победы… ',
  author: 'Китайская мудрость'
}, {
  text: 'Пессимист видит трудности в каждой возможности. Оптимист видит возможность в каждой трудности.',
  author: 'Уинстон Черчиль'
}];
var rootElement = document.getElementById("root");
ReactDOM.render(React.createElement(App, null), rootElement);