# Code Editor Web App

The Code Editor is a web application that provides a user-friendly interface for writing and running code snippets. It supports multiple programming languages and themes, leveraging the Monaco Editor for an enhanced coding experience.

## Features

- **Code Editing:** Utilizes Monaco Editor to provide a robust code editing experience.
- **Theme Switching:** Toggle between light and dark themes for the editor.
- **Language Selection:** Choose between JavaScript and TypeScript languages.
- **Run and Submit:** Run and submit code with interactive buttons.
- **Result Display:** Displays mock results and submission messages.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-side rendering, routing, and more.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Monaco Editor for React](https://github.com/suren-atoyan/monaco-react#readme) : Use with any React application without needing to use webpack (or rollup/parcel/etc) configuration files / plugins
- [Monaco Editor](https://microsoft.github.io/monaco-editor/): A browser-based code editor from Microsoft.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sushil-1/Code-Editor
   cd code-editor
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Run the development server:**
   
   ```bash
   npm run dev
   ```
 Open http://localhost:3000 to view the application in your browser.

 ## Usage

1. **Open the application** in your browser and click on proceed to code editor button.

2. **Select the programming language** from the dropdown menu (JavaScript or TypeScript).

3. **Toggle the theme** using the "Toggle Theme" button.

4. **Write your code** in the editor.

5. **Run the code** by clicking the "RUN" button. The results will be displayed below the editor.

6. **Submit the code** by clicking the "SUBMIT" button. A submission message will be displayed.


## Deployment

The project is deployed on Vercel. You can visit the live application [here](https://code-editor-khaki.vercel.app/).


