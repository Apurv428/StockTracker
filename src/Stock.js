import React from 'react';

class Stock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stockChartXValues:[],
            stockChartYValues:[]

        }
    }

    componentWillMount(){
        this.fetchStock();
    }

    fetchStock(){
        const API_KEY = 'HKL5RNE9488W5RWL'
        let StockSymbol = 'TSLA'
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        
        fetch(API_Call)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){
                    console.log(data);
                }
            )
    }

    render(){
        return(
            <div>
                <h1>StockTracker📈</h1>
            </div>    
            
        )
    }
}

export default Stock;