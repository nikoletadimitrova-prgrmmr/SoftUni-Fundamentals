function vacation(people, group, day) {
    let price = 0;
    let discount = 0;
    let total = 0;
    let payningPeople = 0;

    switch (day) {
        case 'Friday':
            if (group === 'Students') {

                if (people >= 30) {
                    price = 8.45 * people;
                    discount = price * 0.15;
                    total = price - discount;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    price = 8.45 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }

            if (group === 'Business') {

                if (people >= 100) {
                    payningPeople = people - 10;
                    price = (10.90 * payningPeople);
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    price = 10.90 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }

            if (group === 'Regular') {

                if (people >= 10 && people <= 20) {
                    price = (15 * people);
                    discount = price * 0.05;
                    total = price - discount;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    price = 15 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }
            break;

        case 'Saturday':
            if (group === 'Students') {


                if (people >= 30) {
                    price = 9.80 * people;
                    discount = price * 0.15;
                    total = price - discount;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    price = 9.80 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }

            if (group === 'Business') {


                if (people >= 100) {
                    payningPeople = people - 10;
                    price = (15.60 * payningPeople);
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    price = 15.60 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }

            if (group === 'Regular') {

                if (people >= 10 && people <= 20) {
                    price = (20 * people);
                    discount = price * 0.05;
                    total = price - discount;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    price = 20 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }
            break;

        case 'Sunday':
            if (group === 'Students') {

                if (people >= 30) {
                    price = (10.46 * people);
                    discount = price * 0.15;
                    total = price - discount;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    price = 10.46 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }

            if (group === 'Business') {

                if (people >= 100) {
                    payningPeople = people - 10;
                    price = (16 * payningPeople);
                    console.log(`Total price: ${price.toFixed(2)}`);
                } else {
                    price = 16 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }

            if (group === 'Regular') {

                if (people >= 10 && people <= 20) {
                    price = (22.50 * people);
                    discount = price * 0.05;
                    total = price - discount;
                    console.log(`Total price: ${total.toFixed(2)}`);
                } else {
                    price = 22.50 * people;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }
            }
            break;
    }
}
vacation(40,

    "Regular",
    
    "Saturday")