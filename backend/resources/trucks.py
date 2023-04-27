from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Review, User
from database.schemas import user_schema, users_schema,reviews_schema,review_schema


class UserReviewResource(Resource):

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_review = review_schema.load(form_data)
        new_review.user_id =user_id
        db.session.add(new_review)
        db.session.commit()
        return review_schema.dump(new_review), 201


    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_reviews = Review.query.filter_by(user_id=user_id)
        return review_schema.dump(user_reviews), 200


class GetUserInformation(Resource):
      def get(self):
            user_id = request.args.get("user_id")
            custom_reponse = {}
            user_reviews = Review.query.filter_by(user_id=user_id)
            custom_reponse["data"] = reviews_schema.dump(user_reviews)
   