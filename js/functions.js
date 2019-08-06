"use strict";

function generatePosts( data ) {
    const target = document.querySelector('#feed');
    let HTML = '';

    // generuojame HTML: ciklas per duomenis -> HTML
    data.forEach( post => {
        HTML += `<div class="post">
                    <header>
                        <img src="./img/users/${post.author.photo}" alt="User photo">
                        <div class="texts">
                            <div class="title">${post.author.name}</div>
                            <div class="time">${post.time} ago</div>
                        </div>
                        <i class="fa fa-ellipsis-h"></i>
                    </header>
                    ${ generateContent( post.content ) }
                    <div class="interactions">
                        ${ generateInteractions( post.interactions ) }
                    </div>
                    <div class="comment-form">
                        <img src="#" alt="My photo">
                        <div class="form">
                            <textarea></textarea>
                            <div class="icons">
                                <i class="fa fa-globe"></i>
                                <i class="fa fa-globe"></i>
                                <i class="fa fa-globe"></i>
                                <i class="fa fa-globe"></i>
                            </div>
                        </div>
                    </div>
                </div>`
    });

    // iklijuojame sugeneruota HTML
    target.insertAdjacentHTML('beforeend', HTML);

    // sudedame ant nauju post'u event listener
    //....

    return;
}

function generateInteractions( data ) {
    let HTML = '',
        likes = 0,
        comments = 0;
    
    if ( data !== undefined ) {
        if ( data.liked_person_ids !== undefined ) {
            likes = data.liked_person_ids.length;
        }
        if ( data.comment_ids !== undefined ) {
            comments = data.comment_ids.length;
        }
    }
    
    HTML = `<div class="action">
                <i class="fa fa-thumbs-o-up"></i>
                <span>Like${likes > 0 ? ` (${likes})` : ''}</span>
            </div>
            <div class="action">
                <i class="fa fa-comment-o"></i>
                <span>Comment${comments > 0 ? ` (${comments})` : ''}</span>
            </div>`;

    return HTML;
}

function generateContent( data ) {
    let HTML = '';

    HTML = `<div class="content">
                ${ typeof(data.text) === 'string' ? `<p>${data.text}</p>` : '' }
                NUOTRAUKOS
            </div>`;

    return HTML;
}