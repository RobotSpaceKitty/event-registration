# Event Registration — Multi-Step UI Flow

A polished, responsive, multi-step event registration interface built with **Vite**, **HTML**, **SCSS**, and **modular JavaScript**.  
This project demonstrates front-end architecture, component-based styling, accessibility, and clean UI engineering suitable for real SaaS/event-platform applications.

---

## 🚀 Features

### ✔ Multi-Step Registration Flow

- Step 1: User information
- Step 2: Session selection (cards + checkboxes)
- Step 3: Review + confirmation
- Progress bar with active step indicators

### ✔ Clean, Scalable Front-End Architecture

- SCSS partials (`abstracts`, `base`, `components`, `layout`)
- Reusable mixins + variables
- BEM-friendly class structure
- Global utility classes and CSS resets

### ✔ Responsive & Modern UI

- CSS Grid + Flexbox layouts
- Mobile-first structure
- Smooth transitions + UX polish

### ✔ Accessibility

- Labeled form fields
- Keyboard-friendly step navigation
- Sufficient color contrast
- Reduced-motion respect where applicable

### ✔ Vite-Powered Development

- Lightning-fast HMR
- ES module support
- Optimized production build

---

## 🛠️ Tech Stack

- **HTML5**
- **SCSS (Sass)**
- **Vanilla JavaScript (ES Modules)**
- **Vite**
- **CSS Grid & Flexbox**

---

## Project Structure

event-registration/
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
│
├── public/
│ └── vite.svg
│
└── src/
├── main.js
├── javascript.svg
│
├── js/
│ └── steps.js
│
├── assets/
│ └── images/
│
├── styles/
│ ├── style.scss
│ ├── globals.css
│ │
│ ├── abstracts/
│ │ ├── \_breakpoints.scss
│ │ ├── \_mixins.scss
│ │ └── \_variables.scss
│ │
│ ├── base/
│ │ ├── \_reset.scss
│ │ ├── \_typography.scss
│ │ └── \_utilities.scss
│ │
│ ├── components/
│ │ ├── \_buttons.scss
│ │ ├── \_cards.scss
│ │ ├── \_form.scss
│ │ └── \_progress.scss
│ │
│ └── layout/
│ ├── \_container.scss
│ └── \_grid.scss
├──

## 🧩 How It Works

### **Step Logic**

The file located at:

/src/js/steps.js

is responsible for:

- Showing and hiding each step in the multi-step flow
- Handling the **Next** and **Back** button interactions
- Updating the progress bar to reflect the current step
- Managing the internal state of the step sequence

---

### **Styling**

The main stylesheet:

/src/styles/style.scss

imports all SCSS partials, including:

- **abstracts**

  - `_variables.scss`
  - `_mixins.scss`
  - `_breakpoints.scss`

- **layout**

  - `_container.scss`
  - `_grid.scss`

- **components**

  - `_buttons.scss`
  - `_cards.scss`
  - `_form.scss`
  - `_progress.scss`

- **base**
  - `_reset.scss`
  - `_typography.scss`
  - `_utilities.scss`

These combine to create a scalable, modular, and well-structured front-end architecture.

---

### **Components Included**

- **Buttons**  
  Reusable primary, secondary, and ghost button styles.

- **Form Fields**  
  Custom input styling, focus states, validation-friendly structures.

- **Card UI**  
  Session cards and content blocks built with Flexbox and Grid.

- **Progress Bar**  
  A responsive, animated multi-step indicator.

- **Layout Container + Grid**  
  A consistent spacing and alignment system across all pages.

---
