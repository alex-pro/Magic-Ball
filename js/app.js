var App = React.createClass({
  sleep(func, wait) {
    return setTimeout(function() {
      return func();
    }, wait);
  },

  getAnswer() {
    var answer = answers[parseInt(Math.random() * (answers.length))];
    this.refs.answers.value = answer + '\n' + this.refs.answers.value;
    this.refs.question.value = '';
  },

  shake() {
    var action = actions[parseInt(Math.random() * (actions.length))];
    this.refs.answers.value = action + '\n' + this.refs.answers.value;
    this.sleep(this.getAnswer, 2000);
  },

  render: function() {
    return (
      <div>
        <h1>Запитуй, не вагайся!</h1>
        <form action='#' onSubmit={this.shake}>
          <input ref='question' type='text' autofocus/>
        </form>
        <textarea ref='answers' rows='30'></textarea>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
