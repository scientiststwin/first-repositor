import React from 'react';
import classes from './main.module.css';
import { Route, Link, withRouter, Switch } from 'react-router-dom';
import Person from '../../components/person/person';
import Char from '../../components/char/char';

import axios from 'axios';

class Main extends React.Component {

    state = {
        blogs: [],
        blogId: null
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(request => {
                const our_blog = request.data.slice(0, 6)

                this.setState({
                    blogs: our_blog
                })
                console.log(request)
            });

    }

    cliked = (id) => {
        this.setState({
            blogId: id
        })
    }

    render() {

        const all_blog = this.state.blogs.map(blg => {
            return <Blog title={blg.title} key={blg.id} clk={() => this.cliked(blg.id)} />
        })

        return (
            <>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    {
                        all_blog
                    }
                </div>
                <Fullblog id={this.state.blogId} />

            </>
        )
    }
}


class Fullblog extends React.Component {

    state = {
        uniqeId: null,
    }

    shouldComponentUpdate(nextprops,nextstate){
        
    }

    componentDidUpdate() {

        if (this.props.id) {
            if (!this.state.uniqeId || (this.props.id !== this.state.uniqeId[1])) {
                axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
                    .then(request => {
                        this.setState({
                            uniqeId: [request.data.title, request.data.id]
                        })
                    })
            }
        }
    }

    render() {

        let mypost = <h1>please click to one blog</h1>

        if (this.props.id) {
            mypost = <h1>Loading ...</h1>
        }

        if (this.state.uniqeId) {
            mypost = <h1>{this.state.uniqeId[0]}</h1>
        }

        return (
            [mypost]
        )
    }
}

const Blog = props => {

    return (
        <div
            onClick={props.clk}
            style={{ width: '40vw', height: '100px', backgroundColor: '#3fa0f0', margin: "20px auto" }}
        >
            <div>{props.title}</div>
        </div>
    )
}


// export default withRouter(Main);
export default Main;