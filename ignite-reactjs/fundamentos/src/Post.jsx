const Post = (props) => {
    console.log(props)

    return (
        <>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </>
    )
}

export default Post;