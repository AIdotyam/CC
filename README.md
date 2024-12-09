# AI.yam API

## 📖 Description

This back-end provides endpoints for the AI.yam Android application. It sends alerts to various platforms, such as the AI.yam application as push notifications, WhatsApp, and IoT devices.

## 🌟 Entity Relationship Diagram.

![ERD](https://storage.googleapis.com/aidotyam/readme/erd.png)

## 📝 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Git**: Git is required for version control and to clone this repository. You can download and install it from [git-scm.com](https://git-scm.com/).
- **Node.js**: This project requires Node.js. You can download and install it from [nodejs.org](https://nodejs.org/).
- **npm** (Node Package Manager): npm comes with Node.js, but make sure it's up to date.
- **MySQL Database (or any SQL Database)**: You will need a running instance of MySQL or any SQL database for data storage. You can use Google Cloud SQL for managed database services, or you can set up your own SQL database.
- **Cloud Storage**: For storing files and media, this project uses Google Cloud Storage.
- **App Engine**: The project uses Google App Engine for deployment. You must have an active Google Cloud account and enable App Engine in your Google Cloud Console.

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AIdotyam/CC.git
   ```

2. Navigate to the project directory

   ```bash
   cd CC
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Set up environment variables

   ```bash
   nano .env
   ```

   .env file

   ```bash
   DATABASE_URL={your-database-url}
   PORT={your-port}
   BUCKET_NAME={your-bucket-name}
   MODEL_ENDPOINT={your-model-endpoint}
   FONNTE_WA_TOKEN={your-fonnte-wa-token}
   ```

5. Set up the database

   ```bash
   npx prisma migrate dev
   ```

6. Start the server:

   ```bash
   npm start
   ```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
