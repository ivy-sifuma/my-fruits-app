class AllFruits extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          fruits: []
        };
      }
      componentDidMount(){
        fetch('/api/v1/fruits.json')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ fruits: data }) });
      }

      render (){
        var fruits = props.fruits.map((fruit) => {
            return(
             <div key={fruit.id}>
              <h1>{this.props.fruit.name}</h1>
              <p>{this.props.fruit.description}</p>
              <Fruit fruit={fruit} handleDelete={props.handleDelete}/>
              
             </div>
            )
           })

           
      return(
        <div>
          {fruits}
        </div>
        )
      }
    }