let addCommentButton = document.querySelector('#addComment');
let commentSection = document.querySelector('#comments');
// let postButton = document.querySelector('#newPostButton');
let blogPost = document.querySelector('.blogPost');
let footer = document.querySelector('.footer');
// let commentTextInput = document.querySelector('.commentText');

function newComment() {
    let commentTextArea = document.createElement('textarea');
    commentTextArea.id = 'newCommentTextArea';
    commentSection.appendChild(commentTextArea);
    // commentTextArea.appendChild(commentTextInput);

    // footer.insertBefore(commentTextArea, blogPost);

    let postButton = document.createElement('button');
    postButton.id = 'newPostButton';
    postButton.innerText = 'Post Comment';
    commentSection.appendChild(postButton);
    
    
    function postComment() {
        console.log('successfully add a click type event listener to the demo button');
        let commentText = document.querySelector('input[type="text"]');
        commentText.addEventListener('keydown', postComment);
        commentTextArea.appendChild(commentText);
        commentText = commentTextArea.value;

        console.log(`EVENT TYPE: ${commentText.type}`); 
        
        //Create div for comment content    
        let commentContent = document.createElement('div');
        commentContent.id = 'commentTextContent';
        // commentContent = document.querySelector('input[type="text"]');
        commentSection.appendChild(commentContent);
        
        console.log(commentContent);

        //Add node with comment text content to the DOM in the commentTextContent div
        commentContent.innerHTML = `<p>${commentContent.value}<p>`;

        //Create the reply button
        let replyButton = document.createElement('button');
        replyButton.id = 'newReplyButton';
        replyButton.innerText = 'Reply';
        commentSection.appendChild(replyButton);

        //Remove textarea and post button
        commentTextArea.remove();
        postButton.remove();

        //Reply Button Funnction
        function replyComment() {
            //Create the textarea and post button again
            let commentTextArea = document.createElement('textarea');
            commentTextArea.id = 'newCommentTextArea';
            commentSection.appendChild(commentTextArea);
            // commentTextArea.appendChild(commentText);

            let postButton = document.createElement('button');
            postButton.id = 'newPostButton';
            postButton.innerText = 'Post Comment';
            commentSection.appendChild(postButton);
            postButton.addEventListener('click', postComment);

        }

        replyButton.addEventListener('click', replyComment);

    }

    postButton.addEventListener('click', postComment);

    

}

addCommentButton.addEventListener('click', newComment);



// commentText.addEventListener('keydown', postComment);
   //Update DOM with contents of comment
// let commentText = document.querySelector('input[type="text"]');



// function postComment(e) {

//     let commentContent = document.createElement('div');
//     commentContent.id = 'commentTextContent';
//     commentContent = document.querySelector('input[type="text"]');
//     commentSection.appendChild(commentContent);

//     document.getElementById('#newCommentTextArea').value;

//     console.log(e.commentTextArea.value);
//     commentContent.innerHTML = `<p>${e.commentTextArea.value}<p>`;

//     const replyButton = document.createElement('button');
//     replyButton.id = 'newReplyButton';
//     replyButton.innerText = 'Reply';
//     commentContent.appendChild(replyButton);
// }

// postButton.addEventListener('click', postComment);
