import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  candidates: [
    {
      id: 1,
      name: "Ajay Kumar Bhagat",
      email: "ajayuideveloper2012@gmail.com",
      contact: "+91 9654006199",
      position: "Frontend UI Developer",
      status: "Shortlisted",
      resume: "/resume.pdf",
      avatar: "/ajay.jpg",
      experience: [
        {
          employer: "Great Champ Technology",
          duration: "Jan 2019 to Present",
          position: "Frontend UI Developer",
          responsibilities: "Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites."
        },
        {
          employer: "Absas Solutions pvt. ltd",
          duration: "March 2015 to December 2018",
          position: "Web Designer",
          responsibilities: "Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites."
        }
      ]
    },
    {
      id: 2,
      name: "Neetika Singh",
      email: "Neetika@yopmail.com",
      contact: "+91 9654006199",
      position: "UI Developer",
      status: "In Review",
      resume: "/resume.pdf",
      avatar: "/neetika.jpg",
      experience: [
        {
          employer: "Great Champ Technology",
          duration: "Jan 2019 to Present",
          position: "UI Developer",
          responsibilities: "Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites."
        },
        {
          employer: "Absas Solutions pvt. ltd",
          duration: "March 2015 to December 2018",
          position: "Web Designer",
          responsibilities: "Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites."
        }
      ]
    },
    {
      id: 3,
      name: "Sonam Kumari",
      email: "sonam1997@gmail.com",
      contact: "+91 9654006199",
      position: "Php Developer",
      status: "On Hold",
      resume: "/resume.pdf",
      avatar: "/sonam.jpg",
      experience: [
        {
          employer: "Tech Mahindra",
          duration: "Jan 2019 to Present",
          position: "Php Developer",
          responsibilities: "Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites."
        },
        {
          employer: "Absas Solutions pvt. ltd",
          duration: "March 2015 to December 2018",
          position: "Php Developer",
          responsibilities: "Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites."
        }
      ]
    },
    {
      id: 4,
      name: "Arvind Kejriwal",
      email: "arvindkejriwal@gmail.com",
      contact: "+91 404040404",
      position: "Full Stack Developer",
      status: "Not Chosen",
      resume: "/resume.pdf",
      avatar: "/arvind.jpg",
      experience: [
        {
          employer: "New Delhi Technology",
          duration: "Jan 2019 to Present",
          position: "Full Stack Developer",
          responsibilities: "Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites."
        },
        {
          employer: "Hariyana Solutions pvt. ltd",
          duration: "March 2015 to December 2018",
          position: "Web Designer",
          responsibilities: "Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites."
        }
      ]
    },
  ],
  loading: false,
  error: null
};

const candidateSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    // Add reducers if needed for future functionality
  }
});

export default candidateSlice.reducer;