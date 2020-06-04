import React, { Component } from 'react';
import ItemCategory from './ItemCategory';
import ItemCategoryList from './ItemCategoryList';
import './App.css';
import NavBar from './NavBar';
export default class App extends Component {
    constructor(props){
    super(props);
this.state={
    categories: [
        {
            id: 1,
            name: "Portugal",
            items: [
                { name: "Aasiya Jayavant", id: 'Aasiya Jayavant', category: { id: 0 } },
                { name: "Luvleen Lawrence", id: 'Luvleen Lawrence', category: { id: 0 } },
                { name: "Rey Mibourne", id: 'Rey Mibourne', category: { id: 0 } },
                { name: "Cayla Brister", id: 'Cayla Brister', category: { id: 0 } }
            ]
        },
        {
            id: 2,
            name: "Nicaragua",
            items: [
              { name: "Deveedaas Nandi", id: 'Deveedaas Nandi', category: { id: 1 } },
              { name: "Obasey Chidy", id: 'Obasey Chidy', category: { id: 1 } },
              { name: "Xenie Dolezelova", id: 'Xenie Dolezelova', category: { id: 1 } },
              { name: "Ezequiel Dengra", id: 'Ezequiel Dengra', category: { id: 1 } }
          ]
        },
        {
            id: 3,
            name: "MarShall Islands",
            items: [
              { name: "Aaron Almaraz", id: 'Aaron Almaraz', category: { id: 0 } },
              { name: "Jelena Denisova", id: 'Jelena Denisova', category: { id: 0 } }
            ]
        }
    ],
    checkedListAll: [],
    ItemsChecked: false

}
}

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

    render() {
        return (
            <div className="container">
                    <NavBar />
                <div className="checkbox-list row mt-5">
                    <div  className="card">
                    {this.state.categories.map(cat => {
                    return (
                        <ItemCategory
                            {...cat}
                            key={cat.id}
                            selectedItems={this.selectedItems.bind(this)}
                        />
                    );

                })}
 
                    </div>
                    <div  className=" card card-show">
                        <ItemCategoryList
                            id={this.state.categories.id}
                            categories={this.state.categories}
                            checkedListAll={this.state.checkedListAll}
                            selectedItems={this.selectedItems.bind(this)}
                           
                            />
                    </div>
            </div>
            </div>
        )
    }
}
