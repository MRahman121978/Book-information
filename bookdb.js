// --------------Search information Loading-------------

const searchBook=()=>{
    const searchField=document.getElementById('search_field');
    const errorMessage=document.getElementById("error_msg");
    const searchText=searchField.value;
    searchField.value='';

    //  document.getElementById("Error_msg").style.display="none";
      if (searchText === '') {   
        const div= document.createElement('div');
         div.innerHTML=`
         <div>
        <p class="text-center text-danger fs-2"> !! Please Type your book name!!</p>
        </div>
         `;
         errorMessage.appendChild(div);
         
        
      }
    
      else {
        

    const url_1=`https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url_1)
    .then(res=>res.json())
    .then(data=>displaySearch(data))
    document.getElementById("error_msg").innerHTML="";
   }
}
// -----------Search Result-----------
const displaySearch=(data)=>{
    const searchResultInput=document.getElementById('search-result');
    searchResultInput.textContent='';
    const searchBookDetails=(data.docs);
    searchBookDetails.forEach(searchResult=>{
// --------------Search items-------------------------
    const bookCoverImage=searchResult.cover_i;
    const bookName=searchResult.title;
    const firstPublish=searchResult.first_publish_year;
    const publishDate=searchResult.publish_date;
    const author_name=searchResult.author_name;
    const publisher=searchResult.publisher;
    // -----------Loading HTML inner content----------------------
    const div = document.createElement('div');
    div.classList.add('col');
        div.innerHTML = `
        <div  class="card h-100">
                <div class="card-body">
                <img src="https://covers.openlibrary.org/b/id/${bookCoverImage}-M.jpg" class="card-img-top" alt="...">
                <h5 class="card-title">Book Name: ${bookName}</h5>
                <h5 class="card-title">Author Name: ${author_name}</h5>
                <h5 class="card-title">Publisher Name: ${publisher}</h5>
                <h5 class="card-title">First Publish Year: ${firstPublish}</h5>
                <h5 class="card-title">Publish Date: ${publishDate}</h5>
                </div>
            </div>
            `;
    searchResultInput.appendChild(div);
    
})

}
