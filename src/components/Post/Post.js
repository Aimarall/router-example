import { Link } from "react-router-dom";

const Post = ({ }) => {
    const results = [];
    for (let i = 1; i <= 5; i++) {
        results.push(<li><Link to="/">Post #{i</Link></li>)
    }
}

export default Post;