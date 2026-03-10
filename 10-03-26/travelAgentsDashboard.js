// The starting data
const holidayDestinations = [
  { locationName: "Maldives", vacationType: "beach", budget: 1200 },
  { locationName: "Tokyo", vacationType: "city", budget: 800 },
  { locationName: "Swiss Alps", vacationType: "nature", budget: 1500 },
  { locationName: "Bali", vacationType: "beach", budget: 900 },
  { locationName: "New York", vacationType: "city", budget: 1100 }
];

// Step 1 & 2: Write your formatDestination function here

const formatDestination = (destination) => {
    let tag;
    if (destination.vacationType === "beach") {
        tag = "[Beach Gataway]";
    }
    else if (destination.vacationType === "city") {
        tag = "[City Escape]";
    }
    else if (destination.vacationType === "nature") {
        tag = "[Nature Retreat]";
    }
    else {
        return "Invalid vacation type";
    }

    return `${tag} ${destination.locationName} $${destination.budget}`;
}

// Step 3: Use .map() to create your formattedBrochure array here

const formattedBrochure = holidayDestinations.map(formatDestination);

// Step 4: console.log your formattedBrochure array

console.log(formattedBrochure);

