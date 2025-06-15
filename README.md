# alx-listing-app-detail

This project is a property listing application built with Next.js and styled using Tailwind CSS. It showcases property details, including descriptions, amenities, reviews, and a booking section.

## Project Structure

- **components/**: Contains reusable React components for the application.
  - **property/**: Contains components related to property details.
    - `BookingSection.tsx`: Displays booking information and reservation options.
    - `PropertyDetail.tsx`: Renders detailed information about a property.
    - `ReviewSection.tsx`: Displays user reviews for the property.

- **constants/**: Contains constant values used throughout the application.
  - `index.ts`: Exports sample property data.

- **interfaces/**: Defines TypeScript interfaces for type safety.
  - `index.ts`: Exports the `PropertyProps` interface.

- **pages/**: Contains the application's pages.
  - **property/**: Contains dynamic property detail pages.
    - `[id].tsx`: Displays the property detail page based on the property ID.

- **public/**: Directory for static assets like images and icons.

- **styles/**: Contains global styles for the application.
  - `globals.css`: Global CSS styles.

- **tailwind.config.js**: Configuration file for Tailwind CSS.

- **tsconfig.json**: TypeScript configuration file.

- **package.json**: Lists dependencies and scripts for the project.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd alx-listing-app-detail
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- Responsive design using Tailwind CSS.
- Dynamic property detail pages based on property ID.
- Booking functionality with date pickers and total payment calculation.
- User reviews section displaying ratings and comments.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.