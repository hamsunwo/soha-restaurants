document.getElementById('randomButton').addEventListener('click', function() {
    var riceFoods = [
        "토마토 김밥", "이바돔 감자탕", "맛나 감자탕", "Just Katsu", "기찬스시", "이자와"
    ];

    var noodleFoods = [
        "국수나무", "고구려 짬뽕", "돈카냉면 & 파스타", "마로따 마라탕", "사이공 쌀국수"
    ];

    var snackFoods = [
        "건강김밥", "든든김밥", "토마토김밥", "죠스떡볶이", "신전떡볶이", "청년다방"
    ];

    var fastFoods = [
        "맘스터치", "맥도날드"
    ];

    var allFoods = [].concat(riceFoods, noodleFoods, snackFoods, fastFoods);

    var selectedFood;
    var foodType = document.querySelector('input[name="foodType"]:checked').value;

    if (foodType === "random") {
        selectedFood = allFoods[Math.floor(Math.random() * allFoods.length)];
    } else if (foodType === "rice") {
        selectedFood = riceFoods[Math.floor(Math.random() * riceFoods.length)];
    } else if (foodType === "noodles") {
        selectedFood = noodleFoods[Math.floor(Math.random() * noodleFoods.length)];
    } else if (foodType === "snack") {
        selectedFood = snackFoods[Math.floor(Math.random() * snackFoods.length)];
    } else if (foodType === "fastfood") {
        selectedFood = fastFoods[Math.floor(Math.random() * fastFoods.length)];
    }

    document.getElementById('result').innerText = "오늘의 추천 음식점은 " + selectedFood + "입니다!";
});
