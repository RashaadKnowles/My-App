from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Review, User,Post,SpecificPost
from database.schemas import user_schema, users_schema,reviews_schema,review_schema, post_schema, posts_schema,specific_post_schema,specific_posts_schema


class UserReviewResource(Resource):

    @jwt_required()
    def get(self, user_id):
      
        user_reviews = Review.query.filter_by(review_about_id=user_id)
        return reviews_schema.dump(user_reviews), 200


class PostUserReview(Resource):
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_review = review_schema.load(form_data)
        new_review.written_review_id = user_id
        db.session.add(new_review)
        db.session.commit()
        return review_schema.dump(new_review), 201
    


class GetUserInformation(Resource):
    
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_information = db.one_or_404(
            User.query.filter_by(id=user_id)
            )
        return user_schema.dump(user_information), 200
   

    @jwt_required()
    def put(self):
        user_id = get_jwt_identity()
        user_information = db.one_or_404(
            User.query.filter_by(id=user_id)
            )
        if "name" in request.json:
            user_information.name = request.json['name']
        if "company_name" in request.json:
            user_information.company_name = request.json['company_name']
        if "tier_level" in request.json:
            user_information.tier_level = request.json['tier_level']
        if "phone_number" in request.json:
            user_information.phone_number = request.json['phone_number'] 
        if "email" in request.json:
            user_information.email = request.json['email']
        if "liked_trucks" in request.json:
            user_information.liked_trucks = request.json['liked_trucks']  
        if "bio" in request.json:
            user_information.bio = request.json['bio']
        db.session.commit()
        return user_schema.dump(user_information), 200
    
class SpecificUserId(Resource):
    def get(self, user_id):
        user_information = db.one_or_404(
            User.query.filter_by(id=user_id)
            )
        return user_schema.dump(user_information), 200
   

class PostFeedResource(Resource):
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_post = post_schema.load(form_data)
        new_post.written_review_id = user_id
        db.session.add(new_post)
        db.session.commit()
        return post_schema.dump(new_post), 201

    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_posts = Post.query.filter_by(comment_about_post_id=user_id)
        return posts_schema.dump(user_posts), 200

    def get(self):
        all_posts = Post.query.all()
        if User.is_owner_operator == True:
            Post.query.filter_by('dispatcher' == True)

        return posts_schema.dump(all_posts), 200
    
class DispatcherList(Resource):
    def get(self):
        list_dispatchers = User.query.filter_by(is_owner_operator = False)
        return users_schema.dump(list_dispatchers)
    

class OOList(Resource):
    def get(self):
        list_owner_operator = User.query.filter_by(is_owner_operator = True)
        return users_schema.dump(list_owner_operator)
        


class SpecificPostFeedResource(Resource):
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        specific_new_post = specific_post_schema.load(form_data)
        specific_new_post.written_review_id = user_id
        db.session.add(specific_new_post)
        db.session.commit()
        return specific_post_schema.dump(specific_new_post), 201

    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_posts = SpecificPost.query.filter_by(comment_about_specific_post_id=user_id)
        return specific_posts_schema.dump(user_posts), 200
