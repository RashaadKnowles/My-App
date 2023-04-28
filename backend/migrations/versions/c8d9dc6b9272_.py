"""empty message

Revision ID: c8d9dc6b9272
Revises: 424d39e81e78
Create Date: 2023-04-28 14:14:07.460963

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c8d9dc6b9272'
down_revision = '424d39e81e78'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=225), nullable=False),
    sa.Column('comment_about_post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['comment_about_post_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('post')
    # ### end Alembic commands ###
