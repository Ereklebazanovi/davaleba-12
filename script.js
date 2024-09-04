let yourAge = prompt('Enter your age');

     let movieType = prompt ('Enter movie type (regular or 3D):');

     let timeOfDay = prompt ('Enter time of day (matinee or evening): ');

    let discount = prompt ('Do you have a discount? (yes or no)');




        let price = 0;

        


        switch (true){

            case yourAge < 10:
            price += 5;
            console.log('ფასი არის ' +price)
            break;




            case yourAge > 10 && yourAge < 65:
            price += 15;
            console.log('ფასი არის ' + price)
            break;
           
            case yourAge > 65:
            price +=10;
            console.log('ფასი არის '+ price)
            break;

        }


        switch(movieType){

            case '3D':
            price = price+5;
            console.log('ფასი არის ' + price)
            break;
            default:
            price = price;
            console.log('ფასი არის ' + price)
        }

        switch(timeOfDay){

            case 'evening':
            price = price+5;
            console.log('ფასი არის ' + price)
            break;
            default:
                price = price;
            console.log('ფასი არის '+price)


        }

        if (discount === 'yes') {
            price -= 5;
            }

        console.log('ფასი არის '+ price);