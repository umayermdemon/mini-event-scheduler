# QuickSched – Client

A responsive React + TypeScript + Tailwind CSS frontend for scheduling and managing events, featuring automatic AI-like categorization.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Screenshots](#screenshots)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This application allows users to create, view, filter, archive, and delete events. Each event is automatically categorized as "Work," "Personal," or "Other" using simple AI-like keyword logic.  
The UI is fully responsive and styled with Tailwind CSS.

---

## Features

- **Add Event:**
  - Title, Date, Time, Notes (optional)
  - Category auto-populated by backend AI logic
- **Event List:**
  - View all events, sorted by date and time
  - Archive, edit, and delete actions
- **Archived Events:**
  - Separate view for archived events
  - Unarchive, edit, and delete actions
- **Category Filter:**
  - Filter events by category
- **Responsive Design:**
  - Optimized for desktop and mobile
- **Error Handling:**
  - Toast notifications for actions and errors

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Notifications:** [sonner](https://sonner.emilkowal.com/)
- **Backend:** Node.js, Express, TypeScript (see `/server`)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Backend API running and accessible

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mini-event-scheduler.git
   cd mini-event-scheduler/client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**  
   Create a `.env` file in `/client`:

   ```
   VITE_SERVER_API=https://your-public-backend-url.com
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Access the app:**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

| Variable        | Description          | Example                 |
| --------------- | -------------------- | ----------------------- |
| VITE_SERVER_API | Backend API base URL | https://api.example.com |

---

## Usage

- **Add Event:** Fill out the form and submit.
- **View Events:** All events are listed and can be filtered by category.
- **Archive/Delete:** Use the action buttons next to each event.
- **Unarchive:** Go to Archived Events and restore as needed.

---

## API Reference

The frontend interacts with these endpoints:

| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| GET    | `/events`     | Fetch all events           |
| POST   | `/events`     | Create a new event         |
| PUT    | `/events/:id` | Archive/unarchive an event |
| DELETE | `/events/:id` | Delete an event            |

See `/server/README.md` for backend details.

---

## Screenshots

_Add screenshots here to showcase UI and features._

---

## Troubleshooting

- **Events not loading:**
  - Check `VITE_SERVER_API` value and backend availability.
  - Ensure backend CORS allows your frontend domain.
- **API errors:**
  - Inspect browser console and network tab for error details.

---

## Contributing

Contributions are welcome!  
Please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

\_For backend setup and API documentation, see the `/server
