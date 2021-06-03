const breakingRecords = (scores) => {
    // Write your code here
    let final = [];
    let lowScores = 0;
    let highScores = 0;
    let currentHighScore = scores[0];
    let currentLowScore = scores[0]
    for(let i = 1; i < scores.length; i++) {
        if(scores[i] > currentHighScore) {
            highScores++;
            currentHighScore = scores[i];
        } else if(scores[i] < currentLowScore) {
            lowScores++;
            currentLowScore = scores[i];
        } else {
            continue;
        }
    }
    console.log(highScores, lowScores);
    final.push(highScores);
    final.push(lowScores);
    return final;
}
