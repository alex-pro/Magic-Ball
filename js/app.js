var App = React.createClass({
  componentDidMount() {
    var question = document.getElementById('question');
    question.focus();
    question.setAttribute('autocomplete', 'off');
  },

  sleep(func, wait) {
    return setTimeout(function() {
      return func();
    }, wait);
  },

  currentAnswers() {
    return document.getElementById('answers');
  },

  newAnswer(value) {
    var li = document.createElement('li');
    li.className = 'answer';
    li.innerHTML = value;
    return li;
  },

  getAnswer() {
    var answer = answers[parseInt(Math.random() * (answers.length))];
    this.currentAnswers().insertBefore(this.newAnswer(answer), this.currentAnswers().firstChild);
    question.value = '';
  },

  shake(event) {
    event.preventDefault();
    var action = actions[parseInt(Math.random() * (actions.length))];
    this.currentAnswers().insertBefore(this.newAnswer(action), this.currentAnswers().firstChild);
    this.sleep(this.getAnswer, 2000);
  },

  render: function() {
    return (
      <div>
        <h1>Спрашивай, не стесняйся!</h1>
        <form onSubmit={this.shake}>
          <input id='question' type='text' />
        </form>
        <ul id='answers' className='answers'>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var question = document.getElementById('question');
question.addEventListener('blur', function( event ) {
  event.target.focus();
}, true);
