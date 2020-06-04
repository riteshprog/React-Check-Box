import React, { Component } from 'react'

export default class ItemCategory extends Component {
  render() {
    const { items, name, selectedItems, ItemsChecked } = this.props;

    const getItems = items.map(item => {
        return item;
    });

    return (
      <div>
                      
                <h3>{name}</h3>
                <ul className="list">
                    {getItems.map(item => {
                        return (
                            <li key={item.id}>
                                <Checkbox 
                                    id={item.id}
                                    item={item}
                                    selectedItems={selectedItems}
                                    ItemsChecked={ItemsChecked}
                                />
                            </li>
                        );
                    })}
                </ul>
      </div>
    )
  }
}


class Checkbox extends Component {
  state = {
      isChecked: false
  };
  componentDidMount() {
      if (this.props.ItemsChecked) {
          this.setState({
              isChecked: true
          });
      }
  }
  handleClick(e) {
      e.persist();
      this.setState(
          {
              isChecked: !this.state.isChecked
          },
          () => {
              this.props.selectedItems(e);
          }
      );
  }
  render() {
      const { item } = this.props;
      const { isChecked} = this.state;
      return (
          <label>
              <input
                 name={item.category.id}   
                  type="checkbox"
                  value={item.id}
                  checked={isChecked}
                  onClick={this.handleClick.bind(this)}
              />
              {item.name}
          </label>
      );
  }
}
