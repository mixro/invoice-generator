# Proforma Invoice Generator - Web Application

![React](https://img.shields.io/badge/React-v18.x-blue)
![Vite](https://img.shields.io/badge/Vite-v5.x-yellow)
![react-to-pdf](https://img.shields.io/badge/react--to--pdf-v1.x-green)

The Proforma Invoice Generator is a React-powered web tool designed to build, view, and save invoices in PDF format. It connects user inputs with automated calculations for totals, taxes, and summaries, offering a simple interface for handling billing details specific to engineering and tech services.

## Table of Contents
- [Introduction](#introduction)
- [Design](#design)
- [Tools Used](#tools-used)
- [Installation Guide](#installation-guide)
- [File Organization](#file-organization)
- [Screens and Elements](#screens-and-elements)
- [User Verification](#user-verification)
- [Data Handling](#data-handling)
- [Validation](#validation)
- [Hosting](#hosting)
- [Issue Resolution](#issue-resolution)
- [Protection Measures](#protection-measures)
- [Upcoming Enhancements](#upcoming-enhancements)
- [Assistance](#assistance)

## Introduction
This web app facilitates the creation of proforma invoices, allowing entry of client info, items, charges, and automatic computation of sums including VAT. Built with React for interactive elements, Vite for quick builds, and react-to-pdf for document export. Highlights include:
- Form-based data entry with expandable item lists.
- Real-time previews of invoice layouts.
- PDF generation matching custom formats.
- Support for currency formatting and tax rates.

## Design
### Elements
- **React Framework**: Constructs the single-page app using modular parts.
- **CSS Styling**: Applies custom rules for layout and appearance.
- **PDF Export**: Utilizes react-to-pdf to convert views to files.
- **Data Flow**: Employs hooks for state and form management.
- **Visuals**: Includes company branding and table displays.

### Folder Layout
```
invoice-generator/
├── public/           # Public assets (e.g., icons)
├── src/              # Core code
│   ├── assets/       # Images and media
│   ├── components/   # Shared UI pieces (e.g., InvoiceForm.tsx)
│   ├── App.tsx       # Central component
│   ├── index.css     # Global styles
│   └── main.tsx      # Startup file
├── index.html        # Base HTML
├── package.json      # Dependencies list
├── tsconfig.json     # TypeScript settings
├── tsconfig.node.json# Vite TypeScript config
└── vite.config.ts    # Build config
```

## Tools Used
- **React**: v18.3.1 - UI construction.
- **Vite**: v5.4.1 - Development server and bundler.
- **react-to-pdf**: v1.0.1 - PDF creation from components.
- **TypeScript**: v5.5.3 - Type safety.

## Installation Guide
1. **Download the code**:
   ```bash
   git clone https://github.com/your-repo/invoice-generator
   cd invoice-generator
   ```
2. **Add packages**:
   ```bash
   npm install
   ```
3. Configure settings in `.env` if needed (none required by default).
4. **Launch locally**:
   ```bash
   npm run dev
   ```
5. View at `http://localhost:5173`.

## File Organization
The app uses a modular setup:
- **Shared Elements**: `InvoiceForm` for inputs, `InvoicePreview` for displays.
- **Main Logic**: `App.tsx` manages previews and exports.
- **Styles**: `index.css` defines visuals consistently.
- **Data**: Local state tracks invoice details.

## Screens and Elements
- **Main Screen**: Form for details, preview area, and export button.
- **Form Component**: Handles entries like numbers, dates, items.
- **Preview Component**: Shows formatted output with tables and totals.

## User Verification
No authentication implemented; suitable for local or single-user scenarios.

## Data Handling
- **React Hooks**: `useState` for form data, `usePDF` for exports.
- **Calculations**: Reduces arrays for sums, applies 18% VAT.

## Validation
- **Configuration**: Add testing tools if desired:
  ```bash
  npm install --save-dev @testing-library/react jest
  ```
- **Execute checks**:
  ```bash
  npm test
  ```
  Covers rendering and interactions.

## Hosting
1. **Build Locally**:
   ```bash
   npm run build
   ```
   Produces files in `dist/`.
2. **Check Build**:
   ```bash
   npm run preview
   ```
3. **Rollout**: Upload `dist/` to platforms like Vercel or GitHub Pages. No backend needed.

## Issue Resolution
- **Form Errors**: Shown via browser alerts.
- **Export Issues**: Log to console for debugging.

## Protection Measures
- **Input Checks**: Browser validation on forms.
- **No External Data**: Client-side only, minimal risks.

## Upcoming Enhancements
- Add item deletion options.
- Support multiple currencies.
- Include print optimizations.

## Assistance
For support, refer to the repository's issue tracker or contact the maintainer via the provided channels in the repository.