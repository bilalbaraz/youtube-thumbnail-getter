export let Youtube = (function () {

    let video, results;

    let getThumb = function (url) {
        if (url === null) {
            return '';
        }
        results = url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? url : results[1];

        return 'http://img.youtube.com/vi/' + video + '/hqdefault.jpg';
    };

    return {
        thumb: getThumb
    };
}());