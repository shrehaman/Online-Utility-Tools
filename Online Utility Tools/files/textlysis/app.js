function getUniqueWordCount(textArr) {
    var uniqueWords = new Set(textArr);
    return uniqueWords.size;
}

function averageLength(textArr) {
    var lengthArr = textArr.join("").length;
    return lengthArr / textArr.length;
}

function makeResults(userText) {
    var textArr = userText.toLowerCase().match(/\b[^\s]+\b/g).sort();

    var wordCount = textArr.length;
    var uniqueWordCount = getUniqueWordCount(textArr);
    var averageWordLength = averageLength(textArr);

    var textReport = $('.text-report');
    textReport.find('.js-word-count').text(wordCount);
    textReport.find('.js-unique-word-count').text(uniqueWordCount);
    textReport.find('.js-average-word-length').text(averageWordLength);

    textReport.removeClass('hidden');
}

function submitForm() {
    $('.js-form').submit(function(event) {
        event.preventDefault();
        var userText = $(this).find('#user-text').val();
        makeResults(userText.replace(/\r?\n|\r/g, ""));
    });
}

$(document).ready(function() {
    submitForm();
});