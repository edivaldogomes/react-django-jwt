# Django REST Framework with React Project

This project is a web application based on Django REST Framework for the backend and React for the frontend. The combination of these technologies allows the creation of a robust and modern application.

## Project Setup

### Backend (Django REST Framework)

1. Clone this repository:

   ```bash
   git clone https://github.com/edivaldogomes/react-django-jwt.git
   cd your-project
   ```

2. Set up the virtual environment and install dependencies:

   ```bash
   python -m venv venv
   source venv/bin/activate  # For Unix-based systems; for Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. Apply database migrations:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. Start the server:

   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000/`.

### Frontend (React)

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React application:

   ```bash
   npm start
   ```

The frontend application will be available at `http://localhost:3001/`.

## Using the Application

1. Access the Django admin interface at `http://localhost:8000/admin/` to manage backend data.

2. Explore the React application at `http://localhost:3001/` to interact with the user interface.

## Contributions

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a branch for your new feature or bug fix:

   ```bash
   git checkout -b new-feature
   ```

3. Make your changes and ensure tests pass.

4. Push to your branch and create a pull request.

5. Await code review and merge.

Thanks for contributing!

## License
