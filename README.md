TaskFlow

TaskFlow is a simple full-stack task management application built for small teams. I created it to practice building a complete application where the frontend, backend, database, API validation, and task management features all work together.

The goal was to keep the application simple and functional rather than adding unnecessary features.

Why I Built TaskFlow

I built TaskFlow to understand how a real-world task management system works from end to end.

It allows users to:

Create tasks
Edit task title and description
Delete tasks
Set task priority
Move tasks between columns
Filter tasks by priority
Persist all changes in MongoDB
Refresh the page without losing data

The project also helped me practice connecting a React frontend with a Node.js/Express backend and MongoDB database.

Features
Task Management
Create a new task
Edit an existing task
Delete a task
Move tasks between:
To Do
In Progress
Done
Set priority:
Low
Medium
High
Filtering

Users can filter tasks based on priority to quickly find important tasks.

Data Persistence

Tasks are stored in MongoDB through the backend API, so changes remain available after refreshing the page.

Validation

A task cannot be created without a title. Validation is handled on both the frontend and backend.

Error Handling

Backend request failures are handled and displayed to the user instead of leaving the application in a broken state.

<img width="1521" height="692" alt="Screenshot 2026-08-16 143833" src="https://github.com/user-attachments/assets/67bab73d-7a51-4d57-9aab-b125177dbfd4" />
<img width="1518" height="688" alt="Screenshot 2026-08-16 143859" src="https://github.com/user-attachments/assets/bbec80b5-c75d-49b4-aff2-df1ef145320b" />
<img width="1536" height="695" alt="Screenshot 2026-08-16 143920" src="https://github.com/user-attachments/assets/f22eba83-57f2-42de-ac48-ab0b8a1b4b1d" />


```

How to Use TaskFlow
Open the TaskFlow website.
Go to the Dashboard.
Click Create Task.
Enter a task title.
Optionally add a description.
Select a priority.
Select the column where the task should appear.
Click Create Task.

After creating a task, you can:

Edit it using the edit option.
Delete it using the delete option.
Move it to another column.
Filter tasks by priority.

All changes are saved to the database.

Tech Stack

Frontend: React.js, TypeScript, Tailwind CSS, Vite
Backend: Node.js, Express.js, TypeScript
Database: MongoDB, Mongoose
API: REST API
Deployment: Vercel, Render
Tools: Git, GitHub, Postman
```
```
Project Structure
TaskFlow/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed.ts
│   ├── app.ts
│   └── server.ts
│
└── Frontend/
    ├── src/
    │   ├── components/
    │   ├── layouts/
    │   ├── pages/
    │   ├── App.tsx
    │   └── main.tsx
    ├── public/
    └── package.json

```

Running Locally
```
Clone the repository
git clone <your-repository-url>
cd TaskFlow
Backend
cd Backend
npm install
npm run dev

Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=3000
Seed the database
npm run seed

This creates the initial board, columns, and sample tasks.

Frontend

Open another terminal:

cd Frontend
npm install
npm run dev
```
Then open the local frontend URL shown by Vite.

Future Improvements

If I had more time, I would add:

Drag-and-drop task movement
Task search by title
Task count in each column
Better loading states
More comprehensive backend tests
Authentication and multiple team members
What I Learned

While building TaskFlow, I learned how important it is to handle the complete flow of data:

React UI
   ↓
REST API
   ↓
Express Backend
   ↓
MongoDB

Instead of relying only on frontend state, I focused on making sure task changes were actually persisted in the database and could be retrieved again after refreshing the application.
