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
                <p>
                I live in a house. I like my house very much. It’s neither big nor little. When you enter the house you see a big living room. There is a sofa and a round table in the middle of the living room. There is a big TV-set on the wall. My living room is light as there are 4 big windows. There is a kitchen to the right and stairs to the upper floor. The kitchen is big, and the whole family can get together for dinner there. My parents also like to invite their friends for dinner.
        My room is upstairs. It’s big, with high ceilings. There is not much furniture there, only my bed, my wardrobe and a couple of shelves. I keep my pets in the room. I have many of them: mice, rats, hamsters, fish, parrots. I even have a ferret. So there are cages all over the room. My parents’ room, my elder sister’s room, my younger brother’s room and my granny’s room are also upstairs.
        There is a yard around the house. My granny likes to grow flowers there. My dad made a small sports ground with a horizontal bar and a punch bag. There is a swing opposite the sports ground.
        There is a garage for our car and my dad’s tools. We also keep our bikes there.
       
                </p>
            </div>
        </div>
    );
}

export default Posts;