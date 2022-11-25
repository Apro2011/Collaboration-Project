# Installation Process

1. Download Python 3 into your system.
2. Clone the repository.
3. Use terminal to cd inside the repository directory.
4. Type ``` ls ``` in the terminal and press ```enter``` check if all contents of this repository are there, especially manage.py.
5. Type python -m venv <anything you want>_env in the terminal and press ```enter``` to create virtual environment directory.
6. Type ```source <name of virtual environment directory>/Scripts/activate``` in the terminal and then press ```enter``` to activate virtual environment.
7. Type ```pip install -r requirements.txt``` and press enter. Wait for the required packages to get installed. It won't affect your system as installation is happening
inside virtual environment.
9. Type ```python manage.py runserver``` and press enter to start the server. Press ```Ctrl``` and click the link shown on the terminal to open the webapp.
10. To update the requirements.txt file type ```pip freeze > requirements.txt``` in the terminal and press ```enter```.
