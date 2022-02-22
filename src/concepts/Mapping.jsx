const Mapping = () => {

  const title = "Many to many"
  const body = "Interactivity"

  const comments = [
    {id:1, body: "comment 1"},
    {id:2, body: "comment 2"},
    {id:3, body: "comment 3"}
  ]

  const showComments = true
  // const loading = true
  // if (loading === true){
  //   return <h3>Loading...</h3>
  // } 
  return ( 
    <>
      <h1>{body}</h1>
      <h2>{title}</h2>

      {showComments && (
        <div>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index)=>(
            <li key={index}>{comment.body}</li>
          ))}
        </ul>
        </div>
      )}

      {/* {showComments ? (
        <div>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index)=>(
            <li key={index}>{comment.body}</li>
          ))}
        </ul>
        </div>
      ):(null) }     */}
      
    </>
   );
}
 
export default Mapping;