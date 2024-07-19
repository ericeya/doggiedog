# Doggie Dog
 

## Description

This web application provides a platform for all the dog lovers around the world to connect. You can post pictures of your pet and also save any cute pets to your collection to view later. Enjoy the endless pictures of cute dogs!

Deployed Application: [click me!](http://doggiedog.s3-website.us-east-2.amazonaws.com/)


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact-Me](#contact-me)

## Installation

The deployed link is the active site, so installation is not required. BUT if you want to modify our code on your local machine, feel free to clone the repo and run the following commands. 

This front-end react app requires `Django` backend server ([backend repo for this app](https://github.com/ericeya/doggiedog_back)) with AWS S3 bucket, so if you do not have AWS S3 bucket account, you will need to set that up for images to load. Tutorials can be found on youtube.


Install all the npm packages required
```
npm i
```

- Then update URL_PREFIX variable under `src/utils/API.js` to your localhost address (something like below):

    ```javascript
    const URL_PREFIX='http://localhost:8000'
    ```
## Usage

This is like an Instagram for dog owners and dog lovers of all ages and genders. May the short lives enlighten and inspire our days!



## Technologies

- React.js
- CSS
- Javascript
- Django (for backend)
- Sqlite3
- Tailwind CSS
- JWT

## Contributing

Feel free to reach out for any issues, remarks, or feature requests!


## Contact-Me

Contributors contact:

GitHub account: [Eric Lee](https://github.com/ericeya)