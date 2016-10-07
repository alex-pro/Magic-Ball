var App = React.createClass({
  sleep(func, wait) {
    return setTimeout(function() {
      return func();
    }, wait);
  },

  newAnswer(value) {
    var li = document.createElement('li');
    li.className = 'answer';
    li.innerHTML = value  ;
    return li;
  },

  getAnswer() {
    var answer = answers[parseInt(Math.random() * (answers.length))];
    document.getElementById('answers').insertBefore(this.newAnswer(answer), document.getElementById('answers').firstChild);
    document.getElementById('question').value = '';
  },

  shake(event) {
    event.preventDefault();
    var action = actions[parseInt(Math.random() * (actions.length))];
    document.getElementById('answers').insertBefore(this.newAnswer(action), document.getElementById('answers').firstChild);
    this.sleep(this.getAnswer, 2000);
  },

  render: function() {
    return (
      <div>
        <h1>Спрашивай, не стесняйся!</h1>
        <form onSubmit={this.shake}>
          <input id='question' type='text' autofocus />
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
