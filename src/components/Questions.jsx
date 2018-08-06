import React, { Component } from 'react';
import AddSubInput from './AddSubInput.jsx';


class Questions extends Component {
    constructor(props){
        super(props);

        this.state = {
            conditions: []
        };


        this.onDelete = this.onDelete.bind(this);
        this.onSubAdd = this.onSubAdd.bind(this);
    }

    componentDidMount(){
        const conditions = this.getConditions();

        this.setState({
            conditions
        });
    }

    getConditions() {
        return this.state.conditions

    }

    onDelete() {
        const {onDelete, question} = this.props;
        onDelete(question);
    }

    onSubAdd(condition, answer,question, type){

        const conditions = this.getConditions();


        conditions.push({
            condition,
            answer,
            question,
            type
        });
        this.setState({
            conditions
        });
    }

  render() {
      const {question, type} = this.props;

    return (
        <div>
            <div className='form'>
                <p className='question'>Question: {question}</p>
                <p className='questionType'>Type: {type}</p>
                <AddSubInput
                    onSubAdd={this.onSubAdd}
                    values={this.state.conditions}
                    conditions={type}
                />
                <button className='delete btn' onClick={this.onDelete}>Delete</button>
            </div>
        </div>
    );
  }
}

export default Questions;
