import React from 'react'

function Home({posts}) {
    return (
        <div>
            {posts.length? "oui":"no"}
           {posts.map((post)=>{
            <ul>
                <li>{post.title}</li>
                <li>{post.description}</li>
            </ul>
           }) }
        </div>
    );
}

export default Home;
