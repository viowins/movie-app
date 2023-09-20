const ageHandle = (birthDate) => {
  const today = new Date();
  const birthDateArray = birthDate.split("-");
  const birthYear = parseInt(birthDateArray[0]);
  const birthMonth = parseInt(birthDateArray[1]) - 1;
  const birthDay = parseInt(birthDateArray[2]);

  let age = today.getFullYear() - birthYear;

  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }
  return age;
};

const formatDate = (inputDate) => {
  const dateParts = inputDate.split("-");
  if (dateParts.length === 3) {
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    
    return `${day}/${month}/${year}`;
  }
}

export { ageHandle, formatDate }