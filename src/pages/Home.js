import React from "react";
import { Link } from 'react-router-dom';


function Home() {

    return( <>
        <h1>Horse Planet</h1>
            <h2>We are all about Horses. Horses!!!</h2>
            <div className="main-horse-content">
                <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad iure natus neque, nihil quasi reiciendis sint temporibus ut. Accusantium dolores error et laudantium provident! Ab accusantium consequatur itaque sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi cum laudantium molestias, necessitatibus officia optio quam quibusdam quisquam velit? Delectus est officia quae ratione sequi sunt tenetur voluptas voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolores esse est et ex, ipsam magni modi nostrum numquam pariatur perspiciatis quae quidem quis quisquam reprehenderit ut? Nulla, unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae eius eveniet hic minima quam quo quod tempora veniam. Distinctio harum laudantium maxime nesciunt possimus quaerat ratione reiciendis sit vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi consequatur dicta, doloremque esse fuga hic, illo iure magni modi obcaecati officia, officiis quam quod quos repudiandae sit unde vitae!
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad iure natus neque, nihil quasi reiciendis sint temporibus ut. Accusantium dolores error et laudantium provident! Ab accusantium consequatur itaque sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi cum laudantium molestias, necessitatibus officia optio quam quibusdam quisquam velit? Delectus est officia quae ratione sequi sunt tenetur voluptas voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dolores esse est et ex, ipsam magni modi nostrum numquam pariatur perspiciatis quae quidem quis quisquam reprehenderit ut? Nulla, unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae eius eveniet hic minima quam quo quod tempora veniam. Distinctio harum laudantium maxime nesciunt possimus quaerat ratione reiciendis sit vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi consequatur dicta, doloremque esse fuga hic, illo iure magni modi obcaecati officia, officiis quam quod quos repudiandae sit unde vitae!
                </p>


            </div>
            <p>All pages: <Link to="/Blog"> Blog </Link>, <Link to="/Login"> Login page </Link>, <Link to="/"> Home page </Link></p>
        </>
    )
}

export default Home;