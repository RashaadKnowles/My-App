from flask_bcrypt import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    company_name = db.Column(db.String(255), )
    tier_level = db.Column(db.Integer)
    phone_number = db.Column(db.Integer)
    liked_trucks = db.Column(db.String(255))
    bio = db.Column(db.String(255))
    message = db.Column(db.String(255))
    is_owner_operator = db.Column(db.Boolean, nullable=False)
    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return self.username

class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String(255), nullable=False)
    model = db.Column(db.String(255), nullable=False)
    year = db.Column(db.Integer)
    # Adds user_id as an Integer column on the car table which references the id column on user table
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    # Establishes object relation between car-user so we can grab values like car.user.username
    user = db.relationship("User")

# TODO: Add your models below, remember to add a new migration and upgrade database

    
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    written_review_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    review_about_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    written_review = db.relationship("User", foreign_keys=[written_review_id])
    review_about = db.relationship("User",foreign_keys=[review_about_id])
    comment = db.Column(db.String(225), nullable=False)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(225), nullable=False)
    comment_about_post_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    comment_about_post = db.relationship("User",foreign_keys=[comment_about_post_id])


class SpecificPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(225), nullable=False)
    comment_about_specific_post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    comment_about_specific_post = db.relationship("Post",foreign_keys=[comment_about_specific_post_id])
    post_about_specific_post_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_about_specific_post = db.relationship("User",foreign_keys=[post_about_specific_post_id])
