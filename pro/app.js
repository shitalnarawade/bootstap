
let post = [{title: 'POST1'}];
const createPostmain = async () => {
  const createPost = new Promise((resolve, reject) => {
    setTimeout(() => {
      const newPost = { title: `post${post.length + 1}` };
      post.push(newPost);
      resolve(newPost);
    }, 3000);
  });

  const updateTime = new Promise((resolve, reject) => {
    setTimeout(() => {
      let updateActTime1 = new Date();
      resolve(updateActTime1);
    }, 2000);
  });

  const lastUpdate = new Promise((resolve) => {
    setTimeout(() => {
      const lastActivityTime1 = new Date();
      resolve(lastActivityTime1);
    }, 1000);
  });
  const deletePost = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (post.length > 0) {
            let deletedPost = post.pop();
            resolve(deletedPost);
        } else {
            reject("ERROR");
        }
    }, 1000);
});
  

    const [createdPost, updatedTime, lastUpdated] = await Promise.all([createPost, updateTime,lastUpdate]); 
    return { createdPost, updatedTime, lastUpdate };
  } 
  

  createPostmain().then((createPost) => console.log(createPost));



  