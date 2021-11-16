/*step one
fetching the array of data from Api
iterating over the array
formatting with template scrings
rendering the data on page
*/

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })    



/*Step Two 
 *  added "submit" event to  form (when. button 'is 'clicked')
    *prevented refresh of teh page with 'preventDefault'
    consts set up for post-tile and post-body
    * title 'value' and body 'value'  - object added 
    * (with a "title" property and "body" property)
 * test this with console log aka log  the object to the console
*/

document.getElementById("new-post").addEventListener('submit', function(event){
    event.preventDefault();
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value

    const data = {
        title: postTitle,
        body: postBody
    }

    console.log(data)
 
})