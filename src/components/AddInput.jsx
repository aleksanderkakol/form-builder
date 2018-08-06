import React, { Component } from 'react';


class AddInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isAdd: false
        };




        this.onSubmit = this.onSubmit.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }


    onSubmit(e){
        e.preventDefault();

        this.props.onAdd(this.questionInput.value, this.typeInput.value);

        this.questionInput.value = '';
        this.typeInput.value = '';

        this.setState ({
            isAdd: false
        })

    }

    onAdd() {
        this.setState({
            isAdd: true
        })
    }

    render() {

        return (
            <div className='addForm'>
            {this.state.isAdd
                ? (
            <form className='form' onSubmit={this.onSubmit}>
                <label>Question: <input className='inputQuestion' type="text" placeholder='Question' ref={questionInput => this.questionInput = questionInput}/></label>
                <label>Type:<select className='selectType' ref={typeInput => this.typeInput = typeInput}>
                    <option value="Yes/No">Yes / No</option>
                    <option value="Text">Text</option>
                    <option value="Number">Number</option>
                </select></label>
                <button type='submit' className='addFormBtn btn'>Add</button>
            </form>
                ) :
                (
                <button className='addInput btn' onClick={this.onAdd}>Add Input</button>
                )
            }
            </div>
        );
    }
}

export default AddInput;
