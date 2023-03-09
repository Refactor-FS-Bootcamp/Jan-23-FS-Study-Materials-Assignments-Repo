import React, { useEffect, useRef } from 'react'

const RefsDemo = () => {
    const userRef = useRef();
    const commentRef = useRef();

    useEffect(() => {
        userRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userRef.current.value);
        console.log(commentRef.current.value);
    }

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user">Username </label>
                    <input type="text" id="user" ref={userRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" ref={commentRef}></textarea>
                </div>
                <br />
                <input type="submit" value="Send" />
            </form>
    )
}

export default RefsDemo