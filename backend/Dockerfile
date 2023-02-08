# Use python 3.11
FROM python:alpine

# Set Environment Variable
ENV PYTHONUNBUFFERED=1

# Create the Directore for Python Image
RUN mkdir /musicians-project

# Set the directory as Working Directory
WORKDIR /musicians-project

# Add project to working directory
COPY ./mysite ./mysite
COPY ./users ./users
COPY ./guitar_blog ./guitar_blog
COPY ./migrate.sh .
COPY ./manage.py .
COPY ./requirements.txt .

# Install python packages
RUN pip install --no-cache-dir -r requirements.txt

# Expose the Port
EXPOSE 8000

# Start the Server
ENTRYPOINT ["/bin/sh", "./migrate.sh"]
