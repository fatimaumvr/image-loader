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

try{
async function renderImages(urlArr) {
    let iterate=urlArr.map(e=>{
    return image(e)
})
const wait=await Promise.all(iterate)
for(let i of wait){
    let div=document.createElement('div')
    div.append(i)
    mainn.setAttribute('class','d')
mainn.append(div)
}

imgContainer.remove()
}
btn.addEventListener('click',()=>{
    console.log('hello')
    renderImages(imagesUrl)
})
}catch(e){
console.log(e)
}

