import React, { Component } from 'react'
export default class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.isLoading ? <div>Yükleniyor...</div> : this.props.posts.map(post =>
            <div key={post.id}>
                {post.title}
            </div>
        )}
      </div>
    )
  }
}
