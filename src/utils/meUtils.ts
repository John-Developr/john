
export const Age = () => {
    const birthYear = 1999;
    const birthMonth = 7;
    const birthDay = 14;
  
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Adding 1 because months are zero-based
    const currentDay = today.getDate();
  
    let age = currentYear - birthYear;
  
    // Adjust age based on the birth month and day
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
  
    return age;
};  

export const myResumeEmbedURL = "https://www.canva.com/design/DAFl3W_qSJU/view?embed";
export const myResumeFilePath = "/files/John Carlo A. Ylanan - Resume.pdf";

export const myName = {
    fname: "John Carlo",
    mname: "Amistad",
    lname: "Ylanan"
};

export const myPersonalAndWorkEmail = "johncarlo.fullstackdev@gmail.com";