console.log("Person 1 shows ticket")
console.log("Person 2 shows ticket")

async function showMovie(){
    const wifeBringsTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ticket")
        },1000)
    })

    const getPopCorn=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Yello Popcorn')
        },1000)
    })

    const getButter=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Butter')
        },1000)
    })

    const getColdDring=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Sprite Cold Drink")
        },1000)
    })


    let ticket=await wifeBringsTicket;

    // console.log(`Wife brings ${ticket}`)
    // console.log("Husband : Let go for Movie")
    // console.log("Wife :- I am hungry ")

    // let popCorn=await getPopCorn;

    // console.log(`Husband brings ${popCorn}`)
    // console.log("Husband :- Let's go for Movie")
    // console.log("Wife : - I need some butter")

    // let butter=await getButter;

    // console.log(`Husband brings ${butter}`)
    // console.log("Husband :- Let's go for Movie")
    // console.log("Wife :- I need cold Drink")

    // let coldDrink=await getColdDring;

    // console.log(`Husband brings ${coldDrink}`)
    // console.log("Husband :- Let's go for movie")
    // console.log("Wife :- Okay let's goo")


    const [popCorn,butter,coldDrink]=await Promise.all([getPopCorn,getButter,getColdDring])

    console.log(`${popCorn} ${butter} ${coldDrink}`)

    return ticket;
}

showMovie().then((x)=>{
    console.log('Person 3  shows'+x)
})





console.log("Person 4 shows ticket")
console.log("Person 5 shows ticket")