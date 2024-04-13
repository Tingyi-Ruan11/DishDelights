import React, { useState } from "react";
import Image from "next/image";
// import Button from "../ui/button";
import RecipeList from "../../components/recipes/recipe-list";
import RecipeContent from "../../components/recipe-detail/recipe-content";
import styles from "./profile.module.css"; // 引入 CSS 模块
import { getAllRecipes } from "@/dummy-recipes";

export default function ProfilePage(props) {
  const [content, setContent] = useState(null);

  const reviewFavoriteRecipes = () => {
    // 这里调用设置状态以更新 RecipeList 显示收藏的菜谱
  };

  const reviewMyRecipes = () => {
    // 这里调用设置状态以更新 RecipeList 显示用户创建的菜谱
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <Image src="/favicon.ico" alt="User Avatar" width={100} height={100} />
      </div>
      <div className={styles.userInfo}>
        <div>
          <Image
            src="/favicon.ico"
            alt="User Avatar"
            width={100}
            height={100}
          />
        </div>
        <div>
          <p>Email: user@example.com</p>
          <p>Nickname: JohnDoe</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={reviewMyRecipes} className={styles.myButton}>
          查看我的菜谱
        </button>
        <button onClick={reviewFavoriteRecipes} className={styles.myButton}>
          查看收藏的菜谱
        </button>
        <button className={styles.myButton}>上传菜谱</button>
        <button className={styles.myButton}>修改密码</button>
      </div>
      <div className={styles.recipeList}>
        <RecipeList items={props.recipes} />
      </div>
    </div>
  );
}

// export default function ProfilePage(props) {
//   const [content, setContent] = useState(null);

//   const reviewFavoriteRecipes = () => {
//     // 这里调用设置状态以更新 RecipeList 显示收藏的菜谱
//   };

//   const reviewMyRecipes = () => {
//     // 这里调用设置状态以更新 RecipeList 显示用户创建的菜谱
//   };

//   return (
//     <div className={styles.profileContainer}>
//       <div className={styles.profile}>
//         <Image src="/favicon.ico" alt="User Avatar" width={100} height={100} />
//       </div>
//       <div className={styles.actions}>
//         <button onClick={reviewMyRecipes} class="my-button">查看我的菜谱</button>
//         <button onClick={reviewFavoriteRecipes} class="my-button">查看收藏的菜谱</button>
//         <button class="my-button">上传菜谱</button>
//         <button class="my-button">修改密码</button>
//       </div>
//       <div className={styles.recipeList}>
//         <RecipeList items={props.recipes}/>
//       </div>
//       <div className={styles.recipeContent}>
//         {/* {content && <RecipeContent />} */}
//       </div>
//     </div>
//   );
// }

export async function getStaticProps() {
  const recipes = await getAllRecipes();
  console.log(recipes);

  return {
    props: {
      recipes: recipes,
    },
    revalidate: 60,
  };
}

// ======================================================================

// import Image from 'next/image';
// import styles from './profile.module.css'; // 引入 CSS 模块

// export default function Profile() {
//     return (
//         <div className={styles.profilePage}>
//             <div className={styles.profileCard}>
//                 <div className={styles.avatar}>
//                     <Image src="/avatar.jpg" alt="Profile Avatar" width={100} height={100} />
//                 </div>
//                 <h1 className={styles.name}>John Doe</h1>
//                 <p className={styles.bio}>Digital nomad, lover of the internet, and amateur photographer. Exploring the intersection of technology and art.</p>
//                 <div className={styles.socialLinks}>
//                     <a href="#" className={styles.socialLink}>LinkedIn</a>
//                     <a href="#" className={styles.socialLink}>Twitter</a>
//                     <a href="#" className={styles.socialLink}>GitHub</a>
//                 </div>
//             </div>
//         </div>
//     );
// }
