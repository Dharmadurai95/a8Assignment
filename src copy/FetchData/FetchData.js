import React, { Component } from 'react';
import axios from 'axios';
import './spinner.css';
import Showpost from './Showpost'; 
import PaginationItem from './pagination';


export default class FetchData extends Component {
    state = {
        posts: [],
        loading: 'true',
        pageNo: 1,
        perPage: 10,

    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {

                this.setState({ posts: response.data })
                console.log(this.state.posts, 'hello')
                this.setState({loading:false})
            })
            .catch(error => {
                console.log(error)
            })
    }

    pageNumberHadler = (number) => {
         this.setState({pageNo:number})
    }
    render() {
        const  lastIndexPost = this.state.pageNo * this.state.perPage;
        const firstIndexpost  =  lastIndexPost - this.state.perPage;
        const currentIndexPost = this.state.posts.slice(firstIndexpost,lastIndexPost);

        return (
            <div>
               <Showpost post = {currentIndexPost}  loading={this.props.loading}/>
               <PaginationItem totalItem={this.state.posts.length} perPage={this.state.perPage} pageNo={this.pageNumberHadler}/>
            </div>
        )
    }
}
