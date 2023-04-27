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

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    company_name = db.Column(db.String(255), nullable=False)
    tier_level = db.Column(db.Integer)
    email = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.Integer)
    liked_trucks = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.String(255), nullable=False)
    message = db.Column(db.String(255), nullable=False)
    owner_operator = db.Column(db.String(225), nullable=True)
    dispatcher = db.Column(db.String(255), nullable=False)
    is_dispatcher = True
    is_owner_operator = True
    
    


    
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    witten_review_id = db.Column(db.Integer, db.ForeignKey('dispatcher.id'))
    review_about_id = db.Column(db.Integer, db.ForeignKey('owner_operator.id'))
    written_review = db.relationshp("User")
    review_about = db.relationshp("User")
    comment = db.Column(db.String(225), nullable=False)

 




    



