const next=document.querySelector('#load_next')
const previous=document.querySelector('#load_previous')
const pageNumber=document.querySelector('.page-no')
const listData=document.querySelector('.data-list')
let currentPage=0;

async function apiData(currentPage){
    let res=await fetch( `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`)
    const data= await res.json()
    return data
}

async function displayData(currentPage){
    let returnedData=await apiData(currentPage)
    let names=''
    returnedData.forEach(element => {
        names+=`<li>${element.title}</li>`
    });

    listData.innerHTML=names
    pageNumber.innerHTML=`Page Number: ${currentPage}`
}

next.addEventListener('click', ()=>{
    console.log('next hit')
    currentPage++;
    displayData(currentPage)
})

previous.addEventListener('click', ()=>{
    console.log('previous hit');
    if (currentPage > 1) {
        currentPage--;
        displayData(currentPage);
      }
})