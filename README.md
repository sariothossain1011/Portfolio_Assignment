# Professional Website

A modern, responsive, and interactive personal professional website built with **React.js**. This project is designed to showcase professional experience, skills, projects, resume, blogs, contact information, and other career-related information through a clean and user-friendly interface.

The application is built with React 18 and Create React App, with Redux Toolkit for state management and several modern libraries for UI, animations, forms, notifications, and data handling.

## 🚀 Live Website

**Live Demo:** [sariothossain.vercel.app]

## 📌 About the Project

This professional website serves as a personal portfolio and online professional profile.

It provides visitors with an easy way to:

* Learn about the developer
* View professional skills and experience
* Explore projects
* Read blog posts
* View/download resume information
* Contact the developer
* Navigate through different sections of the website
* Experience responsive and interactive UI components

The project is designed to be scalable and maintainable, making it easy to add new projects, blog posts, skills, and other professional information.

---

## ✨ Features

### 👨‍💻 Professional Profile

* Personal introduction
* Professional summary
* Skills and technologies
* Career information
* Education details
* Work experience

### 💼 Projects

* Showcase professional and personal projects
* Project descriptions
* Technologies used
* Project links
* Responsive project cards and layouts

### 📝 Blog

* Blog listing page
* Individual blog view
* Dynamic blog content
* Pagination support
* Responsive blog layout

### 📄 Resume

* Professional resume section
* Resume information
* Download/view resume functionality
* Professional experience and skills presentation

### 📧 Contact

* Contact form
* Email integration using EmailJS
* Form notifications
* User-friendly success/error feedback


## 🛠️ Technologies Used

### Frontend

* **React.js 18**
* **React DOM**
* **Create React App**
* **React Router DOM**
* **Redux Toolkit**
* **React Redux**
* **Axios**

### UI & Styling

* **Bootstrap 5**
* **React Bootstrap**
* **Styled Components**
* **React Icons**
* **Swiper**

### Animation

* **AOS (Animate On Scroll)**
* **React Simple Typewriter**

### Utilities

* **Moment.js**
* **Cleave.js**
* **React Paginate**
* **React Window**
* **Read Excel File**
* **HTML to Image**
* **React JSON to CSV**
* **React JSON CSV**

### Communication

* **EmailJS**

### Notifications

* **React Toastify**
* **React Bootstrap SweetAlert**

---

## 📂 Project Structure

```text

professionalwebsite-client/

│

├── public/

│   ├── index.html

│   ├── favicon.ico

│   └── assets/

│

├── src/

│   │

│   ├── Components/

│   │   ├── About/

│   │   ├── Blogs/

│   │   ├── Contact/

│   │   ├── Header/

│   │   ├── Resume/

│   │   └── ...

│   │

│   ├── Pages/

│   │   ├── AboutPage.js

│   │   ├── BlogPage.js

│   │   └── ...

│   │

│   ├── Redux/

│   │   ├── store/

│   │   └── slices/

│   │

│   ├── App.js

│   ├── index.js

│   └── ...

│

├── .gitignore

├── package.json

├── package-lock.json

└── README.md

```

> The exact folder structure may vary depending on the current implementation of the project.

---

Check your installed versions:

```bash

node --version

npm --version

```

---

## 🚀 Installation

### 1. Clone the repository

```bash

git clone https://github.com/sariothossain1011/professionalwebsite-client.git

```

### 2. Navigate to the project

```bash

cd professional_website-client

```

### 3. Install dependencies

```bash

npm install

```

### 4. Start the development server

```bash

npm start

```

The application will normally be available at:

```text

http://localhost:3000

```

---

## 🏗️ Build for Production

To create an optimized production build:

```bash

npm run build

```

The production files will be generated inside:

```text

build/

```

---

## 🧪 Run Tests

Run the test suite with:

```bash

npm test

```

---

## 📜 Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm start`     | Starts the development server         |
| `npm run build` | Creates a production build            |
| `npm test`      | Runs the test suite                   |
| `npm run eject` | Ejects Create React App configuration |

> \*\*Note:\*\* `npm run eject` is irreversible. Use it only if you understand the implications of ejecting a Create React App project.

---

## 🔐 Environment Variables

If the project uses external APIs or EmailJS configuration, create a `.env` file in the project root.

Example:

```env

REACT\_APP\_API\_URL=your\_api\_url



REACT\_APP\_EMAILJS\_SERVICE\_ID=your\_service\_id

REACT\_APP\_EMAILJS\_TEMPLATE\_ID=your\_template\_id

REACT\_APP\_EMAILJS\_PUBLIC\_KEY=your\_public\_key

```

Do not commit sensitive credentials or private API keys to GitHub.

For Create React App, environment variables exposed to the browser generally need to start with:

```text

REACT\_APP\_

```

---

## 📧 EmailJS Integration

The contact functionality can use **EmailJS** to send messages directly from the frontend.

Typical configuration includes:

* EmailJS Service ID
* EmailJS Template ID
* EmailJS Public Key

Make sure these values are configured through environment variables rather than hard-coding sensitive configuration into source files.

---

## 🌐 Deployment

This project can be deployed to platforms such as:

* Vercel
* Netlify
* GitHub Pages
* Firebase Hosting
* Any static hosting provider

### Vercel Deployment

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select the appropriate project settings.
4. Use Node.js **24.x**.
5. Build command:

```bash

npm run build

```

6. Output directory:

```text

build

```

Vercel will generate a production deployment after the build completes successfully.

---

## 🔄 Development Workflow

A typical development workflow is:

```bash

git clone <repository-url>



cd professionalwebsite-client



npm install



npm start

```

After making changes:

```bash

npm run build

```

Then commit and push:

```bash

git add .



git commit -m "update: improve professional website"



git push origin master

```

---

## 📱 Responsive Design

The website is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

Bootstrap's responsive utilities and custom styling are used to provide a consistent experience across devices.

---

## 🔧 Customization

You can customize the website by updating:

### Personal Information

Update your:

* Name
* Profile description
* Contact information
* Social media links
* Professional summary

### Skills

Add or remove technologies and professional skills.

### Projects

Add your projects with:

* Project title
* Description
* Technologies
* Screenshots
* GitHub repository
* Live demo

### Blog

Add new blog posts and update existing content.

### Resume

Update:

* Education
* Experience
* Skills
* Certifications
* Professional achievements

---

## 🧹 Code Quality

The project uses ESLint through Create React App.

Run the production build before deployment:

```bash

npm run build

```

This helps identify:

* Unused variables
* Missing accessibility attributes
* React Hook dependency issues
* JSX issues
* Other linting problems

---

## 📦 Main Dependencies

Some of the primary dependencies used in this project include:

```text

React 18

React Router DOM

Redux Toolkit

React Redux

Axios

Bootstrap

React Bootstrap

Styled Components

EmailJS

AOS

Swiper

React Icons

React Toastify

Moment.js

```

---

## 🔮 Future Improvements

Potential future improvements include:

* [ ] Add dark/light theme support
* [ ] Improve SEO
* [ ] Add advanced blog search
* [ ] Add blog categories
* [ ] Improve accessibility
* [ ] Add automated testing
* [ ] Add TypeScript
* [ ] Improve performance and lazy loading
* [ ] Add CMS integration
* [ ] Add backend API integration
* [ ] Add advanced analytics
* [ ] Improve CI/CD workflow

---

## 👨‍💻 Author

**Sariot Hossain**

Web Developer | Software Developer | Technology Enthusiast

GitHub:
https://github.com/sariothossain1011

---

## 📄 License

This project is intended for personal and professional portfolio purposes.

If you want to reuse significant portions of this project, please contact the author first.

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

Thank you for visiting the project!
