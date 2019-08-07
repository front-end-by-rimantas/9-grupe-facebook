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
    let HTML = '',
        images = '',
        gallery = 0,
        galleryClass = '',
        more = '',
        bigText = '',
        background = '';

    if ( Array.isArray(data.photos) &&
         data.photos.length > 0 ) {
        data.photos.forEach( img => {
            if ( typeof(img) === 'string' &&
                 img.length >= 5 ) {
                if ( gallery < 4 ) {
                    images += `<div class="img" style="background-image: url(./img/${img});"></div>`;
                }
                gallery++;
            }
        });
    }

    if ( gallery > 0 ) {
        galleryClass = 'gallery-'+gallery;
    }
    if ( gallery > 4 ) {
        galleryClass = 'gallery-4';
        more = `<div class="more">+${gallery - 4}</div>`;
        images += more;
    }

    if ( typeof(data.text) === 'string' &&
         data.text.length < 40 &&
         gallery === 0 ) {
        bigText = 'big-text';
    }

    if ( typeof(data.background) === 'string' &&
         data.background.length > 0 ) {
        background = data.background;
    }

    HTML = `<div class="content ${background}">
                ${ typeof(data.text) === 'string' ? `<p class="${bigText}">${data.text}</p>` : '' }
                ${ images === '' ? '' : `<div class="gallery ${galleryClass}">${images}</div>` }
            </div>`;

    return HTML;
}