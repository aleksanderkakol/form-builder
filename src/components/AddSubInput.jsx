import React, { Component } from 'react';

class AddSubInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isAdd: false
        };

        this.onSubmitSub = this.onSubmitSub.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        this.setState({
            isAdd: true
        })
    }

    onSubmitSub(e){
        e.preventDefault();

        this.props.onSubAdd(this.conditionInput.value, this.answerInput.value, this.questionInput.value, this.typeInput.value);

        this.questionInput.value = '';
        this.typeInput.value = '';

        this.setState ({
            isAdd: false
        });

    }



    Select(state) {
        switch (state) {
                        case 'Number':
                            return (
                                <select className='selectType'
                                        ref={conditionInput => this.conditionInput = conditionInput}>
                                    <option value="Equals">Equals</option>
                                    <option value="Greater">Greater than</option>
                                    }
                                    <option value="Less">Less than</option>
                                </select>
                            );
                        default:
                            return (
                                <select className='selectType'
                                        ref={conditionInput => this.conditionInput = conditionInput}>
                                    <option value="Equals">Equals</option>
                                </select>
                            )
        }
    }

    render() {
        // const {condition, answer, question, type} = this.props;
        return (
            <div className='addForm'>
            {this.state.isAdd
                ? (
            <form className='subForm' onSubmit={this.onSubmitSub}>
                <label>Condition:
                    {this.Select(this.props.conditions)}
                <input type="text" ref={answerInput => this.answerInput = answerInput}/></label>
                <label>Question: <input type="text" ref={questionInput => this.questionInput = questionInput}/></label>
                <label>Type:<select className='selectType' ref={typeInput => this.typeInput = typeInput}>
                    <option value="Yes/No">Yes / No</option>
                    <option value="Text">Text</option>
                    <option value="Number">Number</option>
                </select></label>
            </form>
            ) :
                (
                    <button className='addSubinput btn' onClick={this.onAdd}>Add Sub-Input</button>
                )
            }
            </div>
        );
    }
}

export default AddSubInput;
