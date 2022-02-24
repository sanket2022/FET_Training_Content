let display = () => {

    let collection: [string, number, string][] = [];

    collection.push(["Rudra", 101, "Mumbai"]);
    collection.push(["Aniket", 102, "Shrirampur"]);
    collection.push(["Prasad", 103, "Sangamner"]);
    collection.push(["Tejas", 104, "Shirdi"]);
    collection.push(["kanchan", 105, "Mumbai"]);

    console.log(typeof ("Rudra"));
    console.log(typeof (101));
    console.log(typeof ("Shirdi"));
    for (let i of collection) {
        console.log(i);
    }
}
display();