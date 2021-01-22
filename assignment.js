// Assignment starts

/******************************************
 Kilometer to Meter Function
******************************************/

// Start

function kilometerToMeter(km) {
    if (km < 0 || typeof (km) == 'string') {

        return "Distance can not be negative or string"; // To show error message for invalid input (One method)

    } else {

        // 1 km = 1000m
        var meter = km * 1000;
        return meter;
    }

}

// End

/******************************************
 Budget Calculator Function
******************************************/
// Given value: price of watch = $50, phone = $100, laptop = $500

// Start

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {

        console.log("Number of item can not be negative"); // To show error message for invalid input (another method)
        return ''; //instead of showing invalid it will return empty string
    }

    var totalBudget = watch * 50 + phone * 100 + laptop * 500;
    return totalBudget;
}

// End

/******************************************
 Hotel Cost Function
******************************************/
// Given value: rent for each night: first 10 days = $100, second 10 days = $80, rest of the days = $50

// Start

function hotelCost(daysNumber) {
    if (daysNumber < 0) {
        return 'Number of days can not be negative'; //Error message for invalid input
    } else {

        if (daysNumber <= 10) {
            totalCost = daysNumber * 100; //cost of total days
            return totalCost;
        } else if (daysNumber <= 20) {
            firstCost = 10 * 100; //cost of first 10 days
            var remainingDays = daysNumber - 10;
            secondCost = remainingDays * 80; //cost of rest of the days
            totalCost = firstCost + secondCost;
            return totalCost;
        } else {
            firstCost = 10 * 100; //cost of first 10 days
            secondCost = 10 * 80; //cost of second 10 days
            var remainingDays = daysNumber - 20;
            thirdCost = remainingDays * 50; //cost of rest of the days
            totalCost = firstCost + secondCost + thirdCost;
            return totalCost;
        }
    }
}

//End

/******************************************
 Function for finding biggest name
******************************************/

//Start

function megaFriend(friendsName) {
    for (var i = 0; i < friendsName.length; i++) {

        if (friendsName[i] == '' || friendsName[i] == ' ') {
            return 'Name can not be an empty value or just a space.';
            //name can be a number(like for robot or machine) but can not be just empty. So, empty string will give error
        }

        //if name is not empty, function will come here
        else {

            var longestName = friendsName[0];
            for (var j = 0; j < friendsName.length; j++) {
                if (friendsName[j].length > longestName.length) {
                    longestName = friendsName[j]
                }
            }
        }

    }

    return longestName;
}

//End

// Assignment ends