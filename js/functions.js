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
                            <div class="time">${formatTime(post.time)}</div>
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

function formatTime( time ) {
    const sec = Math.round( (Date.now() - time) / 1000 );
    
    // Just now (0..4)
    if ( sec < 5 ) {
        return 'Just now';
    }

    // 5..59s ago
    if ( sec >= 5 && sec < 60 ) {
        return sec + 's ago'
    }

    // 1..59min ago
    const min = Math.floor( sec / 60 );
    if ( min >= 1 && min < 60 ) {
        return min + 'min ago';
    }

    // 1..23h ago
    const hrs = Math.floor( min / 60 );
    if ( hrs >= 1 && hrs < 24 ) {
        return hrs + 'h ago';
    }

    // 1..6d ago
    const d = Math.floor( hrs / 24 );
    if ( d >= 1 && d < 7 ) {
        return d + 'd ago';
    }

    // 1..4w ago
    const w = Math.floor( d / 7 );
    if ( w >= 1 && w < 4 ) {
        return w + 'w ago';
    }
    
    // 1..11 months ago
    const m = Math.floor( d / 30.4 );
    if ( m >= 1 && m < 12 ) {
        return m + ' months ago';
    }

    // 1.. years ago
    const y = Math.floor( d / 365.25 );
    return y + ' years ago';
}