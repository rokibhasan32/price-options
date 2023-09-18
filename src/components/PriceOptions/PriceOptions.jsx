import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio and weightlifting areas",
              "Locker room access",
              "Unlimited gym usage",
              "No commitment - month-to-month",
              "Fitness assessment and goal setting",
              "Discounts on personal training sessions"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to all gym facilities, including pool and sauna",
              "Locker with towel service",
              "Unlimited group fitness classes",
              "No commitment - month-to-month",
              "Monthly one-on-one personal training session",
              "Nutritional counseling"
            ]
          },
          {
            "id": 3,
            "name": "Annual Membership",
            "price": 399.99,
            "features": [
              "Access to all gym facilities",
              "Locker with towel service",
              "Unlimited group fitness classes",
              "12-month commitment with discounted rate",
              "Quarterly fitness assessments",
              "Free access to exclusive member events"
            ]
          },
          {
            "id": 4,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
              "Access to cardio and weightlifting areas",
              "Locker room access",
              "Valid student ID required",
              "No commitment - month-to-month",
              "Student-only fitness classes",
              "Academic calendar promotions"
            ]
          }
        ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;