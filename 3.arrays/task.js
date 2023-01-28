function compareArrays(arr1, arr2) {
  return arr1.every((item, index) => item === arr2[index]) && arr1.length === arr2.length;
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) {
    return 0
  };

  return users.reduce((acc, user, index, arr) => {
    if (user.gender === gender) {
      acc.avAge += user.age;
      acc.count += 1;
    }

    if (index === arr.length - 1) {
      if (acc.count === 0) {
        return 0;
      }
      return acc.avAge / acc.count;
    }

    return acc;
  }, {avAge: 0, count: 0})
}