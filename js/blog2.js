let addCommentButton = document.querySelector('#addComment');
let commentSection = document.querySelector('#comments');
    
// let commentText = document.querySelector('input[type="text"]');

function addComment() {
    //Create Textarea and Reply Button
    let commentTextArea = document.createElement('textarea');
    commentTextArea.id = 'newCommentTextArea';
    commentSection.appendChild(commentTextArea);

    let commentContent = document.createElement('div');
    commentContent.id = 'commentTextContent';
    commentSection.appendChild(commentContent);

    let postButton = document.createElement('button');
    postButton.id = 'newPostButton';
    postButton.innerText = 'Post Comment';
    commentSection.appendChild(postButton);

    

    function getCommentContent() {
        //Add textarea text to div, remove textarea and postbutton, and create Reply button
        let value = commentTextArea.value;
        // alert(value);
        commentContent.innerHTML = `<p>${value}<p>`;
        commentTextArea.remove();
        postButton.remove();

        let replyButton = document.createElement('button');
        replyButton.id = 'newReplyButton';
        replyButton.innerText = 'Reply';
        commentSection.appendChild(replyButton);

        //Reply button calls addComment to add replies to comment
        replyButton.addEventListener('click', addComment);
    }
    postButton.addEventListener('click', getCommentContent);

}

addCommentButton.addEventListener('click', addComment);


//     let commentTextArea = document.createElement('textarea');
//     commentTextArea.id = 'newCommentTextArea';
//     // let commentInput = commentTextArea.value;
//     commentSection.appendChild(commentTextArea);
// //     // commentTextArea.appendChild(commentText);

//     let commentContent = document.createElement('div');
//     commentContent.id = 'commentTextContent';
//     commentSection.appendChild(commentContent);

    

  
    // postButton.addEventListener('click', getCommentContent);

// //Function that can take text from input
 
//  /**Add event listners - keydown */
//  commentText.addEventListener('keydown', getCommentText);
//  addCommentButton.addEventListener('click', getCommentText);
 
//  function getCommentText(e) {
//     //  console.log(`EVENT TYPE: ${e.type}`); // each time you type it will fire the event and increment counter 
 
//     //  /**Grab what is being typed i.e. the value */
//      console.log(commentInput);
 
//      //Add comment text to the commentContent div
//      commentContent.innerHTML = `<p>${e.target.value}<p>`;
//  }