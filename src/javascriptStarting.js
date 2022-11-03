function javaScriptApp(){

    const body = 'this is the body'
    const title = 'Blog Post'
    const commentsArray = [
        { id:1, text: 'Comment one' },
        { id:2, text: 'Comment two' },
        { id:3, text: 'Comment three' }
    ]

    const isLoading = false
    const showComments = true

    if (isLoading) return <h1>Loading...</h1>
    
    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            {/*This is the same as below*/}
            {showComments && 
            <div className="comments">
                <h3>Comments {commentsArray.length}</h3>
                <ul>
                    {commentsArray.map((comment,index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>}
            {/*The same as above*/}
           {showComments ? 
           <div className="comments">
           <h3>Comments {commentsArray.length}</h3>
           <ul>
               {commentsArray.map((comment,index) => (
                   <li key={index}>{comment.text}</li>
               ))}
            </ul>
            </div> 
       : 'Comments are hidden'} 

            
        </div>
            
    )
}

export default javaScriptStart