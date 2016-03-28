
function processJSONData(itemList, jsonData) {

    var itemBlockStyle = '"col-lg-2 col-md-4 col-sm-6 col_xs-12"';
    var imgPlaceHolder = "images/ajax-loader_b.gif";

    var clFix_xs = "clearfix visible-xs-block";
    var clFix_sm = "clearfix visible-sm-block";
    var clFix_md = "clearfix visible-sm-block";
    var clFix_lg = "clearfix visible-sm-block";

    var count_clFix_xss = 1;
    var count_clFix_xs = 2;
    var count_clFix_sm = 3;
    var count_clFix_md = 4;
    var count_clFix_lg = 6;

    // Loop through the flickr json response
    $(jsonData.items).each(function (i, item) {
        // Create a new figure element with an img element with:
        //     - class "lazy"
        //     - the current src as a loding gif
        //     - the data-src with the real flickr image path
        // Create a figcaption element with the image title


        itemList +=
                '<div class=' + itemBlockStyle + '>' +
                '<figure>' +
                '<div class="imgWrap">' +
                //                            '<img class="lazy" src="images/ajax-loader_b.gif" data-src="' + item.media.m + '"/>' +
                '<img src=' + item.media.m + '/>' +
                '</div>' +
                '<figcaption>' + item.title + '</figcaption>' +
                '</figure>' +
                '</div>';

        //if ((i % count_clFix_xs) === 0)

    });

    if (itemList == '') {
        $(".container-fluid").html("Error");
    } else {

        // Append the newly created element list
        $(".container-fluid").append("<div class='row'></div>");
        $(".row").append(itemList);

        // Wrap every three elements in a div row for scaffolding purposes
        //        var $images = $(".container .col-md-4");
        //        for (var i = 0; i < $images.length; i += 3) {
        //            $images.slice(i, i + 3).wrapAll("<div class='row'></div>"); // .slice([start, end))
        //        }

        // Wrap image elements in div row
        //        $images.wrapAll("<div class='row'></div>");

        // After the flickr response call the lazyLoadImage function
        //        lazyLoadImage();
}




