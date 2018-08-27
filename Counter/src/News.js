import React from 'react';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';

class News extends React.Component {
    render(){
        const {news} = this.props;
        const element = news.map(news => (
            <NewsItem key={news.title} newsData={news} />
        ));
        return <div>
            { element }
            <NewsForm addNews={this.props.addNews}/>
          </div>;
    }
}

export default News ;