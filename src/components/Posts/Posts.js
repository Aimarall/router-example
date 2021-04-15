import { Link, Route } from "react-router-dom";
import FullPost from "./FullPost/FullPost";


const Posts = ({ match }) => {
    const results = [];
    for (let i = 1; i <= 5; i++) {
        results.push(<li><Link to={'/posts/' + i}>Post #{i}</Link></li>)
    }

    return(
        <div>
            {match.isExact 
            ? <ul>{results}</ul>
            : <Route path="/posts/:id" component={FullPost} />}

            <div>
                <h1>How are you</h1>
                <p>deleted no needed word of the files</p>
            </div>
        </div>
    );
}

export default Posts;