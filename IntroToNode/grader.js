function average (arr){
    var sum = 0;
    arr.forEach(function(score){
        sum += score;
    });
    
    var avg = sum/arr.length;
    console.log(Math.round(avg));
}

var scores = [10, 19, 21];
average(scores);