'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    let rnd = Math.floor(Math.random() * newQuote.length);    
    this.state = {
      randomIndex: rnd,
      text: newQuote[rnd].text,
      author: newQuote[rnd].author
    }
    
  }

  handleChange() { 
    let rnd = Math.floor(Math.random() * newQuote.length);
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

  render() {  
    return (      
      <div  className="content">        
      <div className="App shadow rounded" id="quote-box">
      <h1>Генератор случайных цитат на React</h1>    
        <Blockquote randomIndex={this.state.randomIndex} quote={this.state.text} author={this.state.author} />
        <Buttons handleClick={this.handleChange} />        
      </div>
      <p>Исходники на <a href="https://github.com/injashkin/Random-Quote-Machine">GitHub</a>, а демо без тестов <a href="http://projects.jinv.ru/projects/random-quote-machine/index.html">здесь</a></p>       
      </div>
    );
  }
}

const Buttons = (props) => {      
  		return (
    		<div className="buttons d-flex justify-content-between">
    			<button 
    				className="btn btn-primary" 
    				id="new-quote" 
    				onClick={props.handleClick}            
    			>          
    				Новая цитата
    			</button>          
    			<a 
            className="btn btn-primary" 
            id="tweet-quote" 
            title="Tweet this quote!" 
            href="https://twitter.com/intent/tweet"
          >
            <i className="fa fa-twitter"></i>
        	</a>    			
    		</div>
  		);  	 
}

const Blockquote = (props) => {		
	return (
		<blockquote className="blockquote text-left" >       
			<p id="text">
				{props.quote}
			</p>
			<footer className="blockquote-footer">				 
				<cite id="author">
					{props.author}
				</cite>
			</footer>			        
		</blockquote>
	);			
}

const newQuote = [
{
  text: 'Никакую проблему нельзя решить на том же уровне, на котором она возникла.',
  author: 'Альберт Эйнштейн'
},
{
  text: 'Ты можешь сказать, что у тебя плохая генетика, плохой обмен веществ, а можешь просто поднять свою задницу с дивана и начать работать над собой, задаться целью и верить в себя. В этом случае ты обязательно добьёшься успеха.',
  author: 'Арнольд Шварцнеггер'
},
{
  text: 'Не говорите о том, что у вас нет времени. Времени у вас ровно столько же, сколько его было у Микеланджело, Леонардо да Винчи, Томаса Джефферсона, Пастера, Хелен Келлер, Альберта Эйнштейна.',
  author: 'Джексон Браун'
},
{
  text: 'Жизнь — как вождение велосипеда. Чтобы сохранить равновесие, ты должен двигаться.',
  author: 'Альберт Эйнштейн'
},
{
  text: 'Если ты собираешься в один прекрасный день создать что-то великое, помни – один прекрасный день – это сегодня.',
  author: 'Стивен Спилберг'
},
{
  text: 'Я обнаружил, что у каждого отдельного успешного человека, с которым я когда-либо говорил, был поворотный момент. Этот поворотный момент был там, где они принимали ясное, определенное, недвусмысленное решение о том, что они не собираются жить дальше как обычно. Они решали преуспеть. Некоторые люди принимают такое решение в 15. Некоторые люди делают это в 50. Большинство людей никогда не делает этого.',
  author: 'Брайан Трейси'
},
{
  text: 'Учись у прошлого, живи сегодня, надейся на завтра. Самое важное в жизни — это не переставать задавать вопросы.',
  author: 'Альберт Эйнштейн'
},
{
  text: 'Если ты чувствуешь, что сдаешься, вспомни, ради чего ты держался до этого.',
  author: 'Джаред Лето.'
},
{
  text: 'Люди всегда ждут идеальных обстоятельств, чтобы начать что-то делать, будь то учеба, бизнес или тренировки. Пойми ты наконец: идеальной ситуации не существует! На тебя не свалится из ниоткуда куча возможностей, после чего ты скажешь: вот оно — мое время. Началом всего может быть только одно — твой первый шаг, час боли, дающий величие длиною в жизнь.',
  author: 'Джордж Грегори Плитт'
},
{
  text: 'Раз уж начал — побеждай.',
  author: 'Эрнест Хемингуэй'
},
{
  text: 'Вам знакомо выражение «выше головы не прыгнешь»? Это заблуждение. Человек может все.',
  author: 'Никола Тесла'
},
{
  text: '…и в мире нет таких вершин, что взять нельзя…',
  author: 'В. Высоцкий'
},
{
  text: 'Устал — отдохни. Но тогда ты никогда не будешь первым.',
  author: 'Че Гевара'
},
{
  text: 'Не бойтесь делать то, что не умеете. Помните, ковчег построил любитель, — профессионалы построили Титаник.',
  author: 'Дэйв Берри'
},
{
  text: 'Искушение сдаться будет особенно сильным незадолго до победы… ',
  author: 'Китайская мудрость'
},
{
  text: 'Пессимист видит трудности в каждой возможности. Оптимист видит возможность в каждой трудности.',
  author: 'Уинстон Черчиль'
}
];
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);