import React, { Component } from "react";
import './App.css'
//import Checkbox from './CheckBox'
class App extends Component {
    state = {
        categories: [
            {
                id: 1,
                name: "Portugal",
                items: [
                    { name: "Aasiya Jayavant", id: 'Aasiya Jayavant' },
                    { name: "Luvleen Lawrence", id: 'Luvleen Lawrence' },
                    { name: "Rey Mibourne", id: 'Rey Mibourne' },
                    { name: "Cayla Brister", id: 'Cayla Brister' }
                ]
            },
            {
                id: 2,
                name: "Nicaragua",
                items: [
                  { name: "Deveedaas Nandi", id: 'Deveedaas Nandi' },
                  { name: "Obasey Chidy", id: 'Obasey Chidy' },
                  { name: "Xenie Dolezelova", id: 'Dolezelova' },
                  { name: "Ezequiel Dengra", id: 'Ezequiel Dengra' }
              ]
            },
            {
                id: 3,
                name: "MarShall Islands",
                items: [
                  { name: "Aaron Almaraz", id: 'Aaron Almaraz' },
                  { name: "Jelena Denisova", id: 'Jelena Denisova' }
                ]
            }
        ],
        checkedListAll: [],
        ItemsChecked: false
        
    };
    selectedItems(e) {
        const { value, checked } = e.target;
        let { checkedListAll } = this.state;

        if (checked) {
            checkedListAll = [...checkedListAll, value];
        } else {
            checkedListAll = checkedListAll.filter(el => el !== value);
            if (this.state.ItemsChecked) {
                this.setState({
                    ItemsChecked: !this.state.ItemsChecked
                });
            }
        }
        this.setState({ checkedListAll });
    }
    selectItem(e) {
        const { checked } = e.target;
        const { categories } = this.state;
        console.log(categories)
        const collection = [];

        if (checked) {
            this.setState(
                {
                    checkedListAll: []
                },
                () => {
                    for (const cat of categories) {
                        for (const item of cat.items) {
                            collection.push(item.id);
                        }
                    }

                    this.setState({
                        checkedListAll: collection
                    });
                }
            );
        } else {
            this.setState({
                checkedListAll: []
            });
        }
        this.setState({
            ItemsChecked: !this.state.ItemsChecked
        });
    }

    handleUp = () =>{
        console.log("button click")
    }


    render() {
        const { categories} = this.state;

        return (
            <div className="container">
            <div className="row">
                <div className="col-md-5 card">
                {categories.map(cat => {
                    
                    return (
                        <ItemCategory
                            {...cat}
                            key={cat.id}
                            selectedItems={this.selectedItems.bind(this)}
                        />
                    );

                })}
                </div>
                <div className="col-md-5 card ml-4">
                {/* {categories.map(cat => {
                 console.log(cat.name)   
                    return ( */}
                        <ItemCategoryList
                        categories={this.state.categories}
                        checkedListAll={this.state.checkedListAll}
                        />
                    {/* );

                 })} */}


                {/* {checkedListAll.map(catlist => {
                    return (

                        <div className="display-categry">
                    <button>x</button>
                    <p>{catlist} </p>
                    
                    </div>
                    );
                })} */}
</div>
</div>
</div>
        );
    }
}

class ItemCategory extends Component {
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
                                    item={item}
                                    selectedItems={selectedItems}
                                    ItemsChecked={ItemsChecked}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

class ItemCategoryList extends Component {
    render() {
 const {checkedListAll, name} = this.props;
        return (
            <div >
                <h3>{name}</h3>
                {checkedListAll.map((catlist, index) => {
                    return (

                        <div className="display-categry"  key={index}>

                    <button handleUp={this.handleUp}>x</button>
                    <p>{catlist} </p>
                    
                    </div>
                    );
                })}

            </div>
        );
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

export default App;