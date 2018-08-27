import React from 'react';

class NewsItem extends React.Component{
    render(){
        const { title,desc } = this.props.newsData;
        return (
            <div>
                <h1>{ title }</h1>
                <p>{ desc }</p>
            </div> 
        )
    }
}

export default NewsItem ; 