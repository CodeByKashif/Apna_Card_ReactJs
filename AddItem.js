import React from 'react'

class AddItem extends React.Component {
      constructor(props)
    {
        new super(props);
        this.state={
            productName:"",
            productPrice:0

        };
    }
  render() {
    return (
      <form className='row' onSubmit={(e)=>{
        e.preventDefault();
        this.props.AddItem(this.state.productName, Number(this.state.productPrice));
      }}>
        <div className="mb-5 col-6">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productNmae"
            onChange={(e)=>{
                this.setState({productName: e.currentTarget.value});
            }}
            value={this.state.productName}
          />
          
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="Number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e)=>{
                this.setState({productPrice: Number(e.currentTarget.value)});
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-4">
          Add
        </button>
      </form>
    );
    }
}

export default AddItem;
