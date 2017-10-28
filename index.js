// Code your solution in this file!

function distanceFromHqInBlocks(distance){
 return distance > 42 ? distance - 42 : 42 - distance;
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end){
  if (start < end){
    return (end - start)* 264;
  } else{
    return (start - end) * 264;
  }
}

function calculatesFarePrice(start, end){
  const distanceFeet = distanceTravelledInFeet(start, end)
  if (distanceFeet > 2500){
      return 'cannot travel that far';
  } else if (distanceFeet > 2000){
    return 25;
  } else if (distanceFeet > 400){
    return distanceFeet * .02;
  } else {
    return 0
  }
}
