import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../style/style.scss';
import Questions from './Questions.jsx';
import AddInput from './AddInput.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount(){
    const questions = this.getQuestions();

    this.setState({
        questions
    });
  }

  getQuestions() {
    return this.state.questions

  }

  onDelete(question) {
    const questions = this.getQuestions();

    const filteredQuestions = questions.filter(quest => {
      return quest.question !== question;
    });

      this.setState({
          questions: filteredQuestions
      })
  }

  onAdd(question, type){

    const questions = this.getQuestions();


    questions.push({
        question,
        type
    });
      this.setState({
          questions
      });
  }

  render() {
      let questList = this.state.questions.map(quest => {
          return (
              <Questions
                  key={quest.question}
                  {...quest}
                  onDelete={this.onDelete}
              />
          );
      });
    return (
      <div className="App">
          <h1 className="title">Form Builder</h1>
              <div className='list'>
                  {questList}
              </div>
          <AddInput
              onAdd={this.onAdd}
          />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
