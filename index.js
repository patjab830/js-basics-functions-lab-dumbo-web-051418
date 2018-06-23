// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street)*264;
}

function distanceTravelledInFeet(street1, street2) {
  return Math.abs(street1 - street2)*264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  let fare = 0;
  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 400 && distance < 2000) {
    fare += 0.02*(distance-400);
  } else if (distance > 2000) {
    fare = 25;
  }
  return fare;
}
