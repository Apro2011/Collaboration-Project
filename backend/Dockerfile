# Dockerfile

# Use python 3.11
FROM python:3.11

# Set Environment Variable
ENV PYTHONUNBUFFERED=1

# Create the Directore for Python Image
RUN mkdir /musicians-project

# Set the directory as Working Directory
WORKDIR /musicians-project

# Add project to working directory
ADD . /musicians-project/

# Install python packages
RUN pip install --no-cache-dir -r requirements.txt

# Create the Database
RUN python manage.py makemigrations
RUN python manage.py migrate

# Expose the Port
EXPOSE 8000

# Start the Server
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]
