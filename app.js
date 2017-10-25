
var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
      <ul>
        {props.items.map(item =>        
          <GroceryListItem item={item} />
        )}
      </ul>
  </div>
);


class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      purchased: false
    };
  }

  onListItemHover() {
    this.setState({
      purchased: !this.state.purchased
    });
  }

  render() {

    var style = {
      fontWeight: this.state.purchased ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }

}

ReactDOM.render(<GroceryList items={['cheese', 'bread', 'soup', 'potatoes']}/>, document.getElementById("app"));