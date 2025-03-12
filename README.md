# Candidate Management Application

A responsive React application for managing candidate information and their application status.

## Features

- Responsive design for both desktop and mobile views
- Candidate listing with detailed information
- Individual candidate profile views
- Status tracking for applications
- Easy navigation between views
- Interactive UI elements

## Components Structure

### Layout Components
- **Header**: Main navigation header with logo and user profile
- **Sidebar**: Navigation sidebar with dashboard and candidates links

### Main Components
- **Dashboard**: Main listing page showing all candidates
  - Table view for desktop
  - Card view for mobile
  - Search functionality
  - Status indicators

- **CandidateDetail**: Detailed view of individual candidates
  - Basic information
  - Experience details
  - Additional notes section
  - Resume download option

### List Components
- **CandidateRow**: Individual candidate row component for table view
  - Displays name, email, position, and status
  - Status indicators with different colors
  - Click navigation to detailed view

## Technologies Used

- React
- Redux for state management
- React Router for navigation
- Tailwind CSS for styling
- Responsive design principles

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/UI-Expert86/condidate-list.git


## Install dependencies
npm install

## Run the development server here
npm start