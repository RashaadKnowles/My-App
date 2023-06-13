""" Changed Specific post model

Revision ID: 9c8e8eac61ee
Revises: e23e482457e2
Create Date: 2023-06-12 18:03:12.275022

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9c8e8eac61ee'
down_revision = 'e23e482457e2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('specific_post', schema=None) as batch_op:
        batch_op.add_column(sa.Column('post_about_specific_post_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'user', ['post_about_specific_post_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('specific_post', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('post_about_specific_post_id')

    # ### end Alembic commands ###
