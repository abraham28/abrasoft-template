# Abrasoft Template Website

This website is built with Next.js for the purposes of representing Abrasoft. Below are the instructions to set up and run the project.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:
   `git clone https://github.com/abraham28/abrasoft-template.git`
2. Navigate to the project directory:
   `cd abrasoft-template`
3. Install dependencies:
   `npm install`

### Configuration

#### Example .env.local file [optional]

Create a `.env.local` file in the root of the project with the following variables:

```
NEXT_PUBLIC_API_KEY=your_api_key
NEXT_PUBLIC_BASE_URL=https://api.abrasoft.com
```

Replace `your_api_key` and other necessary variables with the actual values

### Development

To run the project in development mode:
`npm run dev`

This will start the development server, and you can view the website at [http://localhost:3000](http://localhost:3000/).

## Code Linting

Configure husky for pre-commit

`npm run configure-husky`

We use ESLint, Stylelint, Prettier to enforce coding standards in this project. To check the code against these standards, you can run the following command:

`npm run lint`

### Production Build

To build the project for production:
`npm run build`

This command generates the optimized production build in the `.next` folder.

### Start Production Server

To start the production server after building:
`npm run start`

This will start the server and make the website available at [http://localhost:3000](http://localhost:3000/).

### Additional Information

Feel free to modify the content and structure of the website to suit the needs of the Company.

For more information about Next.js, check the [Next.js documentation](https://nextjs.org/docs).
