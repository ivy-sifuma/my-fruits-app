class Body extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          fruits: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
      }

      handleFormSubmit(name, description){
        console.log(name, description)
    }
    
    componentDidMount(){
        fetch('/api/v1/fruits.json')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ fruits: data }) });
      }
    render(){
        return(
          <div>
            <NewFruit />
            <AllFruits fruits={this.state.fruits} />
          </div>
        )
      }
    }