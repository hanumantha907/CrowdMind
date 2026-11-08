# CrowdMind – Smart Crowd Flow Predictor for Urban Spaces

CrowdMind is a web-based application designed to monitor and visualize crowd density at different urban locations. It helps users understand crowd distribution and explore crowd information through an interactive map.

## 🚀 Project Overview

CrowdMind combines a React frontend with a Spring Boot backend and PostgreSQL database to manage and display crowd-related information.

## ✨ Features

- Interactive crowd monitoring dashboard.
- Search for locations.
- Display crowd information.
- Interactive map using Leaflet and OpenStreetMap.
- Store crowd observations in PostgreSQL.
- Retrieve historical crowd information.
- REST API integration between frontend and backend.

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML, CSS |
| Build Tool | Vite |
| Backend | Java 21, Spring Boot |
| Database | PostgreSQL |
| ORM | Spring Data JPA, Hibernate |
| Maps | Leaflet, OpenStreetMap |
| API | REST API |
| Version Control | Git, GitHub |

## 📂 Project Structure

```text
CrowdMind/
│
├── CrowdMind_Backend/
│   ├── src/
│   ├── pom.xml
│   └── mvnw
│
├── CrowdMind_Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/hanumantha907/CrowdMind.git
cd CrowdMind
```

### 2. Backend Setup

Requirements:
- Java 21
- PostgreSQL
- Maven (or the included Maven Wrapper)

Create a PostgreSQL database:

```sql
CREATE DATABASE "CrowdMind_db";
```

Configure the database password using an environment variable.

**Windows PowerShell:**

```powershell
$env:DB_PASSWORD="your_postgres_password"
```

**Windows CMD:**

```cmd
set DB_PASSWORD=your_postgres_password
```

Navigate to the backend:

```bash
cd CrowdMind_Backend
```

Run the application:

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd CrowdMind_Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/crowd` | Retrieve crowd information |
| GET | `/api/crowd/history?location=Majestic` | Retrieve historical crowd observations |

## 🏗️ Architecture

```text
React Frontend
      |
      | REST API
      v
Spring Boot Backend
      |
      v
Spring Data JPA
      |
      v
PostgreSQL Database
```

The frontend displays crowd information, while the backend handles API requests and database operations.

## 🎯 Future Enhancements

- Machine learning-based crowd prediction.
- Real-time crowd data integration.
- Crowd density heatmaps.
- Safer route recommendations.
- Push notifications for crowded locations.

## 👨‍💻 Developer

**Hanumantharaju B R**

GitHub: https://github.com/hanumantha907

---

⭐ If you find this project interesting, feel free to explore the repository!