var display = function () {
    var collection = [];
    collection.push(["Rudra", 101, "Mumbai"]);
    collection.push(["Aniket", 102, "Shrirampur"]);
    collection.push(["Prasad", 103, "Sangamner"]);
    collection.push(["Tejas", 104, "Shirdi"]);
    collection.push(["kanchan", 105, "Mumbai"]);
    console.log(typeof ("Rudra"));
    console.log(typeof (101));
    console.log(typeof ("Shirdi"));
    for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
        var i = collection_1[_i];
        console.log(i);
    }
};
display();
