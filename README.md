### README.md

```markdown
# Point Concept Ltd Website

## Overview

This is the official website for **Point Concept Ltd**, a company that specializes in architectural and engineering services. The website showcases the company’s projects, services, and clients, offering a clean and responsive one-page layout. It includes sections such as **Home**, **About Us**, **Services**, **Our Clients**, **Portfolio**, and **Contact**.

The site is built with HTML5, CSS3, and JavaScript, using **Bootstrap 5** for responsive layout and **FontAwesome** for icons. It also includes modals and horizontal scrolling features to display client logos and portfolio projects interactively.

## Features

- **Responsive Design**: The site is fully responsive, ensuring a seamless experience across devices.
- **Horizontal Scrolling**: The **Clients** section features horizontal scrolling for client logos, without showing the scrollbar.
- **Interactive Portfolio**: The **Portfolio** section includes a gallery of project images, with modals displaying detailed descriptions and additional pictures.
- **Smooth Navigation**: The sidebar provides quick access to different sections of the page, and the navigation includes smooth scrolling.
- **Hover Effects**: Logos and images have subtle hover effects to enhance user interaction.
- **Cross-Browser Compatibility**: The site is compatible with modern browsers, and the CSS has been optimized for consistent behavior.

## Project Structure

```plaintext
PointConcept/
│
├── Assets/
│   ├── img/               # Images for the website, including client logos and portfolio images
│   ├── Logos/             # Client logos
│   └── Batch1-Batch13/    # Project images for portfolio
│
├── CSS/
│   └── styles.css         # Custom styles for the website
│
├── JS/
│   └── scripts.js         # JavaScript for smooth scrolling, modal, and interactive features
│
├── Index.html             # Main HTML file for the website
├── README.md              # Project documentation (this file)
└── .gitignore             # Gitignore file to exclude unnecessary files from version control
```

## Technologies Used

- **HTML5**: For structuring the website content.
- **CSS3**: Custom styling for the page layout, responsiveness, and hover effects.
- **Bootstrap 5**: For a responsive grid system and pre-built components.
- **JavaScript**: For interactive features, smooth scrolling, and modal functionality.
- **FontAwesome**: For icons used throughout the website.

## Installation & Setup

To run this project locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/point-concept-website.git
    cd point-concept-website
    ```

2. **Open the Project**:
   - You can open the `index.html` file in any browser to view the website locally.

3. **Dependencies**:
   - This project uses **Bootstrap 5** and **FontAwesome** via CDN, so no additional packages need to be installed. Ensure you have internet access to load these external resources.

## Usage

Once the project is set up and opened in the browser, you can explore the following sections:

- **Home**: Introduction to the company with a carousel of images.
- **About Us**: Information about the company’s philosophy, team, and services.
- **Our Clients**: Displays client logos with horizontal scrolling and hover effects.
- **Portfolio**: Showcases past projects with a modal gallery for each project, including images and descriptions.
- **Contact Us**: Provides contact information and an embedded Google Maps location.

## Customization

### Changing Client Logos

To update the client logos:
1. Replace the images in the `Assets/Logos/` directory with new logos.
2. Ensure the file names match those referenced in the `index.html` file, or update the image `src` paths accordingly.

### Adding Portfolio Projects

To add new projects to the **Portfolio** section:
1. Place the project images in one of the `Assets/BatchX/` directories.
2. Update the **Portfolio** section in `index.html` by adding new entries with appropriate `data-bs-toggle` modals and image paths.

### Adjusting Styles

All custom styling is located in the `CSS/styles.css` file. You can modify it to adjust the layout, fonts, colors, or any other aspect of the website's design.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request with your changes. We welcome all improvements!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For any inquiries, please reach out via the **Contact Us** section on the website or send an email to `contact@pointconcept.com`.

```

---

### Key Highlights:
1. **Project Overview**: Describes the purpose and core features of the website.
2. **Project Structure**: Outlines the file organization for easy reference.
3. **Installation & Setup**: Instructions on how to clone and run the project locally.
4. **Customization Instructions**: Guidelines on how to update client logos and add new portfolio projects.
5. **Contributing & License**: Information for contributors and licensing.
