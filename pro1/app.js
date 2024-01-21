console.log(`Person1: Shows ticket`);
console.log(`Person2: Shows ticket`);
const promiseHusbandGetTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ticket');
    }, 3000);
  })

const getPopcorn = promiseHusbandGetTicket.then( (t) => {
    console.log(`wife: I have tickets.`);
    console.log(`wife: We should go in.`);
    console.log(`Husband: I am hungry.`);
    return new Promise( (resolve, reject) =>resolve(`${t} Popcorn`));
  })
// getPopcorn.then( (t)=>console.log(t));

  const getButter = getPopcorn.then( (t) => {

    console.log("wife: I got popcorn.");
    console.log(`wife: We should go in.`);
    console.log(`Husband: I need butter on my popcorn.`);
    return new Promise( (resolve, reject) =>resolve(`${t} Butter`));
  });

//   getButter.then( (t)=>console.log(t));
  const getColdDrinks = getButter.then( (t)=>{
    console.log("wife: I got tickets.");
    console.log(`wife: We should go in.`);
    console.log(`Husband: I need need coldDrinks.`);
    return new Promise( (resolve, reject) =>resolve(`${t} ColdDrinks`));
  })

  getColdDrinks.then( (t) =>{console.log(t)});
  console.log(`Person4: Shows ticket`);
  console.log(`Person5: Shows ticket`);

//============Async function starts from here/////

//   console.log(`Person1: Shows ticket`);
//   console.log(`Person2: Shows ticket`);
//   const prevMove = async () => {
//     const promiseHusbandGetTicket = new Promise((resolve, reject) => {
//       setTimeout(() => {resolve('ticket')}, 3000);
//     });
   
//     const getPopcorn = new Promise( (resolve, reject) =>resolve(`popcorn`));
//     const addButter = new Promise( (resolve, reject) =>resolve(`butter`));
//     // const getCandy = new Promise( (resolve, reject) =>resolve(`candy`));
//     // const getColdDrinks = new Promise( (resolve, reject) =>resolve(`coldDrinks`));


//     let ticket = await promiseHusbandGetTicket;
//     console.log(`wife: I have ${ticket}.`);
//     console.log(`wife: We should go in.`);
//     console.log(`Husband: I am hungry.`);

//     let popcorn =await getPopcorn;

//     console.log(`Wife: I have some ${popcorn}`);
//     console.log('wife: We should go in.');
//     console.log('Husband: I need some butter on my popcorn.');

//     let butter = await addButter;
//     console.log(`Wife: I have some ${butter}`);
//     console.log(`Wife: Any thing else`);
//     console.log('Husband: Lets go we are late.');
//     console.log(`Wife:Thank you for reminder.`);

//     return ticket;
//   };

//   prevMove().then( (m)=> console.log(`Person3: shows ${m}`));
//   console.log(`Person4: Shows ticket`);
//   console.log(`Person5: Shows ticket`);

 //===========Promise.All Starts here//////////

//   console.log(`Person1: Shows ticket`);
//   console.log(`Person2: Shows ticket`);

//     const prevMove = async () => {
//     const promiseHusbandGetTicket = new Promise((resolve, reject) => {
//       setTimeout(() => {reject('ticket')}, 3000);
//     });
//   const getPopcorn = new Promise( (resolve, reject) =>resolve(`popcorn`));
//   const addButter = new Promise( (resolve, reject) =>resolve(`butter`));
//   const getCandy = new Promise( (resolve, reject) =>resolve(`candy`));
//   const getColdDrinks = new Promise( (resolve, reject) =>resolve(`coldDrinks`));

//   let ticket;
//   try{
//     ticket = await promiseHusbandGetTicket;
//   }catch{
//     ticket = "Wife was Sad";
//   }

//   let ticket = await promiseHusbandGetTicket;
//   let [popcorn,butter,candy,coldDrinks] = await Promise.all([getPopcorn,addButter,getCandy,getColdDrinks]);
//     console.log(`${popcorn}, ${butter}, ${candy}, ${coldDrinks}`);
    // return ticket;
    // }
    // prevMove().then( (m)=> console.log(`Person3: shows ${m}`));
    // console.log(`Person4: Shows ticket`);
    // console.log(`Person5: Shows ticket`);

 


