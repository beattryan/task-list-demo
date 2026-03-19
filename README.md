# Task List Demo

A simple example application demonstrating the task-list component from HMPO.

## What This Does

Shows a multi-step form with a task-list interface. Users complete sections (name, contact details, confirm) and the task-list updates to mark sections as complete.

## Getting Started

### Install dependencies
```bash
npm install
```

### Run the app
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

- Navigate through the form steps
- Complete each section
- The task-list marks sections complete automatically via `completesField` option
- Review your answers before submitting

## Tech Stack

- **hmpo-form-wizard** - Form flow and validation
- **hmpo-components** - Task-list and form components
- Express.js - Web server

## Project Structure

```
├── routes/          # Journey step definitions
├── controllers/     # Step logic
├── views/          # Templates
├── config/         # Configuration
└── locales/        # Translations
```
