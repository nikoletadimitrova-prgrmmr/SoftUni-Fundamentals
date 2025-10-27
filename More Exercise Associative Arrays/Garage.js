function garage(arr) {
    // 1. Създаваме структура за съхранение на гаражи (ключ: номер на гараж, стойност: масив от коли)
    let garages = {};

    // 2. Обхождаме всеки ред от входа
    for (let entry of arr) {
        // 2.1 Разделяме входа на номер на гараж и информация за кола
        let [garageNumber, carInfo] = entry.split(' - ');

        // 2.2 Ако гаражът още не съществува, го създаваме
        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }

        // 2.3 Добавяме информацията за колата към съответния гараж
        garages[garageNumber].push(carInfo);
    }

    // 3. Принтираме резултата във желания формат
    for (let garage in garages) {
        console.log(`Garage № ${garage}`);
        for (let car of garages[garage]) {
            // Преобразуваме `key: value` в `key - value`
            let formattedCar = car.split(', ').map(kv => kv.replace(': ', ' - ')).join(', ');
            console.log(`--- ${formattedCar}`);
        }
    }

}
garage(['1 - color: blue, fuel type: diesel', 
    '1 - color: red, manufacture: Audi', 
    '2 - fuel type: petrol', 
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])