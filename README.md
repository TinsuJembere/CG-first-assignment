# Interactive 3D Product Viewer (Basic Mesh Edition)

## Project Overview

This project is an interactive 3D product viewer built using **Three.js**. It demonstrates how to construct a "product" entirely from basic geometric meshes (like boxes, cylinders), apply materials and lighting, and enable both manual camera controls and an automated orbital animation. Users can interact with the product by clicking on its parts to see dynamic feedback.

This application serves as a practical exercise, applying foundational concepts from Three.js including scene setup, mesh composition, lighting, raycasting for interaction, camera animation, and responsiveness.

## Live Demo (Optional)

If you deploy your project to GitHub Pages or another hosting service, you can add a link here:
[View Live Demo](YOUR_LIVE_DEMO_URL_HERE)

## Features

The application incorporates the following functionalities:

1.  ### Scene Setup
    * **Scene Initialization:** Configures a standard Three.js scene with a `PerspectiveCamera`, `WebGLRenderer`, and integrates seamlessly with the HTML canvas.
    * **Responsiveness:** The renderer automatically adjusts its size upon window resize.
    * **Controls:** Utilizes `OrbitControls` for intuitive zoom and pan capabilities.

2.  ### 3D Product Creation (Basic Meshes)
    * **Product Composition:** A single "product" (a chair, in this implementation) is constructed using multiple `THREE.Mesh` objects.
    * **Materials:** `MeshStandardMaterial` is used to showcase realistic lighting interactions, including highlights and shadows.
    * **Scene Centering:** The entire product is centered at the origin (0, 0, 0) for consistent camera behavior.

3.  ### Lighting
    * **Ambient Light:** Provides a base level of illumination across the entire scene.
    * **Directional Light:** Casts light from a specific direction, creating distinct highlights and shadows.
    * **Light Positioning:** Lights are strategically placed for visual balance and to enhance the 3D form.

4.  ### Mouse Interaction
    * **Raycasting:** Implements raycasting to detect mouse clicks and hovers on individual parts of the product.
    * **Feedback (Hover):** When a part is hovered over, its color briefly changes to `yellow`, and a small panel appears showing the part's name (e.g., "Chair Seat").
    * **Feedback (Click):** When a part is clicked, its color briefly flashes `red`.

5.  ### Camera Animation
    * **Automatic Rotation:** The camera smoothly orbits horizontally around the product (Y-axis) over time, providing a dynamic view.
    * **User Control Override:** Automatic rotation pauses when the user interacts with the camera controls (zoom, pan, rotate) and resumes shortly after interaction stops.

6.  ### Animation Loop
    * **Render Loop:** Utilizes `requestAnimationFrame` for efficient and smooth rendering.

## Technologies Used

* **Three.js:** The core 3D graphics library.
* **HTML5:** Structure of the web page.
* **CSS3:** Styling for the canvas and information panel.
* **JavaScript (ES Modules):** Application logic and interactivity.

## Setup and Installation

To get this project up and running on your local machine:

1.  **Clone the Repository:**
    ```bash
    https://github.com/TinsuJembere/CG-first-assignment
    ```

2.  **Install Dependencies (Optional, if using `npm` for `serve`):**
    While Three.js is loaded via an import map (CDN) in this setup, you might use `npm` to install a simple local server.
    ```bash
    # If you don't have 'serve' installed globally
    npm install -g serve
    ```

## How to Run

**Important:** Due to browser security restrictions (`file://` protocol limitations for JavaScript modules), you **must** serve this project using a local web server. Double-clicking `index.html` will **not** work.

Here are a few easy ways to start a local server:

### Option 1: Using `serve` (Node.js)

1.  Open your terminal or command prompt.
2.  Navigate to the project's root directory (`3d-product-viewer`).
3.  Run:
    ```bash
    serve
    ```
4.  Open your web browser and go to the address provided by `serve` (e.g., `http://localhost:3000`).

### Option 2: Using Python's HTTP Server

1.  Open your terminal or command prompt.
2.  Navigate to the project's root directory (`3d-product-viewer`).
3.  Run:
    * For Python 3:
        ```bash
        python -m http.server
        ```
    * For Python 2 (less common now):
        ```bash
        python -m SimpleHTTPServer
        ```
4.  Open your web browser and go to `http://localhost:8000`.

### Option 3: VS Code Live Server Extension

1.  If you use Visual Studio Code, install the "Live Server" extension from the Extensions marketplace.
2.  Open the `3d-product-viewer` folder in VS Code.
3.  Right-click on `index.html` in the Explorer panel.
4.  Select "Open with Live Server."

## Usage

Once the application is running in your browser:

* **Rotate View:** Click and drag the **left mouse button** on the chair.
* **Pan View:** Click and drag the **right mouse button** (or `Ctrl` + left-click) on the chair.
* **Zoom In/Out:** Use the **mouse scroll wheel**.
* **Automatic Rotation:** When you stop interacting with the mouse, the camera will automatically begin to orbit the product.
* **Hover Interaction:** Move your mouse over different parts of the chair to see them highlight yellow and display their names.
* **Click Interaction:** Click on any part of the chair to see it briefly flash red.

## Code Structure

The project is organized into modular JavaScript files for clarity and maintainability:
