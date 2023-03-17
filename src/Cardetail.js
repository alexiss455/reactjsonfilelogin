const cars = [
    {
        model: "Honda Civic",
        coloursByPopularity: [
             "black", "sliver",{ goodcolors: [ "violet", "green", "magenta" ] } ],
        speedStats: {
            topSpeed: [100, 120, 130, 140, 150],
            zeroToSixty: 8.5
        }
    },
    {
        model: "Tesla Model 3",
        coloursByPopularity: [ "red", "white", { goodcolors: [ "gray", "black", "orange" ] } ],
        speedStats: {
            topSpeed: [100, 120, 130, 140, 150],
            zeroToSixty: 3.2
        }
    }
];

export default cars;
