class Body extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          fruits: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewFruit = this.addNewFruit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.deleteFruit = this.deleteFruit.bind(this)
      }

      handleDelete(id){
        fetch(`http://localhost:3000/api/v1/fruits/${id}`, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => { 
          this.deleteFruit(id)
          })
      }

      deleteFruit(id){
        newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
        this.setState({
          fruits: newFruits
        })
      }

      handleFormSubmit(name, description){
        let body = JSON.stringify({fruit: {name: name, description:   description} })
        fetch('http://localhost:3000/api/v1/fruits', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: body,
          }).then((response) => {return response.json()})
          .then((fruit)=>{
            this.addNewFruit(fruit)
          })
          
        }
        addNewFruit(fruit){
          this.setState({
            fruits: this.state.fruits.concat(fruit)
          })
        }  
    }

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFruit = this.updateFruit.bind(this)
  
  handleUpdate(fruit){
    fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({fruit: fruit}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateFruit(fruit)
      })
  }
  updateFruit(fruit){
    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
    newFruits.push(fruit)
    this.setState({
      fruits: newFruits
    })
  }

 componentDidMount(){
    fetch('/api/v1/items.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ items: data }) });
  }
render(){
    return(
      <div>
        <NewItem handleSubmit = {this.handleSubmit} />
        <AllItems items={this.state.items} handleDelete = {this.handleDelete} handleUpdate = {this.handleUpdate}/>
      </div>
    )
  }



const AllFruits = (props) => {
var fruits = props.fruits.map((fruit) => {
    return(
      <div key={fruit.id}>
       <Fruit fruit={fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

}
 

class Fruit extends React.Component{
constructor(props){
    
    this.handleEdit = this.handleEdit.bind(this)
  }
handleEdit(){
   if(this.state.editable){
      let name = this.name.value
      let description = this.description.value
      let id = this.props.fruit.id
      let fruit = {id: id, name: name, description: description}
      this.props.handleUpdate(fruit)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render(){
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.fruit.name}/>:<h3>{this.props.fruit.name}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.fruit.description}/>:<p>{this.props.fruit.description}</p>
    return(
      <div>
        {name}
        {description}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete</button>
      </div>
    )      
  }
}

this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFruit = this.updateFruit.bind(this)
  
  handleUpdate(fruit){
    fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({fruit: fruit}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateFruit(fruit)
      })
  }
  updateFruit(fruit){
    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
    newFruits.push(fruit)
    this.setState({
      fruits: newFruits
    })

    componentDidMount(){
        fetch('/api/v1/fruits.json')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ fruits: data }) });
      }
    render(){
        return(
          <div>
            <NewFruit handleFormSubmit={this.handleFormSubmit} />
            <AllFruits fruits={this.state.fruits} handleDelete={this.handleDelete} />
          </div>
        )
      }
    }