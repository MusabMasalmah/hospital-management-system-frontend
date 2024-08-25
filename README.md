Hospital Management Front-End
=============================

Overview
--------

This is the front-end application for the Hospital Management System, built using Angular, TypeScript, HTML, and CSS. It provides an intuitive user interface for interacting with the backend RESTful APIs to manage hospital-related data, including doctors, patients, medications, specializations, and appointments.

The backend repository can be found [here](https://github.com/MusabMasalmah/Hospital-Management-APIs.git).


Features
--------

*   **Doctor Management**: View, add, and update doctor information, including assigning specializations.
*   **Patient Management**: Manage patient data, assign doctors and medications, and update patient records.
*   **Medication Management**: View and manage available medications.
*   **Specialization Management**: Manage and view specializations.
*   **Appointment Management**: Schedule, view, and update appointments.
*   **Responsive Design**: Adaptable to different screen sizes for usability across devices.


Technology Stack
----------------

*   **Frontend Framework**: Angular
*   **Language**: TypeScript, HTML5, CSS3
*   **UI Components**: Angular Material 



Video Demonstration
-------------------

To better understand the functionality and user experience, please watch the video demonstration:



Installation
------------

### Prerequisites

Ensure you have the following installed:

*   Node.js (v14 or later)
*   Angular CLI (v12 or later)



### Setup

1.  Clone the repository:
    
    bash
    
    Copy code
    
    `git clone https://github.com/MusabMasalmah/hospital-management-system-frontend.git
    cd hospital-management-system-frontend` 
    
2.  Install the dependencies:
    
    bash
    
    Copy code
    
    `npm install` 
    
3.  Set up environment variables to connect with the backend API. This can be done in the `src/environments/environment.ts` file:
    
    typescript
    
    Copy code
    
    `export const environment = {
      production: false,
      apiUrl: 'http://localhost:8080'  // Replace with the actual backend URL
    };` 
    
4.  Start the application:
    
    bash
    
    Copy code
    
    `ng serve` 
    
    Open your browser and navigate to `http://localhost:4200/` to interact with the application.
    



Project Structure
-----------------

*   **`src/app`**: Main application files, including components, services, and modules.
*   **`src/assets`**: Static assets such as images, fonts, etc.
*   **`src/styles`**: Global styles used across the application.
*   **`src/environments`**: Environment-specific configurations.




API Integration
---------------

This front-end application communicates with the backend RESTful APIs for data management. For detailed API documentation, refer to the backend project [here](https://github.com/MusabMasalmah/Hospital-Management-APIs.git).





Contributing
------------

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcomed.


### Steps to Contribute:

1.  Fork the repository.
2.  Create a new branch:
    
    bash
    
    Copy code
    
    `git checkout -b feature-branch` 
    
3.  Commit your changes:
    
    bash
    
    Copy code
    
    `git commit -am 'Add new feature'` 
    
4.  Push to the branch:
    
    bash
    
    Copy code
    
    `git push origin feature-branch` 
    
5.  Create a Pull Request.



License
-------

Copyright (c) 2024 Musab Masalmah




Contact
-------

For any inquiries or issues, please contact [musabsoos10@gmail.com](musabsoos10@gmail.com).



