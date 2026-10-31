const mainn=document.getElementById('main')
const btn=document.getElementById('upload-btn')
const imgContainer=document.getElementById('img-container')

function image(url){
return new Promise((resolve,reject)=>{
    const img=document.createElement('img')
    img.src=url
    img.addEventListener('load',()=>{
        resolve(img)
    })
    img.addEventListener('error',()=>{
        reject('Something went wrong')
    })    
})
}

const imagesUrl=['https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400']


function h(url){
    let p=document.createElement('img')
    p.src='https://picsum.photos/600/400'
    return p
}

let arr=[h(),h()]


try{
async function nae(params) {
    let p=imagesUrl.map(e=>{
    return image(e)
})
const wait=await Promise.all(p)
for(let i of wait){
mainn.append(i)
}

imgContainer.remove()
}
btn.addEventListener('click',()=>{
    console.log('hello')
    nae()
})
}catch(e){
console.log(e)
}

