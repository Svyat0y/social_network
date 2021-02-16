import React from 'react';
import classes from './MyPost.module.css';
import userAvatar from './img/user_avatar.svg';

const MyPost = () => {
    return (
            <div className={classes.myPosts_wrapper}>
                <div className={classes.img_wrapper}>
                    <img src={userAvatar} alt="avatar"/>
                </div>
                <div className={classes.myPost_description_wrapper}>
                    <p>hi all fucking loosers. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                        aspernatur corporis cupiditate deleniti dolorum earum eos, facilis incidunt itaque laudantium molestiae,
                        nihil nobis non numquam, quaerat quam quas quis quisquam ratione recusandae repellendus repudiandae
                        tempora! Ab expedita fuga, impedit inventore iste laborum officiis quam. Accusantium ad delectus
                        deleniti expedita facere fugiat id in, iure natus optio pariatur quas repudiandae saepe ut voluptatum. A
                        culpa cum et facere fugit incidunt iure, minus nesciunt perferendis perspiciatis quam quidem rem
                        reprehenderit sed similique sit voluptatibus? Accusamus amet animi dolor ducimus earum explicabo labore,
                        natus nisi perferendis porro quod reprehenderit saepe, temporibus voluptatem.
                    </p>
                    <span>like</span>
                </div>
            </div>
    );
}

export default MyPost;