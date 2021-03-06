import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    //this one on the prompts passed down from the parent and will be manipulated
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
