FROM python:3.11
ENV PYTHONUNBUFFERED=1
RUN mkdir /musicians-project
WORKDIR /musicians-project
ADD . /musicians-project/
RUN pip install --no-cache-dir -r requirements.txt
RUN python manage.py makemigrations
RUN python manage.py migrate
EXPOSE 8000
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]
