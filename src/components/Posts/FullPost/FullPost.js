import classes from "./FullPost.module.css";

const FullPost = ({ match }) => {
    return (
        <h1>
            Post #{match.params.id}
        </h1>
    );
}

export default FullPost;