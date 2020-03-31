import React from 'react';
import axios from 'axios';

//api key
const HOST = "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com";
const API_KEY = "d4969b2db7msh8754205a3a7af00p160846jsnb32415996917";

const URL = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list";

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isItemsReady: false
        };

        this.getItems();

    };

    getItems() {
        console.log("?!!?");

        axios.get(URL, {
            params: {
                'country': 'us',
                'lang': 'en',
                'currentpage': 0,
                'pagesize': 30
            },
            headers: {
                // 'Content-Type': 'application/json',
                'X-Api-Host': HOST,
                'X-RapidAPI-Key': API_KEY
            },
        }
        ).then((res =>{
            console.log("test");
            console.log(res);
            this.setState({ items: res.data.results, isItemsReady: true });
        }));
    }

    renderItems() {
        var arr = this.state.items.map((item) => {
            console.log(item.articles[0]);
            return (
                <div style={{ display: 'inline-block', margin: '15px' }} key={item.code}>
                    <img src={item.articles[0].images[0].url} alt={item.articles[0].name} />
                    <h4>{item.articles[0].name}</h4>
                    <h5>{item.articles[0].whitePrice.formattedValue}</h5>
                </div>
            );
        });

        return arr;
    }

    render() {
        return (
            <div>
                {this.state.isItemsReady ? <h1> Items </h1> : <h3 style={{ marginTop: '150px' }}> Loading ... </h3>}
                {this.state.items.length === 0 ? null : this.renderItems() }
            </div>
        );
    }
    
}

export default Products;
