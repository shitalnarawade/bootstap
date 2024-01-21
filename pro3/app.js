console.log("Hello")
let post = [{title : "POST1"}];

function createdPost(){
   return new Promise((resolve, reject)=>{
      setTimeout( ()=>{
        const newPost = { title: `POST ${post.length + 1}` };
         post.push(newPost);
        resolve(newPost);
      }, 1000);
   })
}


createdPost().then((newPost) => {
    console.log('New Post:', newPost);
  });
