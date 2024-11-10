**Whole Slide Image (WSI) Viewer Application**
A Whole Slide Image (WSI) Viewer application built with React, designed for high-resolution medical image viewing and data analysis. The app provides a detailed, interactive view of medical slides with a variety of features such as dynamic zooming, data display, and report generation, making it a comprehensive tool for medical research and analysis.

**Below is the __FILE STRUCTURE__**
/src
├── /assets                      # Directory for images and static assets
│   └── wsi.png                  # Sample WSI image for the viewer
│
├── /components                  # Directory for reusable components
│   ├── Breadcrumb.jsx           # Breadcrumb navigation component
│   ├── LeftPanel.jsx            # Left panel with data tables (RBC, WBC, Platelets) and search feature
│   ├── MainViewer.jsx           # Main viewer component with OpenSeadragon integration
│   └── PatientModal.jsx         # Modal component for displaying patient details
│
├── App.jsx                      # Main application layout, integrating all components
├── main.jsx                     # Entry point for the React application (Vite specific)
└── index.css                    # Global Tailwind CSS styles


**KEY FUNCTIONALITY**
__App.jsx:__ Manages the main layout, theme switching, and overall application structure.

__LeftPanel.jsx:__ Displays detailed data about RBC, WBC, and Platelets with a search feature.

__MainViewer.jsx:__ Implements the OpenSeadragon viewer for interactive WSI image viewing.

__Breadcrumb.jsx:__ Displays breadcrumb navigation for improved user orientation.

__PatientModal.jsx:__ A modal for showing additional patient details.


**COMPONENT DETAILS**
1. **App.jsx**
**Purpose:** The main application component that manages layout, theme state, and global actions like PDF generation.
__Features:__
_Theme Toggle:_ Allows switching between light and dark modes.
_Report Generation:_ Downloads a multi-page PDF containing the Left Panel data and WSI image.
_Patient Modal:_ Opens a modal with detailed patient information.
2. **LeftPanel.jsx**
**Purpose:** Displays categorized information (RBC, WBC, Platelets) relevant to the WSI.
**Features:**
_Search Bar:_ Filters the data based on user input for quick navigation.
_Dynamic Styling:_ Adjusts appearance based on the selected theme.
3. **MainViewer.jsx**
**Purpose:** Integrates the OpenSeadragon viewer for interactive viewing of the WSI image.
**Features:**
_Zoom and Pan:_ Users can zoom in/out and pan around the slide for detailed inspection.
_Mini-Map Navigator:_ A small navigation map to assist users in large-image navigation.
_Loading Spinner:_ Indicates loading status of the high-resolution image.
4. **Breadcrumb.jsx**
**Purpose:**Adds breadcrumb-style navigation for user orientation within the app.
**Features:**
_Responsive Navigation:_ Adjusts based on the current view and provides quick links to navigate between sections.
5. **PatientModal.jsx**
**Purpose:** A modal popup displaying patient-specific information.
**Features:**
_Dynamic Content:_ Displays patient data in a structured format.
_Themed Styling:_ Consistent with the overall light/dark theme of the app.


**Technical Considerations**
1. **OpenSeadragon Integration:**
The OpenSeadragon viewer in MainViewer.jsx is responsible for high-resolution image rendering, zooming, and panning functionalities.
Custom mini-map integration in HubView.jsx ensures synchronized navigation.

2. **PDF Generation:**
The PDF generation functionality in App.jsx uses html2canvas and jsPDF to capture and export HTML elements as an image.
Multi-page PDF creation includes data from the Left Panel on the first page and the WSI image on the second page.

3. **Search and Filter Logic:**
LeftPanel.jsx implements a simple search function that filters items in RBC, WBC, and Platelets tables based on user input.
The search results are updated dynamically as the user types.

4. **Theming:**
The light and dark themes are managed with conditional styling and CSS classes based on the theme state, allowing for quick adaptation of the entire UI.
