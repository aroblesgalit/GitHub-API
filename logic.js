$(document).ready(function () {
       
    // Ajax  GET request
    $.ajax({
        url: "https://api.github.com/users/aroblesgalit/starred",
        method: "GET"
    })
        .then(function(result) {

            for (let i = 0; i < result.length; i++) {
                const starredRepo = result[i];

                $("#github-starred").append(
                    `
                    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                    <div class="uk-card-media-left uk-cover-container">
                        <img src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png" alt="Random GitHub image" uk-cover>
                        <canvas width="600" height="400"></canvas>
                    </div>
                    <div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title uk-margin-small-bottom">${starredRepo.name}</h3>
                            <p class="uk-text-meta uk-margin-remove-top">${starredRepo.updated_at}</time></p>
                            <p>${starredRepo.description ? `${starredRepo.description}` : "No description found."}</p>
                            <span class="uk-label">${starredRepo.language}</span>
                        </div>
                        <div class="uk-card-footer">
                            <a href="${starredRepo.html_url}" class="uk-button uk-button-text" target="_blank">GitHub</a> ${ starredRepo.homepage ? ` | <a href="${starredRepo.homepage}" class="uk-button uk-button-text" target="_blank">Deployed App</a>` : ""}
                        </div>
                    </div>
                </div>
                    `
                )

            }
        })
        .catch(function(err) {
            console.log(err);
        })
});