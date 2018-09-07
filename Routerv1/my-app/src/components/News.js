import React from 'react';
const News = ({ match }) => {
    return (<h1>Heyyo News {match.params.id} </h1>)
}
export default News;