# Toolbox Project

## Introduction

The "Toolbox" project is a simple web application built using Vue.js. This project includes four main components:
1. **To-Do List**: Allows users to add, view, and delete tasks.
2. **Music Player**: Enables users to search and play songs.
3. **Math Quiz**: Generates random math questions for the user to answer.
4. **Library management**: Allows users to add, search, filter, and delete books.

## Features

### 1. To-Do List
- **Add Task**: Users can add new tasks to their to-do list.
- **View Tasks**: All added tasks are displayed in a list.
- **Delete Task**: Users can remove tasks from their to-do list.

### 2. Music Player
- **Search Song**: Users can search for songs by name.
- **Play Song**: Users can play a selected song.

### 3. Math Quiz
- **Random Question Generation**: The application generates random addition questions.
- **Answer Validation**: Users' answers are checked for correctness, and feedback is provided.

### 4. Library management
- **Add Book**: Users can add books with title, author, categories, and published year.
- **Search Book**: Users can search books by title.
- **Filter Books**: Users can filter books by category.
- **Delete Book**: Users can delete books from the list.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/amirakbari4276/ToolBox.git
    cd toolbox-project
    ```

2. **Set up the local server:**
   
   Ensure you have [json-server](https://github.com/typicode/json-server) installed globally:
     ```bash
     npm install -g json-server
     ```

3. **Run the local server:**
    go to the json folder
    ```bash
    npx json-server books.json
    ```


4. **Run the local server:**
    go to the json folder
    ```bash
    npx json-server db.json --port 3001
    ```

5. **Run the application:**
    ```bash
    npm run dev
    ```

6. **Open your browser with the given link**
