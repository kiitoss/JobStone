





// function generate_fake_post() {
//   for (let i=0; i<10; i++) {
//     let nP = new PostHtml(genere_random_post(), genere_random_user(), genere_random_category(), 0);

//     document.getElementById("list-posts").appendChild(nP.htmlObject);
//   }
// }




// function update_posts() {
//   RM.getAllPosts(posts => {
//     posts.forEach(post => {
//       RM.getUserById(post.idOwner, owner => {
//         RM.getCategoryById(post.idCategory, category => {
//           const new_html_post = new PostHtml(post, owner, category, 0);
//           document.getElementById("list-posts").appendChild(new_html_post.htmlObject);
//         })
//       })
//     })
//   })
// }


// update_posts();



