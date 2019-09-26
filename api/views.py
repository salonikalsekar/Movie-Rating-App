from flask import Blueprint, request, jsonify
from . import db
from .models import Movie
main = Blueprint('main', __name__)

@main.route('/add_movie', methods = ['POST'])

def add_movie():
    movieData = request.get_json()

    newMovie = Movie(title=movieData['title'], rating = movieData['rating'])
    db.session.add(newMovie)
    db.session.commit()

    return 'Done', 201

@main.route('/movies', methods = ['GET'])

def movies():
    movies = []

    movieslist = Movie.query.all()
    print(movieslist)
    for movie in movieslist:
        movies.append({'title': movie.title , 'rating': movie.rating})
    return jsonify(movies)