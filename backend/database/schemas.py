from flask_marshmallow import Marshmallow
from marshmallow import post_load, fields
from database.models import User, Car, Review, Post

ma = Marshmallow()

# Auth Schemas
class RegisterSchema(ma.Schema):
    """
    Schema used for registration, includes password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    password = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    is_owner_operator = fields.Boolean(required=True)
    class Meta:
        fields = ("id", "username",  "password", "first_name", "last_name", "email", "is_owner_operator")

    @post_load
    def create_user(self, data, **kwargs):
        return User(**data)
    
class UserSchema(ma.Schema):
    """
    Schema used for displaying users, does NOT include password
    """
    id = fields.Integer(primary_key=True)
    username = fields.String(required=True)
    first_name = fields.String(required=True)
    last_name = fields.String(required=True)
    email = fields.String(required=True)
    class Meta:
        fields = ("id", "username", "first_name", "last_name", "email",)

register_schema = RegisterSchema()
user_schema = UserSchema()
users_schema = UserSchema(many=True)


# Car Schemas
class CarSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    make = fields.String(required=True)
    model = fields.String(required=True)
    year = fields.Integer()
    user_id = fields.Integer()
    user = ma.Nested(UserSchema, many=False)
    class Meta:
        fields = ("id", "make", "model", "year", "user_id", "user")
    
    @post_load
    def create_car(self, data, **kwargs):
        return Car(**data)

car_schema = CarSchema()
cars_schema = CarSchema(many=True)


# TODO: Add your schemas below

class UserSchema(ma.Schema):
    
    id = fields.Integer(primary_key=True)
    name = fields.String(required=True)
    company_name = fields.String(required=True)
    tier_level = fields.Integer(required=True)
    phone_number = fields.Integer(required=True)
    email = fields.String(required=True)
    bio = fields.String()
    liked_trucks = fields.String()
    messages = fields.String()
    is_owner_operator = fields.Boolean(required=True)
    class Meta:
        fields = ("id", "name", "company_name", "tier_level", "phone_number", "email", "bio", "liked_trucks", "messages", "is_owner_operator")

    @post_load
    def create_user(self, data, **kwargs):
        return User(**data)
user_schema = UserSchema()
users_schema = UserSchema(many=True)


class ReviewSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    comment = fields.String(required=True)
    written_review_id = fields.Integer()
    review_about_id = fields.Integer()
    written_review = ma.Nested(UserSchema, many=False)
    review_about = ma.Nested(UserSchema, many=False)

    class Meta:
        fields = ("id", "comment","written_review_id", "written_review", "review_about_id", "review_about")

    @post_load
    def create_review(self, data, **kwargs):
        return Review(**data)
review_schema = ReviewSchema()
reviews_schema = ReviewSchema(many=True)



class PostSchema(ma.Schema):
    id = fields.Integer(primary_key=True)
    comment = fields.String(required=True)
    comment_about_post_id = fields.Integer()
    comment_about_post = ma.Nested(UserSchema, many=False)

    class Meta:
        fields = ('id', "comment", "comment_about_post_id", "comment_about_post")

    @post_load
    def create_post(self,data, **kwargs):
        return Post(**data)
post_schema = PostSchema()
posts_schema = PostSchema(many=True)